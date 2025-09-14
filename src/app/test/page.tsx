'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function TestPage() {
  // Datos de ejemplo inspirados en tu maqueta
  const testData = {
    category: 'Comunidad de Madrid',
    questions: [
      {
        question: '¿En qué año se aprobó el Estatuto de Autonomía de la Comunidad de Madrid?',
        options: ['1981', '1983', '1985', '1987'],
        correct: 1,
      },
      {
        question: '¿Cuál de estos no es un órgano administrativo de la Comunidad de Madrid?',
        options: [
          'Consejería de Educación',
          'Consejería de Sanidad',
          'Delegación de Hacienda',
          'Consejería de Transportes',
        ],
        correct: 2,
      },
    ],
  };

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
