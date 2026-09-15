CREATE TABLE "docente" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "grado_academico" VARCHAR(255) NOT NULL,
    "tipo" VARCHAR(255) NOT NULL,
    "resumen_cv" VARCHAR(255) NOT NULL,
    "correo_institucional" VARCHAR(255) NOT NULL,
    "cargo_docente" VARCHAR(255) NOT NULL,
    "imagen" VARCHAR(255) NOT NULL,

    CONSTRAINT "docente_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "administrativo" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "cargo" VARCHAR(255) NOT NULL,
    "correo_institucional" VARCHAR(255) NOT NULL,
    "imagen" VARCHAR(255) NOT NULL,
    "materia" VARCHAR(255) NOT NULL,
    "paralelo" VARCHAR(255) NOT NULL,
    "dias_auxiliatura" VARCHAR(255) NOT NULL,
    "horario_auxiliatura" VARCHAR(255) NOT NULL,
    "aula" VARCHAR(255) NOT NULL,

    CONSTRAINT "administrativo_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "auxiliar" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "tipo" VARCHAR(255) NOT NULL,
    "materia" VARCHAR(255) NOT NULL,
    "imagen" VARCHAR(255) NOT NULL,

    CONSTRAINT "auxiliar_pkey" PRIMARY KEY ("id")
);