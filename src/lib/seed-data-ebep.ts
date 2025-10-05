
import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const rawEbepTest = {
  "title": "Test sobre Estatuto Básico del Empleado Público",
  "description": "Cuestionario sobre el Real Decreto Legislativo 5/2015, de 30 de octubre",
  "questions": [
    {
      "id": 1,
      "question": "¿Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se \naprueba el texto refundido de la Ley del Estatuto Básico del \nEmpleado Público?",
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
      "question": "¿Ministerio de Hacienda y Administraciones Públicas\n «BOE» núm?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 0
    },
    {
      "id": 3,
      "question": "¿261, de 31 de octubre de 2015\n Referencia: BOE-A-2015-11719\n ÍNDICE\n   \nPreámbulo?",
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
      "question": "¿7\n Artículos?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 2
    },
    {
      "id": 5,
      "question": "¿8\n Artículo único?",
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
      "question": "¿Aprobación del texto refundido de la Ley del Estatuto Básico del Empleado Público?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 3
    },
    {
      "id": 7,
      "question": "¿8\n Disposiciones adicionales?",
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
      "question": "¿8\n Disposición adicional única?",
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
      "question": "¿Remisiones normativas?",
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
      "question": "¿8\n Disposiciones derogatorias?",
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
      "question": "¿8\n Disposición derogatoria única?",
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
      "question": "¿Derogación normativa?",
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
      "question": "¿8\n Disposiciones finales?",
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
      "question": "¿8\n Disposición final única?",
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
      "question": "¿Entrada en vigor?",
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
      "question": "¿8\n TEXTO REFUNDIDO DE LA LEY DEL ESTATUTO BÁSICO DEL EMPLEADO PÚBLICO?",
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
      "question": "¿9\n TÍTULO I?",
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
      "question": "¿Objeto y ámbito de aplicación?",
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
      "question": "¿9\n Artículo 1?",
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
      "question": "¿9\n Artículo 2?",
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
      "question": "¿Ámbito de aplicación?",
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
      "question": "¿9\n Artículo 3?",
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
      "question": "¿Personal funcionario de las Entidades Locales?",
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
      "question": "¿10\n Artículo 4?",
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
      "question": "¿Personal con legislación específica propia?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 2
    },
    {
      "id": 26,
      "question": "¿10\n Artículo 5?",
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
      "question": "¿Personal de la Sociedad Estatal Correos y Telégrafos?",
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
      "question": "¿10\n Artículo 6?",
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
      "question": "¿Leyes de Función Pública?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 3
    },
    {
      "id": 30,
      "question": "¿10\n LEGISLACIÓN CONSOLIDADA\n Página 1\nArtículo 7?",
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
      "question": "¿Normativa aplicable al personal laboral?",
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
      "question": "¿10\n TÍTULO II?",
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
      "question": "¿Personal al servicio de las Administraciones Públicas?",
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
      "question": "¿11\n CAPÍTULO I?",
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
      "question": "¿Clases de personal?",
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
      "question": "¿11\n Artículo 8?",
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
      "question": "¿Concepto y clases de empleados públicos?",
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
      "question": "¿11\n Artículo 9?",
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
      "question": "¿Funcionarios de carrera?",
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
      "question": "¿11\n Artículo 10?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 2
    },
    {
      "id": 41,
      "question": "¿Funcionarios interinos?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 0
    },
    {
      "id": 42,
      "question": "¿11\n Artículo 11?",
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
      "question": "¿Personal laboral?",
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
      "question": "¿12\n Artículo 12?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 0
    },
    {
      "id": 45,
      "question": "¿Personal eventual?",
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
      "question": "¿12\n CAPÍTULO II?",
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
      "question": "¿Personal directivo?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 1
    },
    {
      "id": 48,
      "question": "¿12\n Artículo 13?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 1
    },
    {
      "id": 49,
      "question": "¿Personal directivo profesional?",
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
      "question": "¿12\n TÍTULO III?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 2
    },
    {
      "id": 51,
      "question": "¿Derechos y deberes?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 1
    },
    {
      "id": 52,
      "question": "¿Código de conducta de los empleados públicos?",
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
      "question": "¿13\n CAPÍTULO I?",
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
      "question": "¿Derechos de los empleados públicos?",
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
      "question": "¿13\n Artículo 14?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 1
    },
    {
      "id": 56,
      "question": "¿Derechos individuales?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 3
    },
    {
      "id": 57,
      "question": "¿13\n Artículo 15?",
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
      "question": "¿Derechos individuales ejercidos colectivamente?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 3
    },
    {
      "id": 59,
      "question": "¿14\n CAPÍTULO II?",
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
      "question": "¿Derecho a la carrera profesional y a la promoción interna?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 3
    }
  ]
};

export const ebepTest: SeedExam = {
    fileName: rawEbepTest.title,
    category: "madrid",
    questions: rawEbepTest.questions.map(q => {
        return {
            questionText: q.question,
            options: q.options,
            correctAnswerIndex: q.answer,
        };
    })
};
