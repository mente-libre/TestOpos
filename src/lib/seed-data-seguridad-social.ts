
import { type Question, type SeedExam } from './definitions';

const rawSeguridadSocialTest = {
  "title": "TEMA 28: El Sistema Español de la Seguridad Social",
  "description": "Cuestionario sobre el TEMA 28: EL SISTEMA ESPAÑOL DE LA SEGURIDAD SOCIAL.",
  "questions": [
    {
      "id": 1,
      "question": "¿Primer Ejercicio del Proceso Selectivo para ingreso en la Escala de Titulados Superiores del Instituto Nacional de Seguridad e Higiene en el Trabajo, O?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 3
    },
    {
      "id": 2,
      "question": "¿febrero 2023?",
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
      "question": "¿TEMA 28 EL SISTEMA ESPAÑOL DE LA SEGURIDAD SOCIAL?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 2
    },
    {
      "id": 4,
      "question": "¿ESTRUCTURA: RÉGIMEN GENERAL Y REGÍMENES ESPECIALES?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 3
    }
  ]
};

export const seguridadSocialTest: SeedExam = {
    id: "seguridad-social-demo",
    name: rawSeguridadSocialTest.title,
    fileName: rawSeguridadSocialTest.title,
    category: 'seguridad-social',
    questions: rawSeguridadSocialTest.questions.map(q => {
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
