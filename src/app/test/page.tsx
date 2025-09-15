'use client';

import { useEffect, useState, useCallback } from 'react';
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

type Results = ReturnType<typeof calculateResults>;

function calculateResults(questions: Question[] | null, answers: AnswerState[]) {
  const totalQuestions = questions?.length || 0;
  if (totalQuestions === 0) {
    return { correctCount: 0, incorrectCount: 0, unansweredCount: 0, score: 0 };
  }

  const correctCount = answers.filter(a => a.status === 'correct').length;
  const incorrectCount = answers.filter(a => a.status === 'incorrect').length;
  const unansweredCount = totalQuestions - correctCount - incorrectCount;
  const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return { correctCount, incorrectCount, unansweredCount, score };
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
  const [finalResults, setFinalResults] = useState<Results | null>(null);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const examId = searchParams.get('examId');

  const finishTest = useCallback(() => {
    if (!questions || isFinished) return;

    setIsFinished(true);
    setIsReviewMode(false);

    const finalAnswers = questions.map((q, index) => {
      const userAnswer = index < answers.length ? answers[index] : undefined;
      
      if (!userAnswer || userAnswer.selectedIndex === null) {
        return { selectedIndex: null, status: 'unanswered' as AnswerStatus };
      }
      
      const isCorrect = userAnswer.selectedIndex === q.correctAnswerIndex;
      return {
        ...userAnswer,
        status: isCorrect ? 'correct' as AnswerStatus : 'incorrect' as AnswerStatus,
      };
    });
    setAnswers(finalAnswers);
    setFinalResults(calculateResults(questions, finalAnswers));
  }, [questions, answers, isFinished]);


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
        const sessionQuestions = sessionStorage.getItem('testQuestions');
        const sessionTitle = sessionStorage.getItem('testTitle');
        if (sessionQuestions && sessionTitle) {
          try {
            const parsedQuestions = JSON.parse(sessionQuestions);
            setQuestions(parsedQuestions);
            setTitle(sessionTitle);
            setAnswers(parsedQuestions.map(() => ({ selectedIndex: null, status: 'unanswered' })));
          } catch(e) {
             console.error("Failed to parse questions from session storage", e);
             router.push('/');
          }
        } else {
            router.push('/');
        }
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
            finishTest();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isLoading, isFinished, finishTest]);


  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (isFinished) return;
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = { ...newAnswers[questionIndex], selectedIndex: optionIndex };
      return newAnswers;
    });
  };
  
  const handleFinishTest = () => {
    finishTest();
  };

  const handleRestartTest = () => {
    setIsFinished(false);
    setIsReviewMode(false);
    setCurrentQuestionIndex(0);
    setFinalResults(null);
    if(questions) {
        setAnswers(questions.map(() => ({ selectedIndex: null, status: 'unanswered' })));
    }
    setTimeLeft(1200);
  };
  
  const handleReviewAnswers = () => {
    if (!isFinished) {
        finishTest();
    }
    setIsReviewMode(true);
  };

  const getOptionLabelClassName = (qIndex: number, oIndex: number) => {
    if (!isReviewMode || !questions || qIndex >= questions.length || qIndex >= answers.length) return '';
    const question = questions[qIndex];
    const answer = answers[qIndex];

    const isCorrect = oIndex === question.correctAnswerIndex;
    const isSelected = oIndex === answer.selectedIndex;

    if (isCorrect) {
      return 'bg-green-100 border-green-500';
    }
    if (isSelected && answer.status === 'incorrect') {
      return 'bg-red-100 border-red-500';
    }
    return '';
  };
  
  const totalQuestions = questions?.length || 0;
  
  const ResultsView = ({ title, results }: { title: string, results: Results }) => (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Resultados del Test</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Has completado el test: {title}</p>
              <div className="text-6xl font-bold text-primary mb-4">{results.score}%</div>
              <div className="grid grid-cols-3 gap-4 text-center my-6">
                <div>
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <CheckCircle className="h-6 w-6"/>
                    <span className="text-2xl font-bold">{results.correctCount}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Correctas</p>
                </div>
                 <div>
                  <div className="flex items-center justify-center gap-2 text-red-600">
                    <XCircle className="h-6 w-6"/>
                    <span className="text-2xl font-bold">{results.incorrectCount}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Incorrectas</p>
                </div>
                 <div>
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <Eye className="h-6 w-6"/>
                    <span className="text-2xl font-bold">{results.unansweredCount}</span>
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
  );


  if (isLoading || !questions) {
    return <div className="flex justify-center items-center min-h-screen"><Loader2 className="mr-2 h-8 w-8 animate-spin" /><p>Cargando test...</p></div>;
  }
  
  if (finalResults) {
    if (isReviewMode) {
        return (
          <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                 <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">Revisión de: {title}</h1>
                    <Button onClick={handleRestartTest}>
                      <RefreshCw className="mr-2 h-4 w-4" /> Volver a Intentar
                    </Button>
                </div>
                <div className="space-y-6">
                  {questions.map((q, qIndex) => (
                    <Card key={qIndex}>
                      <CardHeader>
                        <CardTitle className="flex items-start gap-3">
                           {answers[qIndex]?.status === 'incorrect' && <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />}
                           {answers[qIndex]?.status === 'correct' && <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />}
                          <span className="flex-grow">{qIndex + 1} - {q.questionText}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {q.options.map((option, oIndex) => (
                             <Label
                              key={oIndex}
                              className={`flex items-start space-x-3 p-4 border rounded-md 
                                ${getOptionLabelClassName(qIndex, oIndex)}
                              `}
                            >
                               <span className='font-bold mr-2'>{String.fromCharCode(97 + oIndex)})</span>
                               <span>{option}</span>
                            </Label>
                          ))}
                        </div>
                         {q.explanation && (
                          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 text-blue-800 rounded-md">
                            <p className="font-semibold">Explicación:</p>
                            <p>{q.explanation}</p>
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="justify-end">
                          <Button variant="ghost" size="sm">Impugnar Pregunta</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
    return <ResultsView title={title} results={finalResults} />;
  }
  
  if (timeLeft <= 0 && !finalResults) {
    // Timer has run out but results are not yet calculated. Show loading.
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="mr-2 h-8 w-8 animate-spin" />
        <p>Calculando resultados...</p>
      </div>
    );
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
              >
                <div className="space-y-3">
                  {currentQuestion.options.map((option, oIndex) => (
                    <Label
                        key={oIndex}
                        htmlFor={`q${currentQuestionIndex}-opt${oIndex}`}
                        className={`flex items-start space-x-3 p-4 border rounded-md cursor-pointer hover:bg-primary/5 transition-colors 
                          ${answers[currentQuestionIndex]?.selectedIndex === oIndex ? 'bg-primary/10 border-primary' : ''}
                        `}
                    >
                        <RadioGroupItem value={String(oIndex)} id={`q${currentQuestionIndex}-opt${oIndex}`} />
                        <span>{option}</span>
                    </Label>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </CardContent>
           <CardFooter className="flex justify-between mt-8">
              <Button variant="outline" onClick={() => setCurrentQuestionIndex(p => p - 1)} disabled={currentQuestionIndex === 0}>
                Anterior
              </Button>
               {currentQuestionIndex < totalQuestions - 1 ? (
                <Button onClick={() => setCurrentQuestionIndex(p => p + 1)}>Siguiente</Button>
              ) : (
                  <Button onClick={handleFinishTest}>Finalizar Test</Button>
              )}
            </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function formatTime(seconds: number) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

    