import { type Question } from './definitions';
import { ebepTest } from './seed-data-ebep';
import { seguridadSocialTest } from './seed-data-seguridad-social';
import { tema14Test } from './seed-data-tema14';
import { ley39Test as ley39_2015Test } from './seed-data-ley39-2015';
import { ley29Test as ley29_1998Test } from './seed-data-ley29-1998';
import { ley19Test as ley19_2013Test } from './seed-data-ley19-2013';
import { ley3_2007Test } from './seed-data-ley3-2007';
import { ley1_1983Test } from './seed-data-ley1-1983';
import { lo3_1983Test as lo3_1983Test_imported } from './seed-data-lo3-1983';
import { constitucionTest as constitucionTest_imported } from './seed-data-constitucion';
import { ley9_2017Test as ley9_2017Test_imported } from './seed-data-ley9-2017';
import { ley9_1990Test } from './seed-data-ley9-1990';
import { madrid2017Test } from './seed-data-madrid-2017';
import { madrid2023Test } from './seed-data-madrid-2023';
import { madrid2025Test } from './seed-data-madrid-2025';

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
    questions: constitucionTest_imported.questions,
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

export { ebepTest, seguridadSocialTest, tema14Test, ley39_2015Test as ley39Test, ley29_1998Test as ley29Test, ley19_2013Test as ley19Test, lo3_1983Test_imported as lo3_1983Test, constitucionTest_imported as constitucionTest, ley9_2017Test_imported as ley9_2017Test, ley9_1990Test as ley9Test, ley3_2007Test as ley3Test, ley1_1983Test as ley1Test };
export { madrid2017Test } from './seed-data-madrid-2017';
export { madrid2023Test } from './seed-data-madrid-2023';
export { madrid2025Test } from './seed-data-madrid-2025';