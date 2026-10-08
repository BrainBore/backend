const { Client } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:123@localhost:5432/usuarios';

const client = new Client({ connectionString: DATABASE_URL });

async function seedPregradoData() {
  await client.connect();
  console.log('--- Conectado a PostgreSQL ---');

  // 1. Verificar conteos iniciales
  const initSecciones = await client.query('SELECT COUNT(*) FROM seccion_pagina');
  const initDocentes = await client.query('SELECT COUNT(*) FROM docente');
  const initAdmin = await client.query('SELECT COUNT(*) FROM administrativo');
  const initAux = await client.query('SELECT COUNT(*) FROM auxiliar');
  const initAut = await client.query('SELECT COUNT(*) FROM estudiante_autoridad');
  const initConv = await client.query('SELECT COUNT(*) FROM convenio');

  console.log('\nConteos iniciales:');
  console.log(`seccion_pagina: ${initSecciones.rows[0].count}`);
  console.log(`docente: ${initDocentes.rows[0].count}`);
  console.log(`administrativo: ${initAdmin.rows[0].count}`);
  console.log(`auxiliar: ${initAux.rows[0].count}`);
  console.log(`estudiante_autoridad: ${initAut.rows[0].count}`);
  console.log(`convenio: ${initConv.rows[0].count}`);

  // 2. Sembrar PLAN_ESTUDIOS (Plan Antiguo y Plan Nuevo)
  console.log('\nSembrando PLAN_ESTUDIOS...');
  await client.query(`
    INSERT INTO plan_estudios ("Id_plan_estudio", "nombre_plan")
    VALUES 
      (1, 'Plan Antiguo'),
      (2, 'Plan Nuevo')
    ON CONFLICT ("Id_plan_estudio") DO UPDATE
    SET "nombre_plan" = EXCLUDED."nombre_plan"
  `);

  // Ajustar secuencia de plan_estudios
  await client.query(`SELECT setval(pg_get_serial_sequence('plan_estudios', 'Id_plan_estudio'), (SELECT MAX("Id_plan_estudio") FROM plan_estudios))`);

  // 3. Sembrar MATERIA_PREGRADO
  console.log('Sembrando MATERIA_PREGRADO e INCLUYE...');
  const materias = [
    // --- Semestre 1 (Ciclo Básico) ---
    { id: 1, sigla: 'INF-111', nombre: 'Programación I', horas: 200, pre: 'Ninguno', sem: 1, planes: [1, 2] },
    { id: 2, sigla: 'LAB-111', nombre: 'Laboratorio de Programación I', horas: 240, pre: 'Ninguno', sem: 1, planes: [1, 2] },
    { id: 3, sigla: 'MAT-130', nombre: 'Álgebra', horas: 200, pre: 'Ninguno', sem: 1, planes: [1, 2] },
    { id: 4, sigla: 'MAT-132', nombre: 'Cálculo I', horas: 200, pre: 'Ninguno', sem: 1, planes: [1, 2] },
    { id: 5, sigla: 'EST-113', nombre: 'Estadística Descriptiva', horas: 240, pre: 'Ninguno', sem: 1, planes: [2] },
    { id: 6, sigla: 'LIN-116', nombre: 'Inglés I', horas: 120, pre: 'Ninguno', sem: 1, planes: [1, 2] },
    { id: 7, sigla: 'EST-130', nombre: 'Estadística General', horas: 240, pre: 'Ninguno', sem: 1, planes: [1] },

    // --- Semestre 2 (Ciclo Básico) ---
    { id: 8, sigla: 'EST-122', nombre: 'Computación Estadística I', horas: 240, pre: 'INF-111, LAB-111', sem: 2, planes: [2] },
    { id: 9, sigla: 'EST-124', nombre: 'Diseño y Proc. Estadístico I', horas: 240, pre: 'EST-113', sem: 2, planes: [2] },
    { id: 10, sigla: 'MAT-136', nombre: 'Álgebra Lineal', horas: 200, pre: 'MAT-130', sem: 2, planes: [1, 2] },
    { id: 11, sigla: 'MAT-134', nombre: 'Cálculo II', horas: 200, pre: 'MAT-132', sem: 2, planes: [1, 2] },
    { id: 12, sigla: 'EST-123', nombre: 'Probabilidad I', horas: 200, pre: 'MAT-132', sem: 2, planes: [2] },
    { id: 13, sigla: 'LIN-117', nombre: 'Inglés II', horas: 120, pre: 'LIN-116', sem: 2, planes: [1, 2] },
    { id: 14, sigla: 'INF-121', nombre: 'Programación II', horas: 240, pre: 'INF-111, LAB-111', sem: 2, planes: [1] },
    { id: 15, sigla: 'EST-133', nombre: 'Probabilidad I (Antiguo)', horas: 200, pre: 'MAT-132', sem: 2, planes: [1] },

    // --- Semestre 3 (Ciclo de Formación) ---
    { id: 16, sigla: 'MAT-274', nombre: 'Ecuaciones Diferenciales', horas: 200, pre: 'MAT-134', sem: 3, planes: [1, 2] },
    { id: 17, sigla: 'EST-233', nombre: 'Probabilidad II', horas: 280, pre: 'EST-123', sem: 3, planes: [1, 2] },
    { id: 18, sigla: 'EST-231', nombre: 'Análisis Matricial Estadístico', horas: 240, pre: 'MAT-136', sem: 3, planes: [2] },
    { id: 19, sigla: 'EST-235', nombre: 'Inferencia Estadística I', horas: 240, pre: 'EST-123', sem: 3, planes: [2] },
    { id: 20, sigla: 'EST-232', nombre: 'Demografía', horas: 240, pre: 'EST-123', sem: 3, planes: [1, 2] },
    { id: 21, sigla: 'EST-230', nombre: 'Bases de Datos', horas: 200, pre: 'INF-121', sem: 3, planes: [1] },

    // --- Semestre 4 (Ciclo de Formación) ---
    { id: 22, sigla: 'EST-240', nombre: 'Teoría de Probabilidad I', horas: 240, pre: 'EST-233', sem: 4, planes: [2] },
    { id: 23, sigla: 'EST-241', nombre: 'Estadística no Paramétrica', horas: 240, pre: 'EST-235', sem: 4, planes: [2] },
    { id: 24, sigla: 'EST-242', nombre: 'Investigación Operativa I', horas: 240, pre: 'EST-231', sem: 4, planes: [1, 2] },
    { id: 25, sigla: 'EST-243', nombre: 'Inferencia Estadística II', horas: 240, pre: 'EST-235', sem: 4, planes: [2] },
    { id: 26, sigla: 'EST-244', nombre: 'Muestreo I', horas: 240, pre: 'EST-235', sem: 4, planes: [2] },
    { id: 27, sigla: 'EST-225', nombre: 'Estadística Matemática I', horas: 240, pre: 'EST-233', sem: 4, planes: [1] },
    { id: 28, sigla: 'EST-250', nombre: 'Muestreo I (Antiguo)', horas: 240, pre: 'EST-225', sem: 4, planes: [1] },

    // --- Semestre 5 (Ciclo Profesional) ---
    { id: 29, sigla: 'EST-354', nombre: 'Muestreo II', horas: 240, pre: 'EST-244', sem: 5, planes: [2] },
    { id: 30, sigla: 'EST-355', nombre: 'Procesos Estocásticos', horas: 240, pre: 'EST-240', sem: 5, planes: [1, 2] },
    { id: 31, sigla: 'EST-352', nombre: 'Investigación Operativa II', horas: 240, pre: 'EST-242', sem: 5, planes: [1, 2] },
    { id: 32, sigla: 'EST-353', nombre: 'Modelos Lineales I', horas: 240, pre: 'EST-243', sem: 5, planes: [2] },
    { id: 33, sigla: 'EST-351', nombre: 'Computación Estadística II', horas: 240, pre: 'EST-122', sem: 5, planes: [2] },
    { id: 34, sigla: 'EST-330', nombre: 'Modelos Lineales (Antiguo)', horas: 240, pre: 'EST-225', sem: 5, planes: [1] },
    { id: 35, sigla: 'EST-350', nombre: 'Muestreo II (Antiguo)', horas: 240, pre: 'EST-250', sem: 5, planes: [1] },

    // --- Semestre 6 (Ciclo Profesional) ---
    { id: 36, sigla: 'EST-362', nombre: 'Estadística Computacional', horas: 240, pre: 'EST-351, EST-354', sem: 6, planes: [2] },
    { id: 37, sigla: 'EST-365', nombre: 'Métodos Multivariados I', horas: 240, pre: 'EST-353', sem: 6, planes: [2] },
    { id: 38, sigla: 'EST-367', nombre: 'Series Tiempo Univariante', horas: 240, pre: 'EST-355', sem: 6, planes: [2] },
    { id: 39, sigla: 'EST-368', nombre: 'Metodología de Investigación', horas: 240, pre: 'EST-354', sem: 6, planes: [1, 2] },
    { id: 40, sigla: 'EST-366', nombre: 'Estadística Bayesiana I', horas: 240, pre: 'EST-243', sem: 6, planes: [2] },
    { id: 41, sigla: 'EST-335', nombre: 'Métodos Multivariados I (Antiguo)', horas: 240, pre: 'EST-330', sem: 6, planes: [1] },
    { id: 42, sigla: 'EST-376', nombre: 'Estadística Bayesiana (Antiguo)', horas: 240, pre: 'EST-225', sem: 6, planes: [1] },

    // --- Semestre 7 (Ciclo Profesional) ---
    { id: 43, sigla: 'EST-373', nombre: 'Diseño de Experimentos', horas: 240, pre: 'EST-353', sem: 7, planes: [1, 2] },
    { id: 44, sigla: 'EST-375', nombre: 'Métodos Multivariados II', horas: 240, pre: 'EST-365', sem: 7, planes: [1, 2] },
    { id: 45, sigla: 'EST-374', nombre: 'Análisis de Datos Categóricos', horas: 240, pre: 'EST-353', sem: 7, planes: [2] },
    { id: 46, sigla: 'EST-372', nombre: 'Análisis de Datos Masivo I', horas: 280, pre: 'EST-365', sem: 7, planes: [2] },
    { id: 47, sigla: 'OPT-101', nombre: 'Optativa I', horas: 200, pre: 'Hasta 6° Semestre', sem: 7, planes: [1, 2] },

    // --- Semestre 8 (Ciclo de Titulación) ---
    { id: 48, sigla: 'EST-381', nombre: 'Minería de Datos', horas: 280, pre: 'EST-372', sem: 8, planes: [2] },
    { id: 49, sigla: 'EST-389', nombre: 'Taller de Titulación', horas: 520, pre: 'Hasta 7° Semestre', sem: 8, planes: [1, 2] },
    { id: 50, sigla: 'OPT-201', nombre: 'Optativa II', horas: 200, pre: 'Hasta 7° Semestre', sem: 8, planes: [1, 2] },
    { id: 51, sigla: 'OPT-301', nombre: 'Optativa III', horas: 200, pre: 'Hasta 7° Semestre', sem: 8, planes: [1, 2] },
  ];

  for (const m of materias) {
    await client.query(`
      INSERT INTO materia_pregrado ("Id_materia_act", "sigla_materia_act", "nombre_materia_act", "horas_materia", "prerrequisitos", "semestre")
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT ("Id_materia_act") DO UPDATE
      SET "sigla_materia_act" = EXCLUDED."sigla_materia_act",
          "nombre_materia_act" = EXCLUDED."nombre_materia_act",
          "horas_materia" = EXCLUDED."horas_materia",
          "prerrequisitos" = EXCLUDED."prerrequisitos",
          "semestre" = EXCLUDED."semestre"
    `, [m.id, m.sigla, m.nombre, m.horas, m.pre, m.sem]);

    for (const planId of m.planes) {
      await client.query(`
        INSERT INTO incluye ("Id_plan_estudio", "Id_materia_act")
        VALUES ($1, $2)
        ON CONFLICT ("Id_plan_estudio", "Id_materia_act") DO NOTHING
      `, [planId, m.id]);
    }
  }

  await client.query(`SELECT setval(pg_get_serial_sequence('materia_pregrado', 'Id_materia_act'), (SELECT MAX("Id_materia_act") FROM materia_pregrado))`);

  // 4. Sembrar CONVALIDA
  console.log('Sembrando CONVALIDA...');
  const convalidaciones = [
    { idMateriaAct: 1, idMateriaAntigua: 1, siglaAnt: 'INF-111', nombreAnt: 'Programación I' },
    { idMateriaAct: 2, idMateriaAntigua: 2, siglaAnt: 'LAB-111', nombreAnt: 'Laboratorio de Programación I' },
    { idMateriaAct: 3, idMateriaAntigua: 3, siglaAnt: 'MAT-130', nombreAnt: 'Álgebra' },
    { idMateriaAct: 4, idMateriaAntigua: 4, siglaAnt: 'MAT-132', nombreAnt: 'Cálculo I' },
    { idMateriaAct: 5, idMateriaAntigua: 7, siglaAnt: 'EST-130', nombreAnt: 'Estadística General' },
    { idMateriaAct: 6, idMateriaAntigua: 6, siglaAnt: 'LIN-116', nombreAnt: 'Inglés I' },
    { idMateriaAct: 8, idMateriaAntigua: 14, siglaAnt: 'INF-121', nombreAnt: 'Programación II' },
    { idMateriaAct: 10, idMateriaAntigua: 10, siglaAnt: 'MAT-136', nombreAnt: 'Álgebra Lineal' },
    { idMateriaAct: 11, idMateriaAntigua: 11, siglaAnt: 'MAT-134', nombreAnt: 'Cálculo II' },
    { idMateriaAct: 12, idMateriaAntigua: 15, siglaAnt: 'EST-133', nombreAnt: 'Probabilidad I' },
    { idMateriaAct: 13, idMateriaAntigua: 13, siglaAnt: 'LIN-117', nombreAnt: 'Inglés II' },
    { idMateriaAct: 16, idMateriaAntigua: 16, siglaAnt: 'MAT-274', nombreAnt: 'Cálculo III' },
    { idMateriaAct: 17, idMateriaAntigua: 17, siglaAnt: 'EST-233', nombreAnt: 'Probabilidad II' },
    { idMateriaAct: 19, idMateriaAntigua: 27, siglaAnt: 'EST-225', nombreAnt: 'Estadística Matemática I' },
    { idMateriaAct: 24, idMateriaAntigua: 24, siglaAnt: 'EST-216', nombreAnt: 'Investigación Operativa I' },
    { idMateriaAct: 26, idMateriaAntigua: 28, siglaAnt: 'EST-250', nombreAnt: 'Muestreo I' },
    { idMateriaAct: 29, idMateriaAntigua: 35, siglaAnt: 'EST-350', nombreAnt: 'Muestreo II' },
    { idMateriaAct: 30, idMateriaAntigua: 30, siglaAnt: 'EST-315', nombreAnt: 'Procesos Estocásticos' },
    { idMateriaAct: 31, idMateriaAntigua: 31, siglaAnt: 'EST-310', nombreAnt: 'Investigación Operativa II' },
    { idMateriaAct: 32, idMateriaAntigua: 34, siglaAnt: 'EST-330', nombreAnt: 'Modelos Lineales' },
    { idMateriaAct: 37, idMateriaAntigua: 41, siglaAnt: 'EST-335', nombreAnt: 'Métodos Multivariados I' },
    { idMateriaAct: 40, idMateriaAntigua: 42, siglaAnt: 'EST-376', nombreAnt: 'Estadística Bayesiana' },
    { idMateriaAct: 43, idMateriaAntigua: 43, siglaAnt: 'EST-373', nombreAnt: 'Diseño de Experimentos' },
    { idMateriaAct: 44, idMateriaAntigua: 44, siglaAnt: 'EST-375', nombreAnt: 'Métodos Multivariados II' },
    { idMateriaAct: 49, idMateriaAntigua: 49, siglaAnt: 'EST-389', nombreAnt: 'Taller de Titulación' },
  ];

  for (const c of convalidaciones) {
    await client.query(`
      INSERT INTO convalida ("Id_materia_act", "Id_materia_antigua", "nombre_materia_antigua", "sigla_materia_antigua")
      VALUES ($1, $2, $3, $4)
      ON CONFLICT ("Id_materia_act") DO UPDATE
      SET "Id_materia_antigua" = EXCLUDED."Id_materia_antigua",
          "nombre_materia_antigua" = EXCLUDED."nombre_materia_antigua",
          "sigla_materia_antigua" = EXCLUDED."sigla_materia_antigua"
    `, [c.idMateriaAct, c.idMateriaAntigua, c.nombreAnt, c.siglaAnt]);
  }

  // 5. Sembrar CONVOCATORIA
  console.log('Sembrando CONVOCATORIA...');
  const convocatorias = [
    {
      id: 1,
      periodo: 'Gestión 2026 - Primer Semestre',
      desc: 'Convocatoria oficial para el ingreso a la Carrera de Estadística mediante Prueba de Suficiencia Académica (PSA) y Curso Preuniversitario (Pre-U) de la FCPN.',
      insPreu: 'Agosto - Septiembre (año previo)',
      insPsa: 'Noviembre - Diciembre (año previo)',
      fechaDocs: '2026-02-15',
      matriculacion: 'Finales de Febrero 2026 en Kárdex Académico'
    },
    {
      id: 2,
      periodo: 'Gestión 2026 - Segundo Semestre',
      desc: 'Convocatoria de admisión regular para el segundo periodo académico semestral de la gestión 2026.',
      insPreu: 'Mayo - Junio 2026',
      insPsa: 'Junio - Julio 2026',
      fechaDocs: '2026-07-20',
      matriculacion: 'Primeros días de Agosto 2026 en Kárdex Académico'
    }
  ];

  for (const conv of convocatorias) {
    await client.query(`
      INSERT INTO convocatoria ("Id_convocatoria", "periodo_convocatoria", "desc_convocatoria", "ins_preu", "ins_psa", "fecha_entrega_docs", "matriculacion_kardex")
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      ON CONFLICT ("Id_convocatoria") DO UPDATE
      SET "periodo_convocatoria" = EXCLUDED."periodo_convocatoria",
          "desc_convocatoria" = EXCLUDED."desc_convocatoria",
          "ins_preu" = EXCLUDED."ins_preu",
          "ins_psa" = EXCLUDED."ins_psa",
          "fecha_entrega_docs" = EXCLUDED."fecha_entrega_docs",
          "matriculacion_kardex" = EXCLUDED."matriculacion_kardex"
    `, [conv.id, conv.periodo, conv.desc, conv.insPreu, conv.insPsa, conv.fechaDocs, conv.matriculacion]);
  }

  await client.query(`SELECT setval(pg_get_serial_sequence('convocatoria', 'Id_convocatoria'), (SELECT MAX("Id_convocatoria") FROM convocatoria))`);

  // 6. Sembrar SECCION_PAGINA para Pregrado (solo textos e imágenes, sin tocar existentes)
  console.log('Sembrando SECCION_PAGINA para Pregrado...');
  const pregradoSections = [
    // --- /pregrado/perfil-profesional ---
    { clave_campo: 'perfil_hero_etiqueta', pagina_slug: '/pregrado/perfil-profesional', valor: 'Carrera de Licenciatura · UMSA', tipo: 'texto' },
    { clave_campo: 'perfil_hero_titulo_01', pagina_slug: '/pregrado/perfil-profesional', valor: 'Forjando los líderes', tipo: 'texto' },
    { clave_campo: 'perfil_hero_titulo_02', pagina_slug: '/pregrado/perfil-profesional', valor: 'del análisis de datos', tipo: 'texto' },
    { clave_campo: 'perfil_hero_titulo_03', pagina_slug: '/pregrado/perfil-profesional', valor: 'en Bolivia.', tipo: 'texto' },
    { clave_campo: 'perfil_hero_descripcion', pagina_slug: '/pregrado/perfil-profesional', valor: 'La incertidumbre es el caos; la estadística es la ley que lo gobierna. Únete a una formación científica con enfoque cuantitativo, tecnológico y ético.', tipo: 'texto' },
    { clave_campo: 'perfil_hero_imagen', pagina_slug: '/pregrado/perfil-profesional', valor: '/images/pregrado/pregrado_hero.jpg', tipo: 'imagen' },
    { clave_campo: 'perfil_hero_cta_principal', pagina_slug: '/pregrado/perfil-profesional', valor: 'Ver plan de estudios', tipo: 'texto' },
    { clave_campo: 'perfil_hero_cta_secundario', pagina_slug: '/pregrado/perfil-profesional', valor: 'Perfil del postulante', tipo: 'texto' },

    // Vocación y Aptitudes (tomado como textos según instrucción del usuario)
    { clave_campo: 'perfil_aptitud_etiqueta', pagina_slug: '/pregrado/perfil-profesional', valor: 'Aptitud', tipo: 'texto' },
    { clave_campo: 'perfil_aptitud_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Vocación y Aptitudes', tipo: 'texto' },
    { clave_campo: 'perfil_aptitud_subtitulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Buscamos mentes inquietas con base ética, curiosidad intelectual y capacidad para resolver problemas lógicos en escenarios reales.', tipo: 'texto' },
    { clave_campo: 'perfil_aptitud_card_01_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Razonamiento Analítico', tipo: 'texto' },
    { clave_campo: 'perfil_aptitud_card_01_desc', pagina_slug: '/pregrado/perfil-profesional', valor: 'Inclinación por matemáticas, abstracción y comprensión de fenómenos aleatorios.', tipo: 'texto' },
    { clave_campo: 'perfil_aptitud_card_02_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'DNA Tecnológico', tipo: 'texto' },
    { clave_campo: 'perfil_aptitud_card_02_desc', pagina_slug: '/pregrado/perfil-profesional', valor: 'Interés en programación, automatización y software especializado para analítica.', tipo: 'texto' },
    { clave_campo: 'perfil_aptitud_card_03_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Visión Interdisciplinaria', tipo: 'texto' },
    { clave_campo: 'perfil_aptitud_card_03_desc', pagina_slug: '/pregrado/perfil-profesional', valor: 'Capacidad para traducir necesidades reales a modelos cuantitativos robustos.', tipo: 'texto' },
    { clave_campo: 'perfil_aptitud_card_04_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Compromiso Ético', tipo: 'texto' },
    { clave_campo: 'perfil_aptitud_card_04_desc', pagina_slug: '/pregrado/perfil-profesional', valor: 'Responsabilidad y cuidado en el manejo de información sensible y datos públicos.', tipo: 'texto' },

    // Competencias del Egresado
    { clave_campo: 'perfil_competencias_etiqueta', pagina_slug: '/pregrado/perfil-profesional', valor: 'Excelencia', tipo: 'texto' },
    { clave_campo: 'perfil_competencias_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Competencias del Egresado', tipo: 'texto' },
    { clave_campo: 'perfil_competencias_subtitulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Formación rigurosa para liderar la ciencia de datos en sectores estratégicos de Bolivia.', tipo: 'texto' },
    { clave_campo: 'perfil_competencias_grado_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Licenciado en Estadística', tipo: 'texto' },
    { clave_campo: 'perfil_competencias_grado_subtitulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Acreditación nacional vigente', tipo: 'texto' },

    // Salidas Laborales (como textos según instrucción)
    { clave_campo: 'perfil_salidas_etiqueta', pagina_slug: '/pregrado/perfil-profesional', valor: 'Proyección', tipo: 'texto' },
    { clave_campo: 'perfil_salidas_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Salidas Laborales', tipo: 'texto' },
    { clave_campo: 'perfil_salidas_subtitulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Nuestros graduados ocupan puestos de decisión en la economía del dato.', tipo: 'texto' },
    { clave_campo: 'perfil_salidas_destacado_badge', pagina_slug: '/pregrado/perfil-profesional', valor: 'Más demandado', tipo: 'texto' },
    { clave_campo: 'perfil_salidas_destacado_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Científico de Datos', tipo: 'texto' },
    { clave_campo: 'perfil_salidas_destacado_subtitulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Data Scientist', tipo: 'texto' },
    { clave_campo: 'perfil_salidas_destacado_desc', pagina_slug: '/pregrado/perfil-profesional', valor: 'Optimiza procesamientos y predice tendencias con analítica avanzada, modelos estadísticos e IA aplicada.', tipo: 'texto' },
    { clave_campo: 'perfil_salidas_card_01_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Consultor Actuarial', tipo: 'texto' },
    { clave_campo: 'perfil_salidas_card_01_desc', pagina_slug: '/pregrado/perfil-profesional', valor: 'Seguros, pensiones y modelos de riesgo financiero.', tipo: 'texto' },
    { clave_campo: 'perfil_salidas_card_02_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Investigador Senior', tipo: 'texto' },
    { clave_campo: 'perfil_salidas_card_02_desc', pagina_slug: '/pregrado/perfil-profesional', valor: 'Especialista en demografía y diseño de experimentos sociales.', tipo: 'texto' },
    { clave_campo: 'perfil_salidas_card_03_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Líder Estratégico', tipo: 'texto' },
    { clave_campo: 'perfil_salidas_card_03_desc', pagina_slug: '/pregrado/perfil-profesional', valor: 'Dirección de estadística en corporaciones, banca y entidades de gobierno.', tipo: 'texto' },

    // Campo Ocupacional (como textos)
    { clave_campo: 'perfil_campo_etiqueta', pagina_slug: '/pregrado/perfil-profesional', valor: 'Ubicación', tipo: 'texto' },
    { clave_campo: 'perfil_campo_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: 'Campo Ocupacional', tipo: 'texto' },
    { clave_campo: 'perfil_campo_cta_titulo', pagina_slug: '/pregrado/perfil-profesional', valor: '¿Listo para transformar la realidad con datos?', tipo: 'texto' },
    { clave_campo: 'perfil_campo_cta_boton', pagina_slug: '/pregrado/perfil-profesional', valor: 'Inicia tu carrera hoy', tipo: 'texto' },

    // Estadísticas
    { clave_campo: 'perfil_stats_01_valor', pagina_slug: '/pregrado/perfil-profesional', valor: '92%', tipo: 'texto' },
    { clave_campo: 'perfil_stats_01_etiqueta', pagina_slug: '/pregrado/perfil-profesional', valor: 'Dinámica laboral', tipo: 'texto' },
    { clave_campo: 'perfil_stats_02_valor', pagina_slug: '/pregrado/perfil-profesional', valor: '12+', tipo: 'texto' },
    { clave_campo: 'perfil_stats_02_etiqueta', pagina_slug: '/pregrado/perfil-profesional', valor: 'Sectores de impacto', tipo: 'texto' },
    { clave_campo: 'perfil_stats_03_valor', pagina_slug: '/pregrado/perfil-profesional', valor: '40+', tipo: 'texto' },
    { clave_campo: 'perfil_stats_03_etiqueta', pagina_slug: '/pregrado/perfil-profesional', valor: 'Cursos cuantitativos', tipo: 'texto' },

    // --- /pregrado/malla-curricular ---
    { clave_campo: 'malla_hero_eyebrow', pagina_slug: '/pregrado/malla-curricular', valor: 'Resolución académica vigente', tipo: 'texto' },
    { clave_campo: 'malla_hero_titulo_01', pagina_slug: '/pregrado/malla-curricular', valor: 'Plan de Estudios', tipo: 'texto' },
    { clave_campo: 'malla_hero_titulo_02', pagina_slug: '/pregrado/malla-curricular', valor: 'y Malla Curricular', tipo: 'texto' },
    { clave_campo: 'malla_hero_horas', pagina_slug: '/pregrado/malla-curricular', valor: '9.600 Horas', tipo: 'texto' },
    { clave_campo: 'malla_hero_creditos', pagina_slug: '/pregrado/malla-curricular', valor: '240 Créditos', tipo: 'texto' },
    { clave_campo: 'malla_hero_descripcion', pagina_slug: '/pregrado/malla-curricular', valor: 'Estructura formativa integral organizada por ciclos de aprendizaje para desarrollar competencias estadísticas y computacionales avanzadas.', tipo: 'texto' },
    { clave_campo: 'malla_ciclos_badge', pagina_slug: '/pregrado/malla-curricular', valor: 'Organización por Ciclos Formativos', tipo: 'texto' },
    { clave_campo: 'malla_ciclos_descripcion', pagina_slug: '/pregrado/malla-curricular', valor: 'Navega por las asignaturas organizadas pedagógicamente en Ciclo Básico, Ciclo de Formación, Ciclo Profesional y Ciclo de Titulación.', tipo: 'texto' },

    // --- /pregrado/convalidaciones ---
    { clave_campo: 'convalidacion_hero_eyebrow', pagina_slug: '/pregrado/convalidaciones', valor: 'Migración y Homologación', tipo: 'texto' },
    { clave_campo: 'convalidacion_hero_titulo_01', pagina_slug: '/pregrado/convalidaciones', valor: 'Tabla de', tipo: 'texto' },
    { clave_campo: 'convalidacion_hero_titulo_02', pagina_slug: '/pregrado/convalidaciones', valor: 'Convalidaciones', tipo: 'texto' },
    { clave_campo: 'convalidacion_hero_highlight_01', pagina_slug: '/pregrado/convalidaciones', valor: 'Resoluciones oficiales', tipo: 'texto' },
    { clave_campo: 'convalidacion_hero_highlight_02', pagina_slug: '/pregrado/convalidaciones', valor: 'Mapeo directo', tipo: 'texto' },
    { clave_campo: 'convalidacion_intro_titulo', pagina_slug: '/pregrado/convalidaciones', valor: 'Herramienta de Transición', tipo: 'texto' },
    { clave_campo: 'convalidacion_intro_descripcion', pagina_slug: '/pregrado/convalidaciones', valor: 'Verifica la equivalencia exacta de asignaturas entre el Plan Antiguo y el Plan Nuevo para facilitar tu trámite de homologación académica.', tipo: 'texto' },
    { clave_campo: 'convalidacion_procedimiento_titulo', pagina_slug: '/pregrado/convalidaciones', valor: 'Trámite de Convalidación', tipo: 'texto' },
    { clave_campo: 'convalidacion_procedimiento_subtitulo', pagina_slug: '/pregrado/convalidaciones', valor: 'Pasos requeridos ante Kárdex Académico para formalizar la equivalencia de materias aprobadas.', tipo: 'texto' },

    // --- /pregrado/admisiones ---
    { clave_campo: 'admisiones_hero_badge', pagina_slug: '/pregrado/admisiones', valor: 'Convocatoria abierta 2026', tipo: 'texto' },
    { clave_campo: 'admisiones_hero_titulo_01', pagina_slug: '/pregrado/admisiones', valor: 'Ingreso a la', tipo: 'texto' },
    { clave_campo: 'admisiones_hero_titulo_02', pagina_slug: '/pregrado/admisiones', valor: 'ciencia de', tipo: 'texto' },
    { clave_campo: 'admisiones_hero_titulo_03', pagina_slug: '/pregrado/admisiones', valor: 'Datos.', tipo: 'texto' },
    { clave_campo: 'admisiones_hero_descripcion', pagina_slug: '/pregrado/admisiones', valor: 'Tu futuro como arquitecto de la evidencia científica comienza aquí. Conoce las vías oficiales de admisión a la Carrera de Estadística de la UMSA.', tipo: 'texto' },
    { clave_campo: 'admisiones_hero_cupos', pagina_slug: '/pregrado/admisiones', valor: '150+', tipo: 'texto' },
    { clave_campo: 'admisiones_requisitos_titulo', pagina_slug: '/pregrado/admisiones', valor: 'Documentación General', tipo: 'texto' },
    { clave_campo: 'admisiones_requisitos_descripcion', pagina_slug: '/pregrado/admisiones', valor: 'Documentos obligatorios que todo postulante regular debe presentar en ventanillas de Kárdex una vez aprobada la modalidad de ingreso (PSA o Pre-U).', tipo: 'texto' },
    { clave_campo: 'admisiones_modalidades_tag', pagina_slug: '/pregrado/admisiones', valor: 'Vías de acceso', tipo: 'texto' },
    { clave_campo: 'admisiones_modalidades_titulo', pagina_slug: '/pregrado/admisiones', valor: 'Modalidades Regulares', tipo: 'texto' },
    { clave_campo: 'admisiones_modalidades_subtitulo', pagina_slug: '/pregrado/admisiones', valor: 'Las dos rutas principales administradas por la Facultad de Ciencias Puras y Naturales para bachilleres.', tipo: 'texto' },

    // --- /pregrado/calendario-academico ---
    { clave_campo: 'calendario_hero_titulo', pagina_slug: '/pregrado/calendario-academico', valor: 'Calendario Académico', tipo: 'texto' },
    { clave_campo: 'calendario_hero_subtitulo', pagina_slug: '/pregrado/calendario-academico', valor: 'Gestión Académica Anual', tipo: 'texto' },
    { clave_campo: 'calendario_hero_badge', pagina_slug: '/pregrado/calendario-academico', valor: 'Aprobado por HCC', tipo: 'texto' },
    { clave_campo: 'calendario_hero_descripcion', pagina_slug: '/pregrado/calendario-academico', valor: 'Planificación oficial de actividades académicas, exámenes parciales, finales, mesas de sufragio y recesos universitarios.', tipo: 'texto' },

    // --- /pregrado/modalidades-graduacion ---
    { clave_campo: 'graduacion_hero_badge', pagina_slug: '/pregrado/modalidades-graduacion', valor: 'Grado Académico de Licenciatura', tipo: 'texto' },
    { clave_campo: 'graduacion_hero_titulo_01', pagina_slug: '/pregrado/modalidades-graduacion', valor: 'Modalidades de', tipo: 'texto' },
    { clave_campo: 'graduacion_hero_titulo_02', pagina_slug: '/pregrado/modalidades-graduacion', valor: 'Graduación', tipo: 'texto' },
    { clave_campo: 'graduacion_hero_titulo_03', pagina_slug: '/pregrado/modalidades-graduacion', valor: 'y Titulación.', tipo: 'texto' },
    { clave_campo: 'graduacion_hero_descripcion', pagina_slug: '/pregrado/modalidades-graduacion', valor: 'Rutas académicas reglamentadas por el CEUB y la UMSA para la obtención del título profesional de Licenciado(a) en Estadística.', tipo: 'texto' },
    { clave_campo: 'graduacion_taller_titulo', pagina_slug: '/pregrado/modalidades-graduacion', valor: 'Taller de Graduación', tipo: 'texto' },
    { clave_campo: 'graduacion_taller_subtitulo', pagina_slug: '/pregrado/modalidades-graduacion', valor: 'Materia terminal del 8vo semestre orientada a la formulación y defensa del trabajo de grado.', tipo: 'texto' },
    { clave_campo: 'graduacion_excelencia_titulo', pagina_slug: '/pregrado/modalidades-graduacion', valor: 'Graduación por Excelencia', tipo: 'texto' },
    { clave_campo: 'graduacion_excelencia_desc', pagina_slug: '/pregrado/modalidades-graduacion', valor: 'Exención de defensa de tesis para estudiantes con promedio sobresaliente durante toda la carrera sin reprobaciones.', tipo: 'texto' },
  ];

  let insertCount = 0;
  for (const s of pregradoSections) {
    const res = await client.query(`
      INSERT INTO seccion_pagina (clave_campo, pagina_slug, valor, tipo)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (clave_campo) DO NOTHING
    `, [s.clave_campo, s.pagina_slug, s.valor, s.tipo]);
    if (res.rowCount > 0) insertCount++;
  }
  console.log(`Nuevas secciones insertadas: ${insertCount}`);

  // 7. Conteos Finales y Comprobación de Integridad
  const finalSecciones = await client.query('SELECT COUNT(*) FROM seccion_pagina');
  const finalDocentes = await client.query('SELECT COUNT(*) FROM docente');
  const finalAdmin = await client.query('SELECT COUNT(*) FROM administrativo');
  const finalAux = await client.query('SELECT COUNT(*) FROM auxiliar');
  const finalAut = await client.query('SELECT COUNT(*) FROM estudiante_autoridad');
  const finalConv = await client.query('SELECT COUNT(*) FROM convenio');
  const finalPlanes = await client.query('SELECT COUNT(*) FROM plan_estudios');
  const finalMaterias = await client.query('SELECT COUNT(*) FROM materia_pregrado');
  const finalIncluye = await client.query('SELECT COUNT(*) FROM incluye');
  const finalConvalida = await client.query('SELECT COUNT(*) FROM convalida');
  const finalConvocatorias = await client.query('SELECT COUNT(*) FROM convocatoria');

  console.log('\n=======================================');
  console.log('REPORTE DE INTEGRIDAD DE BASE DE DATOS:');
  console.log('=======================================');
  console.log(`seccion_pagina:      ${initSecciones.rows[0].count} -> ${finalSecciones.rows[0].count} (Aumentó exactamente en ${insertCount} nuevas entradas)`);
  console.log(`docente:             ${finalDocentes.rows[0].count} (Intacto: ${initDocentes.rows[0].count === finalDocentes.rows[0].count})`);
  console.log(`administrativo:      ${finalAdmin.rows[0].count} (Intacto: ${initAdmin.rows[0].count === finalAdmin.rows[0].count})`);
  console.log(`auxiliar:            ${finalAux.rows[0].count} (Intacto: ${initAux.rows[0].count === finalAux.rows[0].count})`);
  console.log(`estudiante_autoridad:${finalAut.rows[0].count} (Intacto: ${initAut.rows[0].count === finalAut.rows[0].count})`);
  console.log(`convenio:            ${finalConv.rows[0].count} (Intacto: ${initConv.rows[0].count === finalConv.rows[0].count})`);
  console.log('---------------------------------------');
  console.log(`plan_estudios:       ${finalPlanes.rows[0].count}`);
  console.log(`materia_pregrado:    ${finalMaterias.rows[0].count}`);
  console.log(`incluye:             ${finalIncluye.rows[0].count}`);
  console.log(`convalida:           ${finalConvalida.rows[0].count}`);
  console.log(`convocatoria:        ${finalConvocatorias.rows[0].count}`);
  console.log('=======================================\n');

  await client.end();
}

seedPregradoData().catch((err) => {
  console.error('Error durante la siembra de datos de Pregrado:', err);
  process.exit(1);
});
