
'use server';

import { generateTestFromExam } from '@/ai/flows/generate-test-from-exam-flow';
import { generateReviewTest as generateReviewTestFlow } from '@/ai/flows/generate-review-test-flow';
import { generateMixedTest as generateMixedTestFlow } from '@/ai/flows/generate-mixed-test-flow';
import { type TestResult, type Question, type Exam, type Category } from '@/lib/definitions';
import { getAuth } from 'firebase-admin/auth';
import { db } from '@/lib/firebase/firebase-admin';
import { CATEGORY_DEFINITIONS } from '@/lib/definitions';
import { madridAdminTest, estadoConstitutionTest, madridAdminTest2, madridAdminTest2006, ebepTest, seguridadSocialTest, tema14Test, ley39Test, ley29Test, ley19Test, ley3Test, madrid2017Test, madrid2023Test, madrid2025Test, ley9Test, ley1Test, constitucionTest, ley9_2017Test, lo3_1983Test } from '@/lib/seed-data';
import { Timestamp } from 'firebase-admin/firestore';
import { headers } from 'next/headers';


async function getUserId(): Promise<string | null> {
    try {
        const authorization = headers().get('Authorization');
        if (authorization?.startsWith('Bearer ')) {
            const idToken = authorization.split('Bearer ')[1];
            const decodedToken = await getAuth().verifyIdToken(idToken);
            return decodedToken.uid;
        }
        return null; // No user logged in
    } catch (error) {
        console.error("Auth error in server action:", error);
        return null;
    }
}

const allSeedExams = [
    madridAdminTest, 
    estadoConstitutionTest, 
    madridAdminTest2, 
    madridAdminTest2006, 
    ebepTest, 
    seguridadSocialTest, 
    tema14Test, 
    ley39Test, 
    ley29Test, 
    ley19Test,
    ley3Test,
    ley9Test,
    madrid2017Test,
    madrid2023Test,
    madrid2025Test,
    ley1Test,
    constitucionTest,
    ley9_2017Test,
    lo3_1983Test,
].filter(Boolean); // Filter out any undefined entries

export async function getCategories(): Promise<{ success: boolean, categories?: Category[], error?: string }>{
  if (!db) {
    console.warn("getCategories: Firestore is not initialized. Falling back to local data.");
    const fallbackCategories = CATEGORY_DEFINITIONS.map(def => ({
      ...def,
      examCount: allSeedExams.filter(e => e && e.category === def.id).length,
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

    // Also count seed exams for a complete picture
    allSeedExams.forEach(exam => {
      if (exam && exam.category) {
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
    let categories: Category[] = [];
    let userCount = 0;

    if (db) {
        try {
            const usersSnapshot = await db.collection('testResults').get();
            const uniqueUsers = new Set(usersSnapshot.docs.map(doc => doc.data().userId));
            userCount = uniqueUsers.size;
            
            const categoriesResult = await getCategories();
            if (categoriesResult.success && categoriesResult.categories) {
                 return { success: true, categories: categoriesResult.categories, userCount };
            }
        } catch (error) {
            console.error('Error loading data from Firestore:', error);
        }
    }
    
    const categoryCounts: { [key: string]: number } = {};
    allSeedExams.forEach(exam => {
      if (exam && exam.category) {
        categoryCounts[exam.category] = (categoryCounts[exam.category] || 0) + 1;
      }
    });

    const fallbackCategories = CATEGORY_DEFINITIONS.map(def => ({
      ...def,
      examCount: categoryCounts[def.id] || 0,
    }));

    return { success: true, categories: fallbackCategories, userCount };

  } catch (error) {
    console.error('Error loading initial data:', error);
    const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error inesperado en el servidor al cargar los datos.';
    return { success: false, error: errorMessage };
  }
}

export const getExamsForCategory = async (categoryId: string): Promise<{ success: boolean; exams: Exam[]; categoryName: string; error?: string; }> => {
  const categoryName = CATEGORY_DEFINITIONS.find(c => c.id === categoryId)?.name || 'Categoría desconocida';
  let exams: Exam[] = [];

  // Combine seed exams with firestore exams, ensuring no duplicates if IDs overlap
  const seedExamsForCategory = allSeedExams
    .filter(exam => exam && exam.category === categoryId)
    .map((seedExam) => ({
        id: `seed-${seedExam.fileName}`,
        userId: 'system',
        fileName: seedExam.fileName,
        category: seedExam.category,
        questions: seedExam.questions,
        createdAt: new Date().getTime(), // Use a consistent timestamp for local data
    }));

  if (db) {
      try {
        const examsRef = db.collection('exams');
        const q = examsRef.where('category', '==', categoryId);
        const querySnapshot = await q.get();

        if (!querySnapshot.empty) {
            const firestoreExams = querySnapshot.docs.map(doc => {
                const data = doc.data();
                const createdAt = data.createdAt;
                return {
                    id: doc.id,
                    ...data,
                    createdAt: createdAt instanceof Timestamp ? createdAt.toMillis() : createdAt,
                } as Exam;
            });
             const examIds = new Set(firestoreExams.map(e => e.id));
             const uniqueSeedExams = seedExamsForCategory.filter(e => !examIds.has(e.id));
             exams = [...firestoreExams, ...uniqueSeedExams];
        } else {
            exams = seedExamsForCategory;
        }
      } catch (error) {
        console.error('Error in getExamsForCategory, falling back to only seed data:', error);
        exams = seedExamsForCategory; // Fallback to only seed data on error
      }
  } else {
      exams = seedExamsForCategory; // No DB, use only seed data
  }
  
  if (exams.length === 0) {
      console.warn(`No exams found anywhere for category '${categoryId}'.`);
  }

  return { success: true, exams: JSON.parse(JSON.stringify(exams)), categoryName };
};


export async function getQuestionsForCategory(categoryId: string): Promise<{ success: boolean, questions: Question[], error?: string }> {
  if (!db) {
    console.warn(`getQuestionsForCategory: Firestore not available. Using fallback for category ${categoryId}.`);
    const fallbackQuestions = allSeedExams.filter(e => e && e.category === categoryId).flatMap(e => e.questions).slice(0, 100);
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
      allQuestions = allSeedExams.filter(e => e && e.category === categoryId).flatMap(e => e.questions).slice(0, 100);
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

export async function generateNewMixedTest() {
    if (!process.env.GOOGLE_API_KEY || process.env.GOOGLE_API_KEY === 'YOUR_API_KEY_HERE') {
        return { 
            success: false, 
            error: 'La funcionalidad de generación con IA no está configurada. Falta una clave de API de Google válida.' 
        };
    }

    try {
        // Gather a sample of questions from all seed exams
        const allQuestions = allSeedExams.flatMap(exam => exam.questions);
        
        // Shuffle and take a sample of 100 questions for context to avoid overly large payloads
        const shuffled = allQuestions.sort(() => 0.5 - Math.random());
        const sampledQuestions = shuffled.slice(0, 100);

        if (sampledQuestions.length === 0) {
            return {
                success: false,
                error: 'No hay preguntas disponibles para generar un test variado.'
            };
        }

        const context = sampledQuestions
            .map(q => `Pregunta: ${q.questionText}\nRespuesta Correcta: ${q.options[q.correctAnswerIndex]}`)
            .join('\n---\n');
        
        const generationResult = await generateMixedTestFlow({ context });

        if (!generationResult?.questions || generationResult.questions.length === 0) {
            return { 
                success: false, 
                error: 'La IA no pudo generar un test variado. Inténtalo de nuevo.' 
            };
        }
        
        return { success: true, questions: generationResult.questions };

    } catch (error) {
        console.error('Error in generateNewMixedTest:', error);
        let errorMessage = 'Ocurrió un error inesperado al generar el test variado.';
        if (error instanceof Error) {
            const lowerCaseError = error.message.toLowerCase();
            if (lowerCaseError.includes('quota') || lowerCaseError.includes('429')) {
                errorMessage = 'Has alcanzado el límite de peticiones a la IA por ahora. El plan gratuito tiene restricciones de uso. Por favor, espera unos minutos y vuelve a intentarlo.';
            } else if (lowerCaseError.includes('503') || lowerCaseError.includes('overloaded') || lowerCaseError.includes('unavailable')) {
                errorMessage = 'El servicio de IA está sobrecargado en este momento. Por favor, inténtalo de nuevo en unos minutos.';
            } else {
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
        console.warn("Not saving test result, user not authenticated.");
        return { success: true, message: "Result not saved, user not authenticated." };
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
        return { success: false, error: "La base de datos no está disponible. No se pueden cargar las estadísticas." };
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


function findTestByName(fileName: string) {
    return allSeedExams.find(e => e && e.fileName === fileName);
}

export async function getExamById(examId: string) {
    if (!examId) {
      return { success: false, error: 'Exam ID is required.' };
    }

    if (examId.startsWith('seed-')) {
        const testName = decodeURIComponent(examId.replace(/^seed-/, ''));
        const seedExam = findTestByName(testName);
        
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
        }
    }

    if (!db) {
        return { success: false, error: 'La base de datos no está disponible. No se pueden cargar exámenes personalizados.' };
    }

    try {
        const examRef = db.collection('exams').doc(examId);
        const docSnap = await examRef.get();

        if (!docSnap.exists) {
            return { success: false, error: 'No se encontró el examen.' };
        }

        const data = docSnap.data();
        if (!data) {
            return { success: false, error: 'Datos del examen no encontrados.' };
        }

        const createdAt = data.createdAt;
        const exam: Exam = { 
            id: docSnap.id, 
            ...data,
            createdAt: createdAt instanceof Timestamp ? createdAt.toMillis() : createdAt,
        } as Exam;
        
        return { success: true, exam: JSON.parse(JSON.stringify(exam)) };
    } catch (error) {
        console.error('Error fetching exam by ID', error)
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: errorMessage };
    }
}

export interface UserRanking {
    userId: string;
    userName: string;
    averageScore: number;
    testsTaken: number;
}

export async function loadRankingData(): Promise<{ success: boolean; ranking?: UserRanking[], error?: string }>{
  if (!db) {
    return { success: false, error: "La base de datos no está disponible para el ranking." };
  }

  try {
    const resultsSnapshot = await db.collection('testResults').get();
    if (resultsSnapshot.empty) {
      return { success: true, ranking: [] };
    }

    // Aggregate results by user
    const userStats: { [userId: string]: { totalScore: number, testsTaken: number } } = {};
    resultsSnapshot.docs.forEach(doc => {
      const result = doc.data() as TestResult;
      if (!userStats[result.userId]) {
        userStats[result.userId] = { totalScore: 0, testsTaken: 0 };
      }
      userStats[result.userId].totalScore += result.score;
      userStats[result.userId].testsTaken += 1;
    });

    // Get user names from Firebase Auth
    const userIds = Object.keys(userStats);
    const userAuthRecords = await getAuth().getUsers(userIds.map(uid => ({ uid })));
    const userNames: { [userId: string]: string } = {};
    userAuthRecords.users.forEach(user => {
      userNames[user.uid] = user.displayName || user.email || 'Usuario Anónimo';
    });

    // Create ranking
    const ranking: UserRanking[] = userIds.map(userId => ({
      userId,
      userName: userNames[userId] || 'Usuario Anónimo',
      averageScore: Math.round(userStats[userId].totalScore / userStats[userId].testsTaken),
      testsTaken: userStats[userId].testsTaken,
    }));

    // Sort by average score descending
    ranking.sort((a, b) => b.averageScore - a.averageScore);

    return { success: true, ranking };
  } catch (error) {
    console.error("Error loading ranking data:", error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: "No se pudo cargar el ranking. " + errorMessage };
  }
}
  

    