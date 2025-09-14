"use server";

import { collection, addDoc, query, where, getDocs, Timestamp } from "firebase/firestore";
import { db } from "./config";

interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Exam {
  id?: string;
  userId: string;
  category: string;
  fileName: string;
  questions: Question[];
  createdAt: Timestamp;
}

export interface Category {
  id: string;
  name: string;
  examCount: number;
}

// A simple user object with just the UID
interface AppUser {
    uid: string;
}

const CATEGORY_DEFINITIONS = [
    { id: "madrid", name: "Comunidad de Madrid" },
    { id: "valencia", name: "Comunidad Valenciana" },
    { id: "andalucia", name: "Andalucía" },
    { id: "estado", name: "Administración del Estado" },
    { id: "otros", name: "Otras" },
];

export const saveExam = async (userId: string, examData: Omit<Exam, "userId" | "createdAt" | "id">) => {
  try {
    const docRef = await addDoc(collection(db, "exams"), {
      ...examData,
      userId: userId,
      createdAt: Timestamp.now(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error: "No se pudo guardar el examen en la base de datos." };
  }
};

export const getExams = async (user: AppUser) => {
  try {
    if (!user || !user.uid) {
        return { success: true, exams: [], categories: [] };
    }
    const q = query(collection(db, "exams"), where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    
    const exams: Exam[] = [];
    querySnapshot.forEach((doc) => {
      exams.push({ id: doc.id, ...doc.data() } as Exam);
    });

    const counts = exams.reduce((acc, exam) => {
        acc[exam.category] = (acc[exam.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const categories: Category[] = CATEGORY_DEFINITIONS.map(catDef => ({
        ...catDef,
        examCount: counts[catDef.id] || 0,
    })).filter(c => c.examCount > 0);


    return { success: true, exams, categories };
  } catch (error) {
    console.error("Error getting documents: ", error);
    return { success: false, error: "No se pudieron obtener los exámenes." };
  }
};

    
