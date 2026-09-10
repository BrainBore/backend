-- CreateTable
CREATE TABLE "seccion_pagina" (
    "clave_campo" VARCHAR(255) NOT NULL,
    "pagina_slug" VARCHAR(255) NOT NULL,
    "valor" VARCHAR(255) NOT NULL,
    "tipo" VARCHAR(255) NOT NULL,

    CONSTRAINT "seccion_pagina_pkey" PRIMARY KEY ("clave_campo")
);
