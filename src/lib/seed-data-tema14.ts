
import { type Question, type SeedExam } from './definitions';

const rawTema14Test = {
  "title": "TEMA 14: LAS FUENTES DEL DERECHO. LA LEY Y SUS CLASES.",
  "description": "TEMA 14 \nLAS FUENTES DEL DERECHO. LA LEY Y SUS CLASES.",
  "questions": [
    {
      "id": 1,
      "question": "Pregunta sobre: Primer Ejercicio del Proceso Selectivo para ingreso en la Escala de Titulados Superiores del  \nInstituto Nacional de Seguridad e Higiene en el Trabajo, O?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 1
    },
    {
      "id": 2,
      "question": "¿enero 2024?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 2
    },
    {
      "id": 3,
      "question": "¿TEMA 14 \nLAS FUENTES DEL DERECHO?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 3
    },
    {
      "id": 4,
      "question": "¿LA LEY Y SUS CLASES?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 2
    }
  ]
}

export const tema14Test: SeedExam = {
    id: "tema-14-demo",
    name: rawTema14Test.title,
    fileName: rawTema14Test.title,
    category: 'tema-14',
    questions: rawTema14Test.questions.map(q => {
        const options = q.options;
        // Pad with "N/A" if less than 4 options
        while (options.length < 4) {
          options.push("N/A");
        }
        return {
            questionText: q.question,
            options: options as [string, string, string, string],
            correctAnswerIndex: q.answer,
        };
    })
};
