'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Question {
  question: string;
  options: string[];
  correct: number; // Placeholder
}

export default function TestPage() {
  const [testData, setTestData] = useState<{ category: string; questions: Question[] } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedQuestions = sessionStorage.getItem('testQuestions');
    if (storedQuestions) {
      try {
        const questionsText: string[] = JSON.parse(storedQuestions);
        const formattedQuestions: Question[] = questionsText.map(q => ({
          question: q,
          // Placeholder options as the AI doesn't provide them yet
          options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'], 
          correct: 0, // Placeholder correct answer
        }));
        
        setTestData({
          category: 'Examen Personalizado',
          questions: formattedQuestions,
        });

      } catch (error) {
        console.error("Error parsing questions from sessionStorage", error);
        router.push('/');
      }
    } else {
        // If there are no questions, redirect to home
        router.push('/');
    }
  }, [router]);

  if (!testData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Cargando test...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Test de {testData.category}</CardTitle>
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
              {testData.questions.map((q, qIndex) => (
                <div key={qIndex} className="p-6 bg-light rounded-lg border">
                  <p className="font-semibold mb-4 text-lg">{qIndex + 1}. {q.question}</p>
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
