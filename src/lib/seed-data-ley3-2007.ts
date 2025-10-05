
import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const rawLey3Test = {
  "title": "Ley Orgánica 3/2007 - Igualdad",
  "description": "Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres.",
  "questions": [
    {
      "id": 1,
      "question": "¿Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de \nmujeres y hombres?",
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
      "question": "¿71, de 23 de marzo de 2007\n Referencia: BOE-A-2007-6115\n ÍNDICE\n   \nPreámbulo?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 1
    },
    {
      "id": 4,
      "question": "¿7\n TÍTULO PRELIMINAR?",
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
      "question": "¿Objeto y ámbito de la Ley?",
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
      "question": "¿11\n Artículo 1?",
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
      "question": "¿Objeto de la Ley?",
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
      "question": "¿11\n Artículo 2?",
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
      "question": "¿Ámbito de aplicación?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 0
    },
    {
      "id": 10,
      "question": "¿11\n TÍTULO I?",
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
      "question": "¿El principio de igualdad y la tutela contra la discriminación?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 3
    },
    {
      "id": 12,
      "question": "¿12\n Artículo 3?",
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
      "question": "¿El principio de igualdad de trato entre mujeres y hombres?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 1
    },
    {
      "id": 14,
      "question": "¿12\n Artículo 4?",
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
      "question": "¿Integración del principio de igualdad en la interpretación y aplicación de las normas?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 1
    },
    {
      "id": 16,
      "question": "¿12\n Artículo 5?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 0
    },
    {
      "id": 17,
      "question": "¿Igualdad de trato y de oportunidades en el acceso al empleo, en la formación y en la promoción \nprofesionales, y en las condiciones de trabajo?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 3
    },
    {
      "id": 18,
      "question": "¿12\n Artículo 6?",
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
      "question": "¿Discriminación directa e indirecta?",
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
      "question": "¿12\n Artículo 7?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 1
    },
    {
      "id": 21,
      "question": "¿Acoso sexual y acoso por razón de sexo?",
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
      "question": "¿12\n Artículo 8?",
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
      "question": "¿Discriminación por embarazo o maternidad?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 3
    },
    {
      "id": 24,
      "question": "¿13\n Artículo 9?",
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
      "question": "¿Indemnidad frente a represalias?",
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
      "question": "¿13\n Artículo 10?",
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
      "question": "¿Consecuencias jurídicas de las conductas discriminatorias?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 3
    },
    {
      "id": 28,
      "question": "¿13\n Artículo 11?",
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
      "question": "¿Acciones positivas?",
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
      "question": "¿13\n Artículo 12?",
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
      "question": "¿Tutela judicial efectiva?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 3
    },
    {
      "id": 32,
      "question": "¿13\n Artículo 13?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 2
    },
    {
      "id": 33,
      "question": "¿13\n TÍTULO II?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 1
    },
    {
      "id": 34,
      "question": "¿Políticas públicas para la igualdad?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 0
    },
    {
      "id": 35,
      "question": "¿14\n CAPÍTULO I?",
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
      "question": "¿Principios generales?",
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
      "question": "¿14\n LEGISLACIÓN CONSOLIDADA\n Página 1\nArtículo 14?",
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
      "question": "¿Criterios generales de actuación de los Poderes Públicos?",
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
      "question": "¿14\n Artículo 15?",
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
      "question": "¿Transversalidad del principio de igualdad de trato entre mujeres y hombres?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 3
    },
    {
      "id": 41,
      "question": "¿14\n Artículo 16?",
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
      "question": "¿Nombramientos realizados por los Poderes Públicos?",
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
      "question": "¿14\n Artículo 17?",
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
      "question": "¿Plan Estratégico de Igualdad de Oportunidades?",
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
      "question": "¿15\n Artículo 18?",
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
      "question": "¿Informe periódico?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 1
    },
    {
      "id": 47,
      "question": "¿15\n Artículo 19?",
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
      "question": "¿Informes de impacto de género?",
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
      "question": "¿15\n Artículo 20?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 1
    },
    {
      "id": 50,
      "question": "¿Adecuación de las estadísticas y estudios?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 0
    },
    {
      "id": 51,
      "question": "¿15\n Artículo 21?",
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
      "question": "¿Colaboración entre las Administraciones públicas?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 3
    },
    {
      "id": 53,
      "question": "¿15\n Artículo 22?",
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
      "question": "¿Acciones de planificación equitativa de los tiempos?",
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
      "question": "¿15\n CAPÍTULO II?",
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
      "question": "¿Acción administrativa para la igualdad?",
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
      "question": "¿16\n Artículo 23?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 3
    },
    {
      "id": 58,
      "question": "¿La educación para la igualdad de mujeres y hombres?",
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
      "question": "¿16\n Artículo 24?",
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
      "question": "¿Integración del principio de igualdad en la política de educación?",
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

const transformedQuestions: Question[] = rawLey3Test.questions.map(q => ({
    questionText: q.question,
    options: q.options,
    correctAnswerIndex: q.answer,
}));

export const ley3_2007Test: SeedExam = {
    fileName: rawLey3Test.title,
    category: 'ley3-2007',
    questions: transformedQuestions,
};
