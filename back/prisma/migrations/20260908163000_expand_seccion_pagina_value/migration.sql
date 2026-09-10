-- Store long text and image data URLs without truncation.
ALTER TABLE "seccion_pagina"
ALTER COLUMN "valor" TYPE TEXT;
