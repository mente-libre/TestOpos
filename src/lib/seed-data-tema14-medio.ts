
import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const rawTema14MedioTest = {
  "fileName": "Tema 14 - Fuentes del Derecho (Medio)",
  "category": "madrid",
  "questions": [
    {
      "id": 1,
      "question": "Pregunta sobre: Primer Ejercicio del Proceso Selectivo para ingreso en la Escala de Titulados Superiores del  \nInstituto Nacional de Seguridad e Higiene en el Trabajo, O...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 2
    },
    {
      "id": 2,
      "question": "Pregunta sobre: enero 2024...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 1
    },
    {
      "id": 3,
      "question": "Pregunta sobre: TEMA 14 \nLAS FUENTES DEL DERECHO...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 1
    },
    {
      "id": 4,
      "question": "Pregunta sobre: LA LEY Y SUS CLASES...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 3
    },
    {
      "id": 5,
      "question": "Pregunta sobre: LOS REGLAMENTOS Y OTRAS \nDISPOSICIONES...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 3
    },
    {
      "id": 6,
      "question": "Pregunta sobre: LA COSTUMBRE...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 0
    },
    {
      "id": 7,
      "question": "Pregunta sobre: LOS PRINCIPIOS GENERALES DEL DERECHO...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 3
    },
    {
      "id": 8,
      "question": "Pregunta sobre: LA \nJURISPRUDENCIA...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 1
    },
    {
      "id": 9,
      "question": "Pregunta sobre: OTRAS FUENTES DEL DERECHO...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 0
    },
    {
      "id": 10,
      "question": "Pregunta sobre: LA APLICACIÓN E INTERPRETACIÓN DE LAS \nNORMAS JURÍDICAS...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 3
    },
    {
      "id": 11,
      "question": "Pregunta sobre: EL DERECHO TRANSITORIO...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 2
    },
    {
      "id": 12,
      "question": "Pregunta sobre: EL PRINCIPIO DE IRRETROACTIVIDAD...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 3
    },
    {
      "id": 13,
      "question": "Pregunta sobre: LAS FUENTES DEL DERECHO...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 0
    },
    {
      "id": 14,
      "question": "Pregunta sobre: LA LEY Y SUS CLASES...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 2
    },
    {
      "id": 15,
      "question": "Pregunta sobre: LOS REGLAMENTOS Y OTRAS \nDISPOSICIONES...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 2
    },
    {
      "id": 16,
      "question": "Pregunta sobre: LA COSTUMBRE...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 2
    },
    {
      "id": 17,
      "question": "Pregunta sobre: LOS PRINCIPIOS GENERALES DEL DERECHO...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 0
    },
    {
      "id": 18,
      "question": "Pregunta sobre: LA \nJURISPRUDENCIA...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 0
    },
    {
      "id": 19,
      "question": "Pregunta sobre: OTRAS FUENTES DEL DERECHO \nLa expresión “fuentes del Derecho” puede tener los siguientes significados: - - - \nModo de producción de las normas jurídicas \nInstancia de legitimación o causa de justificación del ordenamiento jurídico...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 0
    },
    {
      "id": 20,
      "question": "Pregunta sobre: La fuente \nsería la causa última del Derecho y de todo lo jurídico...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "answer": 1
    }
  ]
};

export const tema14MedioTest: SeedExam = {
    fileName: rawTema14MedioTest.fileName,
    category: rawTema14MedioTest.category,
    questions: rawTema14MedioTest.questions.map(q => {
        return {
            questionText: q.question,
            options: q.options as [string, string, string, string],
            correctAnswerIndex: q.answer,
        };
    })
};
