
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
        "pregunta": "Pregunta sobre: Primer Ejercicio del Proceso Selectivo para ingreso en la Escala de Titulados Superiores del Instituto Nacional de Seguridad e Higiene en el Trabajo, O...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 2
      },
      {
        "numero": 2,
        "pregunta": "Pregunta sobre: febrero 2023...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 2
      },
      {
        "numero": 3,
        "pregunta": "Pregunta sobre: TEMA 28 EL SISTEMA ESPAÑOL DE LA SEGURIDAD SOCIAL...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 0
      },
      {
        "numero": 4,
        "pregunta": "Pregunta sobre: ESTRUCTURA: RÉGIMEN GENERAL Y REGÍMENES ESPECIALES...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 0
      },
      {
        "numero": 5,
        "pregunta": "Pregunta sobre: FUENTES DE FINANCIACIÓN...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 0
      },
      {
        "numero": 6,
        "pregunta": "Pregunta sobre: EL RÉGIMEN GENERAL: ACCIÓN PROTECTORA...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 3
      },
      {
        "numero": 7,
        "pregunta": "Pregunta sobre: CARACTERÍSTICAS DE LAS PRESTACIONES...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 3
      },
      {
        "numero": 8,
        "pregunta": "Pregunta sobre: CONTINGENCIAS CUBIERTAS...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 3
      },
      {
        "numero": 9,
        "pregunta": "Pregunta sobre: LAS ENTIDADES GESTORAS...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 1
      },
      {
        "numero": 10,
        "pregunta": "Pregunta sobre: LAS MUTUAS COLABORADORAS CON LA SEGURIDAD SOCIAL...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 0
      },
      {
        "numero": 11,
        "pregunta": "Pregunta sobre: EMPRESAS COLABORADORAS EN LA GESTIÓN DE LA SEGURIDAD SOCIAL 1...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 0
      },
      {
        "numero": 12,
        "pregunta": "Pregunta sobre: EL SISTEMA ESPAÑOL DE LA SEGURIDAD SOCIAL El artículo 41 de la Constitución española establece el derecho de todos los españoles a la Seguridad Social, configurando un modelo de carácter universalista que se extiende a toda la población, con independencia del ejercicio de una actividad laboral...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 1
      },
      {
        "numero": 13,
        "pregunta": "Pregunta sobre: Esta universalización se implantó a través de la Ley 26/1990, que operó modificaciones en la Ley de 1974, que posteriormente se integraron en el Texto Refundido de 1994 y cuyo contenido se mantiene en la vigente Ley General de la Seguridad Social, cuyo Texto Refundido es aprobado mediante Real Decreto Legislativo 8/2015, de 30 de octubre (en adelante TRLGSS) El artículo 1 TRLGSS establece que el derecho de los españoles a la Seguridad Social, establecido en el artículo 41 de la Constitución, se ajustará a lo dispuesto en la presente ley...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 1
      },
      {
        "numero": 14,
        "pregunta": "Pregunta sobre: El artículo 2, bajo la rúbrica de “principios y fines de la Seguridad Social” establece: “El sistema de la Seguridad Social, configurado por la acción protectora en sus modalidades contributiva y no contributiva, se fundamenta en los principios de universalidad, unidad, solidaridad e igualdad...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 2
      },
      {
        "numero": 15,
        "pregunta": "Pregunta sobre: El Estado, por medio de la Seguridad Social, garantiza a las personas comprendidas en el campo de aplicación de esta, por cumplir los requisitos exigidos en las modalidades contributiva o no contributiva, así como a los familiares o asimilados que tuvieran a su cargo, la protección adecuada frente a las contingencias y en las situaciones que se contemplan en esta ley”...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 3
      },
      {
        "numero": 16,
        "pregunta": "Pregunta sobre: El artículo 7 TRLGSS establece la extensión del campo de aplicación del Sistema de Seguridad Social, diferenciando en sus dos primeros apartados el carácter profesional y universalista del sistema, respectivamente...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 1
      },
      {
        "numero": 17,
        "pregunta": "Pregunta sobre: Estarán comprendidos en el sistema de la Seguridad Social, a efectos de las prestaciones contributivas, cualquiera que sea su sexo, estado civil y profesión, los españoles que residan en España y los extranjeros que residan o se encuentren legalmente en España, siempre que, en ambos supuestos, ejerzan su actividad en territorio nacional y estén incluidos en alguno de los apartados siguientes: a) Trabajadores por cuenta ajena que presten sus servicios en las condiciones establecidas por el artículo 1...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 3
      },
      {
        "numero": 18,
        "pregunta": "Pregunta sobre: 1 del texto refundido de la Ley del Estatuto de los Trabajadores, en las distintas ramas de la actividad económica o asimilados a ellos, bien sean eventuales, de temporada o fijos, aun de trabajo discontinuo, e incluidos los trabajadores a distancia, y con independencia, en todos los casos, del grupo profesional del trabajador, de la forma y cuantía de la remuneración que perciba y de la naturaleza común o especial de su relación laboral...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 0
      },
      {
        "numero": 19,
        "pregunta": "Pregunta sobre: 1 Primer Ejercicio del Proceso Selectivo para ingreso en la Escala de Titulados Superiores del Instituto Nacional de Seguridad e Higiene en el Trabajo, O...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 0
      },
      {
        "numero": 20,
        "pregunta": "Pregunta sobre: febrero 2023...",
        "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
        "respuesta_correcta": 2
      }
    ]
};

export const officeTest: SeedExam = {
    fileName: rawOfficeTest.fileName,
    category: rawOfficeTest.category,
    questions: rawOfficeTest.questions.map(q => {
        return {
            questionText: q.pregunta,
            options: q.opciones as [string, string, string, string],
            correctAnswerIndex: q.respuesta_correcta,
        };
    })
};
