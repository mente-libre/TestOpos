
'use server';

import { generateTestFromExam } from '@/ai/flows/generate-test-from-exam-flow';
import { generateReviewTest as generateReviewTestFlow } from '@/ai/flows/generate-review-test-flow';
import { type TestResult, type Question, type Exam, type Category } from '@/lib/definitions';
import { getAuth } from 'firebase-admin/auth';
import { db } from '@/lib/firebase/firebase-admin';
import { CATEGORY_DEFINITIONS } from '@/lib/definitions';
import { madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006 } from '@/lib/seed-data';
import { advoGeneralTest } from '@/lib/seed-data-new';
import { officeTest } from '@/lib/seed-data-office';
import { madrid2023Test } from '@/lib/seed-data-madrid-2023';
import { Timestamp } from 'firebase-admin/firestore';


async function getUserId(): Promise<string | null> {
    try {
        // In a real app, you'd get this from the session.
        // As we don't have auth implemented on the server, we'll use a placeholder.
        return 'placeholder-user-id';
    } catch (error) {
        console.error("Auth error in server action:", error);
        return null;
    }
}

export async function getCategories(): Promise<{ success: boolean, categories?: Category[], error?: string }>{
  if (!db) {
    console.warn("getCategories: Firestore is not initialized. Falling back to local data.");
    const fallbackCategories = CATEGORY_DEFINITIONS.map(def => ({
      ...def,
      examCount: [madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006, advoGeneralTest, officeTest, madrid2023Test].filter(e => e.category === def.id).length,
    }));
    return { success: true, categories: fallbackCategories };
  }

  try {
    const examsRef = db.collection('exams');
    const querySnapshot = await examsRef.get();

    const categoryCounts: { [key: string]: number } = {};
    querySnapshot.docs.forEach(doc => {
        const exam = doc.data() as Exam;
        if (exam.category) {
            categoryCounts[exam.category] = (categoryCounts[exam.category] || 0) + 1;
        }
    });

    const categories: Category[] = CATEGORY_DEFINITIONS.map(def => ({
      ...def,
      examCount: categoryCounts[def.id] || 0,
    }));
    
    return { success: true, categories };

  } catch (error) {
    console.error('Error in getCategories:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
};


export async function loadInitialData() {
  try {
    const result = await getCategories();
    
    if (result.success && result.categories) {
       if (result.categories.some(c => c.examCount > 0)) {
         return { success: true, categories: result.categories };
       }
    }
    
    // Fallback if firestore is empty or there was an error
    console.warn("Database is empty or failed to load. Using local fallback data.");
    const seedExams = [madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006, advoGeneralTest, officeTest, madrid2023Test];
    const categoryCounts: { [key: string]: number } = {};

    seedExams.forEach(exam => {
      if (exam.category) {
        categoryCounts[exam.category] = (categoryCounts[exam.category] || 0) + 1;
      }
    });

    const fallbackCategories = CATEGORY_DEFINITIONS.map(def => ({
      ...def,
      examCount: categoryCounts[def.id] || 0,
    }));

    return { success: true, categories: fallbackCategories };

  } catch (error) {
    console.error('Error loading initial data:', error);
    const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado en el servidor al cargar los datos.';
    return { success: false, error: errorMessage };
  }
}

export const getExamsForCategory = async (categoryId: string): Promise<{ success: boolean; exams?: Exam[]; categoryName?: string; error?: string; }> => {
  const categoryName = CATEGORY_DEFINITIONS.find(c => c.id === categoryId)?.name || 'Categoría desconocida';
  const allSeedExams = [madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006, advoGeneralTest, officeTest, madrid2023Test];
  let exams: Exam[] = [];

  if (db) {
      try {
        const examsRef = db.collection('exams');
        const q = examsRef.where('category', '==', categoryId);
        const querySnapshot = await q.get();

        if (!querySnapshot.empty) {
            exams = querySnapshot.docs.map(doc => {
                const data = doc.data();
                const createdAt = data.createdAt;
                return {
                    id: doc.id,
                    ...data,
                    createdAt: createdAt instanceof Timestamp ? createdAt.toMillis() : createdAt,
                } as Exam;
            });
        }
      } catch (error) {
        console.error('Error in getExamsForCategory, falling back to seed data:', error);
        // Fallback to seed data in case of firestore error
      }
  }

  if (exams.length === 0) {
      console.warn(`No exams found in Firestore for category '${categoryId}'. Using local fallback data.`);
      exams = allSeedExams
          .filter(exam => exam.category === categoryId)
          .map((seedExam, index) => ({
              id: `seed-${categoryId}-${index}`,
              userId: 'system',
              fileName: seedExam.fileName,
              category: seedExam.category,
              questions: seedExam.questions,
              createdAt: new Date().getTime(),
          }));
  }

  return { success: true, exams: JSON.parse(JSON.stringify(exams)), categoryName };
};


export async function getQuestionsForCategory(categoryId: string): Promise<{ success: boolean, questions: Question[], error?: string }> {
  const allSeedExams = [madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006, advoGeneralTest, officeTest, madrid2023Test];
  if (!db) {
    console.warn(`getQuestionsForCategory: Firestore not available. Using fallback for category ${categoryId}.`);
    const fallbackQuestions = allSeedExams.filter(e => e.category === categoryId).flatMap(e => e.questions).slice(0, 100);
    return { success: true, questions: fallbackQuestions };
  }

  try {
    const examsRef = db.collection('exams');
    const q = examsRef.where('category', '==', categoryId).limit(10);
    const querySnapshot = await q.get();

    let allQuestions: Question[] = [];
    if (!querySnapshot.empty) {
      allQuestions = querySnapshot.docs
        .flatMap(doc => doc.data().questions as Question[])
        .slice(0, 100);
    }

    if (allQuestions.length === 0) {
      console.warn(`No questions in Firestore for ${categoryId}, using fallback.`);
      allQuestions = allSeedExams.filter(e => e.category === categoryId).flatMap(e => e.questions).slice(0, 100);
    }

    return { success: true, questions: allQuestions };

  } catch (error) {
    console.error(`Error fetching questions for category ${categoryId}:`, error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error.';
    return { success: false, questions: [], error: errorMessage };
  }
}

export async function generateNewTest(category: string) {
    // A robust check to see if the API key is missing or is just a placeholder.
    if (!process.env.GOOGLE_API_KEY || process.env.GOOGLE_API_KEY === 'YOUR_API_KEY_HERE') {
        return { 
            success: false, 
            error: 'La funcionalidad de generación con IA no está configurada. Falta una clave de API de Google válida.' 
        };
    }

    try {
        const questionsResult = await getQuestionsForCategory(category);
        if (!questionsResult.success || questionsResult.questions.length === 0) {
        return {
            success: false,
            error: `No hay suficientes preguntas en la categoría "${category}" para generar un nuevo test. Por favor, elige otra categoría.`
        }
        }

        const context = questionsResult.questions
        .map(q => `Pregunta: ${q.questionText}\nRespuesta Correcta: ${q.options[q.correctAnswerIndex]}`)
        .join('\n---\n');
        
        const generationResult = await generateTestFromExam({
        category,
        context: context
        });

        if (!generationResult?.questions || generationResult.questions.length === 0) {
        return { 
            success: false, 
            error: 'La IA no pudo generar nuevas preguntas con el contexto actual. Inténtalo de nuevo o con otra categoría.' 
        };
        }
        
        return { success: true, questions: generationResult.questions };

    } catch (error) {
        console.error('Error in generateNewTest:', error);
        let errorMessage = 'Ocurrió un error inesperado en el servidor al generar el nuevo test.';
        if (error instanceof Error) {
            const lowerCaseError = error.message.toLowerCase();
            if (lowerCaseError.includes('quota') || lowerCaseError.includes('429')) {
                errorMessage = 'Has alcanzado el límite de peticiones a la IA por ahora. El plan gratuito tiene restricciones de uso. Por favor, espera unos minutos y vuelve a intentarlo.';
            } else if (lowerCaseError.includes('503') || lowerCaseError.includes('overloaded') || lowerCaseError.includes('unavailable')) {
                errorMessage = 'El servicio de IA está sobrecargado en este momento. Por favor, inténtalo de nuevo en unos minutos.';
            }
             else {
                errorMessage = error.message;
            }
        }
        return { 
        success: false, 
        error: errorMessage 
        };
    }
}

export async function generateReviewTest(failedQuestions: Question[]) {
    // A robust check to see if the API key is missing or is just a placeholder.
    if (!process.env.GOOGLE_API_KEY || process.env.GOOGLE_API_KEY === 'YOUR_API_KEY_HERE') {
        return { 
            success: false, 
            error: 'La funcionalidad de IA no está configurada. Falta una clave de API de Google válida.' 
        };
    }

    try {
        if (!failedQuestions || failedQuestions.length === 0) {
        return {
            success: false,
            error: 'No se proporcionaron preguntas para el repaso.'
        };
        }

        const context = failedQuestions
        .map(q => `Pregunta fallada: ${q.questionText}\nRespuesta correcta: ${q.options[q.correctAnswerIndex]}`)
        .join('\n---\n');

        const generationResult = await generateReviewTestFlow({ context });

        if (!generationResult?.questions || generationResult.questions.length === 0) {
        return { 
            success: false, 
            error: 'La IA no pudo generar un test de repaso. Inténtalo de nuevo.' 
        };
        }
        
        return { success: true, questions: generationResult.questions };

    } catch (error) {
        console.error('Error in generateReviewTest:', error);
        let errorMessage = 'Ocurrió un error inesperado al generar el test de repaso.';
        if (error instanceof Error) {
            const lowerCaseError = error.message.toLowerCase();
            if (lowerCaseError.includes('quota') || lowerCaseError.includes('429')) {
                errorMessage = 'Has alcanzado el límite de peticiones a la IA por ahora. El plan gratuito tiene restricciones de uso. Por favor, espera unos minutos y vuelve a intentarlo.';
            } else if (lowerCaseError.includes('503') || lowerCaseError.includes('overloaded') || lowerCaseError.includes('unavailable')) {
                errorMessage = 'El servicio de IA está sobrecargado en este momento. Por favor, inténtalo de nuevo en unos minutos.';
            }
             else {
                errorMessage = error.message;
            }
        }
        return { 
        success: false, 
        error: errorMessage 
        };
    }
}

export async function saveFinishedTest(result: Omit<TestResult, 'id' | 'createdAt'>) {
    if (!db) {
        console.warn("Not saving test result, Firestore not initialized.");
        return { success: true, message: "Result not saved, DB not available." };
    }
    const userId = await getUserId();
    if (!userId) {
        return { success: false, error: "El usuario no está autenticado." };
    }
    try {
        const resultWithUser = { ...result, userId, createdAt: Timestamp.now() };
        await db.collection('testResults').add(resultWithUser);
        return { success: true };
    } catch(error) {
        console.error("Error saving test results", error);
        return { success: false, error: "No se pudo guardar el resultado del test." };
    }
}

export async function loadStatistics() {
    if (!db) {
        console.warn("Cannot load statistics, Firestore not initialized.");
        return { success: false, error: "La base de datos no está disponible." };
    }
    try {
        const userId = await getUserId();
         if (!userId) {
            return { success: false, error: "Debes iniciar sesión para ver tus estadísticas." };
        }
        const resultsRef = db.collection('testResults');
        const q = resultsRef.where('userId', '==', userId).orderBy('createdAt', 'desc');
        const querySnapshot = await q.get();

        const results = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const createdAt = data.createdAt;
            return {
                id: doc.id,
                ...data,
                createdAt: createdAt instanceof Timestamp ? createdAt.toMillis() : createdAt,
            } as TestResult
        });
        return { success: true, stats: results };
    } catch (error) {
        console.error("Error loading statistics", error);
        return { success: false, error: "No se pudieron cargar las estadísticas." };
    }
}


export async function getExamById(examId: string) {
    if (!examId) {
      return { success: false, error: 'Exam ID is required.' };
    }

    // This block handles loading seed data.
    if (examId.startsWith('seed-')) {
        console.warn(`Loading exam '${examId}' from local seed data.`);
        const allSeedExams = [madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006, advoGeneralTest, officeTest, madrid2023Test];
        // e.g., "seed-madrid-0"
        const [, category, indexStr] = examId.split('-');
        const index = parseInt(indexStr, 10);
        
        const categoryExams = allSeedExams.filter(e => e.category === category);
        const seedExam = categoryExams[index];

        if (seedExam) {
            const exam: Exam = {
                id: examId,
                userId: 'system',
                fileName: seedExam.fileName,
                category: seedExam.category,
                questions: seedExam.questions,
                createdAt: new Date().getTime(),
            };
            return { success: true, exam: JSON.parse(JSON.stringify(exam)) };
        } else {
             return { success: false, error: 'No se encontró el examen de ejemplo.' };
        }
    }

    if (!db) {
        return { success: false, error: 'La base de datos no está disponible.' };
    }

    try {
        const examRef = db.collection('exams').doc(examId);
        const docSnap = await examRef.get();

        if (!docSnap.exists) {
        return { success: false, error: 'No se encontró el examen.' };
        }

        const data = docSnap.data();
        
        // Firestore Timestamps need to be converted for JSON serialization
        const plainData = JSON.parse(JSON.stringify(data));

        const exam = { 
            id: docSnap.id, 
            ...plainData,
        } as Exam;
        
        return { success: true, exam: JSON.parse(JSON.stringify(exam)) };
    } catch (error) {
        console.error('Error fetching exam by ID', error)
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: errorMessage };
    }
}

    