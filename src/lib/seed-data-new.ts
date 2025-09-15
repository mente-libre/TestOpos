import type { Question } from './firebase/firestore';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

export const advoGeneralTest: SeedExam = {
    fileName: "ADVO-L Test General (105 Preguntas)",
    category: "estado",
    questions: [
        {
            "questionText": "Según el artículo 2 de la Ley Orgánica 3/1981, de 6 de abril, del Defensor del Pueblo, ¿qué Comisión se designará en las Cortes Generales para relacionarse con el Defensor del Pueblo e informar a los respectivos Plenos en cuantas ocasiones sea necesario?",
            "options": [
                "Una Comisión Mixta Congreso-Senado.",
                "Una Comisión Mixta de Control Parlamentario.",
                "Una Comisión Permanente Congreso-Senado.",
                "Una Comisión de Investigación."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿En cuántos títulos se encuentra estructurada la Constitución Española de 1978?",
            "options": [
                "Un título preliminar y 10 títulos.",
                "Cinco títulos divididos en 10 subtítulos.",
                "No se estructura en títulos, sino en apartados.",
                "Dos títulos divididos en 10 artículos."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "De acuerdo con el artículo 63 de la Constitución Española de 1978, ¿a quién corresponde declarar la guerra y hacer la paz?",
            "options": [
                "Al Gobierno, previa autorización del Rey.",
                "Al Congreso de los Diputados, previa autorización del Rey.",
                "Al Rey, previa autorización de las Cortes Generales.",
                "Al Rey, previa autorización del Congreso de los Diputados."
            ],
            "correctAnswerIndex": 2
        },
        {
            "questionText": "De acuerdo con el artículo 71 de la Constitución Española de 1978, ¿quién será competente en las causas contra Diputados y Senadores?",
            "options": [
                "El Tribunal Constitucional.",
                "La Sala de lo Penal de la Audiencia Nacional.",
                "La Sala de lo Penal del Tribunal Supremo.",
                "La Sala de lo Contencioso-Administrativo del Tribunal Supremo."
            ],
            "correctAnswerIndex": 2
        },
        {
            "questionText": "De acuerdo con el artículo 8 de la Ley 50/1997, de 27 de noviembre, del Gobierno, ¿podrá la Comisión General de Secretarios de Estado y Subsecretarios adoptar decisiones o acuerdos por delegación del Gobierno?",
            "options": [
                "Sí, por Acuerdo del Consejo de Ministros, a propuesta del Presidente del Gobierno.",
                "Sí, por delegación expresa de los Ministros.",
                "Sí, en los casos basados en la Ley 6/1997, de 14 de abril, de Organización y Funcionamiento de la Administración General del Estado.",
                "No, en ningún caso."
            ],
            "correctAnswerIndex": 3
        },
        {
            "questionText": "Según el artículo 124 de la Constitución Española de 1978, ¿quién nombra al Fiscal General del Estado?",
            "options": [
                "El Fiscal General del Estado será nombrado por Presidente del Tribunal Constitucional, entre los miembros del Consejo General del Poder Judicial.",
                "El Fiscal General del Estado será nombrado por el Gobierno, a propuesta del Consejo General del Poder Judicial.",
                "El Fiscal General del Estado será nombrado por el Consejo General del Poder Judicial, a propuesta del Gobierno.",
                "El Fiscal General del Estado será nombrado por el Rey, a propuesta del Gobierno, oído el Consejo General del Poder Judicial."
            ],
            "correctAnswerIndex": 3
        },
        {
            "questionText": "Según el artículo 5.3 de la Ley 50/1997, de 27 de noviembre, del Gobierno, las deliberaciones del Consejo de Ministros serán:",
            "options": [
                "Secretas.",
                "Públicas.",
                "Motivadas.",
                "Sancionadas por el Rey."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿En cuántos ejes se articula el IV Plan de Gobierno Abierto en España?",
            "options": [
                "Cinco ejes.",
                "Veinte ejes.",
                "Cien ejes.",
                "Cincuenta y tres ejes."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "Según la Ley 2/2014, de 25 de marzo, de la Acción y del Servicio Exterior del Estado:",
            "options": [
                "Las Representaciones Permanentes representan con este carácter a España ante la Unión Europea o una Organización Internacional.",
                "La creación y supresión de las Misiones Diplomáticas Permanentes y Representaciones Permanentes se realizará mediante orden ministerial del Ministro de Asuntos Exteriores, Unión Europea y Cooperación.",
                "Las Representaciones Permanentes representan con este carácter a España ante la Unión Europea o una Organización Nacional.",
                "La creación y supresión de las Misiones Diplomáticas Permanentes y Representaciones Permanentes se realizará mediante orden ministerial del Ministro de la Presidencia."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "Según la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno, frente a toda resolución expresa o presunta en materia de acceso podrá interponerse una reclamación ante el Consejo de Transparencia y Buen Gobierno, con carácter potestativo y previo a su impugnación en vía contencioso-administrativa. Al respecto de lo anterior, indique la respuesta correcta:",
            "options": [
                "La reclamación se interpondrá en el plazo de un mes a contar desde el día siguiente al de la notificación del acto impugnado o desde el día siguiente a aquel en que se produzcan los efectos del silencio administrativo. El plazo máximo para resolver y notificar la resolución será de dos meses, transcurrido el cual, la reclamación se entenderá desestimada.",
                "La reclamación se interpondrá en el plazo de tres meses a contar desde el día siguiente al de la notificación del acto impugnado o desde el día siguiente a aquel en que se produzcan los efectos del silencio administrativo. El plazo máximo para resolver y notificar la resolución será de two meses, transcurrido el cual, la reclamación se entenderá desestimada.",
                "La reclamación se interpondrá en el plazo de tres meses a contar desde el día siguiente al de la notificación del acto impugnado o desde el día siguiente a aquel en que se produzcan los efectos del silencio administrativo. El plazo máximo para resolver y notificar la resolución será de tres meses, transcurrido el cual, la reclamación se entenderá desestimada.",
                "La reclamación se interpondrá en el plazo de un mes a contar desde el día siguiente al de la notificación del acto impugnado o desde el día siguiente a aquel en que se produzcan los efectos del silencio administrativo. El plazo máximo para resolver y notificar la resolución será de tres meses, transcurrido el cual, la reclamación se entenderá desestimada."
            ],
            "correctAnswerIndex": 3
        },
        {
            "questionText": "Según la Constitución Española de 1978, ¿cuál de las siguientes opciones es correcta respecto a los Estatutos de Autonomía?",
            "options": [
                "Son la norma institucional superior de cada comunidad autónoma y del Estado.",
                "El Estado los reconocerá y amparará como parte integrante de su ordenamiento jurídico.",
                "El procedimiento de reforma requerirá, en todo caso, la celebración de un referéndum y la aprobación por las Cortes Generales, mediante ley orgánica.",
                "Se aprueban por ley ordinaria."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "De acuerdo con la Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local, ¿cuál de los siguientes órganos ha de existir en todos los ayuntamientos?",
            "options": [
                "Tenientes de alcalde.",
                "Comisión de Tributos.",
                "Comisión de Sugerencias y Reclamaciones.",
                "Junta de Gobierno Local."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "El artículo 2 del Tratado de la Unión Europea establece que la Unión Europea se fundamenta en los valores de respeto de la dignidad humana, libertad, democracia, igualdad, Estado de Derecho y respeto de los derechos humanos, incluidos los derechos de las personas pertenecientes a minorías. ¿Qué institución de la Unión Europea está facultada para constatar la existencia de una violación grave y persistente de un Estado miembro de los valores contemplados en dicho artículo?",
            "options": [
                "El Consejo Europeo.",
                "La Comisión Europea.",
                "El Parlamento Europeo.",
                "El Tribunal de Justicia de la Unión Europea."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "De conformidad con la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, la presidencia de la Agencia Española de Protección de Datos será nombrada por:",
            "options": [
                "El Congreso de los Diputados, a propuesta del Presidente del Gobierno.",
                "El Gobierno, a propuesta del Congreso de los Diputados.",
                "El Congreso de los Diputados, por mayoría de 3/5.",
                "El Gobierno, a propuesta del Ministerio de Justicia."
            ],
            "correctAnswerIndex": 3
        },
        {
            "questionText": "Según el Real Decreto 208/1996, de 9 de febrero, por el que se regulan los servicios de información administrativa y atención al ciudadano, ¿quién ostentará la jefatura de la unidad departamental de información administrativa en cada Ministerio?",
            "options": [
                "El titular de la Subdirección General que tenga encomendada la competencia sobre la información administrativa.",
                "El titular del Departamento.",
                "La Comisión Interministerial de Información Administrativa.",
                "El Subsecretario, en todo caso."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "Según el Real Decreto 1708/2011, de 18 de noviembre, por el que se establece el Sistema Español de Archivos y se regula el Sistema de Archivos de la Administración General del Estado y de sus Organismos Públicos y su régimen de acceso, los archivos de oficina o de gestión cumplirán las funciones de:",
            "options": [
                "Impulsar programas de difusión y gestión cultural del patrimonio documental custodiado.",
                "Organizar los documentos producidos por sus respectivas unidades.",
                "Conservar los documentos que son transferidos desde los Archivos Centrales de los Ministerios.",
                "Conservar los documentos con valor histórico que le son transferidos desde el Archivo General de la Administración."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "Según la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, son nulos de pleno derecho:",
            "options": [
                "Las disposiciones administrativas que establezcan la retroactividad de disposiciones sancionadoras favorables.",
                "Los actos dictados por órgano manifiestamente competente por razón de la materia o del territorio.",
                "Los actos que tengan un contenido imposible.",
                "Las disposiciones administrativas que vulneren otras disposiciones administrativas de rango inferior."
            ],
            "correctAnswerIndex": 2
        },
        {
            "questionText": "Según lo dispuesto en los artículos 90 y 91 de la Constitución Española de 1978, aprobado un proyecto de ley ordinaria u orgánica por el Congreso de los Diputados, su Presidente dará inmediata cuenta del mismo al Presidente del Senado, el cual lo someterá a la deliberación de éste. Indique la respuesta correcta:",
            "options": [
                "El Senado en el plazo de tres meses, a partir del día de la recepción del texto, puede, mediante mensaje motivado, oponer su veto o introducir enmiendas al mismo.",
                "El proyecto no podrá ser sometido al Rey para sanción sin que el Congreso ratifique por mayoría absoluta, una vez transcurrido el plazo previsto en el artículo 91 de la Constitución Española de 1978 desde la interposición del mismo.",
                "El plazo de dos meses de que el Senado dispone para vetar o enmendar el proyecto se reducirá al de veinte días naturales en los proyectos declarados urgentes por el Gobierno o por el Congreso de los Diputados.",
                "El Rey sancionará en el plazo de veinte días naturales las leyes aprobadas por las Cortes Generales, y las promulgará y ordenará su inmediata publicación."
            ],
            "correctAnswerIndex": 2
        },
        {
            "questionText": "Con arreglo a lo dispuesto en la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, salvo que reste menos para su tramitación ordinaria, ¿en qué tiempo deberán ser resueltos los procedimientos administrativos tramitados de manera simplificada?",
            "options": [
                "Diez días, a contar desde la notificación al interesado del acuerdo de tramitación simplificada del procedimiento.",
                "Treinta días, a contar desde la notificación al interesado del acuerdo de tramitación simplificada del procedimiento.",
                "Diez días, a contar desde el siguiente al que se notifique al interesado el acuerdo de tramitación simplificada del procedimiento.",
                "Treinta días, a contar desde el siguiente al que se notifique al interesado el acuerdo de tramitación simplificada del procedimiento."
            ],
            "correctAnswerIndex": 3
        },
        {
            "questionText": "Conforme a lo señalado en el artículo 74 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, las cuestiones incidentales que se susciten en un procedimiento:",
            "options": [
                "Suspenderán la tramitación del procedimiento, salvo la recusación, que no lo suspenderá.",
                "Suspenderán la tramitación del procedimiento.",
                "No suspenderán la tramitación del procedimiento en ningún caso.",
                "No suspenderán la tramitación del procedimiento, salvo la recusación."
            ],
            "correctAnswerIndex": 3
        },
        {
            "questionText": "El artículo 16 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, establece que son contratos de suministro:",
            "options": [
                "Aquellos por el que uno o varios poderes adjudicadores encomiendan a título oneroso a una o varias personas naturales o jurídicas, la gestión de un servicio cuya prestación sea de su titularidad o competencia.",
                "Los que tienen por objeto la ejecución de una obra, aislada o conjuntamente con la redacción del proyecto.",
                "Aquellos cuyo objeto son prestaciones de hacer consistentes en el desarrollo de una actividad o dirigidas a la obtención de un resultado distinto de una obra.",
                "Los que tienen por objeto la adquisición, el arrendamiento financiero, o el arrendamiento, con o sin opción de compra, de productos o bienes muebles."
            ],
            "correctAnswerIndex": 3
        },
        {
            "questionText": "El artículo 145 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público establece sobre la adjudicación de los contratos que:",
            "options": [
                "Se realizará atendiendo a la oferta económica más ventajosa, sin necesidad de justificarlo en el expediente.",
                "Se realizará utilizando una pluralidad de criterios de adjudicación en base a la mejor relación calidad-precio.",
                "Se realizará atendiendo exclusivamente a criterios cualitativos.",
                "Se realizará atendiendo exclusivamente a criterios cuantitativos."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "Son materias objeto de arbitraje conforme al artículo 2 de la Ley 60/2003, de 23 de diciembre, de Arbitraje:",
            "options": [
                "Las controversias sobre materias de libre disposición conforme a derecho.",
                "Las cuestiones en que, con arreglo a las Leyes, deba intervenir el Ministerio Fiscal en representación y defensa de quienes, por carecer de capacidad de obrar o de representación legal, no pueden actuar por sí mismos.",
                "Las cuestiones sobre las que haya recaído resolución judicial firme y definitiva, salvo los aspectos derivados de su ejecución.",
                "Los despidos, convenios colectivos y conflictos laborales."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "Conforme al artículo 29 de la Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público, la graduación de la sanción administrativa considerará especialmente los siguientes criterios:",
            "options": [
                "La inexistencia de intencionalidad y no reincidencia en la comisión de infracciones administrativas.",
                "La no reincidencia en la comisión de infracciones administrativas.",
                "El grado de culpabilidad o la inexistencia de intencionalidad.",
                "El grado de culpabilidad o la existencia de intencionalidad."
            ],
            "correctAnswerIndex": 3
        },
        {
            "questionText": "¿Qué norma regula el procedimiento y requisitos para la rectificación registral relativa al sexo y, en su caso, nombre de las personas, así como sus efectos, y prevé medidas específicas derivadas de dicha rectificación en los ámbitos público y privado?",
            "options": [
                "Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres.",
                "Ley 15/2022, de 12 de julio, integral para la igualdad de trato y la no discriminación.",
                "Ley 4/2023, de 28 de febrero, para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI.",
                "Real Decreto de 24 de julio de 1889 por el que se publica el Código Civil."
            ],
            "correctAnswerIndex": 2
        },
        {
            "questionText": "Según el Real Decreto 1405/1986, de 6 de junio, por el que se aprueban el Reglamento del Registro Central de Personal y las normas de coordinación con los de las restantes Administraciones Públicas, ¿qué es preceptivo de anotación en el Registro Central de Personal?:",
            "options": [
                "Los reingresos.",
                "Las vacaciones.",
                "Los días de asuntos particulares.",
                "Los cambios de domicilio."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "Según el artículo 10 del texto refundido de la Ley del Estatuto Básico del Empleado Público, ¿en qué circunstancia se puede nombrar a un funcionario interino?",
            "options": [
                "Cuando existan plazas vacantes, y no sea posible su cobertura por funcionarios de carrera, por un máximo de dos años.",
                "Por el exceso o acumulación de tareas por plazo máximo de tres meses, dentro de un periodo de doce meses.",
                "Para la sustitución transitoria de los titulares, durante el tiempo estrictamente necesario.",
                "Para la ejecución de programas de carácter estructural."
            ],
            "correctAnswerIndex": 2
        },
        {
            "questionText": "Según el artículo 62 del texto refundido de la Ley del Estatuto Básico del Empleado Público, ¿cuál de los siguientes requisitos es necesario cumplir para adquirir la condición de funcionario de carrera?",
            "options": [
                "Toma de posesión dentro de los tres días posteriores al nombramiento.",
                "Acto de acatamiento de la Constitución y, en su caso, del Estatuto de Autonomía correspondiente y del resto del Ordenamiento Jurídico.",
                "Superación del proceso selectivo, aunque en ese momento no se reúna la titulación requerida en la convocatoria.",
                "Toma de posesión al día siguiente de haber sido nombrado."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "El artículo 61 del texto refundido de la Ley del Estatuto Básico del Empleado Público, establece que los sistemas selectivos de personal laboral fijo serán:",
            "options": [
                "Los de concurso oposición o entrevista.",
                "Los de concurso oposición o concurso de valoración de méritos con entrevista.",
                "Los de oposición o concurso oposición con entrevista.",
                "Los de oposición, concurso oposición o concurso de valoración de méritos."
            ],
            "correctAnswerIndex": 3
        },
        {
            "questionText": "De acuerdo con el artículo 53 del texto refundido de la Ley del Estatuto Básico del Empleado Público, dentro del Código de conducta de los empleados públicos, es un principio ético:",
            "options": [
                "Desempeñar las tareas correspondientes a su puesto de trabajo de forma diligente y cumpliendo la jornada y el horario establecidos.",
                "No aceptar ningún trato de favor o situación que implique privilegio o ventaja injustificada, por parte de personas físicas o entidades privadas.",
                "Administrar los recursos y bienes públicos con austeridad, y not utilizar los mismos en provecho propio o de personas allegadas. Tendrán, asimismo, el deber de velar por su conservación.",
                "Garantizar la atención al ciudadano en la lengua que lo solicite."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "Según el artículo 98.3 del texto refundido de la Ley del Estatuto Básico del Empleado Público:",
            "options": [
                "La suspensión provisional como medida cautelar en la tramitación de un expediente disciplinario no podrá exceder de 6 meses, salvo en caso de paralización del procedimiento imputable al interesado.",
                "La suspensión provisional como medida cautelar en la tramitación de un expediente disciplinario no podrá exceder de 3 meses, salvo en caso de paralización del procedimiento imputable al interesado.",
                "La suspensión provisional como medida cautelar en la tramitación de un expediente disciplinario no podrá exceder de 12 meses, salvo en caso de paralización del procedimiento imputable al interesado.",
                "La suspensión provisional como medida cautelar en la tramitación de un expediente disciplinario no podrá exceder de 18 meses, salvo en caso de paralización del procedimiento imputable al interesado."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "Según el artículo 3.1 del texto refundido de la Ley sobre Seguridad Social de los Funcionarios Civiles del Estado ¿cuál de estos colectivos estaría obligatoriamente incluido de su ámbito de aplicación?",
            "options": [
                "Los funcionarios de la Administración Local.",
                "Los funcionarios de la Administración de la Seguridad Social.",
                "Los funcionarios de carrera de la Administración Civil del Estado transferidos a las Comunidades Autónomas, que hayan ingresado o ingresen voluntariamente en Cuerpos o Escalas propios de la Comunidad Autónoma de destino, cualquiera que sea el sistema de acceso.",
                "Los funcionarios en prácticas que aspiren a incorporarse a Cuerpos de la Administración Civil del Estado, en la forma que reglamentariamente se determine."
            ],
            "correctAnswerIndex": 3
        },
        {
            "questionText": "De conformidad con el IV Convenio colectivo único para el personal laboral de la Administración General del Estado, la modificación de la clasificación profesional de determinados colectivos de personal, sólo podrá ser aprobada:",
            "options": [
                "Por la Subcomisión Paritaria a la que pertenezca.",
                "Por la Comisión Negociadora del Convenio.",
                "Por la Comisión Paritaria.",
                "Por mayoría del colectivo afectado."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "Según el artículo 44.1 del texto refundido de la Ley General de la Seguridad Social, las prestaciones de la Seguridad Social, así como los beneficios de sus servicios sociales y de la asistencia social, no podrán ser objeto de retención, cesión total o parcial, compensación o descuento, salvo en alguno de estos casos:",
            "options": [
                "En orden al cumplimiento de las obligaciones alimenticias a favor del cónyuge e hijos.",
                "Por deudas privadas.",
                "Por incumplimiento de contratos públicos.",
                "Por fraude en el percibo de subvenciones públicas."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "El artículo 134 de la Constitución Española de 1978 establece, literalmente, que el Gobierno deberá presentar los Presupuestos Generales del Estado:",
            "options": [
                "Ante las Cortes Generales al menos tres meses antes de la expiración de los del año anterior.",
                "Ante el Congreso de los Diputados antes de que finalice el ejercicio presupuestario.",
                "Ante los Presidentes de ambas Cámaras Legislativas antes de la expiración de los del año anterior.",
                "Ante el Congreso de los Diputados al menos tres meses antes de la expiración de los del año anterior."
            ],
            "correctAnswerIndex": 3
        },
        {
            "questionText": "Conforme a la clasificación económica del gasto en los Presupuestos Generales del Estado, los gastos destinados a atender las indemnizaciones por razón del servicio se imputarán al:",
            "options": [
                "Capítulo 1.",
                "Capítulo 2.",
                "Capítulo 3.",
                "Capítulo 4."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "Con carácter general y de acuerdo con el artículo 198 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, la Administración tiene la obligación de abonar el precio de las prestaciones convenidas dentro de:",
            "options": [
                "Los treinta días siguientes a la fecha de aprobación de las certificaciones de obra o de los documentos de conformidad con lo dispuesto en el contrato.",
                "Los sesenta días siguientes a la fecha de aprobación de las certificaciones de obra o de los documentos de conformidad con lo dispuesto en el contrato.",
                "Los noventa días siguientes a la fecha de aprobación de las certificaciones de obra o de los documentos de conformidad con lo dispuesto en el contrato.",
                "Los veinte días siguientes a la fecha de aprobación de las certificaciones de obra o de los documentos de conformidad con lo dispuesto en el contrato."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "De conformidad con el artículo 75 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, ¿a quién le competen las funciones de Ordenador General de pagos del Estado?",
            "options": [
                "Al Ministro de Economía.",
                "Al Director General del Tesero y Política Financiera.",
                "Al Secretario General del Tesoro y Financiación Internacional.",
                "Al Ministro de Hacienda."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "De acuerdo con la Ley 30/1984, de 2 de agosto, de medidas para la reforma de la Función Pública, señale la respuesta correcta respecto al complemento específico:",
            "options": [
                "Se percibe en 12 pagas.",
                "Es el correspondiente al nivel del puesto que se desempeñe.",
                "Es una retribución básica, que se devenga con carácter fijo y periodicidad mensual.",
                "En ningún caso podrá asignarse más de un complemento específico a cada puesto de trabajo."
            ],
            "correctAnswerIndex": 3
        },
        {
            "questionText": "Indique la respuesta correcta entre las siguientes opciones relativas a lo dispuesto en el artículo 10 del Real Decreto 640/1987, de 8 de mayo, sobre pagos librados «a justificar»:",
            "options": [
                "Los Cajeros pagadores quedarán obligados a justificar la aplicación de las cantidades recibidas dentro del mes siguiente a la inversión de las mismas y en todo caso en el plazo de seis meses desde la percepción de los correspondientes fondos.",
                "Los Cajeros pagadores quedarán obligados a justificar la aplicación de las cantidades recibidas dentro de los dos meses siguientes a la inversión de las mismas y en todo caso en el plazo de tres meses desde la percepción de los correspondientes fondos.",
                "Los Cajeros pagadores quedarán obligados a justificar la aplicación de las cantidades recibidas dentro de los dos meses siguientes a la inversión de las mismas y en todo caso en el plazo de seis meses desde la percepción de los correspondientes fondos.",
                "Los Cajeros pagadores quedarán obligados a justificar la aplicación de las cantidades recibidas dentro del mes siguiente a la inversión de las mismas y en todo caso en el plazo de tres meses desde la percepción de los correspondientes fondos."
            ],
            "correctAnswerIndex": 3
        },
        {
            "questionText": "¿Cuál de las siguientes afirmaciones es verdadera?",
            "options": [
                "El escáner es un periférico de entrada del ordenador.",
                "Los ordenadores con sistema operativo Linux no admiten impresoras.",
                "La impresora es un periférico de entrada del ordenador.",
                "La función principal de una tarjeta de red es la impresión."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Cuál de las siguientes opciones corresponde a un sistema operativo?",
            "options": [
                "AMD.",
                "PostgreSQL.",
                "Mac OS.",
                "RJ45."
            ],
            "correctAnswerIndex": 2
        },
        {
            "questionText": "¿Qué tipo de licencia de software permite a los usuarios usar, estudiar, cambiar y mejorar el software, y redistribuirlo con o sin cambios?",
            "options": [
                "Software propietario.",
                "Software de código abierto.",
                "Shareware.",
                "Freeware."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué significa la sigla PDF?",
            "options": [
                "Portable Document Format.",
                "Personal Data File.",
                "Printed Document Format.",
                "Public Domain File."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es un ataque de phishing?",
            "options": [
                "Un ataque que busca explotar vulnerabilidades en el software.",
                "Un intento de obtener información confidencial suplantando la identidad de una entidad legítima.",
                "Un ataque que inunda una red con tráfico para hacerla inaccesible.",
                "Un programa malicioso que se replica a sí mismo."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué protocolo se utiliza comúnmente para la transferencia segura de archivos a través de Internet?",
            "options": [
                "HTTP.",
                "FTP.",
                "SFTP.",
                "SMTP."
            ],
            "correctAnswerIndex": 2
        },
        {
            "questionText": "¿Qué significa la sigla URL?",
            "options": [
                "Universal Resource Locator.",
                "Uniform Resource Locator.",
                "Unified Resource Link.",
                "Universal Reference Link."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué es una base de datos relacional?",
            "options": [
                "Una base de datos que almacena datos en tablas relacionadas entre sí.",
                "Una base de datos que solo almacena datos no estructurados.",
                "Una base de datos que se ejecuta en un solo servidor.",
                "Una base de datos que no requiere un sistema de gestión."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué lenguaje de programación se utiliza principalmente para desarrollar páginas web interactivas?",
            "options": [
                "Java.",
                "Python.",
                "JavaScript.",
                "C++."
            ],
            "correctAnswerIndex": 2
        },
        {
            "questionText": "¿Qué es la nube (cloud computing)?",
            "options": [
                "Un dispositivo de almacenamiento físico externo.",
                "El suministro de servicios informáticos a través de Internet.",
                "Una red local de ordenadores.",
                "Un tipo de software antivirus."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué significa la sigla HTML?",
            "options": [
                "HyperText Markup Language.",
                "High-Level Text Management Language.",
                "HyperTransfer Markup Language.",
                "Home Tool Markup Language."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es un firewall?",
            "options": [
                "Un programa que detecta y elimina virus.",
                "Un sistema de seguridad que controla el tráfico de red.",
                "Un dispositivo para aumentar la velocidad de Internet.",
                "Un tipo de servidor web."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué es un algoritmo?",
            "options": [
                "Un tipo de hardware.",
                "Un conjunto de instrucciones para resolver un problema.",
                "Un lenguaje de programación.",
                "Un dispositivo de almacenamiento."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué significa la sigla VPN?",
            "options": [
                "Virtual Private Network.",
                "Very Protected Network.",
                "Virtual Public Network.",
                "Verified Private Network."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la inteligencia artificial?",
            "options": [
                "La capacidad de un robot para moverse autónomamente.",
                "La simulación de procesos de inteligencia humana por máquinas.",
                "El uso de ordenadores para realizar cálculos complejos.",
                "La conexión de dispositivos a Internet."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué es un blog?",
            "options": [
                "Un sitio web que contiene entradas cronológicas regulares.",
                "Un tipo de red social.",
                "Un programa de mensajería instantánea.",
                "Un dispositivo de almacenamiento en línea."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la memoria RAM?",
            "options": [
                "Memoria de almacenamiento permanente.",
                "Memoria de solo lectura.",
                "Memoria de acceso aleatorio temporal.",
                "Memoria externa."
            ],
            "correctAnswerIndex": 2
        },
        {
            "questionText": "¿Qué es un sistema operativo?",
            "options": [
                "Un programa que gestiona el hardware del ordenador.",
                "Un dispositivo de entrada.",
                "Un tipo de software de aplicación.",
                "Un lenguaje de programación."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es un podcast?",
            "options": [
                "Un programa de radio o televisión disponible en Internet.",
                "Un tipo de blog.",
                "Un dispositivo de audio.",
                "Una red social."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la realidad virtual?",
            "options": [
                "Un entorno simulado por ordenador.",
                "Una red social.",
                "Un tipo de inteligencia artificial.",
                "Un dispositivo de almacenamiento."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es un dato personal según el RGPD?",
            "options": [
                "Cualquier información sobre una persona física identificada o identificable.",
                "Solo información sensible como la religión o salud.",
                "Información anónima sobre personas.",
                "Información sobre personas jurídicas."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué principio de protección de datos implica que los datos deben ser adecuados, pertinentes y limitados a lo necesario?",
            "options": [
                "Principio de licitud.",
                "Principio de minimización de datos.",
                "Principio de exactitud.",
                "Principio de integridad y confidencialidad."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Cuál es la edad mínima para dar consentimiento para el tratamiento de datos personales según el RGPD?",
            "options": [
                "14 años.",
                "16 años.",
                "18 años.",
                "13 años."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué derecho permite a una persona solicitar la supresión de sus datos personales?",
            "options": [
                "Derecho de acceso.",
                "Derecho de oposición.",
                "Derecho de supresión ('derecho al olvido').",
                "Derecho de portabilidad."
            ],
            "correctAnswerIndex": 2
        },
        {
            "questionText": "¿En qué plazo debe responderse a una solicitud de ejercicio de derechos según el RGPD?",
            "options": [
                "3 meses.",
                "1 mes, prorrogable a 2.",
                "15 días.",
                "6 semanas."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué es una Evaluación de Impacto en la Protección de Datos (EIPD)?",
            "options": [
                "Una evaluación obligatoria para todos los tratamientos de datos.",
                "Un proceso para evaluar riesgos en tratamientos de alto riesgo.",
                "Una auditoría anual de seguridad.",
                "Un informe de cumplimiento normativo."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué autoridad es responsable de la protección de datos en España?",
            "options": [
                "Agencia Española de Protección de Datos (AEPD).",
                "Instituto Nacional de Ciberseguridad (INCIBE).",
                "Comisión Nacional de los Mercados y la Competencia (CNMC).",
                "Agencia Tributaria."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué debe hacerse en caso de una violación de seguridad de los datos personales?",
            "options": [
                "Solo documentarlo internamente.",
                "Notificar a la autoridad en 72 horas si hay riesgo.",
                "Notificar siempre a los afectados.",
                "No es necesario hacer nada si se soluciona rápido."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué son los datos especialmente protegidos?",
            "options": [
                "Datos que revelen origen racial, opiniones políticas, etc.",
                "Datos de contacto.",
                "Datos anónimos.",
                "Datos de empresas."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es el Delegado de Protección de Datos (DPO)?",
            "options": [
                "Un empleado que supervisa el cumplimiento del RGPD.",
                "Un funcionario de la AEPD.",
                "Un consultor externo obligatorio.",
                "El responsable de todos los tratamientos de datos."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la igualdad de género?",
            "options": [
                "Que hombres y mujeres sean tratados igual en todas las situaciones.",
                "La igualdad de derechos, responsabilidades y oportunidades.",
                "Que las mujeres tengan más oportunidades que los hombres.",
                "Solo la igualdad salarial."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué es la violencia de género?",
            "options": [
                "Cualquier violencia ejercida sobre mujeres.",
                "Violencia que se ejerce contra las mujeres por el hecho de serlo.",
                "Violencia doméstica en general.",
                "Solo violencia física."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué es el acoso sexual?",
            "options": [
                "Cualquier comportamiento de naturaleza sexual.",
                "Comportamiento no deseado de naturaleza sexual que afecta a la dignidad.",
                "Solo contactos físicos no deseados.",
                "Comentarios de tipo sexual entre compañeros de trabajo."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué es la brecha salarial?",
            "options": [
                "La diferencia de salario entre jóvenes y adultos.",
                "La diferencia de salario entre hombres y mujeres por trabajo de igual valor.",
                "La diferencia de salario entre directivos y empleados.",
                "La diferencia de salario entre sectores económicos."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué son los planes de igualdad?",
            "options": [
                "Planes obligatorios solo para grandes empresas.",
                "Conjunto de medidas para alcanzar la igualdad en una organización.",
                "Planes del gobierno para la igualdad nacional.",
                "Medidas para contratar más mujeres."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué es el lenguaje inclusivo?",
            "options": [
                "Usar solo el femenino en todos los casos.",
                "Usar lenguaje que no excluya a ningún género.",
                "Evitar el uso de adjetivos.",
                "Usar lenguaje técnico y formal."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué es la conciliación de la vida laboral y familiar?",
            "options": [
                "Reducir la jornada laboral para todos.",
                "Permitir que las personas armonizen trabajo y familia.",
                "Solo medidas para mujeres con hijos.",
                "Trabajar desde casa siempre."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué es el techo de cristal?",
            "options": [
                "Barreras invisibles que dificultan el ascenso laboral de las mujeres.",
                "Límite máximo de contratación de mujeres.",
                "Discriminación directa en la contratación.",
                "Falta de formación de las mujeres para puestos directivos."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la interseccionalidad?",
            "options": [
                "Estudio de las intersecciones viales.",
                "Cómo diferentes ejes de discriminación se solapan.",
                "Colaboración entre departamentos.",
                "Fusión de empresas del mismo sector."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué establece la Ley de Igualdad?",
            "options": [
                "Solo medidas contra la violencia de género.",
                "Igualdad entre hombres y mujeres en todos los ámbitos.",
                "Cuotas obligatorias en todos los puestos.",
                "Sanciones por discriminación salarial."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué es la accesibilidad universal?",
            "options": [
                "Acceso a internet para todos.",
                "Condición que deben cumplir entornos para ser utilizados por todos.",
                "Solo rampas para sillas de ruedas.",
                "Ayudas técnicas para personas con discapacidad."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué es la discriminación por discapacidad?",
            "options": [
                "Tratar diferente a alguien por su discapacidad.",
                "No contratar a personas con discapacidad visible.",
                "Solo falta de accesibilidad física.",
                "No tener baños adaptados."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es el diseño para todos?",
            "options": [
                "Diseño que puede ser usado por el mayor número de personas posible.",
                "Diseño de moda universal.",
                "Diseño de productos solo para personas con discapacidad.",
                "Diseño de interiores accesible."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la Convención de la ONU sobre Discapacidad?",
            "options": [
                "Un tratado internacional sobre derechos de personas con discapacidad.",
                "Una ley española sobre accesibilidad.",
                "Una directiva europea sobre empleo.",
                "Un acuerdo sobre pensiones por discapacidad."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué son los ajustes razonables?",
            "options": [
                "Modificaciones necesarias para garantizar igualdad de oportunidades.",
                "Reducción de salario por menor productividad.",
                "Adaptaciones solo en puestos directivos.",
                "Cambios en la jornada laboral para todos."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la vida independiente?",
            "options": [
                "Vivir solo sin ayuda de nadie.",
                "Derecho a elegir cómo vivir con los apoyos necesarios.",
                "Tener ingresos propios sin depender de pensiones.",
                "No necesitar asistencia técnica."
            ],
            "correctAnswerIndex": 1
        },
        {
            "questionText": "¿Qué es la accesibilidad cognitiva?",
            "options": [
                "Entender información y manejarse en entornos fácilmente.",
                "Acceso a educación universitaria.",
                "Capacidad para usar ordenadores.",
                "Comprensión de textos legales."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la discriminación múltiple?",
            "options": [
                "Discriminación por varios motivos simultáneamente.",
                "Varios actos discriminatorios en el tiempo.",
                "Discriminación por parte de varias personas.",
                "Discriminación en varios ámbitos diferentes."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la autonomía personal?",
            "options": [
                "Capacidad de gobernarse a uno mismo.",
                "Vivir sin ayuda de otras personas.",
                "Tener independencia económica.",
                "Poder tomar decisiones sin consultar."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué son los apoyos para la discapacidad?",
            "options": [
                "Recursos que promueven la autonomía y participación.",
                "Solo ayudas económicas.",
                "Tratamientos médicos rehabilitadores.",
                "Voluntarios que acompañan a personas."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es el desarrollo sostenible?",
            "options": [
                "Desarrollo que satisface las necesidades presentes sin comprometer futuras.",
                "Crecimiento económico constante.",
                "Desarrollo solo de energías renovables.",
                "Protección del medio ambiente sin desarrollo económico."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué son los Objetivos de Desarrollo Sostenible (ODS)?",
            "options": [
                "17 objetivos globales para 2030.",
                "Objetivos ambientales de la ONU.",
                "Metas económicas de países desarrollados.",
                "Compromisos contra el cambio climático."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la huella de carbono?",
            "options": [
                "Total de gases de efecto invernadero emitidos.",
                "Contaminación por residuos sólidos.",
                "Impacto ambiental de una organización.",
                "Emisiones de CO2 de vehículos."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la economía circular?",
            "options": [
                "Sistema de reutilización y reciclaje de recursos.",
                "Economía de países en vías de desarrollo.",
                "Intercambio comercial entre países vecinos.",
                "Sistema económico basado en trueque."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la Agenda 2030?",
            "options": [
                "Plan de la ONU para el desarrollo sostenible.",
                "Agenda europea de medio ambiente.",
                "Plan nacional español de infraestructuras.",
                "Estrategia contra el cambio climático."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la biodiversidad?",
            "options": [
                "Variedad de seres vivos en un ecosistema.",
                "Diversidad de paisajes naturales.",
                "Plantas medicinales de una región.",
                "Animales en peligro de extinción."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es el cambio climático?",
            "options": [
                "Alteración del clima por actividades humanas.",
                "Cambios naturales del clima terrestre.",
                "Aumento de la temperatura global solo.",
                "Fenómenos meteorológicos extremos."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué son las energías renovables?",
            "options": [
                "Energías de fuentes naturales inagotables.",
                "Energías no contaminantes.",
                "Energías más baratas.",
                "Energías de biomasa solo."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la eficiencia energética?",
            "options": [
                "Usar menos energía para mismo servicio.",
                "Usar solo energías renovables.",
                "Reducir el consumo energético total.",
                "Producir más energía con menos recursos."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la movilidad sostenible?",
            "options": [
                "Sistemas de transporte eficientes y ecológicos.",
                "Transporte público gratuito.",
                "Uso de vehículos eléctricos solamente.",
                "Reducción de viajes innecesarios."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la Responsabilidad Social Corporativa?",
            "options": [
                "Contribución voluntaria al desarrollo sostenible.",
                "Obligaciones legales de las empresas.",
                "Acciones filantrópicas de empresas.",
                "Marketing de causas sociales."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es el comercio justo?",
            "options": [
                "Comercio con criterios éticos y sostenibles.",
                "Comercio sin intermediarios.",
                "Trueque de productos artesanales.",
                "Comercio local solamente."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la soberanía alimentaria?",
            "options": [
                "Derecho de pueblos a decidir su política alimentaria.",
                "Autosuficiencia alimentaria de un país.",
                "Control de precios de alimentos básicos.",
                "Producción agrícola tradicional."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué son los derechos humanos?",
            "options": [
                "Derechos inherentes a todos los seres humanos.",
                "Derechos constitucionales de cada país.",
                "Derechos civiles y políticos solamente.",
                "Derechos reconocidos por la ONU."
            ],
            "correctAnswerIndex": 0
        },
        {
            "questionText": "¿Qué es la diversidad cultural?",
            "options": [
                "Variedad de culturas coexistiendo.",
                "Protección de culturas minoritarias.",
                "Intercambio cultural entre países.",
                "Patrimonio cultural de la humanidad."
            ],
            "correctAnswerIndex": 0
        }
    ]
}
