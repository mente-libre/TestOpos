
import type { Question, SeedExam } from './definitions';

const optionMap: { [key: string]: number } = { A: 0, B: 1, C: 2, D: 3 };

const rawMadrid2023Test = {
  "titulo": "Cuestionario Primer Ejercicio - Cuerpo de Auxiliares, Administración General, Comunidad de Madrid (2023)",
  "convocatoria": "Orden 1942/2023",
  "preguntas": [
    {
      "numero": 1,
      "enunciado": "“Sorprendente por insólito, escandaloso o vituperable” es:",
      "opciones": {
        "A": "indómito",
        "B": "veraz",
        "C": "pulcro",
        "D": "inaudito"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 2,
      "enunciado": "Observe el siguiente grupo de palabras: insulso / dársena / deponer / tedio / perfidia. Indique la respuesta A, B, C o D que contenga un sinónimo para cada una de las palabras del grupo observado:",
      "opciones": {
        "A": "insípido / cazuela / desentonar / aburrimiento / hambre",
        "B": "saludable / fondeadero / dejar / talento / fidelidad",
        "C": "insípido / fondeadero / dejar / aburrimiento / traición",
        "D": "salobreño / cazuela / mantener / talento / traición"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 3,
      "enunciado": "Preceder es a suceder como omitir es a _____:",
      "opciones": {
        "A": "mencionar",
        "B": "corregir",
        "C": "mentir",
        "D": "callar"
      },
      "respuesta_correcta": "A"
    }
  ]
};

export const madrid2023Test: SeedExam = {
    id: "madrid-2023",
    name: rawMadrid2023Test.titulo,
    fileName: rawMadrid2023Test.titulo,
    category: "madrid",
    questions: rawMadrid2023Test.preguntas.map(q => {
        const options = Object.values(q.opciones);
        // Pad with "N/A" if less than 4 options
        while (options.length < 4) {
          options.push("N/A");
        }
        return {
            questionText: q.enunciado,
            options: options as [string, string, string, string],
            correctAnswerIndex: optionMap[q.respuesta_correcta],
        };
    })
};
