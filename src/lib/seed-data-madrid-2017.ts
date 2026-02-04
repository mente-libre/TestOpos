
import type { Question, SeedExam } from './definitions';

const optionMap: { [key: string]: number } = { A: 0, B: 1, C: 2, D: 3 };

const rawMadrid2017Test = {
  "titulo": "Pruebas selectivas para el ingreso en el Cuerpo de Auxiliares de Administración General de la Comunidad de Madrid",
  "convocatoria": "Orden 2411/2017",
  "preguntas": [
    {
      "numero": 1,
      "enunciado": "Según la Constitución Española, la soberanía nacional reside en:",
      "opciones": {
        "A": "Las Cortes Generales",
        "B": "El pueblo español",
        "C": "El Rey",
        "D": "El Gobierno de la Nación"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 2,
      "enunciado": "Los miembros del Tribunal Constitucional son nombrados por:",
      "opciones": {
        "A": "El Rey",
        "B": "Las Cortes Generales",
        "C": "El Presidente del Gobierno",
        "D": "El Consejo General del Poder Judicial"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 3,
      "enunciado": "El Defensor del Pueblo es designado por:",
      "opciones": {
        "A": "El Congreso de los Diputados",
        "B": "El Senado",
        "C": "Las Cortes Generales",
        "D": "El Gobierno"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 4,
      "enunciado": "La iniciativa legislativa corresponde:",
      "opciones": {
        "A": "Exclusivamente al Gobierno",
        "B": "Exclusivamente a las Cortes Generales",
        "C": "Al Gobierno, al Congreso, al Senado y a las Asambleas de las Comunidades Autónomas",
        "D": "Solo al Gobierno y a las Cortes Generales"
      },
      "respuesta_correcta": "C"
    }
  ]
};

export const madrid2017Test: SeedExam = {
    id: "madrid-2017",
    name: rawMadrid2017Test.titulo,
    fileName: rawMadrid2017Test.titulo,
    category: "madrid",
    questions: rawMadrid2017Test.preguntas.map(q => {
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
