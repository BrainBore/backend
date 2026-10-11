const { Client } = require('pg');

const SLUG = '/';

// ---------------------------------------------------------------
// Datos actuales de inicioData.js (valores IGUALES a los del código)
// ---------------------------------------------------------------
const slides = [
  {
    subtitulo: 'FORMACIÓN PROFESIONAL DE EXCELENCIA',
    titulo: 'Licenciatura en Estadística de la UMSA',
    descripcion: 'Prepárate en análisis multivariante, modelado probabilístico, muestreo y ciencia de datos con el programa de pregrado de la carrera líder en Bolivia.',
    boton: 'Malla Curricular',
    etiqueta: '🎓 PREGRADO ACADÉMICO',
    imagen: '/images/inicio/imagen1.jpeg',
    enlace_principal: '/pregrado/malla-curricular',
    enlace_secundario: '/pregrado/perfil-profesional',
    stats: ['n = 380+', 'R² = 0.94', 'σ = 1.05'],
  },
  {
    subtitulo: 'INSTITUTO DE ESTADÍSTICA TEÓRICA Y APLICADA',
    titulo: 'Investigación Estadística y Consultoría con el IETA',
    descripcion: 'Desarrollamos modelos estadísticos avanzados y brindamos consultoría técnica especializada para resolver problemas socioeconómicos clave en Bolivia.',
    boton: 'Conocer el IETA',
    etiqueta: '🔬 CIENCIA APLICADA Y PROYECTOS',
    imagen: '/images/inicio/imagen2.png',
    enlace_principal: '/investigacion/acerca-ieta',
    enlace_secundario: '/investigacion/proyectos',
    stats: ['R² = 0.98', 'p < 0.001', 'N = 100%'],
  },
  {
    subtitulo: 'DIFUSIÓN Y PUBLICACIÓN CIENTÍFICA',
    titulo: 'Revista Científica Varianza',
    descripcion: 'Explora y lee los artículos de investigación estadística, metodologías probabilísticas y análisis cuantitativos publicados por docentes e investigadores.',
    boton: 'Leer Revista',
    etiqueta: '📊 PUBLICACIÓN OFICIAL',
    imagen: '/images/inicio/imagen3.jpeg',
    enlace_principal: '/investigacion/revista-varianza',
    enlace_secundario: '/investigacion/autores-varianza',
    stats: ['ISSN = Activo', 'Vol = 2026', 'n = IETA'],
  },
];

const accesos = [
  { titulo: 'Seguimiento de Egresados', descripcion: 'Portal de empleabilidad', enlace: '/estudiantes/pasantias-bolsa-trabajo', stat: 'Activo' },
  { titulo: 'Olimpiadas de Estadística', descripcion: 'Competencia académica', enlace: '#', stat: '2026' },
  { titulo: 'Correo Institucional', descripcion: 'Webmail UMSA', enlace: 'https://correo.umsa.bo/', stat: 'Office 365' },
  { titulo: 'Biblioteca Especializada', descripcion: 'Catálogo Koha UMSA', enlace: 'https://koha.umsa.bo/catalog?collection=estadistica', stat: 'Koha' },
];

const estadisticas = [
  { valor: '92', sufijo: '%', titulo: 'Empleabilidad<br/>Directa', descripcion: 'Egresados en puestos clave' },
  { valor: '15', sufijo: ':1', titulo: 'Ratio Estudiante<br/>Docente', descripcion: 'Atención personalizada' },
  { valor: '25', sufijo: '+', titulo: 'Investigaciones<br/>Publicadas', descripcion: 'Gestión 2025-2026' },
  { valor: 'A', sufijo: '+', titulo: 'Acreditación<br/>Internacional', descripcion: 'Mercosur Educativo' },
];

const perfil = {
  badge_valor: '92',
  badge_sufijo: '%',
  etiqueta: 'Tasa de Empleo Directo',
  titulo_01: 'PERFIL DEL',
  titulo_02: 'EGRESADO',
  descripcion: 'Nuestros profesionales dominan el lenguaje de los datos. Están capacitados para liderar la transformación digital mediante el modelado matemático riguroso.',
};

const roles = [
  { titulo: 'Analista de Riesgos', subtitulo: 'Sectores Bancarios y Seguros' },
  { titulo: 'Data Scientist', subtitulo: 'IA y Machine Learning Avanzado' },
  { titulo: 'Consultor Público', subtitulo: 'Políticas Basadas en Evidencia' },
  { titulo: 'Investigador', subtitulo: 'Desarrollo de Nuevas Metodologías' },
];

const ieta = {
  eyebrow: 'IETA INVESTIGACIÓN',
  titulo: ['CIENCIA', 'APLICADA', 'INSTITUTO', 'IETA'],
  descripcion: 'El Instituto de Estadística Teórica y Aplicada (IETA) es el motor de investigación de nuestra facultad. Desarrollamos modelos de alta precisión para resolver desafíos críticos de Bolivia.',
  imagen: '/images/inicio/imagen4.jpeg',
  badge_etiqueta: 'R²',
  badge_valor: '0.98',
  badge_subtitulo: 'Poder Predictivo',
  proyectos: [
    { titulo: 'Modelado Multivariante', descripcion: 'Análisis de pobreza multidimensional con organismos internacionales.' },
    { titulo: 'Ciencia de Datos Pública', descripcion: 'Soporte técnico avanzado para el INE y UDAPE.' },
  ],
  boton_texto: 'Explorar Investigaciones',
  boton_enlace: '/investigacion/proyectos',
};

const aliados = [
  { nombre: 'INE Bolivia', sigla: 'INE' },
  { nombre: 'Banco Central de Bolivia', sigla: 'BCB' },
  { nombre: 'Ministerio de Economía', sigla: 'MEF' },
  { nombre: 'UDAPE', sigla: 'UDAPE' },
  { nombre: 'Banco Mundial', sigla: 'BM' },
  { nombre: 'OPS / OMS', sigla: 'OPS' },
  { nombre: 'CEPAL', sigla: 'CEPAL' },
  { nombre: 'Banco BNB', sigla: 'BNB' },
  { nombre: 'UNFPA Bolivia', sigla: 'UNFPA' },
  { nombre: 'Ministerio de Salud', sigla: 'MSD' },
  { nombre: 'Banco Unión', sigla: 'BU' },
  { nombre: 'PNUD Bolivia', sigla: 'PNUD' },
];

const servicios = [
  { titulo: 'Plan de Estudios', descripcion: 'Consulta las materias, requisitos y la malla curricular vigente de la carrera de Estadística.', enlace: '/pregrado/malla-curricular' },
  { titulo: 'Calendario Académico', descripcion: 'Fechas oficiales para inscripciones, exámenes, defensas, recesos y feriados institucionales.', enlace: '/pregrado/calendario-academico' },
  { titulo: 'Biblioteca Virtual', descripcion: 'Catálogo completo en línea de libros y material de referencia científica para la carrera.', enlace: '/recursos/biblioteca' },
  { titulo: 'Cybertesis UMSA', descripcion: 'Buscador y repositorio digital para acceder a tesis y proyectos de grado aprobados.', enlace: '/recursos/tesis' },
  { titulo: 'Convocatorias Oficiales', descripcion: 'Avisos oficiales de auxiliaturas académicas de docencia e investigación de la carrera.', enlace: '/estudiantes/convocatorias-auxiliaturas' },
  { titulo: 'Guía de Trámites', descripcion: 'Requisitos y pasos a seguir para matriculación académica, reincorporaciones y traspasos.', enlace: '/estudiantes/guia-seguimiento-tramites' },
  { titulo: 'Revista Varianza', descripcion: 'Publicaciones científicas del Instituto de Estadística Teórica y Aplicada (IETA) para lectura directa.', enlace: '/investigacion/revista-varianza' },
  { titulo: 'Proyectos del IETA', descripcion: 'Explora las líneas de investigación, consultorías estadísticas y desarrollo académico activo.', enlace: '/investigacion/proyectos' },
];

// ---------------------------------------------------------------
// Construcción de las filas de seccion_pagina
// ---------------------------------------------------------------
const nn = (i) => String(i + 1).padStart(2, '0');

function buildRows() {
  const rows = [];
  const add = (clave, valor, tipo = 'texto') => rows.push({ clave, valor, tipo });

  slides.forEach((s, i) => {
    const p = `inicio_slide_${nn(i)}_`;
    add(`${p}subtitulo`, s.subtitulo);
    add(`${p}titulo`, s.titulo);
    add(`${p}descripcion`, s.descripcion);
    add(`${p}boton`, s.boton);
    add(`${p}etiqueta`, s.etiqueta);
    add(`${p}imagen`, s.imagen, 'imagen');
    add(`${p}enlace_principal`, s.enlace_principal);
    add(`${p}enlace_secundario`, s.enlace_secundario);
    s.stats.forEach((stat, j) => add(`${p}stat_${nn(j)}`, stat));
  });

  accesos.forEach((a, i) => {
    const p = `inicio_acceso_${nn(i)}_`;
    add(`${p}titulo`, a.titulo);
    add(`${p}descripcion`, a.descripcion);
    add(`${p}enlace`, a.enlace);
    add(`${p}stat`, a.stat);
  });

  estadisticas.forEach((s, i) => {
    const p = `inicio_stat_${nn(i)}_`;
    add(`${p}valor`, s.valor);
    add(`${p}sufijo`, s.sufijo);
    add(`${p}titulo`, s.titulo);
    add(`${p}descripcion`, s.descripcion);
  });

  add('inicio_perfil_badge_valor', perfil.badge_valor);
  add('inicio_perfil_badge_sufijo', perfil.badge_sufijo);
  add('inicio_perfil_etiqueta', perfil.etiqueta);
  add('inicio_perfil_titulo_01', perfil.titulo_01);
  add('inicio_perfil_titulo_02', perfil.titulo_02);
  add('inicio_perfil_descripcion', perfil.descripcion);

  roles.forEach((r, i) => {
    const p = `inicio_rol_${nn(i)}_`;
    add(`${p}titulo`, r.titulo);
    add(`${p}subtitulo`, r.subtitulo);
  });

  add('inicio_ieta_eyebrow', ieta.eyebrow);
  ieta.titulo.forEach((t, i) => add(`inicio_ieta_titulo_${nn(i)}`, t));
  add('inicio_ieta_descripcion', ieta.descripcion);
  add('inicio_ieta_imagen', ieta.imagen, 'imagen');
  add('inicio_ieta_badge_etiqueta', ieta.badge_etiqueta);
  add('inicio_ieta_badge_valor', ieta.badge_valor);
  add('inicio_ieta_badge_subtitulo', ieta.badge_subtitulo);
  ieta.proyectos.forEach((pr, i) => {
    add(`inicio_ieta_proyecto_${nn(i)}_titulo`, pr.titulo);
    add(`inicio_ieta_proyecto_${nn(i)}_descripcion`, pr.descripcion);
  });
  add('inicio_ieta_boton_texto', ieta.boton_texto);
  add('inicio_ieta_boton_enlace', ieta.boton_enlace);

  aliados.forEach((a, i) => {
    const p = `inicio_aliado_${nn(i)}_`;
    add(`${p}nombre`, a.nombre);
    add(`${p}sigla`, a.sigla);
  });

  servicios.forEach((s, i) => {
    const p = `inicio_servicio_${nn(i)}_`;
    add(`${p}titulo`, s.titulo);
    add(`${p}descripcion`, s.descripcion);
    add(`${p}enlace`, s.enlace);
  });

  return rows;
}

async function seedInicioSections() {
  const DATABASE_URL = process.env.DATABASE_URL;
  if (!DATABASE_URL) {
    console.error('Falta DATABASE_URL. Ejecuta: node --env-file=.env scripts/seed_inicio_sections.cjs');
    process.exit(1);
  }

  const client = new Client({ connectionString: DATABASE_URL });
  await client.connect();
  console.log('--- Conectado a PostgreSQL para sembrar los textos de Inicio ---');

  const rows = buildRows();
  console.log(`Filas a sembrar: ${rows.length}`);

  const before = await client.query('SELECT COUNT(*) FROM seccion_pagina');
  const beforeInicio = await client.query('SELECT COUNT(*) FROM seccion_pagina WHERE pagina_slug = $1', [SLUG]);
  console.log(`seccion_pagina total antes: ${before.rows[0].count}`);
  console.log(`seccion_pagina (slug "${SLUG}") antes: ${beforeInicio.rows[0].count}`);

  for (const row of rows) {
    await client.query(
      `INSERT INTO seccion_pagina (clave_campo, pagina_slug, valor, tipo)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (clave_campo) DO NOTHING`,
      [row.clave, SLUG, row.valor, row.tipo],
    );
  }

  const after = await client.query('SELECT COUNT(*) FROM seccion_pagina');
  const afterInicio = await client.query('SELECT COUNT(*) FROM seccion_pagina WHERE pagina_slug = $1', [SLUG]);
  console.log(`seccion_pagina total después: ${after.rows[0].count}`);
  console.log(`seccion_pagina (slug "${SLUG}") después: ${afterInicio.rows[0].count}`);

  await client.end();
}

if (require.main === module) {
  seedInicioSections().catch((err) => {
    console.error('Error al sembrar los textos de Inicio:', err);
    process.exit(1);
  });
}

module.exports = { buildRows };