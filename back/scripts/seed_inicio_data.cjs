const { Client } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('Falta DATABASE_URL. Ejecuta: node --env-file=.env scripts/seed_inicio_data.cjs');
  process.exit(1);
}

const client = new Client({ connectionString: DATABASE_URL });

const noticias = [
  {
    id: 7,
    categoria: 'Comunicado',
    color: '#00447e',
    fecha: '2026-06-02',
    titulo: 'Comunicado de ampliación para recepción de files de auxiliaturas de cátedra',
    extracto: 'Se comunica a los postulantes que la entrega física de documentos se extiende excepcionalmente en la secretaría del IETA.',
    imagen_url: null,
    tiempo_lectura: '2 min',
    enlace: '/estudiantes/convocatorias-auxiliaturas',
    estado: 'published',
    fecha_expiracion: null,
  },
  {
    id: 8,
    categoria: 'Becas',
    color: '#ea580c',
    fecha: '2026-05-01',
    titulo: 'Convocatoria caducada para becas de investigación en ciencia de datos',
    extracto: 'Esta noticia ya no se mostrará públicamente porque su fecha de vencimiento (expiryDate) está en el pasado.',
    imagen_url: '/images/inicio/noticia_becas.jpg',
    tiempo_lectura: '3 min',
    enlace: '#',
    estado: 'published',
    fecha_expiracion: '2026-05-15',
  },
  {
    id: 1,
    categoria: 'Investigación',
    color: '#ea580c',
    fecha: '2025-03-15',
    titulo: 'Investigadores de la Carrera publican en revista ISI sobre modelos de pobreza multidimensional en Bolivia',
    extracto: 'El equipo del IETA presentó resultados de tres años de investigación aplicada con datos del INE, siendo la primera publicación boliviana en el índice.',
    imagen_url: '/images/inicio/noticia_pobreza.jpg',
    tiempo_lectura: '4 min',
    enlace: '/investigacion/proyectos',
    estado: 'published',
    fecha_expiracion: null,
  },
  {
    id: 2,
    categoria: 'Académico',
    color: '#00447e',
    fecha: '2025-03-10',
    titulo: 'Apertura de inscripciones para la Maestría en Análisis de Datos 2025',
    extracto: 'El Postgrado de la Carrera de Estadística anuncia el inicio de inscripciones para la nueva cohorte y programas de postgrado autofinanciados.',
    imagen_url: '/images/inicio/noticia_maestria.jpg',
    tiempo_lectura: '3 min',
    enlace: '/postgrado/maestria-autofinanciada',
    estado: 'published',
    fecha_expiracion: null,
  },
  {
    id: 3,
    categoria: 'Eventos',
    color: '#64748b',
    fecha: '2025-03-05',
    titulo: 'Feria de Ciencia de Datos: estudiantes presentan proyectos de análisis social',
    extracto: 'La segunda edición reunió a más de 150 estudiantes con proyectos estadísticos innovadores orientados al desarrollo nacional.',
    imagen_url: '/images/inicio/noticia_feria.jpg',
    tiempo_lectura: '5 min',
    enlace: '/investigacion/revista-varianza',
    estado: 'published',
    fecha_expiracion: null,
  },
  {
    id: 4,
    categoria: 'Institucional',
    color: '#00447e',
    fecha: '2025-03-01',
    titulo: 'Actualización del Reglamento Académico de la Gestión de la Carrera',
    extracto: 'Nuevos lineamientos aprobados para agilizar los procesos de evaluación y el seguimiento estudiantil.',
    imagen_url: '/images/inicio/noticia_reglamento.jpg',
    tiempo_lectura: '2 min',
    enlace: '/institucional/reglamentos',
    estado: 'published',
    fecha_expiracion: null,
  },
  {
    id: 5,
    categoria: 'Postgrado',
    color: '#ea580c',
    fecha: '2025-02-27',
    titulo: 'Becas parciales para diplomados en estadística aplicada en el sector público',
    extracto: 'Convocatoria abierta para profesionales que buscan especializarse en el análisis de datos masivos y toma de decisiones.',
    imagen_url: '/images/inicio/noticia_becas.jpg',
    tiempo_lectura: '3 min',
    enlace: '/postgrado/diplomados',
    estado: 'published',
    fecha_expiracion: null,
  },
  {
    id: 6,
    categoria: 'Convocatorias',
    color: '#ea580c',
    fecha: '2025-02-20',
    titulo: 'Convocatoria de Auxiliaturas Académicas para la Gestión 2026',
    extracto: 'Se publican las plazas oficiales para postulantes a auxiliares de docencia y laboratorio en diversas materias.',
    imagen_url: '/images/inicio/noticia_auxiliaturas.jpg',
    tiempo_lectura: '4 min',
    enlace: '/estudiantes/convocatorias-auxiliaturas',
    estado: 'published',
    fecha_expiracion: null,
  },
];

const eventos = [
  {
    id: 1,
    fecha: '2025-03-20',
    color: '#00447e',
    categoria: 'Institucional',
    titulo: 'Inicio Censo Universitario 2025',
    hora: '08:00 — 17:00',
    ubicacion: 'Campus Central UMSA',
    estado: 'published',
  },
  {
    id: 2,
    fecha: '2025-03-25',
    color: '#00447e',
    categoria: 'Académico',
    titulo: 'Ceremonia de Graduación 2024',
    hora: '09:00 — 12:00',
    ubicacion: 'Auditorio Central UMSA',
    estado: 'published',
  },
  {
    id: 3,
    fecha: '2025-03-30',
    color: '#ea580c',
    categoria: 'Postgrado',
    titulo: 'Cierre de Inscripciones — Postgrado 2025',
    hora: '08:00 — 16:00',
    ubicacion: 'Secretaría de Postgrado, Piso 3',
    estado: 'published',
  },
  {
    id: 4,
    fecha: '2025-04-04',
    color: '#64748b',
    categoria: 'Taller',
    titulo: 'Taller de Introducción a Python para Estadísticos',
    hora: '14:00 — 18:00',
    ubicacion: 'Sala de Cómputo Principal',
    estado: 'published',
  },
  {
    id: 5,
    fecha: '2025-04-10',
    color: '#00447e',
    categoria: 'Investigación',
    titulo: 'Defensa de Tesis de Maestría en Estadística Aplicada',
    hora: '09:00 — 13:00',
    ubicacion: 'Sala del IETA',
    estado: 'published',
  },
  {
    id: 6,
    fecha: '2025-04-18',
    color: '#ea580c',
    categoria: 'Seminario',
    titulo: 'Seminario de Big Data e Inteligencia Artificial en INE Bolivia',
    hora: '10:00 — 12:00',
    ubicacion: 'Auditorio de la Facultad de Ciencias Puras',
    estado: 'published',
  },
];

async function count(table) {
  const res = await client.query(`SELECT COUNT(*) FROM ${table}`);
  return res.rows[0].count;
}

async function seedInicioData() {
  await client.connect();
  console.log('--- Conectado a PostgreSQL para sembrar noticias y eventos de Inicio ---');

  console.log(`noticia antes: ${await count('noticia')}`);
  console.log(`evento antes: ${await count('evento')}`);

  for (const n of noticias) {
    await client.query(
      `INSERT INTO noticia (id, categoria, color, fecha, titulo, extracto, imagen_url, tiempo_lectura, enlace, estado, fecha_expiracion)
       VALUES ($1, $2, $3, $4::date, $5, $6, $7, $8, $9, $10, $11::date)
       ON CONFLICT (id) DO NOTHING`,
      [n.id, n.categoria, n.color, n.fecha, n.titulo, n.extracto, n.imagen_url, n.tiempo_lectura, n.enlace, n.estado, n.fecha_expiracion],
    );
  }
  await client.query(
    `SELECT setval(pg_get_serial_sequence('noticia', 'id'), (SELECT MAX(id) FROM noticia))`,
  );

  for (const e of eventos) {
    await client.query(
      `INSERT INTO evento (id, fecha, color, categoria, titulo, hora, ubicacion, estado)
       VALUES ($1, $2::date, $3, $4, $5, $6, $7, $8)
       ON CONFLICT (id) DO NOTHING`,
      [e.id, e.fecha, e.color, e.categoria, e.titulo, e.hora, e.ubicacion, e.estado],
    );
  }
  await client.query(
    `SELECT setval(pg_get_serial_sequence('evento', 'id'), (SELECT MAX(id) FROM evento))`,
  );

  console.log(`noticia después: ${await count('noticia')}`);
  console.log(`evento después: ${await count('evento')}`);

  await client.end();
}

seedInicioData().catch((err) => {
  console.error('Error al sembrar noticias y eventos de Inicio:', err);
  process.exit(1);
});