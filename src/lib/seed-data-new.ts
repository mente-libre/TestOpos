

import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const optionMap: { [key: string]: number } = { a: 0, b: 1, c: 2, d: 3 };

const rawAdvoGeneralTest = {
    fileName: "ADVO-L Test General (105 Preguntas)",
    category: "estado",
    questions: [
        {
            "enunciado": "Según el artículo 2 de la Ley Orgánica 3/1981, de 6 de abril, del Defensor del Pueblo, ¿qué Comisión se designará en las Cortes Generales para relacionarse con el Defensor del Pueblo e informar a los respectivos Plenos en cuantas ocasiones sea necesario?",
            "opciones": {
                "a": "Una Comisión Mixta Congreso-Senado.",
                "b": "Una Comisión Mixta de Control Parlamentario.",
                "c": "Una Comisión Permanente Congreso-Senado.",
                "d": "Una Comisión de Investigación."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿En cuántos títulos se encuentra estructurada la Constitución Española de 1978?",
            "opciones": {
                "a": "Un título preliminar y 10 títulos.",
                "b": "Cinco títulos divididos en 10 subtítulos.",
                "c": "No se estructura en títulos, sino en apartados.",
                "d": "Dos títulos divididos en 10 artículos."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "De acuerdo con el artículo 63 de la Constitución Española de 1978, ¿a quién corresponde declarar la guerra y hacer la paz?",
            "opciones": {
                "a": "Al Gobierno, previa autorización del Rey.",
                "b": "Al Congreso de los Diputados, previa autorización del Rey.",
                "c": "Al Rey, previa autorización de las Cortes Generales.",
                "d": "Al Rey, previa autorización del Congreso de los Diputados."
            },
            "respuesta_correcta": "c"
        },
        {
            "enunciado": "De acuerdo con el artículo 71 de la Constitución Española de 1978, ¿quién será competente en las causas contra Diputados y Senadores?",
            "opciones": {
                "a": "El Tribunal Constitucional.",
                "b": "La Sala de lo Penal de la Audiencia Nacional.",
                "c": "La Sala de lo Penal del Tribunal Supremo.",
                "d": "La Sala de lo Contencioso-Administrativo del Tribunal Supremo."
            },
            "respuesta_correcta": "c"
        },
        {
            "enunciado": "De acuerdo con el artículo 8 de la Ley 50/1997, de 27 de noviembre, del Gobierno, ¿podrá la Comisión General de Secretarios de Estado y Subsecretarios adoptar decisiones o acuerdos por delegación del Gobierno?",
            "opciones": {
                "a": "Sí, por Acuerdo del Consejo de Ministros, a propuesta del Presidente del Gobierno.",
                "b": "Sí, por delegación expresa de los Ministros.",
                "c": "Sí, en los casos basados en la Ley 6/1997, de 14 de abril, de Organización y Funcionamiento de la Administración General del Estado.",
                "d": "No, en ningún caso."
            },
            "respuesta_correcta": "d"
        },
        {
            "enunciado": "Según el artículo 124 de la Constitución Española de 1978, ¿quién nombra al Fiscal General del Estado?",
            "opciones": {
                "a": "El Fiscal General del Estado será nombrado por Presidente del Tribunal Constitucional, entre los miembros del Consejo General del Poder Judicial.",
                "b": "El Fiscal General del Estado será nombrado por el Gobierno, a propuesta del Consejo General del Poder Judicial.",
                "c": "El Fiscal General del Estado será nombrado por el Consejo General del Poder Judicial, a propuesta del Gobierno.",
                "d": "El Fiscal General del Estado será nombrado por el Rey, a propuesta del Gobierno, oído el Consejo General del Poder Judicial."
            },
            "respuesta_correcta": "d"
        },
        {
            "enunciado": "Según el artículo 5.3 de la Ley 50/1997, de 27 de noviembre, del Gobierno, las deliberaciones del Consejo de Ministros serán:",
            "opciones": {
                "a": "Secretas.",
                "b": "Públicas.",
                "c": "Motivadas.",
                "d": "Sancionadas por el Rey."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿En cuántos ejes se articula el IV Plan de Gobierno Abierto en España?",
            "opciones": {
                "a": "Cinco ejes.",
                "b": "Veinte ejes.",
                "c": "Cien ejes.",
                "d": "Cincuenta y tres ejes."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "Según la Ley 2/2014, de 25 de marzo, de la Acción y del Servicio Exterior del Estado:",
            "opciones": {
                "a": "Las Representaciones Permanentes representan con este carácter a España ante la Unión Europea o una Organización Internacional.",
                "b": "La creación y supresión de las Misiones Diplomáticas Permanentes y Representaciones Permanentes se realizará mediante orden ministerial del Ministro de Asuntos Exteriores, Unión Europea y Cooperación.",
                "c": "Las Representaciones Permanentes representan con este carácter a España ante la Unión Europea o una Organización Nacional.",
                "d": "La creación y supresión de las Misiones Diplomáticas Permanentes y Representaciones Permanentes se realizará mediante orden ministerial del Ministro de la Presidencia."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "Según la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno, frente a toda resolución expresa o presunta en materia de acceso podrá interponerse una reclamación ante el Consejo de Transparencia y Buen Gobierno, con carácter potestativo y previo a su impugnación en vía contencioso-administrativa. Al respecto de lo anterior, indique la respuesta correcta:",
            "opciones": {
                "a": "La reclamación se interpondrá en el plazo de un mes a contar desde el día siguiente al de la notificación del acto impugnado o desde el día siguiente a aquel en que se produzcan los efectos del silencio administrativo. El plazo máximo para resolver y notificar la resolución será de dos meses, transcurrido el cual, la reclamación se entenderá desestimada.",
                "b": "La reclamación se interpondrá en el plazo de tres meses a contar desde el día siguiente al de la notificación del acto impugnado o desde el día siguiente a aquel en que se produzcan los efectos del silencio administrativo. El plazo máximo para resolver y notificar la resolución será de two meses, transcurrido el cual, la reclamación se entenderá desestimada.",
                "c": "La reclamación se interpondrá en el plazo de tres meses a contar desde el día siguiente al de la notificación del acto impugnado o desde el día siguiente a aquel en que se produzcan los efectos del silencio administrativo. El plazo máximo para resolver y notificar la resolución será de tres meses, transcurrido el cual, la reclamación se entenderá desestimada.",
                "d": "La reclamación se interpondrá en el plazo de un mes a contar desde el día siguiente al de la notificación del acto impugnado o desde el día siguiente a aquel en que se produzcan los efectos del silencio administrativo. El plazo máximo para resolver y notificar la resolución será de tres meses, transcurrido el cual, la reclamación se entenderá desestimada."
            },
            "respuesta_correcta": "d"
        },
        {
            "enunciado": "Según la Constitución Española de 1978, ¿cuál de las siguientes opciones es correcta respecto a los Estatutos de Autonomía?",
            "opciones": {
                "a": "Son la norma institucional superior de cada comunidad autónoma y del Estado.",
                "b": "El Estado los reconocerá y amparará como parte integrante de su ordenamiento jurídico.",
                "c": "El procedimiento de reforma requerirá, en todo caso, la celebración de un referéndum y la aprobación por las Cortes Generales, mediante ley orgánica.",
                "d": "Se aprueban por ley ordinaria."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "De acuerdo con la Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local, ¿cuál de los siguientes órganos ha de existir en todos los ayuntamientos?",
            "opciones": {
                "a": "Tenientes de alcalde.",
                "b": "Comisión de Tributos.",
                "c": "Comisión de Sugerencias y Reclamaciones.",
                "d": "Junta de Gobierno Local."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "El artículo 2 del Tratado de la Unión Europea establece que la Unión Europea se fundamenta en los valores de respeto de la dignidad humana, libertad, democracia, igualdad, Estado de Derecho y respeto de los derechos humanos, incluidos los derechos de las personas pertenecientes a minorías. ¿Qué institución de la Unión Europea está facultada para constatar la existencia de una violación grave y persistente de un Estado miembro de los valores contemplados en dicho artículo?",
            "opciones": {
                "a": "El Consejo Europeo.",
                "b": "La Comisión Europea.",
                "c": "El Parlamento Europeo.",
                "d": "El Tribunal de Justicia de la Unión Europea."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "De conformidad con la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, la presidencia de la Agencia Española de Protección de Datos será nombrada por:",
            "opciones": {
                "a": "El Congreso de los Diputados, a propuesta del Presidente del Gobierno.",
                "b": "El Gobierno, a propuesta del Congreso de los Diputados.",
                "c": "El Congreso de los Diputados, por mayoría de 3/5.",
                "d": "El Gobierno, a propuesta del Ministerio de Justicia."
            },
            "respuesta_correcta": "d"
        },
        {
            "enunciado": "Según el Real Decreto 208/1996, de 9 de febrero, por el que se regulan los servicios de información administrativa y atención al ciudadano, ¿quién ostentará la jefatura de la unidad departamental de información administrativa en cada Ministerio?",
            "opciones": {
                "a": "El titular de la Subdirección General que tenga encomendada la competencia sobre la información administrativa.",
                "b": "El titular del Departamento.",
                "c": "La Comisión Interministerial de Información Administrativa.",
                "d": "El Subsecretario, en todo caso."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "Según el Real Decreto 1708/2011, de 18 de noviembre, por el que se establece el Sistema Español de Archivos y se regula el Sistema de Archivos de la Administración General del Estado y de sus Organismos Públicos y su régimen de acceso, los archivos de oficina o de gestión cumplirán las funciones de:",
            "opciones": {
                "a": "Impulsar programas de difusión y gestión cultural del patrimonio documental custodiado.",
                "b": "Organizar los documentos producidos por sus respectivas unidades.",
                "c": "Conservar los documentos que son transferidos desde los Archivos Centrales de los Ministerios.",
                "d": "Conservar los documentos con valor histórico que le son transferidos desde el Archivo General de la Administración."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "Según la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, son nulos de pleno derecho:",
            "opciones": {
                "a": "Las disposiciones administrativas que establezcan la retroactividad de disposiciones sancionadoras favorables.",
                "b": "Los actos dictados por órgano manifiestamente competente por razón de la materia o del territorio.",
                "c": "Los actos que tengan un contenido imposible.",
                "d": "Las disposiciones administrativas que vulneren otras disposiciones administrativas de rango inferior."
            },
            "respuesta_correcta": "c"
        },
        {
            "enunciado": "Según lo dispuesto en los artículos 90 y 91 de la Constitución Española de 1978, aprobado un proyecto de ley ordinaria u orgánica por el Congreso de los Diputados, su Presidente dará inmediata cuenta del mismo al Presidente del Senado, el cual lo someterá a la deliberación de éste. Indique la respuesta correcta:",
            "opciones": {
                "a": "El Senado en el plazo de tres meses, a partir del día de la recepción del texto, puede, mediante mensaje motivado, oponer su veto o introducir enmiendas al mismo.",
                "b": "El proyecto no podrá ser sometido al Rey para sanción sin que el Congreso ratifique por mayoría absoluta, una vez transcurrido el plazo previsto en el artículo 91 de la Constitución Española de 1978 desde la interposición del mismo.",
                "c": "El plazo de dos meses de que el Senado dispone para vetar o enmendar el proyecto se reducirá al de veinte días naturales en los proyectos declarados urgentes por el Gobierno o por el Congreso de los Diputados.",
                "d": "El Rey sancionará en el plazo de veinte días naturales las leyes aprobadas por las Cortes Generales, y las promulgará y ordenará su inmediata publicación."
            },
            "respuesta_correcta": "c"
        },
        {
            "enunciado": "Con arreglo a lo dispuesto en la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, salvo que reste menos para su tramitación ordinaria, ¿en qué tiempo deberán ser resueltos los procedimientos administrativos tramitados de manera simplificada?",
            "opciones": {
                "a": "Diez días, a contar desde la notificación al interesado del acuerdo de tramitación simplificada del procedimiento.",
                "b": "Treinta días, a contar desde la notificación al interesado del acuerdo de tramitación simplificada del procedimiento.",
                "c": "Diez días, a contar desde el siguiente al que se notifique al interesado el acuerdo de tramitación simplificada del procedimiento.",
                "d": "Treinta días, a contar desde el siguiente al que se notifique al interesado el acuerdo de tramitación simplificada del procedimiento."
            },
            "respuesta_correcta": "d"
        },
        {
            "enunciado": "Conforme a lo señalado en el artículo 74 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, las cuestiones incidentales que se susciten en un procedimiento:",
            "opciones": {
                "a": "Suspenderán la tramitación del procedimiento, salvo la recusación, que no lo suspenderá.",
                "b": "Suspenderán la tramitación del procedimiento.",
                "c": "No suspenderán la tramitación del procedimiento en ningún caso.",
                "d": "No suspenderán la tramitación del procedimiento, salvo la recusación."
            },
            "respuesta_correcta": "d"
        },
        {
            "enunciado": "El artículo 16 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, establece que son contratos de suministro:",
            "opciones": {
                "a": "Aquellos por el que uno o varios poderes adjudicadores encomiendan a título oneroso a una o varias personas naturales o jurídicas, la gestión de un servicio cuya prestación sea de su titularidad o competencia.",
                "b": "Los que tienen por objeto la ejecución de una obra, aislada o conjuntamente con la redacción del proyecto.",
                "c": "Aquellos cuyo objeto son prestaciones de hacer consistentes en el desarrollo de una actividad o dirigidas a la obtención de un resultado distinto de una obra.",
                "d": "Los que tienen por objeto la adquisición, el arrendamiento financiero, o el arrendamiento, con o sin opción de compra, de productos o bienes muebles."
            },
            "respuesta_correcta": "d"
        },
        {
            "enunciado": "El artículo 145 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público establece sobre la adjudicación de los contratos que:",
            "opciones": {
                "a": "Se realizará atendiendo a la oferta económica más ventajosa, sin necesidad de justificarlo en el expediente.",
                "b": "Se realizará utilizando una pluralidad de criterios de adjudicación en base a la mejor relación calidad-precio.",
                "c": "Se realizará atendiendo exclusively a criterios cualitativos.",
                "d": "Se realizará atendiendo exclusivamente a criterios cuantitativos."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "Son materias objeto de arbitraje conforme al artículo 2 de la Ley 60/2003, de 23 de diciembre, de Arbitraje:",
            "opciones": {
                "a": "Las controversias sobre materias de libre disposición conforme a derecho.",
                "b": "Las cuestiones en que, con arreglo a las Leyes, deba intervenir el Ministerio Fiscal en representación y defensa de quienes, por carecer de capacidad de obrar o de representación legal, no pueden actuar por sí mismos.",
                "c": "Las cuestiones sobre las que haya recaído resolución judicial firme y definitiva, salvo los aspectos derivados de su ejecución.",
                "d": "Los despidos, convenios colectivos y conflictos laborales."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "Conforme al artículo 29 de la Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público, la graduación de la sanción administrativa considerará especialmente los siguientes criterios:",
            "opciones": {
                "a": "La inexistencia de intencionalidad y no reincidencia en la comisión de infracciones administrativas.",
                "b": "La no reincidencia en la comisión de infracciones administrativas.",
                "c": "El grado de culpabilidad o la inexistencia de intencionalidad.",
                "d": "El grado de culpabilidad o la existencia de intencionalidad."
            },
            "respuesta_correcta": "d"
        },
        {
            "enunciado": "¿Qué norma regula el procedimiento y requisitos para la rectificación registral relativa al sexo y, en su caso, nombre de las personas, así como sus efectos, y prevé medidas específicas derivadas de dicha rectificación en los ámbitos público y privado?",
            "opciones": {
                "a": "Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres.",
                "b": "Ley 15/2022, de 12 de julio, integral para la igualdad de trato y la no discriminación.",
                "c": "Ley 4/2023, de 28 de febrero, para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI.",
                "d": "Real Decreto de 24 de julio de 1889 por el que se publica el Código Civil."
            },
            "respuesta_correcta": "c"
        },
        {
            "enunciado": "Según el Real Decreto 1405/1986, de 6 de junio, por el que se aprueban el Reglamento del Registro Central de Personal y las normas de coordinación con los de las restantes Administraciones Públicas, ¿qué es preceptivo de anotación en el Registro Central de Personal?:",
            "opciones": {
                "a": "Los reingresos.",
                "b": "Las vacaciones.",
                "c": "Los días de asuntos particulares.",
                "d": "Los cambios de domicilio."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "Según el artículo 10 del texto refundido de la Ley del Estatuto Básico del Empleado Público, ¿en qué circunstancia se puede nombrar a un funcionario interino?",
            "opciones": {
                "a": "Cuando existan plazas vacantes, y no sea posible su cobertura por funcionarios de carrera, por un máximo de dos años.",
                "b": "Por el exceso o acumulación de tareas por plazo máximo de tres meses, dentro de un periodo de doce meses.",
                "c": "Para la sustitución transitoria de los titulares, durante el tiempo estrictamente necesario.",
                "d": "Para la ejecución de programas de carácter estructural."
            },
            "respuesta_correcta": "c"
        },
        {
            "enunciado": "Según el artículo 62 del texto refundido de la Ley del Estatuto Básico del Empleado Público, ¿cuál de los siguientes requisitos es necesario cumplir para adquirir la condición de funcionario de carrera?",
            "opciones": {
                "a": "Toma de posesión dentro de los tres días posteriores al nombramiento.",
                "b": "Acto de acatamiento de la Constitución y, en su caso, del Estatuto de Autonomía correspondiente y del resto del Ordenamiento Jurídico.",
                "c": "Superación del proceso selectivo, aunque en ese momento no se reúna la titulación requerida en la convocatoria.",
                "d": "Toma de posesión al día siguiente de haber sido nombrado."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "El artículo 61 del texto refundido de la Ley del Estatuto Básico del Empleado Público, establece que los sistemas selectivos de personal laboral fijo serán:",
            "opciones": {
                "a": "Los de concurso oposición o entrevista.",
                "b": "Los de concurso oposición o concurso de valoración de méritos con entrevista.",
                "c": "Los de oposición o concurso oposición con entrevista.",
                "d": "Los de oposición, concurso oposición o concurso de valoración de méritos."
            },
            "respuesta_correcta": "d"
        },
        {
            "enunciado": "De acuerdo con el artículo 53 del texto refundido de la Ley del Estatuto Básico del Empleado Público, dentro del Código de conducta de los empleados públicos, es un principio ético:",
            "opciones": {
                "a": "Desempeñar las tareas correspondientes a su puesto de trabajo de forma diligente y cumpliendo la jornada y el horario establecidos.",
                "b": "No aceptar ningún trato de favor o situación que implique privilegio o ventaja injustificada, por parte de personas físicas o entidades privadas.",
                "c": "Administrar los recursos y bienes públicos con austeridad, y not utilizar los mismos en provecho propio o de personas allegadas. Tendrán, asimismo, el deber de velar por su conservación.",
                "d": "Garantizar la atención al ciudadano en la lengua que lo solicite."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "Según el artículo 98.3 del texto refundido de la Ley del Estatuto Básico del Empleado Público:",
            "opciones": {
                "a": "La suspensión provisional como medida cautelar en la tramitación de un expediente disciplinario no podrá exceder de 6 meses, salvo en caso de paralización del procedimiento imputable al interesado.",
                "b": "La suspensión provisional como medida cautelar en la tramitación de un expediente disciplinario no podrá exceder de 3 meses, salvo en caso de paralización del procedimiento imputable al interesado.",
                "c": "La suspensión provisional como medida cautelar en la tramitación de un expediente disciplinario no podrá exceder de 12 meses, salvo en caso de paralización del procedimiento imputable al interesado.",
                "d": "La suspensión provisional como medida cautelar en la tramitación de un expediente disciplinario no podrá exceder de 18 meses, salvo en caso de paralización del procedimiento imputable al interesado."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "Según el artículo 3.1 del texto refundido de la Ley sobre Seguridad Social de los Funcionarios Civiles del Estado ¿cuál de estos colectivos estaría obligatoriamente incluido de su ámbito de aplicación?",
            "opciones": {
                "a": "Los funcionarios de la Administración Local.",
                "b": "Los funcionarios de la Administración de la Seguridad Social.",
                "c": "Los funcionarios de carrera de la Administración Civil del Estado transferidos a las Comunidades Autónomas, que hayan ingresado o ingresen voluntariamente en Cuerpos o Escalas propios de la Comunidad Autónoma de destino, cualquiera que sea el sistema de acceso.",
                "d": "Los funcionarios en prácticas que aspiren a incorporarse a Cuerpos de la Administración Civil del Estado, en la forma que reglamentariamente se determine."
            },
            "respuesta_correcta": "d"
        },
        {
            "enunciado": "De conformidad con el IV Convenio colectivo único para el personal laboral de la Administración General del Estado, la modificación de la clasificación profesional de determinados colectivos de personal, sólo podrá ser aprobada:",
            "opciones": {
                "a": "Por la Subcomisión Paritaria a la que pertenezca.",
                "b": "Por la Comisión Negociadora del Convenio.",
                "c": "Por la Comisión Paritaria.",
                "d": "Por mayoría del colectivo afectado."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "Según el artículo 44.1 del texto refundido de la Ley General de la Seguridad Social, las prestaciones de la Seguridad Social, así como los beneficios de sus servicios sociales y de la asistencia social, no podrán ser objeto de retención, cesión total o parcial, compensación o descuento, salvo en alguno de estos casos:",
            "opciones": {
                "a": "En orden al cumplimiento de las obligaciones alimenticias a favor del cónyuge e hijos.",
                "b": "Por deudas privadas.",
                "c": "Por incumplimiento de contratos públicos.",
                "d": "Por fraude en el percibo de subvenciones públicas."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "El artículo 134 de la Constitución Española de 1978 establece, literalmente, que el Gobierno deberá presentar los Presupuestos Generales del Estado:",
            "opciones": {
                "a": "Ante las Cortes Generales al menos tres meses antes de la expiración de los del año anterior.",
                "b": "Ante el Congreso de los Diputados antes de que finalice el ejercicio presupuestario.",
                "c": "Ante los Presidentes de ambas Cámaras Legislativas antes de la expiración de los del año anterior.",
                "d": "Ante el Congreso de los Diputados al menos tres meses antes de la expiración de los del año anterior."
            },
            "respuesta_correcta": "d"
        },
        {
            "enunciado": "Conforme a la clasificación económica del gasto en los Presupuestos Generales del Estado, los gastos destinados a atender las indemnizaciones por razón del servicio se imputarán al:",
            "opciones": {
                "a": "Capítulo 1.",
                "b": "Capítulo 2.",
                "c": "Capítulo 3.",
                "d": "Capítulo 4."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "Con carácter general y de acuerdo con el artículo 198 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, la Administración tiene la obligación de abonar el precio de las prestaciones convenidas dentro de:",
            "opciones": {
                "a": "Los treinta días siguientes a la fecha de aprobación de las certificaciones de obra o de los documentos de conformidad con lo dispuesto en el contrato.",
                "b": "Los sesenta días siguientes a la fecha de aprobación de las certificaciones de obra o de los documentos de conformidad con lo dispuesto en el contrato.",
                "c": "Los noventa días siguientes a la fecha de aprobación de las certificaciones de obra o de los documentos de conformidad con lo dispuesto en el contrato.",
                "d": "Los veinte días siguientes a la fecha de aprobación de las certificaciones de obra o de los documentos de conformidad con lo dispuesto en el contrato."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "De conformidad con el artículo 75 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, ¿a quién le competen las funciones de Ordenador General de pagos del Estado?",
            "opciones": {
                "a": "Al Ministro de Economía.",
                "b": "Al Director General del Tesero y Política Financiera.",
                "c": "Al Secretario General del Tesoro y Financiación Internacional.",
                "d": "Al Ministro de Hacienda."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "De acuerdo con la Ley 30/1984, de 2 de agosto, de medidas para la reforma de la Función Pública, señale la respuesta correcta respecto al complemento específico:",
            "opciones": {
                "a": "Se percibe en 12 pagas.",
                "b": "Es el correspondiente al nivel del puesto que se desempeñe.",
                "c": "Es una retribución básica, que se devenga con carácter fijo y periodicidad mensual.",
                "d": "En ningún caso podrá asignarse más de un complemento específico a cada puesto de trabajo."
            },
            "respuesta_correcta": "d"
        },
        {
            "enunciado": "Indique la respuesta correcta entre las siguientes opciones relativas a lo dispuesto en el artículo 10 del Real Decreto 640/1987, de 8 de mayo, sobre pagos librados «a justificar»:",
            "opciones": {
                "a": "Los Cajeros pagadores quedarán obligados a justificar la aplicación de las cantidades recibidas dentro del mes siguiente a la inversión de las mismas y en todo caso en el plazo de seis meses desde la percepción de los correspondientes fondos.",
                "b": "Los Cajeros pagadores quedarán obligados a justificar la aplicación de las cantidades recibidas dentro de los dos meses siguientes a la inversión de las mismas y en todo caso en el plazo de tres meses desde la percepción de los correspondientes fondos.",
                "c": "Los Cajeros pagadores quedarán obligados a justificar la aplicación de las cantidades recibidas dentro de los dos meses siguientes a la inversión de las mismas y en todo caso en el plazo de seis meses desde la percepción de los correspondientes fondos.",
                "d": "Los Cajeros pagadores quedarán obligados a justificar la aplicación de las cantidades recibidas dentro del mes siguiente a la inversión de las mismas y en todo caso en el plazo de tres meses desde la percepción de los correspondientes fondos."
            },
            "respuesta_correcta": "d"
        }
    ]
};

export const advoGeneralTest: SeedExam = {
    fileName: rawAdvoGeneralTest.fileName,
    category: rawAdvoGeneralTest.category,
    questions: rawAdvoGeneralTest.questions.map(q => {
        return {
            questionText: q.enunciado,
            options: Object.values(q.opciones),
            correctAnswerIndex: optionMap[q.respuesta_correcta],
        };
    })
};

    
