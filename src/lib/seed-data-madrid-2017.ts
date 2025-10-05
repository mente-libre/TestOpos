
import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

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
    },
    {
      "numero": 5,
      "enunciado": "El estado de alarma es declarado por:",
      "opciones": {
        "A": "El Congreso de los Diputados",
        "B": "El Gobierno",
        "C": "El Rey",
        "D": "El Presidente del Gobierno"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 6,
      "enunciado": "La Corona de España es hereditaria en los sucesores de:",
      "opciones": {
        "A": "Juan Carlos I",
        "B": "Felipe VI",
        "C": "Alfonso XIII",
        "D": "Los Reyes Católicos"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 7,
      "enunciado": "La propuesta y nombramiento del Presidente del Gobierno corresponde:",
      "opciones": {
        "A": "Al Rey",
        "B": "Al Congreso de los Diputados",
        "C": "Al Presidente del Congreso",
        "D": "Al Consejo General del Poder Judicial"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 8,
      "enunciado": "El mandato de los Diputados y Senadores termina:",
      "opciones": {
        "A": "Cuatro años después de su elección",
        "B": "Al cumplirse cuatro años desde su elección o el día de la disolución de las Cámaras",
        "C": "Cinco años después de su elección",
        "D": "Cuando lo decida el Presidente del Gobierno"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 9,
      "enunciado": "Las sesiones conjuntas del Congreso y del Senado son presididas por:",
      "opciones": {
        "A": "El Presidente del Gobierno",
        "B": "El Presidente del Congreso",
        "C": "El Presidente del Senado",
        "D": "El Rey"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 10,
      "enunciado": "La disolución de las Cortes Generales corresponde:",
      "opciones": {
        "A": "Al Presidente del Gobierno",
        "B": "Al Rey, a propuesta del Presidente del Gobierno",
        "C": "Al Congreso de los Diputados",
        "D": "Al Presidente del Congreso"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 11,
      "enunciado": "El Tribunal de Cuentas es el órgano fiscalizador de:",
      "opciones": {
        "A": "Las cuentas del Estado",
        "B": "Las cuentas y de la gestión económica del Estado",
        "C": "Las cuentas de las Administraciones Públicas",
        "D": "Las cuentas del Sector Público"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 12,
      "enunciado": "El Consejo de Estado es:",
      "opciones": {
        "A": "El supremo órgano consultivo del Gobierno",
        "B": "Un órgano consultivo de las Cortes Generales",
        "C": "El órgano consultivo del Rey",
        "D": "Un órgano consultivo del Poder Judicial"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 13,
      "enunciado": "Los Decretos-Leyes son disposiciones legislativas provisionales dictadas por:",
      "opciones": {
        "A": "Las Cortes Generales en casos de extraordinaria y urgente necesidad",
        "B": "El Gobierno en casos de extraordinaria y urgente necesidad",
        "C": "El Presidente del Gobierno",
        "D": "El Rey"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 14,
      "enunciado": "Los Reglamentos son disposiciones de carácter general dictadas por:",
      "opciones": {
        "A": "Las Cortes Generales",
        "B": "La Administración Pública",
        "C": "El Gobierno",
        "D": "El Poder Judicial"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 15,
      "enunciado": "El principio de jerarquía normativa establece que:",
      "opciones": {
        "A": "La ley superior prevalece sobre la inferior",
        "B": "La ley posterior prevalece sobre la anterior",
        "C": "La ley especial prevalece sobre la general",
        "D": "Todas las anteriores son correctas"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 16,
      "enunciado": "La iniciativa para la reforma constitucional corresponde:",
      "opciones": {
        "A": "Al Gobierno",
        "B": "Al Congreso de los Diputados",
        "C": "Al Senado",
        "D": "A todas las anteriores"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 17,
      "enunciado": "Los Estatutos de Autonomía son:",
      "opciones": {
        "A": "Leyes orgánicas",
        "B": "Leyes ordinarias",
        "C": "Reglamentos",
        "D": "Disposiciones administrativas"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 18,
      "enunciado": "Las Comunidades Autónomas podrán asumir competencias en:",
      "opciones": {
        "A": "Las materias que no estén atribuidas exclusivamente al Estado",
        "B": "Todas las materias",
        "C": "Solo las materias expresamente previstas en la Constitución",
        "D": "Las materias de titularidad estatal"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 19,
      "enunciado": "El control de la actividad de los órganos de las Comunidades Autónomas corresponde:",
      "opciones": {
        "A": "Al Tribunal Constitucional",
        "B": "Al Gobierno de la Nación",
        "C": "Al Tribunal Supremo",
        "D": "Al Defensor del Pueblo"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 20,
      "enunciado": "La coordinación de las Policías Autonómicas corresponde:",
      "opciones": {
        "A": "Al Ministerio del Interior",
        "B": "Al Gobierno de la Nación",
        "C": "A las Comunidades Autónomas",
        "D": "Al Consejo de Política de Seguridad"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 21,
      "enunciado": "La Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas tiene por objeto:",
      "opciones": {
        "A": "Regular las relaciones entre las Administraciones Públicas y los ciudadanos",
        "B": "Establecer las bases del régimen jurídico de las Administraciones Públicas",
        "C": "Regular el procedimiento administrativo común",
        "D": "Todas las anteriores son correctas"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 22,
      "enunciado": "Los interesados en un procedimiento administrativo tienen derecho a:",
      "opciones": {
        "A": "Identificar a las autoridades y al personal al servicio de las Administraciones Públicas",
        "B": "Ser asistidos por un abogado en cualquier momento",
        "C": "Utilizar las lenguas oficiales en el territorio de la Administración correspondiente",
        "D": "Todas las anteriores son correctas"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 23,
      "enunciado": "El silencio administrativo se regula en:",
      "opciones": {
        "A": "La Ley 39/2015",
        "B": "La Ley 40/2015",
        "C": "La Ley 30/1992",
        "D": "La Constitución Española"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 24,
      "enunciado": "La notificación por medios electrónicos será obligatoria:",
      "opciones": {
        "A": "Para todas las personas jurídicas",
        "B": "Para las personas físicas que lo soliciten",
        "C": "Para las personas que hayan optado por relacionarse electrónicamente con la Administración",
        "D": "Para todos los interesados"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 25,
      "enunciado": "El plazo máximo para resolver y notificar en procedimientos administrativos es de:",
      "opciones": {
        "A": "3 meses",
        "B": "6 meses",
        "C": "9 meses",
        "D": "12 meses"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 26,
      "enunciado": "La retroactividad de las disposiciones sancionadoras no favorables:",
      "opciones": {
        "A": "Está siempre permitida",
        "B": "Está prohibida",
        "C": "Está permitida si beneficia al interesado",
        "D": "Está permitida en casos excepcionales"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 27,
      "enunciado": "La responsabilidad patrimonial de las Administraciones Públicas:",
      "opciones": {
        "A": "Siempre requiere daño efectivo",
        "B": "Requiere daño efectivo, evaluable económicamente e individualizado",
        "C": "Solo requiere daño moral",
        "D": "No requiere daño efectivo"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 28,
      "enunciado": "El recurso de alzada se interpone contra:",
      "opciones": {
        "A": "Resoluciones de órganos administrativos que no agotan la vía administrativa",
        "B": "Resoluciones de órganos administrativos que agotan la vía administrativa",
        "C": "Actos de trámite",
        "D": "Cualquier acto administrativo"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 29,
      "enunciado": "El plazo para interponer recurso de alzada es de:",
      "opciones": {
        "A": "15 días",
        "B": "1 mes",
        "C": "2 meses",
        "D": "3 meses"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 30,
      "enunciado": "El recurso potestativo de reposición se interpone contra:",
      "opciones": {
        "A": "Actos que agotan la vía administrativa",
        "B": "Actos que no agotan la vía administrativa",
        "C": "Actos de trámite",
        "D": "Cualquier acto administrativo"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 31,
      "enunciado": "La Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público regula:",
      "opciones": {
        "A": "El procedimiento administrativo común",
        "B": "El régimen jurídico de las Administraciones Públicas",
        "C": "La organización y funcionamiento de la Administración General del Estado",
        "D": "Las bases del régimen jurídico de las Administraciones Públicas"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 32,
      "enunciado": "Los órganos administrativos se crean, modifican y suprimen por:",
      "opciones": {
        "A": "Ley",
        "B": "Reglamento",
        "C": "Disposición administrativa",
        "D": "Cualquiera de las anteriores"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 33,
      "enunciado": "La competencia de los órganos administrativos:",
      "opciones": {
        "A": "Se presume",
        "B": "Debe ser expresa",
        "C": "Puede ser implícita",
        "D": "No necesita ser expresa"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 34,
      "enunciado": "La avocación es:",
      "opciones": {
        "A": "La atribución de competencias a un órgano inferior",
        "B": "El ejercicio de competencias por un órgano superior",
        "C": "La delegación de competencias",
        "D": "La encomienda de gestión"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 35,
      "enunciado": "La delegación de competencias:",
      "opciones": {
        "A": "Debe ser expresa",
        "B": "Puede ser tácita",
        "C": "No necesita ser publicada",
        "D": "Puede ser revocada libremente por el órgano delegado"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 36,
      "enunciado": "Las encomiendas de gestión:",
      "opciones": {
        "A": "Transfieren la titularidad de la competencia",
        "B": "No transfieren la titularidad de la competencia",
        "C": "Solo pueden realizarse entre órganos de la misma Administración",
        "D": "Requieren autorización legal expresa"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 37,
      "enunciado": "Los convenios de colaboración entre Administraciones Públicas:",
      "opciones": {
        "A": "Tienen naturaleza contractual",
        "B": "Tienen naturaleza reglamentaria",
        "C": "Tienen naturaleza legal",
        "D": "No tienen naturaleza jurídica definida"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 38,
      "enunciado": "El Registro Electrónico General es:",
      "opciones": {
        "A": "Un registro administrativo único",
        "B": "Un sistema de interconexión de registros",
        "C": "Un registro de carácter voluntario",
        "D": "Un registro solo para personas jurídicas"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 39,
      "enunciado": "La sede electrónica es:",
      "opciones": {
        "A": "Una dirección web de la Administración",
        "B": "Un dispositivo de acceso electrónico a la Administración",
        "C": "Un conjunto de medios electrónicos a disposición de la Administración",
        "D": "Una oficina virtual de la Administración"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 40,
      "enunciado": "El portal de transparencia debe contener información sobre:",
      "opciones": {
        "A": "Información institucional, organizativa y de planificación",
        "B": "Información de relevancia jurídica",
        "C": "Información económica, presupuestaria y estadística",
        "D": "Todas las anteriores son correctas"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 41,
      "enunciado": "El Estatuto de Autonomía de la Comunidad de Madrid fue aprobado por:",
      "opciones": {
        "A": "Ley Orgánica 3/1983, de 25 de febrero",
        "B": "Ley Orgánica 5/1983, de 1 de marzo",
        "C": "Ley Orgánica 2/1983, de 10 de febrero",
        "D": "Ley Orgánica 4/1983, de 15 de marzo"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 42,
      "enunciado": "La bandera de la Comunidad de Madrid es:",
      "opciones": {
        "A": "Roja con siete estrellas blancas",
        "B": "Roja con cinco estrellas blancas",
        "C": "Blanca con siete estrellas rojas",
        "D": "Blanca con cinco estrellas rojas"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 43,
      "enunciado": "El himno de la Comunidad de Madrid fue aprobado por:",
      "opciones": {
        "A": "Ley 2/1983, de 23 de diciembre",
        "B": "Ley 1/1984, de 24 de enero",
        "C": "Ley 3/1983, de 25 de febrero",
        "D": "Ley 4/1983, de 26 de marzo"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 44,
      "enunciado": "La fiesta de la Comunidad de Madrid se celebra el:",
      "opciones": {
        "A": "2 de mayo",
        "B": "15 de mayo",
        "C": "25 de febrero",
        "D": "1 de marzo"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 45,
      "enunciado": "La Asamblea de Madrid está compuesta por:",
      "opciones": {
        "A": "120 Diputados",
        "B": "125 Diputados",
        "C": "130 Diputados",
        "D": "135 Diputados"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 46,
      "enunciado": "El Presidente de la Comunidad de Madrid es elegido por:",
      "opciones": {
        "A": "La Asamblea de Madrid",
        "B": "El Rey",
        "C": "El Gobierno de la Nación",
        "D": "Sufragio universal directo"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 47,
      "enunciado": "El Consejo de Gobierno de la Comunidad de Madrid está compuesto por:",
      "opciones": {
        "A": "El Presidente y los Consejeros",
        "B": "El Presidente, los Vicepresidentes y los Consejeros",
        "C": "El Presidente y los Vicepresidentes",
        "D": "Los Consejeros"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 48,
      "enunciado": "La Ley 1/1986, de 10 de abril, regula:",
      "opciones": {
        "A": "El régimen jurídico de la Comunidad de Madrid",
        "B": "La función pública de la Comunidad de Madrid",
        "C": "La organización de la Administración de la Comunidad de Madrid",
        "D": "El procedimiento administrativo de la Comunidad de Madrid"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 49,
      "enunciado": "El personal al servicio de la Comunidad de Madrid se clasifica en:",
      "opciones": {
        "A": "Funcionarios de carrera, funcionarios interinos y personal laboral",
        "B": "Funcionarios y personal laboral",
        "C": "Funcionarios de carrera y personal eventual",
        "D": "Funcionarios, personal laboral y personal eventual"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 50,
      "enunciado": "El acceso a la función pública se realiza mediante:",
      "opciones": {
        "A": "Concurso",
        "B": "Oposición",
        "C": "Concurso-oposición",
        "D": "Cualquiera de los sistemas anteriores"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 51,
      "enunciado": "El período de prácticas en la función pública tiene una duración de:",
      "opciones": {
        "A": "6 meses",
        "B": "1 año",
        "C": "2 años",
        "D": "No existe período de prácticas"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 52,
      "enunciado": "La provisión de puestos de trabajo puede realizarse mediante:",
      "opciones": {
        "A": "Concurso",
        "B": "Libre designación",
        "C": "Promoción interna",
        "D": "Todos los sistemas anteriores"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 53,
      "enunciado": "La jornada de trabajo de los funcionarios es de:",
      "opciones": {
        "A": "35 horas semanales",
        "B": "37,5 horas semanales",
        "C": "40 horas semanales",
        "D": "Depende de la Administración"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 54,
      "enunciado": "Las retribuciones de los funcionarios se componen de:",
      "opciones": {
        "A": "Sueldo, trienios y pagas extraordinarias",
        "B": "Sueldo, complementos y pagas extraordinarias",
        "C": "Sueldo, antigüedad y productividad",
        "D": "Sueldo, complemento de destino y complemento específico"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 55,
      "enunciado": "El permiso por matrimonio tiene una duración de:",
      "opciones": {
        "A": "7 días naturales",
        "B": "15 días naturales",
        "C": "15 días hábiles",
        "D": "30 días naturales"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 56,
      "enunciado": "La excedencia por cuidado de familiares puede solicitarse por:",
      "opciones": {
        "A": "1 año",
        "B": "2 años",
        "C": "3 años",
        "D": "Hasta que el familiar cumpla 6 años"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 57,
      "enunciado": "El régimen disciplinario de los funcionarios se regula en:",
      "opciones": {
        "A": "La Ley 7/2007",
        "B": "El Estatuto Básico del Empleado Público",
        "C": "La Ley de Función Pública de la Comunidad de Madrid",
        "D": "Todas las anteriores"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 58,
      "enunciado": "Las faltas disciplinarias pueden ser:",
      "opciones": {
        "A": "Leves, graves y muy graves",
        "B": "Menores, graves y muy graves",
        "C": "Leves, graves y extremadamente graves",
        "D": "Ligeras, graves y muy graves"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 59,
      "enunciado": "La sanción de separación del servicio implica:",
      "opciones": {
        "A": "La pérdida de la condición de funcionario",
        "B": "La suspensión de funciones por un tiempo determinado",
        "C": "El cese en el puesto de trabajo",
        "D": "La inhabilitación para el ejercicio de funciones públicas"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 60,
      "enunciado": "La Ley 31/1995, de 8 de noviembre, regula:",
      "opciones": {
        "A": "La prevención de riesgos laborales",
        "B": "La función pública",
        "C": "El procedimiento administrativo",
        "D": "La Seguridad Social"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 61,
      "enunciado": "Los principios de la acción preventiva son:",
      "opciones": {
        "A": "Evitar riesgos, evaluar riesgos, combatir riesgos",
        "B": "Prevenir riesgos, evaluar riesgos, combatir riesgos",
        "C": "Evitar riesgos, evaluar riesgos, planificar la prevención",
        "D": "Prevenir riesgos, evaluar riesgos, planificar la prevención"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 62,
      "enunciado": "El empresario debe garantizar:",
      "opciones": {
        "A": "La protección de los trabajadores",
        "B": "La seguridad y salud de los trabajadores",
        "C": "La prevención de riesgos laborales",
        "D": "Todas las anteriores"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 63,
      "enunciado": "Los delegados de prevención son representantes de:",
      "opciones": {
        "A": "Los trabajadores",
        "B": "La empresa",
        "C": "La Administración",
        "D": "Los servicios de prevención"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 64,
      "enunciado": "El comité de seguridad y salud existe en empresas con:",
      "opciones": {
        "A": "Más de 50 trabajadores",
        "B": "Más de 100 trabajadores",
        "C": "Más de 250 trabajadores",
        "D": "Más de 500 trabajadores"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 65,
      "enunciado": "Los servicios de prevención pueden ser:",
      "opciones": {
        "A": "Propios, ajenos o mancomunados",
        "B": "Propios o ajenos",
        "C": "Internos o externos",
        "D": "Propios, externos o mixtos"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 66,
      "enunciado": "La evaluación de riesgos debe realizarse:",
      "opciones": {
        "A": "Inicialmente y periódicamente",
        "B": "Solo inicialmente",
        "C": "Solo cuando cambien las condiciones",
        "D": "Cuando lo decida la empresa"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 67,
      "enunciado": "La planificación de la actividad preventiva debe incluir:",
      "opciones": {
        "A": "Medidas preventivas, recursos y plazos",
        "B": "Solo medidas preventivas",
        "C": "Solo recursos",
        "D": "Solo plazos"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 68,
      "enunciado": "La vigilancia de la salud de los trabajadores es:",
      "opciones": {
        "A": "Obligatoria",
        "B": "Voluntaria",
        "C": "Obligatoria solo para algunos riesgos",
        "D": "Voluntaria excepto para riesgos específicos"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 69,
      "enunciado": "La información sobre riesgos debe proporcionarse a:",
      "opciones": {
        "A": "Los trabajadores",
        "B": "Los delegados de prevención",
        "C": "El comité de seguridad",
        "D": "Todos los anteriores"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 70,
      "enunciado": "La formación en prevención de riesgos laborales debe ser:",
      "opciones": {
        "A": "Suficiente y adecuada",
        "B": "Solo suficiente",
        "C": "Solo adecuada",
        "D": "Opcional"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 71,
      "enunciado": "La Ley Orgánica 3/2018, de 5 de diciembre, regula:",
      "opciones": {
        "A": "La protección de datos personales",
        "B": "El procedimiento administrativo",
        "C": "La función pública",
        "D": "La prevención de riesgos laborales"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 72,
      "enunciado": "El principio de licitud del tratamiento de datos exige:",
      "opciones": {
        "A": "Que el tratamiento tenga una base legítima",
        "B": "Que el interesado preste consentimiento",
        "C": "Que sea necesario para el cumplimiento de una obligación legal",
        "D": "Todas las anteriores"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 73,
      "enunciado": "Los derechos de los interesados en protección de datos son:",
      "opciones": {
        "A": "Acceso, rectificación, supresión y oposición",
        "B": "Acceso, rectificación, cancelación y oposición",
        "C": "Acceso, rectificación, limitación y portabilidad",
        "D": "Todos los anteriores"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 74,
      "enunciado": "El delegado de protección de datos es:",
      "opciones": {
        "A": "Obligatorio en todos los casos",
        "B": "Obligatorio solo para las Administraciones Públicas",
        "C": "Obligatorio en determinados casos",
        "D": "Voluntario"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 75,
      "enunciado": "La evaluación de impacto en protección de datos es necesaria cuando:",
      "opciones": {
        "A": "El tratamiento pueda entrañar alto riesgo para los derechos",
        "B": "Siempre que se traten datos personales",
        "C": "Solo cuando se traten datos especialmente protegidos",
        "D": "Cuando lo decida el responsable del tratamiento"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 76,
      "enunciado": "La notificación de violaciones de seguridad debe realizarse:",
      "opciones": {
        "A": "En 72 horas",
        "B": "Inmediatamente",
        "C": "En 24 horas",
        "D": "En 48 horas"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 77,
      "enunciado": "Las sanciones por infracciones en protección de datos pueden llegar hasta:",
      "opciones": {
        "A": "20 millones de euros",
        "B": "10 millones de euros",
        "C": "30 millones de euros",
        "D": "40 millones de euros"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 78,
      "enunciado": "La Ley 9/2017, de 8 de noviembre, regula:",
      "opciones": {
        "A": "Los contratos del sector público",
        "B": "El procedimiento administrativo",
        "C": "La función pública",
        "D": "La protección de datos"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 79,
      "enunciado": "Los principios de la contratación pública son:",
      "opciones": {
        "A": "Publicidad, transparencia, igualdad y no discriminación",
        "B": "Publicidad, transparencia, eficacia y eficiencia",
        "C": "Publicidad, transparencia, concurrencia y objetividad",
        "D": "Todos los anteriores"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 80,
      "enunciado": "Los tipos de contratos del sector público son:",
      "opciones": {
        "A": "Obras, suministros, servicios y concesiones",
        "B": "Obras, suministros y servicios",
        "C": "Obras, servicios y concesiones",
        "D": "Suministros, servicios y concesiones"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 81,
      "enunciado": "El procedimiento abierto es:",
      "opciones": {
        "A": "El ordinario",
        "B": "El preferente",
        "C": "El excepcional",
        "D": "El simplificado"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 82,
      "enunciado": "El umbral comunitario para contratos de obras es de:",
      "opciones": {
        "A": "5.350.000 euros",
        "B": "5.000.000 euros",
        "C": "5.186.000 euros",
        "D": "5.250.000 euros"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 83,
      "enunciado": "La Ley 19/2013, de 9 de diciembre, regula:",
      "opciones": {
        "A": "La transparencia, acceso a la información pública y buen gobierno",
        "B": "El procedimiento administrativo",
        "C": "La función pública",
        "D": "La protección de datos"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 84,
      "enunciado": "El portal de transparencia debe incluir información sobre:",
      "opciones": {
        "A": "Información institucional y organizativa",
        "B": "Información de relevancia jurídica",
        "C": "Información económica, presupuestaria y estadística",
        "D": "Todas las anteriores"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 85,
      "enunciado": "El derecho de acceso a la información pública corresponde a:",
      "opciones": {
        "A": "Todos",
        "B": "Solo los interesados",
        "C": "Solo los ciudadanos españoles",
        "D": "Solo las personas jurídicas"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 86,
      "enunciado": "El plazo para resolver las solicitudes de acceso a la información es de:",
      "opciones": {
        "A": "1 mes",
        "B": "2 meses",
        "C": "3 meses",
        "D": "15 días"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 87,
      "enunciado": "El Consejo de Transparencia y Buen Gobierno es:",
      "opciones": {
        "A": "Un órgano independiente",
        "B": "Un órgano dependiente del Gobierno",
        "C": "Un órgano dependiente del Parlamento",
        "D": "Un órgano dependiente del Ministerio de Hacienda"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 88,
      "enunciado": "Las resoluciones del Consejo de Transparencia:",
      "opciones": {
        "A": "Son vinculantes",
        "B": "No son vinculantes",
        "C": "Son vinculantes solo para las Administraciones Públicas",
        "D": "Son vinculantes solo para los particulares"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 89,
      "enunciado": "La Ley 27/2006, de 18 de julio, regula:",
      "opciones": {
        "A": "Los derechos de acceso a la información, de participación pública y de acceso a la justicia en materia de medio ambiente",
        "B": "La protección de datos",
        "C": "El procedimiento administrativo",
        "D": "La función pública"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 90,
      "enunciado": "El derecho de acceso a la información ambiental corresponde a:",
      "opciones": {
        "A": "Todos",
        "B": "Solo los interesados",
        "C": "Solo las personas físicas",
        "D": "Solo las organizaciones ecologistas"
      },
      "respuesta_correcta": "A"
    }
  ]
};

export const madrid2017Test: SeedExam = {
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
