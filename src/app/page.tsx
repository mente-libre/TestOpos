'use client';

import { useState } from 'react';
import { BrainCircuit } from 'lucide-react';

import { FileUploader } from '@/components/app/file-uploader';
import { TestView } from '@/components/app/test-view';
import { ResultsView } from '@/components/app/results-view';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Types
export type Document = {
  fileName: string;
  questions: string[];
};

export type TestQuestion = {
  question: string;
  options: string[];
  userAnswer: string | null;
  // In a real app, this would be populated from the source
  correctAnswer: string; 
};

export type AppView = 'upload' | 'test' | 'results';

export default function Home() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [view, setView] = useState<AppView>('upload');
  const [testQuestions, setTestQuestions] = useState<TestQuestion[]>([]);

  const handleQuestionsExtracted = (doc: Document) => {
    setDocuments((prevDocs) => [...prevDocs, doc]);
  };

  const startTest = () => {
    const allQuestions = documents.flatMap((doc) => doc.questions);
    if (allQuestions.length === 0) return;

    // Shuffle and pick 90 questions for the test
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, Math.min(90, shuffled.length));

    const formattedTest: TestQuestion[] = selectedQuestions.map((q) => ({
      question: q,
      options: ['A', 'B', 'C', 'D'], // Dummy options
      userAnswer: null,
      correctAnswer: 'A', // Dummy correct answer
    }));
    
    setTestQuestions(formattedTest);
    setView('test');
  };

  const handleTestFinish = (answers: TestQuestion[]) => {
    setTestQuestions(answers);
    setView('results');
  };

  const resetToUpload = () => {
    setView('upload');
    // Optionally reset documents if you want a clean slate
    // setDocuments([]);
  };
  
  const totalQuestions = documents.reduce((acc, doc) => acc + doc.questions.length, 0);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
          <header className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center gap-3 mb-2">
              <BrainCircuit className="h-10 w-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                OposTest IA
              </h1>
            </div>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Sube tus exámenes, extraemos las preguntas y genera tests al instante.
            </p>
          </header>

          {view === 'upload' && (
            <div className="max-w-4xl mx-auto space-y-8">
              <FileUploader onQuestionsExtracted={handleQuestionsExtracted} />
              
              {documents.length > 0 && (
                <Card className="animate-in fade-in duration-500">
                  <CardHeader>
                    <CardTitle>Exámenes Disponibles</CardTitle>
                    <CardDescription>
                      Hemos procesado {documents.length} documento(s) con un total de {totalQuestions} preguntas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {documents.map((doc, index) => (
                        <li key={index} className="text-sm p-3 bg-secondary rounded-md flex items-center justify-between">
                          <span className="font-medium truncate pr-4">{doc.fileName}</span>
                          <span className="text-muted-foreground whitespace-nowrap">{doc.questions.length} preguntas</span>
                        </li>
                      ))}
                    </ul>
                    <Button onClick={startTest} className="w-full mt-6" size="lg" disabled={totalQuestions === 0}>
                      Comenzar Test Aleatorio ({Math.min(90, totalQuestions)} Preguntas)
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {view === 'test' && (
            <TestView
              questions={testQuestions}
              onTestFinish={handleTestFinish}
            />
          )}

          {view === 'results' && (
            <ResultsView questions={testQuestions} onRetry={startTest} onReset={resetToUpload} />
          )}

        </main>
        <footer className="text-center p-4 text-muted-foreground text-sm">
          <p>Creado con ❤️ para Opositores.</p>
        </footer>
      </div>
    </>
  );
}
