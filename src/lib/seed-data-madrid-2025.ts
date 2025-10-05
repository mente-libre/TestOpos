
import type { Question } from './definitions';

interface SeedExam {
    fileName: string;
    category: string;
    questions: Question[];
}

const optionMap: { [key: string]: number } = { A: 0, B: 1, C: 2, D: 3 };

const rawMadrid2025Test = {
  "titulo": "Cuestionario Primer Ejercicio - Cuerpo de Auxiliares, Administración General, Comunidad de Madrid - Llamamiento Extraordinario",
  "convocatoria": "Orden 1942/2023 - Llamamiento 7 Febrero 2025",
  "preguntas": [
    {
      "numero": 1,
      "enunciado": "“Raro, extravagante o fuera de lo común” es:",
      "opciones": {
        "A": "bizarro",
        "B": "lerdo",
        "C": "bizco",
        "D": "zarrapastroso"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 2,
      "enunciado": "Observe el siguiente grupo de palabras: socavado / lívido / dicotomía / timorato / emanar. Indique la respuesta A, B, C o D que contenga un sinónimo para cada una de las palabras del grupo observado:",
      "opciones": {
        "A": "debilitado / lento / nimiedad / tímido / departir",
        "B": "suscrito / amoratado / nimiedad / tembloroso / departir",
        "C": "debilitado / amoratado / división / tímido / proceder",
        "D": "suscrito / lento / concentración / atrevido / proceder"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 3,
      "enunciado": "Cordialidad es a falsedad como esplendor es a ______:",
      "opciones": {
        "A": "ventisca",
        "B": "lucha",
        "C": "principio",
        "D": "decadencia"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 4,
      "enunciado": "“Que no admite duda” es:",
      "opciones": {
        "A": "inefable",
        "B": "vituperado",
        "C": "indubitado",
        "D": "inmarcesible"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 5,
      "enunciado": "Observe el siguiente grupo de palabras: prolijo / dogmático / expeler / loa / refutar. Indique la respuesta A, B, C o D que contenga un sinónimo para cada una de las palabras del grupo observado:",
      "opciones": {
        "A": "cuidadoso / práctico / expulsar / tela / contradecir",
        "B": "cuidadoso / inflexible / expulsar / alabanza / contradecir",
        "C": "consustancial / práctico / absorber / limpieza / aprisionar",
        "D": "consustancial / inflexible / absorber / alabanza / aprisionar"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 6,
      "enunciado": "Egresar es a ingresar como escindir es a ______:",
      "opciones": {
        "A": "cohesionar",
        "B": "advenir",
        "C": "dilucidar",
        "D": "cimbrear"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 7,
      "enunciado": "Indique cuántas palabras contienen algún error ortográfico en el grupo: fuselaje, atribullendo, hipotenso, groseya, biodegradable, espresión, yoviznoso, belga, flojear, ozcilar",
      "opciones": {
        "A": "6",
        "B": "4",
        "C": "5",
        "D": "7"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 8,
      "enunciado": "Indique cuántas palabras contienen algún error ortográfico en el grupo: subyugar, vinajera, silografía, reuido, meditavundo, hipoxia, inadvertido, exhumar, favido, forcejear",
      "opciones": {
        "A": "4",
        "B": "5",
        "C": "3",
        "D": "6"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 9,
      "enunciado": "Indique cuántas palabras contienen algún error ortográfico relativo a la tilde en el grupo: bién, fanático, fémur, descortes, sucedáneo, mes, efervescéncia, explicacion, conyuges, biceps",
      "opciones": {
        "A": "7",
        "B": "6",
        "C": "8",
        "D": "5"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 10,
      "enunciado": "Indique cuántas palabras contienen algún error ortográfico relativo a la tilde en el grupo: veintidos, diário, balompie, luciernaga, trágicamente, terminología, encubiérto, laud, pisapapéles, facilmente",
      "opciones": {
        "A": "10",
        "B": "7",
        "C": "9",
        "D": "8"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 11,
      "enunciado": "Una vez realizadas las operaciones numéricas de las series siguientes, ¿cuál es el resultado de sumar los 2 totales? 1,56 + 0,28 – 0,73 + 0,86 = ; 2,35 – 0,97 – 0,33 + 1,84 =",
      "opciones": {
        "A": "4,86",
        "B": "4,85",
        "C": "4,87",
        "D": "4,88"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 12,
      "enunciado": "Una vez realizadas las operaciones numéricas de las series siguientes, ¿cuál es el resultado de sumar los 3 totales? 7 x 3 – 6 + 12 : 3 x 2 – 17 = ______ ; 6 – 4 + 3 x 7 – 18 : 6 + 5 = ______ ; 2 + 24 : 6 – 4 + 6 + 48 : 4 = ______",
      "opciones": {
        "A": "54",
        "B": "53",
        "C": "51",
        "D": "52"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 13,
      "enunciado": "Indique qué operación: suma, resta, multiplicación o división, debe sustituir a la interrogante del recuadro para que la suma de los dos totales de las dos series dé como resultado 41: 12 – 3 ? 9 + 10 = ______ ; 10 + 6 x 5 – 9 = ______",
      "opciones": {
        "A": "división",
        "B": "resta",
        "C": "suma",
        "D": "multiplicación"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 14,
      "enunciado": "Indique qué operación: suma, resta, multiplicación o división, debe sustituir a la interrogante del recuadro para que la suma de los dos totales de las dos series dé como resultado 94: 27 ? 8 x 3 : 4 = ______ ; 110 : 5 + 33 + 18 = ______",
      "opciones": {
        "A": "resta",
        "B": "suma",
        "C": "división",
        "D": "multiplicación"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 15,
      "enunciado": "Para la compra de un determinado producto un proveedor ofrece cuatro posibilidades de adquisición: Lote 1: 300 paquetes, conteniendo 15 unidades cada paquete, a un precio total de 5.850,00 euros. Lote 2: 10% más de paquetes que el Lote 1, conteniendo 20 unidades cada paquete, a un precio del 15% más que el total del Lote 1. Lote 3: mismo número de paquetes que el Lote 1, conteniendo 10 unidades cada paquete, a un precio del 15% menos que el total del Lote 1. Lote 4: 10% menos de paquetes que el Lote 1, conteniendo 20 unidades cada paquete, al mismo precio que el total del Lote 1. ¿En cuál de los Lotes anteriores el precio unitario del producto es más económico?",
      "opciones": {
        "A": "Lote 1",
        "B": "Lote 2",
        "C": "Lote 3",
        "D": "Lote 4"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 16,
      "enunciado": "¿Cuál es el valor del 15% de los 7/9 de 11.475? (Si es necesario redondee a dos decimales)",
      "opciones": {
        "A": "1.721,25",
        "B": "2.213,04",
        "C": "1.338,75",
        "D": "133.875"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 17,
      "enunciado": "Tenemos que distribuir 775 personas en aulas de dos tipos: Aulas A, con 32 puestos cada una y Aulas B, con 45 puestos cada una. ¿Cuál de las siguientes afirmaciones es correcta?",
      "opciones": {
        "A": "Con 4 Aulas A y 14 Aulas B nos sobran 17 puestos.",
        "B": "Con 6 Aulas A y 13 Aulas B nos sobran 2 puestos.",
        "C": "Con 8 Aulas A y 12 Aulas B nos faltan 21 puestos.",
        "D": "Con 10 Aulas A y 11 Aulas B nos faltan 40 puestos."
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 18,
      "enunciado": "Necesitamos imprimir 57.000 documentos en A4. Cada cartucho de tóner tiene tóner para imprimir 4.540 documentos en A4 en calidad normal. Sabemos que la impresora tiene 3 calidades de impresión: calidad normal, calidad eco (consume la mitad de tóner) y calidad supereco (consume el 10% de tóner). Si solo disponemos de 3 cartuchos de tóner, ¿con cuál de las siguientes opciones de impresión tenemos tóner suficiente?",
      "opciones": {
        "A": "10% de los documentos en calidad normal, 40% de los documentos en calidad eco y 50% de los documentos en calidad supereco.",
        "B": "1.200 documentos en calidad normal, 20.000 en calidad eco y 35.800 en calidad supereco.",
        "C": "2.500 documentos en calidad normal, 13.650 en calidad eco y 40.850 en calidad supereco.",
        "D": "Mitad de los documentos en calidad eco y mitad de los documentos en calidad supereco."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 19,
      "enunciado": "En la realización de una determinada tarea se han registrado los siguientes tiempos: 1 persona ha tardado 3 horas, 13 minutos y 10 segundos; 2 personas han tardado 2 horas, 25 minutos y 10 segundos cada una de ellas; 3 personas han tardado 3 horas, 35 minutos y 38 segundos cada una de ellas. ¿Cuál es el tiempo medio en realizar la tarea?",
      "opciones": {
        "A": "1 horas, 32 minutos y 19 segundos.",
        "B": "3 horas, 4 minutos y 19 segundos.",
        "C": "3 horas, 8 minutos y 24 segundos.",
        "D": "6 horas, 16 minutos y 48 segundos."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 20,
      "enunciado": "¿Cuál de las siguientes parejas de pesos (están separadas por un “;”) no son equivalentes?",
      "opciones": {
        "A": "42 hg 8 gr ; 4,2 kg 80 dg",
        "B": "8,3 dag 2 gr ; 8.500 cg",
        "C": "0,52 kg 3 dg ; 520,3 gr",
        "D": "25 kg 40 gr ; 250,04 hc"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 21,
      "enunciado": "Observe el CUADRO-BASE. Indique cuántas veces aparecen en total las letras X y O sin tener en cuenta la X situada inmediatamente después de una O ni la O situada inmediatamente antes de una W:",
      "opciones": {
        "A": "9",
        "B": "10",
        "C": "7",
        "D": "8"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 22,
      "enunciado": "Observe el CUADRO-BASE. Indique cuántas veces aparecen en total las letras t y d sin tener en cuenta la t situada inmediatamente antes de una h ni la d situada inmediatamente después de una y:",
      "opciones": {
        "A": "18",
        "B": "17",
        "C": "15",
        "D": "16"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 23,
      "enunciado": "Observe el CUADRO-BASE. Indique cuántas veces aparecen en total los números 7, 6 y 1 sin contar el 6 situado inmediatamente antes de una Q:",
      "opciones": {
        "A": "24",
        "B": "25",
        "C": "23",
        "D": "26"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 24,
      "enunciado": "Observe el CUADRO-BASE. Indique cuántas veces aparecen en total las letras G, L y H sin contar la G inmediatamente antes de una H:",
      "opciones": {
        "A": "21",
        "B": "18",
        "C": "19",
        "D": "20"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 25,
      "enunciado": "Indique cuántos de esos 3 pares de tablas son exactamente iguales entre sí:",
      "opciones": {
        "A": "2",
        "B": "3",
        "C": "1",
        "D": "ninguno"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 26,
      "enunciado": "Indique cuántos de esos 3 pares de tablas son exactamente iguales entre sí:",
      "opciones": {
        "A": "ninguno",
        "B": "2",
        "C": "3",
        "D": "1"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 27,
      "enunciado": "¿Cómo quedaría la LISTA-BASE después de aplicar el CRITERIO Y a la PERSONA Nº 6?",
      "opciones": {
        "A": "Virhuez Combarros, F; Virgili Combes, D; Virlan Combala, A; Virgil Combaz, F; Virtus Comba, L; Combellas Combel, M; Viribay Virginio, T",
        "B": "Virhuez Combarros, F; Virgili Combes, D; Virlan Combala, A; Virgil Combaz, F; Virtus Comba, L; Combellas Combel, M; Viribay Combellas, T",
        "C": "Virhuez Combarros, F; Virgili Combes, D; Virlan Combala, A; Virgil Combaz, F; Virtus Comba, L; Viribay Combel, M; Viribay Combellas, T",
        "D": "Virhuez Combarros, F; Virgili Combes, D; Virlan Combala, A; Virgil Combaz, F; Combellas Comba, L; Virginio Combel, M; Viribay Combellas, T"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 28,
      "enunciado": "¿Cómo quedaría la LISTA-BASE después de ordenarla alfabéticamente en orden inverso?",
      "opciones": {
        "A": "Virtus Comba, L; Virlan Combala, A; Viribay Combellas, T; Virhuez Combarros, F; Virginio Combel, M; Virgili Combes, D; Virgil Combaz, F",
        "B": "Virtus Comba, L; Virlan Combala, A; Virhuez Combarros, F; Viribay Combellas, T; Virginio Combel, M; Virgili Combes, D; Virgil Combaz, F",
        "C": "Virtus Comba, L; Virlan Combala, A; Viribay Combellas, T; Virhuez Combarros, F; Virgili Combes, D; Virginio Combel, M; Virgil Combaz, F",
        "D": "Virtus Comba, L; Viribay Combellas, T; Virhuez Combarros, F; Virlan Combala, A; Virginio Combel, M; Virgini Combes, D; Virgil Combaz, F"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 29,
      "enunciado": "¿Cómo quedaría la LISTA-BASE después de aplicar el CRITERIO W y el CRITERIO V a la PERSONA Nº 6, el CRITERIO X a la PERSONA Nº 4 y el CRITERIO Z a la PERSONA Nº 2 de la lista?",
      "opciones": {
        "A": "Virhuez Combarros, F; Combes Vigili, D; Virlan Combala, A; Virgil Virlan, F; Virtus Comba, L; Combarros Viribay, M; Viribay Combellas, T",
        "B": "Virhuez Combarros, F; Combes Combes, D; Virlan Combala, A; Virgil Virtus, F; Virtus Comba, L; Combarros Viribay, M; Viribay Combellas, T",
        "C": "Virhuez Combarros, F; Combes Combes, D; Virlan Combala, A; Virgil Virlan, F; Virtus Comba, L; Combellas Virhuez, M; Viribay Combellas, T",
        "D": "Virhuez Combarros, F; Combes Combes, D; Virlan Combala, A; Virgil Virlan, F; Virtus Comba, L; Combarros Viribay, M; Viribay Combellas, T"
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 30,
      "enunciado": "¿Cómo quedaría la LISTA-BASE después de aplicar el CRITERIO X a la PERSONA Nº 2, el CRITERIO V a la PERSONA Nº 6 y el CRITERIO Y a la PERSONA Nº 4 de la lista?",
      "opciones": {
        "A": "Virhuez Combarros, F; Virgili Virhuez, D; Virlan Combala, A; Comba Combaz, F; Virtus Virgil, L; Virginio Viribay, M; Viribay Combellas, T",
        "B": "Virhuez Combarros, F; Virgili Virhuez, D; Virlan Combala, A; Comba Combaz, F; Virtus Comba, L; Combellas Combel, M; Viribay Combellas, T",
        "C": "Virhuez Combarros, F; Virgili Virhuez, D; Virlan Combala, A; Comba Combaz, F; Virtus Comba, L; Virginio Viribay, M; Viribay Combellas, T",
        "D": "Virhuez Combarros, F; Virgili Virhuez, D; Virlan Combala, A; Combaz Comba, F; Virtus Comba, L; Virginio Viribay, M; Viribay Combellas, T"
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 31,
      "enunciado": "De acuerdo con su Preámbulo, ¿quién ratifica la Constitución Española de 1978?",
      "opciones": {
        "A": "El Rey",
        "B": "El pueblo español",
        "C": "Las Cortes Generales",
        "D": "El Gobierno"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 32,
      "enunciado": "Respecto al derecho a la libertad y a la seguridad, el art. 17 de la Constitución Española establece:",
      "opciones": {
        "A": "La detención preventiva no podrá durar más del tiempo estrictamente necesario para la realización de las averiguaciones tendentes al esclarecimiento de los hechos, y, en todo caso, en el plazo máximo de cuarenta y ocho horas, el detenido deberá ser puesto en libertad o a disposición de la autoridad judicial.",
        "B": "Toda persona detenida deber ser informada antes de que se cumplan tres horas de la detención, y de modo que le sea comprensible, de sus derechos y de las razones de su detención, no pudiendo ser obligada a declarar.",
        "C": "La ley regulará un procedimiento de “habeas corpus” para producir la inmediata puesta a disposición judicial de toda persona detenida ilegalmente.",
        "D": "Ninguna de las anteriores es correcta."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 33,
      "enunciado": "NO Corresponde a la Asamblea de la Comunidad de Madrid:",
      "opciones": {
        "A": "Acordar operaciones de crédito y deuda pública.",
        "B": "La potestad de establecer y exigir tributos.",
        "C": "La resolución del recurso de inconstitucionalidad y la personación ante el Tribunal Constitucional, en los supuestos y términos previstos en la Constitución y en la Ley Orgánica del Tribunal Constitucional.",
        "D": "El conocimiento y control de los planes económicos."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 34,
      "enunciado": "La Ley Orgánica 3/1983, de 25 de febrero, es:",
      "opciones": {
        "A": "La Ley Orgánica del Poder Judicial",
        "B": "El Estatuto de Autonomía de la Comunidad de Madrid",
        "C": "La Ley Orgánica del Defensor del Pueblo",
        "D": "El Estatuto del Ministerio Fiscal"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 35,
      "enunciado": "Según el artículo 18 de la Ley del Gobierno y la Administración de la Comunidad de Madrid:",
      "opciones": {
        "A": "El Consejo de Gobierno es el órgano colegiado que dirige la política y la Administración de la Comunidad de Madrid. Ejerce la función legislativa, la potestad ejecutiva y la iniciativa reglamentaria, de conformidad con el Estatuto de Autonomía y con la Ley.",
        "B": "El Consejo de Gobierno es el órgano colegiado que dirige la política y la Administración de la Comunidad de Madrid. A tal fin, ejerce la iniciativa legislativa, la función ejecutiva y la función reglamentaria, de conformidad con  el Estatuto de Autonomía y con la Ley.",
        "C": "El Consejo de Gobierno es el órgano colegiado que dirige la política y la Administración de la Comunidad de Madrid. Ejerce la potestad legislativa, la función ejecutiva y la iniciativa reglamentaria.",
        "D": "El Consejo de Gobierno es el órgano colegiado que dirige la política y la administración de la Comunidad de Madrid. A tal fin, ejerce la iniciativa legislativa, la función ejecutiva y la potestad reglamentaria, de conformidad con el Estatuto de Autonomía y con la Ley."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 36,
      "enunciado": "Según el Art. 21 de la Ley de Gobierno y la Administración de la Comunidad de Madrid. Corresponde al Consejo de Gobierno:",
      "opciones": {
        "A": "Nombrar y separar de su cargo a los Consejeros, y, en su caso, al Vicepresidente o Vicepresidentes.",
        "B": "Ejecutar el Presupuesto de la Comunidad, tras su aprobación por la Asamblea.",
        "C": "Aprobar, a propuesta del Consejero respectivo, previo dictamen preceptivo de la Consejería de Presidencia, la estructura orgánica y plantilla orgánica de las diferentes Consejerías y la creación, modificación o supresión de las Subdirecciones Generales.",
        "D": "Decidir el nombramiento y cese de los cargos de la Administración autonómica con categoría igual o superior a Director General, previa propuesta del Presidente."
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 37,
      "enunciado": "De acuerdo con el artículo 86 de la Constitución, ¿cuánto tiempo tiene el Congreso de los Diputados debatir y votar un Decreto-Ley desde su promulgación?",
      "opciones": {
        "A": "Dentro de los treinta días siguientes a su promulgación.",
        "B": "Dentro de los veinte días siguientes a su promulgación.",
        "C": "Dentro de los quince días siguientes a su promulgación.",
        "D": "Dentro de los cuarenta días siguientes a su promulgación."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 38,
      "enunciado": "Indique cuál de las siguientes materias está reservada a Ley Orgánica:",
      "opciones": {
        "A": "El derecho de protección de la salud.",
        "B": "El derecho a la propiedad privada.",
        "C": "El derecho de asociación.",
        "D": "El derecho a la negociación colectiva."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 39,
      "enunciado": "En qué artículo de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas viene regulado la declaración de lesividad de actos anulables favorables al interesado:",
      "opciones": {
        "A": "Artículo 106.",
        "B": "Artículo 107.",
        "C": "Artículo 108.",
        "D": "Artículo 112."
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 40,
      "enunciado": "En el procedimiento para la exigencia de la responsabilidad patrimonial de las autoridades y personal al servicio de las Administraciones Públicas, conforme se estipula en el artículo 36 de la Ley 40/2015, del Régimen Jurídico del Sector Público, el plazo para la resolución por el órgano competente será de:",
      "opciones": {
        "A": "20 días.",
        "B": "15 días.",
        "C": "10 días.",
        "D": "5 días."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 41,
      "enunciado": "A tenor del artículo 2 de la Ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas, las Corporaciones de Derecho Público se regirán:",
      "opciones": {
        "A": "Por su normativa específica y exclusivamente cuando se especifique en la ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas.",
        "B": "Por lo establecido en la normativa específica.",
        "C": "Por lo establecido en la Ley del Procedimiento Administrativo Común de las Administraciones Públicas.",
        "D": "Por su normativa específica en el ejercicio de las funciones públicas que les hayan sido atribuidas por Ley o delegadas y supletoriamente por la presente Ley."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 42,
      "enunciado": "¿Cuál es el plazo que se establece, en el artículo 76 de la Ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas, en el que los interesados podrán presentar alegaciones y aportar documentos u otros elementos de juicio?:",
      "opciones": {
        "A": "En el plazo de quince días desde su notificación.",
        "B": "En el plazo de diez días desde su conocimiento.",
        "C": "En cualquier momento anterior al trámite de audiencia.",
        "D": "En todo momento."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 43,
      "enunciado": "No corresponden al orden jurisdiccional contencioso-administrativo, señale la respuesta incorrecta:",
      "opciones": {
        "A": "Las cuestiones expresamente atribuidas a los órdenes jurisdiccionales civil, penal y social, aunque estén relacionadas con la actividad de la Administración pública.",
        "B": "El recurso contencioso-disciplinario militar.",
        "C": "Los conflictos de jurisdicción entre los Juzgados y Tribunales y la Administración pública y los conflictos de atribuciones entre órganos de una misma Administración.",
        "D": "Los recursos directos o indirectos que se interpongan contra las Normas Forales fiscales de las Juntas Generales de los Territorios Históricos de Álava, Guipúzcoa y Vizcaya, que corresponderán, en exclusiva, al Tribunal Constitucional en los términos establecidos por la disposición adicional quinta de su Ley Orgánica”."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 44,
      "enunciado": "El emplazamiento a la Administración en el procedimiento de la Ley de Jurisdicción Contencioso administrativa se entenderá efectuado:",
      "opciones": {
        "A": "Con la remisión del expediente por la Administración.",
        "B": "Con la reclamación del expediente.",
        "C": "Con la notificación a la administración del recurso.",
        "D": "Con la admisión del recurso."
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 45,
      "enunciado": "De acuerdo con el artículo 11 de la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno, ¿cuál de los siguientes Principios técnicos a los que debe adecuarse el Portal de la Transparencia desarrollado por la Administración del Estado es incorrecto?:",
      "opciones": {
        "A": "Accesibilidad.",
        "B": "Reutilización.",
        "C": "Usabilidad.",
        "D": "Interoperabilidad."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 46,
      "enunciado": "Según dispone el artículo 34 de la Ley Orgánica 3/2018, de 5 de diciembre, los responsables y encargados del tratamiento deberán designar un delegado de protección de datos en los supuestos previstos en el artículo 37.1 del Reglamento (UE) 2016/679 y, en todo caso, cuando se trate de las siguientes entidades (señale la falsa):",
      "opciones": {
        "A": "Los establecimientos financieros de crédito.",
        "B": "Las federaciones deportivas cuando traten datos de menores de edad.",
        "C": "Las empresas de seguridad pública.",
        "D": "Los colegios profesionales y sus consejos generales."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 47,
      "enunciado": "¿Cuál de los siguientes tipos de contratos están excluidos del ámbito de la Ley 9/2017, de contratos del sector público?",
      "opciones": {
        "A": "Contrato concesión de obras.",
        "B": "Contrato de suministros.",
        "C": "Contrato de servicios.",
        "D": "Contrato relativo a servicios de arbitraje y conciliación."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 48,
      "enunciado": "La Ley 9/2017, de contratos del Sector Público, tiene por objeto regular la contratación del sector público, a fin de garantizar que la misma se ajusta a los principios de:",
      "opciones": {
        "A": "Publicidad, transparencia, eficacia y eficiencia en la contratación pública.",
        "B": "Eficacia y eficiencia en la contratación.",
        "C": "No discriminación e igualdad de trato entre los licitadores y coordinación entre las Administraciones Públicas.",
        "D": "Libertad de acceso a las licitaciones, publicidad y transparencia de los procedimientos, y no discriminación e igualdad de trato entre los licitadores."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 49,
      "enunciado": "Según el Art. 94 del TREBEP: La potestad disciplinaria se ejercerá de acuerdo con los siguientes principios: (señale la incorrecta)",
      "opciones": {
        "A": "Principio de irretroactividad de las disposiciones sancionadoras favorables y de la retroactividad de las no favorables al presunto infractor.",
        "B": "Principio de culpabilidad.",
        "C": "Principio de presunción de inocencia.",
        "D": "Principio de legalidad y tipicidad de las faltas y sanciones, a través de la predeterminación normativa o, en el caso del personal laboral, de los convenios colectivos."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 50,
      "enunciado": "Según el Art. 5 de la Ley 1/1986, de 10 de abril de la Función Pública de la Comunidad de Madrid. El personal de la Comunidad de Madrid se integra por: (señale la incorrecta)",
      "opciones": {
        "A": "Los funcionarios de carrera.",
        "B": "El personal laboral.",
        "C": "Los funcionarios interinos.",
        "D": "El personal al servicio de la Asamblea de Madrid."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 51,
      "enunciado": "Según el artículo 213.4 del Real Decreto Legislativo 8/2015, de 30 de octubre: El percibo de la pensión de jubilación será compatible con la realización de trabajos por cuenta propia cuyos ingresos anuales totales:",
      "opciones": {
        "A": "Siempre que no superen el 75% del salario mínimo interprofesional, en cómputo anual.",
        "B": "Siempre que no superen el salario mínimo interprofesional, en cómputo anual.",
        "C": "No es compatible en ningún caso.",
        "D": "Ninguna es correcta."
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 52,
      "enunciado": "Respecto a la afiliación de la Seguridad Social, señale la afirmación correcta:",
      "opciones": {
        "A": "Es obligatoria y deberá renovarse cada vez que la persona cambie de régimen.",
        "B": "No puede practicarse de oficio.",
        "C": "El obligatoria y única para toda la vida de las personas y para todo el sistema.",
        "D": "Deberá renovarse cuando el trabajador pase de prestación por cuenta ajena a cuenta propia."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 53,
      "enunciado": "Señala la afirmación correcta según la Ley 9/1990, de 8 de noviembre en su artículo 9:",
      "opciones": {
        "A": "La Consejería de Hacienda es el órgano superior de la Administración de la Comunidad en materias objeto de esta Ley.",
        "B": "La concesión de créditos extraordinarios y suplementos de crédito, se regirá por lo establecido en el artículo 12 de la Ley Orgánica de Financiación de las Comunidades Autónomas.",
        "C": "Velar por la elaboración del anteproyecto de Ley de Presupuestos de la Comunidad para su aprobación.",
        "D": "Las sociedades mercantiles, las entidades de derecho público con personalidad jurídica propia y las empresas públicas se coordinarán con la Administración de Hacienda de acuerdo con los términos previstos en esta Ley."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 54,
      "enunciado": "Según el artículo 13 de Ley 9/1990, de 8 de noviembre, La Tesorería, gestionada bajo criterios de seguridad, rentabilidad y liquidez, se inspira en:",
      "opciones": {
        "A": "El principio de máximo rendimiento de sus propios ingresos.",
        "B": "En los principios de legalidad, solidaridad, universalidad and constitucionalidad.",
        "C": "El principio de caja única.",
        "D": "Los principios de equidad, productividad y transparencia."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 55,
      "enunciado": "Según la Ley Orgánica 1/2004, en el ámbito de la publicidad y de los medios de comunicación, indica la respuesta verdadera:",
      "opciones": {
        "A": "La Administración pública promoverá acuerdos de autorregulación que, contando con mecanismos de control preventivo y de resolución extrajudicial de controversias eficaces, contribuyan al cumplimiento de la legislación publicitaria.",
        "B": "De acuerdo con lo establecido en la Ley General de Publicidad, se considerará ilícita la publicidad que utilice la imagen de la mujer.",
        "C": "El Ente público le corresponda velar para que los medios audiovisuales cumplan sus obligaciones constitucionales, con respecto a la imagen de la mujer, sin perjuicio de las posibles actuaciones por parte de otras entidades.",
        "D": "La Delegación Especial del Gobierno contra la Violencia sobre la Mujer, el instituto de la Mujer u órgano equivalente de cada Comunidad Autónoma, el Ministerio Fiscal y las Asociaciones tendrán como objetivo velar por la defensa de la imagen de las mujeres."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 56,
      "enunciado": "La Ley 3/2016, de 22 de julio, según su artículo 4, señala uno de los principios fundamentales que regirán la actuación de las personas físicas o jurídicas, públicas o privadas incluidas en su ámbito de aplicación:",
      "opciones": {
        "A": "Se garantizará protección efectiva frente a cualquier acto de violencia o agresión contra la vida a las mujeres de los Cuerpos y Fuerzas de Seguridad del Estado.",
        "B": "Todas las personas tienen derecho a la privacidad. Se adoptarán las medidas administrativas necesarias a fin de garantizar que las mencionadas personas puedan acceder a cualquier prestación privada.",
        "C": "Las Administraciones públicas de la Comunidad de Madrid, promoverán políticas para el fomento de la igualdad, la visibilidad y la no discriminación por motivos de orientación sexual de las mujeres.",
        "D": "Derecho a recursos y resarcimientos efectivos: se garantizará a las personas LGTBl, la reparación de sus derechos violados por motivo de orientación sexual o identidad de género."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 57,
      "enunciado": "De acuerdo con el artículo 9 del Decreto 21/2002, de 24 enero, por el que se regula la atención al ciudadano en la Comunidad de Madrid: La información particular:",
      "opciones": {
        "A": "Es la que se refiere al estado o contenido de los procedimientos en tramitación.",
        "B": "Es la relativa a la identificación, fines, competencia y estructura, funcionamiento y localización de organismos y unidades administrativas.",
        "C": "Es la que se facilitará obligatoriamente a los ciudadanos sin exigir para ello la acreditación de legitimación.",
        "D": "Es la información de carácter general que deberá ofrecerse a los grupos sociales o instituciones que estén interesadas en su conocimiento."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 58,
      "enunciado": "De acuerdo con el art. 16 del Decreto 21/2002 de 24 de enero, por el que se regula la atención al ciudadano de la Comunidad de Madrid, los ciudadanos pueden presentar solicitudes, escritos y comunicaciones dirigidos a la Administración de la Comunidad de Madrid:",
      "opciones": {
        "A": "En los Registros de cualquier órgano administrativo perteneciente a la Administración del Estado y las demás Comunidades autónomas.",
        "B": "En las oficinas de correos, en la forma establecida reglamentariamente.",
        "C": "En las representaciones diplomática u oficinas consulares de España en el extranjero.",
        "D": "Todas las opciones son correctas."
      },
      "respuesta_correcta": "D"
    },
    {
      "numero": 59,
      "enunciado": "Documentos presentados por los ciudadanos en los que éstos impugnan un acto administrativo que afecta a sus derechos o intereses legítimos, solicitando su anulación por considerar que incurre en algún defecto que lo hace objeto de nulidad o anulabilidad, es la definición de:",
      "opciones": {
        "A": "Recurso",
        "B": "Petición",
        "C": "Alegaciones",
        "D": "Solicitud"
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 60,
      "enunciado": "Según la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, el acto por el que cualquier persona, en cumplimiento o no de una obligación legal, pone en conocimiento de un órgano administrativo la existencia de un determinado hecho que pudiera justificar la iniciación de oficio de un procedimiento administrativo, es la definición de:",
      "opciones": {
        "A": "Queja",
        "B": "Denuncia",
        "C": "Reclamación",
        "D": "Solicitud"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 61,
      "enunciado": "Señala la respuesta incorrecta. La Asamblea legislativa de la Comunidad de Madrid:",
      "opciones": {
        "A": "Representa al pueblo de Madrid",
        "B": "Ejerce la potestad ejecutiva de la Comunidad",
        "C": "Aprueba y controla el Presupuesto de la Comunidad, impulsa, orienta y controla la acción del Gobierno",
        "D": "Ejerce las demás competencias que le atribuyen la Constitución, el presente Estatuto y el resto del ordenamiento jurídico"
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 62,
      "enunciado": "Si el informe debiera ser emitido por una Administración Pública distinta de la que tramita el procedimiento en orden a expresar el punto de vista correspondiente a sus competencias respectivas, y transcurriera el plazo sin que se hubiera emitido dicho informe:",
      "opciones": {
        "A": "Se podrán proseguir las actuaciones.",
        "B": "Se suspenderá el procedimiento.",
        "C": "Se podrá proseguir con las actuaciones cuando el informe sea preceptivo.",
        "D": "Se podrá ampliar el plazo para emitir el informe hasta 5 días más."
      },
      "respuesta_correcta": "A"
    },
    {
      "numero": 63,
      "enunciado": "Conforme al art. 19.2 del Real Decreto Legislativo 8/2015, de 30 de octubre, las bases de cotización a la Seguridad Social, en cada uno de sus regímenes, tendrán los siguientes topes:",
      "opciones": {
        "A": "Como tope mínimo las cuantías fijadas para cada año por la correspondiente Ley de Presupuesto Generales del Estado.",
        "B": "Como tope máximo las cuantías del salario mínimo interprofesional vigente en cada momento, incrementadas en un sexto.",
        "C": "Tendrán como tope máximo las cuantías fijadas para cada año por la correspondiente Ley de Presupuestos General del Estado y como tope mínimo las cuantías del salario mínimo interprofesional vigente en cada momento, incrementadas en un sexto, salvo disposición expresa en contrario.",
        "D": "Ninguna es correcta."
      },
      "respuesta_correcta": "C"
    },
    {
      "numero": 64,
      "enunciado": "La Ley 3/2016, de 22 de julio, según su artículo 11 nos habla de acción positiva y nos dice que:",
      "opciones": {
        "A": "La Comunidad de Madrid promoverá acciones formativas, divulgativas y, en general, acciones positivas que posibiliten la plena inclusión y participación de todos los ámbitos de la sociedad civil. Todo ello sin perjuicio de que otras normas de rango autonómico establezcan condiciones más favorables.",
        "B": "Las Administraciones públicas madrileñas, en todos y cada uno de los casos en que participen, obrarán teniendo en cuenta que las personas deben ser tratadas de acuerdo con la identidad de género sentida.",
        "C": "La Comunidad de Madrid adoptará medidas de acción positiva e impulsarán políticas de fomento de la igualdad de trato en las relaciones entre las personas.",
        "D": "Al objeto de hacer efectivas las disposiciones contenidas en esta Ley, la Comunidad de Madrid elaborará los indicadores que permitan el conocimiento de las causas y efectos de la discriminación."
      },
      "respuesta_correcta": "B"
    },
    {
      "numero": 65,
      "enunciado": "¿Cómo se denomina el Título II de la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno?",
      "opciones": {
        "A": "Régimen general.",
        "B": "Consejo de Transparencia y Buen Gobierno.",
        "C": "Buen Gobierno.",
        "D": "Transparencia de la actividad pública."
      },
      "respuesta_correcta": "C"
    }
  ]
};

export const madrid2025Test: SeedExam = {
    fileName: rawMadrid2025Test.titulo,
    category: "madrid",
    questions: rawMadrid2025Test.preguntas.map(q => {
        const options = Object.values(q.opciones);
        // Remove empty strings from options if they exist
        const filteredOptions = options.filter(opt => typeof opt === 'string' && opt.trim() !== '');
        while (filteredOptions.length < 4) {
          filteredOptions.push("N/A"); // Pad with N/A if less than 4 options
        }
        return {
            questionText: q.enunciado,
            options: filteredOptions as [string, string, string, string],
            correctAnswerIndex: optionMap[q.respuesta_correcta],
        };
    })
};
