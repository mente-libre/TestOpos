
import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const rawLey9Test = {
  "title": "Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público",
  "description": "Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014",
  "type": "multiple",
  "questions": [
    {
      "id": 1,
      "question": "¿Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014?",
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
      "answer": 1
    },
    {
      "id": 3,
      "question": "¿272, de 09 de noviembre de 2017\n Referencia: BOE-A-2017-12902\n ÍNDICE\n   \nPreámbulo?",
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
      "question": "¿6\n TÍTULO PRELIMINAR?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 1
    },
    {
      "id": 5,
      "question": "¿Disposiciones generales?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 2
    },
    {
      "id": 6,
      "question": "¿17\n CAPÍTULO I?",
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
      "question": "¿Objeto y ámbito de aplicación de la Ley?",
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
      "question": "¿17\n Sección 1?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 3
    },
    {
      "id": 9,
      "question": "¿ª Objeto y ámbito de aplicación?",
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
      "question": "¿17\n Sección 2?",
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
      "question": "¿ª Negocios y contratos excluidos?",
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
      "question": "¿20\n CAPÍTULO II?",
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
      "question": "¿Contratos del sector público?",
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
      "question": "¿23\n Sección 1?",
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
      "question": "¿ª Delimitación de los tipos contractuales?",
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
      "question": "¿23\n Sección 2?",
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
      "question": "¿ª Contratos sujetos a una regulación armonizada?",
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
      "question": "¿26\n Sección 3?",
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
      "question": "¿ª Contratos administrativos y contratos privados?",
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
      "question": "¿29\n LIBRO PRIMERO?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 3
    },
    {
      "id": 21,
      "question": "¿Configuración general de la contratación del sector público y elementos estructurales de los \ncontratos?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 0
    },
    {
      "id": 22,
      "question": "¿31\n TÍTULO I?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 0
    },
    {
      "id": 23,
      "question": "¿Disposiciones generales sobre la contratación del sector público?",
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
      "question": "¿31\n CAPÍTULO I?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 0
    },
    {
      "id": 25,
      "question": "¿Racionalidad y consistencia de la contratación del sector público?",
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
      "question": "¿31\n CAPÍTULO II?",
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
      "question": "¿Libertad de pactos y contenido mínimo del contrato?",
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
      "question": "¿39\n CAPÍTULO III?",
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
      "question": "¿Perfección y forma del contrato?",
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
      "question": "¿40\n CAPÍTULO IV?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 2
    },
    {
      "id": 31,
      "question": "¿Régimen de invalidez?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 2
    },
    {
      "id": 32,
      "question": "¿40\n CAPÍTULO V?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 3
    },
    {
      "id": 33,
      "question": "¿Del recurso especial?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 2
    },
    {
      "id": 34,
      "question": "¿43\n LEGISLACIÓN CONSOLIDADA\n Página 1\nTÍTULO II?",
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
      "question": "¿Partes en el contrato?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 0
    },
    {
      "id": 36,
      "question": "¿52\n CAPÍTULO I?",
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
      "question": "¿Órgano de contratación?",
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
      "question": "¿52\n CAPÍTULO II?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 0
    },
    {
      "id": 39,
      "question": "¿Capacidad y solvencia del empresario?",
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
      "question": "¿55\n Sección 1?",
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
      "question": "¿ª Aptitud para contratar con el sector público?",
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
      "question": "¿55\n Subsección 1?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 1
    },
    {
      "id": 43,
      "question": "¿ª Normas generales y normas especiales sobre capacidad?",
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
      "question": "¿55\n Subsección 2?",
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
      "question": "¿ª Prohibiciones de contratar?",
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
      "question": "¿58\n Subsección 3?",
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
      "question": "¿ª Solvencia?",
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
      "question": "¿63\n Subsección 4?",
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
      "question": "¿ª Clasificación de las empresas?",
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
      "question": "¿64\n Sección 2?",
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
      "question": "¿ª Acreditación de la aptitud para contratar?",
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
      "question": "¿68\n Subsección 1?",
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
      "question": "¿ª Capacidad de obrar?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 1
    },
    {
      "id": 54,
      "question": "¿68\n Subsección 2?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 1
    },
    {
      "id": 55,
      "question": "¿ª Prohibiciones de contratar?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 2
    },
    {
      "id": 56,
      "question": "¿68\n Subsección 3?",
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
      "question": "¿ª Solvencia?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 1
    },
    {
      "id": 58,
      "question": "¿68\n Subsección 4?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 1
    },
    {
      "id": 59,
      "question": "¿ª Prueba de la clasificación y de la aptitud para contratar a través de Registros o listas \noficiales de contratistas?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 1
    },
    {
      "id": 60,
      "question": "¿75\n CAPÍTULO III?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 3
    }
  ]
}

const transformedQuestions: Question[] = rawLey9Test.questions.map(q => ({
    questionText: q.question,
    options: q.options,
    correctAnswerIndex: q.answer,
}));

export const ley9_2017Test: SeedExam = {
    fileName: rawLey9Test.title,
    category: 'ley9-2017',
    questions: transformedQuestions,
};
