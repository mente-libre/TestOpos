
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, AlertCircle, CheckCircle, Wand2, ArrowLeft, RefreshCw, Info } from 'lucide-react';
import { generateNewMixedTest } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { type Question } from '@/lib/definitions';
import { CATEGORY_DEFINITIONS } from '@/lib/definitions';

const isAiAvailable = !!process.env.NEXT_PUBLIC_AI_AVAILABLE;

export default function GeneratePage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const { toast } = useToast();
  const router = useRouter();


  const handleStartGeneratedTest = () => {
    if (!questions || questions.length === 0) return;

    try {
      sessionStorage.setItem('testQuestions', JSON.stringify(questions));
      sessionStorage.setItem('testTitle', `Test General Variado (IA)`);
      router.push('/test');
    } catch (error) {
      console.error('Failed to save generated test to session storage', error);
      setError('No se pudo iniciar el test. Por favor, inténtalo de nuevo.');
    }
  };

  const handleGenerateTest = async () => {
    setIsProcessing(true);
    setQuestions(null);
    setError(null);

    try {
      const result = await generateNewMixedTest();

      if (result.success && result.questions) {
        setQuestions(result.questions);
        setError(null);
        toast({
            title: '¡Test generado con IA!',
            description: `Se han creado ${result.questions.length} preguntas nuevas de temas variados.`,
        });
      } else {
        setError(result.error ?? 'Ha ocurrido un error desconocido durante la generación.');
        setQuestions(null);
      }
    } catch (e: any) {
      console.error(e);
      let errorMessage = 'No se pudo generar el test. Inténtalo de nuevo.';
       if (e.message && (e.message.includes('quota') || e.message.includes('429'))) {
        errorMessage = 'Has alcanzado el límite de peticiones a la IA por ahora. El plan gratuito tiene restricciones de uso. Por favor, espera unos minutos y vuelve a intentarlo.'
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
            <p className="text-lg text-muted-foreground">Crea un examen único y variado de 60 preguntas a partir de todo nuestro banco de temarios.</p>
          </div>
          
          <Card className="mb-8">
              <CardHeader>
                <CardTitle>Generar Test General Variado</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {!isAiAvailable ? (
                    <Alert>
                        <Info className="h-4 w-4" />
                        <AlertTitle>Función no disponible</AlertTitle>
                        <AlertDescription>
                            La generación de tests con IA no está configurada en este entorno. 
                            Para activarla, necesitas añadir una clave de API de Google en las variables de entorno de tu proyecto.
                        </AlertDescription>
                    </Alert>
                ) : (
                    <>
                        <p className="text-muted-foreground">Pulsa el botón para que la IA genere un test de 60 preguntas mezclando todos los temas disponibles. ¡Ideal para un repaso general!</p>
                        <Button onClick={handleGenerateTest} disabled={isProcessing} className="w-full">
                          {isProcessing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          {isProcessing ? 'Generando con IA...' : 'Generar Test de 60 Preguntas'}
                        </Button>
                    </>
                )}
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
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                        <h3 className="text-xl font-semibold">Test General Variado generado</h3>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <Button variant="outline" onClick={handleGenerateTest} disabled={isProcessing} className="flex-1">
                          <RefreshCw className="mr-2 h-4 w-4" /> Regenerar
                        </Button>
                        <Button onClick={handleStartGeneratedTest} className="flex-1">
                          Comenzar Test
                        </Button>
                    </div>
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
