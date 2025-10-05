
import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const optionMap: { [key: string]: number } = { A: 0, B: 1, C: 2, D: 3 };

const rawMadrid2023Test = {
  "titulo": "Cuestionario Primer Ejercicio - Cuerpo de Auxiliares, Administración General, Comunidad de Madrid (2023)",
  "convocatoria": "Orden 1942/2023",
  "preguntas": [
    {
      "numero": 1,
      "enunciado": "“Sorprendente por insólito, escandaloso o vituperable” es:",
      "opciones": {
        "A": "indómito",
        "B": "veraz",
        "C": "pulcro",
        "D": "inaudito"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 2,
      "enunciado": "Observe el siguiente grupo de palabras: insulso / dársena / deponer / tedio / perfidia. Indique la respuesta A, B, C o D que contenga un sinónimo para cada una de las palabras del grupo observado:",
      "opciones": {
        "A": "insípido / cazuela / desentonar / aburrimiento / hambre",
        "B": "saludable / fondeadero / dejar / talento / fidelidad",
        "C": "insípido / fondeadero / dejar / aburrimiento / traición",
        "D": "salobreño / cazuela / mantener / talento / traición"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 3,
      "enunciado": "Preceder es a suceder como omitir es a _____:",
      "opciones": {
        "A": "mencionar",
        "B": "corregir",
        "C": "mentir",
        "D": "callar"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 4,
      "enunciado": "“Nuevo e inexperto en cualquier arte u oficio” es:",
      "opciones": {
        "A": "nodal",
        "B": "inveterado",
        "C": "votivo",
        "D": "bisofío"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 5,
      "enunciado": "Observe el siguiente grupo de palabras: comminar / lampiño / animosidad / execrar / diferir. Indique la respuesta A, B, C o D que contenga un sinónimo para cada una de las palabras del grupo observado:",
      "opciones": {
        "A": "titubear / ponderado / mimo / exagerar / aplazar",
        "B": "amenazar / imberbe / hostilidad / condenar / aplazar",
        "C": "titubear / limpio / hostilidad / curar / conferir",
        "D": "amenazar / imberbe / amistad / exagerar / conferir"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 6,
      "enunciado": "Alevosía es a lealtad como fragosidad es a _____:",
      "opciones": {
        "A": "aspereza",
        "B": "lozanía",
        "C": "lisura",
        "D": "perspicacia"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 7,
      "enunciado": "Indique cuántas palabras contienen algún error ortográfico en el grupo: mensajes, incluyendo, hipoalergénico, centeyas, lloviznar bioquímica, excéntrica, huésped, callegear, hezpéride",
      "opciones": {
        "A": "3",
        "B": "1",
        "C": "2",
        "D": "4"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 8,
      "enunciado": "Indique cuántas palabras contienen algún error ortográfico en el grupo: ayacente, cortigero, xilófono, parihuela, errabundo, ipotonía, animadversión, exausta, fuveresco, canjear",
      "opciones": {
        "A": "6",
        "B": "5",
        "C": "4",
        "D": "7"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 9,
      "enunciado": "Indique cuántas palabras contienen algún error ortográfico relativo a la tilde en el grupo: plán, afónico, docil, irlandés, foraneo, flan, naufrágio, exclamación, piramides, tríceps",
      "opciones": {
        "A": "4",
        "B": "6",
        "C": "3",
        "D": "5"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 10,
      "enunciado": "Indique cuántas palabras contienen algún error ortográfico relativo a la tilde en el grupo: tiovivo, acuario, sinfin, lingüística, intrínsecamente, cirugía, acuático, ataúd, portarretráto, débilmente",
      "opciones": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "2"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 11,
      "enunciado": "Una vez realizadas las operaciones numéricas de las series siguientes, ¿cuál es el resultado de sumar los 2 totales? 1,97 – 0,32 – 0,58 + 0,74 = ; 3,24 – 1,56 + 0,29 – 0,08 =",
      "opciones": {
        "A": "3,71",
        "B": "3,72",
        "C": "3,73",
        "D": "3,70"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 12,
      "enunciado": "Una vez realizadas las operaciones numéricas de las series siguientes, ¿cuál es el resultado de sumar los 3 totales? 42 – 6 x 7 : 6 + 29 – 5 – 3 = ______ ; 20 : 4 + 20 : 5 x 2 – 2 + 3 = ______ ; 63 : 7 – 7 + 3 x 3 – 7 + 5 = ______",
      "opciones": {
        "A": "78",
        "B": "80",
        "C": "79",
        "D": "81"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 13,
      "enunciado": "Indique qué operación: suma, resta, multiplicación o división, debe sustituir a la interrogante del recuadro para que la suma de los dos totales de las dos series dé como resultado 24: 20 – 4 + 12 ? 10= ______ ; 3 x 4 – 3 – 3 = ______",
      "opciones": {
        "A": "resta",
        "B": "suma",
        "C": "división",
        "D": "multiplicación"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 14,
      "enunciado": "Indique qué operación: suma, resta, multiplicación o división, debe sustituir a la interrogante del recuadro para que la suma de los dos totales de las dos series dé como resultado 70: 120 ? 8 – 12 : 6 = ______ ; 5 x 8 + 23 – 6 = ______",
      "opciones": {
        "A": "suma",
        "B": "división",
        "C": "resta",
        "D": "multiplicación"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 15,
      "enunciado": "Se tienen dos presupuestos de empresas distintas para la adquisición de 3 artículos. La empresa 1 ofrece los siguientes precios: artículo A, 7 unidades al precio unitario de 20,10 euros; artículo B, 5 unidades al precio total de 21,25; artículo C, 9 unidades al precio total de 29,52 euros. Por su parte, la empresa 2 ofrece los precios para los mismos artículos y cantidades según la siguiente comparación: artículo A, descuento del 10% sobre el coste de la empresa 1; artículo B, incremento del 20,5% sobre el coste de la empresa 1; artículo C, incremento del 30% sobre el coste de la empresa 1. ¿Qué empresa es más cara y cuál es la diferencia de precio total? (Si es necesario redondee a dos decimales)",
      "opciones": {
        "A": "La empresa A; 0,85 euros más cara.",
        "B": "La empresa B; un 40,5% más cara.",
        "C": "La empresa B; 87,41 euros más cara.",
        "D": "La empresa B; 13,33 euros más cara."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 16,
      "enunciado": "¿Cuál es el valor de 1/4 de los 3/8 de 4.380?",
      "opciones": {
        "A": "160,00",
        "B": "410,625",
        "C": "1.642,50",
        "D": "3.285,00"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 17,
      "enunciado": "En un traslado se tienen que guardar 500 expedientes en 5 cajas. En 3 cajas se han metido 128 expedientes en cada una. Los expedientes restantes se quieren distribuir en igual cantidad en las 2 cajas restantes, ¿cuántos expedientes se deben meter en cada una de estas 2 cajas?",
      "opciones": {
        "A": "58",
        "B": "116",
        "C": "186",
        "D": "192"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 18,
      "enunciado": "El suelo de un almacén no admite una carga mayor de 13.950 kg. Actualmente hay dos tipos de estanterías para depositar la mercancía: Estantería Tipo A, compuesta de 5 baldas que admiten 975 kg cada balda y Estantería Tipo B, compuesta de 4 baldas que admiten 510 kg cada balda. De la Estantería Tipo A hay 2 unidades y de la Estantería Tipo B hay 4 unidades. ¿Hay que tener alguna consideración al llenar las baldas y estanterías para no sobrepasar la carga permitida?",
      "opciones": {
        "A": "Hay que cargar cada balda con el 20% menos de lo que admite.",
        "B": "Hay que dejar libre 1 Estantería completa del Tipo B.",
        "C": "Hay que dejar libre 1 balda de todas las Estanterías.",
        "D": "Pueden llenarse al completo todas las baldas y estanterías porque no se llegaría a la carga máxima."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 19,
      "enunciado": "En digitalizar un expediente formado por hojas de A4 se tarda una media de 5 minutos y si está formado por hojas de A4 y A3 se tarda 14 minutos. Es necesario digitalizar 82 expedientes con hojas solo de A4 y 95 expedientes con documentos de A4 y A3. ¿Cuál de las siguientes distribuciones de tiempos es correcta para cumplir con la tarea?",
      "opciones": {
        "A": "6 días durante 4 horas diarias y 1 día durante 5 horas y 10 minutos.",
        "B": "7 días durante 4 horas y 13 minutos diarios.",
        "C": "4 días durante 7 horas diarias y 3 días durante 1 hora diaria.",
        "D": "5 días durante 3 horas y medias diarias y 2 días durante 5 horas y 45 minutos."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 20,
      "enunciado": "La distancia de 13 km 140 hm 2 m 30 cm es equivalente a:",
      "opciones": {
        "A": "13 km 1402 m 30 cm",
        "B": "270,023 hm",
        "C": "27 km 2,03 m",
        "D": "27002,30 cm."
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 21,
      "enunciado": "Observe el CUADRO-BASE. Indique cuántas veces aparecen en total las letras v y m sin tener en cuenta la v situada inmediatamente antes de una e ni la m situada inmediatamente después de una v:",
      "opciones": {
        "A": "9",
        "B": "10",
        "C": "12",
        "D": "11"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 22,
      "enunciado": "Observe el CUADRO-BASE. Indique cuántas veces aparecen en total las letras g y z sin tener en cuenta la g situada inmediatamente después de una r ni la z situada inmediatamente antes de una n:",
      "opciones": {
        "A": "13",
        "B": "11",
        "C": "10",
        "D": "12"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 23,
      "enunciado": "Observe el CUADRO-BASE. Indique cuántas veces aparecen en total los números 2, 9 y 3 sin contar el 3 situado inmediatamente antes de una G:",
      "opciones": {
        "A": "26",
        "B": "27",
        "C": "25",
        "D": "24"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 24,
      "enunciado": "Observe el CUADRO-BASE. Indique cuántas veces aparecen en total las letras M, D y T sin contar la M inmediatamente después de una D:",
      "opciones": {
        "A": "16",
        "B": "18",
        "C": "19",
        "D": "17"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 25,
      "enunciado": "Indique cuántos de esos 3 pares de tablas son exactamente iguales entre sí:",
      "opciones": {
        "A": "ninguno",
        "B": "1",
        "C": "2",
        "D": "3"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 26,
      "enunciado": "Indique cuántos de esos 3 pares de tablas son exactamente iguales entre sí:",
      "opciones": {
        "A": "2",
        "B": "3",
        "C": "1",
        "D": "ninguno"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 27,
      "enunciado": "¿Cómo quedaría la LISTA-BASE después de aplicar el CRITERIO X a la PERSONA Nº 4?",
      "opciones": {
        "A": "Partin Gonzo, F; Partain Gonzabay, G; Partis González, R; Gonzalbo Gonzini, P; Partida Gonzalbez, H; Partala Gonzalo, M; Partos Gonzalbo, B",
        "B": "Partin Gonzo, F; Partain Gonzabay, G; Partis González, R; Gonzalbo Gonzini, P; Partida Gonzalbez, H; Partala Gonzalo, M; Partos Partel, B",
        "C": "Partin Gonzo, F; Partain Gonzabay, G; Gonzalbo González, R; Partel Gonzini, P; Partida Gonzalbez, H; Partala Gonzalo, M; Partos Gonzalbo, B",
        "D": "Partin Gonzo, F; Partain Gonzabay, G; Partis González, R; Partel Partos, P; Partida Gonzalbez, H; Partala Gonzalo, M; Partos Gonzalbo, B"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 28,
      "enunciado": "¿Cómo quedaría la LISTA-BASE después de ordenarla alfabéticamente?",
      "opciones": {
        "A": "Partain Gonzabay, G; Partida Gonzalbez, H; Partala Gonzalo, M; Partel Gonzini, P; Partin Gonzo, F; Partis González, R; Partos Gonzalbo, B",
        "B": "Partain Gonzabay, G; Partala Gonzalo, M; Partel Gonzini, P; Partin Gonzo, F; Partida Gonzalbez, H; Partis González, R; Partos Gonzalbo, B",
        "C": "Partain Gonzabay, G; Partala Gonzalo, M; Partel Gonzini, P; Partida Gonzalbez, H; Partin Gonzo, F; Partis González, R; Partos Gonzalbo, B",
        "D": "Partala Gonzalo, M; Partain Gonzabay, G; Partel Gonzini, P; Partida Gonzalbez, H; Partin Gonzo, F; Partis González, R; Partos Gonzalbo, B"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 29,
      "enunciado": "¿Cómo quedaría la LISTA-BASE después de aplicar el CRITERIO Z a la PERSONA Nº 3, el CRITERIO Y a la PERSONA Nº 6 y el CRITERIO W a la PERSONA Nº 2 de la lista?",
      "opciones": {
        "A": "Partin Gonzo, F; Gonzabay Partain, G; Partis Partin, R; Partel Gonzini, P; Partida Gonzalbez, H; Partos Gonzalo, M; Partos Gonzalbo, B",
        "B": "Partin Gonzo, F; Gonzabay Partain, G; Partin Partis, R; Partel Gonzini, P; Partida Gonzalbez, H; Partida Gonzalo, M; Partos Gonzalbo, B",
        "C": "Partin Gonzo, F; Gonzo Partain, G; Partis Partin, R; Partel Gonzini, P; Partida Gonzalbez, H; Partida Gonzalo, M; Partos Gonzalbo, B",
        "D": "Partin Gonzo, F; Gonzabay Partain, G; Partis Partin, R; Partel Gonzini, P; Partida Gonzalbez, H; Partida Gonzalo, M; Partos Gonzalbo, B"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 30,
      "enunciado": "¿Cómo quedaría la LISTA-BASE después de aplicar el CRITERIO V a la PERSONA Nº 2 y a la PERSONA Nº 4, el CRITERIO X a la PERSONA Nº 6 y el CRITERIO W a la PERSONA Nº 1 de la lista?",
      "opciones": {
        "A": "Gonzo Partin, F; Partain Partis, G; Partis González, R; Gonzalbez Gonzini, P; Partida Gonzalbez, H; Gonzalbo Gonzalo, M; Partos Gonzalbo, B",
        "B": "Gonzo Partin, F; Partain Partis, G; Partis González, R; Partel Partida, P; Partida Gonzalbez, H; Gonzalbo Gonzalo, M; Partos Gonzalbo, B",
        "C": "Partin Partin, F; Partain Partis, G; Partis González, R; Partel Partida, P; Partida Gonzalbez, H; Gonzalbo Gonzalo, M; Partos Partala, B",
        "D": "Gonzo Partin, F; Partain Partis, G; Partis González, R; Partel Partida, P; Partis Gonzalbez, H; Gonzalbo Gonzalo, M; Partos Gonzalbo, B"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 31,
      "enunciado": "¿En qué fecha entró en vigor la Constitución Española de 1978?",
      "opciones": {
        "A": "El 29 de diciembre de 1978, mismo día de la publicación de su texto oficial en el Boletín Oficial del Estado.",
        "B": "El 6 de diciembre de 1978.",
        "C": "El 27 de diciembre de 1978.",
        "D": "El 31 de octubre de 1978, mismo día de su aprobación por las Cortes Españolas."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 32,
      "enunciado": "¿Quién ha de asegurar la protección social, económica y jurídica de la familia, según el art. 39.1 de la Constitución Española?",
      "opciones": {
        "A": "El Estado.",
        "B": "Las Administraciones Públicas.",
        "C": "Las Fuerzas y Cuerpos de Seguridad del Estado.",
        "D": "Los poderes públicos."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 33,
      "enunciado": "Según el art. 4 de la Ley Orgánica 3/1983, de 25 de febrero, de Estatuto de Autonomía de la Comunidad de Madrid, ¿cuál de estas afirmaciones es falsa?",
      "opciones": {
        "A": "La bandera de la Comunidad de Madrid es roja carmesí, con cinco estrellas en blanco, de cinco puntas, colocadas cuatro y tres en el centro del lienzo.",
        "B": "El escudo de la Comunidad de Madrid se establece por ley de la Asamblea.",
        "C": "La Comunidad de Madrid tiene himno propio, siendo éste establecido por ley de Asamblea.",
        "D": "Se declara fiesta de la Comunidad de Madrid el día 2 de mayo."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 34,
      "enunciado": "¿Cuál de las siguientes afirmaciones NO es correcta respecto a la elección de la Asamblea de la Comunidad de Madrid?",
      "opciones": {
        "A": "Es elegida por cuatro años.",
        "B": "Es elegida atendiendo a criterios de representación proporcional.",
        "C": "La circunscripción electoral es la provincia.",
        "D": "Para la distribución de escaños sólo serán tenidas en cuenta las listas que hubieran obtenido, al menos, el 15 por 100 de los sufragios válidamente emitidos."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 35,
      "enunciado": "El cargo del Presidente de la Comunidad de Madrid: Según la Ley 1/1983, de 13 de diciembre, del Gobierno y la Administración de la Comunidad de Madrid:",
      "opciones": {
        "A": "Es compatible con el ejercicio de cualquier otra función o actividad pública.",
        "B": "Es incompatible con el ejercicio de cualquier otra función o actividad pública que no derive de aquél salvo la de Diputado de la Asamblea.",
        "C": "Es compatible con el ejercicio de la actividad como Diputado de las Cortes.",
        "D": "Es compatible con el ejercicio de toda actividad laboral, profesional o empresarial."
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 36,
      "enunciado": "El Presidente de la Comunidad de Madrid promulgará, en nombre del Rey, las Leyes de la Asamblea y los Decretos legislativos y ordenará su publicación en el “Boletín Oficial de la Comunidad de Madrid”:",
      "opciones": {
        "A": "En el plazo máximo de quince días desde su promulgación.",
        "B": "En el plazo máximo de diez días desde su aprobación.",
        "C": "En el plazo máximo de diez días desde su promulgación.",
        "D": "En el plazo máximo de quince días desde su aprobación."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 37,
      "enunciado": "Según el artículo 1 del Código Civil, ¿cuáles son las fuentes del ordenamiento jurídico?",
      "opciones": {
        "A": "La ley, la costumbre y la jurisprudencia.",
        "B": "La ley, los principios generales del derecho y la doctrina científica.",
        "C": "La ley, la costumbre y los valores superiores del ordenamiento jurídico.",
        "D": "La ley, la costumbre y los principios generales del derecho."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 38,
      "enunciado": "¿Cómo se titulan las disposiciones del Gobierno que contienen legislación delegada?",
      "opciones": {
        "A": "Decreto.",
        "B": "Decreto Legislativo.",
        "C": "Decreto Ley.",
        "D": "Real Decreto."
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 39,
      "enunciado": "En relación con el artículo 114 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, ponen fin a la vía administrativa:",
      "opciones": {
        "A": "Las resoluciones de los órganos administrativos que tengan superior jerárquico.",
        "B": "Los acuerdos, pactos, convenios o contratos que no tengan la consideración de finalizadores del procedimiento.",
        "C": "Las demás resoluciones de órganos administrativos cuando una disposición reglamentaria así lo establezca.",
        "D": "Las resoluciones de los procedimientos de responsabilidad patrimonial y del procedimiento sancionador, cualquiera que fuese el tipo de relación de que derive."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 40,
      "enunciado": "SEÑALA LA INCORRECTA. Conforme al Artículo 106 de la ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas, el órgano competente para la revisión de oficio podrá acordar motivadamente la inadmisión a trámite de las solicitudes formuladas por los interesados, sin necesidad de recabar Dictamen del Consejo de Estado u órgano consultivo de la Comunidad Autónoma:",
      "opciones": {
        "A": "Cuando las mismas no se basen en alguna de las causas de nulidad del artículo 48.1 de la ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas.",
        "B": "Cuando carezcan manifiestamente de fundamento.",
        "C": "Cuando se hubieran desestimado en cuanto al fondo otras solicitudes sustancialmente iguales.",
        "D": "Todas son correctas."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 41,
      "enunciado": "SEÑALE LA INCORRECTA. Respecto al objeto de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, reglamentariamente podrán establecerse especialidades del procedimiento referidas a:",
      "opciones": {
        "A": "Los órganos competentes.",
        "B": "Plazos propios del concreto procedimiento por razón de la materia.",
        "C": "Formas de iniciación y terminación.",
        "D": "Notificación, publicación y documentación a recabar."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 42,
      "enunciado": "En el artículo 83 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, ¿qué plazo se determina para formular alegaciones cuando se acuerde un período de información pública?:",
      "opciones": {
        "A": "En ningún caso, inferior a quince días.",
        "B": "En ningún caso, superior a veinte días.",
        "C": "En ningún caso, inferior a veinte días.",
        "D": "En ningún caso, superior a quince días."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 43,
      "enunciado": "Conforme a lo dispuesto en el art. 21 de la Ley 29/1998 de 13 de julio reguladora de la Jurisdicción Contencioso-administrativa, se considera parte demandada:",
      "opciones": {
        "A": "Las personas o entidades cuyos derechos o intereses legítimos hubieran quedado, en todo caso, afectados por la desestimación de las pretensiones del demandante.",
        "B": "Las aseguradoras de las Administraciones Públicas que serán parte codemandada junto con La administración a quien aseguren, si así lo estima el tribunal.",
        "C": "Las aseguradoras de las Administraciones Públicas que serán parte codemandada junto con la administración a quien aseguren si así lo reclamare la administración asegurada.",
        "D": "Las personas o entidades cuyos derechos o intereses legítimos pudieran quedar afectados por la estimación de las pretensiones del demandante."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 44,
      "enunciado": "El plazo para interponer el recurso contencioso administrativo contra un acto presunto, será de:",
      "opciones": {
        "A": "Dos meses.",
        "B": "Tres meses.",
        "C": "Seis meses.",
        "D": "No se pueden dar actos presuntos ya que implican indefensión."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 45,
      "enunciado": "Según el artículo 8 de la Ley 19/2013, la publicación de la información relativa a los contratos menores de las Administraciones Públicas:",
      "opciones": {
        "A": "Se realizará mensualmente.",
        "B": "Se realizará con la misma periodicidad que el resto de los contratos.",
        "C": "Se podrá realizar anualmente.",
        "D": "Se podrá realizar trimestralmente."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 46,
      "enunciado": "El artículo 24 de la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno, establece que el plazo máximo para resolver y notificar la resolución de una reclamación será de:",
      "opciones": {
        "A": "Tres meses, transcurrido el cual, la reclamación se entenderá desestimada.",
        "B": "Tres meses, transcurrido el cual, la reclamación se entenderá estimada.",
        "C": "Un mes, transcurrido el cual, la reclamación se entenderá desestimada.",
        "D": "Un mes, transcurrido el cual, la reclamación se entenderá estimada."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 47,
      "enunciado": "¿A qué tipo de contrato corresponde la siguiente definición?: “Tienen por objeto la adquisición, el arrendamiento financiero, o el arrendamiento, con o sin opción de compra, de productos o bienes muebles”.",
      "opciones": {
        "A": "Contrato de obras.",
        "B": "Contrato de servicios.",
        "C": "Contrato de concesión de servicios.",
        "D": "Contrato de suministros."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 48,
      "enunciado": "De acuerdo con la Ley 9/2017, de contratos del Sector Público, son contratos de obras aquellos que tienen por objeto:",
      "opciones": {
        "A": "La ejecución de una obra, aislada o conjuntamente con la redacción del proyecto.",
        "B": "La realización de alguno de los trabajos enumerados en el Anexo I de la Ley.",
        "C": "La realización, por cualquier medio, de una obra que cumpla los requisitos fijados por la entidad del sector público contratante que ejerza una influencia decisiva en el tipo o el proyecto de obra.",
        "D": "Todas las respuestas anteriores son correctas."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 49,
      "enunciado": "Según el art. 4 del TREBEP ¿Qué personal no tiene legislación específica propia?",
      "opciones": {
        "A": "Las Cortes Generales.",
        "B": "El personal del Centro Nacional de Inteligencia.",
        "C": "Las Universidades públicas.",
        "D": "Personal militar de las Fuerzas Armadas."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 50,
      "enunciado": "Según el art. 95 del TREBEP son faltas muy graves:",
      "opciones": {
        "A": "La incorrección con el público, superiores, compañeros o subordinados.",
        "B": "El abuso de autoridad en el ejercicio del cargo.",
        "C": "La tolerancia de los superiores respecto de la comisión de faltas muy graves o graves de sus subordinados.",
        "D": "La adopción de acuerdos manifiestamente ilegales que causen perjuicio grave a la administración o a los ciudadanos."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 51,
      "enunciado": "Según el art. 95 del TREBEP son faltas graves:",
      "opciones": {
        "A": "La desobediencia abierta a las órdenes de un superior.",
        "B": "El incumplimiento del deber de impedir o perseguir la comisión de faltas graves.",
        "C": "La adopción de acuerdos manifiestamente ilegales que causen perjuicio grave a la administración o a los ciudadanos.",
        "D": "El abandono del servicio."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 52,
      "enunciado": "Según el art. 95 del TREBEP son faltas leves:",
      "opciones": {
        "A": "La falta de rendimiento que afecte al normal funcionamiento de los servicios.",
        "B": "El incumplimiento injustificado del horario de trabajo.",
        "C": "La desobediencia abierta a las órdenes de un superior.",
        "D": "La falta de rendimiento que afecte al normal funcionamiento de los servicios y el incumplimiento injustificado del horario de trabajo."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 53,
      "enunciado": "Según el art. 95 del TREBEP son faltas muy graves:",
      "opciones": {
        "A": "El incumplimiento del deber de impedir o perseguir la comisión de faltas graves.",
        "B": "La desobediencia abierta a las órdenes de un superior.",
        "C": "La falta de rendimiento que afecte al normal funcionamiento de los servicios.",
        "D": "El abandono del servicio."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 54,
      "enunciado": "Según el art. 95 del TREBEP son faltas graves:",
      "opciones": {
        "A": "La tolerancia de los superiores respecto de la comisión de faltas muy graves o graves de sus subordinados.",
        "B": "La adopción de acuerdos manifiestamente ilegales que causen perjuicio grave a la administración o a los ciudadanos.",
        "C": "El abandono del servicio.",
        "D": "La incorrección con el público, superiores, compañeros o subordinados."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 55,
      "enunciado": "Según el art. 95 del TREBEP son faltas leves:",
      "opciones": {
        "A": "La incorrección con el público, superiores, compañeros o subordinados.",
        "B": "El abuso de autoridad en el ejercicio del cargo.",
        "C": "La tolerancia de los superiores respecto de la comisión de faltas muy graves o graves de sus subordinados.",
        "D": "La adopción de acuerdos manifiestamente ilegales que causen perjuicio grave a la administración o a los ciudadanos."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 56,
      "enunciado": "Según el art. 95 del TREBEP son faltas muy graves:",
      "opciones": {
        "A": "El abandono del servicio.",
        "B": "La desobediencia abierta a las órdenes de un superior.",
        "C": "El abuso de autoridad en el ejercicio del cargo.",
        "D": "La falta de rendimiento que afecte al normal funcionamiento de los servicios."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 57,
      "enunciado": "Según el art. 95 del TREBEP son faltas graves:",
      "opciones": {
        "A": "La tolerancia de los superiores respecto de la comisión de faltas muy graves o graves de sus subordinados.",
        "B": "La adopción de acuerdos manifiestamente ilegales que causen perjuicio grave a la administración o a los ciudadanos.",
        "C": "El incumplimiento injustificado del horario de trabajo.",
        "D": "La incorrección con el público, superiores, compañeros o subordinados."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 58,
      "enunciado": "Según el art. 95 del TREBEP son faltas leves:",
      "opciones": {
        "A": "El abandono del servicio.",
        "B": "La desobediencia abierta a las órdenes de un superior.",
        "C": "El incumplimiento del deber de impedir o perseguir la comisión de faltas graves.",
        "D": "El incumplimiento injustificado del horario de trabajo."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 59,
      "enunciado": "Según el art. 95 del TREBEP son faltas muy graves:",
      "opciones": {
        "A": "La falta de rendimiento que afecte al normal funcionamiento de los servicios.",
        "B": "El incumplimiento injustificado del horario de trabajo.",
        "C": "La desobediencia abierta a las órdenes de un superior.",
        "D": "El abandono del servicio."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 60,
      "enunciado": "Según el art. 95 del TREBEP son faltas graves:",
      "opciones": {
        "A": "La incorrección con el público, superiores, compañeros o subordinados.",
        "B": "El abuso de autoridad en el ejercicio del cargo.",
        "C": "La tolerancia de los superiores respecto de la comisión de faltas muy graves o graves de sus subordinados.",
        "D": "La adopción de acuerdos manifiestamente ilegales que causen perjuicio grave a la administración o a los ciudadanos."
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 61,
      "enunciado": "Según el art. 95 del TREBEP son faltas leves:",
      "opciones": {
        "A": "La desobediencia abierta a las órdenes de un superior.",
        "B": "El incumplimiento del deber de impedir o perseguir la comisión de faltas graves.",
        "C": "La adopción de acuerdos manifiestamente ilegales que causen perjuicio grave a la administración o a los ciudadanos.",
        "D": "La falta de rendimiento que afecte al normal funcionamiento de los servicios."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 62,
      "enunciado": "Según el art. 95 del TREBEP son faltas muy graves:",
      "opciones": {
        "A": "El incumplimiento injustificado del horario de trabajo.",
        "B": "La incorrección con el público, superiores, compañeros o subordinados.",
        "C": "La tolerancia de los superiores respecto de la comisión de faltas muy graves o graves de sus subordinados.",
        "D": "El abuso de autoridad en el ejercicio del cargo."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 63,
      "enunciado": "Según el art. 95 del TREBEP son faltas graves:",
      "opciones": {
        "A": "La falta de rendimiento que afecte al normal funcionamiento de los servicios.",
        "B": "El incumplimiento injustificado del horario de trabajo.",
        "C": "La desobediencia abierta a las órdenes de un superior.",
        "D": "El abandono del servicio."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 64,
      "enunciado": "Según el art. 95 del TREBEP son faltas leves:",
      "opciones": {
        "A": "El abuso de autoridad en el ejercicio del cargo.",
        "B": "La tolerancia de los superiores respecto de la comisión de faltas muy graves o graves de sus subordinados.",
        "C": "La adopción de acuerdos manifiestamente ilegales que causen perjuicio grave a la administración o a los ciudadanos.",
        "D": "La incorrección con el público, superiores, compañeros o subordinados."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 65,
      "enunciado": "Según el art. 95 del TREBEP son faltas muy graves:",
      "opciones": {
        "A": "La desobediencia abierta a las órdenes de un superior.",
        "B": "El incumplimiento del deber de impedir o perseguir la comisión de faltas graves.",
        "C": "La falta de rendimiento que afecte al normal funcionamiento de los servicios.",
        "D": "El incumplimiento injustificado del horario de trabajo."
      },
      "respuesta_correcta": "B"
    }
  ]
};

export const madrid2023Test: SeedExam = {
    fileName: rawMadrid2023Test.titulo,
    category: "madrid",
    questions: rawMadrid2023Test.preguntas.map(q => {
        return {
            questionText: q.enunciado,
            options: Object.values(q.opciones),
            correctAnswerIndex: optionMap[q.respuesta_correcta],
        };
    })
};
