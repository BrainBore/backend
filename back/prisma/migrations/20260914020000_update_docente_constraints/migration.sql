ALTER TABLE "docente" RENAME COLUMN "cargo_docente" TO "cargo_autoridad";
ALTER TABLE "docente" ALTER COLUMN "cargo_autoridad" DROP NOT NULL;
ALTER TABLE "docente" ALTER COLUMN "resumen_cv" TYPE VARCHAR(500);