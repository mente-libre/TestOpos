
import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const rawEbepMediumTest = {
    fileName: "EBEP - Nivel Medio (RD 5/2015)",
    category: "madrid",
    questions: [
    {
      "questionText": "Pregunta sobre: Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se \naprueba el texto refundido de la Ley del Estatuto Básico del \nEmpleado Público...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 3
    },
    {
      "questionText": "Pregunta sobre: Ministerio de Hacienda y Administraciones Públicas\n «BOE» núm...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 3
    },
    {
      "questionText": "Pregunta sobre: 261, de 31 de octubre de 2015\n Referencia: BOE-A-2015-11719\n ÍNDICE\n   \nPreámbulo...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "Pregunta sobre: 7\n Artículos...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 3
    },
    {
      "questionText": "Pregunta sobre: 8\n Artículo único...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "Pregunta sobre: Aprobación del texto refundido de la Ley del Estatuto Básico del Empleado Público...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "Pregunta sobre: 8\n Disposiciones adicionales...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "Pregunta sobre: 8\n Disposición adicional única...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 3
    },
    {
      "questionText": "Pregunta sobre: Remisiones normativas...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "Pregunta sobre: 8\n Disposiciones derogatorias...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "Pregunta sobre: 8\n Disposición derogatoria única...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "Pregunta sobre: Derogación normativa...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 3
    },
    {
      "questionText": "Pregunta sobre: 8\n Disposiciones finales...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "Pregunta sobre: 8\n Disposición final única...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "Pregunta sobre: Entrada en vigor...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 2
    },
    {
      "questionText": "Pregunta sobre: 8\n TEXTO REFUNDIDO DE LA LEY DEL ESTATUTO BÁSICO DEL EMPLEADO PÚBLICO...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 3
    },
    {
      "questionText": "Pregunta sobre: 9\n TÍTULO I...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 0
    },
    {
      "questionText": "Pregunta sobre: Objeto y ámbito de aplicación...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 3
    },
    {
      "questionText": "Pregunta sobre: 9\n Artículo 1...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 1
    },
    {
      "questionText": "Pregunta sobre: 9\n Artículo 2...",
      "options": [
        "Opción A",
        "Opción B",
        "Opción C",
        "Opción D"
      ],
      "correctAnswerIndex": 3
    }
  ]
};

export const advoGeneralTestMedium: SeedExam = {
    fileName: rawEbepMediumTest.fileName,
    category: rawEbepMediumTest.category,
    questions: rawEbepMediumTest.questions.map(q => {
        // The user's JSON uses `answer` for the index, we map it to `correctAnswerIndex`
        return {
            questionText: q.questionText,
            options: q.options,
            correctAnswerIndex: q.correctAnswerIndex,
        };
    })
};
