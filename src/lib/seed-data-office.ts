

import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const optionMap: { [key: string]: number } = { A: 0, B: 1, C: 2, D: 3 };

const rawOfficeTest = {
    fileName: "Test Microsoft Office (Word y Excel)",
    category: "otros",
    questions: [
      {
        "numero": 1,
        "pregunta": "En el Programa de tratamiento de textos 'Microsoft Office 365: Word’ ¿con qué método abreviado de teclado podemos activar y desactivar la marca de párrafo?",
        "opciones": {
          "A": "Ctrl+(",
          "B": "Ctrl+M",
          "C": "Ctrl+/",
          "D": " "
        },
        "respuesta_correcta": "A"
      },
      {
        "numero": 2,
        "pregunta": "En el Programa de tratamiento de textos 'Microsoft Office 365: Word’ ¿en qué pestaña de la Cinta de opciones podemos encontrar la opción 'Insertar nota al final'?",
        "opciones": {
          "A": "Insertar",
          "B": "Disposición",
          "C": "Referencias",
          "D": " "
        },
        "respuesta_correcta": "C"
      },
      {
        "numero": 3,
        "pregunta": "En el Programa de tratamiento de textos 'Microsoft Office 365: Word’ ¿qué pasos debemos seguir para conservar dos párrafos juntos en una misma página?",
        "opciones": {
          "A": "Seleccionar los párrafos... desactivar 'Control de líneas viudas y huérfanas'.",
          "B": "Seleccionar los párrafos... activar 'Conservar con el siguiente'.",
          "C": "Seleccionar los párrafos... activar 'Conservar párrafos juntos'.",
          "D": " "
        },
        "respuesta_correcta": "B"
      },
      {
        "numero": 4,
        "pregunta": "En la imagen del supuesto, a la palabra 'Oferta' se le ha aplicado en el siguiente orden: negrita, cursiva y tamaño 18. Si señalamos otra palabra del texto y pulsamos la tecla F4, ¿qué ocurrirá?",
        "opciones": {
          "A": "No ocurrirá nada.",
          "B": "Se le aplicará negrita, cursiva y tamaño 18.",
          "C": "Se le aplicará el tamaño 18.",
          "D": " "
        },
        "respuesta_correcta": "C"
      },
      {
        "numero": 5,
        "pregunta": "En Word, ¿cómo se puede seleccionar el contenido de la celda anterior de una tabla respecto de la que se encuentre el cursor, con un método abreviado del teclado?",
        "opciones": {
          "A": "Mayús+Alt+Inicio",
          "B": "Mayús+Teclas de dirección",
          "C": "Mayús+Tab",
          "D": " "
        },
        "respuesta_correcta": "C"
      },
      {
        "numero": 6,
        "pregunta": "En Excel, ¿cómo se puede activar el filtrado de las celdas seleccionadas con un método abreviado del teclado?",
        "opciones": {
          "A": "Ctrl+Mayús+L",
          "B": "Ctrl+Alt+F",
          "C": "Ctrl+F",
          "D": " "
        },
        "respuesta_correcta": "A"
      },
      {
        "numero": 7,
        "pregunta": "En Excel, ¿qué fórmula devuelve el número total de días laborales entre dos fechas?",
        "opciones": {
          "A": "DIA.LAB.INTL",
          "B": "DIAS.LAB",
          "C": "DIAS.LAB.INTL",
          "D": " "
        },
        "respuesta_correcta": "B"
      },
      {
        "numero": 8,
        "pregunta": "En la celda D15 del supuesto se ha utilizado una fórmula. Señala la fórmula correcta:",
        "opciones": {
          "A": "=BUSCARV(A4:F8;B15;5;FALSO)",
          "B": "=BUSCARV(5;B15;A4:F8;FALSO)",
          "C": "=BUSCARV(B15;A4:F8;5;FALSO)",
          "D": " "
        },
        "respuesta_correcta": "C"
      },
      {
        "numero": 9,
        "pregunta": "En Excel, cuando se usa el apóstrofe antes de un número (ej. en la celda A17), ¿cómo lo trata Excel y cómo se visualizaría?",
        "opciones": {
          "A": "Excel lo trata como número y se visualizaría 05",
          "B": "Excel lo trata como texto y se visualizaría 05",
          "C": "Excel lo trata como texto y se visualizaría 5",
          "D": " "
        },
        "respuesta_correcta": "B"
      }
    ]
};

export const officeTest: SeedExam = {
    fileName: rawOfficeTest.fileName,
    category: rawOfficeTest.category,
    questions: rawOfficeTest.questions.map(q => {
        return {
            questionText: q.pregunta,
            options: Object.values(q.opciones),
            correctAnswerIndex: optionMap[q.respuesta_correcta],
        };
    })
};
