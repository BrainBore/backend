const { Client } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:123@localhost:5432/usuarios';

const client = new Client({ connectionString: DATABASE_URL });

async function seedPostgradoData() {
  await client.connect();
  console.log('--- Conectado a PostgreSQL para sembrar Postgrado ---');

  // 1. Conteos previos
  const initSec = await client.query('SELECT COUNT(*) FROM seccion_pagina');
  const initProg = await client.query('SELECT COUNT(*) FROM programa');
  const initMod = await client.query('SELECT COUNT(*) FROM modulo');
  const initOrg = await client.query('SELECT COUNT(*) FROM organiza_posgrado');
  const initInc = await client.query('SELECT COUNT(*) FROM incluye_posgrado');

  console.log('\nConteos iniciales:');
  console.log(`seccion_pagina: ${initSec.rows[0].count}`);
  console.log(`programa: ${initProg.rows[0].count}`);
  console.log(`modulo: ${initMod.rows[0].count}`);
  console.log(`organiza_posgrado: ${initOrg.rows[0].count}`);
  console.log(`incluye_posgrado: ${initInc.rows[0].count}`);

  // 2. Sembrar PROGRAMA
  console.log('\nSembrando PROGRAMA...');
  const programas = [
    { id: 1, nombre: 'Maestría Terminal en Estadística', tipo: 'Maestría', costo: 'Gratuito / Aporte regular UMSA' },
    { id: 2, nombre: 'Maestría en Ciencia y Análisis de Datos', tipo: 'Maestría Autofinanciada', costo: '18.000 Bs. (Colegiatura)' },
    { id: 3, nombre: 'Ciencia de Datos con R y Python', tipo: 'Diplomado', costo: '4.500 Bs.' },
    { id: 4, nombre: 'Bioestadística Aplicada', tipo: 'Diplomado', costo: '5.200 Bs.' },
    { id: 5, nombre: 'Econometría y Modelos Financieros', tipo: 'Diplomado', costo: '4.800 Bs.' },
  ];

  for (const p of programas) {
    await client.query(`
      INSERT INTO programa (id_programa, nombre, tipo, costo)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (id_programa) DO UPDATE
      SET nombre = EXCLUDED.nombre,
          tipo = EXCLUDED.tipo,
          costo = EXCLUDED.costo
    `, [p.id, p.nombre, p.tipo, p.costo]);
  }
  await client.query(`SELECT setval(pg_get_serial_sequence('programa', 'id_programa'), (SELECT MAX(id_programa) FROM programa))`);

  // 3. Sembrar MODULO, INCLUYE_POSGRADO y ORGANIZA_POSGRADO
  console.log('Sembrando MODULO, INCLUYE_POSGRADO y ORGANIZA_POSGRADO...');
  const modulos = [
    // Maestría Terminal (id_programa: 1)
    { id: 1, progId: 1, num: 'Módulo I', titulo: 'Optimización y modelos lineales', hp: '240 hrs', hi: '360 hrs' },
    { id: 2, progId: 1, num: 'Módulo II', titulo: 'Inferencia avanzada', hp: '240 hrs', hi: '360 hrs' },
    { id: 3, progId: 1, num: 'Módulo III', titulo: 'Series de tiempo y simulación', hp: '240 hrs', hi: '360 hrs' },
    { id: 4, progId: 1, num: 'Módulo IV', titulo: 'Investigación aplicada y Taller de grado', hp: '280 hrs', hi: '320 hrs' },

    // Maestría Autofinanciada (id_programa: 2)
    { id: 5, progId: 2, num: 'Módulo I', titulo: 'Diplomado en Ciencia de Datos', hp: '200 hrs', hi: '300 hrs' },
    { id: 6, progId: 2, num: 'Módulo II', titulo: 'Diplomado en Big Data y Taller de Tesis I', hp: '240 hrs', hi: '320 hrs' },
    { id: 7, progId: 2, num: 'Módulo III', titulo: 'Diplomado en Data Mining y Taller de Tesis II', hp: '240 hrs', hi: '320 hrs' },
    { id: 8, progId: 2, num: 'Módulo IV', titulo: 'Maestría en Ciencia y Análisis de Datos y Taller III', hp: '280 hrs', hi: '360 hrs' },

    // Diplomado R y Python (id_programa: 3)
    { id: 9, progId: 3, num: 'Módulo I', titulo: 'Fundamentos avanzados de programación en R y Python', hp: '80 hrs', hi: '120 hrs' },
    { id: 10, progId: 3, num: 'Módulo II', titulo: 'Análisis exploratorio y limpieza de datos', hp: '80 hrs', hi: '120 hrs' },
    { id: 11, progId: 3, num: 'Módulo III', titulo: 'Modelamiento y algoritmos de predicción', hp: '80 hrs', hi: '120 hrs' },
    { id: 12, progId: 3, num: 'Módulo IV', titulo: 'Visualización interactiva y reporte de resultados', hp: '80 hrs', hi: '120 hrs' },

    // Diplomado Bioestadística (id_programa: 4)
    { id: 13, progId: 4, num: 'Módulo I', titulo: 'Fundamentos estadísticos en ciencias de la salud', hp: '80 hrs', hi: '120 hrs' },
    { id: 14, progId: 4, num: 'Módulo II', titulo: 'Diseño epidemiológico y muestreo clínico', hp: '80 hrs', hi: '120 hrs' },
    { id: 15, progId: 4, num: 'Módulo III', titulo: 'Supervivencia y regresión logística', hp: '80 hrs', hi: '120 hrs' },
    { id: 16, progId: 4, num: 'Módulo IV', titulo: 'Software estadístico aplicado a bioestadística', hp: '80 hrs', hi: '120 hrs' },

    // Diplomado Econometría (id_programa: 5)
    { id: 17, progId: 5, num: 'Módulo I', titulo: 'Fundamentos de econometría y álgebra matricial', hp: '80 hrs', hi: '120 hrs' },
    { id: 18, progId: 5, num: 'Módulo II', titulo: 'Series de tiempo estacionarias y no estacionarias', hp: '80 hrs', hi: '120 hrs' },
    { id: 19, progId: 5, num: 'Módulo III', titulo: 'Modelos ARCH GARCH y riesgo financiero', hp: '80 hrs', hi: '120 hrs' },
    { id: 20, progId: 5, num: 'Módulo IV', titulo: 'Taller aplicado de modelación económica y financiera', hp: '80 hrs', hi: '120 hrs' },
  ];

  for (const m of modulos) {
    await client.query(`
      INSERT INTO modulo (id_modulo, titulo_modulo, numero_modulo)
      VALUES ($1, $2, $3)
      ON CONFLICT (id_modulo) DO UPDATE
      SET titulo_modulo = EXCLUDED.titulo_modulo,
          numero_modulo = EXCLUDED.numero_modulo
    `, [m.id, m.titulo, m.num]);

    await client.query(`
      INSERT INTO incluye_posgrado (id_modulo, horas_presencial, horas_investigacion)
      VALUES ($1, $2, $3)
      ON CONFLICT (id_modulo) DO UPDATE
      SET horas_presencial = EXCLUDED.horas_presencial,
          horas_investigacion = EXCLUDED.horas_investigacion
    `, [m.id, m.hp, m.hi]);

    await client.query(`
      INSERT INTO organiza_posgrado (id_programa, id_modulo)
      VALUES ($1, $2)
      ON CONFLICT (id_programa, id_modulo) DO NOTHING
    `, [m.progId, m.id]);
  }
  await client.query(`SELECT setval(pg_get_serial_sequence('modulo', 'id_modulo'), (SELECT MAX(id_modulo) FROM modulo))`);

  // 4. Sembrar SECCION_PAGINA para Postgrado (solo textos e imágenes, sin tocar existentes)
  console.log('Sembrando SECCION_PAGINA para Postgrado...');
  const postgradoSections = [
    // --- /postgrado/maestria-terminal ---
    { clave_campo: 'pos_terminal_hero_eyebrow', pagina_slug: '/postgrado/maestria-terminal', valor: 'Programa de excelencia', tipo: 'texto' },
    { clave_campo: 'pos_terminal_hero_titulo_01', pagina_slug: '/postgrado/maestria-terminal', valor: 'Maestría Terminal', tipo: 'texto' },
    { clave_campo: 'pos_terminal_hero_titulo_02', pagina_slug: '/postgrado/maestria-terminal', valor: 'en Estadística', tipo: 'texto' },
    { clave_campo: 'pos_terminal_hero_descripcion', pagina_slug: '/postgrado/maestria-terminal', valor: 'Formación avanzada para profesionales que lideran investigación, modelado matemático y ciencia de datos con rigor científico y proyección internacional.', tipo: 'texto' },
    { clave_campo: 'pos_terminal_hero_highlight_01', pagina_slug: '/postgrado/maestria-terminal', valor: 'Modalidad modular', tipo: 'texto' },
    { clave_campo: 'pos_terminal_hero_highlight_02', pagina_slug: '/postgrado/maestria-terminal', valor: 'Enfoque investigativo', tipo: 'texto' },
    { clave_campo: 'pos_terminal_hero_highlight_03', pagina_slug: '/postgrado/maestria-terminal', valor: 'Proyección Ph.D.', tipo: 'texto' },
    { clave_campo: 'pos_terminal_hero_cta_principal', pagina_slug: '/postgrado/maestria-terminal', valor: 'Descargar convocatoria oficial', tipo: 'texto' },
    { clave_campo: 'pos_terminal_hero_cta_secundario', pagina_slug: '/postgrado/maestria-terminal', valor: 'Ver plan de estudios', tipo: 'texto' },

    { clave_campo: 'pos_terminal_perfil_tag', pagina_slug: '/postgrado/maestria-terminal', valor: 'Perfil de egreso', tipo: 'texto' },
    { clave_campo: 'pos_terminal_perfil_titulo', pagina_slug: '/postgrado/maestria-terminal', valor: 'Alta capacidad analítica', tipo: 'texto' },
    { clave_campo: 'pos_terminal_perfil_sub', pagina_slug: '/postgrado/maestria-terminal', valor: 'El egresado domina inferencia bajo incertidumbre, optimización, modelado avanzado y dirección técnica de proyectos cuantitativos.', tipo: 'texto' },

    { clave_campo: 'pos_terminal_curriculum_tag', pagina_slug: '/postgrado/maestria-terminal', valor: 'Organización académica', tipo: 'texto' },
    { clave_campo: 'pos_terminal_curriculum_titulo', pagina_slug: '/postgrado/maestria-terminal', valor: 'Plan de estudios modular', tipo: 'texto' },
    { clave_campo: 'pos_terminal_curriculum_sub', pagina_slug: '/postgrado/maestria-terminal', valor: 'La estructura curricular integra progresivamente optimización, inferencia avanzada, series de tiempo y cierre investigativo con taller de grado.', tipo: 'texto' },
    { clave_campo: 'pos_terminal_curriculum_nota', pagina_slug: '/postgrado/maestria-terminal', valor: 'Cada módulo conserva el mismo peso académico y culmina en un curso o proyecto de avance.', tipo: 'texto' },

    { clave_campo: 'pos_terminal_admision_tag', pagina_slug: '/postgrado/maestria-terminal', valor: 'Admisión', tipo: 'texto' },
    { clave_campo: 'pos_terminal_admision_titulo', pagina_slug: '/postgrado/maestria-terminal', valor: 'Dossier de ingreso', tipo: 'texto' },
    { clave_campo: 'pos_terminal_admision_sub', pagina_slug: '/postgrado/maestria-terminal', valor: 'La documentación debe acreditar legalidad, respaldo académico y dominio básico de un idioma extranjero.', tipo: 'texto' },

    { clave_campo: 'pos_terminal_campo_tag', pagina_slug: '/postgrado/maestria-terminal', valor: 'Proyección', tipo: 'texto' },
    { clave_campo: 'pos_terminal_campo_titulo', pagina_slug: '/postgrado/maestria-terminal', valor: 'Ecosistema laboral y académico', tipo: 'texto' },
    { clave_campo: 'pos_terminal_campo_sub', pagina_slug: '/postgrado/maestria-terminal', valor: 'La maestría habilita al profesional para liderar proyectos cuantitativos, consultoría de alto nivel y docencia universitaria.', tipo: 'texto' },

    // --- /postgrado/maestria-autofinanciada ---
    { clave_campo: 'pos_autofin_hero_eyebrow', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Maestría Autofinanciada · UMSA', tipo: 'texto' },
    { clave_campo: 'pos_autofin_hero_titulo_01', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Maestría en Ciencia', tipo: 'texto' },
    { clave_campo: 'pos_autofin_hero_titulo_02', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'y Análisis de Datos', tipo: 'texto' },
    { clave_campo: 'pos_autofin_hero_titulo_03', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Gestión 2026', tipo: 'texto' },
    { clave_campo: 'pos_autofin_hero_descripcion', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Programa de postgrado con mención terminal orientada a la industria tecnológica, análisis masivo, minería de datos y modelación predictiva en tiempo real.', tipo: 'texto' },
    { clave_campo: 'pos_autofin_hero_inversion', pagina_slug: '/postgrado/maestria-autofinanciada', valor: '18.000 Bs.', tipo: 'texto' },
    { clave_campo: 'pos_autofin_hero_duracion', pagina_slug: '/postgrado/maestria-autofinanciada', valor: '2 Años', tipo: 'texto' },
    { clave_campo: 'pos_autofin_hero_titulacion', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Tesis / Taller', tipo: 'texto' },
    { clave_campo: 'pos_autofin_hero_cuotas', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Hasta 4 cuotas', tipo: 'texto' },

    { clave_campo: 'pos_autofin_perfil_tag', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Competencias clave', tipo: 'texto' },
    { clave_campo: 'pos_autofin_perfil_titulo', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Perfil del Postgraduante', tipo: 'texto' },
    { clave_campo: 'pos_autofin_perfil_sub', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Desarrolla habilidades directivas y técnicas para liderar departamentos de ciencia de datos, arquitectura de información y toma de decisiones corporativas.', tipo: 'texto' },

    { clave_campo: 'pos_autofin_curriculum_tag', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Organización académica', tipo: 'texto' },
    { clave_campo: 'pos_autofin_curriculum_titulo', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Plan de estudios modular', tipo: 'texto' },
    { clave_campo: 'pos_autofin_curriculum_sub', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'La estructura modular permite certificaciones intermedias y cierre de maestría con talleres de tesis progresivos.', tipo: 'texto' },
    { clave_campo: 'pos_autofin_curriculum_nota', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Cada módulo consolida una etapa con un diploma de avance.', tipo: 'texto' },

    { clave_campo: 'pos_autofin_admision_tag', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Trámite administrativo', tipo: 'texto' },
    { clave_campo: 'pos_autofin_admision_titulo', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Requisitos de admisión', tipo: 'texto' },
    { clave_campo: 'pos_autofin_admision_sub', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'La admisión se organiza por dos vías de titulación, con documentación estándar y presentación física en folder azul.', tipo: 'texto' },

    { clave_campo: 'pos_autofin_cta_titulo', pagina_slug: '/postgrado/maestria-autofinanciada', valor: '¿Listo para impulsar tu carrera al siguiente nivel?', tipo: 'texto' },
    { clave_campo: 'pos_autofin_cta_sub', pagina_slug: '/postgrado/maestria-autofinanciada', valor: 'Las postulaciones para la gestión académica 2026 están abiertas. Cupos limitados para garantizar excelencia académica.', tipo: 'texto' },

    // --- /postgrado/diplomados ---
    { clave_campo: 'pos_dip_hero_eyebrow', pagina_slug: '/postgrado/diplomados', valor: 'Programas de certificación corta', tipo: 'texto' },
    { clave_campo: 'pos_dip_hero_titulo_01', pagina_slug: '/postgrado/diplomados', valor: 'Diplomados y', tipo: 'texto' },
    { clave_campo: 'pos_dip_hero_titulo_02', pagina_slug: '/postgrado/diplomados', valor: 'Especialidades', tipo: 'texto' },
    { clave_campo: 'pos_dip_hero_descripcion', pagina_slug: '/postgrado/diplomados', valor: 'Oferta de actualización profesional orientada a analítica aplicada, investigación y toma de decisiones en contextos reales.', tipo: 'texto' },
    { clave_campo: 'pos_dip_hero_highlight_01', pagina_slug: '/postgrado/diplomados', valor: 'Convocatorias vigentes', tipo: 'texto' },
    { clave_campo: 'pos_dip_hero_highlight_02', pagina_slug: '/postgrado/diplomados', valor: 'Modalidad flexible', tipo: 'texto' },
    { clave_campo: 'pos_dip_hero_highlight_03', pagina_slug: '/postgrado/diplomados', valor: 'Enfoque estadístico', tipo: 'texto' },

    { clave_campo: 'pos_dip_requisitos_tag', pagina_slug: '/postgrado/diplomados', valor: 'Admisión e Inscripción', tipo: 'texto' },
    { clave_campo: 'pos_dip_requisitos_titulo', pagina_slug: '/postgrado/diplomados', valor: 'Requisitos Generales', tipo: 'texto' },
    { clave_campo: 'pos_dip_requisitos_sub', pagina_slug: '/postgrado/diplomados', valor: 'Proceso simple y transparente para profesionales de todas las áreas cuantitativas y aplicadas.', tipo: 'texto' },
  ];

  let insertCount = 0;
  for (const s of postgradoSections) {
    const res = await client.query(`
      INSERT INTO seccion_pagina (clave_campo, pagina_slug, valor, tipo)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (clave_campo) DO NOTHING
    `, [s.clave_campo, s.pagina_slug, s.valor, s.tipo]);
    if (res.rowCount > 0) insertCount++;
  }
  console.log(`Nuevas secciones de postgrado insertadas: ${insertCount}`);

  // 5. Verificación de conteos finales
  const finSec = await client.query('SELECT COUNT(*) FROM seccion_pagina');
  const finProg = await client.query('SELECT COUNT(*) FROM programa');
  const finMod = await client.query('SELECT COUNT(*) FROM modulo');
  const finOrg = await client.query('SELECT COUNT(*) FROM organiza_posgrado');
  const finInc = await client.query('SELECT COUNT(*) FROM incluye_posgrado');

  console.log('\nConteos finales:');
  console.log(`seccion_pagina: ${finSec.rows[0].count} (antes: ${initSec.rows[0].count})`);
  console.log(`programa: ${finProg.rows[0].count}`);
  console.log(`modulo: ${finMod.rows[0].count}`);
  console.log(`organiza_posgrado: ${finOrg.rows[0].count}`);
  console.log(`incluye_posgrado: ${finInc.rows[0].count}`);

  console.log('\n--- Siembra de Postgrado completada con éxito ---');
  await client.end();
}

seedPostgradoData().catch((err) => {
  console.error('Error al sembrar datos de postgrado:', err);
  process.exit(1);
});
