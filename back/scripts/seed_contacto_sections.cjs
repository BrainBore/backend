const { Client } = require('pg');

const SLUG = '/contacto';

// Valores IGUALES a los de src/services/contactData.js del sitio.
// Formato: [clave_campo, valor, tipo]  (tipo 'texto' si se omite)
const ROWS = [
  ['contacto_hero_eyebrow', 'Atención institucional y soporte'],
  ['contacto_hero_titulo_01', 'Centro de Atención'],
  ['contacto_hero_titulo_02', 'Contacto Oficial'],
  ['contacto_hero_descripcion', 'Canal unificado para consultas académicas, administrativas y de investigación de la Carrera de Estadística UMSA.'],
  ['contacto_hero_boton', 'Enviar consulta'],
  ['contacto_faq_01_pregunta', '¿Cómo solicito mi récord académico actualizado?'],
  ['contacto_faq_01_respuesta', 'Debes presentar una carta de solicitud en Kardex adjuntando la boleta de pago de valores universitarios. El trámite demora 48 horas hábiles.'],
  ['contacto_faq_02_pregunta', '¿Cuándo se publican las fechas del examen PSA?'],
  ['contacto_faq_02_respuesta', 'Las fechas del examen de dispensación (PSA) se publican en noviembre para semestre I y junio para semestre II en la sección de Admisiones.'],
  ['contacto_faq_03_pregunta', '¿Dónde debo entregar mis documentos de egreso?'],
  ['contacto_faq_03_respuesta', 'La documentación final para egreso debe entregarse en ventanilla de Secretaría de Kardex en la sede Monoblock Central.'],
  ['contacto_form_titulo_01', 'Envíanos un'],
  ['contacto_form_titulo_02', 'mensaje'],
  ['contacto_form_subtitulo', 'Te responderemos al correo proporcionado en un lapso de 24 horas hábiles.'],
  ['contacto_form_boton', 'Enviar mensaje'],
  ['contacto_form_interruptor_estudiante', 'Soy estudiante de la carrera'],
  ['contacto_form_categoria_01_etiqueta', 'Trámites académicos (Kardex)'],
  ['contacto_form_categoria_02_etiqueta', 'Pasantías y titulación'],
  ['contacto_form_categoria_03_etiqueta', 'Investigación y revista (IETA)'],
  ['contacto_form_categoria_04_etiqueta', 'Soporte técnico SIA'],
  ['contacto_form_categoria_05_etiqueta', 'Otras consultas'],
  ['contacto_form_campo_nombre', 'Nombre completo'],
  ['contacto_form_campo_correo', 'Correo electrónico'],
  ['contacto_form_campo_categoria', 'Tipo de consulta'],
  ['contacto_form_campo_ru', 'Registro Universitario (RU) - opcional'],
  ['contacto_form_campo_mensaje', 'Mensaje'],
  ['contacto_form_placeholder_nombre', 'Ej. Juan Pérez'],
  ['contacto_form_placeholder_correo', 'ejemplo@correo.com'],
  ['contacto_form_placeholder_categoria', 'Selecciona el área...'],
  ['contacto_form_placeholder_ru', 'Ej. 1234567'],
  ['contacto_form_placeholder_mensaje', 'Escribe los detalles de tu consulta aquí...'],
  ['contacto_form_mensaje_exito', 'Mensaje enviado correctamente. El equipo de soporte se pondrá en contacto pronto.'],
  ['contacto_tel_titulo', 'Central telefónica'],
  ['contacto_correo_titulo', 'Correos oficiales'],
  ['contacto_tel_01_unidad', 'Secretaría de Dirección'],
  ['contacto_tel_01_rol', 'Atención general de la carrera'],
  ['contacto_tel_01_numero', '2442100'],
  ['contacto_tel_01_extension', '123'],
  ['contacto_tel_01_numero_alterno', '2612915'],
  ['contacto_tel_02_unidad', 'Kardex Académico'],
  ['contacto_tel_02_rol', 'Récords, certificados y trámites'],
  ['contacto_tel_02_numero', '2442100'],
  ['contacto_tel_02_extension', '125'],
  ['contacto_tel_02_numero_alterno', ''],
  ['contacto_tel_03_unidad', 'Instituto IETA'],
  ['contacto_tel_03_rol', 'Investigación y consultorías'],
  ['contacto_tel_03_numero', '2612824'],
  ['contacto_tel_03_extension', 'N/A'],
  ['contacto_tel_03_numero_alterno', '2612844'],
  ['contacto_tel_04_unidad', 'Biblioteca Especializada'],
  ['contacto_tel_04_rol', 'Consultas y préstamos'],
  ['contacto_tel_04_numero', '2442100'],
  ['contacto_tel_04_extension', '130'],
  ['contacto_tel_04_numero_alterno', ''],
  ['contacto_tel_05_unidad', 'Centro de Estudiantes'],
  ['contacto_tel_05_rol', 'Representación y eventos'],
  ['contacto_tel_05_numero', '76543210'],
  ['contacto_tel_05_extension', 'Celular'],
  ['contacto_tel_05_numero_alterno', ''],
  ['contacto_correo_01_unidad', 'Consultas Generales'],
  ['contacto_correo_01_correo', 'estadistica@umsa.bo'],
  ['contacto_correo_01_descripcion', 'Consultas generales e información sobre la Carrera.'],
  ['contacto_correo_02_unidad', 'Dirección de Carrera'],
  ['contacto_correo_02_correo', 'direccion@estadistica.umsa.bo'],
  ['contacto_correo_02_descripcion', 'Asuntos oficiales e institucionales.'],
  ['contacto_correo_03_unidad', 'Kardex Académico'],
  ['contacto_correo_03_correo', 'kardex@estadistica.umsa.bo'],
  ['contacto_correo_03_descripcion', 'Envío de requisitos y consultas de trámites.'],
  ['contacto_correo_04_unidad', 'Instituto IETA'],
  ['contacto_correo_04_correo', 'ieta@umsa.bo'],
  ['contacto_correo_04_descripcion', 'Recepción de papers y proyectos.'],
  ['contacto_correo_05_unidad', 'Facebook Oficial'],
  ['contacto_correo_05_correo', 'https://www.facebook.com/estadisticaumsa'],
  ['contacto_correo_05_descripcion', 'Sigue nuestras publicaciones y transmisiones.'],
  ['contacto_sedes_etiqueta', 'Campus universitario'],
  ['contacto_sedes_titulo', 'Nuestras sedes'],
  ['contacto_sedes_subtitulo', 'La Carrera de Estadística opera en ubicaciones estratégicas para docencia, investigación y atención estudiantil.'],
  ['contacto_sede_01_etiqueta', 'Administración y pregrado'],
  ['contacto_sede_01_titulo', 'Sede Central'],
  ['contacto_sede_01_mapa_titulo', 'Mapa Monoblock UMSA'],
  ['contacto_sede_01_mapa_url', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2638891040327!2d-68.13110902484643!3d-16.50570658423851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2066c6b3e34b%3A0x6b14207865f5ed0!2sUniversidad%20Mayor%20de%20San%20Andr%C3%A9s%20(UMSA)!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo'],
  ['contacto_sede_01_detalle_01', 'Av. Villazón N° 1995, Plaza del Bicentenario. Edificio Viejo del Monoblock Central, 2do piso.'],
  ['contacto_sede_01_detalle_02', 'Lunes a Viernes (08:00 - 16:00 hrs)'],
  ['contacto_sede_01_detalle_03', 'Dirección, Kardex y aulas de pregrado.'],
  ['contacto_sede_02_etiqueta', 'Laboratorios e IETA'],
  ['contacto_sede_02_titulo', 'Sede Cota Cota'],
  ['contacto_sede_02_mapa_titulo', 'Mapa Cota Cota UMSA'],
  ['contacto_sede_02_mapa_url', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.2372728919634!2d-68.06941192484521!3d-16.53932758421066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2122601a4e1d%3A0x6b14207865f5ed0!2sCampus%20Universitario%20UMSA%20Cota%20Cota!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo'],
  ['contacto_sede_02_detalle_01', 'Calle 27 de Cota Cota, Campus Universitario. Edificio de la FCPN, 1er piso.'],
  ['contacto_sede_02_detalle_02', 'Lunes a Viernes (09:00 - 17:00 hrs)'],
  ['contacto_sede_02_detalle_03', 'Instituto IETA y laboratorios de cómputo.'],
  ['contacto_galeria_titulo_01', 'Nuestros'],
  ['contacto_galeria_titulo_02', 'espacios'],
  ['contacto_galeria_subtitulo', 'Infraestructura para formación, análisis de datos e investigación aplicada.'],
  ['contacto_galeria_item_01_titulo', 'Entrada principal de la Carrera'],
  ['contacto_galeria_item_01_subtitulo', 'Monoblock Central'],
  ['contacto_galeria_item_01_imagen', '/images/contacto/espacio_monoblock.jpg', 'imagen'],
  ['contacto_galeria_item_02_titulo', 'Laboratorio de computación'],
  ['contacto_galeria_item_02_subtitulo', 'Equipamiento especializado'],
  ['contacto_galeria_item_02_imagen', '/images/contacto/espacio_laboratorio.jpg', 'imagen'],
  ['contacto_galeria_item_03_titulo', 'Sala audiovisual'],
  ['contacto_galeria_item_03_subtitulo', 'Defensas y seminarios'],
  ['contacto_galeria_item_03_imagen', '/images/contacto/sala_audiovisual.png', 'imagen'],
];

async function seedContactoSections() {
  const DATABASE_URL = process.env.DATABASE_URL;
  if (!DATABASE_URL) {
    console.error('Falta DATABASE_URL. Ejecuta: node --env-file=.env scripts/seed_contacto_sections.cjs');
    process.exit(1);
  }

  const client = new Client({ connectionString: DATABASE_URL });
  await client.connect();
  console.log('--- Conectado a PostgreSQL para sembrar los textos de Contacto ---');
  console.log(`Filas a sembrar: ${ROWS.length}`);

  const before = await client.query('SELECT COUNT(*) FROM seccion_pagina');
  const beforeSlug = await client.query('SELECT COUNT(*) FROM seccion_pagina WHERE pagina_slug = $1', [SLUG]);
  console.log(`seccion_pagina total antes: ${before.rows[0].count}`);
  console.log(`seccion_pagina (slug "${SLUG}") antes: ${beforeSlug.rows[0].count}`);

  for (const [clave, valor, tipo = 'texto'] of ROWS) {
    await client.query(
      `INSERT INTO seccion_pagina (clave_campo, pagina_slug, valor, tipo)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (clave_campo) DO NOTHING`,
      [clave, SLUG, valor, tipo],
    );
  }

  const after = await client.query('SELECT COUNT(*) FROM seccion_pagina');
  const afterSlug = await client.query('SELECT COUNT(*) FROM seccion_pagina WHERE pagina_slug = $1', [SLUG]);
  console.log(`seccion_pagina total después: ${after.rows[0].count}`);
  console.log(`seccion_pagina (slug "${SLUG}") después: ${afterSlug.rows[0].count}`);

  await client.end();
}

seedContactoSections().catch((err) => {
  console.error('Error al sembrar los textos de Contacto:', err);
  process.exit(1);
});
