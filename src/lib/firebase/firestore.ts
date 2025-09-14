"use server";

import { collection, addDoc, query, where, getDocs, Timestamp } from "firebase/firestore";
import { db } from "./config";
import type { User } from "./auth";

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

export const saveExam = async (user: User, examData: Omit<Exam, "userId" | "createdAt" | "id">) => {
  try {
    const docRef = await addDoc(collection(db, "exams"), {
      ...examData,
      userId: user.uid,
      createdAt: Timestamp.now(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error: "No se pudo guardar el examen en la base de datos." };
  }
};

export const getExams = async (user: User) => {
  try {
    const q = query(collection(db, "exams"), where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    const exams: Exam[] = [];
    querySnapshot.forEach((doc) => {
      exams.push({ id: doc.id, ...doc.data() } as Exam);
    });
    return { success: true, exams };
  } catch (error) {
    console.error("Error getting documents: ", error);
    return { success: false, error: "No se pudieron obtener los exámenes." };
  }
};
