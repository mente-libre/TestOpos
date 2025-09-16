

import { type Question } from './definitions';

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

export const estadoConstitutionTest: SeedExam = {
    fileName: "Test General - Constitución Española (Demo)",
    category: "estado",
    questions: [
        {
            questionText: "Constitución. De la organización territorial del Estado. Una vez sancionados y promulgados los respectivos estatutos de autonomía:",
            options: [
                "Solamente podrán ser modificados mediante los procedimientos en ellos establecidos y con referéndum entre los electores inscritos en los censos correspondientes.",
                "Podrán establecer circunscripciones territoriales propias, que gozarán de plena personalidad jurídica.",
                "Podrán ser reformados para que la comunidad autónoma pueda ampliar sucesivamente sus competencias dentro del marco establecido en el artículo 148 CE.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "Artículo 152: 2. Una vez sancionados y promulgados los respectivos estatutos, solamente podrán ser modificados mediante los procedimientos en ellos establecidos y con referéndum entre los electores inscritos en los censos correspondientes."
        },
        {
            questionText: "Señala la respuesta incorrecta en relación con el Estado de Alarma:",
            options: [
                "La autoridad competente para declarar en todo o parte del territorio nacional, el Estado de Alarma, es el Gobierno.",
                "La duración máxima del Estado de Alarma será de 30 días. Sólo se podrá prorrogar con autorización expresa del Congreso de los Diputados.",
                "El decreto determinará el ámbito territorial a que se extienden los efectos de la declaración.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "El art. 116,2 CE: «El estado de alarma será declarado por el Gobierno mediante decreto acordado en Consejo de Ministros por un plazo máximo de quince días, dando cuenta al Congreso de los Diputados, reunido inmediatamente al efecto y sin cuya autorización no podrá ser prorrogado dicho plazo. El decreto determinará el ámbito territorial a que se extienden los efectos de la declaración»."
        },
        {
            questionText: "El Gobierno deberá presentar ante el Congreso de los Diputados los Presupuestos Generales del Estado:",
            options: [
                "Al menos un mes antes de la expiración de los del año anterior.",
                "Al menos tres meses antes de la expiración de los del año anterior.",
                "Al menos cuatro meses antes de la expiración de los del año anterior.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "ARTÍCULO 134. 3 CE. El Gobierno deberá presentar ante el Congreso de los Diputados los Presupuestos Generales del Estado al menos tres meses antes de la expiración de los del año anterior."
        },
        {
            questionText: "En base al artículo 16.1 de la CE, ¿qué limitación se impondrá a la libertad ideológica, religiosa y de culto de los individuos y las comunidades?:",
            options: [
                "La necesaria para el mantenimiento del orden público protegido por la ley.",
                "La prevista por la ley en cada caso.",
                "No se podrá imponer limitación alguna a estos derechos.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "ARTICULO 16.1 CE. Se garantiza la libertad ideológica, religiosa y de culto de los individuos y las comunidades sin más limitación, en sus manifestaciones, que la necesaria para el mantenimiento del orden público protegido por la ley."
        },
        {
            questionText: "La Constitución española dictamina que:",
            options: [
                "Los españoles de origen solo podrán ser privados de su nacionalidad por delito grave.",
                "La nacionalidad española se adquiere, se conserva y se pierde de acuerdo con lo establecido por la Constitución.",
                "Ningún español de origen podrá ser privado de su nacionalidad.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "Según el art. 11 CE: «La nacionalidad española se adquiere, se conserva y se pierde de acuerdo con lo establecido por la ley. Ningún español de origen podrá ser privado de su nacionalidad»."
        },
        {
            questionText: "¿Cuáles son los valores superiores del ordenamiento jurídico español?",
            options: [
                "Libertad, justicia, fraternidad y paz.",
                "Justicia, igualdad, solidaridad y fraternidad.",
                "Justicia, libertad, igualdad y pluralismo político.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "Según el artículo 1.1 de la Constitución Española, los valores superiores del ordenamiento jurídico son la justicia, la libertad, la igualdad y el pluralismo político, que inspiran y fundamentan el sistema democrático del país."
        },
        {
            questionText: "¿Ante quién rinde cuentas el Defensor del Pueblo?:",
            options: [
                "Ante el Gobierno de la nación.",
                "Ante el Congreso de los Diputados.",
                "Ante ambas Cámaras",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "ARTÍCULO 54 CE. Una ley orgánica regulará la institución del Defensor del Pueblo, como alto comisionado de las Cortes Generales, designado por éstas para la defensa de los derechos comprendidos en este Título, a cuyo efecto podrá supervisar la actividad de la Administración, dando cuenta a las Cortes Generales."
        },
        {
            questionText: "¿Cuál es el principal objetivo de la libertad de empresa según el artículo 38?",
            options: [
                "Garantizar la productividad en el marco de la economía de mercado.",
                "Subordinar la empresa al interés exclusivo del Estado.",
                "Restringir el comercio internacional.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "El artículo 38 reconoce la libertad de empresa dentro de la economía de mercado, lo que implica garantizar un entorno de libre competencia y favorecer la productividad. Ni restringir el comercio ni eliminar la competencia son compatibles con este principio constitucional."
        },
        {
            questionText: "De acuerdo con el artículo 64 CE, los actos del rey:",
            options: [
                "Serán refrendados por los ministros competentes.",
                "Serán refrendados por el presidente del gobierno y por los ministros competentes.",
                "Serán refrendados por el presidente del gobierno.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "ARTÍCULO 64 CE. 1. Los actos del Rey serán refrendados por el Presidente del Gobierno y, en su caso, por los Ministros competentes. La propuesta y el nombramiento del Presidente del Gobierno, y la disolución prevista en el artículo 99, serán refrendados por el Presidente del Congreso. 2. De los actos del Rey serán responsables las personas que los refrenden."
        },
        {
            questionText: "El art. 149 de la CE atribuye al Estado competencia exclusiva sobre una de las siguientes materias:",
            options: [
                "Sanidad e Higiene.",
                "La gestión en materia de protección del medio ambiente.",
                "Legislación básica sobre montes, aprovechamientos forestales y vías pecuarias.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "ARTÍCULO 149. 1. 23.ª CE. El Estado tiene competencia exclusiva sobre las siguientes materias: 23.ª Legislación básica sobre protección del medio ambiente, sin perjuicio de las facultades de las Comunidades Autónomas de establecer normas adicionales de protección. La legislación básica sobre montes, aprovechamientos forestales y vías pecuarias."
        },
        {
            questionText: "La ley regulará el ejercicio de la jurisdicción militar en el ámbito estrictamente castrense y en los supuestos de:",
            options: [
                "Estado de excepción.",
                "Estados de excepción y sitio.",
                "Estado de sitio.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "ARTÍCULO 117. 5 CE: El principio de unidad jurisdiccional es la base de la organización y funcionamiento de los Tribunales. La ley regulará el ejercicio de la jurisdicción militar en el ámbito estrictamente castrense y en los supuestos de estado de sitio, de acuerdo con los principios de la Constitución."
        },
        {
            questionText: "¿Qué artículo de la Constitución garantiza la libertad de circulación de personas y bienes?",
            options: [ "142", "137", "139", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 2,
            explanation: "El artículo 139 de la Constitución garantiza que todos los españoles tienen los mismos derechos y obligaciones en cualquier parte del territorio español, y asegura la libertad de circulación de personas y bienes por todo el territorio nacional."
        },
        {
            questionText: "El estado de excepción será declarado por el Gobierno mediante decreto, acordado en Consejo de Ministros:",
            options: [
                "Previa autorización del Congreso de los Diputados.",
                "Sin necesidad de autorización ni dar cuenta ante el Congreso de los Diputados.",
                "Con autorización del rey.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "ARTÍCULO 116.3. El estado de excepción será declarado por el Gobierno mediante decreto acordado en Consejo de Ministros, previa autorización del Congreso de los Diputados. La autorización y proclamación del estado de excepción deberá determinar expresamente los efectos del mismo, el ámbito territorial a que se extiende y su duración, que no podrá exceder de treinta días, prorrogables por otro plazo igual, con los mismos requisitos."
        },
        {
            questionText: "¿Qué capítulo del Título I regula la suspensión de derechos?",
            options: [ "Capítulo II.", "Capítulo V.", "Capítulo I.", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 1,
            explanation: "El Capítulo V del Título I de la Constitución Española regula las circunstancias en las que pueden suspenderse ciertos derechos, bajo condiciones específicas y en situaciones de excepción o estado de sitio."
        },
        {
            questionText: "¿Qué materia puede asumir una Comunidad Autónoma según el artículo 148 de la Constitución?",
            options: [ "Defensa.", "Urbanismo.", "Justicia.", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 1,
            explanation: "El artículo 148 enumera las materias que las Comunidades Autónomas pueden asumir en sus estatutos de autonomía. Urbanismo es una de estas competencias. En cambio, defensa y relaciones internacionales son competencias exclusivas del Estado (art. 149), y la administración de justicia es compartida con limitaciones."
        },
        {
            questionText: "Señale cuál de las siguientes proposiciones es correcta en relación con las atribuciones del rey:",
            options: [
                "El rey acredita a los embajadores y otros representantes diplomáticos.",
                "Al rey corresponde, previa autorización del presidente del Gobierno, declarar la guerra y hacer la paz.",
                "Los representantes extranjeros en España no deberán estar acreditados ante rey.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "ARTÍCULO 63 CE.1. El rey acredita a los embajadores y otros representantes diplomáticos. Los representantes extranjeros en España están acreditados ante él.2. Al rey corresponde manifestar el consentimiento del Estado para obligarse internacionalmente por medio de tratados, de conformidad con la Constitución y las leyes.3. Al rey corresponde, previa autorización de las Cortes Generales, declarar la guerra y hacer la paz."
        },
        {
            questionText: "Las CC. GG. controlan la acción de:",
            options: [ "El Gobierno.", "El poder judicial.", "La oposición.", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 0,
            explanation: "ARTÍCULO 66. 2 CE. Las Cortes Generales ejercen la potestad legislativa del Estado, aprueban sus Presupuestos, controlan la acción del Gobierno y tienen las demás competencias que les atribuya la Constitución."
        },
        {
            questionText: "La provincia es una entidad local con:",
            options: [
                "Personalidad jurídica propia.",
                "Personalidad jurídica transferida.",
                "Personalidad jurídica plena.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "ARTÍCULO 141. 1 CE. La provincia es una entidad local con personalidad jurídica propia, determinada por la agrupación de municipios y división territorial para el cumplimiento de las actividades del Estado. Cualquier alteración de los límites provinciales habrá de ser aprobada por las Cortes Generales mediante ley orgánica."
        },
        {
            questionText: "En la Constitución Española, los derechos y deberes de los ciudadanos se recogen:",
            options: [ "En el Título II.", "En el Título IV.", "En el Título I.", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 2,
            explanation: "TÍTULO I. De los Derechos y Deberes Fundamentales."
        },
        {
            questionText: "¿Quién puede impugnar ante el Tribunal Constitucional las disposiciones y resoluciones adoptadas por los órganos de las comunidades autónomas?:",
            options: [
                "El Consejo de Estado.",
                "Quien establezcan sus respectivos estatutos de autonomía.",
                "El Gobierno.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "ARTÍCULO 161.2. El Gobierno podrá impugnar ante el Tribunal Constitucional las disposiciones y resoluciones adoptadas por los órganos de las comunidades autónomas. La impugnación producirá la suspensión de la disposición o resolución recurrida, pero el Tribunal, en su caso, deberá ratificarla o levantarla en un plazo no superior a 5 meses."
        },
        {
            questionText: "¿Qué nombre reciben las disposiciones del Gobierno que contengan legislación delegada?:",
            options: [ "Decretos legislativos.", "Reglamento.", "Leyes ordinarias.", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 0,
            explanation: "Artículo 85 CE: Las disposiciones del Gobierno que contengan legislación delegada recibirán el título de Decretos Legislativos."
        },
        {
            questionText: "Constitución. De la reforma constitucional. Cuando se propusiere la revisión total de la Constitución o una parcial que afecte al título preliminar, al capítulo segundo, sección primera del título I, o al título II, se procederá a la aprobación del principio por mayoría de dos tercios de cada Cámara y:",
            options: [
                "Al estudio del nuevo texto constitucional.",
                "Será sometida a referéndum para su ratificación.",
                "A la disolución inmediata de las Cortes.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "Artículo 168.1 CE: 1. Cuando se propusiere la revisión total de la Constitución o una parcial que afecte al Título preliminar, al Capítulo segundo, Sección primera del Título I, o al Título II, se procederá a la aprobación del principio por mayoría de dos tercios de cada Cámara, y a la disolución inmediata de las Cortes. 2. Las Cámaras elegidas deberán ratificar la decisión y proceder al estudio del nuevo texto constitucional, que deberá ser aprobado por mayoría de dos tercios de ambas Cámaras. 3. Aprobada la reforma por las Cortes Generales, será sometida a referéndum para su ratificación."
        },
        {
            questionText: "Constitución. De las Cortes Generales. La iniciativa legislativa corresponde:",
            options: [
                "Al Gobierno, de acuerdo con la Constitución y los Reglamentos de las Cámaras.",
                "Al Gobierno, al Congreso y al Senado, de acuerdo con la Constitución y los Reglamentos de las Cámaras.",
                "Al Congreso, de acuerdo con la Constitución y los Reglamentos de las Cámaras.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "Artículo 87. 1. La iniciativa legislativa corresponde al Gobierno, al Congreso y al Senado, de acuerdo con la Constitución y los Reglamentos de las Cámaras."
        },
        {
            questionText: "Vinculan a todos los poderes públicos:",
            options: [
                "La Constitución, el ordenamiento jurídico, los principios y la costumbre.",
                "Los principios rectores de la política social y económica.",
                "Los derechos fundamentales y libertades públicas, y los derechos y deberes de los ciudadanos.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "Según el art. 53,1 CE: «Los derechos y libertades reconocidos en el Capítulo segundo del presente Título vinculan a todos los poderes públicos. Sólo por ley, que en todo caso deberá respetar su contenido esencial, podrá regularse el ejercicio de tales derechos y libertades, que se tutelarán de acuerdo con lo previsto en el artículo 161, 1, a)»."
        },
        {
            questionText: "En relación con la sucesión a la Corona de España, se resolverán por una ley orgánica:",
            options: [
                "Únicamente las dudas de hecho o de derecho que ocurran con las abdicaciones y renuncias.",
                "Únicamente las renuncias.",
                "Las abdicaciones y renuncias y cualquier duda de hecho o de derecho que ocurra en el orden de sucesión a la Corona.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "ARTÍCULO 57.5 CE. Las abdicaciones y renuncias y cualquier duda de hecho o de derecho que ocurra en el orden de sucesión a la Corona se resolverán por una ley orgánica."
        },
        {
            questionText: "¿Cómo se organiza territorialmente el Estado español según la Constitución?",
            options: [
                "Municipios, provincias y comunidades autónomas.",
                "Municipios, provincias y distritos.",
                "Municipios, comarcas y regiones.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "El artículo 137 de la Constitución Española establece que el Estado se organiza territorialmente en municipios, en provincias y en las comunidades autónomas que se constituyan. Esta es una de las bases del modelo territorial descentralizado del Estado."
        },
        {
            questionText: "Según el artículo 25, las penas en España:",
            options: [
                "Garantizan una compensación económica a las víctimas.",
                "Se orientan a la reeducación y reinserción social.",
                "Pueden consistir en trabajos forzados.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "La Constitución Española establece en el artículo 25 que las penas privativas de libertad y otras deben estar orientadas hacia la reeducación y reinserción social, eliminando la posibilidad de trabajos forzados y promoviendo la recuperación del individuo como un miembro productivo de la sociedad."
        },
        {
            questionText: "¿Qué competencia NO pertenece a las Comunidades Autónomas?",
            options: [
                "Pesca en aguas interiores.",
                "Banca y sistema financiero.",
                "Museos y bibliotecas regionales.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "El artículo 149 reserva al Estado la competencia exclusiva sobre la legislación en materia de bancos, seguros y el sistema financiero. Las comunidades pueden gestionar aspectos culturales, como museos y bibliotecas de interés autonómico, pero el sistema financiero es estratégico y centralizado."
        },
        {
            questionText: "¿En qué casos se podrán superar los límites de déficit estructural y de volumen de deuda púbica?:",
            options: [
                "Catástrofes naturales, recesión económica o situaciones de emergencia extraordinaria que escapen al control del Estado y perjudiquen considerablemente la situación financiera o la sostenibilidad económica o social del Estado, apreciadas por la mayoría absoluta de los miembros del Congreso de los Diputados.",
                "Catástrofes naturales, recesión económica o situaciones de emergencia extraordinaria que escapen al control del Gobierno y perjudiquen considerablemente la situación financiera o la sostenibilidad económica o social del Estado, apreciadas por la mayoría absoluta de los miembros del Congreso de los Diputados.",
                "Catástrofes naturales, recesión económica o situaciones de emergencia social que escapen al control del Estado y perjudiquen considerablemente la situación financiera o la sostenibilidad económica o social del Estado, apreciadas por la mayoría absoluta de los miembros del Congreso de los Diputados.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "ARTÍCULO 135.4 CONSTITUCIÓN. Los límites de déficit estructural y de volumen de deuda pública sólo podrán superarse en caso de catástrofes naturales, recesión económica o situaciones de emergencia extraordinaria que escapen al control del Estado y perjudiquen considerablemente la situación financiera o la sostenibilidad económica o social del Estado, apreciadas por la mayoría absoluta de los miembros del Congreso de los Diputados."
        },
        {
            questionText: "Trabajar y el trabajo es, según lo establecido en el artículo 35. 1 de la CE:",
            options: [ "Un deber únicamente.", "Un derecho únicamente.", "Un deber y un derecho.", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 2,
            explanation: "ARTÍCULO 35. 1 CE. Todos los españoles tienen el deber de trabajar y el derecho al trabajo, a la libre elección de profesión u oficio, a la promoción a través del trabajo y a una remuneración suficiente para satisfacer sus necesidades y las de su familia, sin que en ningún caso pueda hacerse discriminación por razón de sexo."
        },
        {
            questionText: "Mientras se hallen en activo, no podrán desempeñar otros cargos públicos, ni pertenecer a partidos políticos o sindicatos:",
            options: [
                "Los Jueces y Fiscales.",
                "Los Jueces, letrados de la administración de justicia, así como los Fiscales.",
                "Los Jueces y Magistrados, así como los Fiscales.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "ARTÍCULO 127. 1. Los Jueces y Magistrados, así como los Fiscales, mientras se hallen en activo, no podrán desempeñar otros cargos públicos, ni pertenecer a partidos políticos o sindicatos. La ley establecerá el sistema y modalidades de asociación profesional de los Jueces, Magistrados y Fiscales."
        },
        {
            questionText: "Según el artículo 11, un español de origen:",
            options: [
                "Debe mantener su nacionalidad al residir en el extranjero.",
                "Puede perder su nacionalidad por decisión judicial.",
                "No puede ser privado de su nacionalidad.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "El artículo 11.2 de la Constitución Española establece que ningún español de origen puede ser privado de su nacionalidad. Sin embargo, la pérdida de nacionalidad puede producirse si el individuo adquiere voluntariamente otra nacionalidad o si lo establece un tratado internacional ratificado por España."
        },
        {
            questionText: "El Ministerio Fiscal ejerce sus funciones por medio de:",
            options: [
                "Órganos propios conforme a los principios de unidad de actuación y dependencia jerárquica y con sujeción, en todo caso, a los de legalidad e imparcialidad.",
                "Órganos propios conforme a los principios de unidad de actuación y dependencia jerárquica y con sujeción, en todo caso, a los de proporcionalidad e imparcialidad.",
                "Órganos propios conforme a los principios de unidad de actuación y dependencia jerárquica y con sujeción, en todo caso, a los de legalidad e independencia.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "ARTÍCULO 124.2. El Ministerio Fiscal ejerce sus funciones por medio de órganos propios conforme a los principios de unidad de actuación y dependencia jerárquica y con sujeción, en todo caso, a los de legalidad e imparcialidad."
        },
        {
            questionText: "¿Cuántos senadores elige cada provincia?:",
            options: [ "4", "3", "2", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 0,
            explanation: "ARTÍCulo 69. 2 CE. En cada provincia se elegirán cuatro Senadores por sufragio universal, libre, igual, directo y secreto por los votantes de cada una de ellas, en los términos que señale una ley orgánica."
        },
        {
            questionText: "Constitución. De la organización territorial del Estado. ¿Puede el Estado transferir o delegar en las comunidades autónomas facultades correspondientes a materia de titularidad estatal?:",
            options: [
                "No, salvo reforma constitucional.",
                "Sí, cuando se trate de materias que por su propia naturaleza sean susceptibles de transferencia o delegación.",
                "Sí, cuando se trate de materias que por su propia naturaleza sean susceptibles de transferencia o delegación.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "Artículo 150 CE: 2. El Estado podrá transferir o delegar en las comunidades autónomas, mediante ley orgánica, facultades correspondientes a materia de titularidad estatal que por su propia naturaleza sean susceptibles de transferencia o delegación. La ley preverá en cada caso la correspondiente transferencia de medios financieros, así como las formas de control que se reserve el Estado."
        },
        {
            questionText: "¿Cuál es la estructura básica de la administración local en España?",
            options: [ "Diputación Provincial.", "Cabildo Insular.", "Ayuntamiento.", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 2,
            explanation: "El ayuntamiento representa la estructura básica de la administración local en España, siendo la entidad encargada de gestionar los asuntos municipales y prestar servicios a la comunidad."
        },
        {
            questionText: "Si una comunidad autónoma actuare de forma que atente gravemente al interés de España o no cumpliere las obligaciones que la Constitución u otras leyes le impongan:",
            options: [
                "El Gobierno podrá dar instrucciones a todas las autoridades de las comunidades autónomas.",
                "El Gobierno, con la aprobación por mayoría absoluta del Congreso, podrá adoptar las medidas necesarias para obligar a aquélla al cumplimiento forzoso de dichas obligaciones o para la protección del mencionado interés general.",
                "El Gobierno requerirá al presidente de la comunidad autónoma para cumplimiento forzoso de dichas obligaciones o para la protección del mencionado interés general.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "ARTÍCULO 155. 1 CE. Si una comunidad autónoma no cumpliere las obligaciones que la Constitución u otras leyes le impongan, o actuare de forma que atente gravemente al interés general de España, el Gobierno, previo requerimiento al presidente de la comunidad autónoma y, en el caso de no ser atendido, con la aprobación por mayoría absoluta del Senado, podrá adoptar las medidas necesarias para obligar a aquélla al cumplimiento forzoso de dichas obligaciones o para la protección del mencionado interés general."
        },
        {
            questionText: "¿Qué mayoría es necesaria para aprobar una cuestión de confianza?:",
            options: [ "Mayoría simple.", "Mayoría absoluta.", "2/3 de los votos.", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 0,
            explanation: "La cuestión de confianza es un mecanismo por el que el Presidente del Gobierno solicita el respaldo del Congreso. Según el artículo 112 CE, se aprueba por mayoría simple, es decir, más votos a favor que en contra. Esto la diferencia de otros procedimientos más exigentes como la reforma constitucional."
        },
        {
            questionText: "Según la CE, el derecho de los españoles a derecho a entrar y salir libremente de España, no podrá ser limitado:",
            options: [
                "Salvo resolución judicial motivada.",
                "En ningún caso.",
                "Por motivos políticos o ideológicos.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "ARTÍCULO 19 CE. Los españoles tienen derecho a elegir libremente su residencia y a circular por el territorio nacional. Asimismo, tienen derecho a entrar y salir libremente de España en los términos que la ley establezca. Este derecho no podrá ser limitado por motivos políticos o ideológicos."
        },
        {
            questionText: "Las funciones, principios básicos de actuación y estatutos de las Fuerzas y Cuerpos de seguridad, se determinará por:",
            options: [ "Real Decreto.", "Ley Orgánica.", "Ley Ordinaria.", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 1,
            explanation: "ARTÍCULO 104.2. Una ley orgánica determinará las funciones, principios básicos de actuación y estatutos de las Fuerzas y Cuerpos de seguridad."
        },
        {
            questionText: "Señala cuál de las siguientes afirmaciones es incorrecta:",
            options: [
                "El Rey dirige la Administración Civil y Militar.",
                "La responsabilidad criminal del Presidente y los demás miembros del Gobierno será exigible, en su caso, ante la Sala de lo Penal del Tribunal Supremo.",
                "El Gobierno se compone del Presidente, de los Vicepresidentes, en su caso, de los Ministros y de los demás miembros que establezca la ley.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "ARTÍCULO 97 CONSTITUCIÓN: El Gobierno dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado. Ejerce la función ejecutiva y la potestad reglamentaria de acuerdo con la Constitución y las leyes.ARTÍCULO 99 CONSTITUCIÓN: 1. Después de cada renovación del Congreso de los Diputados, y en los demás supuestos constitucionales en que así proceda, el Rey, previa consulta con los representantes designados por los Grupos políticos con representación parlamentaria, y a través del Presidente del Congreso, propondrá un candidato a la Presidencia del Gobierno.ARTÍCULO 102: 1. La responsabilidad criminal del Presidente y los demás miembros del Gobierno será exigible, en su caso, ante la Sala de lo Penal del Tribunal Supremo."
        },
        {
            questionText: "Según el artículo 11, un español de origen:",
            options: [
                "Debe mantener su nacionalidad al residir en el extranjero.",
                "Puede perder su nacionalidad por decisión judicial.",
                "No puede ser privado de su nacionalidad.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "El artículo 11.2 de la Constitución Española establece que ningún español de origen puede ser privado de su nacionalidad. Sin embargo, la pérdida de nacionalidad puede producirse si el individuo adquiere voluntariamente otra nacionalidad o si lo establece un tratado internacional ratificado por España."
        },
        {
            questionText: "La Constitución española establece en su artículo 13. 3, en relación con la extradición, que:",
            options: [
                "Sólo se concederá en cumplimiento de un tratado o de la ley, atendiendo al principio de reciprocidad.",
                "Quedan excluidos de la extradición los delitos políticos, incluidos los actos de terrorismo.",
                "Sólo se concederá en los casos de delitos políticos, no considerándose como tales los actos de terrorismo.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "ARTÍCULO 13.3 CE. La extradición sólo se concederá en cumplimiento de un tratado o de la ley, atendiendo al principio de reciprocidad. Quedan excluidos de la extradición los delitos políticos, no considerándose como tales los actos de terrorismo."
        },
        {
            questionText: "Constitución. De la Corona. El ejercicio de la tutela:",
            options: [
                "No es incompatible con el cargo o representación política.",
                "Es incompatible con el de todo cargo o representación política.",
                "No compatible con el cargo político, pero sí con la representación política.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "Artículo 60. 2. El ejercicio de la tutela es también incompatible con el de todo cargo o representación política."
        },
        {
            questionText: "¿Qué valores superiores establece el artículo 1 de la Constitución Española?",
            options: [
                "Democracia, unidad, independencia, igualdad.",
                "Libertad, justicia, igualdad, pluralismo político.",
                "Soberanía, independencia, igualdad, progreso.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "El artículo 1.1 de la Constitución Española señala que España es un Estado social y democrático de derecho, y establece como valores superiores del ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político. Estos principios son esenciales para la organización política y jurídica del país."
        },
        {
            questionText: "Cuando un órgano judicial considere, en algún proceso, que una norma con rango de ley, aplicable al caso, de cuya validez dependa el fallo, pueda ser contraria a la Constitución:",
            options: [
                "Planteará la cuestión ante el Tribunal Constitucional.",
                "Aplicará la norma en cuestión informando a las partes de la posibilidad de interponer recurso de inconstitucionalidad ante el Tribunal Constitucional.",
                "No podrá aplicar la norma en cuestión.",
                 "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "ARTÍCULO 163 CE. Cuando un órgano judicial considere, en algún proceso, que una norma con rango de ley, aplicable al caso, de cuya validez dependa el fallo, pueda ser contraria a la Constitución, planteará la cuestión ante el Tribunal Constitucional en los supuestos, en la forma y con los efectos que establezca la ley, que en ningún caso serán suspensivos."
        },
        {
            questionText: "Según el art. 120. 3 CE, las sentencias serán siempre:",
            options: [ "Motivadas.", "Orales con las excepciones que prevean las leyes de procedimiento.", "Escritas.", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 0,
            explanation: "ARTÍCULO 120. 3 CE. Las sentencias serán siempre motivadas y se pronunciarán en audiencia pública."
        },
        {
            questionText: "Constitución. Derechos y deberes fundamentales. ¿En cuál de los siguientes casos será necesario dar comunicación previa a la autoridad?:",
            options: [
                "En las manifestaciones, necesitando una posterior autorización por parte de las Cortes Generales.",
                "En las manifestaciones que se celebren en lugares de tránsito público.",
                "En las reuniones secretas.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "Artículo 21 CE: 1. Se reconoce el derecho de reunión pacífica y sin armas. El ejercicio de este derecho no necesitará autorización previa.\n2. En los casos de reuniones en lugares de tránsito público y manifestaciones se dará comunicación previa a la autoridad, que sólo podrá prohibirlas cuando existan razones fundadas de alteración del orden público, con peligro para personas o bienes."
        },
        {
            questionText: "¿Qué misión tienen las Fuerzas Armadas según el artículo 8?",
            options: [
                "Defender la integridad territorial y la independencia de España.",
                "Actuar como cuerpo de seguridad interna.",
                "Garantizar el orden público.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "El artículo 8 de la Constitución define como misión de las Fuerzas Armadas garantizar la soberanía, la independencia de España y defender su integridad territorial, subrayando su papel en la seguridad y defensa nacionales."
        },
        {
            questionText: "Una vez sancionados y promulgados los respectivos estatutos de autonomía:",
            options: [
                "Podrán establecer circunscripciones territoriales propias, que gozarán de plena personalidad jurídica.",
                "Solamente podrán ser modificados mediante los procedimientos en ellos establecidos y con referéndum entre los electores inscritos en los censos correspondientes.",
                "Podrán ser reformados para que la comunidad autónoma pueda ampliar sucesivamente sus competencias dentro del marco establecido en el artículo 148 CE.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "ARTÍCULO 152. 2 CE. Una vez sancionados y promulgados los respectivos estatutos, solamente podrán ser modificados mediante los procedimientos en ellos establecidos y con referéndum entre los electores inscritos en los censos correspondientes."
        },
        {
            questionText: "Constitución. De la organización territorial del Estado. ¿A quién le corresponde la suprema representación de la comunidad autónoma?:",
            options: [
                "Al subdelegado del Gobierno en la comunidad autónoma.",
                "Al presidente de la comunidad autónoma.",
                "Al delegado del Gobierno en la comunidad autónoma.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "Artículo 152 CE: 1. En los estatutos aprobados por el procedimiento a que se refiere el artículo anterior, la organización institucional autonómica se basará en una asamblea legislativa, elegida por sufragio universal, con arreglo a un sistema de representación proporcional que asegure, además, la representación de las diversas zonas del territorio; un Consejo de Gobierno con funciones ejecutivas y administrativas y un presidente, elegido por la asamblea, de entre sus miembros, y nombrado por el rey, al que corresponde la dirección del Consejo de Gobierno, la suprema representación de la respectiva comunidad y la ordinaria del Estado en aquélla. El presidente y los miembros del Consejo de Gobierno serán políticamente responsables ante la asamblea."
        },
        {
            questionText: "En relación a lo dispuesto en la CE, ¿de qué derecho de sufragio gozan los extranjeros en los casos en que exista reciprocidad, por medio de tratado o ley?:",
            options: [
                "Sufragio activo y pasivo en elecciones municipales.",
                "Sufragio activo en elecciones municipales.",
                "Sufragio activo y pasivo en elecciones europeas.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "ARTÍCULO 13.2 CE. Solamente los españoles serán titulares de los derechos reconocidos en el artículo 23, salvo lo que, atendiendo a criterios de reciprocidad, pueda establecerse por tratado o ley para el derecho de sufragio activo y pasivo en las elecciones municipales."
        },
        {
            questionText: "España se constituye en un Estado social y democrático de derecho:",
            options: [
                "Que propugna como valores superiores de su ordenamiento jurídico el control, la igualdad y el pluralismo político.",
                "Ninguna opción es correcta.",
                "Que propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "España se constituye en un Estado social y democrático de derecho, que propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político."
        },
        {
            questionText: "Constitución. De las Cortes Generales. ¿A quién no afectarán las causas de inelegibilidad e incompatibilidad de diputados y senadores recogidas en el artículo 70 CE?:",
            options: [
                "A los altos cargos de la Administración del Estado que determine la ley.",
                "A los miembros del Gobierno.",
                "A los miembros de las Juntas Electorales.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 1,
            explanation: "Artículo 70. 1. La ley electoral determinará las causas de inelegibilidad e incompatibilidad de los Diputados y Senadores, que comprenderán, en todo caso: a) A los componentes del Tribunal Constitucional. b) A los altos cargos de la Administración del Estado que determine la ley, con la excepción de los miembros del Gobierno. c) Al Defensor del Pueblo. d) A los Magistrados, Jueces y Fiscales en activo. e) A los militares profesionales y miembros de las Fuerzas y Cuerpos de Seguridad y Policía en activo. f) A los miembros de las Juntas Electorales."
        },
        {
            questionText: "Constitución. De la organización territorial del Estado. ¿A quién corresponde apreciar la necesidad de dictar leyes que establezcan los principios necesarios para armonizar las disposiciones normativas de las comunidades autónomas?:",
            options: [
                "A las Cortes Generales.",
                "Al Gobierno central.",
                "A las propias comunidades autónomas interesadas.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "Artículo 150 CE: 3. El Estado podrá dictar leyes que establezcan los principios necesarios para armonizar las disposiciones normativas de las comunidades autónomas, aun en el caso de materias atribuidas a la competencia de estas, cuando así lo exija el interés general. Corresponde a las Cortes Generales, por mayoría absoluta de cada Cámara, la apreciación de esta necesidad."
        },
        {
            questionText: "Según el artículo 28. 2 de la CE, la ley que regule el ejercicio del derecho a la huelga establecerá las garantías precisas para asegurar:",
            options: [
                "El cumplimiento de los fines que la justifican.",
                "El cumplimiento de los fines de interés general de la comunidad.",
                "El mantenimiento de los servicios esenciales de la comunidad.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "ARTÍCULO 28. 2 CE. Se reconoce el derecho a la huelga de los trabajadores para la defensa de sus intereses. La ley que regule el ejercicio de este derecho establecerá las garantías precisas para asegurar el mantenimiento de los servicios esenciales de la comunidad."
        },
        {
            questionText: "¿Qué plazo tiene el Senado para aprobar, vetar o enmendar un Proyecto de Ley ordinario?",
            options: [ "3 meses.", "2 meses.", "1 mes.", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 1,
            explanation: "El artículo 90 de la Constitución Española establece que el Senado dispone de un plazo máximo de 2 meses para aprobar, vetar o introducir enmiendas en un Proyecto de Ley ordinario aprobado por el Congreso. Si se trata de un procedimiento de urgencia, el plazo se reduce a 20 días. En caso de veto, el Congreso puede levantarlo por mayoría absoluta o, tras dos meses, por mayoría simple."
        },
        {
            questionText: "La reforma de los estatutos de autonomía:",
            options: [
                "Requerirá la aprobación por las Cortes Generales mediante ley orgánica.",
                "Todas son correctas.",
                "Exigirá la ratificación mediante referéndum por el voto afirmativo de la mayoría absoluta de los electores de la comunidad autónoma correspondiente.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 0,
            explanation: "ARTÍCULO 147. 3 CE. La reforma de los estatutos se ajustará al procedimiento establecido en los mismos y requerirá, en todo caso, la aprobación por las Cortes Generales mediante ley orgánica."
        },
        {
            questionText: "¿Qué Título de la CE establece dos procedimientos de reforma en función del alcance de la misma?:",
            options: [ "El Título IX.", "El Título X.", "El Título XI.", "Ninguna de las anteriores es correcta."],
            correctAnswerIndex: 1,
            explanation: "El Título X CE. De la Reforma Constitucional. Establece 2 procedimientos de reforma en función del alcance de la misma: (arts. 167 -168)."
        },
        {
            questionText: "En base al artículo 19 CE, el derecho de los españoles a derecho a entrar y salir libremente de España, no podrá ser limitado:",
            options: [
                "Salvo resolución judicial motivada.",
                "En ningún caso.",
                "Por motivos políticos o ideológicos.",
                "Ninguna de las anteriores es correcta."
            ],
            correctAnswerIndex: 2,
            explanation: "ARTÍCULO 19 CE. Los españoles tienen derecho a elegir libremente su residencia y a circular por el territorio nacional. Asimismo, tienen derecho a entrar y salir libremente de España en los términos que la ley establezca. Este derecho no podrá ser limitado por motivos políticos o ideológicos."
        }
    ]
};

export const madridAdminTest2: SeedExam = {
    fileName: "Test Auxiliar Administrativo 2 (Demo)",
    category: "madrid",
    questions: [
        {
            questionText: "¿Cuántos artículos tiene la Constitución?",
            options: [ "159", "169", "171", "165" ],
            correctAnswerIndex: 1
        },
        {
            questionText: "¿Reconoce la Constitución el derecho a la propiedad privada?",
            options: [ "No", "Sí, y a la comunal", "Sí, y a la herencia", "Sí, y a la herencia y legados" ],
            correctAnswerIndex: 2
        },
        {
            questionText: "El Estatuto de Autonomía de Madrid se aprobó como:",
            options: [ "Ley 5/1985", "Ley Orgánica 5/1985", "Ley Orgánica 3/1983", "Decreto Ley 3/1985" ],
            correctAnswerIndex: 2
        },
        {
            questionText: "La Asamblea de Madrid es elegida:",
            options: [ "Por 3 años", "Por 4 años", "Por 5 años", "Por 6 años" ],
            correctAnswerIndex: 1
        },
        {
            questionText: "La Ley del Gobierno y Administración de la Comunidad de Madrid es:",
            options: [ "La Ley 13/1983, de 1 de diciembre", "La Ley 1/1983, de 13 de diciembre", "La Ley 1/1985, de 13 de diciembre", "La Ley 13/1985, de 1 de diciembre" ],
            correctAnswerIndex: 1
        },
        {
            questionText: "En su condición de Presidente del Consejo de Gobierno, el Presidente de la Comunidad de Madrid podrá delegar:",
            options: [ "Exclusivamente funciones ejecutivas", "Exclusivamente funciones de delegación", "Exclusivamente en los Vicepresidentes", "Ninguna de las contestaciones anteriores es correcta" ],
            correctAnswerIndex: 3
        },
        {
            questionText: "En el sistema de fuentes del ordenamiento jurídico, la costumbre sólo regirá en defecto de Ley aplicable:",
            options: [ "En todo caso", "Siempre que no sea contraria a la moral", "Siempre que no sea contraria a la moral o al orden público", "Siempre que no sea contraria a la moral o al orden público, y que resulte probada" ],
            correctAnswerIndex: 3
        },
        {
            questionText: "Las disposiciones legislativas provisionales dictadas por el Gobierno tomarán la forma de:",
            options: [ "Leyes de bases", "Leyes ordinarias", "Decretos-Leyes", "Decretos Legislativos" ],
            correctAnswerIndex: 2
        },
        {
            questionText: "Los actos de las AA.PP. sujetos al Derecho Administrativo:",
            options: [ "Se presumirán válidos desde la fecha en que se dicten", "Se presumirán válidos y producirán efectos desde la fecha en que se dicten", "Se presumirán válidos y producirán efectos desde la fecha en que se dicten, salvo que en ellos se disponga otra cosa", "Se presumirán válidos y producirán efectos desde la fecha en que se dicten, aunque en ellos se disponga otra cosa" ],
            correctAnswerIndex: 2
        },
        {
            questionText: "Si el vicio de un acto anulable consiste en la falta de alguna autorización:",
            options: [ "La convalidación no podrá realizarse", "Podrá ser convalidado el acto mediante el otorgamiento de la misma", "Podrá ser convalidado el acto mediante el otorgamiento de la misma por el órgano superior jerárquico", "Podrá ser convalidado el acto mediante el otorgamiento de la misma por el órgano competente" ],
            correctAnswerIndex: 3
        },
        {
            questionText: "La Ley del Procedimiento Administrativo Común de las Administraciones Públicas es la:",
            options: [ "Ley 30/1994", "Ley 39/2015", "Ley 37/2015", "Ley 40/2015" ],
            correctAnswerIndex: 1
        },
        {
            questionText: "El procedimiento administrativo no estará sometido al principio de:",
            options: [ "Simultaneidad", "Publicidad", "Transparencia", "Celeridad" ],
            correctAnswerIndex: 0
        },
        {
            questionText: "El orden jurisdiccional contencioso-administrativo no se halla integrado por:",
            options: [ "Salas de lo Contencioso-administrativo de las Tribunales Superiores de Justicia", "Salas de lo Contencioso-administrativo de la Audiencia Nacional", "Salas de lo Contencioso-administrativo de las Audiencias Provinciales", "Sala de lo Contencioso-administrativo del Tribunal Supremo" ],
            correctAnswerIndex: 2
        },
        {
            questionText: "Luego que sea firme una sentencia, el Secretario judicial lo comunicará al órgano que hubiera realizado la actividad objeto del recurso:",
            options: [ "En el plazo de diez días", "En el plazo de cinco días", "En el plazo de quince días", "En el plazo de veinte días" ],
            correctAnswerIndex: 0
        },
        {
            questionText: "La ley estatal para la igualdad efectiva de mujeres y hombres es:",
            options: [ "La Ley 4/2006", "La Ley Orgánica 3/2009", "La Ley Orgánica 3/2007", "El Real Decreto-Ley 7/2003" ],
            correctAnswerIndex: 2
        },
        {
            questionText: "¿Quién está legitimado en los litigios sobre acoso sexual y acoso por razón de sexo?:",
            options: [ "La persona acosada únicamente", "La persona acosada y el Ministerio Fiscal", "La persona acosada y sus familiares directos", "La persona acosada y su representante" ],
            correctAnswerIndex: 0
        },
        {
            questionText: "La información administrativa y atención al ciudadano en la Comunidad de Madrid es materia:",
            options: [ "De la Ley 22/2001", "Del Decreto 21/2002", "Del Decreto 12/2002", "Del Decreto 21/2006" ],
            correctAnswerIndex: 1
        },
        {
            questionText: "La Comisión para la Coordinación de la Atención al Ciudadano de la Comunidad de Madrid se reunirá, como mínimo:",
            options: [ "Una vez al año", "Dos veces al año", "Tres veces al año", "Cuatro veces al año" ],
            correctAnswerIndex: 1
        },
        {
            questionText: "Las funciones primordiales que cumplen los documentos administrativos son:",
            options: [ "Función de constancia y de comunicación", "Función de eficacia y de comunicación", "Función de resolución y de comunicación", "Función de constancia y de resolución" ],
            correctAnswerIndex: 0
        },
        {
            questionText: "Los documentos que los interesados dirijan a los órganos de las Administraciones Públicas podrán presentarse:",
            options: [ "En las oficinas de Correos, en la forma que legalmente se establezca", "En las oficinas de Correos, en la forma que reglamentariamente se establezca", "En las oficinas de Correos, en la forma que disponga el proveedor del servicio postal universal", "En las oficinas de Correos, en la forma que disponga cada Administración respecto de los documentos que se dirijan a la misma" ],
            correctAnswerIndex: 1
        }
    ]
};

export const madridAdminTest2006: SeedExam = {
    fileName: "Auxiliar Administrativo de Administración General - Madrid 2006",
    category: "madrid",
    questions: [
      {
        questionText: "Los Derechos fundamentales y las Libertades Públicas, se recogen en:",
        options: [
          "En el Capítulo III, Sección primera del Título I de la Constitución española de 1978.",
          "En el Capítulo III, Sección segunda del Título II de la Constitución española de 1978.",
          "En el Capítulo II, Sección primera del Título I de la Constitución española de 1978.",
          "En el Capítulo II, Sección segunda del Título I de la Constitución española de 1978.",
        ],
        correctAnswerIndex: 2,
      },
      {
        questionText: "Señale cuál de las siguientes respuestas es la correcta de acuerdo con lo dispuesto en la Constitución española de 1978:",
        options: [
          "Cualquier ciudadano podrá recabar la tutela ante los Tribunales del derecho a la producción y creación literaria, artística, científica y técnica por un procedimiento basado en los principios de preferencia y sumariedad.",
          "Los miembros de las Fuerzas Armadas podrán recabar la tutela del derecho de petición, en el ejercicio individual y colectivo del mismo, a través del recurso de amparo.",
          "Cualquier ciudadano podrá recabar la tutela del derecho a la protección de la salud de la misma forma que la prevista en la respuesta A.",
          "Son correctas las respuestas A y C.",
        ],
        correctAnswerIndex: 0,
      },
      {
        questionText: "Señale la respuesta correcta, de conformidad con lo dispuesto en la Constitución española de 1978:",
        options: [
          "El mandato de los Senadores termina exclusivamente cuatro años después de su elección.",
          "Las poblaciones de Ceuta y Melilla elegirán cada una de ellas un Senador.",
          "La elección al Senado se verificará en cada circunscripción atendiendo a criterios de representación proporcional.",
          "El Senado es inviolable.",
        ],
        correctAnswerIndex: 3,
      },
      {
        questionText: "Cuando se habla de la delegación legislativa en la Constitución española de 1978 ¿cuál de las siguientes afirmaciones es la correcta?",
        options: [
          "Las Cortes Generales sólo podrá delegar en el Gobierno la potestad de dictar normas con rango de Ley en materias que no deban ser desarrolladas por una Ley Orgánica.",
          "La delegación legislativa deberá otorgarse en todo caso mediante una Ley de bases.",
          "No podrá entenderse concedida de modo implícito o por tiempo indeterminado.",
          "La delegación legislativa se agota en el momento de la entrada en vigor de la norma correspondiente.",
        ],
        correctAnswerIndex: 2,
      },
      {
        questionText: "Señale la respuesta correcta, de acuerdo con lo dispuesto en la Constitución española de 1978.",
        options: [
          "La CE reconoce la iniciativa popular para la presentación de proyectos de Ley.",
          "Para el ejercicio de dicha iniciativa popular se exigirán no menos de 500.000 firmas acreditadas exclusivamente cuando afecte a los derechos fundamentales reconocidos en la Constitución.",
          "Tendrá que ser una Ley orgánica la que regule las formas de ejercicio y requisitos de la iniciativa popular, no procediendo su ejercicio en, entre otras, materias propias de leyes tributarias.",
          "Ninguna de las anteriores es correcta.",
        ],
        correctAnswerIndex: 2,
      },
      {
        questionText: "Señale la respuesta correcta de acuerdo con lo dispuesto en la Constitución española de 1978:",
        options: [
          "Los Poderes del Estado emanan del pueblo español.",
          "La soberanía nacional reside en las Cortes Generales como representantes que son del pueblo español.",
          "La forma política del Estado español es la democracia.",
          "España se constituye en un Estado liberal y democrático de Derecho.",
        ],
        correctAnswerIndex: 0,
      },
      {
        questionText: "La dignidad de la persona, los derechos inviolables que le son inherentes, el libre desarrollo de la personalidad, el respeto a la ley y a los derechos de los demás, son de conformidad con lo dispuesto en el artículo 10 de la Constitución española de 1978:",
        options: [
          "El fundamento del orden político y de la paz social.",
          "Los principios ordenadores del ordenamiento jurídico español.",
          "Los principios que deberán regir la actuación de los poderes públicos.",
          "Ninguna de las anteriores respuestas es correcta.",
        ],
        correctAnswerIndex: 0,
      },
      {
        questionText: "La Constitución española de 1978 reconoce el derecho a expresar y difundir libremente los pensamientos, ideas y opiniones. Señale cuál de las siguientes respuestas es la incorrecta:",
        options: [
          "Este derecho se encuadra, de acuerdo con la propia Constitución, dentro de los denominados derechos fundamentales y libertades públicas.",
          "Su ejercicio no podrá verse restringido mediante ningún tipo de censura previa.",
          "Al tratarse de un derecho fundamental, su ejercicio no podrá ser sometido a límite alguno.",
          "El ejercicio de este derecho tiene límites, entre otros el respeto a la intimidad y al honor.",
        ],
        correctAnswerIndex: 2,
      },
      {
        questionText: "De conformidad con lo dispuesto en la Constitución española de 1978, ¿qué regulará la Ley Orgánica del Poder Judicial?",
        options: [
          "La constitución, funcionamiento y gobierno de los Juzgados y Tribunales.",
          "El estatuto jurídico de los Jueces y Magistrados de carrera.",
          "El estatuto jurídico del personal al servicio de la Administración de Justicia.",
          "Todas las anteriores son correctas.",
        ],
        correctAnswerIndex: 3,
      },
      {
        questionText: "Respecto del Ministerio Fiscal, y de acuerdo con lo dispuesto en la Constitución española de 1978, ¿cuál de las siguientes afirmaciones es incorrecta?",
        options: [
          "El Ministerio Fiscal ejerce sus funciones por medio de órganos propios conforme a los principios de unidad de actuación y dependencia jerárquica.",
          "Además de los principios señalados en la respuesta A, también ejercerá sus funciones de conformidad con los principios de legalidad e imparcialidad.",
          "El Ministerio Fiscal tiene como misión, entre otras, la de velar por la independencia de los Tribunales y procurar ante éstos la satisfacción del interés social.",
          "El Fiscal General del Estado será nombrado por el Rey, a propuesta del Consejo General del Poder Judicial, oído el Gobierno.",
        ],
        correctAnswerIndex: 3,
      },
      {
        questionText: "El Gobierno, de acuerdo con lo dispuesto en la Constitución española de 1978:",
        options: [
          "Dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado. Ejerce la función ejecutiva y la potestad reglamentaria de acuerdo con la Constitución y las leyes.",
          "Dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado. Ejerce la función ejecutiva y la potestad legislativa y reglamentaria de acuerdo con la Constitución y las leyes.",
          "Dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado exclusivamente.",
          "Dirige la política exterior, la Administración civil y militar y la defensa del Estado, coordina la política interior junto con las Comunidades Autónomas. Ejerce la función ejecutiva y la potestad reglamentaria de acuerdo con la Constitución y las leyes.",
        ],
        correctAnswerIndex: 0,
      },
      {
        questionText: "Señale, de acuerdo con lo dispuesto en la Constitución española de 1978, la respuesta correcta respecto de la Administración:",
        options: [
          "Los órganos de la Administración del Estado son creados, regidos y coordinados de acuerdo con lo dispuesto en los correspondientes reglamentos de organización.",
          "Los Tribunales controlan la potestad reglamentaria y la legalidad de la actuación administrativa, así como el sometimiento de ésta a los fines que la justifican.",
          "Los Tribunales controlan la potestad reglamentaria y la legalidad de la actuación administrativa, correspondiendo al Poder Legislativo controlar su sometimiento a los fines que la justifican.",
          "Los particulares, en los términos establecidos por la ley, tendrán derecho a ser indemnizados por toda lesión que sufran en cualquiera de sus bienes y derechos, siempre que la lesión sea consecuencia del funcionamiento de los servicios públicos.",
        ],
        correctAnswerIndex: 1,
      },
      {
        questionText: "Respecto de la Administración territorial de la Administración General del Estado, señale la respuesta correcta, de conformidad con la Ley 6/1997, de 14 de abril, de Organización y Funcionamiento de la Administración General del Estado:",
        options: [
          "Los Subdelegados del Gobierno en las Provincias tienen rango de Subdirector General.",
          "Los Delegados del Gobierno en las Comunidades Autónomas tienen rango de Directores Generales.",
          "Los Delegados del Gobierno en las Comunidades Autónomas y los Subdelegados del Gobierno en las Provincias tienen condición de alto cargo.",
          "Ninguna de las anteriores respuestas es correcta.",
        ],
        correctAnswerIndex: 0,
      },
      {
        questionText: "De las siguientes afirmaciones señale la incorrecta, de acuerdo con lo dispuesto en la Ley 6/1997, de 14 de abril, de Organización y Funcionamiento de la Administración General del Estado:",
        options: [
          "Las Delegaciones del Gobierno se adscriben orgánicamente al Ministerio de Administraciones Públicas.",
          "Las Subdelegaciones del Gobierno en las Provincias se constituyen en órganos de la respectiva delegación del Gobierno.",
          "Los Delegados del Gobierno dependen de la Presidencia del Gobierno.",
          "En caso de ausencia, vacante o enfermedad, el Delegado del Gobierno será suplido, temporalmente y en todo caso, por el Subdelegado del Gobierno de la provincia donde aquél tenga su sede.",
        ],
        correctAnswerIndex: 3,
      },
      {
        questionText: "De acuerdo con lo dispuesto en la Ley 6/1997, de 14 de abril, de Organización y Funcionamiento de la Administración General del Estado, señale cuál de las siguientes afirmaciones es incorrecta:",
        options: [
          "Los Ministros son los jefes superiores del Departamento y superiores jerárquicos directos de los Secretarios de Estado.",
          "Los Ministros tienen la consideración de alto cargo.",
          "Corresponde a los Ministros mantener las relaciones con las Comunidades Autónomas y convocar las conferencias sectoriales y los órganos de cooperación en el ámbito de las competencias atribuidas a su Departamento.",
          "Corresponde a los Ministros celebrar en el ámbito de su competencia todos los contratos y convenios.",
        ],
        correctAnswerIndex: 3,
      },
      {
        questionText: "¿Cuál de las siguientes afirmaciones es la correcta de conformidad con lo dispuesto en la Constitución española de 1978?",
        options: [
          "Los Estatutos de las distintas Comunidades Autónomas no podrán presentar diferencia alguna de acuerdo con el principio de unidad y solidaridad.",
          "Los Estatutos de las distintas Comunidades Autónomas podrán presentar diferencias que impliquen privilegios económicos, en virtud de las competencias asumidas en los mismos, pero en ningún caso privilegios sociales.",
          "Las diferencias entre los Estatutos de las distintas Comunidades Autónomas no podrán implicar, en ningún caso, privilegios económicos o sociales.",
          "Las diferencias entre los Estatutos de las distintas Comunidades Autónomas no podrán implicar, en ningún caso, privilegios económicos o sociales que no estén reconocidos en la propia Constitución española.",
        ],
        correctAnswerIndex: 2,
      },
      {
        questionText: "De acuerdo con lo dispuesto en la Constitución española de 1978, podrán acceder a su autogobierno y constituirse en Comunidades Autónomas:",
        options: [
          "Los territorios insulares.",
          "Las provincias limítrofes con características históricas, culturales y económicas comunes.",
          "Las provincias con entidad regional histórica.",
          "Todos los territorios anteriores podrán acceder a su autogobierno y constituirse en Comunidades Autónomas con arreglo a lo previsto en el Título VIII de la Constitución y en los respectivos Estatutos.",
        ],
        correctAnswerIndex: 3,
      },
      {
        questionText: "Según la Constitución española de 1978, ¿a quien corresponde la elaboración del proyecto de Estatuto?",
        options: [
          "A una asamblea compuesta por los miembros de la Diputación u órgano interinsular de las provincias afectadas a propuesta de los Diputados y Senadores elegidos en ellas siendo elevado a las Cortes Generales para su tramitación como ley.",
          "A una asamblea compuesta por los miembros de la Diputación u órgano interinsular de las provincias afectadas y por los Diputados y Senadores elegidos en ellas y será elevado a las Cortes Generales para su tramitación como ley.",
          "A una asamblea compuesta por los miembros de la Diputación u órgano interinsular de las provincias afectadas para su estudio por una comisión formada por los Diputados y Senadores elegidos en ellas y ulterior remisión a las Cortes Generales para su tramitación como ley orgánica.",
          "A una asamblea compuesta por los miembros de la Diputación u órgano interinsular de las provincias afectadas a propuesta de los Diputados y Senadores elegidos en ellas siendo elevado al Senado, como Cámara de representación territorial, para su tramitación como ley.",
        ],
        correctAnswerIndex: 1,
      },
      {
        questionText: "Según lo dispuesto en el artículo 149.3 de la Constitución española de 1978, señale la respuesta correcta:",
        options: [
          "Las materias no atribuidas expresamente al Estado por la Constitución corresponderán a las Comunidades Autónomas",
          "La competencia sobre las materias que no se hayan asumido por los Estatutos de Autonomía corresponderá al Estado, cuyas normas prevalecerán siempre, en caso de conflicto, sobre las de las Comunidades Autónomas.",
          "El Derecho estatal será, en todo caso, supletorio del Derecho de las Comunidades Autónomas.",
          "Ninguna de las anteriores respuestas es correcta.",
        ],
        correctAnswerIndex: 2,
      },
      {
        questionText: "De acuerdo con lo dispuesto en el artículo 149 de la de la Constitución española de 1978, el Estado tiene competencia exclusiva en:",
        options: [
          "Legislación laboral, sin perjuicio de la normativa de desarrollo que será competencia de las Comunidades Autónomas.",
          "Legislación sobre Seguridad Social, sin perjuicio de su ejecución por los órganos de las Comunidades Autónomas.",
          "Convocatoria de consultas populares por vía de referéndum.",
          "Regulación de las condiciones de obtención, expedición y homologación de títulos académicos y profesionales y normas básicas para el desarrollo del artículo 27 de la Constitución, a fin de garantizar el cumplimiento de las obligaciones de los poderes públicos en esta materia.",
        ],
        correctAnswerIndex: 3,
      },
      {
        questionText: "¿Quién nombra al Presidente de la Comunidad de Madrid, de conformidad con su Estatuto de Autonomía?",
        options: [
          "La Asamblea de Madrid.",
          "El Congreso.",
          "El Senado.",
          "El Rey.",
        ],
        correctAnswerIndex: 3,
      },
      {
        questionText: "En la Comunidad de Madrid, ¿a quién le corresponde la potestad de establecer y exigir tributos de conformidad con su Estatuto de Autonomía?",
        options: [
          "Al Presidente de la Comunidad de Madrid.",
          "A la Asamblea.",
          "Al Consejero de Hacienda.",
          "Al Gobierno de la Comunidad de Madrid.",
        ],
        correctAnswerIndex: 1,
      },
      {
        questionText: "Según el Estatuto de Autonomía, es necesario ser diputado de la Asamblea de la Comunidad de Madrid, para:",
        options: [
          "Ser Vicepresidente del Gobierno de la Comunidad de Madrid.",
          "Ser Consejero del Gobierno de la Comunidad de Madrid, but no para ser Vicepresidente del mismo.",
          "Ser tanto Vicepresidente como Consejero del Gobierno de la Comunidad de Madrid.",
          "Ninguna respuesta es correcta.",
        ],
        correctAnswerIndex: 3,
      },
      {
        questionText: "Señale el número de Consejerías que existen en la actualidad en la Administración de la Comunidad de Madrid:",
        options: ["13", "11", "12", "10"],
        correctAnswerIndex: 0,
      },
      {
        questionText: "En la Comunidad de Madrid, ¿quién tiene mayor nivel orgánico, los Secretarios Generales Técnicos o los Directores Generales?",
        options: [
          "Los Secretarios Generales Técnicos.",
          "Ambos tienen idéntico nivel orgánico.",
          "Los Directores Generales.",
          "Dependerá de cómo se haya estructurado la respectiva Consejería.",
        ],
        correctAnswerIndex: 1,
      },
      {
        questionText: "La Ley 30/1992, de 26 de noviembre, de Régimen Jurídico de las Administraciones Públicas y del Procedimiento Administrativo Común fue derogada por la ley:",
        options: [
          "39/2015, de 1 de octubre.",
          "40/2015, de 1 de octubre.",
          "A y B son correctas.",
          "Ninguna respuesta es correcta."
        ],
        correctAnswerIndex: 2,
      },
      {
        questionText: "¿Cómo se denomina el Título IV de la Ley 30/1992, de Régimen Jurídico de las Administraciones Públicas y del Procedimiento Administrativo Común?",
        options: [
          "De la actividad de las Administraciones Públicas.",
          "De los interesados",
          "De las disposiciones y actos administrativos.",
          "De los órganos de las Administraciones Públicas.",
        ],
        correctAnswerIndex: 0,
      },
      {
        questionText: "Según el artículo 35 de la Ley 30/1992, de Régimen Jurídico de las Administraciones Públicas y del Procedimiento Administrativo Común, ¿tienen derecho los ciudadanos en sus relaciones con las Administraciones Públicas a no presentar aquellos documentos que ya se encuentren en poder de la Administración actuante?",
        options: [
          "En la Comunidad de Madrid dependerá de lo que disponga anualmente la Orden que aprueba el Consejero de Presidencia.",
          "No, salvo que así lo disponga la norma reguladora del procedimiento concreto.",
          "Dependerá del órgano instructor del procedimiento, mediante decisión motivada en todo caso.",
          "Sí, de acuerdo con el citado artículo.",
        ],
        correctAnswerIndex: 3,
      },
      {
        questionText: "Las cuestiones incidentales que se suceden en el procedimiento administrativo, de conformidad con la Ley 30/1992, de Régimen Jurídico de las Administraciones Públicas y del Procedimiento Administrativo Común ¿suspenden la tramitación del mismo?",
        options: [
          "No, en ningún caso.",
          "No, a excepción de la recusación.",
          "Sí, en todo caso.",
          "No, salvo las que se refieran a la nulidad de actuaciones.",
        ],
        correctAnswerIndex: 1,
      },
      {
        questionText: "Cuando el plazo se fija en meses o años, éstos se computarán de acuerdo con lo dispuesto en la Ley 30/1992, de Régimen Jurídico de las Administraciones Públicas y del Procedimiento Administrativo Común, a partir:",
        options: [
          "Del día siguiente a aquel en que tenga lugar la notificación o publicación del acto de que se trate.",
          "Del mismo día en que tenga lugar la notificación o publicación del acto de que se trate.",
          "Del día siguiente a aquel en que se produzca la estimación o desestimación por silencio administrativo.",
          "Las respuestas A y C son correctas.",
        ],
        correctAnswerIndex: 3,
      },
    ]
  };
    
    



    
