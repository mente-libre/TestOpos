
import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const rawLey9Test = {
  "title": "Ley 9/1990 - Hacienda de la Comunidad de Madrid",
  "description": "LEY 9/1990, de 8 de noviembre, REGULADORA DE LA HACIENDA DE LA COMUNIDAD DE MADRID",
  "type": "multiple",
  "questions": [
    {
      "id": 1,
      "question": "¿LEY HACIENDA DE LA COMUNIDAD DE MADRID\n LEY 9/1990, de 8 de noviembre, REGULADORA DE LA HACIENDA DE LA COMUNIDAD DE MADRID \nTÍTULO PRELIMINAR?",
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
      "question": "¿PRINCIPIOS GENERALES \nTÍTULO I?",
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
      "question": "¿DEL RÉGIMEN DE LA HACIENDA DE LA COMUNIDAD DE MADRID?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 0
    },
    {
      "id": 4,
      "question": "¿Capítulo I?",
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
      "question": "¿Los bienes y derechos de la Hacienda de la Comunidad de Madrid?",
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
      "question": "¿Capítulo II?",
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
      "question": "¿Las obligaciones de la Hacienda de la Comunidad de Madrid?",
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
      "question": "¿TÍTULO II?",
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
      "question": "¿DE LOS PRESUPUESTOS \nCapítulo I?",
      "options": [
        "Sí, en todos los casos",
        "No, en ningún caso",
        "Solo para funcionarios interinos",
        "Depende del puesto"
      ],
      "answer": 3
    },
    {
      "id": 10,
      "question": "¿Presupuestos Generales de la Comunidad de Madrid?",
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
      "question": "¿Sección 1ª?",
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
      "question": "¿Contenido y aprobación?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 3
    },
    {
      "id": 13,
      "question": "¿44-53) \nSección 2ª?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 0
    },
    {
      "id": 14,
      "question": "¿Régimen de los créditos y sus modificaciones de la Administración \nde la Comunidad de Madrid y sus organismos autónomos \nSección 3ª?",
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
      "question": "¿Ejecución y liquidación de los Presupuestos de la Administración de \nla Comunidad de Madrid y sus organismos autónomos \nCapítulo II?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 2
    },
    {
      "id": 16,
      "question": "¿Presupuestos de las Empresas y Entes Públicos?",
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
      "question": "¿TÍTULO III?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 1
    },
    {
      "id": 18,
      "question": "¿DE LA INTERVENCIÓN \nCapítulo I?",
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
      "question": "¿La Intervención de la Administración de la Comunidad?",
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
      "question": "¿Capítulo II?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 2
    },
    {
      "id": 21,
      "question": "¿La Intervención de los Organismos Autónomos de la Comunidad \nde Madrid?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 0
    },
    {
      "id": 22,
      "question": "¿TÍTULO IV?",
      "options": [
        "El Ministerio de Política Territorial",
        "Cada administración pública",
        "El Ministerio de Hacienda",
        "Los sindicatos"
      ],
      "answer": 0
    },
    {
      "id": 23,
      "question": "¿DEL ENDEUDAMIENTO Y LOS AVALES \nCapítulo I?",
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
      "question": "¿Del endeudamiento?",
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
      "question": "¿Capítulo II?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 0
    },
    {
      "id": 26,
      "question": "¿De los avales  de la Comunidad de Madrid?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 2
    },
    {
      "id": 27,
      "question": "¿DE LA TESORERÍA \nDirección General de Presupuestos \nCONSEJERÍA DE ECONOMÍA, HACIENDA Y EMPLEO – COMUNIDAD DE MADRID \n(Arts?",
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
      "question": "¿1-20) \n(Arts?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 1
    },
    {
      "id": 29,
      "question": "¿21-37) \n(Arts?",
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
      "question": "¿38-43) \n(Arts?",
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
      "question": "¿54-67) \n(Arts?",
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
      "question": "¿68-78) \n(Arts?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 3
    },
    {
      "id": 33,
      "question": "¿79-81) \n(Arts 82-88) \n(Art?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 2
    },
    {
      "id": 34,
      "question": "¿89) \n(Arts?",
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
      "question": "¿90-96) \n(Arts?",
      "options": [
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"
      ],
      "answer": 0
    },
    {
      "id": 36,
      "question": "¿97-103) \n(Arts?",
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
      "question": "¿104-112) \n2/80\n NORMATIVA PRESUPUESTARIA DE LA C?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Depende del caso",
        "Solo en situaciones especiales"
      ],
      "answer": 0
    },
    {
      "id": 38,
      "question": "¿TÍTULO VI?",
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
      "question": "¿DE LA CONTABILIDAD PÚBLICA \nCapítulo I?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 1
    },
    {
      "id": 40,
      "question": "¿Disposiciones Generales?",
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
      "question": "¿Capítulo II?",
      "options": [
        "15 días",
        "30 días",
        "3 meses",
        "6 meses"
      ],
      "answer": 1
    },
    {
      "id": 42,
      "question": "¿De la Cuenta General de la Comunidad de Madrid?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 3
    },
    {
      "id": 43,
      "question": "¿TÍTULO VII?",
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
      "question": "¿DE LAS RESPONSABILIDADES \nDISPOSICIONES ADICIONALES \nDISPOSICIONES TRANSITORIAS \nDISPOSICIÓN FINAL \nDISPOSICIÓN DEROGATORIA \nDirección General de Presupuestos \nCONSEJERÍA DE ECONOMÍA, HACIENDA Y EMPLEO – COMUNIDAD DE MADRID \n(Arts?",
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
      "question": "¿113-122) \n(Arts?",
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
      "question": "¿123-128) \n(Arts?",
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
      "question": "¿129-134) \n3/80\n § I?",
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
      "question": "¿LEY HACIENDA DE LA COMUNIDAD DE MADRID \nLEY 9/1990, de 8 de noviembre, REGULADORA DE LA HACIENDA DE LA COMUNIDAD DE \nMADRID (1) \nEXPOSICIÓN DE MOTIVOS \nLa Disposición Transitoria Primera del Estatuto de Autonomía de la Comunidad de Madrid, aprobado por Ley \nOrgánica 3/1983, de 25 de febrero, establece la aplicación de las leyes y disposiciones del Estado en materias no \nreguladas por la Asamblea de Madrid, circunstancia que junto con las reiteradas y expresas remisiones de la Ley \n1/1983, de 13 de diciembre, de Gobierno y Administración de la Comunidad de Madrid, ha determinado la aplicación \ndirecta e indiscriminada al ámbito de nuestra Administración de la Ley 11/1977, de 4 de enero, General \nPresupuestaria, cuyo Texto Refundido fue aprobado por el Real Decreto Legislativo 1091/1988, de 23 de septiembre?",
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
      "question": "¿Por otra parte, es ésta una materia sobre la que la doctrina y la jurisprudencia han abrigado dudas y planteamientos \ndispares acerca de la naturaleza de básicos de ciertos preceptos de la citada norma y, por ende, del ámbito de \nactuación reservado a las Comunidades Autónomas, cuestión que puede considerarse clarificada por la Sentencia \ndel Tribunal Constitucional 14/1986, de 31 de enero, a cuyos principios interpretativos se acomoda la presente Ley?",
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
      "question": "¿Resulta necesaria, por tanto, la regulación expresa del régimen de la Hacienda de la Comunidad de Madrid \ncoordinándose con la legislación del Estado en las materias reservadas a la normación básica, y desarrollando \narmónicamente aquellos otros aspectos propios de la Administración Autónoma, en la forma que más convenga a sus \nintereses peculiares, respetando en todo caso el marco normativo institucional superior establecido por la \nConstitución y las Leyes Orgánicas de desarrollo, principalmente la 8/1980, de 22 de septiembre, de Financiación de \nlas Comunidades Autónomas?",
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
      "question": "¿La organización del Estado de las Autonomías que consagra la Constitución Española de 1978 ha supuesto un giro \nradical, al configurarse las Comunidades Autónomas con unas peculiaridades que en el transcurso del tiempo la \nexperiencia va poniendo de manifiesto en un doble sentido: con respecto al Estado y, además, entre cada una de \nellas, aunque en muchos casos no sean sustanciales?",
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
      "question": "¿En este escenario, en los últimos años se viene produciendo una acelerada evolución de la doctrina de la Hacienda, \na la que contribuye el fenómeno apuntado anteriormente y en la que las aportaciones de las Comunidades \nAutónomas adquieren un peso relevante?",
      "options": [
        "Por real decreto",
        "Por ley orgánica",
        "Por acuerdo del consejo de ministros",
        "Por orden ministerial"
      ],
      "answer": 0
    },
    {
      "id": 53,
      "question": "¿La jurisprudencia tampoco es ajena al cambio?",
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
      "question": "¿En el ámbito de la Comunidad de Madrid, se viene configurando un Sector Público bajo una concepción integradora y \nuniforme, cohesionado en su actividad económico-financiera, a pesar de la  diversidad  de  sus  agentes y  sus  \npeculiaridades  estructurales  y  jurídicas?",
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
      "question": "¿A partir de este fenómeno, sin duda intencionado en aras de una \nracionalización de la Administración autónoma, puede comprenderse una filosofía que trata de plasmar la presente \nLey: los agentes del Sector Público no son compartimentos estancos, ni ajenos a una Administración de los Servicios \nCentrales, con independencia de las finalidades y objetivos concretos que persiga cada uno de ellos?",
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
      "question": "¿El sistema de financiación de las Comunidades Autónomas, y en particular los recursos de la Comunidad de Madrid \nrequieren unos instrumentos de gestión y soportes legales adaptados a sus necesidades?",
      "options": [
        "Verdadero",
        "Falso",
        "Parcialmente verdadero",
        "No aplicable"
      ],
      "answer": 1
    },
    {
      "id": 57,
      "question": "¿El problema no es \ncuantitativo, sino cualitativo?",
      "options": [
        "De 1 a 5 años",
        "De 3 a 7 años",
        "No tiene límite",
        "Hasta la jubilación"
      ],
      "answer": 0
    },
    {
      "id": 58,
      "question": "¿La diversidad de figuras y la interdependencia existente en la gestión de los recursos, \n(1) B?",
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
      "question": "¿13-XII-1990?",
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
      "question": "¿Dirección General de Presupuestos \nCONSEJERÍA DE ECONOMÍA, HACIENDA Y EMPLEO – COMUNIDAD DE MADRID \n4/80\n NORMATIVA PRESUPUESTARIA DE LA C?",
      "options": [
        "Sí, siempre",
        "No, nunca",
        "Solo para altos cargos",
        "Depende de la administración"
      ],
      "answer": 2
    }
  ]
}

const transformedQuestions: Question[] = rawLey9Test.questions.map(q => ({
    questionText: q.question,
    options: q.options,
    correctAnswerIndex: q.answer,
}));

export const ley9_1990Test: SeedExam = {
    fileName: rawLey9Test.title,
    category: 'ley9-1990',
    questions: transformedQuestions,
};
