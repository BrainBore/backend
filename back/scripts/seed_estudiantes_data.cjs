const { Client } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:123@localhost:5432/usuarios';

const client = new Client({ connectionString: DATABASE_URL });

async function seedEstudiantesData() {
  await client.connect();
  console.log('--- Conectado a PostgreSQL para sembrar Estudiantes ---');

  // 1. Conteos iniciales
  const initSec = await client.query('SELECT COUNT(*) FROM seccion_pagina');
  const initDir = await client.query('SELECT COUNT(*) FROM directivo_estudiante');
  const initAux = await client.query('SELECT COUNT(*) FROM convocatoria_auxiliatura');
  const initPas = await client.query('SELECT COUNT(*) FROM pasantia');
  const initPub = await client.query('SELECT COUNT(*) FROM publicaciones_estudiantiles');
  const initMat = await client.query('SELECT COUNT(*) FROM matriz_cientifica');

  console.log('Conteos iniciales:');
  console.log(`seccion_pagina: ${initSec.rows[0].count}`);
  console.log(`directivo_estudiante: ${initDir.rows[0].count}`);
  console.log(`convocatoria_auxiliatura: ${initAux.rows[0].count}`);
  console.log(`pasantia: ${initPas.rows[0].count}`);
  console.log(`publicaciones_estudiantiles: ${initPub.rows[0].count}`);
  console.log(`matriz_cientifica: ${initMat.rows[0].count}`);

  // 2. Sembrar DIRECTIVO_ESTUDIANTE
  console.log('\nSembrando directivo_estudiante...');
  const directivos = [
    { id: 1, nombre: 'Jhoseline Gloria Chambi Velasco', cargo: 'Primera Secretaria Ejecutiva', area: 'Directiva CEE' },
    { id: 2, nombre: 'Alejandra Edith Salas Birrueta', cargo: 'Segunda Secretaria Ejecutiva', area: 'Directiva CEE' },
    { id: 3, nombre: 'Aylin Yenori Maita Chacón', cargo: 'Tercera Secretaria Ejecutiva', area: 'Directiva CEE' },
    { id: 4, nombre: 'Jhovanny Andrés Urbina Vargas', cargo: 'Cuarto Secretario Ejecutivo', area: 'Directiva CEE' },
    { id: 5, nombre: 'Daniela Raquel Nava Canaviri', cargo: 'Quinta Secretaria Ejecutiva', area: 'Directiva CEE' },
    { id: 6, nombre: 'Gerald Luis Condori Lima', cargo: 'Sexto Secretario Ejecutivo', area: 'Directiva CEE' },
    { id: 7, nombre: 'Katherine Mayte Mendoza Quispe', cargo: 'Primer Titular', area: 'Delegados HCF' },
    { id: 8, nombre: 'Daniela Raquel Nava Canaviri', cargo: 'Primer Suplente', area: 'Delegados HCF' },
    { id: 9, nombre: 'Milenka Mariana Del Villar Cari', cargo: 'Segundo Titular', area: 'Delegados HCF' },
    { id: 10, nombre: 'Gerald Luis Condori Lima', cargo: 'Segundo Titular', area: 'Delegados HCF' },
    { id: 11, nombre: 'Alejandra Adela Velarde Machicado', cargo: 'Primer Titular', area: 'Delegados Académico' },
    { id: 12, nombre: 'Grover Huanca Flores', cargo: 'Primer Suplente', area: 'Delegados Académico' },
    { id: 13, nombre: 'Daniel Franklin Céspedes Quispe', cargo: 'Segundo Suplente', area: 'Delegados Académico' },
  ];

  for (const d of directivos) {
    await client.query(`
      INSERT INTO directivo_estudiante (id, nombre, cargo, area)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (id) DO UPDATE
      SET nombre = EXCLUDED.nombre,
          cargo = EXCLUDED.cargo,
          area = EXCLUDED.area
    `, [d.id, d.nombre, d.cargo, d.area]);
  }
  await client.query(`SELECT setval(pg_get_serial_sequence('directivo_estudiante', 'id'), (SELECT MAX(id) FROM directivo_estudiante))`);

  // 3. Sembrar CONVOCATORIA_AUXILIATURA
  console.log('Sembrando convocatoria_auxiliatura...');
  const auxiliaturas = [
    {
      id: 1,
      materia: 'Auxiliatura de Docencia - Gestión II/2026',
      tipo: 'Docencia',
      descripcion: 'Selección de auxiliares para áreas de Matemáticas, Probabilidad, Estadística Aplicada y Programación.',
      fecha_publicacion: '2026-04-15',
      fecha_cierre: '2026-04-30',
      plazas: 18,
      estado: 'Abierta',
    },
    {
      id: 2,
      materia: 'Auxiliatura de Laboratorio - Gestión II/2026',
      tipo: 'Laboratorio',
      descripcion: 'Convocatoria para apoyo técnico en laboratorios de software estadístico (R, Python, SPSS).',
      fecha_publicacion: '2026-04-18',
      fecha_cierre: '2026-05-05',
      plazas: 6,
      estado: 'Próximamente',
    },
    {
      id: 3,
      materia: 'Auxiliatura de Docencia - Gestión I/2026',
      tipo: 'Docencia',
      descripcion: 'Proceso concluido de selección para el primer semestre de la gestión 2026.',
      fecha_publicacion: '2025-11-10',
      fecha_cierre: '2025-11-30',
      plazas: 16,
      estado: 'Concluida',
    },
  ];

  for (const a of auxiliaturas) {
    await client.query(`
      INSERT INTO convocatoria_auxiliatura (id, materia, tipo, descripcion, fecha_publicacion, fecha_cierre, plazas, estado)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ON CONFLICT (id) DO UPDATE
      SET materia = EXCLUDED.materia,
          tipo = EXCLUDED.tipo,
          descripcion = EXCLUDED.descripcion,
          fecha_publicacion = EXCLUDED.fecha_publicacion,
          fecha_cierre = EXCLUDED.fecha_cierre,
          plazas = EXCLUDED.plazas,
          estado = EXCLUDED.estado
    `, [a.id, a.materia, a.tipo, a.descripcion, a.fecha_publicacion, a.fecha_cierre, a.plazas, a.estado]);
  }
  await client.query(`SELECT setval(pg_get_serial_sequence('convocatoria_auxiliatura', 'id'), (SELECT MAX(id) FROM convocatoria_auxiliatura))`);

  // 4. Sembrar PASANTIA
  console.log('Sembrando pasantia...');
  const pasantias = [
    {
      id: 1,
      titulo: 'Pasante en Análisis Demográfico',
      tipo: 'Trabajo Dirigido / Grado',
      descripcion: 'Apoyo en procesamiento de datos censales, tabulaciones cruzadas y análisis de indicadores demográficos.',
      area: 'Sector Público',
      empresa: 'Instituto Nacional de Estadística (INE)',
      fecha_cierre: '2026-11-30',
      requisitos: '8° semestre, manejo de SPSS y R.',
    },
    {
      id: 2,
      titulo: 'Asistente de Riesgos y Credit Scoring',
      tipo: 'Pre-Profesional',
      descripcion: 'Desarrollo y monitoreo de modelos predictivos de riesgo crediticio y comportamiento financiero.',
      area: 'Finanzas',
      empresa: 'Banco Nacional de Bolivia (BNB)',
      fecha_cierre: '2026-12-15',
      requisitos: '7° semestre, SQL, Python y modelos logísticos.',
    },
    {
      id: 3,
      titulo: 'Analista de Datos Económicos',
      tipo: 'Graduación',
      descripcion: 'Estimación de series macroeconómicas y preparación de informes técnicos cuantitativos.',
      area: 'Gobierno',
      empresa: 'Ministerio de Economía',
      fecha_cierre: '2026-12-20',
      requisitos: 'Egresado, econometría y series de tiempo.',
    },
  ];

  for (const p of pasantias) {
    await client.query(`
      INSERT INTO pasantia (id, titulo, tipo, descripcion, area, empresa, fecha_cierre, requisitos)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ON CONFLICT (id) DO UPDATE
      SET titulo = EXCLUDED.titulo,
          tipo = EXCLUDED.tipo,
          descripcion = EXCLUDED.descripcion,
          area = EXCLUDED.area,
          empresa = EXCLUDED.empresa,
          fecha_cierre = EXCLUDED.fecha_cierre,
          requisitos = EXCLUDED.requisitos
    `, [p.id, p.titulo, p.tipo, p.descripcion, p.area, p.empresa, p.fecha_cierre, p.requisitos]);
  }
  await client.query(`SELECT setval(pg_get_serial_sequence('pasantia', 'id'), (SELECT MAX(id) FROM pasantia))`);

  // 5. Sembrar PUBLICACIONES_ESTUDIANTILES
  console.log('Sembrando publicaciones_estudiantiles...');
  const publicaciones = [
    { id: 1, titulo: 'Predicción de deserción estudiantil usando Random Forest', anio: 2025, autor: 'Nodo R & Python', area: 'Ciencia de Datos' },
    { id: 2, titulo: 'Análisis Bayesiano de la inflación interanual en Bolivia', anio: 2024, autor: 'Grupo Bayesiano', area: 'Econometría' },
    { id: 3, titulo: 'Impacto sociodemográfico post-censo 2024 en La Paz', anio: 2025, autor: 'Línea Demográfica', area: 'Estadística Social' },
    { id: 4, titulo: 'Clustering de patologías respiratorias en zonas de altitud', anio: 2023, autor: 'Línea Bioestadística', area: 'Salud Pública' },
  ];

  for (const pub of publicaciones) {
    await client.query(`
      INSERT INTO publicaciones_estudiantiles (id, titulo, anio, autor, area)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (id) DO UPDATE
      SET titulo = EXCLUDED.titulo,
          anio = EXCLUDED.anio,
          autor = EXCLUDED.autor,
          area = EXCLUDED.area
    `, [pub.id, pub.titulo, pub.anio, pub.autor, pub.area]);
  }
  await client.query(`SELECT setval(pg_get_serial_sequence('publicaciones_estudiantiles', 'id'), (SELECT MAX(id) FROM publicaciones_estudiantiles))`);

  // 6. Sembrar MATRIZ_CIENTIFICA
  console.log('Sembrando matriz_cientifica...');
  const matrices = [
    { id: 1, titulo: 'Ciencia de Datos Aplicada', descripcion: 'Modelado predictivo, machine learning y minería de datos para resolver problemas complejos.', autor: 'Sociedad Científica CEE' },
    { id: 2, titulo: 'Estadística Social y Demográfica', descripcion: 'Análisis de censos, encuestas de hogares y proyecciones para políticas públicas.', autor: 'Línea Demográfica' },
    { id: 3, titulo: 'Bioestadística y Epidemiología', descripcion: 'Colaboración en salud pública, epidemiología y análisis estadístico de ensayos clínicos.', autor: 'Línea Bioestadística' },
    { id: 4, titulo: 'Inferencia Bayesiana y MCMC', descripcion: 'Estadística bayesiana, simulación computacional y modelos probabilísticos robustos.', autor: 'Grupo Bayesiano' },
  ];

  for (const m of matrices) {
    await client.query(`
      INSERT INTO matriz_cientifica (id, titulo, descripcion, autor)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (id) DO UPDATE
      SET titulo = EXCLUDED.titulo,
          descripcion = EXCLUDED.descripcion,
          autor = EXCLUDED.autor
    `, [m.id, m.titulo, m.descripcion, m.autor]);
  }
  await client.query(`SELECT setval(pg_get_serial_sequence('matriz_cientifica', 'id'), (SELECT MAX(id) FROM matriz_cientifica))`);

  // 7. Sembrar SECCION_PAGINA para Estudiantes (textos e imágenes, ON CONFLICT DO NOTHING)
  console.log('Sembrando seccion_pagina para Estudiantes...');
  const studentSections = [
    // --- /estudiantes/tramites ---
    { clave_campo: 'est_tramites_hero_eyebrow', pagina_slug: '/estudiantes/tramites', valor: 'Gestión administrativa transparente', tipo: 'texto' },
    { clave_campo: 'est_tramites_hero_titulo_01', pagina_slug: '/estudiantes/tramites', valor: 'Guía y Seguimiento', tipo: 'texto' },
    { clave_campo: 'est_tramites_hero_titulo_02', pagina_slug: '/estudiantes/tramites', valor: 'de Trámites', tipo: 'texto' },
    { clave_campo: 'est_tramites_hero_descripcion', pagina_slug: '/estudiantes/tramites', valor: 'Centralizamos requisitos y flujos procedimentales para que el estudiante gestione solicitudes académicas sin contratiempos.', tipo: 'texto' },
    { clave_campo: 'est_tramites_hero_placeholder', pagina_slug: '/estudiantes/tramites', valor: 'Ej. egreso, excelencia, legalización...', tipo: 'texto' },
    { clave_campo: 'est_tramites_sistema_01_tag', pagina_slug: '/estudiantes/tramites', valor: 'Trámites Facultativos (FCPN)', tipo: 'texto' },
    { clave_campo: 'est_tramites_sistema_01_titulo', pagina_slug: '/estudiantes/tramites', valor: 'Sistema CHASQUI', tipo: 'texto' },
    { clave_campo: 'est_tramites_sistema_01_caption', pagina_slug: '/estudiantes/tramites', valor: 'Seguimiento con N° RUT', tipo: 'texto' },
    { clave_campo: 'est_tramites_sistema_01_url', pagina_slug: '/estudiantes/tramites', valor: 'https://chasqui.fcpn.edu.bo/', tipo: 'texto' },
    { clave_campo: 'est_tramites_sistema_02_tag', pagina_slug: '/estudiantes/tramites', valor: 'Ventanilla Única (UMSA)', tipo: 'texto' },
    { clave_campo: 'est_tramites_sistema_02_titulo', pagina_slug: '/estudiantes/tramites', valor: 'Sistema AYNI', tipo: 'texto' },
    { clave_campo: 'est_tramites_sistema_02_caption', pagina_slug: '/estudiantes/tramites', valor: 'Trámites universitarios', tipo: 'texto' },
    { clave_campo: 'est_tramites_sistema_02_url', pagina_slug: '/estudiantes/tramites', valor: 'https://ayni.umsa.bo/', tipo: 'texto' },

    // --- /estudiantes/centro-estudiantes ---
    { clave_campo: 'est_centro_hero_eyebrow', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Órgano máximo de representación', tipo: 'texto' },
    { clave_campo: 'est_centro_hero_titulo_01', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Centro de', tipo: 'texto' },
    { clave_campo: 'est_centro_hero_titulo_02', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Estudiantes', tipo: 'texto' },
    { clave_campo: 'est_centro_hero_descripcion', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Consolidando una comunidad estudiantil participativa, crítica y líder en el ámbito de la Ciencia de Datos en Bolivia. Tu voz en la toma de decisiones.', tipo: 'texto' },
    { clave_campo: 'est_centro_hero_cta', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Contacto Directo', tipo: 'texto' },
    { clave_campo: 'est_centro_stats_01_label', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Representación', tipo: 'texto' },
    { clave_campo: 'est_centro_stats_01_val', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'CEE ACTIVA', tipo: 'texto' },
    { clave_campo: 'est_centro_stats_02_label', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Voz estudiantil', tipo: 'texto' },
    { clave_campo: 'est_centro_stats_02_val', pagina_slug: '/estudiantes/centro-estudiantes', valor: '24/7 CANALES', tipo: 'texto' },
    { clave_campo: 'est_centro_stats_03_label', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Apoyo académico', tipo: 'texto' },
    { clave_campo: 'est_centro_stats_03_val', pagina_slug: '/estudiantes/centro-estudiantes', valor: '04 SERVICIOS', tipo: 'texto' },
    { clave_campo: 'est_centro_stats_04_label', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Participación', tipo: 'texto' },
    { clave_campo: 'est_centro_stats_04_val', pagina_slug: '/estudiantes/centro-estudiantes', valor: '100% ABIERTO', tipo: 'texto' },
    { clave_campo: 'est_centro_servicios_tag', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Servicios estudiantiles', tipo: 'texto' },
    { clave_campo: 'est_centro_servicios_titulo', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Pilares de gestión y apoyo', tipo: 'texto' },
    { clave_campo: 'est_centro_servicios_sub', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Iniciativas y beneficios directos para potenciar tu vida universitaria y rendimiento académico.', tipo: 'texto' },
    { clave_campo: 'est_centro_estructura_tag', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Estructura democrática', tipo: 'texto' },
    { clave_campo: 'est_centro_estructura_titulo', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Representación institucional', tipo: 'texto' },
    { clave_campo: 'est_centro_estructura_sub', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Conoce cómo tu voz es representada a través del Centro de Estudiantes hacia las máximas instancias de decisión universitaria.', tipo: 'texto' },
    { clave_campo: 'est_centro_liderazgo_tag', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Directiva y Delegados', tipo: 'texto' },
    { clave_campo: 'est_centro_liderazgo_titulo', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Representantes estudiantiles', tipo: 'texto' },
    { clave_campo: 'est_centro_liderazgo_sub', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Equipo de estudiantes comprometidos con la transparencia, defensa y fortalecimiento de nuestra carrera.', tipo: 'texto' },
    { clave_campo: 'est_centro_canal_01_label', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Grupo de WhatsApp', tipo: 'texto' },
    { clave_campo: 'est_centro_canal_01_url', pagina_slug: '/estudiantes/centro-estudiantes', valor: '#', tipo: 'texto' },
    { clave_campo: 'est_centro_canal_02_label', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Canal de Telegram', tipo: 'texto' },
    { clave_campo: 'est_centro_canal_02_url', pagina_slug: '/estudiantes/centro-estudiantes', valor: '#', tipo: 'texto' },
    { clave_campo: 'est_centro_footer_brand', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Estadística — UMSA', tipo: 'texto' },
    { clave_campo: 'est_centro_footer_sub', pagina_slug: '/estudiantes/centro-estudiantes', valor: 'Centro de Estudiantes (CEE)', tipo: 'texto' },

    // --- /estudiantes/convocatorias-auxiliaturas ---
    { clave_campo: 'est_aux_hero_eyebrow', pagina_slug: '/estudiantes/convocatorias-auxiliaturas', valor: 'Portal de auxiliares', tipo: 'texto' },
    { clave_campo: 'est_aux_hero_titulo_01', pagina_slug: '/estudiantes/convocatorias-auxiliaturas', valor: 'Convocatorias para', tipo: 'texto' },
    { clave_campo: 'est_aux_hero_titulo_02', pagina_slug: '/estudiantes/convocatorias-auxiliaturas', valor: 'Auxiliaturas', tipo: 'texto' },
    { clave_campo: 'est_aux_hero_descripcion', pagina_slug: '/estudiantes/convocatorias-auxiliaturas', valor: 'Consulta convocatorias vigentes, requisitos y cronogramas oficiales para postular a auxiliaturas de docencia y laboratorio.', tipo: 'texto' },
    { clave_campo: 'est_aux_guia_tag', pagina_slug: '/estudiantes/convocatorias-auxiliaturas', valor: 'Paso a paso', tipo: 'texto' },
    { clave_campo: 'est_aux_guia_titulo', pagina_slug: '/estudiantes/convocatorias-auxiliaturas', valor: 'Proceso general de postulación', tipo: 'texto' },
    { clave_campo: 'est_aux_guia_sub', pagina_slug: '/estudiantes/convocatorias-auxiliaturas', valor: 'Guía orientativa para presentar tu documentación en tiempo y forma según el reglamento institucional.', tipo: 'texto' },
    { clave_campo: 'est_aux_requisitos_tag', pagina_slug: '/estudiantes/convocatorias-auxiliaturas', valor: 'Documentación', tipo: 'texto' },
    { clave_campo: 'est_aux_requisitos_titulo', pagina_slug: '/estudiantes/convocatorias-auxiliaturas', valor: 'Requisitos mínimos obligatorios', tipo: 'texto' },
    { clave_campo: 'est_aux_requisitos_sub', pagina_slug: '/estudiantes/convocatorias-auxiliaturas', valor: 'Prepara tu expediente con anticipación para evitar observaciones en secretaría.', tipo: 'texto' },
    { clave_campo: 'est_aux_alerta_titulo', pagina_slug: '/estudiantes/convocatorias-auxiliaturas', valor: 'Publicación oficial en vitrinas', tipo: 'texto' },
    { clave_campo: 'est_aux_alerta_texto', pagina_slug: '/estudiantes/convocatorias-auxiliaturas', valor: 'Las resoluciones y cronogramas específicos de defensa se publican formalmente en la Secretaría de la Carrera y canales autorizados.', tipo: 'texto' },

    // --- /estudiantes/pasantias ---
    { clave_campo: 'est_pasantias_hero_eyebrow', pagina_slug: '/estudiantes/pasantias', valor: 'Inserción laboral y práctica guiada', tipo: 'texto' },
    { clave_campo: 'est_pasantias_hero_titulo_01', pagina_slug: '/estudiantes/pasantias', valor: 'Pasantías y Bolsa', tipo: 'texto' },
    { clave_campo: 'est_pasantias_hero_titulo_02', pagina_slug: '/estudiantes/pasantias', valor: 'de Trabajo', tipo: 'texto' },
    { clave_campo: 'est_pasantias_hero_descripcion', pagina_slug: '/estudiantes/pasantias', valor: 'Conectamos el talento analítico de la Carrera de Estadística con entidades públicas, banca, organismos internacionales y empresas tecnológicas.', tipo: 'texto' },
    { clave_campo: 'est_pasantias_modalidades_tag', pagina_slug: '/estudiantes/pasantias', valor: 'Opciones de titulación y práctica', tipo: 'texto' },
    { clave_campo: 'est_pasantias_modalidades_titulo', pagina_slug: '/estudiantes/pasantias', valor: 'Modalidades disponibles', tipo: 'texto' },
    { clave_campo: 'est_pasantias_modalidades_sub', pagina_slug: '/estudiantes/pasantias', valor: 'Diferentes vías para validar tu experiencia profesional o culminar tu graduación universitaria.', tipo: 'texto' },
    { clave_campo: 'est_pasantias_proceso_tag', pagina_slug: '/estudiantes/pasantias', valor: 'Ruta de gestión', tipo: 'texto' },
    { clave_campo: 'est_pasantias_proceso_titulo', pagina_slug: '/estudiantes/pasantias', valor: 'Pasos para iniciar tu pasantía', tipo: 'texto' },
    { clave_campo: 'est_pasantias_proceso_sub', pagina_slug: '/estudiantes/pasantias', valor: 'Flujo reglamentario desde la postulación hasta la defensa final o acreditación de horas.', tipo: 'texto' },
    { clave_campo: 'est_pasantias_ofertas_tag', pagina_slug: '/estudiantes/pasantias', valor: 'Convocatorias y oportunidades', tipo: 'texto' },
    { clave_campo: 'est_pasantias_ofertas_titulo', pagina_slug: '/estudiantes/pasantias', valor: 'Bolsa de plazas activas', tipo: 'texto' },
    { clave_campo: 'est_pasantias_ofertas_sub', pagina_slug: '/estudiantes/pasantias', valor: 'Explora las convocatorias vigentes en instituciones con convenios activos con la UMSA.', tipo: 'texto' },
    { clave_campo: 'est_pasantias_recursos_tag', pagina_slug: '/estudiantes/pasantias', valor: 'Descargas y requisitos', tipo: 'texto' },
    { clave_campo: 'est_pasantias_recursos_titulo', pagina_slug: '/estudiantes/pasantias', valor: 'Requisitos y formularios', tipo: 'texto' },
    { clave_campo: 'est_pasantias_recursos_sub', pagina_slug: '/estudiantes/pasantias', valor: 'Descarga plantillas oficiales y verifica la documentación antes de ingresar tu trámite.', tipo: 'texto' },

    // --- /estudiantes/sociedad-cientifica ---
    { clave_campo: 'est_sociedad_hero_eyebrow', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Investigación y desarrollo', tipo: 'texto' },
    { clave_campo: 'est_sociedad_hero_titulo_01', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Sociedad Científica de', tipo: 'texto' },
    { clave_campo: 'est_sociedad_hero_titulo_02', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Estudiantes de Estadística', tipo: 'texto' },
    { clave_campo: 'est_sociedad_hero_descripcion', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'El núcleo donde las ideas se transforman en investigaciones, papers y proyectos con impacto real en Bolivia.', tipo: 'texto' },
    { clave_campo: 'est_sociedad_hero_cta', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Unirme a la próxima convocatoria', tipo: 'texto' },
    { clave_campo: 'est_sociedad_lineas_tag', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Áreas de trabajo', tipo: 'texto' },
    { clave_campo: 'est_sociedad_lineas_titulo', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Líneas y Nodos de Investigación', tipo: 'texto' },
    { clave_campo: 'est_sociedad_lineas_sub', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Equipos interdisciplinarios enfocados en metodologías modernas, software libre y análisis multivariante.', tipo: 'texto' },
    { clave_campo: 'est_sociedad_beneficios_tag', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Ventajas para miembros', tipo: 'texto' },
    { clave_campo: 'est_sociedad_beneficios_titulo', pagina_slug: '/estudiantes/sociedad-cientifica', valor: '¿Por qué unirte a la sociedad?', tipo: 'texto' },
    { clave_campo: 'est_sociedad_beneficios_sub', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Oportunidades únicas de crecimiento académico, publicación y liderazgo científico.', tipo: 'texto' },
    { clave_campo: 'est_sociedad_admision_tag', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Cómo ingresar', tipo: 'texto' },
    { clave_campo: 'est_sociedad_admision_titulo', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Proceso de admisión', tipo: 'texto' },
    { clave_campo: 'est_sociedad_admision_sub', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Convocatorias anuales abiertas a estudiantes de todos los semestres con interés investigativo.', tipo: 'texto' },
    { clave_campo: 'est_sociedad_repo_tag', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Producción científica', tipo: 'texto' },
    { clave_campo: 'est_sociedad_repo_titulo', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Repositorio de Papers y Revistas', tipo: 'texto' },
    { clave_campo: 'est_sociedad_repo_sub', pagina_slug: '/estudiantes/sociedad-cientifica', valor: 'Artículos elaborados por miembros de la sociedad y revistas aliadas para divulgación.', tipo: 'texto' },
  ];

  let insertCount = 0;
  for (const s of studentSections) {
    const res = await client.query(`
      INSERT INTO seccion_pagina (clave_campo, pagina_slug, valor, tipo)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (clave_campo) DO NOTHING
    `, [s.clave_campo, s.pagina_slug, s.valor, s.tipo]);
    if (res.rowCount > 0) insertCount++;
  }
  console.log(`Nuevas secciones de estudiantes insertadas: ${insertCount}`);

  // 8. Conteos finales
  const finSec = await client.query('SELECT COUNT(*) FROM seccion_pagina');
  const finDir = await client.query('SELECT COUNT(*) FROM directivo_estudiante');
  const finAux = await client.query('SELECT COUNT(*) FROM convocatoria_auxiliatura');
  const finPas = await client.query('SELECT COUNT(*) FROM pasantia');
  const finPub = await client.query('SELECT COUNT(*) FROM publicaciones_estudiantiles');
  const finMat = await client.query('SELECT COUNT(*) FROM matriz_cientifica');

  console.log('\nConteos finales:');
  console.log(`seccion_pagina: ${finSec.rows[0].count} (antes: ${initSec.rows[0].count})`);
  console.log(`directivo_estudiante: ${finDir.rows[0].count}`);
  console.log(`convocatoria_auxiliatura: ${finAux.rows[0].count}`);
  console.log(`pasantia: ${finPas.rows[0].count}`);
  console.log(`publicaciones_estudiantiles: ${finPub.rows[0].count}`);
  console.log(`matriz_cientifica: ${finMat.rows[0].count}`);

  console.log('\n--- Siembra de Estudiantes completada con éxito ---');
  await client.end();
}

seedEstudiantesData().catch((err) => {
  console.error('Error al sembrar datos de estudiantes:', err);
  process.exit(1);
});
