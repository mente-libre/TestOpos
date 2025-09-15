
import type { Question } from './firebase/firestore';

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
                "c": "Se realizará atendiendo exclusivamente a criterios cualitativos.",
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
        },
        {
            "enunciado": "¿Cuál de las siguientes afirmaciones es verdadera?",
            "opciones": {
                "a": "El escáner es un periférico de entrada del ordenador.",
                "b": "Los ordenadores con sistema operativo Linux no admiten impresoras.",
                "c": "La impresora es un periférico de entrada del ordenador.",
                "d": "La función principal de una tarjeta de red es la impresión."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Cuál de las siguientes opciones corresponde a un sistema operativo?",
            "opciones": {
                "a": "AMD.",
                "b": "PostgreSQL.",
                "c": "Mac OS.",
                "d": "RJ45."
            },
            "respuesta_correcta": "c"
        },
        {
            "enunciado": "¿Qué tipo de licencia de software permite a los usuarios usar, estudiar, cambiar y mejorar el software, y redistribuirlo con o sin cambios?",
            "opciones": {
                "a": "Software propietario.",
                "b": "Software de código abierto.",
                "c": "Shareware.",
                "d": "Freeware."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué significa la sigla PDF?",
            "opciones": {
                "a": "Portable Document Format.",
                "b": "Personal Data File.",
                "c": "Printed Document Format.",
                "d": "Public Domain File."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es un ataque de phishing?",
            "opciones": {
                "a": "Un ataque que busca explotar vulnerabilidades en el software.",
                "b": "Un intento de obtener información confidencial suplantando la identidad de una entidad legítima.",
                "c": "Un ataque que inunda una red con tráfico para hacerla inaccesible.",
                "d": "Un programa malicioso que se replica a sí mismo."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué protocolo se utiliza comúnmente para la transferencia segura de archivos a través de Internet?",
            "opciones": {
                "a": "HTTP.",
                "b": "FTP.",
                "c": "SFTP.",
                "d": "SMTP."
            },
            "respuesta_correcta": "c"
        },
        {
            "enunciado": "¿Qué significa la sigla URL?",
            "opciones": {
                "a": "Universal Resource Locator.",
                "b": "Uniform Resource Locator.",
                "c": "Unified Resource Link.",
                "d": "Universal Reference Link."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué es una base de datos relacional?",
            "opciones": {
                "a": "Una base de datos que almacena datos en tablas relacionadas entre sí.",
                "b": "Una base de datos que solo almacena datos no estructurados.",
                "c": "Una base de datos que se ejecuta en un solo servidor.",
                "d": "Una base de datos que no requiere un sistema de gestión."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué lenguaje de programación se utiliza principalmente para desarrollar páginas web interactivas?",
            "opciones": {
                "a": "Java.",
                "b": "Python.",
                "c": "JavaScript.",
                "d": "C++."
            },
            "respuesta_correcta": "c"
        },
        {
            "enunciado": "¿Qué es la nube (cloud computing)?",
            "opciones": {
                "a": "Un dispositivo de almacenamiento físico externo.",
                "b": "El suministro de servicios informáticos a través de Internet.",
                "c": "Una red local de ordenadores.",
                "d": "Un tipo de software antivirus."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué significa la sigla HTML?",
            "opciones": {
                "a": "HyperText Markup Language.",
                "b": "High-Level Text Management Language.",
                "c": "HyperTransfer Markup Language.",
                "d": "Home Tool Markup Language."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es un firewall?",
            "opciones": {
                "a": "Un programa que detecta y elimina virus.",
                "b": "Un sistema de seguridad que controla el tráfico de red.",
                "c": "Un dispositivo para aumentar la velocidad de Internet.",
                "d": "Un tipo de servidor web."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué es un algoritmo?",
            "opciones": {
                "a": "Un tipo de hardware.",
                "b": "Un conjunto de instrucciones para resolver un problema.",
                "c": "Un lenguaje de programación.",
                "d": "Un dispositivo de almacenamiento."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué significa la sigla VPN?",
            "opciones": {
                "a": "Virtual Private Network.",
                "b": "Very Protected Network.",
                "c": "Virtual Public Network.",
                "d": "Verified Private Network."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la inteligencia artificial?",
            "opciones": {
                "a": "La capacidad de un robot para moverse autónomamente.",
                "b": "La simulación de procesos de inteligencia humana por máquinas.",
                "c": "El uso de ordenadores para realizar cálculos complejos.",
                "d": "La conexión de dispositivos a Internet."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué es un blog?",
            "opciones": {
                "a": "Un sitio web que contiene entradas cronológicas regulares.",
                "b": "Un tipo de red social.",
                "c": "Un programa de mensajería instantánea.",
                "d": "Un dispositivo de almacenamiento en línea."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la memoria RAM?",
            "opciones": {
                "a": "Memoria de almacenamiento permanente.",
                "b": "Memoria de solo lectura.",
                "c": "Memoria de acceso aleatorio temporal.",
                "d": "Memoria externa."
            },
            "respuesta_correcta": "c"
        },
        {
            "enunciado": "¿Qué es un sistema operativo?",
            "opciones": {
                "a": "Un programa que gestiona el hardware del ordenador.",
                "b": "Un dispositivo de entrada.",
                "c": "Un tipo de software de aplicación.",
                "d": "Un lenguaje de programación."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es un podcast?",
            "opciones": {
                "a": "Un programa de radio o televisión disponible en Internet.",
                "b": "Un tipo de blog.",
                "c": "Un dispositivo de audio.",
                "d": "Una red social."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la realidad virtual?",
            "opciones": {
                "a": "Un entorno simulado por ordenador.",
                "b": "Una red social.",
                "c": "Un tipo de inteligencia artificial.",
                "d": "Un dispositivo de almacenamiento."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es un dato personal según el RGPD?",
            "opciones": {
                "a": "Cualquier información sobre una persona física identificada o identificable.",
                "b": "Solo información sensible como la religión o salud.",
                "c": "Información anónima sobre personas.",
                "d": "Información sobre personas jurídicas."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué principio de protección de datos implica que los datos deben ser adecuados, pertinentes y limitados a lo necesario?",
            "opciones": {
                "a": "Principio de licitud.",
                "b": "Principio de minimización de datos.",
                "c": "Principio de exactitud.",
                "d": "Principio de integridad y confidencialidad."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Cuál es la edad mínima para dar consentimiento para el tratamiento de datos personales según el RGPD?",
            "opciones": {
                "a": "14 años.",
                "b": "16 años.",
                "c": "18 años.",
                "d": "13 años."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué derecho permite a una persona solicitar la supresión de sus datos personales?",
            "opciones": {
                "a": "Derecho de acceso.",
                "b": "Derecho de oposición.",
                "c": "Derecho de supresión ('derecho al olvido').",
                "d": "Derecho de portabilidad."
            },
            "respuesta_correcta": "c"
        },
        {
            "enunciado": "¿En qué plazo debe responderse a una solicitud de ejercicio de derechos según el RGPD?",
            "opciones": {
                "a": "3 meses.",
                "b": "1 mes, prorrogable a 2.",
                "c": "15 días.",
                "d": "6 semanas."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué es una Evaluación de Impacto en la Protección de Datos (EIPD)?",
            "opciones": {
                "a": "Una evaluación obligatoria para todos los tratamientos de datos.",
                "b": "Un proceso para evaluar riesgos en tratamientos de alto riesgo.",
                "c": "Una auditoría anual de seguridad.",
                "d": "Un informe de cumplimiento normativo."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué autoridad es responsable de la protección de datos en España?",
            "opciones": {
                "a": "Agencia Española de Protección de Datos (AEPD).",
                "b": "Instituto Nacional de Ciberseguridad (INCIBE).",
                "c": "Comisión Nacional de los Mercados y la Competencia (CNMC).",
                "d": "Agencia Tributaria."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué debe hacerse en caso de una violación de seguridad de los datos personales?",
            "opciones": {
                "a": "Solo documentarlo internamente.",
                "b": "Notificar a la autoridad en 72 horas si hay riesgo.",
                "c": "Notificar siempre a los afectados.",
                "d": "No es necesario hacer nada si se soluciona rápido."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué son los datos especialmente protegidos?",
            "opciones": {
                "a": "Datos que revelen origen racial, opiniones políticas, etc.",
                "b": "Datos de contacto.",
                "c": "Datos anónimos.",
                "d": "Datos de empresas."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es el Delegado de Protección de Datos (DPO)?",
            "opciones": {
                "a": "Un empleado que supervisa el cumplimiento del RGPD.",
                "b": "Un funcionario de la AEPD.",
                "c": "Un consultor externo obligatorio.",
                "d": "El responsable de todos los tratamientos de datos."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la igualdad de género?",
            "opciones": {
                "a": "Que hombres y mujeres sean tratados igual en todas las situaciones.",
                "b": "La igualdad de derechos, responsabilidades y oportunidades.",
                "c": "Que las mujeres tengan más oportunidades que los hombres.",
                "d": "Solo la igualdad salarial."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué es la violencia de género?",
            "opciones": {
                "a": "Cualquier violencia ejercida sobre mujeres.",
                "b": "Violencia que se ejerce contra las mujeres por el hecho de serlo.",
                "c": "Violencia doméstica en general.",
                "d": "Solo violencia física."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué es el acoso sexual?",
            "opciones": {
                "a": "Cualquier comportamiento de naturaleza sexual.",
                "b": "Comportamiento no deseado de naturaleza sexual que afecta a la dignidad.",
                "c": "Solo contactos físicos no deseados.",
                "d": "Comentarios de tipo sexual entre compañeros de trabajo."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué es la brecha salarial?",
            "opciones": {
                "a": "La diferencia de salario entre jóvenes y adultos.",
                "b": "La diferencia de salario entre hombres y mujeres por trabajo de igual valor.",
                "c": "La diferencia de salario entre directivos y empleados.",
                "d": "La diferencia de salario entre sectores económicos."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué son los planes de igualdad?",
            "opciones": {
                "a": "Planes obligatorios solo para grandes empresas.",
                "b": "Conjunto de medidas para alcanzar la igualdad en una organización.",
                "c": "Planes del gobierno para la igualdad nacional.",
                "d": "Medidas para contratar más mujeres."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué es el lenguaje inclusivo?",
            "opciones": {
                "a": "Usar solo el femenino en todos los casos.",
                "b": "Usar lenguaje que no excluya a ningún género.",
                "c": "Evitar el uso de adjetivos.",
                "d": "Usar lenguaje técnico y formal."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué es la conciliación de la vida laboral y familiar?",
            "opciones": {
                "a": "Reducir la jornada laboral para todos.",
                "b": "Permitir que las personas armonizen trabajo y familia.",
                "c": "Solo medidas para mujeres con hijos.",
                "d": "Trabajar desde casa siempre."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué es el techo de cristal?",
            "opciones": {
                "a": "Barreras invisibles que dificultan el ascenso laboral de las mujeres.",
                "b": "Límite máximo de contratación de mujeres.",
                "c": "Discriminación directa en la contratación.",
                "d": "Falta de formación de las mujeres para puestos directivos."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la interseccionalidad?",
            "opciones": {
                "a": "Estudio de las intersecciones viales.",
                "b": "Cómo diferentes ejes de discriminación se solapan.",
                "c": "Colaboración entre departamentos.",
                "d": "Fusión de empresas del mismo sector."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué establece la Ley de Igualdad?",
            "opciones": {
                "a": "Solo medidas contra la violencia de género.",
                "b": "Igualdad entre hombres y mujeres en todos los ámbitos.",
                "c": "Cuotas obligatorias en todos los puestos.",
                "d": "Sanciones por discriminación salarial."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué es la accesibilidad universal?",
            "opciones": {
                "a": "Acceso a internet para todos.",
                "b": "Condición que deben cumplir entornos para ser utilizados por todos.",
                "c": "Solo rampas para sillas de ruedas.",
                "d": "Ayudas técnicas para personas con discapacidad."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué es la discriminación por discapacidad?",
            "opciones": {
                "a": "Tratar diferente a alguien por su discapacidad.",
                "b": "No contratar a personas con discapacidad visible.",
                "c": "Solo falta de accesibilidad física.",
                "d": "No tener baños adaptados."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es el diseño para todos?",
            "opciones": {
                "a": "Diseño que puede ser usado por el mayor número de personas posible.",
                "b": "Diseño de moda universal.",
                "c": "Diseño de productos solo para personas con discapacidad.",
                "d": "Diseño de interiores accesible."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la Convención de la ONU sobre Discapacidad?",
            "opciones": {
                "a": "Un tratado internacional sobre derechos de personas con discapacidad.",
                "b": "Una ley española sobre accesibilidad.",
                "c": "Una directiva europea sobre empleo.",
                "d": "Un acuerdo sobre pensiones por discapacidad."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué son los ajustes razonables?",
            "opciones": {
                "a": "Modificaciones necesarias para garantizar igualdad de oportunidades.",
                "b": "Reducción de salario por menor productividad.",
                "c": "Adaptaciones solo en puestos directivos.",
                "d": "Cambios en la jornada laboral para todos."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la vida independiente?",
            "opciones": {
                "a": "Vivir solo sin ayuda de nadie.",
                "b": "Derecho a elegir cómo vivir con los apoyos necesarios.",
                "c": "Tener ingresos propios sin depender de pensiones.",
                "d": "No necesitar asistencia técnica."
            },
            "respuesta_correcta": "b"
        },
        {
            "enunciado": "¿Qué es la accesibilidad cognitiva?",
            "opciones": {
                "a": "Entender información y manejarse en entornos fácilmente.",
                "b": "Acceso a educación universitaria.",
                "c": "Capacidad para usar ordenadores.",
                "d": "Comprensión de textos legales."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la discriminación múltiple?",
            "opciones": {
                "a": "Discriminación por varios motivos simultáneamente.",
                "b": "Varios actos discriminatorios en el tiempo.",
                "c": "Discriminación por parte de varias personas.",
                "d": "Discriminación en varios ámbitos diferentes."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la autonomía personal?",
            "opciones": {
                "a": "Capacidad de gobernarse a uno mismo.",
                "b": "Vivir sin ayuda de otras personas.",
                "c": "Tener independencia económica.",
                "d": "Poder tomar decisiones sin consultar."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué son los apoyos para la discapacidad?",
            "opciones": {
                "a": "Recursos que promueven la autonomía y participación.",
                "b": "Solo ayudas económicas.",
                "c": "Tratamientos médicos rehabilitadores.",
                "d": "Voluntarios que acompañan a personas."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es el desarrollo sostenible?",
            "opciones": {
                "a": "Desarrollo que satisface las necesidades presentes sin comprometer futuras.",
                "b": "Crecimiento económico constante.",
                "c": "Desarrollo solo de energías renovables.",
                "d": "Protección del medio ambiente sin desarrollo económico."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué son los Objetivos de Desarrollo Sostenible (ODS)?",
            "opciones": {
                "a": "17 objetivos globales para 2030.",
                "b": "Objetivos ambientales de la ONU.",
                "c": "Metas económicas de países desarrollados.",
                "d": "Compromisos contra el cambio climático."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la huella de carbono?",
            "opciones": {
                "a": "Total de gases de efecto invernadero emitidos.",
                "b": "Contaminación por residuos sólidos.",
                "c": "Impacto ambiental de una organización.",
                "d": "Emisiones de CO2 de vehículos."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la economía circular?",
            "opciones": {
                "a": "Sistema de reutilización y reciclaje de recursos.",
                "b": "Economía de países en vías de desarrollo.",
                "c": "Intercambio comercial entre países vecinos.",
                "d": "Sistema económico basado en trueque."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la Agenda 2030?",
            "opciones": {
                "a": "Plan de la ONU para el desarrollo sostenible.",
                "b": "Agenda europea de medio ambiente.",
                "c": "Plan nacional español de infraestructuras.",
                "d": "Estrategia contra el cambio climático."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la biodiversidad?",
            "opciones": {
                "a": "Variedad de seres vivos en un ecosistema.",
                "b": "Diversidad de paisajes naturales.",
                "c": "Plantas medicinales de una región.",
                "d": "Animales en peligro de extinción."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es el cambio climático?",
            "opciones": {
                "a": "Alteración del clima por actividades humanas.",
                "b": "Cambios naturales del clima terrestre.",
                "c": "Aumento de la temperatura global solo.",
                "d": "Fenómenos meteorológicos extremos."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué son las energías renovables?",
            "opciones": {
                "a": "Energías de fuentes naturales inagotables.",
                "b": "Energías no contaminantes.",
                "c": "Energías más baratas.",
                "d": "Energías de biomasa solo."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la eficiencia energética?",
            "opciones": {
                "a": "Usar menos energía para mismo servicio.",
                "b": "Usar solo energías renovables.",
                "c": "Reducir el consumo energético total.",
                "d": "Producir más energía con menos recursos."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la movilidad sostenible?",
            "opciones": {
                "a": "Sistemas de transporte eficientes y ecológicos.",
                "b": "Transporte público gratuito.",
                "c": "Uso de vehículos eléctricos solamente.",
                "d": "Reducción de viajes innecesarios."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la Responsabilidad Social Corporativa?",
            "opciones": {
                "a": "Contribución voluntaria al desarrollo sostenible.",
                "b": "Obligaciones legales de las empresas.",
                "c": "Acciones filantrópicas de empresas.",
                "d": "Marketing de causas sociales."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es el comercio justo?",
            "opciones": {
                "a": "Comercio con criterios éticos y sostenibles.",
                "b": "Comercio sin intermediarios.",
                "c": "Trueque de productos artesanales.",
                "d": "Comercio local solamente."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la soberanía alimentaria?",
            "opciones": {
                "a": "Derecho de pueblos a decidir su política alimentaria.",
                "b": "Autosuficiencia alimentaria de un país.",
                "c": "Control de precios de alimentos básicos.",
                "d": "Producción agrícola tradicional."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué son los derechos humanos?",
            "opciones": {
                "a": "Derechos inherentes a todos los seres humanos.",
                "b": "Derechos constitucionales de cada país.",
                "c": "Derechos civiles y políticos solamente.",
                "d": "Derechos reconocidos por la ONU."
            },
            "respuesta_correcta": "a"
        },
        {
            "enunciado": "¿Qué es la diversidad cultural?",
            "opciones": {
                "a": "Variedad de culturas coexistiendo.",
                "b": "Protección de culturas minoritarias.",
                "c": "Intercambio cultural entre países.",
                "d": "Patrimonio cultural de la humanidad."
            },
            "respuesta_correcta": "a"
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

    