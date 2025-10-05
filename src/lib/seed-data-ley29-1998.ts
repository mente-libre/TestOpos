
import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const rawLey29Test = {
  "title": "Ley 29/1998 - Jurisdicción Contencioso-Administrativa",
  "description": "Test completo sobre la Ley 29/1998, de 13 de julio, reguladora de la Jurisdicción Contencioso-administrativa.",
  "questions": [
    {
      "id": 1,
      "question": "¿Ley 29/1998, de 13 de julio, reguladora de la Jurisdicción \nContencioso-administrativa?",
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
      "question": "¿167, de 14 de julio de 1998\n Referencia: BOE-A-1998-16718\n ÍNDICE\n   \nPreámbulo?",
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
      "question": "¿4\n TÍTULO I?",
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
      "question": "¿Del orden jurisdiccional contencioso-administrativo?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 0
    },
    {
      "id": 6,
      "question": "¿14\n CAPÍTULO I?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 0
    },
    {
      "id": 7,
      "question": "¿14\n CAPÍTULO II?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 3
    },
    {
      "id": 8,
      "question": "¿Órganos y competencias?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 2
    },
    {
      "id": 9,
      "question": "¿16\n CAPÍTULO III?",
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
      "question": "¿Competencia territorial de los Juzgados y Tribunales?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 2
    },
    {
      "id": 11,
      "question": "¿20\n CAPÍTULO IV?",
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
      "question": "¿Constitución y actuación de las Salas de lo Contencioso-administrativo?",
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
      "question": "¿21\n CAPÍTULO V?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 2
    },
    {
      "id": 14,
      "question": "¿Distribución de asuntos?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 1
    },
    {
      "id": 15,
      "question": "¿22\n TÍTULO II?",
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
      "question": "¿Las partes?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 1
    },
    {
      "id": 17,
      "question": "¿22\n CAPÍTULO I?",
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
      "question": "¿Capacidad procesal?",
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
      "question": "¿22\n CAPÍTULO II?",
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
      "question": "¿Legitimación?",
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
      "question": "¿22\n CAPÍTULO III?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 3
    },
    {
      "id": 22,
      "question": "¿Representación y defensa de las partes?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 1
    },
    {
      "id": 23,
      "question": "¿25\n TÍTULO III?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 1
    },
    {
      "id": 24,
      "question": "¿Objeto del recurso contencioso-administrativo?",
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
      "question": "¿25\n CAPÍTULO I?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 1
    },
    {
      "id": 26,
      "question": "¿Actividad administrativa impugnable?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 1
    },
    {
      "id": 27,
      "question": "¿25\n CAPÍTULO II?",
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
      "question": "¿Pretensiones de las partes?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 0
    },
    {
      "id": 29,
      "question": "¿26\n CAPÍTULO III?",
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
      "question": "¿Acumulación?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 0
    },
    {
      "id": 31,
      "question": "¿27\n CAPÍTULO IV?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 1
    },
    {
      "id": 32,
      "question": "¿Cuantía del recurso?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 1
    },
    {
      "id": 33,
      "question": "¿29\n TÍTULO IV?",
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
      "question": "¿Procedimiento contencioso-administrativo?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 3
    },
    {
      "id": 35,
      "question": "¿30\n CAPÍTULO I?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 3
    },
    {
      "id": 36,
      "question": "¿Procedimiento en primera o única instancia?",
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
      "question": "¿30\n LEGISLACIÓN CONSOLIDADA\n Página 1\nSección 1?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 3
    },
    {
      "id": 38,
      "question": "¿ª Diligencias preliminares?",
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
      "question": "¿30\n Sección 2?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 0
    },
    {
      "id": 40,
      "question": "¿ª Interposición del recurso y reclamación del expediente?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 1
    },
    {
      "id": 41,
      "question": "¿30\n Sección 3?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 3
    },
    {
      "id": 42,
      "question": "¿ª Emplazamiento de los demandados y admisión del recurso?",
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
      "question": "¿33\n Sección 4?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 0
    },
    {
      "id": 44,
      "question": "¿ª Demanda y contestación?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 2
    },
    {
      "id": 45,
      "question": "¿34\n Sección 5?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 0
    },
    {
      "id": 46,
      "question": "¿ª Alegaciones previas?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 2
    },
    {
      "id": 47,
      "question": "¿36\n Sección 6?",
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
      "question": "¿37\n Sección 7?",
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
      "question": "¿ª Vista y conclusiones?",
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
      "question": "¿38\n Sección 8?",
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
      "question": "¿ª Sentencia?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 3
    },
    {
      "id": 52,
      "question": "¿39\n Sección 9?",
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
      "question": "¿ª Otros modos de terminación del procedimiento?",
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
      "question": "¿41\n CAPÍTULO II?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 3
    },
    {
      "id": 55,
      "question": "¿Procedimiento abreviado?",
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
      "question": "¿42\n CAPÍTULO III?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 0
    },
    {
      "id": 57,
      "question": "¿Recursos contra resoluciones procesales?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 0
    },
    {
      "id": 58,
      "question": "¿45\n Sección 1?",
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
      "question": "¿ª Recursos contra providencias y autos?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 3
    },
    {
      "id": 60,
      "question": "¿45\n Sección 2?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 2
    }
  ]
};

export const ley29Test: SeedExam = {
    fileName: rawLey29Test.title,
    category: "estado",
    questions: rawLey29Test.questions.map(q => {
        return {
            questionText: q.question,
            options: q.options,
            correctAnswerIndex: q.answer,
        };
    })
};

    