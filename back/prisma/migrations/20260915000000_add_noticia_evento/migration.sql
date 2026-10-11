-- CreateTable
CREATE TABLE "noticia" (
    "id" SERIAL NOT NULL,
    "categoria" VARCHAR(100) NOT NULL,
    "color" VARCHAR(20) NOT NULL,
    "fecha" DATE NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "extracto" TEXT NOT NULL,
    "imagen_url" VARCHAR(500),
    "tiempo_lectura" VARCHAR(50) NOT NULL,
    "enlace" VARCHAR(255) NOT NULL,
    "estado" VARCHAR(20) NOT NULL DEFAULT 'published',
    "fecha_expiracion" DATE,

    CONSTRAINT "noticia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evento" (
    "id" SERIAL NOT NULL,
    "fecha" DATE NOT NULL,
    "color" VARCHAR(20) NOT NULL,
    "categoria" VARCHAR(100) NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "hora" VARCHAR(50) NOT NULL,
    "ubicacion" VARCHAR(255) NOT NULL,
    "estado" VARCHAR(20) NOT NULL DEFAULT 'published',

    CONSTRAINT "evento_pkey" PRIMARY KEY ("id")
);