
import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const rawLO3Test = {
  "title": "Estatuto de Autonomía de la Comunidad de Madrid",
  "description": "Ley Orgánica 3/1983, de 25 de febrero, de Estatuto de Autonomía de la Comunidad de Madrid",
  "questions": [
    {
      "id": 1,
      "question": "¿Ley Orgánica 3/1983, de 25 de febrero, de Estatuto de Autonomía de la Comunidad de Madrid?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 2
    },
    {
      "id": 2,
      "question": "¿Jefatura del Estado\n «BOE» núm?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 3
    },
    {
      "id": 3,
      "question": "¿51, de 01 de marzo de 1983\n Referencia: BOE-A-1983-6317\n ÍNDICE\n   \nPreámbulo?",
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
      "question": "¿5\n TITULO PRELIMINAR?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 0
    },
    {
      "id": 5,
      "question": "¿5\n Artículo 1?",
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
      "question": "¿5\n Artículo 2?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 1
    },
    {
      "id": 7,
      "question": "¿5\n Artículo 3?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 2
    },
    {
      "id": 8,
      "question": "¿5\n Artículo 4?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 1
    },
    {
      "id": 9,
      "question": "¿5\n Artículo 5?",
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
      "question": "¿5\n Artículo 6?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 1
    },
    {
      "id": 11,
      "question": "¿6\n Artículo 7?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 2
    },
    {
      "id": 12,
      "question": "¿6\n TITULO I?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 1
    },
    {
      "id": 13,
      "question": "¿De la Organización Institucional de la Comunidad de Madrid?",
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
      "question": "¿6\n Artículo 8?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 3
    },
    {
      "id": 15,
      "question": "¿6\n CAPITULO I?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 3
    },
    {
      "id": 16,
      "question": "¿De la Asamblea de Madrid?",
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
      "question": "¿6\n Artículo 9?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 2
    },
    {
      "id": 18,
      "question": "¿6\n Artículo 10?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 0
    },
    {
      "id": 19,
      "question": "¿6\n Artículo 11?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 3
    },
    {
      "id": 20,
      "question": "¿7\n Artículo 12?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 2
    },
    {
      "id": 21,
      "question": "¿7\n Artículo 13?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 1
    },
    {
      "id": 22,
      "question": "¿7\n Artículo 14?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 3
    },
    {
      "id": 23,
      "question": "¿8\n LEGISLACIÓN CONSOLIDADA\n Página 1\nArtículo 15?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 2
    },
    {
      "id": 24,
      "question": "¿8\n Artículo 16?",
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
      "question": "¿8\n CAPITULO II?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 3
    },
    {
      "id": 26,
      "question": "¿Del Presidente?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 0
    },
    {
      "id": 27,
      "question": "¿9\n Artículo 17?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 1
    },
    {
      "id": 28,
      "question": "¿9\n Artículo 18?",
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
      "question": "¿9\n Artículo 19?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 2
    },
    {
      "id": 30,
      "question": "¿10\n Artículo 20?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 1
    },
    {
      "id": 31,
      "question": "¿10\n Artículo 21?",
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
      "question": "¿10\n CAPITULO III?",
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
      "question": "¿Del Gobierno?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 0
    },
    {
      "id": 34,
      "question": "¿10\n Artículo 22?",
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
      "question": "¿10\n Artículo 23?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 1
    },
    {
      "id": 36,
      "question": "¿10\n Artículo 24?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 1
    },
    {
      "id": 37,
      "question": "¿11\n Artículo 25?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 1
    },
    {
      "id": 38,
      "question": "¿11\n TITULO II?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 1
    },
    {
      "id": 39,
      "question": "¿De las competencias de la Comunidad?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 1
    },
    {
      "id": 40,
      "question": "¿11\n Artículo 26?",
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
      "question": "¿11\n Artículo 27?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 2
    },
    {
      "id": 42,
      "question": "¿13\n Artículo 28?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 3
    },
    {
      "id": 43,
      "question": "¿13\n Artículo 29?",
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
      "question": "¿14\n Artículo 30?",
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
      "question": "¿14\n Artículo 31?",
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
      "question": "¿14\n Artículo 32?",
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
      "question": "¿15\n Artículo 33?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 3
    },
    {
      "id": 48,
      "question": "¿15\n TITULO III?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 3
    },
    {
      "id": 49,
      "question": "¿Del régimen jurídico?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 0
    },
    {
      "id": 50,
      "question": "¿15\n CAPITULO I?",
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
      "question": "¿Disposiciones generales?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 2
    },
    {
      "id": 52,
      "question": "¿15\n Artículo 34?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 2
    },
    {
      "id": 53,
      "question": "¿15\n Artículo 35?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 0
    },
    {
      "id": 54,
      "question": "¿15\n Artículo 36?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 2
    },
    {
      "id": 55,
      "question": "¿15\n CAPITULO II?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 3
    },
    {
      "id": 56,
      "question": "¿De la Administración?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 1
    },
    {
      "id": 57,
      "question": "¿16\n Artículo 37?",
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
      "question": "¿16\n Artículo 38?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 2
    },
    {
      "id": 59,
      "question": "¿16\n Artículo 39?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 2
    },
    {
      "id": 60,
      "question": "¿16\n BOLETÍN OFICIAL DEL ESTADO\n LEGISLACIÓN CONSOLIDADA\n Página 2\nArtículo 40?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 0
    }
  ]
}

const transformedQuestions: Question[] = rawLO3Test.questions.map(q => ({
    questionText: q.question,
    options: q.options,
    correctAnswerIndex: q.answer,
}));

export const lo3_1983Test: SeedExam = {
    fileName: rawLO3Test.title,
    category: 'lo3-1983',
    questions: transformedQuestions,
};
