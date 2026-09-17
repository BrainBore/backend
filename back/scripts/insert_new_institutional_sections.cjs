const { Client } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:123@localhost:5432/usuarios';

const newSeccionPaginaEntries = [
  // --- /institucional/autoridades ---
  { clave_campo: 'autoridades_inicio_etiqueta', pagina_slug: '/institucional/autoridades', valor: 'Gobierno y Liderazgo', tipo: 'texto' },
  { clave_campo: 'autoridades_inicio_titulo_01', pagina_slug: '/institucional/autoridades', valor: 'Autoridades', tipo: 'texto' },
  { clave_campo: 'autoridades_inicio_titulo_02', pagina_slug: '/institucional/autoridades', valor: 'y', tipo: 'texto' },
  { clave_campo: 'autoridades_inicio_titulo_03', pagina_slug: '/institucional/autoridades', valor: 'Gobierno.', tipo: 'texto' },
  { clave_campo: 'autoridades_inicio_descripcion', pagina_slug: '/institucional/autoridades', valor: 'Liderazgo comprometido con la excelencia académica y la transparencia institucional en la Carrera de Estadística, fundamentado en cogobierno paritario.', tipo: 'texto' },
  { clave_campo: 'autoridades_inicio_imagen', pagina_slug: '/institucional/autoridades', valor: '/images/institucional/autoridades_hero.jpeg', tipo: 'imagen' },
  { clave_campo: 'autoridades_chip_01_simbolo', pagina_slug: '/institucional/autoridades', valor: 'partial', tipo: 'texto' },
  { clave_campo: 'autoridades_chip_01_etiqueta', pagina_slug: '/institucional/autoridades', valor: 'Gestión', tipo: 'texto' },
  { clave_campo: 'autoridades_chip_01_subtitulo', pagina_slug: '/institucional/autoridades', valor: 'Eficiente', tipo: 'texto' },
  { clave_campo: 'autoridades_chip_02_simbolo', pagina_slug: '/institucional/autoridades', valor: 'beta', tipo: 'texto' },
  { clave_campo: 'autoridades_chip_02_etiqueta', pagina_slug: '/institucional/autoridades', valor: 'Beta = 0.8', tipo: 'texto' },
  { clave_campo: 'autoridades_chip_02_subtitulo', pagina_slug: '/institucional/autoridades', valor: 'Potencia Académica', tipo: 'texto' },
  { clave_campo: 'autoridades_inicio_badge_simbolo', pagina_slug: '/institucional/autoridades', valor: 'lambda', tipo: 'texto' },
  { clave_campo: 'autoridades_inicio_badge_texto', pagina_slug: '/institucional/autoridades', valor: 'Transparencia Publica', tipo: 'texto' },
  { clave_campo: 'autoridades_hcc_titulo', pagina_slug: '/institucional/autoridades', valor: 'Honorable Consejo de Carrera (HCC)', tipo: 'texto' },
  { clave_campo: 'autoridades_hcc_subtitulo', pagina_slug: '/institucional/autoridades', valor: 'Órgano de Cogobierno', tipo: 'texto' },
  { clave_campo: 'autoridades_hcc_descripcion', pagina_slug: '/institucional/autoridades', valor: 'Estructura paritaria encargada de decisiones normativas, académicas y administrativas para el desarrollo integral de la carrera.', tipo: 'texto' },
  { clave_campo: 'autoridades_hcc_docente_titulo', pagina_slug: '/institucional/autoridades', valor: 'Estamento Docente', tipo: 'texto' },
  { clave_campo: 'autoridades_hcc_estudiante_titulo', pagina_slug: '/institucional/autoridades', valor: 'Estamento Estudiantil', tipo: 'texto' },
  { clave_campo: 'autoridades_estructura_titulo', pagina_slug: '/institucional/autoridades', valor: 'Arquitectura de Gestión', tipo: 'texto' },
  { clave_campo: 'autoridades_estructura_subtitulo', pagina_slug: '/institucional/autoridades', valor: 'Organigrama Funcional', tipo: 'texto' },
  { clave_campo: 'autoridades_estructura_top_nivel', pagina_slug: '/institucional/autoridades', valor: 'Nivel Ejecutivo', tipo: 'texto' },
  { clave_campo: 'autoridades_estructura_top_titulo', pagina_slug: '/institucional/autoridades', valor: 'Dirección de Carrera', tipo: 'texto' },
  { clave_campo: 'autoridades_estructura_medio_01_etiqueta', pagina_slug: '/institucional/autoridades', valor: 'Normativo', tipo: 'texto' },
  { clave_campo: 'autoridades_estructura_medio_01_titulo', pagina_slug: '/institucional/autoridades', valor: 'Honorable Consejo (HCC)', tipo: 'texto' },
  { clave_campo: 'autoridades_estructura_medio_01_subtitulo', pagina_slug: '/institucional/autoridades', valor: 'Cogobierno Docente - Estudiantil', tipo: 'texto' },
  { clave_campo: 'autoridades_estructura_medio_02_etiqueta', pagina_slug: '/institucional/autoridades', valor: 'Académico', tipo: 'texto' },
  { clave_campo: 'autoridades_estructura_medio_02_titulo', pagina_slug: '/institucional/autoridades', valor: 'Gestión de Calidad', tipo: 'texto' },
  { clave_campo: 'autoridades_estructura_medio_02_subtitulo', pagina_slug: '/institucional/autoridades', valor: 'Coordinación Curricular', tipo: 'texto' },
  { clave_campo: 'autoridades_estructura_base_01_titulo', pagina_slug: '/institucional/autoridades', valor: 'Kardex Académico', tipo: 'texto' },
  { clave_campo: 'autoridades_estructura_base_02_titulo', pagina_slug: '/institucional/autoridades', valor: 'Secretaría de Dirección', tipo: 'texto' },
  { clave_campo: 'autoridades_estructura_base_03_titulo', pagina_slug: '/institucional/autoridades', valor: 'Soporte Técnico', tipo: 'texto' },

  // --- /institucional/docentes (solo textos e imágenes) ---
  { clave_campo: 'plantel_inicio_etiqueta', pagina_slug: '/institucional/docentes', valor: 'Plantel Institucional', tipo: 'texto' },
  { clave_campo: 'plantel_inicio_titulo_01', pagina_slug: '/institucional/docentes', valor: 'Nuestro', tipo: 'texto' },
  { clave_campo: 'plantel_inicio_titulo_02', pagina_slug: '/institucional/docentes', valor: 'Equipo.', tipo: 'texto' },
  { clave_campo: 'plantel_inicio_descripcion', pagina_slug: '/institucional/docentes', valor: 'Profesionales comprometidos con la excelencia académica y el soporte administrativo para la formación de científicos de datos.', tipo: 'texto' },
  { clave_campo: 'plantel_inicio_imagen', pagina_slug: '/institucional/docentes', valor: '/images/institucional/personal_hero.jpeg', tipo: 'imagen' },
  { clave_campo: 'plantel_inicio_badge_simbolo', pagina_slug: '/institucional/docentes', valor: 'omega', tipo: 'texto' },
  { clave_campo: 'plantel_inicio_badge_texto', pagina_slug: '/institucional/docentes', valor: 'Talento Humano', tipo: 'texto' },

  // --- /institucional/convenios (solo textos e imágenes) ---
  { clave_campo: 'convenios_inicio_etiqueta', pagina_slug: '/institucional/convenios', valor: 'Alianzas Estratégicas', tipo: 'texto' },
  { clave_campo: 'convenios_inicio_titulo_01', pagina_slug: '/institucional/convenios', valor: 'Conectando', tipo: 'texto' },
  { clave_campo: 'convenios_inicio_titulo_02', pagina_slug: '/institucional/convenios', valor: 'la', tipo: 'texto' },
  { clave_campo: 'convenios_inicio_titulo_03', pagina_slug: '/institucional/convenios', valor: 'Academia.', tipo: 'texto' },
  { clave_campo: 'convenios_inicio_descripcion', pagina_slug: '/institucional/convenios', valor: 'Fortalecemos la formación profesional a través de convenios con instituciones gubernamentales y organismos privados, facilitando pasantías y trabajos dirigidos.', tipo: 'texto' },
  { clave_campo: 'convenios_inicio_imagen', pagina_slug: '/institucional/convenios', valor: '/images/institucional/convenios_hero.jpeg', tipo: 'imagen' },
  { clave_campo: 'convenios_chip_01_simbolo', pagina_slug: '/institucional/convenios', valor: 'pi', tipo: 'texto' },
  { clave_campo: 'convenios_chip_01_etiqueta', pagina_slug: '/institucional/convenios', valor: 'Impacto', tipo: 'texto' },
  { clave_campo: 'convenios_chip_01_subtitulo', pagina_slug: '/institucional/convenios', valor: 'Profesional', tipo: 'texto' },
  { clave_campo: 'convenios_chip_02_simbolo', pagina_slug: '/institucional/convenios', valor: 'lambda', tipo: 'texto' },
  { clave_campo: 'convenios_chip_02_etiqueta', pagina_slug: '/institucional/convenios', valor: 'n = 12', tipo: 'texto' },
  { clave_campo: 'convenios_chip_02_subtitulo', pagina_slug: '/institucional/convenios', valor: 'Convenios', tipo: 'texto' },
  { clave_campo: 'convenios_propuesta_etiqueta', pagina_slug: '/institucional/convenios', valor: 'Propuesta de Valor', tipo: 'texto' },
  { clave_campo: 'convenios_propuesta_titulo', pagina_slug: '/institucional/convenios', valor: 'Beneficios para Estudiantes', tipo: 'texto' },
  { clave_campo: 'convenios_propuesta_descripcion', pagina_slug: '/institucional/convenios', valor: 'Aprovecha estas oportunidades para potenciar tu desarrollo profesional con experiencia real certificada.', tipo: 'texto' },
  { clave_campo: 'convenios_propuesta_card_titulo', pagina_slug: '/institucional/convenios', valor: 'Gestión 2026', tipo: 'texto' },
  { clave_campo: 'convenios_propuesta_card_descripcion', pagina_slug: '/institucional/convenios', valor: 'Convenios activos para Pasantías Pre-profesionales y Trabajos Dirigidos de titulación.', tipo: 'texto' },
  { clave_campo: 'convenios_propuesta_card_estado', pagina_slug: '/institucional/convenios', valor: 'Entorno Profesional Activo', tipo: 'texto' },
  { clave_campo: 'convenios_beneficio_01_titulo', pagina_slug: '/institucional/convenios', valor: 'Pasantías Pre-profesionales', tipo: 'texto' },
  { clave_campo: 'convenios_beneficio_01_descripcion', pagina_slug: '/institucional/convenios', valor: 'Adquiere experiencia real en el manejo de bases de datos masivas antes de graduarte.', tipo: 'texto' },
  { clave_campo: 'convenios_beneficio_02_titulo', pagina_slug: '/institucional/convenios', valor: 'Trabajo Dirigido', tipo: 'texto' },
  { clave_campo: 'convenios_beneficio_02_descripcion', pagina_slug: '/institucional/convenios', valor: 'Titúlate resolviendo un problema real de análisis estadístico en una institución de prestigio.', tipo: 'texto' },
  { clave_campo: 'convenios_beneficio_03_titulo', pagina_slug: '/institucional/convenios', valor: 'Red de Contactos', tipo: 'texto' },
  { clave_campo: 'convenios_beneficio_03_descripcion', pagina_slug: '/institucional/convenios', valor: 'Establece vínculos con profesionales del área estadística y líderes de opinión del mercado laboral.', tipo: 'texto' },
  { clave_campo: 'convenios_cta_titulo', pagina_slug: '/institucional/convenios', valor: 'Referente Nacional', tipo: 'texto' },
  { clave_campo: 'convenios_cta_etiqueta', pagina_slug: '/institucional/convenios', valor: 'Vínculo Profesional Garantizado', tipo: 'texto' },

  // --- /institucional/reglamentos (solo textos e imágenes) ---
  { clave_campo: 'reglamentos_inicio_etiqueta', pagina_slug: '/institucional/reglamentos', valor: 'Normativa Institucional', tipo: 'texto' },
  { clave_campo: 'reglamentos_inicio_titulo_01', pagina_slug: '/institucional/reglamentos', valor: 'Repositorio', tipo: 'texto' },
  { clave_campo: 'reglamentos_inicio_titulo_02', pagina_slug: '/institucional/reglamentos', valor: 'y', tipo: 'texto' },
  { clave_campo: 'reglamentos_inicio_titulo_03', pagina_slug: '/institucional/reglamentos', valor: 'Marco Legal', tipo: 'texto' },
  { clave_campo: 'reglamentos_inicio_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Compendio normativo que rige la vida académica, administrativa e investigativa de la Carrera de Estadística, garantizando el respeto a la autonomía universitaria.', tipo: 'texto' },
  { clave_campo: 'reglamentos_inicio_imagen', pagina_slug: '/institucional/reglamentos', valor: '/images/institucional/reglamentos_hero.jpeg', tipo: 'imagen' },
  { clave_campo: 'reglamentos_chip_01_simbolo', pagina_slug: '/institucional/reglamentos', valor: '¶', tipo: 'texto' },
  { clave_campo: 'reglamentos_chip_01_etiqueta', pagina_slug: '/institucional/reglamentos', valor: 'Estatutos', tipo: 'texto' },
  { clave_campo: 'reglamentos_chip_01_subtitulo', pagina_slug: '/institucional/reglamentos', valor: 'Universitarios', tipo: 'texto' },
  { clave_campo: 'reglamentos_chip_02_simbolo', pagina_slug: '/institucional/reglamentos', valor: 'ℓ', tipo: 'texto' },
  { clave_campo: 'reglamentos_chip_02_etiqueta', pagina_slug: '/institucional/reglamentos', valor: 'Garantía', tipo: 'texto' },
  { clave_campo: 'reglamentos_chip_02_subtitulo', pagina_slug: '/institucional/reglamentos', valor: 'Académica', tipo: 'texto' },

  { clave_campo: 'reglamentos_marco_01_articulo', pagina_slug: '/institucional/reglamentos', valor: 'Art. 1', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_01_titulo', pagina_slug: '/institucional/reglamentos', valor: 'Nacional (CEUB)', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_01_subtitulo', pagina_slug: '/institucional/reglamentos', valor: 'Estatuto Orgánico de la Universidad Boliviana', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_01_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Base legal de la autonomía y del sistema universitario en Bolivia.', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_02_articulo', pagina_slug: '/institucional/reglamentos', valor: 'Art. 2', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_02_titulo', pagina_slug: '/institucional/reglamentos', valor: 'Estudiantil', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_02_subtitulo', pagina_slug: '/institucional/reglamentos', valor: 'Régimen Estudiantil de la Universidad Boliviana', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_02_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Derechos, deberes, becas y procesos disciplinarios del estudiante.', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_03_articulo', pagina_slug: '/institucional/reglamentos', valor: 'Art. 3', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_03_titulo', pagina_slug: '/institucional/reglamentos', valor: 'Docente', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_03_subtitulo', pagina_slug: '/institucional/reglamentos', valor: 'Régimen Académico Docente', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_03_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Normativa sobre la carrera docente, escalafón y evaluación continua.', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_04_articulo', pagina_slug: '/institucional/reglamentos', valor: 'Art. 4', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_04_titulo', pagina_slug: '/institucional/reglamentos', valor: 'Institucional', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_04_subtitulo', pagina_slug: '/institucional/reglamentos', valor: 'Estatuto Orgánico de la UMSA', tipo: 'texto' },
  { clave_campo: 'reglamentos_marco_04_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Norma matriz propia de la Universidad Mayor de San Andrés.', tipo: 'texto' },

  { clave_campo: 'reglamentos_interno_academica_etiqueta', pagina_slug: '/institucional/reglamentos', valor: 'Gestión Académica', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_academica_item_01_nombre', pagina_slug: '/institucional/reglamentos', valor: 'Reglamento de Convalidación', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_academica_item_01_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Requisitos técnicos para traspasos y validación de materias aprobadas.', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_academica_item_02_nombre', pagina_slug: '/institucional/reglamentos', valor: 'Mesa de Examen', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_academica_item_02_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Normas para solicitar exámenes de última instancia y evaluación extraordinaria.', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_academica_item_03_nombre', pagina_slug: '/institucional/reglamentos', valor: 'Evaluación del Aprendizaje', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_academica_item_03_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Criterios de calificación, asistencia y aprobación por competencias.', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_academica_item_04_nombre', pagina_slug: '/institucional/reglamentos', valor: 'Reglamento Interno de la Carrera', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_academica_item_04_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Normas de convivencia y organización interna del estamento.', tipo: 'texto' },

  { clave_campo: 'reglamentos_interno_graduacion_etiqueta', pagina_slug: '/institucional/reglamentos', valor: 'Modalidades de Graduación', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_graduacion_item_01_nombre', pagina_slug: '/institucional/reglamentos', valor: 'Guía Metodológica General', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_graduacion_item_01_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Estándares oficiales de formato y redacción para trabajos finales de grado.', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_graduacion_item_02_nombre', pagina_slug: '/institucional/reglamentos', valor: 'Reglamento de Tesis de Grado', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_graduacion_item_02_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Protocolo para investigaciones de aporte científico y defensa.', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_graduacion_item_03_nombre', pagina_slug: '/institucional/reglamentos', valor: 'Reglamento de Trabajo Dirigido', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_graduacion_item_03_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Normativa para pasantías con convenio e impacto institucional.', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_graduacion_item_04_nombre', pagina_slug: '/institucional/reglamentos', valor: 'Reglamento de Proyecto de Grado', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_graduacion_item_04_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Guía para resolver problemas prácticos en el entorno laboral.', tipo: 'texto' },

  { clave_campo: 'reglamentos_interno_investigacion_etiqueta', pagina_slug: '/institucional/reglamentos', valor: 'Investigación (IETA)', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_investigacion_item_01_nombre', pagina_slug: '/institucional/reglamentos', valor: 'Reglamento Interno IETA', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_investigacion_item_01_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Normas que rigen el funcionamiento del Instituto de Estadística Teórica y Aplicada.', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_investigacion_item_02_nombre', pagina_slug: '/institucional/reglamentos', valor: 'Congreso Interno', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_investigacion_item_02_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Resoluciones y actas de las máximas instancias de decisión científica.', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_investigacion_item_03_nombre', pagina_slug: '/institucional/reglamentos', valor: 'Publicaciones y Repositorio', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_investigacion_item_03_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Lineamientos para gestión editorial, citación y acceso abierto.', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_investigacion_item_04_nombre', pagina_slug: '/institucional/reglamentos', valor: 'Comités Técnicos', tipo: 'texto' },
  { clave_campo: 'reglamentos_interno_investigacion_item_04_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Criterios de conformación y seguimiento de comités de evaluación.', tipo: 'texto' },

  { clave_campo: 'reglamentos_resolucion_etiqueta', pagina_slug: '/institucional/reglamentos', valor: 'Patrimonio Documental', tipo: 'texto' },
  { clave_campo: 'reglamentos_resolucion_titulo', pagina_slug: '/institucional/reglamentos', valor: 'Resolución de Fundación', tipo: 'texto' },
  { clave_campo: 'reglamentos_resolucion_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Documento histórico que oficializa la creación de la carrera en la Facultad de Ciencias Puras y Naturales, estableciendo sus bases académicas y administrativas.', tipo: 'texto' },
  { clave_campo: 'reglamentos_resolucion_imagen', pagina_slug: '/institucional/reglamentos', valor: '/images/institucional/resolucion_fundacion.jpeg', tipo: 'imagen' },

  { clave_campo: 'reglamentos_beneficio_01_titulo', pagina_slug: '/institucional/reglamentos', valor: 'Seguridad Jurídica', tipo: 'texto' },
  { clave_campo: 'reglamentos_beneficio_01_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Normas claras para estudiantes, docentes y administrativos en cada proceso académico.', tipo: 'texto' },
  { clave_campo: 'reglamentos_beneficio_02_titulo', pagina_slug: '/institucional/reglamentos', valor: 'Transparencia de Procesos', tipo: 'texto' },
  { clave_campo: 'reglamentos_beneficio_02_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Trazabilidad de decisiones mediante resoluciones, actas y reglamentos vigentes.', tipo: 'texto' },
  { clave_campo: 'reglamentos_beneficio_03_titulo', pagina_slug: '/institucional/reglamentos', valor: 'Proyección Profesional', tipo: 'texto' },
  { clave_campo: 'reglamentos_beneficio_03_descripcion', pagina_slug: '/institucional/reglamentos', valor: 'Regulaciones que fortalecen prácticas, pasantías y modalidades de graduación aplicadas.', tipo: 'texto' },

  { clave_campo: 'reglamentos_cta_titulo', pagina_slug: '/institucional/reglamentos', valor: 'Referente Normativo', tipo: 'texto' },
  { clave_campo: 'reglamentos_cta_etiqueta', pagina_slug: '/institucional/reglamentos', valor: 'Repositorio Normativo Actualizado', tipo: 'texto' },
];

const initialConvenios = [
  // Sector Publico
  { titulo: 'Instituto Nacional de Estadística (INE)', descripcion: 'Principal aliado estratégico para la práctica censal y encuestas nacionales de gran escala.', sector: 'Sector Publico' },
  { titulo: 'Gobierno Autónomo de La Paz', descripcion: 'Desarrollo de proyectos de planificación regional y análisis demográfico departamental.', sector: 'Sector Publico' },
  { titulo: 'Agencia Nacional de Hidrocarburos (ANH)', descripcion: 'Modelado y análisis de datos energéticos para la regulación soberana.', sector: 'Sector Publico' },
  { titulo: 'Ministerio de Trabajo y Empleo', descripcion: 'Generación de estadísticas laborales y monitoreo de la seguridad social boliviana.', sector: 'Sector Publico' },
  { titulo: 'Defensa Pública (SEPDEP)', descripcion: 'Procesamiento y análisis de datos críticos del sistema judicial nacional.', sector: 'Sector Publico' },
  { titulo: 'Policía Nacional (UNIPOL)', descripcion: 'Investigación conjunta en áreas de estadística criminal y seguridad ciudadana.', sector: 'Sector Publico' },

  // Salud y Bienestar
  { titulo: 'Seguro Social Universitario (SSU)', descripcion: 'Gestión avanzada de datos de salud hospitalaria y bioestadística aplicada.', sector: 'Salud y Bienestar' },
  { titulo: 'Hospital Central de Tipuani', descripcion: 'Implementación de métodos estadísticos en salud pública para áreas rurales.', sector: 'Salud y Bienestar' },

  // Org. Internacionales
  { titulo: 'Visión Mundial Bolivia', descripcion: 'Análisis de impacto en proyectos de desarrollo infantil y vulnerabilidad social.', sector: 'Org. Internacionales' },
  { titulo: 'Plan Internacional INC', descripcion: 'Gestión y auditoría de datos para programas de igualdad y derechos humanos.', sector: 'Org. Internacionales' },

  // Consultoria
  { titulo: 'CIECI Consultora Integral', descripcion: 'Investigación privada y analítica avanzada para el sector empresarial.', sector: 'Consultoria' },
  { titulo: 'Acreditación & Certificación', descripcion: 'Apoyo técnico en procesos de calidad y auditoría institucional.', sector: 'Consultoria' },
];

async function main() {
  const client = new Client({ connectionString: DATABASE_URL });
  await client.connect();

  console.log('--- Verificando estado inicial de la BD ---');
  const count = async (table) => {
    const res = await client.query(`SELECT COUNT(*)::int AS total FROM ${table}`);
    return res.rows[0].total;
  };

  const initialSP = await count('seccion_pagina');
  const initialDocentes = await count('docente');
  const initialAdmins = await count('administrativo');
  const initialAux = await count('auxiliar');
  const initialEst = await count('estudiante_autoridad');
  const initialConvenios = await count('convenio');

  console.log(`seccion_pagina actual: ${initialSP}`);
  console.log(`docente actual: ${initialDocentes}`);
  console.log(`administrativo actual: ${initialAdmins}`);
  console.log(`auxiliar actual: ${initialAux}`);
  console.log(`estudiante_autoridad actual: ${initialEst}`);
  console.log(`convenio actual: ${initialConvenios}`);

  console.log('\n--- Insertando entradas nuevas en seccion_pagina (ON CONFLICT DO NOTHING) ---');
  let insertedSP = 0;
  for (const item of newSeccionPaginaEntries) {
    const res = await client.query(
      `INSERT INTO seccion_pagina (clave_campo, pagina_slug, valor, tipo)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (clave_campo) DO NOTHING`,
      [item.clave_campo, item.pagina_slug, item.valor, item.tipo]
    );
    if (res.rowCount > 0) insertedSP++;
  }
  console.log(`Nuevas entradas insertadas en seccion_pagina: ${insertedSP}`);

  console.log('\n--- Verificando e insertando convenios iniciales en tabla convenio ---');
  let insertedConvenios = 0;
  if (initialConvenios === 0) {
    for (const c of initialConveniosList) {
      await client.query(
        `INSERT INTO convenio (titulo, descripcion, sector) VALUES ($1, $2, $3)`,
        [c.titulo, c.descripcion, c.sector]
      );
      insertedConvenios++;
    }
    console.log(`Convenios iniciales sembrados: ${insertedConvenios}`);
  } else {
    console.log('Tabla convenio ya contiene datos, no se tocaron.');
  }

  const finalSP = await count('seccion_pagina');
  const finalConvenios = await count('convenio');

  console.log('\n--- Verificación de Integridad de Datos ---');
  console.log(`seccion_pagina: ${finalSP} (esperado: ${initialSP + insertedSP})`);
  console.log(`convenio: ${finalConvenios}`);
  console.log(`docente: ${await count('docente')} (debe ser ${initialDocentes} -> ${await count('docente') === initialDocentes ? 'OK' : 'ERROR'})`);
  console.log(`administrativo: ${await count('administrativo')} (debe ser ${initialAdmins} -> ${await count('administrativo') === initialAdmins ? 'OK' : 'ERROR'})`);
  console.log(`auxiliar: ${await count('auxiliar')} (debe ser ${initialAux} -> ${await count('auxiliar') === initialAux ? 'OK' : 'ERROR'})`);
  console.log(`estudiante_autoridad: ${await count('estudiante_autoridad')} (debe ser ${initialEst} -> ${await count('estudiante_autoridad') === initialEst ? 'OK' : 'ERROR'})`);

  await client.end();
}

const initialConveniosList = initialConvenios;

main().catch((err) => {
  console.error('Error durante la ejecución:', err);
  process.exit(1);
});
