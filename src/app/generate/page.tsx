
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, AlertCircle, CheckCircle, Wand2, ArrowLeft, RefreshCw } from 'lucide-react';
import { generateNewTest } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Input } from '@/components/ui/input';

interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

const CATEGORY_DEFINITIONS = [
    { id: "madrid", name: "Comunidad de Madrid" },
    { id: "valencia", name: "Comunidad Valenciana" },
    { id: "andalucia", name: "Andalucía" },
    { id: "estado", name: "Administración del Estado" },
    { id: "otros", name: "Otras" },
];

export default function GeneratePage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [topic, setTopic] = useState<string>('');
  
  const { toast } = useToast();

  const handleGenerateTest = async () => {
    if (!selectedCategory) {
      setError('Por favor, selecciona una categoría para usar como base.');
      return;
    }
     if (!topic) {
      setError('Por favor, especifica un tema para el nuevo test.');
      return;
    }
    
    setIsProcessing(true);
    setQuestions(null);
    setError(null);

    try {
      const result = await generateNewTest(selectedCategory, topic);

      if (result.success && result.questions) {
        setQuestions(result.questions);
        setError(null);
        toast({
            title: '¡Test generado con IA!',
            description: `Se han creado ${result.questions.length} preguntas nuevas sobre "${topic}".`,
        });
      } else {
        let errorMessage = result.error ?? 'Ha ocurrido un error desconocido durante la generación.';
         if (errorMessage.includes('quota')) {
            errorMessage = 'Has excedido tu cuota de uso de la API. Por favor, espera un momento y vuelve a intentarlo.'
        }
        setError(errorMessage);
        setQuestions(null);
      }
    } catch (e: any) {
      console.error(e);
      let errorMessage = 'No se pudo generar el test. Inténtalo de nuevo.';
      if (e.message && e.message.includes('quota')) {
        errorMessage = 'Has excedido la cuota de la API. Por favor, espera un momento y vuelve a intentarlo.'
      }
      setError(errorMessage);
      setQuestions(null);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <Link href="/" passHref><Logo /></Link>
            </div>
            <Link href="/" passHref>
              <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Wand2 className="h-12 w-12 text-primary mx-auto mb-4"/>
            <h1 className="text-4xl font-bold mb-2">Generador de Tests con IA</h1>
            <p className="text-lg text-muted-foreground">Crea exámenes únicos y personalizados a partir de nuestro banco de preguntas.</p>
          </div>
          
          <Card className="mb-8">
              <CardHeader>
                <CardTitle>Configura tu nuevo test</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="examCategory" className="block text-sm font-medium text-gray-700 mb-2">1. Elige una categoría como inspiración</label>
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
                     <div>
                        <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">2. Indica el tema principal</label>
                        <Input 
                            id="topic"
                            placeholder="Ej: La Constitución, Ley 39/2015"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        />
                    </div>
                </div>
                <Button onClick={handleGenerateTest} disabled={isProcessing} className="w-full">
                  {isProcessing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isProcessing ? 'Generando con IA...' : 'Generar 10 preguntas nuevas'}
                </Button>
              </CardContent>
            </Card>

            {error && (
              <Alert variant="destructive" className="mb-8">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error de Generación</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {isProcessing && (
                 <div className="text-center p-8">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary mb-4" />
                    <p className="text-lg text-muted-foreground">La IA está creando tu nuevo test. Esto puede tardar un minuto...</p>
                 </div>
             )}

            {questions && questions.length > 0 && (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                        <h3 className="text-xl font-semibold">Test generado sobre "{topic}"</h3>
                    </div>
                    <Button variant="outline" onClick={handleGenerateTest} disabled={isProcessing}>
                       <RefreshCw className="mr-2 h-4 w-4" /> Regenerar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {questions.map((q, qIndex) => (
                         <div key={qIndex} className="p-4 border rounded-lg bg-gray-50/50">
                            <p className="font-semibold mb-3">{qIndex + 1}. {q.questionText}</p>
                             <div className="space-y-2">
                                {q.options.map((option, oIndex) => (
                                    <div
                                    key={oIndex}
                                    className={`flex items-start text-sm p-3 border rounded-md 
                                        ${oIndex === q.correctAnswerIndex ? 'bg-green-100 border-green-300' : 'bg-white'}`
                                    }
                                    >
                                    <span className='font-bold mr-2'>{String.fromCharCode(97 + oIndex)})</span>
                                    <span>{option}</span>
                                    </div>
                                ))}
                            </div>
                            {q.explanation && (
                                <div className="mt-4 p-3 bg-blue-50 text-blue-800 border border-blue-200 rounded-md text-sm">
                                    <p><strong className="font-semibold">Explicación:</strong> {q.explanation}</p>
                                </div>
                            )}
                         </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

        </div>
      </main>

      <footer className="bg-dark text-white py-6 text-center mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p>© 2024 TestOpos - Generación de Tests con IA</p>
        </div>
      </footer>
    </div>
  );
}
