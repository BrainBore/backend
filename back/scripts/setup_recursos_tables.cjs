const { Client } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:123@localhost:5432/usuarios';

const client = new Client({ connectionString: DATABASE_URL });

async function setupRecursosTables() {
  await client.connect();
  console.log('--- Conectado a PostgreSQL para configurar tablas de Recursos ---');

  // 1. Crear tablas
  const sql = `
    CREATE TABLE IF NOT EXISTS autor (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(255),
      area VARCHAR(255),
      tipo VARCHAR(100),
      ubicacion VARCHAR(255)
    );

    CREATE TABLE IF NOT EXISTS libro (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(500),
      editor VARCHAR(255),
      descripcion_fisica VARCHAR(255),
      codigo_isbn VARCHAR(100),
      calificacion_dewey VARCHAR(100),
      temas TEXT,
      link VARCHAR(500),
      id_autor INTEGER,
      CONSTRAINT fk_libro_autor
        FOREIGN KEY (id_autor)
        REFERENCES autor(id)
        ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS revista (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(500),
      tipo VARCHAR(100),
      publicacion VARCHAR(255),
      autor VARCHAR(255),
      descripcion TEXT,
      link VARCHAR(500)
    );

    CREATE TABLE IF NOT EXISTS documento_digital (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(500),
      tipo VARCHAR(100),
      peso VARCHAR(100),
      fecha_actualizacion DATE,
      link_descarga VARCHAR(500)
    );

    CREATE TABLE IF NOT EXISTS tesis (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(500),
      tipo VARCHAR(100),
      area VARCHAR(255),
      tutor VARCHAR(255),
      investigador VARCHAR(255),
      resumen TEXT,
      link VARCHAR(500)
    );

    CREATE TABLE IF NOT EXISTS banco_datos (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(500),
      tipo VARCHAR(100),
      fuente VARCHAR(255),
      anio INTEGER,
      resumen TEXT
    );

    CREATE TABLE IF NOT EXISTS datos_archivo (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(500),
      formato VARCHAR(100),
      peso VARCHAR(100),
      link_descarga VARCHAR(500),
      id_banco_datos INTEGER,
      CONSTRAINT fk_datos_archivo_banco
        FOREIGN KEY (id_banco_datos)
        REFERENCES banco_datos(id)
        ON DELETE CASCADE
    );
  `;

  await client.query(sql);
  console.log('Tablas autor, libro, revista, documento_digital, tesis, banco_datos y datos_archivo creadas o verificadas con éxito.');

  await client.end();
}

setupRecursosTables().catch(err => {
  console.error('Error al configurar tablas:', err);
  process.exit(1);
});
