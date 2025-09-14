import type { Question } from './firebase/firestore';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

export const madridAdminTest: SeedExam = {
    fileName: "Test Auxiliar Administrativo - Comunidad de Madrid (Demo)",
    category: "madrid",
    questions: [
        {
            questionText: "Los Derechos fundamentales y las Libertades Públicas, se recogen en:",
            options: [
                "En el Capítulo III, Sección primera del Título I de la Constitución española de 1978.",
                "En el Capítulo III, Sección segunda del Título II de la Constitución española de 1978.",
                "En el Capítulo II, Sección primera del Título I de la Constitución española de 1978.",
                "En el Capítulo II, Sección segunda del Título I de la Constitución española de 1978."
            ],
            correctAnswerIndex: 2, // C
            explanation: "La respuesta correcta es C. Los Derechos fundamentales y las Libertades Públicas se recogen en el Capítulo II, Sección primera del Título I de la Constitución española de 1978 (artículos 15 a 29)."
        },
        {
            questionText: "Señale cuál de las siguientes respuestas es la correcta de acuerdo con lo dispuesto en la Constitución española de 1978:",
            options: [
                "Cualquier ciudadano podrá recabar la tutela ante los Tribunales del derecho a la producción y creación literaria, artística, científica y técnica por un procedimiento basado en los principios de preferencia y sumariedad.",
                "Los miembros de las Fuerzas Armadas podrán recabar la tutela del derecho de petición, en el ejercicio individual y colectivo del mismo, a través del recurso de amparo.",
                "Cualquier ciudadano podrá recabar la tutela del derecho a la protección de la salud de la misma forma que la prevista en la respuesta A.",
                "Son correctas las respuestas A y C."
            ],
            correctAnswerIndex: 0, // A
            explanation: "La respuesta correcta es A. El artículo 53.2 de la Constitución establece que cualquier ciudadano podrá recabar la tutela de las libertades y derechos reconocidos en la Sección 1.ª del Capítulo II del Título I, entre los que se encuentra el derecho a la producción y creación literaria (art. 20.1.b)."
        },
        {
            questionText: "Señale la respuesta correcta, de conformidad con lo dispuesto en la Constitución española de 1978:",
            options: [
                "El mandato de los Senadores termina exclusivamente cuatro años después de su elección.",
                "Las poblaciones de Ceuta y Melilla elegirán cada una de ellas un Senador.",
                "La elección al Senado se verificará en cada circunscripción atendiendo a criterios de representación proporcional.",
                "El Senado es inviolable."
            ],
            correctAnswerIndex: 3, // D
            explanation: "La respuesta correcta es D. Según el artículo 66.3 de la Constitución, 'Las Cortes Generales son inviolables', y el Senado es parte de las Cortes Generales."
        },
        {
            questionText: "Cuando se habla de la delegación legislativa en la Constitución española de 1978 ¿cuál de las siguientes afirmaciones es la correcta?",
            options: [
                "Las Cortes Generales sólo podrá delegar en el Gobierno la potestad de dictar normas con rango de Ley en materias que no deban ser desarrolladas por una Ley Orgánica.",
                "La delegación legislativa deberá otorgarse en todo caso mediante una Ley de bases.",
                "No podrá entenderse concedida de modo implícito o por tiempo indeterminado.",
                "La delegación legislativa se agota en el momento de la entrada en vigor de la norma correspondiente."
            ],
            correctAnswerIndex: 2, // C
            explanation: "La respuesta correcta es C. El artículo 82.3 de la Constitución indica que la delegación 'no podrá entenderse concedida de modo implícito o por tiempo indeterminado'."
        },
        {
            questionText: "Señale la respuesta correcta, de acuerdo con lo dispuesto en la Constitución española de 1978.",
            options: [
                "La CE reconoce la iniciativa popular para la presentación de proyectos de Ley.",
                "Para el ejercicio de dicha iniciativa popular se exigirán no menos de 500.000 firmas acreditadas exclusivamente cuando afecte a los derechos fundamentales reconocidos en la Constitución.",
                "Tendrá que ser una Ley orgánica la que regule las formas de ejercicio y requisitos de la iniciativa popular, no procediendo su ejercicio en, entre otras, materias propias de leyes tributarias.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2, // C
            explanation: "La respuesta correcta es C. El artículo 87.3 de la Constitución establece que una Ley Orgánica regulará la iniciativa popular, y explícitamente excluye materias tributarias, de carácter internacional o lo relativo a la prerrogativa de gracia."
        }
    ]
};
