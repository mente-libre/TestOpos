
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getExamsForCategory } from '@/app/actions';
import type { Exam } from '@/lib/definitions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Loader2, Home, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.id as string;

  const [exams, setExams] = useState<Exam[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!categoryId) {
        router.push('/');
        return;
    }
    
    const fetchExams = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await getExamsForCategory(categoryId);
        if (result.success) {
          setExams(result.exams || []);
          setCategoryName(result.categoryName || 'Categoría');
        } else {
          setError(result.error || 'No se pudieron cargar los exámenes.');
        }
      } catch (e) {
        setError('Ocurrió un error al cargar los exámenes.');
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExams();
  }, [categoryId, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="mr-2 h-8 w-8 animate-spin" />
        <p>Cargando exámenes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
        <p className="text-red-500 mb-4">{error}</p>
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
          <Link href="/" passHref>
            <Button variant="outline"><ChevronLeft className="h-4 w-4 mr-2" /> Volver a categorías</Button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-8">Exámenes de: {categoryName}</h1>
        {exams.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {exams.map((exam) => (
               <Link href={`/exam/${exam.id}`} key={exam.id} passHref>
                <Card className="hover:shadow-lg hover:-translate-y-1 transition-transform cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <FileText className="h-8 w-8 text-primary" />
                      <CardTitle className="text-lg leading-tight">{exam.fileName}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{exam.questions.length} preguntas</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Subido el: {new Date(exam.createdAt as number).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">No hay exámenes en esta categoría todavía.</p>
             <Link href="/" passHref>
                <Button variant="link" className="mt-4">Explorar otras categorías</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
