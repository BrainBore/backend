CREATE TABLE "estudiante_autoridad" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "cargo" VARCHAR(255) NOT NULL,
    "imagen" VARCHAR(255) NOT NULL,

    CONSTRAINT "estudiante_autoridad_pkey" PRIMARY KEY ("id")
);