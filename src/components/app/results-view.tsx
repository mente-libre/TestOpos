'use client';

import type { TestQuestion } from '@/app/page';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

type ResultsViewProps = {
  questions: TestQuestion[];
  onRetry: () => void;
  onReset: () => void;
};

export function ResultsView({ questions, onRetry, onReset }: ResultsViewProps) {
  const score = questions.filter(q => q.userAnswer === q.correctAnswer).length;
  const total = questions.length;

  return (
    <Card className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <CardHeader className="text-center items-center">
        <CardTitle className="text-3xl">¡Test Completado!</CardTitle>
        <CardDescription className="text-lg">
          Tu puntuación es:
        </CardDescription>
        <p className="text-6xl font-bold text-primary my-2">{score} / {total}</p>
        <p className="text-muted-foreground text-xs max-w-sm">
            Nota: La corrección automática es una función de demostración. Las respuestas correctas son de ejemplo.
        </p>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4 text-center">Revisión de Respuestas</h3>
        <Accordion type="single" collapsible className="w-full">
          {questions.map((q, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                <div className="flex items-center gap-3 w-full pr-4">
                  {q.userAnswer === q.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive shrink-0" />
                  )}
                  <span className="flex-1 text-left">Pregunta {index + 1}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-3">
                <p className="font-medium">{q.question}</p>
                <p>Tu respuesta: <span className="font-semibold">{q.userAnswer ?? 'No respondida'}</span></p>
                <p>Respuesta correcta: <span className="font-semibold text-green-600">{q.correctAnswer}</span></p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
      <CardFooter className="flex-col sm:flex-row gap-2 justify-center pt-6">
        <Button onClick={onRetry}>Repetir Test</Button>
        <Button onClick={onReset} variant="outline">Subir otros exámenes</Button>
      </CardFooter>
    </Card>
  );
}
