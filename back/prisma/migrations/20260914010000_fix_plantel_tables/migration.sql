ALTER TABLE "administrativo" RENAME COLUMN "imagen" TO "foto";
ALTER TABLE "administrativo" DROP COLUMN "materia";
ALTER TABLE "administrativo" DROP COLUMN "paralelo";
ALTER TABLE "administrativo" DROP COLUMN "dias_auxiliatura";
ALTER TABLE "administrativo" DROP COLUMN "horario_auxiliatura";
ALTER TABLE "administrativo" DROP COLUMN "aula";

ALTER TABLE "auxiliar" RENAME COLUMN "imagen" TO "foto";
ALTER TABLE "auxiliar" ADD COLUMN "paralelo" VARCHAR(255) NOT NULL DEFAULT '';
ALTER TABLE "auxiliar" ADD COLUMN "dias_auxiliatura" VARCHAR(255) NOT NULL DEFAULT '';
ALTER TABLE "auxiliar" ADD COLUMN "horario_auxiliatura" VARCHAR(255) NOT NULL DEFAULT '';
ALTER TABLE "auxiliar" ADD COLUMN "aula" VARCHAR(255) NOT NULL DEFAULT '';
ALTER TABLE "auxiliar" ALTER COLUMN "paralelo" DROP DEFAULT;
ALTER TABLE "auxiliar" ALTER COLUMN "dias_auxiliatura" DROP DEFAULT;
ALTER TABLE "auxiliar" ALTER COLUMN "horario_auxiliatura" DROP DEFAULT;
ALTER TABLE "auxiliar" ALTER COLUMN "aula" DROP DEFAULT;