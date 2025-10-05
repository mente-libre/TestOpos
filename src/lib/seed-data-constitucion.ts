
import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const rawConstitucionTest = {
  "title": "Constitución Española",
  "description": "Constitución Española.",
  "type": "multiple",
  "questions": [
    {
      "id": 1,
      "question": "¿Constitución Española?",
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
      "question": "¿Cortes Generales\n «BOE» núm?",
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
      "question": "¿311, de 29 de diciembre de 1978\n Referencia: BOE-A-1978-31229\n ÍNDICE\n   \nPreámbulo?",
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
      "question": "¿3\n TÍTULO PRELIMINAR?",
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
      "question": "¿3\n TÍTULO I?",
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
      "question": "¿De los derechos y deberes fundamentales?",
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
      "question": "¿4\n CAPÍTULO PRIMERO?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 1
    },
    {
      "id": 8,
      "question": "¿De los españoles y los extranjeros?",
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
      "question": "¿5\n CAPÍTULO SEGUNDO?",
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
      "question": "¿Derechos y libertades?",
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
      "question": "¿5\n Sección 1?",
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
      "question": "¿ª De los derechos fundamentales y de las libertades públicas?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 0
    },
    {
      "id": 13,
      "question": "¿5\n Sección 2?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 3
    },
    {
      "id": 14,
      "question": "¿ª De los derechos y deberes de los ciudadanos?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 2
    },
    {
      "id": 15,
      "question": "¿8\n CAPÍTULO TERCERO?",
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
      "question": "¿De los principios rectores de la política social y económica?",
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
      "question": "¿10\n CAPÍTULO CUARTO?",
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
      "question": "¿De las garantías de las libertades y derechos fundamentales?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 3
    },
    {
      "id": 19,
      "question": "¿12\n CAPÍTULO QUINTO?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 0
    },
    {
      "id": 20,
      "question": "¿De la suspensión de los derechos y libertades?",
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
      "question": "¿12\n TÍTULO II?",
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
      "question": "¿De la Corona?",
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
      "id": 24,
      "question": "¿De las Cortes Generales?",
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
      "question": "¿14\n CAPÍTULO PRIMERO?",
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
      "question": "¿De las Cámaras?",
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
      "question": "¿14\n CAPÍTULO SEGUNDO?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 2
    },
    {
      "id": 28,
      "question": "¿De la elaboración de las leyes?",
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
      "question": "¿17\n CAPÍTULO TERCERO?",
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
      "question": "¿De los Tratados Internacionales?",
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
      "question": "¿19\n TÍTULO IV?",
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
      "question": "¿Del Gobierno y de la Administración?",
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
      "question": "¿20\n TÍTULO V?",
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
      "question": "¿De las relaciones entre el Gobierno y las Cortes Generales?",
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
      "question": "¿22\n TÍTULO VI?",
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
      "question": "¿Del Poder Judicial?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 3
    },
    {
      "id": 37,
      "question": "¿24\n TÍTULO VII?",
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
      "question": "¿Economía y Hacienda?",
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
      "question": "¿25\n LEGISLACIÓN CONSOLIDADA\n Página 1\nTÍTULO VIII?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 3
    },
    {
      "id": 40,
      "question": "¿De la Organización Territorial del Estado?",
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
      "question": "¿28\n CAPÍTULO PRIMERO?",
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
      "question": "¿Principios generales?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 2
    },
    {
      "id": 43,
      "question": "¿28\n CAPÍTULO SEGUNDO?",
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
      "question": "¿De la Administración Local?",
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
      "question": "¿28\n CAPÍTULO TERCERO?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 3
    },
    {
      "id": 46,
      "question": "¿De las Comunidades Autónomas?",
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
      "question": "¿29\n TÍTULO IX?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 2
    },
    {
      "id": 48,
      "question": "¿Del Tribunal Constitucional?",
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
      "question": "¿35\n TÍTULO X?",
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
      "question": "¿De la reforma constitucional?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 3
    },
    {
      "id": 51,
      "question": "¿36\n DISPOSICIONES ADICIONALES?",
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
      "question": "¿37\n DISPOSICIONES TRANSITORIAS?",
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
      "question": "¿37\n DISPOSICION DEROGATORIA?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 2
    },
    {
      "id": 54,
      "question": "¿39\n DISPOSICION FINAL?",
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
      "question": "¿39\n BOLETÍN OFICIAL DEL ESTADO\n LEGISLACIÓN CONSOLIDADA\n Página 2\nBOLETÍN OFICIAL DEL ESTADO\n LEGISLACIÓN CONSOLIDADA\n TEXTO CONSOLIDADO\n Última modificación: 17 de febrero de 2024\n DON JUAN CARLOS I, REY DE ESPAÑA, A TODOS LOS QUE LA PRESENTE VIEREN \nY ENTENDIEREN,\n SABED: QUE LAS CORTES HAN APROBADO Y EL PUEBLO ESPAÑOL RATIFICADO \nLA SIGUIENTE CONSTITUCIÓN:\n PREÁMBULO\n La Nación española, deseando establecer la justicia, la libertad y la seguridad y \npromover el bien de cuantos la integran, en uso de su soberanía, proclama su voluntad de:\n Garantizar la convivencia democrática dentro de la Constitución y de las leyes conforme \na un orden económico y social justo?",
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
      "question": "¿Consolidar un Estado de Derecho que asegure el imperio de la ley como expresión de la \nvoluntad popular?",
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
      "question": "¿Proteger a todos los españoles y pueblos de España en el ejercicio de los derechos \nhumanos, sus culturas y tradiciones, lenguas e instituciones?",
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
      "question": "¿Promover el progreso de la cultura y de la economía para asegurar a todos una digna \ncalidad de vida?",
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
      "question": "¿Establecer una sociedad democrática avanzada, y\n Colaborar en el fortalecimiento de unas relaciones pacíficas y de eficaz cooperación \nentre todos los pueblos de la Tierra?",
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
      "question": "¿En consecuencia, las Cortes aprueban y el pueblo español ratifica la siguiente\n CONSTITUCIÓN\n TÍTULO PRELIMINAR\n Artículo 1?",
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
const optionMap: { [key: string]: number } = { a: 0, b: 1, c: 2, d: 3 };
export const constitucionTest: SeedExam = {
    fileName: rawConstitucionTest.title,
    category: "estado",
    questions: rawConstitucionTest.questions.map(q => {
        return {
            questionText: q.question,
            options: q.options,
            correctAnswerIndex: q.answer,
        };
    })
};

    