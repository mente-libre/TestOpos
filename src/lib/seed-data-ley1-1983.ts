
import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const rawLey1Test = {
  "title": "Ley 1/1983 - Gobierno y Administración de la Comunidad de Madrid",
  "description": "Ley 1/1983, de 13 de diciembre, del Gobierno y Administración de la Comunidad de Madrid",
  "questions": [
    {
      "id": 1,
      "question": "¿Ley 1/1983, de 13 de diciembre, del Gobierno y Administración de la \nComunidad de Madrid?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 0
    },
    {
      "id": 2,
      "question": "¿Comunidad de Madrid\n «BOCM» núm?",
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
      "question": "¿161, de 20 de diciembre de 1983\n «BOE» núm?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 0
    },
    {
      "id": 4,
      "question": "¿29, de 03 de febrero de 1984\n Referencia: BOE-A-1984-2926\n ÍNDICE\n   \nPreámbulo?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 3
    },
    {
      "id": 5,
      "question": "¿6\n TÍTULO PRELIMINAR?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 1
    },
    {
      "id": 6,
      "question": "¿8\n Artículo 1?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 2
    },
    {
      "id": 7,
      "question": "¿8\n Artículo 2?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 0
    },
    {
      "id": 8,
      "question": "¿8\n Artículo 3?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 0
    },
    {
      "id": 9,
      "question": "¿8\n TÍTULO I?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 2
    },
    {
      "id": 10,
      "question": "¿Del Presidente?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 3
    },
    {
      "id": 11,
      "question": "¿8\n CAPÍTULO I?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 1
    },
    {
      "id": 12,
      "question": "¿Elección y Estatuto personal?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 2
    },
    {
      "id": 13,
      "question": "¿8\n Artículo 4?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 0
    },
    {
      "id": 14,
      "question": "¿8\n Artículo 5?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 0
    },
    {
      "id": 15,
      "question": "¿8\n Artículo 6?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 0
    },
    {
      "id": 16,
      "question": "¿8\n CAPÍTULO II?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 2
    },
    {
      "id": 17,
      "question": "¿Atribuciones?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 1
    },
    {
      "id": 18,
      "question": "¿9\n Artículo 7?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 1
    },
    {
      "id": 19,
      "question": "¿9\n Artículo 8?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 1
    },
    {
      "id": 20,
      "question": "¿9\n Artículo 9?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 0
    },
    {
      "id": 21,
      "question": "¿9\n Artículo 10?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 2
    },
    {
      "id": 22,
      "question": "¿10\n Artículo 11?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 2
    },
    {
      "id": 23,
      "question": "¿10\n Artículo 12?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 0
    },
    {
      "id": 24,
      "question": "¿10\n CAPÍTULO III?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 3
    },
    {
      "id": 25,
      "question": "¿Incapacidad y cese del Presidente?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 0
    },
    {
      "id": 26,
      "question": "¿10\n LEGISLACIÓN CONSOLIDADA\n Página 1\nArtículo 13?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 3
    },
    {
      "id": 27,
      "question": "¿10\n Artículo 14?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 0
    },
    {
      "id": 28,
      "question": "¿11\n Artículo 15?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 3
    },
    {
      "id": 29,
      "question": "¿11\n Artículo 16?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 1
    },
    {
      "id": 30,
      "question": "¿11\n Artículo 17?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 3
    },
    {
      "id": 31,
      "question": "¿11\n TÍTULO II?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 0
    },
    {
      "id": 32,
      "question": "¿Del Consejo de Gobierno y de los Consejeros?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 0
    },
    {
      "id": 33,
      "question": "¿12\n CAPÍTULO I?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 3
    },
    {
      "id": 34,
      "question": "¿Naturaleza y composición del Consejo de Gobierno?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 1
    },
    {
      "id": 35,
      "question": "¿12\n Artículo 18?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 2
    },
    {
      "id": 36,
      "question": "¿12\n Artículo 19?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 2
    },
    {
      "id": 37,
      "question": "¿12\n Artículo 20?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 2
    },
    {
      "id": 38,
      "question": "¿12\n CAPÍTULO II?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 2
    },
    {
      "id": 39,
      "question": "¿Atribuciones del Consejo de Gobierno?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 2
    },
    {
      "id": 40,
      "question": "¿12\n Artículo 21?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 0
    },
    {
      "id": 41,
      "question": "¿12\n Artículo 22?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 1
    },
    {
      "id": 42,
      "question": "¿14\n CAPÍTULO III?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 0
    },
    {
      "id": 43,
      "question": "¿Funcionamiento del Consejo de Gobierno?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 1
    },
    {
      "id": 44,
      "question": "¿14\n Artículo 23?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 3
    },
    {
      "id": 45,
      "question": "¿14\n Artículo 24?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 2
    },
    {
      "id": 46,
      "question": "¿14\n Artículo 25?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 0
    },
    {
      "id": 47,
      "question": "¿14\n Artículo 26?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 0
    },
    {
      "id": 48,
      "question": "¿14\n CAPÍTULO IV?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 0
    },
    {
      "id": 49,
      "question": "¿De la Vicepresidencia y de los Consejeros?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 3
    },
    {
      "id": 50,
      "question": "¿15\n Sección Primera?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 1
    },
    {
      "id": 51,
      "question": "¿De la Vicepresidencia?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 0
    },
    {
      "id": 52,
      "question": "¿15\n Artículo 27?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 0
    },
    {
      "id": 53,
      "question": "¿15\n Sección Segunda?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 3
    },
    {
      "id": 54,
      "question": "¿De los Consejeros?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 0
    },
    {
      "id": 55,
      "question": "¿15\n Artículo 28?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 0
    },
    {
      "id": 56,
      "question": "¿15\n Artículo 29?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 2
    },
    {
      "id": 57,
      "question": "¿15\n Artículo 30?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 2
    },
    {
      "id": 58,
      "question": "¿15\n Artículo 31?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 0
    },
    {
      "id": 59,
      "question": "¿15\n TÍTULO III?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 0
    },
    {
      "id": 60,
      "question": "¿De las relaciones del Presidente y del Consejo de Gobierno con la Asamblea?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 2
    }
  ]
}

const transformedQuestions: Question[] = rawLey1Test.questions.map(q => ({
    questionText: q.question,
    options: q.options,
    correctAnswerIndex: q.answer,
}));

export const ley1_1983Test: SeedExam = {
    fileName: rawLey1Test.title,
    category: 'ley1-1983',
    questions: transformedQuestions,
};
