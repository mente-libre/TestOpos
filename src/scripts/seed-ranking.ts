
import { db } from '@/lib/firebase/firebase-admin';
import { Timestamp } from 'firebase-admin/firestore';

async function seedRanking() {
  if (!db) {
    console.error("Firestore is not initialized.");
    return;
  }

  const testResults = [
    {
      userId: "user1",
      score: 85,
      testId: "test1",
      date: Timestamp.now(),
      answers: [],
      category: "constitucion",
      createdAt: Timestamp.now(),
    },
    {
      userId: "user2",
      score: 92,
      testId: "test2",
      date: Timestamp.now(),
      answers: [],
      category: "constitucion",
      createdAt: Timestamp.now(),
    },
    {
      userId: "user1",
      score: 78,
      testId: "test3",
      date: Timestamp.now(),
      answers: [],
      category: "ebep",
      createdAt: Timestamp.now(),
    },
  ];

  try {
    const resultsCollection = db.collection('testResults');
    for (const result of testResults) {
      await resultsCollection.add(result);
    }
    console.log("Ranking data seeded successfully!");
  } catch (error) {
    console.error("Error seeding ranking data:", error);
  }
}

seedRanking();
