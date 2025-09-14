'use client';

import { useState, useEffect } from 'react';
import type { TestQuestion } from '@/app/page';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { motion, AnimatePresence } from 'framer-motion';

type TestViewProps = {
  questions: TestQuestion[];
  onTestFinish: (answers: TestQuestion[]) => void;
};

export function TestView({ questions, onTestFinish }: TestViewProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<TestQuestion[]>(questions);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const progress = ((currentQuestionIndex) / questions.length) * 100;
  const currentQuestion = userAnswers[currentQuestionIndex];

  useEffect(() => {
    setSelectedOption(userAnswers[currentQuestionIndex].userAnswer);
  }, [currentQuestionIndex, userAnswers]);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onTestFinish(userAnswers);
    }
  };
  
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex].userAnswer = option;
    setUserAnswers(newAnswers);
  };

  return (
    <Card className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <CardHeader>
        <div className='flex justify-between items-center mb-2'>
            <CardTitle>Test en Progreso</CardTitle>
            <CardDescription>Pregunta {currentQuestionIndex + 1} de {questions.length}</CardDescription>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent className="min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg font-semibold mb-6">{currentQuestion.question}</p>
            <RadioGroup value={selectedOption ?? undefined} onValueChange={handleSelectOption} className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <Label 
                  key={index} 
                  htmlFor={`option-${index}`} 
                  className={cn("flex items-center space-x-3 p-3 rounded-md border transition-colors cursor-pointer",
                    selectedOption === option ? "bg-primary/10 border-primary" : "hover:bg-secondary"
                  )}
                >
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <span>Opción {option}</span>
                </Label>
              ))}
            </RadioGroup>
          </motion.div>
        </AnimatePresence>
      </CardContent>
      <CardFooter className="justify-end">
        <Button onClick={handleNext} disabled={selectedOption === null}>
          {currentQuestionIndex < questions.length - 1 ? 'Siguiente' : 'Finalizar Test'}
        </Button>
      </CardFooter>
    </Card>
  );
}
