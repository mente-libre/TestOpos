'use client';

import { useEffect, useState, useCallback, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useRouter, useSearchParams } from 'next/navigation';
import { getExamById, generateReviewTest } from '@/app/actions';
import { saveLocalTestResult } from '@/lib/local-storage';
import { type Question, type TestResult } from '@/lib/definitions';
import { Loader2, CheckCircle, XCircle, RefreshCw, Eye, Wand2, Home, AlertTriangle, PlayCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

type AnswerStatus = 'unanswered' | 'correct' | 'incorrect';

interface AnswerState {
  selectedIndex: number | null;
  status: AnswerStatus;
}

interface Results {
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  score: number;
}

// --- Helper Functions ---

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function validateAndTransformQuestions(rawQuestions: any[]): Question[] {
  if (!Array.isArray(rawQuestions)) return [];

  const validQuestions: Question[] = [];

  rawQuestions.forEach((q, index) => {
    let questionText = q.questionText || q.question;
    let options = q.options;
    let correctAnswerIndex = q.correctAnswerIndex;

    // Handle old format where answer is the index
    if (q.answer !== undefined && correctAnswerIndex === undefined) {
        correctAnswerIndex = q.answer;
    }

    if (
      typeof questionText === 'string' &&
      Array.isArray(options) &&
      options.length > 1 &&
      typeof correctAnswerIndex === 'number' &&
      correctAnswerIndex >= 0 &&
      correctAnswerIndex < options.length &&
      options.every(opt => typeof opt === 'string')
    ) {
      validQuestions.push({
        questionText,
        options,
        correctAnswerIndex,
      });
    } else {
        console.warn(`Pregunta descartada en el índice ${index} por formato inválido.`);
    }
  });

  return validQuestions;
}


function calculateResults(questions: Question[], answers: AnswerState[]): Results | null {
  if (!questions || questions.length === 0) return null;
  const totalQuestions = questions.length;
  let correctCount = 0;
  let incorrectCount = 0;

  questions.forEach((_, index) => {
    if (answers[index]?.status === 'correct') correctCount++;
    else if (answers[index]?.status === 'incorrect') incorrectCount++;
  });
  
  const unansweredCount = totalQuestions - correctCount - incorrectCount;
  const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  return { correctCount, incorrectCount, unansweredCount, score };
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function getMotivationalMessage(score: number): string {
  if (score >= 90) return "¡Extraordinario! Tienes un dominio excelente del tema.";
  if (score >= 70) return "¡Muy buen trabajo! Estás en el camino correcto.";
  if (score >= 50) return "¡Aprobado! Sigue esforzándote para consolidar tus conocimientos.";
  return "¡Ánimo! La práctica hace al maestro. Revisa tus respuestas y vuelve a intentarlo.";
}

// --- UI Components ---

const LoaderView = ({ text }: { text: string }) => (
    <div className="flex justify-center items-center min-h-screen"><Loader2 className="mr-2 h-8 w-8 animate-spin" /><p>{text}</p></div>
);

const ErrorView = ({ message }: { message: string }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto text-center">
        <CardHeader>
          <div className="mx-auto bg-red-100 rounded-full p-3"><AlertTriangle className="h-8 w-8 text-red-600" /></div>
          <CardTitle className="text-2xl pt-4">Error al Cargar el Test</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">{message}</p>
          <Link href="/" passHref><Button><Home className="mr-2 h-4 w-4" /> Volver al Inicio</Button></Link>
        </CardContent>
      </Card>
    </div>
  </div>
);

const StartView = ({ title, onStart }: { title: string; onStart: () => void; }) => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto text-center">
                <CardHeader><CardTitle className="text-2xl">Preparado para el Test</CardTitle></CardHeader>
                <CardContent>
                    <p className="text-lg text-muted-foreground mb-4">Has cargado el test:</p>
                    <h2 className="text-2xl font-semibold mb-6">{title}</h2>
                    <Button onClick={onStart} size="lg"><PlayCircle className="mr-2 h-5 w-5" />Comenzar Test</Button>
                </CardContent>
            </Card>
        </div>
    </div>
);

const QuestionView = ({ question, onSelectOption, isAnswered, selectedIndex }: {
    question: Question; onSelectOption: (index: number) => void; isAnswered: boolean; selectedIndex: number | null;
}) => (
    <CardContent>
        <p className="font-semibold mb-6 text-lg">{question.questionText}</p>
        <div className="space-y-3">
            {question.options.map((option, oIndex) => {
                const isThisSelected = selectedIndex === oIndex;
                const isCorrect = question.correctAnswerIndex === oIndex;
                let buttonClassName = 'border-gray-300';
                if (isAnswered) {
                    if (isCorrect) buttonClassName = 'bg-green-100 border-green-500 text-green-800 hover:bg-green-100';
                    else if (isThisSelected) buttonClassName = 'bg-red-100 border-red-500 text-red-800 hover:bg-red-100';
                    else buttonClassName = 'border-gray-300 opacity-70';
                }
                return (
                    <Button key={oIndex} variant="outline" className={`w-full justify-start h-auto py-3 px-4 text-left whitespace-normal transition-all ${buttonClassName}`} disabled={isAnswered} onClick={() => onSelectOption(oIndex)}>
                        <span className='font-bold mr-4'>{String.fromCharCode(97 + oIndex)})</span>
                        <span className='flex-grow'>{option}</span>
                        {isAnswered && isCorrect && <CheckCircle className="h-5 w-5 ml-4 text-green-600 flex-shrink-0" />}
                        {isAnswered && isThisSelected && !isCorrect && <XCircle className="h-5 w-5 ml-4 text-red-600 flex-shrink-0" />}
                    </Button>
                );
            })}
        </div>
    </CardContent>
);


function TestPageContent() {
  type TestState = 'loading' | 'ready' | 'in-progress' | 'finished';
  
  const [title, setTitle] = useState<string>('');
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [testState, setTestState] = useState<TestState>('loading');
  const [error, setError] = useState<string | null>(null);
  const [isGeneratingReview, setIsGeneratingReview] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200);
  const [finalResults, setFinalResults] = useState<Results | null>(null);
  
  const router = useRouter();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const examId = searchParams.get('examId');
  
   useEffect(() => {
    const loadTest = async () => {
      setTestState('loading');
      setError(null);
      try {
        let rawQuestions: any[] | null = null;
        let loadedTitle: string | null = null;

        const sessionQuestions = sessionStorage.getItem('testQuestions');
        const sessionTitle = sessionStorage.getItem('testTitle');

        if (sessionQuestions && sessionTitle) {
          rawQuestions = JSON.parse(sessionQuestions);
          loadedTitle = sessionTitle;
          sessionStorage.removeItem('testQuestions');
          sessionStorage.removeItem('testTitle');
        } else if (examId) {
          const result = await getExamById(examId);
          if (result.success && result.exam) {
            rawQuestions = result.exam.questions;
            loadedTitle = result.exam.fileName;
          } else {
            throw new Error(result.error || 'No se pudo cargar el examen.');
          }
        } else {
          throw new Error("No se ha encontrado ningún test para cargar.");
        }

        if (rawQuestions && loadedTitle) {
            const validatedQuestions = validateAndTransformQuestions(rawQuestions);
            if (validatedQuestions.length === 0) {
                throw new Error("No se encontraron preguntas válidas en los datos del test.");
            }
            shuffleArray(validatedQuestions);
            setQuestions(validatedQuestions);
            setTitle(loadedTitle);
            setAnswers(validatedQuestions.map(() => ({ selectedIndex: null, status: 'unanswered' })));
            setTestState('ready');
        } else {
             throw new Error("No se pudieron cargar las preguntas o el título.");
        }
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'Ha ocurrido un error inesperado.';
        setError(`Error al procesar el test: ${errorMessage}. Inténtalo de nuevo.`);
        setTestState('finished');
      }
    };
    loadTest();
  }, [examId]);
  
  const finishTest = useCallback(() => {
    setTestState('finished');
    if (questions) {
      const results = calculateResults(questions, answers);
      setFinalResults(results);
      if(results) {
        const resultToSave: Omit<TestResult, 'id'> = {
            userId: 'local-user', testTitle: title, score: results.score, correctCount: results.correctCount,
            incorrectCount: results.incorrectCount, unansweredCount: results.unansweredCount,
            totalQuestions: questions.length, createdAt: Date.now()
        };
        saveLocalTestResult(resultToSave);
      }
    }
  }, [questions, answers, title]);

  const goToNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions!.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setIsAnswered(false);
    } else {
      finishTest();
    }
  }, [currentQuestionIndex, questions, finishTest]);

  const handleSelectOption = (selectedIndex: number) => {
    if (isAnswered) return;
    setIsAnswered(true);
    const isCorrect = selectedIndex === questions![currentQuestionIndex].correctAnswerIndex;
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = { selectedIndex, status: isCorrect ? 'correct' : 'incorrect' };
      return newAnswers;
    });
    setTimeout(() => goToNextQuestion(), 1500);
  };
  
  const handleStartTest = () => setTestState('in-progress');

  useEffect(() => {
    if (testState !== 'in-progress' || isAnswered) return;
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
  }, [testState, isAnswered, finishTest]);

  const handleRestartTest = () => window.location.reload();
  const handleReviewAnswers = () => setIsReviewMode(true);

  const handleGenerateReview = async () => {
    if (!questions) return;
    setIsGeneratingReview(true);
    const failedQuestions = questions.filter((_, index) => answers[index]?.status === 'incorrect');
    if (failedQuestions.length === 0) {
      toast({ title: "¡Felicidades!", description: "No has fallado ninguna pregunta." });
      setIsGeneratingReview(false);
      return;
    }
    try {
      const result = await generateReviewTest(failedQuestions);
      if (result.success && result.questions) {
        sessionStorage.setItem('testQuestions', JSON.stringify(result.questions));
        sessionStorage.setItem('testTitle', `Test de Repaso IA: ${title}`);
        router.push('/test');
        window.location.reload();
      } else {
        toast({ variant: "destructive", title: "Error al generar el repaso", description: result.error });
      }
    } catch (e) {
      toast({ variant: "destructive", title: "Error", description: "Problema al conectar con el servicio de IA." });
    } finally {
      setIsGeneratingReview(false);
    }
  };

  const getReviewOptionClassName = (qIndex: number, oIndex: number) => {
    if (!questions) return '';
    const question = questions[qIndex];
    const answer = answers[qIndex];
    if (oIndex === question.correctAnswerIndex) return 'bg-green-100 border-green-500 text-green-800';
    if (oIndex === answer.selectedIndex) return 'bg-red-100 border-red-500 text-red-800';
    return '';
  };
  
  const totalQuestions = questions?.length || 0;
  
  const ResultsView = ({ title, results }: { title: string, results: Results }) => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto text-center">
          <CardHeader><CardTitle className="text-2xl">Resultados del Test</CardTitle></CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Has completado el test: {title}</p>
            <div className="text-6xl font-bold text-primary mb-4">{results.score}%</div>
            <p className="text-lg font-medium mt-4 mb-6">{getMotivationalMessage(results.score)}</p>
            <div className="grid grid-cols-3 gap-4 text-center my-6">
              <div>
                <div className="flex items-center justify-center gap-2 text-green-600"><CheckCircle className="h-6 w-6"/><span className="text-2xl font-bold">{results.correctCount}</span></div>
                <p className="text-sm text-muted-foreground">Correctas</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 text-red-600"><XCircle className="h-6 w-6"/><span className="text-2xl font-bold">{results.incorrectCount}</span></div>
                <p className="text-muted-foreground">Incorrectas</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 text-gray-500"><Eye className="h-6 w-6"/><span className="text-2xl font-bold">{results.unansweredCount}</span></div>
                <p className="text-muted-foreground">Sin responder</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col sm:flex-row gap-4">
            {results.incorrectCount > 0 && (
              <Button variant="outline" className="w-full" onClick={handleGenerateReview} disabled={isGeneratingReview}>
                {isGeneratingReview ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />} Generar Test de Repaso con IA
              </Button>
            )}
            <Button variant="outline" className="w-full" onClick={handleReviewAnswers}><Eye className="mr-2 h-4 w-4" /> Revisar Respuestas</Button>
            <Button className="w-full" onClick={handleRestartTest}><RefreshCw className="mr-2 h-4 w-4" /> Volver a Intentar</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );

  const ReviewView = () => (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">Revisión de: {title}</h1>
                    <Link href="/" passHref><Button variant="outline"><Home className="mr-2 h-4 w-4" /> Volver al inicio</Button></Link>
                </div>
                <div className="space-y-6">
                    {questions!.map((q, qIndex) => (
                        <Card key={qIndex}>
                            <CardHeader>
                                <CardTitle className="flex items-start gap-3">
                                    {answers[qIndex]?.status === 'incorrect' && <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />}
                                    {answers[qIndex]?.status === 'correct' && <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />}
                                    {answers[qIndex]?.status === 'unanswered' && <Eye className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />}
                                    <span className="flex-grow">{qIndex + 1} - {q.questionText}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {q.options.map((option, oIndex) => (
                                        <Label key={oIndex} className={`flex items-start space-x-3 p-4 border rounded-md ${getReviewOptionClassName(qIndex, oIndex)}`}>
                                            <span className='font-bold mr-2'>{String.fromCharCode(97 + oIndex)})</span>
                                            <span>{option}</span>
                                        </Label>
                                    ))}
                                </div>
                                {q.explanation && (
                                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 text-blue-800 rounded-md"><p className="font-semibold">Explicación:</p><p>{q.explanation}</p></div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );

  // --- Render Logic ---

  if (testState === 'loading') return <LoaderView text="Cargando test..." />;
  if (error) return <ErrorView message={error} />;
  if (testState === 'ready') return <StartView title={title} onStart={handleStartTest} />;
  if (testState === 'finished') {
    if (!finalResults) return <LoaderView text="Calculando resultados..." />;
    return isReviewMode ? <ReviewView /> : <ResultsView title={title} results={finalResults} />;
  }
  if (testState === 'in-progress' && questions) {
      const currentQuestion = questions[currentQuestionIndex];
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <CardTitle className="text-xl text-center sm:text-left">{title}</CardTitle>
                  <div className="bg-primary/10 text-primary font-bold py-2 px-4 rounded-full"><span>{formatTime(timeLeft)}</span></div>
                </div>
                <div className="mt-4">
                  <Progress value={((currentQuestionIndex + 1) / totalQuestions) * 100} />
                  <p className="text-sm text-muted-foreground mt-2 text-center">{`Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}`}</p>
                </div>
              </CardHeader>
              <QuestionView 
                question={currentQuestion} onSelectOption={handleSelectOption} isAnswered={isAnswered}
                selectedIndex={answers[currentQuestionIndex]?.selectedIndex ?? null}
              />
            </Card>
          </div>
        </div>
      );
  }
  return <ErrorView message="El estado de la aplicación es inválido. Por favor, refresca la página." />;
}

export default function TestPage() {
  return (
    <Suspense fallback={<LoaderView text="Cargando..." />}>
      <TestPageContent />
    </Suspense>
  );
}
