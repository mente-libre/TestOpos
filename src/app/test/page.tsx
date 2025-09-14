'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useRouter, useSearchParams } from 'next/navigation';
import { getExamById, type Question } from '@/lib/firebase/firestore';
import { Loader2, CheckCircle, XCircle, RefreshCw, Eye } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

type AnswerStatus = 'unanswered' | 'correct' | 'incorrect';

interface AnswerState {
  selectedIndex: number | null;
  status: AnswerStatus;
}

export default function TestPage() {
  const [title, setTitle] = useState<string>('Cargando...');
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const examId = searchParams.get('examId');

  useEffect(() => {
    const fetchExam = async () => {
      setIsLoading(true);
      if (examId) {
        const result = await getExamById(examId);
        if (result.success && result.exam) {
          setQuestions(result.exam.questions);
          setTitle(result.exam.fileName);
          setAnswers(result.exam.questions.map(() => ({ selectedIndex: null, status: 'unanswered' })));
        } else {
          console.error("Failed to load exam:", result.error);
          router.push('/');
        }
      } else {
        router.push('/');
      }
      setIsLoading(false);
    };
    fetchExam();
  }, [examId, router]);
  
  useEffect(() => {
    if (!isLoading && !isFinished) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleFinishTest();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isLoading, isFinished]);

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (isFinished) return;
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = { ...newAnswers[questionIndex], selectedIndex: optionIndex };
      return newAnswers;
    });
  };

  const handleFinishTest = () => {
    setIsFinished(true);
    setAnswers(prevAnswers => {
      return questions!.map((q, index) => {
        const userAnswer = prevAnswers[index];
        const isCorrect = userAnswer.selectedIndex === q.correctAnswerIndex;
        return {
          ...userAnswer,
          status: userAnswer.selectedIndex === null ? 'unanswered' : (isCorrect ? 'correct' : 'incorrect'),
        };
      });
    });
  };

  const handleRestartTest = () => {
    setIsFinished(false);
    setIsReviewMode(false);
    setCurrentQuestionIndex(0);
    setAnswers(questions!.map(() => ({ selectedIndex: null, status: 'unanswered' })));
    setTimeLeft(1200);
  };
  
  const handleReviewAnswers = () => {
    setIsReviewMode(true);
    setCurrentQuestionIndex(0);
  };

  const getOptionClassName = (qIndex: number, oIndex: number) => {
    if (!isReviewMode) return '';
    const question = questions![qIndex];
    const answer = answers[qIndex];

    if (oIndex === question.correctAnswerIndex) {
      return 'border-green-500 bg-green-50';
    }
    if (oIndex === answer.selectedIndex && answer.status === 'incorrect') {
      return 'border-red-500 bg-red-50';
    }
    return '';
  };
  
  const totalQuestions = questions?.length || 0;
  const correctCount = answers.filter(a => a.status === 'correct').length;
  const incorrectCount = answers.filter(a => a.status === 'incorrect').length;
  const unansweredCount = answers.filter(a => a.status === 'unanswered').length;
  const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (isLoading || !questions) {
    return <div className="flex justify-center items-center min-h-screen"><Loader2 className="mr-2 h-8 w-8 animate-spin" /><p>Cargando test...</p></div>;
  }
  
  if (isFinished && !isReviewMode) {
    return (
       <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Resultados del Test</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Has completado el test: {title}</p>
              <div className="text-6xl font-bold text-primary mb-4">{score}%</div>
              <div className="grid grid-cols-3 gap-4 text-center my-6">
                <div>
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <CheckCircle className="h-6 w-6"/>
                    <span className="text-2xl font-bold">{correctCount}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Correctas</p>
                </div>
                 <div>
                  <div className="flex items-center justify-center gap-2 text-red-600">
                    <XCircle className="h-6 w-6"/>
                    <span className="text-2xl font-bold">{incorrectCount}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Incorrectas</p>
                </div>
                 <div>
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <Eye className="h-6 w-6"/>
                    <span className="text-2xl font-bold">{unansweredCount}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Sin responder</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col sm:flex-row gap-4">
              <Button variant="outline" className="w-full" onClick={handleReviewAnswers}>
                <Eye className="mr-2 h-4 w-4" /> Revisar Respuestas
              </Button>
              <Button className="w-full" onClick={handleRestartTest}>
                <RefreshCw className="mr-2 h-4 w-4" /> Volver a Intentar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <CardTitle className="text-xl text-center sm:text-left">{title}</CardTitle>
              <div className="bg-primary/10 text-primary font-bold py-2 px-4 rounded-full">
                  <span>{formatTime(timeLeft)}</span>
              </div>
            </div>
            <div className="mt-4">
                <Progress value={(currentQuestionIndex + 1) / totalQuestions * 100} />
                <p className="text-sm text-muted-foreground mt-2 text-center">{`Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}`}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <p className="font-semibold mb-6 text-lg">{currentQuestion.questionText}</p>
              <RadioGroup
                value={answers[currentQuestionIndex]?.selectedIndex?.toString()}
                onValueChange={(value) => handleSelectOption(currentQuestionIndex, parseInt(value))}
                disabled={isReviewMode}
              >
                <div className="space-y-3">
                  {currentQuestion.options.map((option, oIndex) => (
                    <Label
                        key={oIndex}
                        htmlFor={`q${currentQuestionIndex}-opt${oIndex}`}
                        className={`flex items-start space-x-3 p-4 border rounded-md cursor-pointer hover:bg-primary/5 transition-colors 
                          ${answers[currentQuestionIndex]?.selectedIndex === oIndex ? 'bg-primary/10 border-primary' : ''}
                          ${isReviewMode ? getOptionClassName(currentQuestionIndex, oIndex) : ''}
                        `}
                    >
                        <RadioGroupItem value={String(oIndex)} id={`q${currentQuestionIndex}-opt${oIndex}`} />
                        <span>{option}</span>
                    </Label>
                  ))}
                </div>
              </RadioGroup>
              {isReviewMode && currentQuestion.explanation && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md">
                  <p className="font-semibold">Explicación:</p>
                  <p>{currentQuestion.explanation}</p>
                </div>
              )}
            </div>
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={() => setCurrentQuestionIndex(p => p - 1)} disabled={currentQuestionIndex === 0}>
                Anterior
              </Button>
               {currentQuestionIndex < totalQuestions - 1 ? (
                <Button onClick={() => setCurrentQuestionIndex(p => p + 1)}>Siguiente</Button>
              ) : (
                isReviewMode ? (
                  <Button onClick={handleRestartTest}>Finalizar Revisión</Button>
                ) : (
                  <Button onClick={handleFinishTest}>Finalizar Test</Button>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
