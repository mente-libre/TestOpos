
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getExamById } from '@/app/actions';
import { type Exam } from '@/lib/definitions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, List, ChevronLeft, PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function ExamPage() {
  const params = useParams();
  const router = useRouter();
  const examId = params.id as string;

  const [exam, setExam] = useState<Exam | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!examId) {
      router.push('/');
      return;
    }

    const fetchExam = async () => {
      setIsLoading(true);
      setError(null);
      const result = await getExamById(examId);
      if (result.success && result.exam) {
        setExam(result.exam);
      } else {
        setError(result.error || 'No se pudo cargar el examen.');
      }
      setIsLoading(false);
    };

    fetchExam();
  }, [examId, router]);
  
  const handleStartTest = () => {
    router.push(`/test?examId=${examId}`);
  };


  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="mr-2 h-8 w-8 animate-spin" />
        <p>Cargando examen...</p>
      </div>
    );
  }

  if (error || !exam) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
        <p className="text-red-500 mb-4">{error || "No se pudo cargar el examen."}</p>
        <Link href="/" passHref>
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href={exam.category ? `/category/${exam.category}` : '/'} passHref>
            <Button variant="outline"><ChevronLeft className="h-4 w-4 mr-2" /> Volver a la categoría</Button>
          </Link>
        </div>
        
        <Card className="max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl">{exam.fileName}</CardTitle>
                <CardDescription>
                    Este examen tiene <strong>{exam.questions.length} preguntas</strong>. ¿Listo para empezar?
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="mb-6 p-4 bg-light rounded-lg border">
                    <h3 className="font-semibold text-lg mb-3 flex items-center"><List className="h-5 w-5 mr-2"/> Resumen de preguntas</h3>
                    <ul className="list-decimal list-inside space-y-2 text-sm text-muted-foreground max-h-60 overflow-y-auto">
                       {exam.questions.map((q, index) => (
                           <li key={index}>{q.questionText}</li>
                       ))}
                    </ul>
                </div>
            </CardContent>
            <CardFooter>
                <Button size="lg" className="w-full" onClick={handleStartTest}>
                    <PlayCircle className="h-5 w-5 mr-2" />
                    Comenzar Test
                </Button>
            </CardFooter>
        </Card>

      </div>
    </div>
  );
}
