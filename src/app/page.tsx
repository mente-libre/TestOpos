'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileUp, Bot, BarChart3, Upload, User, LogOut, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { onAuthStateChange, signOut } from '@/lib/firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { processAndSaveExam } from '@/app/actions';
import { getExamsForUser, seedInitialDataForUser, type Category } from '@/lib/firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useRouter } from 'next/navigation';

interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

// A plain object to store user info, safe for React state
interface AppUser {
  uid: string;
  displayName: string | null;
  email: string | null;
}

const CATEGORY_DEFINITIONS = [
    { id: "madrid", name: "Comunidad de Madrid" },
    { id: "valencia", name: "Comunidad Valenciana" },
    { id: "andalucia", name: "Andalucía" },
    { id: "estado", name: "Administración del Estado" },
    { id: "otros", name: "Otras" },
];

function Logo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="152"
            height="40"
            viewBox="0 0 152 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M20 36.6667C15.8913 36.6667 11.9677 35.0524 9.03223 32.1169C6.09677 29.1815 4.48239 25.2579 4.48239 21.1492C4.48239 17.0406 6.09677 13.117 9.03223 10.1815C11.9677 7.2461 15.8913 5.63171 20 5.63171C22.6111 5.63171 25.1917 6.13881 27.5555 7.1169C29.9194 8.095 31.9999 9.51381 33.6666 11.2638L30.5555 14.1815C29.2639 12.8222 27.7361 11.7815 26.0277 11.1222C24.3194 10.463 22.1111 10.1815 20 10.1815C16.9861 10.1815 14.2173 11.3552 12.1166 13.5138C10.0159 15.6724 8.96524 18.2579 8.96524 21.1492C8.96524 24.0406 10.0159 26.6261 12.1166 28.7847C14.2173 30.9433 16.9861 32.1169 20 32.1169C22.0277 32.1169 23.9027 31.6724 25.5555 30.8147C27.2083 29.957 28.6111 28.7847 29.6666 27.3847L30.9444 25.295L21.6666 25.295L21.6666 21.2638H35.4166C35.5277 21.8492 35.5833 22.5138 35.5833 23.2315C35.5833 26.9847 34.4027 30.1388 32.1166 32.5524C29.8305 34.966 26.6388 36.6667 20 36.6667ZM15.5833 24.1815L12.7777 21.3761L14.4444 19.7094L18.3333 23.6261L18.3333 3.33333L21.6666 3.33333L21.6666 23.6261L25.5555 19.7094L27.2222 21.3761L20 28.5984L15.5833 24.1815Z"
                fill="#0B4F6C"
            />
            <path
                d="M13.3333 24.1815L16.1389 21.3761L14.4722 19.7094L10.5833 23.6261L10.5833 3.33333L7.24999 3.33333L7.24999 23.6261L3.3611 19.7094L1.69443 21.3761L8.91665 28.5984L13.3333 24.1815Z"
                fill="#10B981"
            />
            <path
                d="M52.0941 26.5417C49.9274 26.5417 48.0524 25.7917 46.5802 24.375C45.1079 22.9583 44.3413 21.1944 44.3413 19.1944C44.3413 17.1944 45.1079 15.4306 46.5802 14.0139C48.0524 12.5972 49.9274 11.875 52.0941 11.875C54.2607 11.875 56.1357 12.5972 57.6079 14.0139C59.0802 15.4306 59.8468 17.1944 59.8468 19.1944C59.8468 21.1944 59.0802 22.9583 57.6079 24.375C56.1357 25.7917 54.2607 26.5417 52.0941 26.5417ZM52.0941 23.5972C53.4274 23.5972 54.5451 23.1111 55.3996 22.1389C56.2541 21.1667 56.6503 20.2778 56.6503 19.1944C56.6503 18.1111 56.2541 17.2222 55.3996 16.25C54.5451 15.2778 53.4274 14.8194 52.0941 14.8194C50.7607 14.8194 49.6357 15.2778 48.7913 16.25C47.9468 17.2222 47.5343 18.1111 47.5343 19.1944C47.5343 20.2778 47.9468 21.1667 48.7913 22.1389C49.6357 23.1111 50.7607 23.5972 52.0941 23.5972Z"
                fill="#0B4F6C"
            />
            <path
                d="M74.0213 26.25C72.3546 26.25 70.9102 25.7639 69.8338 24.8611C68.7574 23.9583 68.1879 22.8472 68.1879 21.5C68.1879 19.6389 68.9102 18.25 70.3338 17.3056C71.7574 16.3611 73.4102 15.875 75.1671 15.875C76.1393 15.875 77.0282 15.9722 77.8338 16.1667L77.8338 15.0139C77.8338 14.0417 77.4727 13.25 76.806 12.6389C76.1393 12.0278 75.1393 11.6944 73.9171 11.6944C72.9449 11.6944 72.056 11.8889 71.2782 12.2917C70.5004 12.6944 69.9171 13.25 69.5838 13.9167L66.7504 12.5C67.3893 11.2778 68.3546 10.375 69.6671 9.80556C70.9796 9.23611 72.4171 8.94444 73.9449 8.94444C76.3893 8.94444 78.2782 9.59722 79.5282 10.9028C80.7782 12.2083 81.4449 13.8889 81.4449 15.8889L81.4449 26H78.2504V24.5C77.5838 25.3333 76.7227 25.8472 75.6949 26.0972C74.6671 26.3472 73.8338 26.25 73.5004 26.25H74.0213ZM74.5282 23.5C75.8615 23.5 76.9727 23.0139 77.8338 22.0972C78.6949 21.1806 78.2504 20.3056 78.2504 19.25V18.7222C77.5282 18.3889 76.7504 18.2222 75.9449 18.2222C74.6949 18.2222 73.7227 18.6111 73.056 19.3889C72.3893 20.1667 72.0838 21.0139 72.0838 21.9167C72.0838 22.5556 72.2921 23.0556 72.7504 23.3889C73.2088 23.7222 73.7782 23.5 74.5282 23.5Z"
                fill="#0B4F6C"
            />
            <path
                d="M93.3678 26.5417C91.2011 26.5417 89.3261 25.7917 87.8539 24.375C86.3816 22.9583 85.615 21.1944 85.615 19.1944C85.615 17.1944 86.3816 15.4306 87.8539 14.0139C89.3261 12.5972 91.2011 11.875 93.3678 11.875C95.5344 11.875 97.4094 12.5972 98.8816 14.0139C100.354 15.4306 101.12 17.1944 101.12 19.1944C101.12 21.1944 100.354 22.9583 98.8816 24.375C97.4094 25.7917 95.5344 26.5417 93.3678 26.5417ZM93.3678 23.5972C94.7011 23.5972 95.8192 23.1111 96.6737 22.1389C97.5282 21.1667 97.9244 20.2778 97.9244 19.1944C97.9244 18.1111 97.5282 17.2222 96.6737 16.25C95.8192 15.2778 94.7011 14.8194 93.3678 14.8194C92.0344 14.8194 90.9094 15.2778 90.065 16.25C89.2205 17.2222 88.808 18.1111 88.808 19.1944C88.808 20.2778 89.2205 21.1667 90.065 22.1389C90.9094 23.1111 92.0344 23.5972 93.3678 23.5972Z"
                fill="#0B4F6C"
            />
            <path
                d="M104.591 9.25H107.785V26H104.591V9.25Z"
                fill="#0B4F6C"
            />
            <path
                d="M125.793 26.25L120.579 17.0694L120.106 17.0694V26H116.912V9.25H121.037L126.106 18.1944L126.579 18.1944L126.579 9.25H129.773V26H125.793Z"
                fill="#0B4F6C"
            />
            <path
                d="M136.082 19.2222C136.082 18.4167 136.318 17.6806 136.755 17.0139C137.193 16.3472 137.825 15.8611 138.62 15.5C139.415 15.1389 140.235 14.9444 141.054 14.9444C141.874 14.9444 142.693 15.1389 143.488 15.5C144.283 15.8611 144.915 16.3472 145.352 17.0139C145.79 17.6806 146.009 18.4167 146.009 19.2222C146.009 20.0278 145.79 20.7639 145.352 21.4306C144.915 22.0972 144.283 22.5833 143.488 22.9444C142.693 23.3056 141.874 23.5 141.054 23.5C140.235 23.5 139.415 23.3056 138.62 22.9444C137.825 22.5833 137.193 22.0972 136.755 21.4306C136.318 20.7639 136.082 20.0278 136.082 19.2222ZM133.009 19.2222C133.009 21.0556 133.568 22.5556 134.644 23.6667C135.721 24.7778 137.144 25.4444 138.852 25.4444C140.56 25.4444 141.983 24.8889 143.068 23.7778C144.152 22.6667 144.707 21.2222 144.707 19.4167L144.707 18.9167C144.707 17.1111 144.152 15.6389 143.068 14.5417C141.983 13.4444 140.56 12.8889 138.852 12.8889C137.144 12.8889 135.721 13.4444 134.644 14.5417C133.568 15.6389 133.009 17.0833 133.009 18.8333L133.009 19.2222Z"
                fill="#0B4F6C"
            />
        </svg>
    )
}

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [user, setUser] = useState<AppUser | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [isProcessing, setIsProcessing] = useState(false);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  
  const { toast } = useToast();
  const router = useRouter();

  // Effect for handling auth and data loading
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChange(async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const appUser: AppUser = {
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
        };
        setUser(appUser);
        
        await seedInitialDataForUser(appUser.uid);
        const result = await getExamsForUser(appUser.uid);

        if (result.success && result.categories) {
          setCategories(result.categories);
        } else {
          console.error("Failed to fetch categories:", result.error);
        }
      } else {
        setUser(null);
        setCategories([]);
      }
      setIsLoading(false);
    });
    
    return () => unsubscribe();
  }, []);

  const handleUploadAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type !== 'application/pdf') {
        toast({
          variant: 'destructive',
          title: 'Error en el archivo',
          description: 'Por favor, selecciona un archivo PDF.',
        });
        return;
      }
      setSelectedFile(file);
      setSelectedFileName(file.name);
      setQuestions(null);
      setError(null);
    }
  };
  
  const fileToDataUri = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleProcessExam = async () => {
    if (!selectedFile) {
      setError('Por favor, selecciona un archivo PDF para procesar.');
      return;
    }
    if (!selectedCategory) {
      setError('Por favor, selecciona una categoría para el examen.');
      return;
    }
    if (!user) {
      setError('Debes iniciar sesión para guardar un examen.');
      return;
    }
    
    setIsProcessing(true);
    setQuestions(null);
    setError(null);

    try {
      const pdfDataUri = await fileToDataUri(selectedFile);
      const result = await processAndSaveExam(pdfDataUri, selectedFile.name, selectedCategory, user.uid);

      if (result.success) {
        setQuestions(result.questions ?? []);
        setError(null);
        toast({
            title: '¡Examen guardado!',
            description: `Se ha guardado en "${CATEGORY_DEFINITIONS.find(c=>c.id === selectedCategory)?.name}".`,
        });
        // Recargar los exámenes y categorías
        if (user) {
            const examsResult = await getExamsForUser(user.uid);
            if (examsResult.success && examsResult.categories) {
                setCategories(examsResult.categories);
            }
        }

      } else {
        let errorMessage = result.error ?? 'Ha ocurrido un error desconocido.';
        if (errorMessage.includes('quota')) {
            errorMessage = 'Has excedido tu cuota de uso de la API. Por favor, espera un momento y vuelve a intentarlo.'
        }
        setError(errorMessage);
        setQuestions(null);
      }
    } catch (e: any) {
      console.error(e);
      let errorMessage = 'No se pudo procesar el archivo. Inténtalo de nuevo.';
      if (e.message && e.message.includes('quota')) {
        errorMessage = 'Has excedido la cuota de la API. Por favor, espera un momento y vuelve a intentarlo.'
      }
      setError(errorMessage);
      setQuestions(null);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleStartTest = () => {
    if (questions) {
      sessionStorage.setItem('testQuestions', JSON.stringify(questions));
      sessionStorage.setItem('testTitle', 'Examen recién subido');
      router.push('/test');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <Logo className="h-8 w-auto"/>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <a href="#upload-section" className="text-secondary font-medium hover:text-primary transition-colors">Inicio</a>
              <a href="#upload-section" className="text-secondary font-medium hover:text-primary transition-colors">Exámenes</a>
              <a href="#" className="text-secondary font-medium hover:text-primary transition-colors">Estadísticas</a>
              <a href="#" className="text-secondary font-medium hover:text-primary transition-colors">Ayuda</a>
            </nav>
            <div className="flex items-center gap-4">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <span>{user.displayName || 'Mi Cuenta'}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Cerrar Sesión</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link href="/login" passHref>
                    <Button variant="outline">Iniciar Sesión</Button>
                  </Link>
                  <Link href="/register" passHref>
                    <Button>Registrarse</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Prepara tus oposiciones con exámenes reales</h1>
            <p className="max-w-3xl mx-auto text-lg text-secondary mb-8">
              Crea, personaliza y gestiona tests de oposiciones a partir de exámenes en PDF. Prepara tus oposiciones de forma eficaz.
            </p>
            <Link href={user ? '#upload-section' : '/register'} passHref>
                <Button size="lg" onClick={() => user && document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  {user ? 'Empezar a subir' : 'Comenzar ahora'}
                </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Cómo funciona</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-transform">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <FileUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Sube tus exámenes</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Sube los PDFs de exámenes anteriores. Organízalos por categoría, comunidad o año.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-transform">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">IA genera tests</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Nuestra IA analiza los documentos y crea tests personalizados con preguntas y respuestas.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-transform">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Analiza tu progreso</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Obtén estadísticas detalladas de tu rendimiento, identifica tus puntos débiles y mejora.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="upload-section" className="py-16 md:py-24 bg-light dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Tus exámenes</h2>
            
            <Card className="mb-12">
              <CardHeader>
                <h3 className="text-xl font-semibold">Subir nuevo examen</h3>
              </CardHeader>
              <CardContent>
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors mb-6"
                  onClick={handleUploadAreaClick}
                >
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4"/>
                  <p className="text-muted-foreground">{selectedFileName ? `Archivo seleccionado: ${selectedFileName}` : 'Haz clic o arrastra aquí tu archivo PDF'}</p>
                  <input ref={fileInputRef} type="file" id="fileInput" accept=".pdf" className="hidden" onChange={handleFileChange} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 items-end">
                    <div>
                        <label htmlFor="examCategory" className="block text-sm font-medium text-gray-700 mb-1">Categoría:</label>
                        <Select onValueChange={setSelectedCategory} value={selectedCategory}>
                            <SelectTrigger id="examCategory">
                                <SelectValue placeholder="Selecciona una categoría" />
                            </SelectTrigger>
                            <SelectContent>
                                {CATEGORY_DEFINITIONS.map(cat => (
                                    <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button onClick={handleProcessExam} disabled={isProcessing || !user}>
                      {isProcessing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {isProcessing ? 'Procesando...' : 'Procesar y Guardar'}
                    </Button>
                </div>
              </CardContent>
            </Card>

            {error && (
              <Alert variant="destructive" className="mb-8">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {questions && questions.length > 0 && (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <h3 className="text-xl font-semibold">Preguntas Extraídas</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">Se han extraído {questions.length} preguntas. ¡Ya puedes comenzar el test!</p>
                  <ul className="list-decimal list-inside space-y-2 mb-6 text-sm">
                    {questions.slice(0, 5).map((q, index) => <li key={index}>{q.questionText}</li>)}
                    {questions.length > 5 && <li className="text-muted-foreground">... y {questions.length - 5} más.</li>}
                  </ul>
                  <Button onClick={handleStartTest}>Comenzar Test</Button>
                </CardContent>
              </Card>
            )}
             {isProcessing && (
                 <div className="flex justify-center items-center p-8">
                    <Loader2 className="mr-2 h-8 w-8 animate-spin" />
                    <p>La IA está leyendo y guardando tu examen...</p>
                 </div>
             )}

            <h3 className="text-2xl font-bold mt-12 mb-6">Tus categorías</h3>
            {isLoading ? (
              <div className="flex justify-center items-center p-8">
                  <Loader2 className="mr-2 h-8 w-8 animate-spin" />
                  <p>Cargando tus datos...</p>
              </div>
            ) : user ? (
                categories.length > 0 ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {categories.map(category => (
                          <Link href={`/category/${category.id}`} key={category.id} passHref>
                             <Card className="hover:shadow-lg hover:-translate-y-1 transition-transform h-full cursor-pointer">
                                <div className="bg-primary text-primary-foreground font-semibold p-4 rounded-t-lg">
                                    {category.name}
                                </div>
                                <CardContent className="pt-6">
                                    <div className="text-4xl font-bold text-primary mb-2">{category.examCount}</div>
                                    <p className="text-muted-foreground">exámenes disponibles</p>
                                </CardContent>
                            </Card>
                          </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground">Aún no has guardado ningún examen. ¡Sube uno para empezar!</p>
                )
            ) : (
                <p className="text-center text-muted-foreground">
                    <Link href="/login" className="text-primary underline">Inicia sesión</Link> para ver tus exámenes guardados.
                </p>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white py-8 text-center mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p>© 2024 Opofy - Preparación inteligente para oposiciones</p>
            <p className="text-sm text-gray-400 mt-2">Una app segura y eficaz para tu preparación</p>
        </div>
      </footer>
    </div>
  );
}
