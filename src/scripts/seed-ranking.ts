import { getFirestore } from '@/lib/firebase/firebase-admin';
import { Timestamp } from 'firebase-admin/firestore';
import { Question } from '@/lib/definitions';

async function seedRanking() {
  const db = await getFirestore();
  if (!db) {
    console.error("Firestore is not initialized.");
    return;
  }

  const testResults = [
    {
      userId: 'test-user-1',
      category: 'constitucion',
      score: 80,
      totalQuestions: 5,
      createdAt: Timestamp.fromDate(new Date('2023-10-26T10:00:00Z')),
      questions: [
        { questionText: 'Pregunta 1', options: ['a', 'b', 'c', 'd'], correctAnswerIndex: 0, userAnswerIndex: 0, isCorrect: true },
        { questionText: 'Pregunta 2', options: ['a', 'b', 'c', 'd'], correctAnswerIndex: 1, userAnswerIndex: 1, isCorrect: true },
        { questionText: 'Pregunta 3', options: ['a', 'b', 'c', 'd'], correctAnswerIndex: 2, userAnswerIndex: 2, isCorrect: true },
        { questionText: 'Pregunta 4', options: ['a', 'b', 'c', 'd'], correctAnswerIndex: 3, userAnswerIndex: 3, isCorrect: true },
        { questionText: 'Pregunta 5', options: ['a', 'b', 'c', 'd'], correctAnswerIndex: 0, userAnswerIndex: 1, isCorrect: false },
      ],
    },
    {
      userId: 'test-user-2',
      category: 'madrid',
      score: 60,
      totalQuestions: 5,
      createdAt: Timestamp.fromDate(new Date('2023-10-27T12:00:00Z')),
      questions: [
        { questionText: 'Pregunta A', options: ['a', 'b', 'c', 'd'], correctAnswerIndex: 0, userAnswerIndex: 0, isCorrect: true },
        { questionText: 'Pregunta B', options: ['a', 'b', 'c', 'd'], correctAnswerIndex: 1, userAnswerIndex: 1, isCorrect: true },
        { questionText: 'Pregunta C', options: ['a', 'b', 'c', 'd'], correctAnswerIndex: 2, userAnswerIndex: 2, isCorrect: true },
        { questionText: 'Pregunta D', options: ['a', 'b', 'c', 'd'], correctAnswerIndex: 0, userAnswerIndex: 1, isCorrect: false },
        { questionText: 'Pregunta E', options: ['a', 'b', 'c', 'd'], correctAnswerIndex: 0, userAnswerIndex: 1, isCorrect: false },
      ],
    },
    {
      userId: 'test-user-1',
      category: 'madrid',
      score: 100,
      totalQuestions: 3,
      createdAt: Timestamp.fromDate(new Date('2023-10-28T15:30:00Z')),
      questions: [
        { questionText: 'Pregunta X', options: ['a', 'b', 'c', 'd'], correctAnswerIndex: 0, userAnswerIndex: 0, isCorrect: true },
        { questionText: 'Pregunta Y', options: ['a', 'b', 'c', 'd'], correctAnswerIndex: 1, userAnswerIndex: 1, isCorrect: true },
        { questionText: 'Pregunta Z', options: ['a', 'b', 'c', 'd'], correctAnswerIndex: 2, userAnswerIndex: 2, isCorrect: true },
      ],
    },
  ];

  const batch = db.batch();
  const collectionRef = db.collection('testResults');

  testResults.forEach(result => {
    const docRef = collectionRef.doc();
    batch.set(docRef, result);
  });

  try {
    await batch.commit();
    console.log(`Successfully seeded ${testResults.length} ranking results.`);
  } catch (error) {
    console.error("Error seeding ranking data:", error);
  }
}

seedRanking().then(() => {
    console.log('Finished seeding ranking data.');
}).catch(err => {
    console.error('An unexpected error occurred during seeding:', err);
});