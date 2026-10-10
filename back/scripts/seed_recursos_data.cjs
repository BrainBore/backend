const { Client } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:123@localhost:5432/usuarios';

const client = new Client({ connectionString: DATABASE_URL });

async function seedRecursos() {
  await client.connect();
  console.log('--- Conectado a PostgreSQL para sembrar datos de Recursos ---');

  // 1. Sembrar AUTOR
  console.log('Sembrando autor...');
  const autores = [
    { id: 1, nombre: 'Wackerly, Dennis D.', area: 'Estadística Matemática', tipo: 'persona', ubicacion: 'Universidad de Florida' },
    { id: 2, nombre: 'Walpole, Ronald E.', area: 'Probabilidad e Inferencia', tipo: 'persona', ubicacion: 'Roanoke College' },
    { id: 3, nombre: 'Montgomery, Douglas C.', area: 'Diseño de Experimentos', tipo: 'persona', ubicacion: 'Arizona State University' },
    { id: 4, nombre: 'Devore, Jay L.', area: 'Ingeniería y Ciencias', tipo: 'persona', ubicacion: 'California Poly. State Univ.' },
    { id: 5, nombre: 'Cochran, William G.', area: 'Técnicas de Muestreo', tipo: 'persona', ubicacion: 'Harvard University' },
    { id: 6, nombre: 'Mendenhall, William', area: 'Estadística Matemática', tipo: 'persona', ubicacion: 'Universidad de Florida' },
    { id: 7, nombre: 'Instituto Nacional de Estadística (INE)', area: 'Censos y Encuestas Oficiales', tipo: 'institucion', ubicacion: 'Estado Plurinacional de Bolivia' },
    { id: 8, nombre: 'Coa Clemente, Ramiro', area: 'Demografía y Estadística Social', tipo: 'persona', ubicacion: 'IETA - UMSA' },
    { id: 9, nombre: 'Banco Central de Bolivia (BCB)', area: 'Indicadores Macroeconómicos', tipo: 'institucion', ubicacion: 'Estado Plurinacional de Bolivia' },
    { id: 10, nombre: 'Carrera de Estadística UMSA', area: 'Colección Institucional', tipo: 'institucion', ubicacion: 'Universidad Mayor de San Andrés' },
  ];

  for (const a of autores) {
    await client.query(`
      INSERT INTO autor (id, nombre, area, tipo, ubicacion)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (id) DO UPDATE
      SET nombre = EXCLUDED.nombre,
          area = EXCLUDED.area,
          tipo = EXCLUDED.tipo,
          ubicacion = EXCLUDED.ubicacion
    `, [a.id, a.nombre, a.area, a.tipo, a.ubicacion]);
  }
  await client.query(`SELECT setval(pg_get_serial_sequence('autor', 'id'), (SELECT MAX(id) FROM autor))`);

  // 2. Sembrar LIBRO
  console.log('Sembrando libro...');
  const libros = [
    {
      id: 1,
      titulo: 'Estadística Matemática con Aplicaciones',
      editor: 'Cengage Learning',
      descripcion_fisica: '944 páginas, il., 27 cm',
      codigo_isbn: '978-607-481-223-7',
      calificacion_dewey: '519.5 W115e',
      temas: 'Estadística Matemática, Probabilidad, Muestreo, Estimación puntual',
      link: 'https://bibliotecas.umsa.bo/cgi-bin/koha/opac-detail.pl?biblionumber=73656',
      id_autor: 1,
    },
    {
      id: 2,
      titulo: 'Probabilidad y Estadística para Ingeniería y Ciencias',
      editor: 'Pearson Educación',
      descripcion_fisica: '792 páginas, il., 25 cm',
      codigo_isbn: '978-607-32-1416-2',
      calificacion_dewey: '519.2 W218p',
      temas: 'Variables aleatorias, Distribuciones de probabilidad, Regresión lineal',
      link: 'https://bibliotecas.umsa.bo/cgi-bin/koha/opac-detail.pl?biblionumber=72723',
      id_autor: 2,
    },
    {
      id: 3,
      titulo: 'Diseño y Análisis de Experimentos',
      editor: 'Limusa Wiley',
      descripcion_fisica: '686 páginas, il., 26 cm',
      codigo_isbn: '978-968-18-6156-8',
      calificacion_dewey: '519.53 M787d',
      temas: 'ANOVA, Diseños factoriales, Superficies de respuesta, Control de calidad',
      link: 'https://bibliotecas.umsa.bo/cgi-bin/koha/opac-detail.pl?biblionumber=72778',
      id_autor: 3,
    },
    {
      id: 4,
      titulo: 'Probabilidad y Estadística para Ingeniería y Ciencias (Devore)',
      editor: 'Thomson Paraninfo',
      descripcion_fisica: '750 páginas, il., 26 cm',
      codigo_isbn: '978-970-686-457-4',
      calificacion_dewey: '519.5 D498p',
      temas: 'Inferencia estadística, Pruebas de hipótesis, Métodos no paramétricos',
      link: 'https://bibliotecas.umsa.bo/cgi-bin/koha/opac-detail.pl?biblionumber=72668',
      id_autor: 4,
    },
    {
      id: 5,
      titulo: 'Técnicas de Muestreo',
      editor: 'Compañía Editorial Continental',
      descripcion_fisica: '513 páginas, il., 23 cm',
      codigo_isbn: '978-968-26-0310-5',
      calificacion_dewey: '519.52 C663t',
      temas: 'Muestreo aleatorio simple, Estratificación, Conglomerados, Errores no muestrales',
      link: 'https://bibliotecas.umsa.bo/cgi-bin/koha/opac-detail.pl?biblionumber=72567',
      id_autor: 5,
    },
  ];

  for (const l of libros) {
    await client.query(`
      INSERT INTO libro (id, titulo, editor, descripcion_fisica, codigo_isbn, calificacion_dewey, temas, link, id_autor)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      ON CONFLICT (id) DO UPDATE
      SET titulo = EXCLUDED.titulo,
          editor = EXCLUDED.editor,
          descripcion_fisica = EXCLUDED.descripcion_fisica,
          codigo_isbn = EXCLUDED.codigo_isbn,
          calificacion_dewey = EXCLUDED.calificacion_dewey,
          temas = EXCLUDED.temas,
          link = EXCLUDED.link,
          id_autor = EXCLUDED.id_autor
    `, [l.id, l.titulo, l.editor, l.descripcion_fisica, l.codigo_isbn, l.calificacion_dewey, l.temas, l.link, l.id_autor]);
  }
  await client.query(`SELECT setval(pg_get_serial_sequence('libro', 'id'), (SELECT MAX(id) FROM libro))`);

  // 3. Sembrar REVISTA
  console.log('Sembrando revista...');
  const revistas = [
    {
      id: 1,
      titulo: 'International Journal of Statistics and Applications',
      tipo: 'Revista Científica',
      publicacion: 'Scientific & Academic Publishing',
      autor: 'Comité Editorial Internacional',
      descripcion: 'Revista científica internacional que publica artículos originales en todas las áreas teóricas y aplicadas de la estadística.',
      link: 'http://www.sapub.org/journal/about.aspx?journalid=1115',
    },
    {
      id: 2,
      titulo: 'Revista Varianza',
      tipo: 'Revista Científica',
      publicacion: 'IETA - Carrera de Estadística UMSA',
      autor: 'Instituto de Estadística Teórica y Aplicada',
      descripcion: 'Revista oficial de investigación de la Carrera de Estadística y el IETA. Publica trabajos teóricos y aplicados con impacto nacional.',
      link: 'https://ojs.umsa.bo/ojs/index.php/varianza',
    },
    {
      id: 3,
      titulo: 'Revista Colombiana de Estadística',
      tipo: 'Revista Científica',
      publicacion: 'Universidad Nacional de Colombia',
      autor: 'Departamento de Estadística UNAL',
      descripcion: 'Publicación científica de referencia en América Latina orientada a la difusión de trabajos teóricos y aplicados de estadística.',
      link: 'https://revistas.unal.edu.co/index.php/estad',
    },
    {
      id: 4,
      titulo: 'Boletín DTIC - Universidad Mayor de San Andrés',
      tipo: 'Boletín Informativo',
      publicacion: 'Departamento de Tecnologías de Información y Comunicación',
      autor: 'DTIC UMSA',
      descripcion: 'Publicaciones oficiales de la UMSA referidas a infraestructura tecnológica, sistemas académicos y de comunicación universitaria.',
      link: 'https://dtic.umsa.bo/',
    },
  ];

  for (const r of revistas) {
    await client.query(`
      INSERT INTO revista (id, titulo, tipo, publicacion, autor, descripcion, link)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      ON CONFLICT (id) DO UPDATE
      SET titulo = EXCLUDED.titulo,
          tipo = EXCLUDED.tipo,
          publicacion = EXCLUDED.publicacion,
          autor = EXCLUDED.autor,
          descripcion = EXCLUDED.descripcion,
          link = EXCLUDED.link
    `, [r.id, r.titulo, r.tipo, r.publicacion, r.autor, r.descripcion, r.link]);
  }
  await client.query(`SELECT setval(pg_get_serial_sequence('revista', 'id'), (SELECT MAX(id) FROM revista))`);

  // 4. Sembrar DOCUMENTO_DIGITAL
  console.log('Sembrando documento_digital...');
  const documentos = [
    {
      id: 1,
      titulo: 'Formulario de Solicitud de Auxiliaturas de Docencia e Investigación',
      tipo: 'Formularios y Trámites',
      peso: 'Carpeta Drive',
      fecha_actualizacion: '2026-02-15',
      link_descarga: 'https://drive.google.com/drive/folders/1gxt5Gjrn9rKfr9s-G0o10ogmbS7CG9kW?usp=sharing',
    },
    {
      id: 2,
      titulo: 'Formulario Parte de Asistencia (Auxiliares)',
      tipo: 'Formularios y Trámites',
      peso: 'Carpeta Drive',
      fecha_actualizacion: '2026-02-15',
      link_descarga: 'https://drive.google.com/drive/folders/1ZUGJ7KuqRSYjpwa2o_jUB5Ht7y9bDBDl?usp=sharing',
    },
    {
      id: 3,
      titulo: 'Formulario de Solicitud de Defensa de Panel',
      tipo: 'Formularios y Trámites',
      peso: '1.2 MB',
      fecha_actualizacion: '2026-02-15',
      link_descarga: 'https://drive.google.com/uc?export=download&id=1WA_ulsKaEjg5KN2FpMR0RuXR0iMNFkUv',
    },
    {
      id: 4,
      titulo: 'Formulario de Declaración Jurada',
      tipo: 'Formularios y Trámites',
      peso: '450 KB',
      fecha_actualizacion: '2026-02-15',
      link_descarga: 'https://drive.google.com/uc?export=download&id=1kbBCfn_9rtguukgrwzF8XvTyLcTxq23t',
    },
  ];

  for (const d of documentos) {
    await client.query(`
      INSERT INTO documento_digital (id, titulo, tipo, peso, fecha_actualizacion, link_descarga)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (id) DO UPDATE
      SET titulo = EXCLUDED.titulo,
          tipo = EXCLUDED.tipo,
          peso = EXCLUDED.peso,
          fecha_actualizacion = EXCLUDED.fecha_actualizacion,
          link_descarga = EXCLUDED.link_descarga
    `, [d.id, d.titulo, d.tipo, d.peso, d.fecha_actualizacion, d.link_descarga]);
  }
  await client.query(`SELECT setval(pg_get_serial_sequence('documento_digital', 'id'), (SELECT MAX(id) FROM documento_digital))`);

  // 5. Sembrar TESIS
  console.log('Sembrando tesis...');
  const tesisList = [
    {
      id: 1,
      titulo: 'Aplicación práctica del análisis de correspondencia simple, en la interpretación de la gravedad de accidentes de trabajo en Bolivia: caso Instituto Nacional de Salud Ocupacional',
      tipo: 'Trabajo Dirigido',
      area: 'Análisis de correspondencia',
      tutor: 'Lic. Alizon Emilze Pérez Butrón',
      investigador: 'Pérez Butrón, Alizon Emilze',
      resumen: 'Introducción 2. Metodología 3. Aplicación 4. Conclusiones, aportes y recomendaciones finales sobre accidentabilidad laboral.',
      link: 'https://repositorio.umsa.bo/handle/123456789/5332',
    },
    {
      id: 2,
      titulo: 'Clasificación mediante redes neuronales y conglomerados no jerárquicos de las condiciones de vida de los hogares de Bolivia',
      tipo: 'Tesis',
      area: 'Redes neuronales y minería',
      tutor: 'Dr. Ramiro Coa Clemente',
      investigador: 'Flores Rivero, Luis Fernando',
      resumen: 'Modelado no lineal y clasificación mediante mapas autoorganizados y redes feed-forward de condiciones de vida en Bolivia.',
      link: 'https://repositorio.umsa.bo/handle/123456789/5336',
    },
    {
      id: 3,
      titulo: 'Estudio del impacto de la acreditación en el aprovechamiento académico de la Carrera de Ingeniería Agronómica por el método de suavización exponencial de Holt-Winters',
      tipo: 'Trabajo Dirigido',
      area: 'Series de tiempo y econometría',
      tutor: 'Lic. Alizon Emilze Pérez Butrón',
      investigador: 'Aramayo Muñoz, Thelma Paola',
      resumen: 'Pronóstico de aprovechamiento académico mediante métodos de suavización exponencial multivariante y evaluación institucional.',
      link: 'https://repositorio.umsa.bo/handle/123456789/17617',
    },
    {
      id: 4,
      titulo: 'Diseño de encuestas tipo panel rotatorio con traslape parcial',
      tipo: 'Tesis',
      area: 'Muestreo probabilístico',
      tutor: 'M.Sc. William Cochran Quispe',
      investigador: 'Crespo Chuquimia, Mercy',
      resumen: 'Desarrollo analítico de varianzas compuestas en paneles rotativos y fórmulas de estimación óptima bajo traslape muestral.',
      link: 'https://repositorio.umsa.bo/handle/123456789/5330',
    },
  ];

  for (const t of tesisList) {
    await client.query(`
      INSERT INTO tesis (id, titulo, tipo, area, tutor, investigador, resumen, link)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ON CONFLICT (id) DO UPDATE
      SET titulo = EXCLUDED.titulo,
          tipo = EXCLUDED.tipo,
          area = EXCLUDED.area,
          tutor = EXCLUDED.tutor,
          investigador = EXCLUDED.investigador,
          resumen = EXCLUDED.resumen,
          link = EXCLUDED.link
    `, [t.id, t.titulo, t.tipo, t.area, t.tutor, t.investigador, t.resumen, t.link]);
  }
  await client.query(`SELECT setval(pg_get_serial_sequence('tesis', 'id'), (SELECT MAX(id) FROM tesis))`);

  // 6. Sembrar BANCO_DATOS y DATOS_ARCHIVO
  console.log('Sembrando banco_datos y datos_archivo...');
  const bancos = [
    {
      id: 1,
      titulo: 'Censo Nacional de Población y Vivienda 1976',
      tipo: 'Censos',
      fuente: 'Instituto Nacional de Estadística (INE)',
      anio: 1976,
      resumen: 'Base de datos histórica oficial del Censo Nacional de Población y Vivienda de 1976. Contiene el consolidado nacional de población y vivienda en formato CSV.',
      archivos: [
        { id: 1, titulo: 'Censo Nacional 1976 - BOLIVIA (Completo)', formato: 'CSV', peso: '290 MB', link_descarga: 'https://drive.google.com/file/d/12gjhJ9_j02UAedZ9xrhKrrLKDY6oVSNT/view?usp=sharing' },
        { id: 2, titulo: 'Personas - Chuquisaca', formato: 'CSV', peso: '35 MB', link_descarga: 'https://drive.google.com/file/d/1TR7qJLR9vIQWpfVwwCOuv5Q5ZOAD0Sqy/view?usp=sharing' },
        { id: 3, titulo: 'Vivienda - Chuquisaca', formato: 'CSV', peso: '25 MB', link_descarga: 'https://drive.google.com/file/d/1Xk0IFjr0xGLr1vVK9dk8ObvFT4sMbuIk/view?usp=sharing' },
      ],
    },
    {
      id: 2,
      titulo: 'Censo Nacional de Población y Vivienda 1992',
      tipo: 'Censos',
      fuente: 'Instituto Nacional de Estadística (INE)',
      anio: 1992,
      resumen: 'Base de datos histórica del Censo de Población y Vivienda de 1992. Incluye el consolidado nacional de población y vivienda, y bases regionales en formato CSV.',
      archivos: [
        { id: 4, titulo: 'Censo Nacional 1992 - BOLIVIA (Completo)', formato: 'CSV', peso: '435 MB', link_descarga: 'https://drive.google.com/file/d/19U6vxMfh37sP-kTtsEi3d4qj1ZikgVQv/view?usp=sharing' },
        { id: 5, titulo: 'Personas - Chuquisaca', formato: 'CSV', peso: '45 MB', link_descarga: 'https://drive.google.com/file/d/17ree_T9z9TLJnKDu2uuD1TO-zXgRXmyU/view?usp=sharing' },
      ],
    },
    {
      id: 3,
      titulo: 'Censo Nacional de Población y Vivienda 2001',
      tipo: 'Censos',
      fuente: 'Instituto Nacional de Estadística (INE)',
      anio: 2001,
      resumen: 'Microdatos censales de 2001 con ponderaciones y codificación de municipios.',
      archivos: [
        { id: 6, titulo: 'Censo Nacional 2001 - Microdatos Consolidados', formato: 'CSV', peso: '480 MB', link_descarga: 'https://drive.google.com/file/d/censos2001' },
      ],
    },
  ];

  for (const b of bancos) {
    await client.query(`
      INSERT INTO banco_datos (id, titulo, tipo, fuente, anio, resumen)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (id) DO UPDATE
      SET titulo = EXCLUDED.titulo,
          tipo = EXCLUDED.tipo,
          fuente = EXCLUDED.fuente,
          anio = EXCLUDED.anio,
          resumen = EXCLUDED.resumen
    `, [b.id, b.titulo, b.tipo, b.fuente, b.anio, b.resumen]);

    for (const arc of b.archivos) {
      await client.query(`
        INSERT INTO datos_archivo (id, titulo, formato, peso, link_descarga, id_banco_datos)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (id) DO UPDATE
        SET titulo = EXCLUDED.titulo,
            formato = EXCLUDED.formato,
            peso = EXCLUDED.peso,
            link_descarga = EXCLUDED.link_descarga,
            id_banco_datos = EXCLUDED.id_banco_datos
      `, [arc.id, arc.titulo, arc.formato, arc.peso, arc.link_descarga, b.id]);
    }
  }
  await client.query(`SELECT setval(pg_get_serial_sequence('banco_datos', 'id'), (SELECT MAX(id) FROM banco_datos))`);
  await client.query(`SELECT setval(pg_get_serial_sequence('datos_archivo', 'id'), (SELECT MAX(id) FROM datos_archivo))`);

  // 7. Sembrar SECCION_PAGINA para Recursos
  console.log('Sembrando seccion_pagina para Recursos...');

  const seccionRows = [
    // --- /recursos/biblioteca ---
    { k: 'rec_biblio_hero_badge', p: '/recursos/biblioteca', v: 'Catálogo en Línea Activo', t: 'texto' },
    { k: 'rec_biblio_hero_titulo_01', p: '/recursos/biblioteca', v: 'Repositorio', t: 'texto' },
    { k: 'rec_biblio_hero_titulo_02', p: '/recursos/biblioteca', v: 'Académico', t: 'texto' },
    { k: 'rec_biblio_hero_descripcion', p: '/recursos/biblioteca', v: 'Colección de textos guía, referencias bibliográficas, reportes de datos y el directorio completo de investigadores de la Carrera de Estadística.', t: 'texto' },
    { k: 'rec_biblio_hero_btn_libros', p: '/recursos/biblioteca', v: 'Explorar Libros', t: 'texto' },
    { k: 'rec_biblio_hero_btn_autores', p: '/recursos/biblioteca', v: 'Directorio de Autores', t: 'texto' },
    { k: 'rec_biblio_catalogo_tag', p: '/recursos/biblioteca', v: 'Acervo Bibliográfico', t: 'texto' },
    { k: 'rec_biblio_catalogo_titulo', p: '/recursos/biblioteca', v: 'Colección de Libros y Textos', t: 'texto' },
    { k: 'rec_biblio_catalogo_sub', p: '/recursos/biblioteca', v: 'Consulta textos físicos y material digitalizado para consulta académica e investigación.', t: 'texto' },
    { k: 'rec_biblio_catalogo_placeholder', p: '/recursos/biblioteca', v: 'Buscar por título, categoría, tema o ISBN...', t: 'texto' },
    { k: 'rec_biblio_autores_tag', p: '/recursos/biblioteca', v: 'Directorio de Autores', t: 'texto' },
    { k: 'rec_biblio_autores_titulo', p: '/recursos/biblioteca', v: 'Investigadores y Autores Destacados', t: 'texto' },
    { k: 'rec_biblio_autores_sub', p: '/recursos/biblioteca', v: 'Explora la producción bibliográfica por autor, afiliación y especialidad temática.', t: 'texto' },
    { k: 'rec_biblio_autores_placeholder', p: '/recursos/biblioteca', v: 'Buscar por nombre de autor o institución...', t: 'texto' },
    { k: 'rec_biblio_servicios_tag', p: '/recursos/biblioteca', v: 'Servicios de Biblioteca', t: 'texto' },
    { k: 'rec_biblio_servicios_titulo', p: '/recursos/biblioteca', v: 'Atención y Préstamos', t: 'texto' },
    { k: 'rec_biblio_servicios_sub', p: '/recursos/biblioteca', v: 'Conoce los horarios de sala, préstamo a domicilio y servicios de escaneo institucional.', t: 'texto' },
    { k: 'rec_biblio_serv_sala_titulo', p: '/recursos/biblioteca', v: 'Sala de Lectura Silenciosa', t: 'texto' },
    { k: 'rec_biblio_serv_sala_desc', p: '/recursos/biblioteca', v: 'Espacio acondicionado para estudio individual y grupal con acceso a estantería abierta.', t: 'texto' },
    { k: 'rec_biblio_serv_sala_horario', p: '/recursos/biblioteca', v: 'Lunes a Viernes: 08:30 - 18:30', t: 'texto' },
    { k: 'rec_biblio_serv_prestamo_titulo', p: '/recursos/biblioteca', v: 'Préstamo a Domicilio', t: 'texto' },
    { k: 'rec_biblio_serv_prestamo_desc', p: '/recursos/biblioteca', v: 'Hasta 3 ejemplares por un periodo de 5 días hábiles con carné universitario o matrícula vigente.', t: 'texto' },
    { k: 'rec_biblio_serv_prestamo_horario', p: '/recursos/biblioteca', v: 'Ventanilla de Kárdex de Biblioteca', t: 'texto' },
    { k: 'rec_biblio_serv_digital_titulo', p: '/recursos/biblioteca', v: 'Terminales de Búsqueda KOHA', t: 'texto' },
    { k: 'rec_biblio_serv_digital_desc', p: '/recursos/biblioteca', v: 'Catálogo sistematizado bajo clasificación Dewey para ubicación rápida de signaturas topográficas.', t: 'texto' },
    { k: 'rec_biblio_serv_digital_horario', p: '/recursos/biblioteca', v: 'Acceso libre en sala', t: 'texto' },
    { k: 'rec_biblio_cta_titulo', p: '/recursos/biblioteca', v: '¿Necesitas solicitar un libro para tu materia?', t: 'texto' },
    { k: 'rec_biblio_cta_desc', p: '/recursos/biblioteca', v: 'Puedes enviar tu requerimiento de adquisición a la Dirección de Carrera o consultar el fondo de reserva.', t: 'texto' },
    { k: 'rec_biblio_cta_btn', p: '/recursos/biblioteca', v: 'Contactar a Biblioteca', t: 'texto' },
    { k: 'rec_biblio_cta_link', p: '/recursos/biblioteca', v: 'mailto:biblioteca@estadistica.umsa.bo', t: 'texto' },

    // --- /recursos/revistas ---
    { k: 'rec_revistas_hero_eyebrow', p: '/recursos/revistas', v: 'RED DE PUBLICACIONES', t: 'texto' },
    { k: 'rec_revistas_hero_titulo_01', p: '/recursos/revistas', v: 'Hemeroteca y Revistas', t: 'texto' },
    { k: 'rec_revistas_hero_titulo_02', p: '/recursos/revistas', v: 'Científicas', t: 'texto' },
    { k: 'rec_revistas_hero_descripcion', p: '/recursos/revistas', v: 'Explora las revistas indexadas de prestigio internacional, junto con los boletines informativos y publicaciones institucionales del Instituto de Estadística.', t: 'texto' },
    { k: 'rec_revistas_hero_imagen', p: '/recursos/revistas', v: '/images/recursos/revistas/revistas_de_estadistica_cientificas_y_academicas_online.jpg', t: 'imagen' },
    { k: 'rec_revistas_filtro_tag', p: '/recursos/revistas', v: 'Líneas Editoriales', t: 'texto' },
    { k: 'rec_revistas_filtro_titulo', p: '/recursos/revistas', v: 'Publicaciones Seriadas e Índices', t: 'texto' },
    { k: 'rec_revistas_filtro_sub', p: '/recursos/revistas', v: 'Acceso directo a ediciones vigentes y números históricos con evaluación por pares ciegos.', t: 'texto' },
    { k: 'rec_revistas_varianza_badge', p: '/recursos/revistas', v: 'Revista Oficial UMSA', t: 'texto' },
    { k: 'rec_revistas_varianza_titulo', p: '/recursos/revistas', v: 'Revista Varianza (IETA)', t: 'texto' },
    { k: 'rec_revistas_varianza_desc', p: '/recursos/revistas', v: 'Órgano oficial de difusión científica de la Carrera de Estadística indexado en SciELO y Latindex Catálogo 2.0.', t: 'texto' },
    { k: 'rec_revistas_varianza_issn', p: '/recursos/revistas', v: 'ISSN: 2076-6815 (En línea)', t: 'texto' },
    { k: 'rec_revistas_varianza_enlace_label', p: '/recursos/revistas', v: 'Portal OJS Revista Varianza', t: 'texto' },
    { k: 'rec_revistas_varianza_enlace_url', p: '/recursos/revistas', v: 'https://ojs.umsa.bo/ojs/index.php/varianza', t: 'texto' },
    { k: 'rec_revistas_directrices_tag', p: '/recursos/revistas', v: 'Para Autores', t: 'texto' },
    { k: 'rec_revistas_directrices_titulo', p: '/recursos/revistas', v: 'Convocatoria Permanente de Artículos', t: 'texto' },
    { k: 'rec_revistas_directrices_desc', p: '/recursos/revistas', v: 'Se reciben manuscritos originales en estadística matemática, modelación actuarial, ciencia de datos, bioestadística y econometría.', t: 'texto' },
    { k: 'rec_revistas_directrices_btn', p: '/recursos/revistas', v: 'Ver Directrices para Autores', t: 'texto' },
    { k: 'rec_revistas_directrices_url', p: '/recursos/revistas', v: 'https://ojs.umsa.bo/ojs/index.php/varianza/about/submissions', t: 'texto' },

    // --- /recursos/documentos ---
    { k: 'rec_docs_hero_eyebrow', p: '/recursos/documentos', v: 'GESTIÓN DOCUMENTAL CENTRALIZADA', t: 'texto' },
    { k: 'rec_docs_hero_titulo_01', p: '/recursos/documentos', v: 'Repositorio de', t: 'texto' },
    { k: 'rec_docs_hero_titulo_02', p: '/recursos/documentos', v: 'Recursos Digitales', t: 'texto' },
    { k: 'rec_docs_hero_descripcion', p: '/recursos/documentos', v: 'Descargue formularios oficiales de auxiliares, partes de asistencia, solicitudes de defensa de panel y declaraciones juradas vigentes.', t: 'texto' },
    { k: 'rec_docs_archivero_tag', p: '/recursos/documentos', v: 'Formatos y Trámites', t: 'texto' },
    { k: 'rec_docs_archivero_titulo', p: '/recursos/documentos', v: 'Archivero Oficial de Formularios', t: 'texto' },
    { k: 'rec_docs_archivero_sub', p: '/recursos/documentos', v: 'Archivos digitales con sellos de validez institucional para la gestión académica 2026.', t: 'texto' },
    { k: 'rec_docs_kardex_titulo', p: '/recursos/documentos', v: 'Atención en Kárdex', t: 'texto' },
    { k: 'rec_docs_kardex_sub', p: '/recursos/documentos', v: 'Para consultas sobre sellado y legalización de formularios:', t: 'texto' },
    { k: 'rec_docs_kardex_telefono', p: '/recursos/documentos', v: '2612824 – Int. 104', t: 'texto' },
    { k: 'rec_docs_kardex_correo', p: '/recursos/documentos', v: 'kardex@estadistica.umsa.bo', t: 'texto' },
    { k: 'rec_docs_kardex_horario', p: '/recursos/documentos', v: '09:00 - 12:00 | 15:00 - 18:00', t: 'texto' },
    { k: 'rec_docs_kardex_ubicacion', p: '/recursos/documentos', v: 'Edificio FCPN, Planta Baja, Ventanillas de Estadística', t: 'texto' },
    { k: 'rec_docs_sello_titulo', p: '/recursos/documentos', v: 'Sello de Validez Institucional', t: 'texto' },
    { k: 'rec_docs_sello_descripcion', p: '/recursos/documentos', v: 'Todos los formularios y normativas descargados de este portal son las versiones oficiales aprobadas por el Honorable Consejo de Carrera para la gestión 2026. Evite el uso de documentos obsoletos.', t: 'texto' },
    { k: 'rec_docs_sello_badge_01', p: '/recursos/documentos', v: 'VERIFICACIÓN 2026', t: 'texto' },
    { k: 'rec_docs_sello_badge_02', p: '/recursos/documentos', v: 'FIRMA DIGITAL H.C.C.', t: 'texto' },
    { k: 'rec_docs_aviso_titulo', p: '/recursos/documentos', v: 'Validez de Formatos Web', t: 'texto' },
    { k: 'rec_docs_aviso_desc', p: '/recursos/documentos', v: 'Los formularios llenados digitalmente deben imprimirse y firmarse en tinta azul para su radicación oficial en ventanilla.', t: 'texto' },

    // --- /recursos/tesis ---
    { k: 'rec_tesis_hero_eyebrow', p: '/recursos/tesis', v: 'INVESTIGACIÓN CIENTÍFICA VALIDADA', t: 'texto' },
    { k: 'rec_tesis_hero_titulo_01', p: '/recursos/tesis', v: 'Cyber-Tesis y', t: 'texto' },
    { k: 'rec_tesis_hero_titulo_02', p: '/recursos/tesis', v: 'Producción Intelectual', t: 'texto' },
    { k: 'rec_tesis_hero_descripcion', p: '/recursos/tesis', v: 'Índice estructurado de tesis y proyectos de grado. Explora por año, autores y áreas oficiales de materia.', t: 'texto' },
    { k: 'rec_tesis_filtro_tag', p: '/recursos/tesis', v: 'Catálogo de Investigaciones', t: 'texto' },
    { k: 'rec_tesis_filtro_titulo', p: '/recursos/tesis', v: 'Tesis de Licenciatura y Trabajos Dirigidos', t: 'texto' },
    { k: 'rec_tesis_filtro_sub', p: '/recursos/tesis', v: 'Consulta textos completos en el Repositorio Institucional UMSA con metadatos estandarizados Dublin Core.', t: 'texto' },
    { k: 'rec_tesis_filtro_placeholder', p: '/recursos/tesis', v: 'Buscar por título, autor, tutor o palabras clave...', t: 'texto' },
    { k: 'rec_tesis_tab_general', p: '/recursos/tesis', v: 'TODOS LOS TRABAJOS', t: 'texto' },
    { k: 'rec_tesis_tab_materias', p: '/recursos/tesis', v: 'POR MATERIAS', t: 'texto' },
    { k: 'rec_tesis_tab_autores', p: '/recursos/tesis', v: 'POR AUTORES', t: 'texto' },
    { k: 'rec_tesis_tab_tutores', p: '/recursos/tesis', v: 'POR TUTORES', t: 'texto' },
    { k: 'rec_tesis_modalidad_tesis', p: '/recursos/tesis', v: 'Tesis de Grado', t: 'texto' },
    { k: 'rec_tesis_modalidad_tdir', p: '/recursos/tesis', v: 'Trabajo Dirigido', t: 'texto' },
    { k: 'rec_tesis_repositorio_aviso_titulo', p: '/recursos/tesis', v: 'Repositorio Institucional UMSA', t: 'texto' },
    { k: 'rec_tesis_repositorio_aviso_desc', p: '/recursos/tesis', v: 'Los documentos cuentan con identificador persistente handle y están resguardados en el servidor central de la biblioteca universitaria.', t: 'texto' },
    { k: 'rec_tesis_repositorio_url', p: '/recursos/tesis', v: 'https://repositorio.umsa.bo/handle/123456789/4', t: 'texto' },
    { k: 'rec_tesis_cta_titulo', p: '/recursos/tesis', v: '¿Defendiste tu trabajo de grado recientemente?', t: 'texto' },
    { k: 'rec_tesis_cta_desc', p: '/recursos/tesis', v: 'Recuerda entregar el ejemplar digital en formato PDF con la carátula y firma de tribunal para su catalogación oficial.', t: 'texto' },
    { k: 'rec_tesis_cta_btn', p: '/recursos/tesis', v: 'Guía de Entrega de Tesis', t: 'texto' },
    { k: 'rec_tesis_cta_url', p: '/recursos/tesis', v: '#', t: 'texto' },

    // --- /recursos/banco-datos ---
    { k: 'rec_banco_hero_eyebrow', p: '/recursos/banco-datos', v: 'ACCESO ABIERTO (OPEN DATA)', t: 'texto' },
    { k: 'rec_banco_hero_titulo_01', p: '/recursos/banco-datos', v: 'Repositorio y', t: 'texto' },
    { k: 'rec_banco_hero_titulo_02', p: '/recursos/banco-datos', v: 'Banco de Datos', t: 'texto' },
    { k: 'rec_banco_hero_highlight', p: '/recursos/banco-datos', v: 'BANCO DE DATOS', t: 'texto' },
    { k: 'rec_banco_hero_descripcion', p: '/recursos/banco-datos', v: 'Plataforma centralizada para la descarga de microdatos oficiales de censos y encuestas nacionales para investigación estadística y ciencia de datos.', t: 'texto' },
    { k: 'rec_banco_stats_c1_val', p: '/recursos/banco-datos', v: '19+', t: 'texto' },
    { k: 'rec_banco_stats_c1_lbl', p: '/recursos/banco-datos', v: 'PROYECTOS Y CENSOS', t: 'texto' },
    { k: 'rec_banco_stats_c2_val', p: '/recursos/banco-datos', v: '80+', t: 'texto' },
    { k: 'rec_banco_stats_c2_lbl', p: '/recursos/banco-datos', v: 'MICRODATOS DISPONIBLES', t: 'texto' },
    { k: 'rec_banco_filtro_tag', p: '/recursos/banco-datos', v: 'Catálogo de Microdatos', t: 'texto' },
    { k: 'rec_banco_filtro_titulo', p: '/recursos/banco-datos', v: 'Bases de Datos Nacionales e Históricas', t: 'texto' },
    { k: 'rec_banco_filtro_sub', p: '/recursos/banco-datos', v: 'Formatos estándar CSV, SAV (SPSS), DTA (Stata) y RData listos para modelos econométricos y muestrales.', t: 'texto' },
    { k: 'rec_banco_filtro_placeholder', p: '/recursos/banco-datos', v: 'Buscar por nombre del censo, encuesta o fuente (INE, UDAPE)...', t: 'texto' },
    { k: 'rec_banco_aviso_licencia_titulo', p: '/recursos/banco-datos', v: 'Uso Ético de Microdatos', t: 'texto' },
    { k: 'rec_banco_aviso_licencia_desc', p: '/recursos/banco-datos', v: 'Los datos son de uso libre y gratuito para fines estrictamente académicos y de investigación. Se exige citar la fuente oficial en toda publicación derivada.', t: 'texto' },
    { k: 'rec_banco_cta_titulo', p: '/recursos/banco-datos', v: '¿Necesitas una muestra o serie histórica específica?', t: 'texto' },
    { k: 'rec_banco_cta_desc', p: '/recursos/banco-datos', v: 'El laboratorio del IETA cuenta con archivos digitalizados adicionales disponibles bajo solicitud académica justificada.', t: 'texto' },
    { k: 'rec_banco_cta_btn', p: '/recursos/banco-datos', v: 'Solicitar Datos al IETA', t: 'texto' },
    { k: 'rec_banco_cta_url', p: '/recursos/banco-datos', v: 'mailto:ieta@estadistica.umsa.bo', t: 'texto' },
  ];

  for (const s of seccionRows) {
    await client.query(`
      INSERT INTO seccion_pagina (clave_campo, pagina_slug, valor, tipo)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (clave_campo) DO UPDATE
      SET pagina_slug = EXCLUDED.pagina_slug,
          valor = EXCLUDED.valor,
          tipo = EXCLUDED.tipo
    `, [s.k, s.p, s.v, s.t]);
  }

  const finalSec = await client.query('SELECT COUNT(*) FROM seccion_pagina');
  console.log(`seccion_pagina total ahora: ${finalSec.rows[0].count}`);

  await client.end();
}

seedRecursos().catch(err => {
  console.error('Error al sembrar datos de Recursos:', err);
  process.exit(1);
});
