'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, AlertCircle, Wand2, ArrowLeft, RefreshCw, Info, ArrowRight } from 'lucide-react';
import { generateNewMixedTest } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { type Question } from '@/lib/definitions';
import { CATEGORY_DEFINITIONS } from '@/lib/categories';

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
      const allCategoryIds = CATEGORY_DEFINITIONS.map(c => c.id);
      const params = {
        categories: allCategoryIds,
        numQuestions: 60,
        level: 'Medio',
      };
      const result = await generateNewMixedTest(params);

      if ('error' in result && result.error) {
        setError(result.error);
        setQuestions(null);
      } else if ('test' in result && result.test?.questions) {
        setQuestions(result.test.questions);
        setError(null);
        toast({
            title: '¡Test generado con IA!',
            description: `Se han creado ${result.test.questions.length} preguntas nuevas de temas variados.`,
        });
      } else {
        setError('Ha ocurrido un error inesperado y la respuesta del servidor no tiene el formato esperado.');
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

            {questions && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span>✅ Test Generado con Éxito</span>
                            <div className="space-x-2">
                                <Button variant="secondary" size="sm" onClick={handleGenerateTest} disabled={isProcessing}>
                                    <RefreshCw className="mr-2 h-4 w-4"/>
                                    Volver a generar
                                </Button>
                                <Button size="sm" onClick={handleStartGeneratedTest}>
                                    Iniciar Test
                                    <ArrowRight className="ml-2 h-4 w-4"/>
                                </Button>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Se han generado {questions.length} preguntas sobre temas variados. ¡Mucha suerte!</p>
                    </CardContent>
                </Card>
            )}
        </div>
      </main>
    </div>
  );
}