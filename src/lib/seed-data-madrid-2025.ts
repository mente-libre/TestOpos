
import type { Question, SeedExam } from './definitions';

const optionMap: { [key: string]: number } = { A: 0, B: 1, C: 2, D: 3 };

const rawMadrid2025Test = {
  "titulo": "Cuestionario Primer Ejercicio - Cuerpo de Auxiliares, Administración General, Comunidad de Madrid - Llamamiento Extraordinario",
  "convocatoria": "Orden 1942/2023 - Llamamiento 7 Febrero 2025",
  "preguntas": [
    {
      "numero": 1,
      "enunciado": "“Raro, extravagante o fuera de lo común” es:",
      "opciones": {
        "A": "bizarro",
        "B": "lerdo",
        "C": "bizco",
        "D": "zarrapastroso"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 2,
      "enunciado": "Observe el siguiente grupo de palabras: socavado / lívido / dicotomía / timorato / emanar. Indique la respuesta A, B, C o D que contenga un sinónimo para cada una de las palabras del grupo observado:",
      "opciones": {
        "A": "debilitado / lento / nimiedad / tímido / departir",
        "B": "suscrito / amoratado / nimiedad / tembloroso / departir",
        "C": "debilitado / amoratado / división / tímido / proceder",
        "D": "suscrito / lento / concentración / atrevido / proceder"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 3,
      "enunciado": "Cordialidad es a falsedad como esplendor es a ______:",
      "opciones": {
        "A": "ventisca",
        "B": "lucha",
        "C": "principio",
        "D": "decadencia"
      },
      "respuesta_correcta": "D"
    }
  ]
};

export const madrid2025Test: SeedExam = {
    id: "madrid-2025",
    name: rawMadrid2025Test.titulo,
    fileName: rawMadrid2025Test.titulo,
    category: "madrid",
    questions: rawMadrid2025Test.preguntas.map(q => {
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
