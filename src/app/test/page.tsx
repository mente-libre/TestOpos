'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { getExamById, type Question } from '@/lib/firebase/firestore';
import { Loader2 } from 'lucide-react';

export default function TestPage() {
  const [title, setTitle] = useState<string>('Cargando...');
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const examId = searchParams.get('examId');

    if (examId) {
      // Load from Firestore
      const fetchExam = async () => {
        setIsLoading(true);
        const result = await getExamById(examId);
        if (result.success && result.exam) {
          setQuestions(result.exam.questions);
          setTitle(result.exam.fileName);
        } else {
          console.error("Failed to load exam:", result.error);
          router.push('/');
        }
        setIsLoading(false);
      };
      fetchExam();
    } else {
      // Fallback to sessionStorage for immediate tests after upload
      const storedQuestions = sessionStorage.getItem('testQuestions');
      const storedTitle = sessionStorage.getItem('testTitle');
      if (storedQuestions) {
        try {
          setQuestions(JSON.parse(storedQuestions));
          setTitle(storedTitle || 'Examen Personalizado');
          // Clean up session storage after loading
          sessionStorage.removeItem('testQuestions');
          sessionStorage.removeItem('testTitle');
        } catch (error) {
          console.error("Error parsing questions from sessionStorage", error);
          router.push('/');
        }
      } else {
        // If no examId and no sessionStorage, redirect
          router.push('/');
      }
      setIsLoading(false);
    }
  }, [router, searchParams]);

  if (isLoading || !questions) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="mr-2 h-8 w-8 animate-spin" />
        <p>Cargando test...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">{title}</CardTitle>
            <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary font-bold py-2 px-4 rounded-full">
                    <span>10:00</span>
                </div>
                 <Link href="/" passHref>
                    <Button variant="outline">Salir</Button>
                </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {questions.map((q, qIndex) => (
                q && q.options ? (
                  <div key={qIndex} className="p-6 bg-light rounded-lg border">
                    <p className="font-semibold mb-4 text-lg">{qIndex + 1}. {q.questionText}</p>
                    <RadioGroup>
                      <div className="space-y-3">
                        {q.options.map((option, oIndex) => (
                          <Label
                              key={oIndex}
                              htmlFor={`q${qIndex}-opt${oIndex}`}
                              className="flex items-center space-x-3 p-4 border rounded-md cursor-pointer hover:bg-primary/5 has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-colors"
                          >
                              <RadioGroupItem value={String(oIndex)} id={`q${qIndex}-opt${oIndex}`} />
                              <span>{option}</span>
                          </Label>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                ) : null
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <Button size="lg">Finalizar Test</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
