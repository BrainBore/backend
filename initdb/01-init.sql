--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: administrativo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.administrativo (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    cargo character varying(255) NOT NULL,
    correo_institucional character varying(255) NOT NULL,
    foto character varying(255) NOT NULL
);


ALTER TABLE public.administrativo OWNER TO postgres;

--
-- Name: administrativo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.administrativo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.administrativo_id_seq OWNER TO postgres;

--
-- Name: administrativo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.administrativo_id_seq OWNED BY public.administrativo.id;


--
-- Name: autor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.autor (
    id integer NOT NULL,
    nombre character varying(255),
    area character varying(255),
    tipo character varying(100),
    ubicacion character varying(255)
);


ALTER TABLE public.autor OWNER TO postgres;

--
-- Name: autor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.autor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.autor_id_seq OWNER TO postgres;

--
-- Name: autor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.autor_id_seq OWNED BY public.autor.id;


--
-- Name: auxiliar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auxiliar (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    tipo character varying(255) NOT NULL,
    materia character varying(255),
    foto character varying(255) NOT NULL,
    paralelo character varying(255),
    dias_auxiliatura character varying(255),
    horario_auxiliatura character varying(255),
    aula character varying(255)
);


ALTER TABLE public.auxiliar OWNER TO postgres;

--
-- Name: auxiliar_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auxiliar_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.auxiliar_id_seq OWNER TO postgres;

--
-- Name: auxiliar_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auxiliar_id_seq OWNED BY public.auxiliar.id;


--
-- Name: banco_datos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.banco_datos (
    id integer NOT NULL,
    titulo character varying(500),
    tipo character varying(100),
    fuente character varying(255),
    anio integer,
    resumen text
);


ALTER TABLE public.banco_datos OWNER TO postgres;

--
-- Name: banco_datos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.banco_datos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.banco_datos_id_seq OWNER TO postgres;

--
-- Name: banco_datos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.banco_datos_id_seq OWNED BY public.banco_datos.id;


--
-- Name: convalida; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.convalida (
    "Id_materia_act" integer NOT NULL,
    "Id_materia_antigua" integer,
    nombre_materia_antigua character varying(255) NOT NULL,
    sigla_materia_antigua character varying(255) NOT NULL
);


ALTER TABLE public.convalida OWNER TO postgres;

--
-- Name: convalida_Id_materia_act_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."convalida_Id_materia_act_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."convalida_Id_materia_act_seq" OWNER TO postgres;

--
-- Name: convalida_Id_materia_act_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."convalida_Id_materia_act_seq" OWNED BY public.convalida."Id_materia_act";


--
-- Name: convenio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.convenio (
    id integer NOT NULL,
    titulo character varying(255) NOT NULL,
    descripcion text NOT NULL,
    sector character varying(255) NOT NULL
);


ALTER TABLE public.convenio OWNER TO postgres;

--
-- Name: convenio_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.convenio_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.convenio_id_seq OWNER TO postgres;

--
-- Name: convenio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.convenio_id_seq OWNED BY public.convenio.id;


--
-- Name: convocatoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.convocatoria (
    "Id_convocatoria" integer NOT NULL,
    periodo_convocatoria character varying(255) NOT NULL,
    desc_convocatoria text NOT NULL,
    ins_preu character varying(255) NOT NULL,
    ins_psa character varying(255) NOT NULL,
    fecha_entrega_docs date NOT NULL,
    matriculacion_kardex character varying(255) NOT NULL
);


ALTER TABLE public.convocatoria OWNER TO postgres;

--
-- Name: convocatoria_Id_convocatoria_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."convocatoria_Id_convocatoria_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."convocatoria_Id_convocatoria_seq" OWNER TO postgres;

--
-- Name: convocatoria_Id_convocatoria_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."convocatoria_Id_convocatoria_seq" OWNED BY public.convocatoria."Id_convocatoria";


--
-- Name: convocatoria_auxiliatura; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.convocatoria_auxiliatura (
    id integer NOT NULL,
    materia character varying(255) NOT NULL,
    tipo character varying(100) NOT NULL,
    descripcion text NOT NULL,
    fecha_publicacion date,
    fecha_cierre date,
    plazas integer NOT NULL,
    estado character varying(100) NOT NULL
);


ALTER TABLE public.convocatoria_auxiliatura OWNER TO postgres;

--
-- Name: convocatoria_auxiliatura_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.convocatoria_auxiliatura_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.convocatoria_auxiliatura_id_seq OWNER TO postgres;

--
-- Name: convocatoria_auxiliatura_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.convocatoria_auxiliatura_id_seq OWNED BY public.convocatoria_auxiliatura.id;


--
-- Name: datos_archivo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.datos_archivo (
    id integer NOT NULL,
    titulo character varying(500),
    formato character varying(100),
    peso character varying(100),
    link_descarga character varying(500),
    id_banco_datos integer
);


ALTER TABLE public.datos_archivo OWNER TO postgres;

--
-- Name: datos_archivo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.datos_archivo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.datos_archivo_id_seq OWNER TO postgres;

--
-- Name: datos_archivo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.datos_archivo_id_seq OWNED BY public.datos_archivo.id;


--
-- Name: directivo_estudiante; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.directivo_estudiante (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    cargo character varying(255) NOT NULL,
    area character varying(255) NOT NULL
);


ALTER TABLE public.directivo_estudiante OWNER TO postgres;

--
-- Name: directivo_estudiante_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.directivo_estudiante_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.directivo_estudiante_id_seq OWNER TO postgres;

--
-- Name: directivo_estudiante_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.directivo_estudiante_id_seq OWNED BY public.directivo_estudiante.id;


--
-- Name: docente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.docente (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    grado_academico character varying(255) NOT NULL,
    tipo character varying(255) NOT NULL,
    resumen_cv character varying(500) NOT NULL,
    correo_institucional character varying(255) NOT NULL,
    cargo_autoridad character varying(255),
    imagen character varying(255) NOT NULL
);


ALTER TABLE public.docente OWNER TO postgres;

--
-- Name: docente_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.docente_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.docente_id_seq OWNER TO postgres;

--
-- Name: docente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.docente_id_seq OWNED BY public.docente.id;


--
-- Name: documento_digital; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.documento_digital (
    id integer NOT NULL,
    titulo character varying(500),
    tipo character varying(100),
    peso character varying(100),
    fecha_actualizacion date,
    link_descarga character varying(500)
);


ALTER TABLE public.documento_digital OWNER TO postgres;

--
-- Name: documento_digital_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.documento_digital_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.documento_digital_id_seq OWNER TO postgres;

--
-- Name: documento_digital_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.documento_digital_id_seq OWNED BY public.documento_digital.id;


--
-- Name: estudiante_autoridad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estudiante_autoridad (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    cargo character varying(255) NOT NULL,
    imagen character varying(255) NOT NULL
);


ALTER TABLE public.estudiante_autoridad OWNER TO postgres;

--
-- Name: estudiante_autoridad_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.estudiante_autoridad_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.estudiante_autoridad_id_seq OWNER TO postgres;

--
-- Name: estudiante_autoridad_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.estudiante_autoridad_id_seq OWNED BY public.estudiante_autoridad.id;


--
-- Name: evento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.evento (
    id integer NOT NULL,
    fecha date NOT NULL,
    color character varying(20) NOT NULL,
    categoria character varying(100) NOT NULL,
    titulo character varying(255) NOT NULL,
    hora character varying(50) NOT NULL,
    ubicacion character varying(255) NOT NULL,
    estado character varying(20) DEFAULT 'published'::character varying NOT NULL
);


ALTER TABLE public.evento OWNER TO postgres;

--
-- Name: evento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.evento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.evento_id_seq OWNER TO postgres;

--
-- Name: evento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.evento_id_seq OWNED BY public.evento.id;


--
-- Name: incluye; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.incluye (
    "Id_plan_estudio" integer NOT NULL,
    "Id_materia_act" integer NOT NULL
);


ALTER TABLE public.incluye OWNER TO postgres;

--
-- Name: incluye_posgrado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.incluye_posgrado (
    id_modulo integer NOT NULL,
    horas_presencial character varying(100) NOT NULL,
    horas_investigacion character varying(100) NOT NULL
);


ALTER TABLE public.incluye_posgrado OWNER TO postgres;

--
-- Name: libro; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.libro (
    id integer NOT NULL,
    titulo character varying(500),
    editor character varying(255),
    descripcion_fisica character varying(255),
    codigo_isbn character varying(100),
    calificacion_dewey character varying(100),
    temas text,
    link character varying(500),
    id_autor integer
);


ALTER TABLE public.libro OWNER TO postgres;

--
-- Name: libro_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.libro_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.libro_id_seq OWNER TO postgres;

--
-- Name: libro_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.libro_id_seq OWNED BY public.libro.id;


--
-- Name: materia_pregrado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.materia_pregrado (
    "Id_materia_act" integer NOT NULL,
    sigla_materia_act character varying(255) NOT NULL,
    nombre_materia_act character varying(255) NOT NULL,
    horas_materia integer NOT NULL,
    prerrequisitos character varying(500) NOT NULL,
    semestre integer NOT NULL
);


ALTER TABLE public.materia_pregrado OWNER TO postgres;

--
-- Name: materia_pregrado_Id_materia_act_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."materia_pregrado_Id_materia_act_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."materia_pregrado_Id_materia_act_seq" OWNER TO postgres;

--
-- Name: materia_pregrado_Id_materia_act_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."materia_pregrado_Id_materia_act_seq" OWNED BY public.materia_pregrado."Id_materia_act";


--
-- Name: matriz_cientifica; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.matriz_cientifica (
    id integer NOT NULL,
    titulo character varying(255) NOT NULL,
    descripcion text NOT NULL,
    autor character varying(255) NOT NULL
);


ALTER TABLE public.matriz_cientifica OWNER TO postgres;

--
-- Name: matriz_cientifica_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.matriz_cientifica_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.matriz_cientifica_id_seq OWNER TO postgres;

--
-- Name: matriz_cientifica_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.matriz_cientifica_id_seq OWNED BY public.matriz_cientifica.id;


--
-- Name: modulo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modulo (
    id_modulo integer NOT NULL,
    titulo_modulo character varying(255) NOT NULL,
    numero_modulo character varying(50) NOT NULL
);


ALTER TABLE public.modulo OWNER TO postgres;

--
-- Name: modulo_id_modulo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modulo_id_modulo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.modulo_id_modulo_seq OWNER TO postgres;

--
-- Name: modulo_id_modulo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modulo_id_modulo_seq OWNED BY public.modulo.id_modulo;


--
-- Name: noticia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.noticia (
    id integer NOT NULL,
    categoria character varying(100) NOT NULL,
    color character varying(20) NOT NULL,
    fecha date NOT NULL,
    titulo character varying(255) NOT NULL,
    extracto text NOT NULL,
    imagen_url character varying(500),
    tiempo_lectura character varying(50) NOT NULL,
    enlace character varying(255) NOT NULL,
    estado character varying(20) DEFAULT 'published'::character varying NOT NULL,
    fecha_expiracion date
);


ALTER TABLE public.noticia OWNER TO postgres;

--
-- Name: noticia_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.noticia_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.noticia_id_seq OWNER TO postgres;

--
-- Name: noticia_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.noticia_id_seq OWNED BY public.noticia.id;


--
-- Name: organiza_posgrado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.organiza_posgrado (
    id_programa integer NOT NULL,
    id_modulo integer NOT NULL
);


ALTER TABLE public.organiza_posgrado OWNER TO postgres;

--
-- Name: pasantia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pasantia (
    id integer NOT NULL,
    titulo character varying(255) NOT NULL,
    tipo character varying(100) NOT NULL,
    descripcion text NOT NULL,
    area character varying(255) NOT NULL,
    empresa character varying(255) NOT NULL,
    fecha_cierre date,
    requisitos text NOT NULL
);


ALTER TABLE public.pasantia OWNER TO postgres;

--
-- Name: pasantia_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pasantia_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pasantia_id_seq OWNER TO postgres;

--
-- Name: pasantia_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pasantia_id_seq OWNED BY public.pasantia.id;


--
-- Name: plan_estudios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plan_estudios (
    "Id_plan_estudio" integer NOT NULL,
    nombre_plan character varying(255) NOT NULL
);


ALTER TABLE public.plan_estudios OWNER TO postgres;

--
-- Name: plan_estudios_Id_plan_estudio_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."plan_estudios_Id_plan_estudio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."plan_estudios_Id_plan_estudio_seq" OWNER TO postgres;

--
-- Name: plan_estudios_Id_plan_estudio_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."plan_estudios_Id_plan_estudio_seq" OWNED BY public.plan_estudios."Id_plan_estudio";


--
-- Name: programa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.programa (
    id_programa integer NOT NULL,
    nombre character varying(255) NOT NULL,
    tipo character varying(100) NOT NULL,
    costo character varying(100) NOT NULL
);


ALTER TABLE public.programa OWNER TO postgres;

--
-- Name: programa_id_programa_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.programa_id_programa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.programa_id_programa_seq OWNER TO postgres;

--
-- Name: programa_id_programa_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.programa_id_programa_seq OWNED BY public.programa.id_programa;


--
-- Name: publicaciones_estudiantiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.publicaciones_estudiantiles (
    id integer NOT NULL,
    titulo character varying(255) NOT NULL,
    anio integer NOT NULL,
    autor character varying(255) NOT NULL,
    area character varying(255) NOT NULL
);


ALTER TABLE public.publicaciones_estudiantiles OWNER TO postgres;

--
-- Name: publicaciones_estudiantiles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.publicaciones_estudiantiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.publicaciones_estudiantiles_id_seq OWNER TO postgres;

--
-- Name: publicaciones_estudiantiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.publicaciones_estudiantiles_id_seq OWNED BY public.publicaciones_estudiantiles.id;


--
-- Name: revista; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.revista (
    id integer NOT NULL,
    titulo character varying(500),
    tipo character varying(100),
    publicacion character varying(255),
    autor character varying(255),
    descripcion text,
    link character varying(500)
);


ALTER TABLE public.revista OWNER TO postgres;

--
-- Name: revista_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.revista_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.revista_id_seq OWNER TO postgres;

--
-- Name: revista_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.revista_id_seq OWNED BY public.revista.id;


--
-- Name: seccion_pagina; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.seccion_pagina (
    clave_campo character varying(255) NOT NULL,
    pagina_slug character varying(255) NOT NULL,
    valor text NOT NULL,
    tipo character varying(255) NOT NULL
);


ALTER TABLE public.seccion_pagina OWNER TO postgres;

--
-- Name: tesis; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tesis (
    id integer NOT NULL,
    titulo character varying(500),
    tipo character varying(100),
    area character varying(255),
    tutor character varying(255),
    investigador character varying(255),
    resumen text,
    link character varying(500)
);


ALTER TABLE public.tesis OWNER TO postgres;

--
-- Name: tesis_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tesis_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tesis_id_seq OWNER TO postgres;

--
-- Name: tesis_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tesis_id_seq OWNED BY public.tesis.id;


--
-- Name: administrativo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrativo ALTER COLUMN id SET DEFAULT nextval('public.administrativo_id_seq'::regclass);


--
-- Name: autor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autor ALTER COLUMN id SET DEFAULT nextval('public.autor_id_seq'::regclass);


--
-- Name: auxiliar id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auxiliar ALTER COLUMN id SET DEFAULT nextval('public.auxiliar_id_seq'::regclass);


--
-- Name: banco_datos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.banco_datos ALTER COLUMN id SET DEFAULT nextval('public.banco_datos_id_seq'::regclass);


--
-- Name: convalida Id_materia_act; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convalida ALTER COLUMN "Id_materia_act" SET DEFAULT nextval('public."convalida_Id_materia_act_seq"'::regclass);


--
-- Name: convenio id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenio ALTER COLUMN id SET DEFAULT nextval('public.convenio_id_seq'::regclass);


--
-- Name: convocatoria Id_convocatoria; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convocatoria ALTER COLUMN "Id_convocatoria" SET DEFAULT nextval('public."convocatoria_Id_convocatoria_seq"'::regclass);


--
-- Name: convocatoria_auxiliatura id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convocatoria_auxiliatura ALTER COLUMN id SET DEFAULT nextval('public.convocatoria_auxiliatura_id_seq'::regclass);


--
-- Name: datos_archivo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datos_archivo ALTER COLUMN id SET DEFAULT nextval('public.datos_archivo_id_seq'::regclass);


--
-- Name: directivo_estudiante id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.directivo_estudiante ALTER COLUMN id SET DEFAULT nextval('public.directivo_estudiante_id_seq'::regclass);


--
-- Name: docente id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.docente ALTER COLUMN id SET DEFAULT nextval('public.docente_id_seq'::regclass);


--
-- Name: documento_digital id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documento_digital ALTER COLUMN id SET DEFAULT nextval('public.documento_digital_id_seq'::regclass);


--
-- Name: estudiante_autoridad id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estudiante_autoridad ALTER COLUMN id SET DEFAULT nextval('public.estudiante_autoridad_id_seq'::regclass);


--
-- Name: evento id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento ALTER COLUMN id SET DEFAULT nextval('public.evento_id_seq'::regclass);


--
-- Name: libro id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.libro ALTER COLUMN id SET DEFAULT nextval('public.libro_id_seq'::regclass);


--
-- Name: materia_pregrado Id_materia_act; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.materia_pregrado ALTER COLUMN "Id_materia_act" SET DEFAULT nextval('public."materia_pregrado_Id_materia_act_seq"'::regclass);


--
-- Name: matriz_cientifica id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.matriz_cientifica ALTER COLUMN id SET DEFAULT nextval('public.matriz_cientifica_id_seq'::regclass);


--
-- Name: modulo id_modulo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modulo ALTER COLUMN id_modulo SET DEFAULT nextval('public.modulo_id_modulo_seq'::regclass);


--
-- Name: noticia id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.noticia ALTER COLUMN id SET DEFAULT nextval('public.noticia_id_seq'::regclass);


--
-- Name: pasantia id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pasantia ALTER COLUMN id SET DEFAULT nextval('public.pasantia_id_seq'::regclass);


--
-- Name: plan_estudios Id_plan_estudio; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plan_estudios ALTER COLUMN "Id_plan_estudio" SET DEFAULT nextval('public."plan_estudios_Id_plan_estudio_seq"'::regclass);


--
-- Name: programa id_programa; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.programa ALTER COLUMN id_programa SET DEFAULT nextval('public.programa_id_programa_seq'::regclass);


--
-- Name: publicaciones_estudiantiles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones_estudiantiles ALTER COLUMN id SET DEFAULT nextval('public.publicaciones_estudiantiles_id_seq'::regclass);


--
-- Name: revista id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revista ALTER COLUMN id SET DEFAULT nextval('public.revista_id_seq'::regclass);


--
-- Name: tesis id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tesis ALTER COLUMN id SET DEFAULT nextval('public.tesis_id_seq'::regclass);


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, email, password) FROM stdin;
f68b566d-5482-4a93-b7f3-7f35c30273a5	hernan@gmail.com	$2b$10$iNKY7zFezpCK8CPEwMq8ou1WpTVGEJ9buXkGaL/zU1KK/vQ.AtbL.
9338658f-e4c1-4a64-bc5d-61d21586a1a5	test@test.com	$2b$10$H6KlFjXhkQtvaO3e4L8Qo.6irraI79xzQdEMGCJ4pPiwLqHRsMXCa
0951254b-e82f-416b-9e2a-27aa4f5c941b	crud-test-1789423792@example.com	$2b$10$natmY7wnEsIEGMEuYzIas.ISQVAYbq5m23rbC48yQoBy109Q3ONzK
2c131d0b-e055-4510-9959-3a49b6bf8785	verify-1789425998@example.com	$2b$10$fOL/CwxDnRVVSY4e/dC5O.DsvYNarOzYf/yv6IPml9x9.8JC9Oo1G
ea15cae5-fd74-4d88-8c45-860389a10a13	sequence-test-1789429597@example.com	$2b$10$n9bqNf0OEDAbeEP/3PzsXOuIRZdGtG7G5N.mCSJql/XjiGnNeGNu6
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
0ad24e0a-0e9e-43ce-8084-d418334b8513	f34efe54306f4a7e3e75f6ab8aa9868e60231188a19602c7671a7f1d84a1ebe0	2026-09-02 20:24:45.848565-04	20240723022814_init	\N	\N	2026-09-02 20:24:45.840153-04	1
36fb3730-8c14-4ff3-830d-b2dead747621	9fd0c9b522f541544248ab7e40ef4c1b64c922fa27f7579b817cac654abdccd9	2026-09-08 12:11:39.321578-04	20260908161139_add_seccion_pagina	\N	\N	2026-09-08 12:11:39.210504-04	1
fc5f9bf9-cccd-4c90-8951-ce81580aaa39	ce32fce2748f48a0289f73413515c38ccf691901c8b88fdbf3a3a37b10a3c474	2026-09-08 14:35:59.514057-04	20260908163000_expand_seccion_pagina_value	\N	\N	2026-09-08 14:35:59.500648-04	1
8da66d73-9965-4d9c-884c-699b13ff215f	e2eb28a0bb6b09de10bbccd96552820a33615afec02052045771bb9248de39e5	2026-09-14 17:59:40.23201-04	20260914000000_add_plantel_tables	\N	\N	2026-09-14 17:59:40.112733-04	1
795cc331-6ad5-43d4-9b94-904e2d0600f1	2551b3d3dda2f5865763f2b104b3cb51ff6060778f87d0a3848b5f39bff4eeac	2026-09-14 18:03:58.154266-04	20260914010000_fix_plantel_tables	\N	\N	2026-09-14 18:03:58.104279-04	1
1358c47f-156f-4083-904c-e418697f770f	8f48274e4a05f678f72c242de460fad845ac193f37346c626e81782cd3c0ee9a	2026-09-14 18:32:45.478709-04	20260914020000_update_docente_constraints	\N	\N	2026-09-14 18:32:45.435039-04	1
dd82c362-cbcb-48d0-9099-c3138e019d89	ecf4cabcd7b1f040c5a562c8d6cfc2782833ff6718598fe7d2b713a19783e665	2026-09-14 18:41:35.994675-04	20260914030000_update_auxiliar_rules	\N	\N	2026-09-14 18:41:35.951622-04	1
470009c7-7424-43d6-b805-08e9a1c0b3a1	407172e4aaed2d0b838b05f539aa1e96a04dbc7562d2dd70ed3d92743e85bafe	2026-09-14 19:45:45.101273-04	20260914040000_sync_plantel_sequences	\N	\N	2026-09-14 19:45:45.045982-04	1
74a27061-1d40-4a05-9d82-f44db0891568	954d8f03ce5534210ee050e7495a92471c5b1c9b7d304bfc20631252cfd86931	2026-09-14 22:56:25.258308-04	20260914050000_add_estudiante_autoridad	\N	\N	2026-09-14 22:56:25.208613-04	1
df068c1b-e4e7-48e1-9061-7141799a5618	aad0318edfe916feb0da5ec0528ae2b469b02037b2144c44747040090f589e97	2026-10-11 20:11:31.846561-04	20260915000000_add_noticia_evento	\N	\N	2026-10-11 20:11:31.760997-04	1
\.


--
-- Data for Name: administrativo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.administrativo (id, nombre, cargo, correo_institucional, foto) FROM stdin;
1	Silvia Aranibar Silva	Secretaria Ejecutiva	correo	/
2	Alfredo Candia Chambi	Operador de Computacion	correo	/
3	Mario Alberto Clavel Salcedo	Mensajero	correo	/
4	Emilia Lidia Daza Mendoza	Auxiliar de Biblioteca	correo	/
5	Rene Quelca Suntura	Kardista Academico	correo	/
6	Yomar Erika Michel Valle	Tecnico de Registro	correo	/
7	Oscar Ramiro Rodriguez Lliulli	Oficinista	correo	/
8	Lidia Mamani Mayta	Portero Mensajero	correo	/
9	Ana Maria Panca Perez	Secretaria IETA	correo	/
\.


--
-- Data for Name: autor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.autor (id, nombre, area, tipo, ubicacion) FROM stdin;
1	Wackerly, Dennis D.	Estadística Matemática	persona	Universidad de Florida
2	Walpole, Ronald E.	Probabilidad e Inferencia	persona	Roanoke College
3	Montgomery, Douglas C.	Diseño de Experimentos	persona	Arizona State University
4	Devore, Jay L.	Ingeniería y Ciencias	persona	California Poly. State Univ.
5	Cochran, William G.	Técnicas de Muestreo	persona	Harvard University
6	Mendenhall, William	Estadística Matemática	persona	Universidad de Florida
7	Instituto Nacional de Estadística (INE)	Censos y Encuestas Oficiales	institucion	Estado Plurinacional de Bolivia
8	Coa Clemente, Ramiro	Demografía y Estadística Social	persona	IETA - UMSA
9	Banco Central de Bolivia (BCB)	Indicadores Macroeconómicos	institucion	Estado Plurinacional de Bolivia
10	Carrera de Estadística UMSA	Colección Institucional	institucion	Universidad Mayor de San Andrés
\.


--
-- Data for Name: auxiliar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auxiliar (id, nombre, tipo, materia, foto, paralelo, dias_auxiliatura, horario_auxiliatura, aula) FROM stdin;
1	Richard Daniel Mancilla Mamani	academico	Probabilidad I - Estadistica I	/	A	Lunes	12:00 - 14:00	P2-A2
2	Gabriel Yujra Machaca	academico	Inv. Operativa I	/	A	Lunes	12:00 - 14:00	P2-A2
3	Marcelo Sebastian Tudela Toro	academico	Inv. Operativa II	/	A	Lunes	12:00 - 14:00	P2-A2
4	Jose Alejandro Zegarra Espinoza	academico	Teoria de Probabilidad / Muestreo I	/	A	Lunes	12:00 - 14:00	P2-A2
5	Cardenas Soria Adriana	investigacion	\N	/	\N	\N	\N	\N
6	Valentina Valdez Vega	academico	Estadistica Descriptiva	/	A	Lunes	12:00 - 14:00	P2-A2
7	Rafaela Jhovana Condori Quino	academico	Probabilidad II	/	A	Lunes	12:00 - 14:00	P2-A2
8	Grover Huanca Flores	academico	Inferencia Estadistica I	/	A	Lunes	12:00 - 14:00	P2-A2
9	Carlos Enrique Guzman Delgado	academico	Inferencia Estadistica I	/	A	Lunes	12:00 - 14:00	P2-A2
10	Manuel Alejandro Loayza Medina	academico	Inv. Operativa I	/	A	Lunes	12:00 - 14:00	P2-A2
11	Daniel Franklin Cespedes Quispe	investigacion	\N	/	\N	\N	\N	\N
12	Cardenas Soria Alejandro	investigacion	\N	/	\N	\N	\N	\N
13	Rode Belen Valeriano Torrez	interaccion social	\N	/	\N	\N	\N	\N
14	Laura Elizabeth Quenta Marca	interaccion social	\N	/	\N	\N	\N	\N
15	Alex Suxo Poma	interaccion social	\N	/	\N	\N	\N	\N
\.


--
-- Data for Name: banco_datos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.banco_datos (id, titulo, tipo, fuente, anio, resumen) FROM stdin;
1	Censo Nacional de Población y Vivienda 1976	Censos	Instituto Nacional de Estadística (INE)	1976	Base de datos histórica oficial del Censo Nacional de Población y Vivienda de 1976. Contiene el consolidado nacional de población y vivienda en formato CSV.
2	Censo Nacional de Población y Vivienda 1992	Censos	Instituto Nacional de Estadística (INE)	1992	Base de datos histórica del Censo de Población y Vivienda de 1992. Incluye el consolidado nacional de población y vivienda, y bases regionales en formato CSV.
3	Censo Nacional de Población y Vivienda 2001	Censos	Instituto Nacional de Estadística (INE)	2001	Microdatos censales de 2001 con ponderaciones y codificación de municipios.
\.


--
-- Data for Name: convalida; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.convalida ("Id_materia_act", "Id_materia_antigua", nombre_materia_antigua, sigla_materia_antigua) FROM stdin;
1	1	Programación I	INF-111
2	2	Laboratorio de Programación I	LAB-111
3	3	Álgebra	MAT-130
4	4	Cálculo I	MAT-132
5	7	Estadística General	EST-130
6	6	Inglés I	LIN-116
8	14	Programación II	INF-121
10	10	Álgebra Lineal	MAT-136
11	11	Cálculo II	MAT-134
12	15	Probabilidad I	EST-133
13	13	Inglés II	LIN-117
16	16	Cálculo III	MAT-274
17	17	Probabilidad II	EST-233
19	27	Estadística Matemática I	EST-225
24	24	Investigación Operativa I	EST-216
26	28	Muestreo I	EST-250
29	35	Muestreo II	EST-350
30	30	Procesos Estocásticos	EST-315
31	31	Investigación Operativa II	EST-310
32	34	Modelos Lineales	EST-330
37	41	Métodos Multivariados I	EST-335
40	42	Estadística Bayesiana	EST-376
43	43	Diseño de Experimentos	EST-373
44	44	Métodos Multivariados II	EST-375
49	49	Taller de Titulación	EST-389
\.


--
-- Data for Name: convenio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.convenio (id, titulo, descripcion, sector) FROM stdin;
1	Instituto Nacional de Estadística (INE)	Principal aliado estratégico para la práctica censal y encuestas nacionales de gran escala.	Sector Publico
2	Gobierno Autónomo de La Paz	Desarrollo de proyectos de planificación regional y análisis demográfico departamental.	Sector Publico
3	Agencia Nacional de Hidrocarburos (ANH)	Modelado y análisis de datos energéticos para la regulación soberana.	Sector Publico
4	Ministerio de Trabajo y Empleo	Generación de estadísticas laborales y monitoreo de la seguridad social boliviana.	Sector Publico
5	Defensa Pública (SEPDEP)	Procesamiento y análisis de datos críticos del sistema judicial nacional.	Sector Publico
6	Policía Nacional (UNIPOL)	Investigación conjunta en áreas de estadística criminal y seguridad ciudadana.	Sector Publico
7	Seguro Social Universitario (SSU)	Gestión avanzada de datos de salud hospitalaria y bioestadística aplicada.	Salud y Bienestar
8	Hospital Central de Tipuani	Implementación de métodos estadísticos en salud pública para áreas rurales.	Salud y Bienestar
9	Visión Mundial Bolivia	Análisis de impacto en proyectos de desarrollo infantil y vulnerabilidad social.	Org. Internacionales
10	Plan Internacional INC	Gestión y auditoría de datos para programas de igualdad y derechos humanos.	Org. Internacionales
11	CIECI Consultora Integral	Investigación privada y analítica avanzada para el sector empresarial.	Consultoria
12	Acreditación & Certificación	Apoyo técnico en procesos de calidad y auditoría institucional.	Consultoria
14	prueba convencio	descripcion123	Consultoria
\.


--
-- Data for Name: convocatoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.convocatoria ("Id_convocatoria", periodo_convocatoria, desc_convocatoria, ins_preu, ins_psa, fecha_entrega_docs, matriculacion_kardex) FROM stdin;
1	Gestión 2026 - Primer Semestre	Convocatoria oficial para el ingreso a la Carrera de Estadística mediante Prueba de Suficiencia Académica (PSA) y Curso Preuniversitario (Pre-U) de la FCPN.	Agosto - Septiembre (año previo)	Noviembre - Diciembre (año previo)	2026-02-15	Finales de Febrero 2026 en Kárdex Académico
2	Gestión 2026 - Segundo Semestre	Convocatoria de admisión regular para el segundo periodo académico semestral de la gestión 2026.	Mayo - Junio 2026	Junio - Julio 2026	2026-07-20	Primeros días de Agosto 2026 en Kárdex Académico
\.


--
-- Data for Name: convocatoria_auxiliatura; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.convocatoria_auxiliatura (id, materia, tipo, descripcion, fecha_publicacion, fecha_cierre, plazas, estado) FROM stdin;
1	Auxiliatura de Docencia - Gestión II/2026	Docencia	Selección de auxiliares para áreas de Matemáticas, Probabilidad, Estadística Aplicada y Programación.	2026-04-15	2026-04-30	18	Abierta
2	Auxiliatura de Laboratorio - Gestión II/2026	Laboratorio	Convocatoria para apoyo técnico en laboratorios de software estadístico (R, Python, SPSS).	2026-04-18	2026-05-05	6	Próximamente
3	Auxiliatura de Docencia - Gestión I/2026	Docencia	Proceso concluido de selección para el primer semestre de la gestión 2026.	2025-11-10	2025-11-30	16	Concluida
\.


--
-- Data for Name: datos_archivo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.datos_archivo (id, titulo, formato, peso, link_descarga, id_banco_datos) FROM stdin;
1	Censo Nacional 1976 - BOLIVIA (Completo)	CSV	290 MB	https://drive.google.com/file/d/12gjhJ9_j02UAedZ9xrhKrrLKDY6oVSNT/view?usp=sharing	1
2	Personas - Chuquisaca	CSV	35 MB	https://drive.google.com/file/d/1TR7qJLR9vIQWpfVwwCOuv5Q5ZOAD0Sqy/view?usp=sharing	1
3	Vivienda - Chuquisaca	CSV	25 MB	https://drive.google.com/file/d/1Xk0IFjr0xGLr1vVK9dk8ObvFT4sMbuIk/view?usp=sharing	1
4	Censo Nacional 1992 - BOLIVIA (Completo)	CSV	435 MB	https://drive.google.com/file/d/19U6vxMfh37sP-kTtsEi3d4qj1ZikgVQv/view?usp=sharing	2
5	Personas - Chuquisaca	CSV	45 MB	https://drive.google.com/file/d/17ree_T9z9TLJnKDu2uuD1TO-zXgRXmyU/view?usp=sharing	2
6	Censo Nacional 2001 - Microdatos Consolidados	CSV	480 MB	https://drive.google.com/file/d/censos2001	3
\.


--
-- Data for Name: directivo_estudiante; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.directivo_estudiante (id, nombre, cargo, area) FROM stdin;
1	Jhoseline Gloria Chambi Velasco	Primera Secretaria Ejecutiva	Directiva CEE
2	Alejandra Edith Salas Birrueta	Segunda Secretaria Ejecutiva	Directiva CEE
3	Aylin Yenori Maita Chacón	Tercera Secretaria Ejecutiva	Directiva CEE
4	Jhovanny Andrés Urbina Vargas	Cuarto Secretario Ejecutivo	Directiva CEE
5	Daniela Raquel Nava Canaviri	Quinta Secretaria Ejecutiva	Directiva CEE
6	Gerald Luis Condori Lima	Sexto Secretario Ejecutivo	Directiva CEE
7	Katherine Mayte Mendoza Quispe	Primer Titular	Delegados HCF
8	Daniela Raquel Nava Canaviri	Primer Suplente	Delegados HCF
9	Milenka Mariana Del Villar Cari	Segundo Titular	Delegados HCF
10	Gerald Luis Condori Lima	Segundo Titular	Delegados HCF
11	Alejandra Adela Velarde Machicado	Primer Titular	Delegados Académico
12	Grover Huanca Flores	Primer Suplente	Delegados Académico
13	Daniel Franklin Céspedes Quispe	Segundo Suplente	Delegados Académico
\.


--
-- Data for Name: docente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.docente (id, nombre, grado_academico, tipo, resumen_cv, correo_institucional, cargo_autoridad, imagen) FROM stdin;
1	Juan Carlos Flores Lopez	Ph. D.	Titular	Docente titular con experiencia en estadistica y formacion universitaria.	jcflores@fcpn.edu.bo	Director(a) de Carrera	/
9	Lucy Gabriela Cuarita Ajno	M. Sc.	Interino	Docente con experiencia en estadistica aplicada.	lcuarita@fcpn.edu.bo	Director(a) Academico(a)	/
2	Ramiro Coa Clemente	M. Sc.	Interino	Docente con experiencia en estadistica aplicada y docencia universitaria.	rcoa@fcpn.edu.bo	Estamendo Docente	/
3	Nicolas Chavez Quisbert	M. Sc.	Interino	Docente con experiencia en estadistica y participacion academica institucional.	nchaves@fcpn.edu.bo	Estamendo Docente	/
27	hernan	Lic.	Titular	hoja de vida	correo@correo.com	Estamendo Docente	/
4	Raul Leon Delgado Alvarez	Lic.	Interino	Docente de la Carrera de Estadistica.	correo	\N	/
5	Nilda Gloria Flores Salinas	Lic.	Interino	Docente con experiencia en formacion estadistica.	nildafloress@hotmail.com	\N	/
6	Maria de los Angeles Ramos Boutier	Lic.	Interino	Docente de la Carrera de Estadistica.	correo	\N	/
7	Jaime Tito Pinto Ajhuacho	Lic.	Interino	Docente con experiencia en formacion estadistica.	jtito@fcpn.edu.bo	\N	/
8	Fernando Oday Rivero Suguiura	M. Sc.	Interino	Docente con experiencia en estadistica y participacion academica institucional.	friverosuguiura2004@gmail.com	\N	/
10	Dindo Valdez Blanco	M. Sc.	Interino	Docente con experiencia en estadistica aplicada.	dvaldez@fcpn.edu.bo	\N	/
11	Emma Martha Mancilla Flores	Lic.	Interino	Docente de la Carrera de Estadistica.	correo	\N	/
12	Marisol Paredes Alarcon	Lic.	Interino	Docente con experiencia en formacion estadistica.	mparedes@fcpn.edu.bo	\N	/
13	Ivan Yony Aliaga Caceres	M. Sc.	Interino	Docente con experiencia en estadistica aplicada.	correo	\N	/
14	Mario Amilcar Miranda Gonzales	Lic.	Interino	Docente de la Carrera de Estadistica.	correo	\N	/
15	Alvaro Limber Chirino Gutierrez	M. Sc.	Interino	Docente con experiencia en estadistica aplicada.	correo	\N	/
16	Leticia Mendoza Gomez	Lic.	Interino	Docente de la Carrera de Estadistica.	correo	\N	/
17	Benito Oscar Sinani Beltran	Lic.	Interino	Docente de la Carrera de Estadistica.	correo	\N	/
18	Juan Chapi Mamani	Lic.	Interino	Docente de la Carrera de Estadistica.	correo	\N	/
19	Veronica Cuenca Ramallo	M. Sc.	Interino	Docente con experiencia en estadistica aplicada.	correo	\N	/
20	Maria Isabel Conde Altamirano	M. Sc.	Interino	Docente con experiencia en estadistica aplicada.	correo	\N	/
21	Yomar Andoni Machaca Beltran	Lic.	Interino	Docente de la Carrera de Estadistica.	correo	\N	/
22	Fernando Espinoza Centella	Lic.	Interino	Docente de Ingles I en la Carrera de Estadistica.	correo	\N	/
23	Javier Taborga Manrique	Lic.	Interino	Docente de Ingles II en la Carrera de Estadistica.	correo	\N	/
\.


--
-- Data for Name: documento_digital; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.documento_digital (id, titulo, tipo, peso, fecha_actualizacion, link_descarga) FROM stdin;
1	Formulario de Solicitud de Auxiliaturas de Docencia e Investigación	Formularios y Trámites	Carpeta Drive	2026-02-15	https://drive.google.com/drive/folders/1gxt5Gjrn9rKfr9s-G0o10ogmbS7CG9kW?usp=sharing
2	Formulario Parte de Asistencia (Auxiliares)	Formularios y Trámites	Carpeta Drive	2026-02-15	https://drive.google.com/drive/folders/1ZUGJ7KuqRSYjpwa2o_jUB5Ht7y9bDBDl?usp=sharing
3	Formulario de Solicitud de Defensa de Panel	Formularios y Trámites	1.2 MB	2026-02-15	https://drive.google.com/uc?export=download&id=1WA_ulsKaEjg5KN2FpMR0RuXR0iMNFkUv
4	Formulario de Declaración Jurada	Formularios y Trámites	450 KB	2026-02-15	https://drive.google.com/uc?export=download&id=1kbBCfn_9rtguukgrwzF8XvTyLcTxq23t
\.


--
-- Data for Name: estudiante_autoridad; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estudiante_autoridad (id, nombre, cargo, imagen) FROM stdin;
2	Univ. Alejandra Edith Salas Birrueta	Delegada Estudiantil	/images/institucional/estudiante_salas.jpeg
3	Univ. Alejandra Adela Velarde Machicado	Delegada Estudiantil	/images/institucional/estudiante_velarde.jpeg
1	Univ. Jhoseline Gloria Chambi Velasco	Delegada Estudiantil	/images/institucional/estudiante_chambi.jpeg
\.


--
-- Data for Name: evento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.evento (id, fecha, color, categoria, titulo, hora, ubicacion, estado) FROM stdin;
1	2025-03-20	#00447e	Institucional	Inicio Censo Universitario 2025	08:00 — 17:00	Campus Central UMSA	published
2	2025-03-25	#00447e	Académico	Ceremonia de Graduación 2024	09:00 — 12:00	Auditorio Central UMSA	published
3	2025-03-30	#ea580c	Postgrado	Cierre de Inscripciones — Postgrado 2025	08:00 — 16:00	Secretaría de Postgrado, Piso 3	published
4	2025-04-04	#64748b	Taller	Taller de Introducción a Python para Estadísticos	14:00 — 18:00	Sala de Cómputo Principal	published
5	2025-04-10	#00447e	Investigación	Defensa de Tesis de Maestría en Estadística Aplicada	09:00 — 13:00	Sala del IETA	published
6	2025-04-18	#ea580c	Seminario	Seminario de Big Data e Inteligencia Artificial en INE Bolivia	10:00 — 12:00	Auditorio de la Facultad de Ciencias Puras	published
\.


--
-- Data for Name: incluye; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.incluye ("Id_plan_estudio", "Id_materia_act") FROM stdin;
1	1
2	1
1	2
2	2
1	3
2	3
1	4
2	4
2	5
1	6
2	6
1	7
2	8
2	9
1	10
2	10
1	11
2	11
2	12
1	13
2	13
1	14
1	15
1	16
2	16
1	17
2	17
2	18
2	19
1	20
2	20
1	21
2	22
2	23
1	24
2	24
2	25
2	26
1	27
1	28
2	29
1	30
2	30
1	31
2	31
2	32
2	33
1	34
1	35
2	36
2	37
2	38
1	39
2	39
2	40
1	41
1	42
1	43
2	43
1	44
2	44
2	45
2	46
1	47
2	47
2	48
1	49
2	49
1	50
2	50
1	51
2	51
\.


--
-- Data for Name: incluye_posgrado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.incluye_posgrado (id_modulo, horas_presencial, horas_investigacion) FROM stdin;
1	240 hrs	360 hrs
2	240 hrs	360 hrs
3	240 hrs	360 hrs
4	280 hrs	320 hrs
5	200 hrs	300 hrs
6	240 hrs	320 hrs
7	240 hrs	320 hrs
8	280 hrs	360 hrs
9	80 hrs	120 hrs
10	80 hrs	120 hrs
11	80 hrs	120 hrs
12	80 hrs	120 hrs
13	80 hrs	120 hrs
14	80 hrs	120 hrs
15	80 hrs	120 hrs
16	80 hrs	120 hrs
17	80 hrs	120 hrs
18	80 hrs	120 hrs
19	80 hrs	120 hrs
20	80 hrs	120 hrs
\.


--
-- Data for Name: libro; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.libro (id, titulo, editor, descripcion_fisica, codigo_isbn, calificacion_dewey, temas, link, id_autor) FROM stdin;
1	Estadística Matemática con Aplicaciones	Cengage Learning	944 páginas, il., 27 cm	978-607-481-223-7	519.5 W115e	Estadística Matemática, Probabilidad, Muestreo, Estimación puntual	https://bibliotecas.umsa.bo/cgi-bin/koha/opac-detail.pl?biblionumber=73656	1
2	Probabilidad y Estadística para Ingeniería y Ciencias	Pearson Educación	792 páginas, il., 25 cm	978-607-32-1416-2	519.2 W218p	Variables aleatorias, Distribuciones de probabilidad, Regresión lineal	https://bibliotecas.umsa.bo/cgi-bin/koha/opac-detail.pl?biblionumber=72723	2
3	Diseño y Análisis de Experimentos	Limusa Wiley	686 páginas, il., 26 cm	978-968-18-6156-8	519.53 M787d	ANOVA, Diseños factoriales, Superficies de respuesta, Control de calidad	https://bibliotecas.umsa.bo/cgi-bin/koha/opac-detail.pl?biblionumber=72778	3
4	Probabilidad y Estadística para Ingeniería y Ciencias (Devore)	Thomson Paraninfo	750 páginas, il., 26 cm	978-970-686-457-4	519.5 D498p	Inferencia estadística, Pruebas de hipótesis, Métodos no paramétricos	https://bibliotecas.umsa.bo/cgi-bin/koha/opac-detail.pl?biblionumber=72668	4
5	Técnicas de Muestreo	Compañía Editorial Continental	513 páginas, il., 23 cm	978-968-26-0310-5	519.52 C663t	Muestreo aleatorio simple, Estratificación, Conglomerados, Errores no muestrales	https://bibliotecas.umsa.bo/cgi-bin/koha/opac-detail.pl?biblionumber=72567	5
\.


--
-- Data for Name: materia_pregrado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.materia_pregrado ("Id_materia_act", sigla_materia_act, nombre_materia_act, horas_materia, prerrequisitos, semestre) FROM stdin;
1	INF-111	Programación I	200	Ninguno	1
2	LAB-111	Laboratorio de Programación I	240	Ninguno	1
3	MAT-130	Álgebra	200	Ninguno	1
4	MAT-132	Cálculo I	200	Ninguno	1
5	EST-113	Estadística Descriptiva	240	Ninguno	1
6	LIN-116	Inglés I	120	Ninguno	1
7	EST-130	Estadística General	240	Ninguno	1
8	EST-122	Computación Estadística I	240	INF-111, LAB-111	2
9	EST-124	Diseño y Proc. Estadístico I	240	EST-113	2
10	MAT-136	Álgebra Lineal	200	MAT-130	2
11	MAT-134	Cálculo II	200	MAT-132	2
12	EST-123	Probabilidad I	200	MAT-132	2
13	LIN-117	Inglés II	120	LIN-116	2
14	INF-121	Programación II	240	INF-111, LAB-111	2
15	EST-133	Probabilidad I (Antiguo)	200	MAT-132	2
16	MAT-274	Ecuaciones Diferenciales	200	MAT-134	3
17	EST-233	Probabilidad II	280	EST-123	3
18	EST-231	Análisis Matricial Estadístico	240	MAT-136	3
19	EST-235	Inferencia Estadística I	240	EST-123	3
20	EST-232	Demografía	240	EST-123	3
21	EST-230	Bases de Datos	200	INF-121	3
22	EST-240	Teoría de Probabilidad I	240	EST-233	4
23	EST-241	Estadística no Paramétrica	240	EST-235	4
24	EST-242	Investigación Operativa I	240	EST-231	4
25	EST-243	Inferencia Estadística II	240	EST-235	4
26	EST-244	Muestreo I	240	EST-235	4
27	EST-225	Estadística Matemática I	240	EST-233	4
28	EST-250	Muestreo I (Antiguo)	240	EST-225	4
29	EST-354	Muestreo II	240	EST-244	5
30	EST-355	Procesos Estocásticos	240	EST-240	5
31	EST-352	Investigación Operativa II	240	EST-242	5
32	EST-353	Modelos Lineales I	240	EST-243	5
33	EST-351	Computación Estadística II	240	EST-122	5
34	EST-330	Modelos Lineales (Antiguo)	240	EST-225	5
35	EST-350	Muestreo II (Antiguo)	240	EST-250	5
36	EST-362	Estadística Computacional	240	EST-351, EST-354	6
37	EST-365	Métodos Multivariados I	240	EST-353	6
38	EST-367	Series Tiempo Univariante	240	EST-355	6
39	EST-368	Metodología de Investigación	240	EST-354	6
40	EST-366	Estadística Bayesiana I	240	EST-243	6
41	EST-335	Métodos Multivariados I (Antiguo)	240	EST-330	6
42	EST-376	Estadística Bayesiana (Antiguo)	240	EST-225	6
43	EST-373	Diseño de Experimentos	240	EST-353	7
44	EST-375	Métodos Multivariados II	240	EST-365	7
45	EST-374	Análisis de Datos Categóricos	240	EST-353	7
46	EST-372	Análisis de Datos Masivo I	280	EST-365	7
47	OPT-101	Optativa I	200	Hasta 6° Semestre	7
48	EST-381	Minería de Datos	280	EST-372	8
49	EST-389	Taller de Titulación	520	Hasta 7° Semestre	8
50	OPT-201	Optativa II	200	Hasta 7° Semestre	8
51	OPT-301	Optativa III	200	Hasta 7° Semestre	8
\.


--
-- Data for Name: matriz_cientifica; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.matriz_cientifica (id, titulo, descripcion, autor) FROM stdin;
1	Ciencia de Datos Aplicada	Modelado predictivo, machine learning y minería de datos para resolver problemas complejos.	Sociedad Científica CEE
2	Estadística Social y Demográfica	Análisis de censos, encuestas de hogares y proyecciones para políticas públicas.	Línea Demográfica
3	Bioestadística y Epidemiología	Colaboración en salud pública, epidemiología y análisis estadístico de ensayos clínicos.	Línea Bioestadística
4	Inferencia Bayesiana y MCMC	Estadística bayesiana, simulación computacional y modelos probabilísticos robustos.	Grupo Bayesiano
\.


--
-- Data for Name: modulo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modulo (id_modulo, titulo_modulo, numero_modulo) FROM stdin;
1	Optimización y modelos lineales	Módulo I
2	Inferencia avanzada	Módulo II
3	Series de tiempo y simulación	Módulo III
4	Investigación aplicada y Taller de grado	Módulo IV
5	Diplomado en Ciencia de Datos	Módulo I
6	Diplomado en Big Data y Taller de Tesis I	Módulo II
7	Diplomado en Data Mining y Taller de Tesis II	Módulo III
8	Maestría en Ciencia y Análisis de Datos y Taller III	Módulo IV
9	Fundamentos avanzados de programación en R y Python	Módulo I
10	Análisis exploratorio y limpieza de datos	Módulo II
11	Modelamiento y algoritmos de predicción	Módulo III
12	Visualización interactiva y reporte de resultados	Módulo IV
13	Fundamentos estadísticos en ciencias de la salud	Módulo I
14	Diseño epidemiológico y muestreo clínico	Módulo II
15	Supervivencia y regresión logística	Módulo III
16	Software estadístico aplicado a bioestadística	Módulo IV
17	Fundamentos de econometría y álgebra matricial	Módulo I
18	Series de tiempo estacionarias y no estacionarias	Módulo II
19	Modelos ARCH GARCH y riesgo financiero	Módulo III
20	Taller aplicado de modelación económica y financiera	Módulo IV
\.


--
-- Data for Name: noticia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.noticia (id, categoria, color, fecha, titulo, extracto, imagen_url, tiempo_lectura, enlace, estado, fecha_expiracion) FROM stdin;
7	Comunicado	#00447e	2026-06-02	Comunicado de ampliación para recepción de files de auxiliaturas de cátedra	Se comunica a los postulantes que la entrega física de documentos se extiende excepcionalmente en la secretaría del IETA.	\N	2 min	/estudiantes/convocatorias-auxiliaturas	published	\N
8	Becas	#ea580c	2026-05-01	Convocatoria caducada para becas de investigación en ciencia de datos	Esta noticia ya no se mostrará públicamente porque su fecha de vencimiento (expiryDate) está en el pasado.	/images/inicio/noticia_becas.jpg	3 min	#	published	2026-05-15
1	Investigación	#ea580c	2025-03-15	Investigadores de la Carrera publican en revista ISI sobre modelos de pobreza multidimensional en Bolivia	El equipo del IETA presentó resultados de tres años de investigación aplicada con datos del INE, siendo la primera publicación boliviana en el índice.	/images/inicio/noticia_pobreza.jpg	4 min	/investigacion/proyectos	published	\N
2	Académico	#00447e	2025-03-10	Apertura de inscripciones para la Maestría en Análisis de Datos 2025	El Postgrado de la Carrera de Estadística anuncia el inicio de inscripciones para la nueva cohorte y programas de postgrado autofinanciados.	/images/inicio/noticia_maestria.jpg	3 min	/postgrado/maestria-autofinanciada	published	\N
3	Eventos	#64748b	2025-03-05	Feria de Ciencia de Datos: estudiantes presentan proyectos de análisis social	La segunda edición reunió a más de 150 estudiantes con proyectos estadísticos innovadores orientados al desarrollo nacional.	/images/inicio/noticia_feria.jpg	5 min	/investigacion/revista-varianza	published	\N
4	Institucional	#00447e	2025-03-01	Actualización del Reglamento Académico de la Gestión de la Carrera	Nuevos lineamientos aprobados para agilizar los procesos de evaluación y el seguimiento estudiantil.	/images/inicio/noticia_reglamento.jpg	2 min	/institucional/reglamentos	published	\N
5	Postgrado	#ea580c	2025-02-27	Becas parciales para diplomados en estadística aplicada en el sector público	Convocatoria abierta para profesionales que buscan especializarse en el análisis de datos masivos y toma de decisiones.	/images/inicio/noticia_becas.jpg	3 min	/postgrado/diplomados	published	\N
6	Convocatorias	#ea580c	2025-02-20	Convocatoria de Auxiliaturas Académicas para la Gestión 2026	Se publican las plazas oficiales para postulantes a auxiliares de docencia y laboratorio en diversas materias.	/images/inicio/noticia_auxiliaturas.jpg	4 min	/estudiantes/convocatorias-auxiliaturas	published	\N
\.


--
-- Data for Name: organiza_posgrado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.organiza_posgrado (id_programa, id_modulo) FROM stdin;
1	1
1	2
1	3
1	4
2	5
2	6
2	7
2	8
3	9
3	10
3	11
3	12
4	13
4	14
4	15
4	16
5	17
5	18
5	19
5	20
\.


--
-- Data for Name: pasantia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pasantia (id, titulo, tipo, descripcion, area, empresa, fecha_cierre, requisitos) FROM stdin;
1	Pasante en Análisis Demográfico	Trabajo Dirigido / Grado	Apoyo en procesamiento de datos censales, tabulaciones cruzadas y análisis de indicadores demográficos.	Sector Público	Instituto Nacional de Estadística (INE)	2026-11-30	8° semestre, manejo de SPSS y R.
2	Asistente de Riesgos y Credit Scoring	Pre-Profesional	Desarrollo y monitoreo de modelos predictivos de riesgo crediticio y comportamiento financiero.	Finanzas	Banco Nacional de Bolivia (BNB)	2026-12-15	7° semestre, SQL, Python y modelos logísticos.
3	Analista de Datos Económicos	Graduación	Estimación de series macroeconómicas y preparación de informes técnicos cuantitativos.	Gobierno	Ministerio de Economía	2026-12-20	Egresado, econometría y series de tiempo.
\.


--
-- Data for Name: plan_estudios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.plan_estudios ("Id_plan_estudio", nombre_plan) FROM stdin;
1	Plan Antiguo
2	Plan Nuevo
\.


--
-- Data for Name: programa; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.programa (id_programa, nombre, tipo, costo) FROM stdin;
1	Maestría Terminal en Estadística	Maestría	Gratuito / Aporte regular UMSA
2	Maestría en Ciencia y Análisis de Datos	Maestría Autofinanciada	18.000 Bs. (Colegiatura)
3	Ciencia de Datos con R y Python	Diplomado	4.500 Bs.
4	Bioestadística Aplicada	Diplomado	5.200 Bs.
5	Econometría y Modelos Financieros	Diplomado	4.800 Bs.
\.


--
-- Data for Name: publicaciones_estudiantiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.publicaciones_estudiantiles (id, titulo, anio, autor, area) FROM stdin;
1	Predicción de deserción estudiantil usando Random Forest	2025	Nodo R & Python	Ciencia de Datos
2	Análisis Bayesiano de la inflación interanual en Bolivia	2024	Grupo Bayesiano	Econometría
3	Impacto sociodemográfico post-censo 2024 en La Paz	2025	Línea Demográfica	Estadística Social
4	Clustering de patologías respiratorias en zonas de altitud	2023	Línea Bioestadística	Salud Pública
\.


--
-- Data for Name: revista; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.revista (id, titulo, tipo, publicacion, autor, descripcion, link) FROM stdin;
1	International Journal of Statistics and Applications	Revista Científica	Scientific & Academic Publishing	Comité Editorial Internacional	Revista científica internacional que publica artículos originales en todas las áreas teóricas y aplicadas de la estadística.	http://www.sapub.org/journal/about.aspx?journalid=1115
2	Revista Varianza	Revista Científica	IETA - Carrera de Estadística UMSA	Instituto de Estadística Teórica y Aplicada	Revista oficial de investigación de la Carrera de Estadística y el IETA. Publica trabajos teóricos y aplicados con impacto nacional.	https://ojs.umsa.bo/ojs/index.php/varianza
3	Revista Colombiana de Estadística	Revista Científica	Universidad Nacional de Colombia	Departamento de Estadística UNAL	Publicación científica de referencia en América Latina orientada a la difusión de trabajos teóricos y aplicados de estadística.	https://revistas.unal.edu.co/index.php/estad
4	Boletín DTIC - Universidad Mayor de San Andrés	Boletín Informativo	Departamento de Tecnologías de Información y Comunicación	DTIC UMSA	Publicaciones oficiales de la UMSA referidas a infraestructura tecnológica, sistemas académicos y de comunicación universitaria.	https://dtic.umsa.bo/
\.


--
-- Data for Name: seccion_pagina; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.seccion_pagina (clave_campo, pagina_slug, valor, tipo) FROM stdin;
nosotros_inicio_etiqueta	/institucional/acerca	prueba1\n	texto
nosotros_inicio_titulo_01	/institucional/acerca	Referente	texto
nosotros_inicio_titulo_02	/institucional/acerca	de la	texto
nosotros_inicio_titulo_03	/institucional/acerca	Evidencia.	texto
nosotros_inicio_descripcion	/institucional/acerca	Identidad institucional, misión, visión y valores que guían nuestra formación de estadísticos y científicos de datos para Bolivia.	texto
nosotros_inicio_imagen	/institucional/acerca	/images/institucional/acerca_hero.jpeg	imagen
nosotros_ieta_titulo	/institucional/acerca	Instituto IETA	texto
nosotros_ieta_texto	/institucional/acerca	El Instituto de Estadística Teórica y Aplicada tiene la finalidad de desarrollar investigación científica y contribuir al avance en diferentes campos donde la estadística es transversal.	texto
nosotros_ieta_fundacion	/institucional/acerca	Octubre, 1985	texto
nosotros_hito_01_anio	/institucional/acerca	1960	texto
nosotros_hito_01_titulo	/institucional/acerca	Mención en Economía	texto
nosotros_hito_01_descripcion	/institucional/acerca	Inicia la especialidad de estadística bajo la Facultad de Economía para atender la necesidad de cuantificar el desarrollo nacional.	texto
nosotros_hito_02_anio	/institucional/acerca	1972	texto
nosotros_hito_02_titulo	/institucional/acerca	Creación de la FCPN	texto
nosotros_hito_02_descripcion	/institucional/acerca	Reapertura universitaria tras la intervención de 1970. Se crea la Facultad de Ciencias Puras y Naturales integrando Estadística como mención.	texto
nosotros_hito_03_anio	/institucional/acerca	1979	texto
nosotros_hito_03_titulo	/institucional/acerca	Primer Titulado	texto
nosotros_hito_03_descripcion	/institucional/acerca	Hito académico con la emisión del primer título profesional, marcando el inicio de la demanda creciente de estadísticos en el país.	texto
nosotros_hito_04_anio	/institucional/acerca	1984	texto
nosotros_hito_04_titulo	/institucional/acerca	Autonomía de Carrera	texto
nosotros_hito_04_descripcion	/institucional/acerca	Por resolución del 7mo congreso de universidades, la especialidad se separa definitivamente de Matemática como carrera autónoma.	texto
nosotros_hito_05_anio	/institucional/acerca	1985	texto
nosotros_hito_05_titulo	/institucional/acerca	Creación del IETA	texto
nosotros_hito_05_descripcion	/institucional/acerca	Fundación del Instituto de Estadística Teórica y Aplicada para desarrollar investigación científica y consultoría estratégica.	texto
nosotros_valor_01_titulo	/institucional/acerca	Excelencia Académica	texto
nosotros_valor_01_descripcion	/institucional/acerca	Compromiso con la formación de profesionales altamente calificados con pensamiento crítico y capacidad analítica.	texto
nosotros_valor_01_estadistica	/institucional/acerca	R2 = 0.98	texto
nosotros_valor_02_titulo	/institucional/acerca	Inclusión e Igualdad	texto
nosotros_valor_02_descripcion	/institucional/acerca	Educación de calidad accesible para todos los sectores de la sociedad boliviana sin discriminación.	texto
nosotros_valor_02_estadistica	/institucional/acerca	p < 0.01	texto
nosotros_valor_03_titulo	/institucional/acerca	Investigación Científica	texto
nosotros_valor_03_descripcion	/institucional/acerca	Generación de conocimiento aplicado mediante IETA para resolver problemas nacionales estratégicos.	texto
nosotros_valor_03_estadistica	/institucional/acerca	n = 25+	texto
nosotros_valor_04_titulo	/institucional/acerca	Responsabilidad Social	texto
nosotros_valor_04_descripcion	/institucional/acerca	Contribución activa al desarrollo sostenible mediante análisis estadístico ético y socialmente responsable.	texto
nosotros_valor_04_estadistica	/institucional/acerca	sigma = 1.05	texto
nosotros_objetivo_01_numero	/institucional/acerca	01	texto
nosotros_objetivo_01_titulo	/institucional/acerca	Pensamiento Crítico	texto
nosotros_objetivo_01_descripcion	/institucional/acerca	Generar conocimiento científico con capacidad de análisis reflexivo crítico de apoyo a las decisiones de estado.	texto
nosotros_objetivo_02_numero	/institucional/acerca	02	texto
nosotros_objetivo_02_titulo	/institucional/acerca	Cultura Estadística	texto
nosotros_objetivo_02_descripcion	/institucional/acerca	Desarrollar y difundir la ciencia, tecnología y cultura estadística dentro y fuera de la institución universitaria.	texto
nosotros_objetivo_03_numero	/institucional/acerca	03	texto
nosotros_objetivo_03_titulo	/institucional/acerca	Integración Praxis	texto
nosotros_objetivo_03_descripcion	/institucional/acerca	Desarrollar el proceso académico integrando teoría y práctica y fomentando la enseñanza aprendizaje ligada a la investigación.	texto
nosotros_acreditacion_titulo	/institucional/acerca	Acreditación Institucional	texto
nosotros_acreditacion_enlace_01_url	/institucional/acerca	/institucional/acreditacion	texto
nosotros_acreditacion_enlace_01_texto	/institucional/acerca	Ver Acreditación	texto
nosotros_acreditacion_enlace_02_url	/institucional/acerca	/institucional/autoridades	texto
nosotros_acreditacion_enlace_02_texto	/institucional/acerca	Conoce Autoridades	texto
nosotros_mision_titulo	/institucional/acerca	Misión	texto
nosotros_mision_texto	/institucional/acerca	Formar profesionales idóneos y competentes en estadística, capaces de generar soluciones creativas e innovadoras comprometidos con el desarrollo nacional.	texto
nosotros_vision_titulo	/institucional/acerca	Visión	texto
nosotros_vision_texto	/institucional/acerca	Ser líder en la formación de profesionales en ciencia estadística, buscando excelencia académica mediante docencia, investigación y extensión.	texto
nosotros_acreditacion_descripcion	/institucional/acerca	Reconocidos por el CEUuB como carrera de excelencia académica con certificación de calidad en formación estadística..	texto
acreditacion_inicio_titulo_01	/institucional/acreditacion	Garantía de	texto
acreditacion_inicio_titulo_02	/institucional/acreditacion	calidad	texto
acreditacion_inicio_titulo_03	/institucional/acreditacion	Académica.	texto
acreditacion_inicio_descripcion	/institucional/acreditacion	Nuestra carrera lidera el análisis de datos en Bolivia bajo estándares estrictos del sistema universitario. La acreditación vigente ante el CEUB respalda competitividad y mejora continua.	texto
acreditacion_chip_01_simbolo	/institucional/acreditacion	int	texto
acreditacion_chip_01_etiqueta	/institucional/acreditacion	Integridad	texto
acreditacion_chip_01_subtitulo	/institucional/acreditacion	Curricular	texto
acreditacion_chip_02_simbolo	/institucional/acreditacion	chi2	texto
acreditacion_chip_02_etiqueta	/institucional/acreditacion	Validez	texto
acreditacion_chip_02_subtitulo	/institucional/acreditacion	Estadística	texto
acreditacion_credencial_01_titulo	/institucional/acreditacion	Acreditación Nacional CEUB	texto
acreditacion_credencial_01_subtitulo	/institucional/acreditacion	Certificación de Calidad Superior	texto
acreditacion_credencial_01_organizacion	/institucional/acreditacion	Resolución de Congreso Universitario	texto
acreditacion_credencial_01_descripcion	/institucional/acreditacion	Aval oficial del CEUB que certifica excelencia en currículo, plantel docente e infraestructura técnica de la carrera.	texto
acreditacion_credencial_01_cta	/institucional/acreditacion	Ver Resolución Oficial	texto
acreditacion_credencial_01_estadistica	/institucional/acreditacion	p < 0.05	texto
acreditacion_credencial_02_titulo	/institucional/acreditacion	Autoevaluación Continua	texto
acreditacion_credencial_02_subtitulo	/institucional/acreditacion	Gestión de Calidad Interna	texto
acreditacion_credencial_02_organizacion	/institucional/acreditacion	Comisión de Evaluación FCPN	texto
acreditacion_credencial_02_descripcion	/institucional/acreditacion	Proceso sistemático de revisión de indicadores académicos y administrativos para asegurar cumplimiento de estándares internacionales.	texto
acreditacion_credencial_02_cta	/institucional/acreditacion	Consultar Indicadores	texto
acreditacion_credencial_02_estadistica	/institucional/acreditacion	CI: 99.5%	texto
acreditacion_credencial_03_titulo	/institucional/acreditacion	Evaluación de Pares Externos	texto
acreditacion_credencial_03_subtitulo	/institucional/acreditacion	Veredicto Internacional	texto
acreditacion_credencial_03_organizacion	/institucional/acreditacion	Pares Académicos del Sistema	texto
acreditacion_credencial_03_descripcion	/institucional/acreditacion	Reconocimiento otorgado por expertos tras auditoría técnica de procesos de enseñanza, investigación e interacción social.	texto
acreditacion_credencial_03_cta	/institucional/acreditacion	Informe de Evaluación	texto
acreditacion_credencial_03_estadistica	/institucional/acreditacion	p < 0.01	texto
acreditacion_impacto_titulo_01	/institucional/acreditacion	Impacto en	texto
acreditacion_impacto_titulo_02	/institucional/acreditacion	tu Carrera	texto
acreditacion_impacto_descripcion	/institucional/acreditacion	Egresar de un programa acreditado abre oportunidades profesionales con respaldo técnico y rigor científico.	texto
acreditacion_impacto_estado_titulo	/institucional/acreditacion	Estado de Gestión	texto
acreditacion_impacto_estado_texto	/institucional/acreditacion	Participación activa en el Censo Universitario 2025 para la actualización integral de indicadores de calidad institucional.	texto
acreditacion_impacto_estado_pildora	/institucional/acreditacion	Mejora Continua Activa	texto
acreditacion_impacto_card_01_titulo	/institucional/acreditacion	Movilidad Global	texto
acreditacion_impacto_card_01_descripcion	/institucional/acreditacion	Acceso preferente a becas de intercambio y convenios de postgrado en universidades líderes de la región.	texto
acreditacion_impacto_card_02_titulo	/institucional/acreditacion	Prestigio Laboral	texto
acreditacion_impacto_card_02_descripcion	/institucional/acreditacion	El sector financiero e instituciones públicas priorizan graduados de programas acreditados por su formación técnica.	texto
acreditacion_impacto_card_03_titulo	/institucional/acreditacion	Investigación Financiada	texto
acreditacion_impacto_card_03_descripcion	/institucional/acreditacion	Acceso a fondos exclusivos y patrocinios para tesis e interacción social con respaldo institucional.	texto
acreditacion_cta_titulo	/institucional/acreditacion	Declaración de Calidad	texto
acreditacion_cta_etiqueta	/institucional/acreditacion	Comprometidos con la Excelencia	texto
acreditacion_cta_enlace_01_url	/institucional/acreditacion	/institucional/acerca	texto
acreditacion_cta_enlace_01_texto	/institucional/acreditacion	Volver a Acerca	texto
acreditacion_cta_enlace_02_url	/institucional/acreditacion	/institucional/autoridades	texto
acreditacion_cta_enlace_02_texto	/institucional/acreditacion	Ver Autoridades	texto
acreditacion_inicio_etiqueta	/institucional/acreditacion	Acreditacionnn	texto
autoridades_inicio_etiqueta	/institucional/autoridades	Gobierno y Liderazgo	texto
autoridades_inicio_titulo_01	/institucional/autoridades	Autoridades	texto
autoridades_inicio_titulo_02	/institucional/autoridades	y	texto
autoridades_inicio_titulo_03	/institucional/autoridades	Gobierno.	texto
autoridades_inicio_descripcion	/institucional/autoridades	Liderazgo comprometido con la excelencia académica y la transparencia institucional en la Carrera de Estadística, fundamentado en cogobierno paritario.	texto
autoridades_inicio_imagen	/institucional/autoridades	/images/institucional/autoridades_hero.jpeg	imagen
autoridades_chip_01_simbolo	/institucional/autoridades	partial	texto
autoridades_chip_01_etiqueta	/institucional/autoridades	Gestión	texto
autoridades_chip_01_subtitulo	/institucional/autoridades	Eficiente	texto
autoridades_chip_02_simbolo	/institucional/autoridades	beta	texto
autoridades_chip_02_etiqueta	/institucional/autoridades	Beta = 0.8	texto
autoridades_chip_02_subtitulo	/institucional/autoridades	Potencia Académica	texto
autoridades_inicio_badge_simbolo	/institucional/autoridades	lambda	texto
autoridades_inicio_badge_texto	/institucional/autoridades	Transparencia Publica	texto
autoridades_hcc_titulo	/institucional/autoridades	Honorable Consejo de Carrera (HCC)	texto
autoridades_hcc_subtitulo	/institucional/autoridades	Órgano de Cogobierno	texto
autoridades_hcc_descripcion	/institucional/autoridades	Estructura paritaria encargada de decisiones normativas, académicas y administrativas para el desarrollo integral de la carrera.	texto
autoridades_hcc_docente_titulo	/institucional/autoridades	Estamento Docente	texto
autoridades_hcc_estudiante_titulo	/institucional/autoridades	Estamento Estudiantil	texto
autoridades_estructura_titulo	/institucional/autoridades	Arquitectura de Gestión	texto
autoridades_estructura_subtitulo	/institucional/autoridades	Organigrama Funcional	texto
autoridades_estructura_top_nivel	/institucional/autoridades	Nivel Ejecutivo	texto
autoridades_estructura_top_titulo	/institucional/autoridades	Dirección de Carrera	texto
autoridades_estructura_medio_01_etiqueta	/institucional/autoridades	Normativo	texto
autoridades_estructura_medio_01_titulo	/institucional/autoridades	Honorable Consejo (HCC)	texto
autoridades_estructura_medio_01_subtitulo	/institucional/autoridades	Cogobierno Docente - Estudiantil	texto
autoridades_estructura_medio_02_etiqueta	/institucional/autoridades	Académico	texto
autoridades_estructura_medio_02_titulo	/institucional/autoridades	Gestión de Calidad	texto
autoridades_estructura_medio_02_subtitulo	/institucional/autoridades	Coordinación Curricular	texto
autoridades_estructura_base_01_titulo	/institucional/autoridades	Kardex Académico	texto
autoridades_estructura_base_02_titulo	/institucional/autoridades	Secretaría de Dirección	texto
autoridades_estructura_base_03_titulo	/institucional/autoridades	Soporte Técnico	texto
plantel_inicio_etiqueta	/institucional/docentes	Plantel Institucional	texto
plantel_inicio_titulo_01	/institucional/docentes	Nuestro	texto
plantel_inicio_titulo_02	/institucional/docentes	Equipo.	texto
plantel_inicio_descripcion	/institucional/docentes	Profesionales comprometidos con la excelencia académica y el soporte administrativo para la formación de científicos de datos.	texto
plantel_inicio_imagen	/institucional/docentes	/images/institucional/personal_hero.jpeg	imagen
plantel_inicio_badge_simbolo	/institucional/docentes	omega	texto
plantel_inicio_badge_texto	/institucional/docentes	Talento Humano	texto
convenios_inicio_etiqueta	/institucional/convenios	Alianzas Estratégicas	texto
convenios_inicio_titulo_01	/institucional/convenios	Conectando	texto
convenios_inicio_titulo_02	/institucional/convenios	la	texto
convenios_inicio_titulo_03	/institucional/convenios	Academia.	texto
convenios_inicio_descripcion	/institucional/convenios	Fortalecemos la formación profesional a través de convenios con instituciones gubernamentales y organismos privados, facilitando pasantías y trabajos dirigidos.	texto
convenios_inicio_imagen	/institucional/convenios	/images/institucional/convenios_hero.jpeg	imagen
convenios_chip_01_simbolo	/institucional/convenios	pi	texto
convenios_chip_01_etiqueta	/institucional/convenios	Impacto	texto
convenios_chip_01_subtitulo	/institucional/convenios	Profesional	texto
convenios_chip_02_simbolo	/institucional/convenios	lambda	texto
convenios_chip_02_etiqueta	/institucional/convenios	n = 12	texto
convenios_chip_02_subtitulo	/institucional/convenios	Convenios	texto
convenios_propuesta_etiqueta	/institucional/convenios	Propuesta de Valor	texto
convenios_propuesta_titulo	/institucional/convenios	Beneficios para Estudiantes	texto
convenios_propuesta_descripcion	/institucional/convenios	Aprovecha estas oportunidades para potenciar tu desarrollo profesional con experiencia real certificada.	texto
convenios_propuesta_card_titulo	/institucional/convenios	Gestión 2026	texto
convenios_propuesta_card_descripcion	/institucional/convenios	Convenios activos para Pasantías Pre-profesionales y Trabajos Dirigidos de titulación.	texto
convenios_propuesta_card_estado	/institucional/convenios	Entorno Profesional Activo	texto
convenios_beneficio_01_titulo	/institucional/convenios	Pasantías Pre-profesionales	texto
convenios_beneficio_01_descripcion	/institucional/convenios	Adquiere experiencia real en el manejo de bases de datos masivas antes de graduarte.	texto
convenios_beneficio_02_titulo	/institucional/convenios	Trabajo Dirigido	texto
convenios_beneficio_02_descripcion	/institucional/convenios	Titúlate resolviendo un problema real de análisis estadístico en una institución de prestigio.	texto
convenios_beneficio_03_titulo	/institucional/convenios	Red de Contactos	texto
convenios_beneficio_03_descripcion	/institucional/convenios	Establece vínculos con profesionales del área estadística y líderes de opinión del mercado laboral.	texto
convenios_cta_titulo	/institucional/convenios	Referente Nacional	texto
convenios_cta_etiqueta	/institucional/convenios	Vínculo Profesional Garantizado	texto
reglamentos_inicio_etiqueta	/institucional/reglamentos	Normativa Institucional	texto
reglamentos_inicio_titulo_01	/institucional/reglamentos	Repositorio	texto
reglamentos_inicio_titulo_02	/institucional/reglamentos	y	texto
reglamentos_inicio_titulo_03	/institucional/reglamentos	Marco Legal	texto
reglamentos_inicio_descripcion	/institucional/reglamentos	Compendio normativo que rige la vida académica, administrativa e investigativa de la Carrera de Estadística, garantizando el respeto a la autonomía universitaria.	texto
reglamentos_inicio_imagen	/institucional/reglamentos	/images/institucional/reglamentos_hero.jpeg	imagen
reglamentos_chip_01_simbolo	/institucional/reglamentos	¶	texto
reglamentos_chip_01_etiqueta	/institucional/reglamentos	Estatutos	texto
reglamentos_chip_01_subtitulo	/institucional/reglamentos	Universitarios	texto
reglamentos_chip_02_simbolo	/institucional/reglamentos	ℓ	texto
reglamentos_chip_02_etiqueta	/institucional/reglamentos	Garantía	texto
reglamentos_chip_02_subtitulo	/institucional/reglamentos	Académica	texto
reglamentos_marco_01_articulo	/institucional/reglamentos	Art. 1	texto
reglamentos_marco_01_titulo	/institucional/reglamentos	Nacional (CEUB)	texto
reglamentos_marco_01_subtitulo	/institucional/reglamentos	Estatuto Orgánico de la Universidad Boliviana	texto
reglamentos_marco_01_descripcion	/institucional/reglamentos	Base legal de la autonomía y del sistema universitario en Bolivia.	texto
reglamentos_marco_02_articulo	/institucional/reglamentos	Art. 2	texto
reglamentos_marco_02_titulo	/institucional/reglamentos	Estudiantil	texto
reglamentos_marco_02_subtitulo	/institucional/reglamentos	Régimen Estudiantil de la Universidad Boliviana	texto
reglamentos_marco_02_descripcion	/institucional/reglamentos	Derechos, deberes, becas y procesos disciplinarios del estudiante.	texto
reglamentos_marco_03_articulo	/institucional/reglamentos	Art. 3	texto
reglamentos_marco_03_titulo	/institucional/reglamentos	Docente	texto
reglamentos_marco_03_subtitulo	/institucional/reglamentos	Régimen Académico Docente	texto
reglamentos_marco_03_descripcion	/institucional/reglamentos	Normativa sobre la carrera docente, escalafón y evaluación continua.	texto
reglamentos_marco_04_articulo	/institucional/reglamentos	Art. 4	texto
reglamentos_marco_04_titulo	/institucional/reglamentos	Institucional	texto
reglamentos_marco_04_subtitulo	/institucional/reglamentos	Estatuto Orgánico de la UMSA	texto
reglamentos_marco_04_descripcion	/institucional/reglamentos	Norma matriz propia de la Universidad Mayor de San Andrés.	texto
reglamentos_interno_academica_etiqueta	/institucional/reglamentos	Gestión Académica	texto
reglamentos_interno_academica_item_01_nombre	/institucional/reglamentos	Reglamento de Convalidación	texto
reglamentos_interno_academica_item_01_descripcion	/institucional/reglamentos	Requisitos técnicos para traspasos y validación de materias aprobadas.	texto
reglamentos_interno_academica_item_02_nombre	/institucional/reglamentos	Mesa de Examen	texto
reglamentos_interno_academica_item_02_descripcion	/institucional/reglamentos	Normas para solicitar exámenes de última instancia y evaluación extraordinaria.	texto
reglamentos_interno_academica_item_03_nombre	/institucional/reglamentos	Evaluación del Aprendizaje	texto
reglamentos_interno_academica_item_03_descripcion	/institucional/reglamentos	Criterios de calificación, asistencia y aprobación por competencias.	texto
reglamentos_interno_academica_item_04_nombre	/institucional/reglamentos	Reglamento Interno de la Carrera	texto
reglamentos_interno_academica_item_04_descripcion	/institucional/reglamentos	Normas de convivencia y organización interna del estamento.	texto
reglamentos_interno_graduacion_etiqueta	/institucional/reglamentos	Modalidades de Graduación	texto
reglamentos_interno_graduacion_item_01_nombre	/institucional/reglamentos	Guía Metodológica General	texto
reglamentos_interno_graduacion_item_01_descripcion	/institucional/reglamentos	Estándares oficiales de formato y redacción para trabajos finales de grado.	texto
reglamentos_interno_graduacion_item_02_nombre	/institucional/reglamentos	Reglamento de Tesis de Grado	texto
reglamentos_interno_graduacion_item_02_descripcion	/institucional/reglamentos	Protocolo para investigaciones de aporte científico y defensa.	texto
reglamentos_interno_graduacion_item_03_nombre	/institucional/reglamentos	Reglamento de Trabajo Dirigido	texto
reglamentos_interno_graduacion_item_03_descripcion	/institucional/reglamentos	Normativa para pasantías con convenio e impacto institucional.	texto
reglamentos_interno_graduacion_item_04_nombre	/institucional/reglamentos	Reglamento de Proyecto de Grado	texto
reglamentos_interno_graduacion_item_04_descripcion	/institucional/reglamentos	Guía para resolver problemas prácticos en el entorno laboral.	texto
reglamentos_interno_investigacion_etiqueta	/institucional/reglamentos	Investigación (IETA)	texto
reglamentos_interno_investigacion_item_01_nombre	/institucional/reglamentos	Reglamento Interno IETA	texto
reglamentos_interno_investigacion_item_01_descripcion	/institucional/reglamentos	Normas que rigen el funcionamiento del Instituto de Estadística Teórica y Aplicada.	texto
reglamentos_interno_investigacion_item_02_nombre	/institucional/reglamentos	Congreso Interno	texto
reglamentos_interno_investigacion_item_02_descripcion	/institucional/reglamentos	Resoluciones y actas de las máximas instancias de decisión científica.	texto
reglamentos_interno_investigacion_item_03_nombre	/institucional/reglamentos	Publicaciones y Repositorio	texto
reglamentos_interno_investigacion_item_03_descripcion	/institucional/reglamentos	Lineamientos para gestión editorial, citación y acceso abierto.	texto
reglamentos_interno_investigacion_item_04_nombre	/institucional/reglamentos	Comités Técnicos	texto
reglamentos_interno_investigacion_item_04_descripcion	/institucional/reglamentos	Criterios de conformación y seguimiento de comités de evaluación.	texto
reglamentos_resolucion_etiqueta	/institucional/reglamentos	Patrimonio Documental	texto
reglamentos_resolucion_titulo	/institucional/reglamentos	Resolución de Fundación	texto
reglamentos_resolucion_descripcion	/institucional/reglamentos	Documento histórico que oficializa la creación de la carrera en la Facultad de Ciencias Puras y Naturales, estableciendo sus bases académicas y administrativas.	texto
reglamentos_resolucion_imagen	/institucional/reglamentos	/images/institucional/resolucion_fundacion.jpeg	imagen
reglamentos_beneficio_01_titulo	/institucional/reglamentos	Seguridad Jurídica	texto
reglamentos_beneficio_01_descripcion	/institucional/reglamentos	Normas claras para estudiantes, docentes y administrativos en cada proceso académico.	texto
reglamentos_beneficio_02_titulo	/institucional/reglamentos	Transparencia de Procesos	texto
reglamentos_beneficio_02_descripcion	/institucional/reglamentos	Trazabilidad de decisiones mediante resoluciones, actas y reglamentos vigentes.	texto
reglamentos_beneficio_03_titulo	/institucional/reglamentos	Proyección Profesional	texto
reglamentos_beneficio_03_descripcion	/institucional/reglamentos	Regulaciones que fortalecen prácticas, pasantías y modalidades de graduación aplicadas.	texto
reglamentos_cta_titulo	/institucional/reglamentos	Referente Normativo	texto
reglamentos_cta_etiqueta	/institucional/reglamentos	Repositorio Normativo Actualizado	texto
perfil_hero_etiqueta	/pregrado/perfil-profesional	Carrera de Licenciatura · UMSA	texto
perfil_hero_titulo_01	/pregrado/perfil-profesional	Forjando los líderes	texto
perfil_hero_titulo_02	/pregrado/perfil-profesional	del análisis de datos	texto
perfil_hero_titulo_03	/pregrado/perfil-profesional	en Bolivia.	texto
perfil_hero_descripcion	/pregrado/perfil-profesional	La incertidumbre es el caos; la estadística es la ley que lo gobierna. Únete a una formación científica con enfoque cuantitativo, tecnológico y ético.	texto
perfil_hero_imagen	/pregrado/perfil-profesional	/images/pregrado/pregrado_hero.jpg	imagen
perfil_hero_cta_principal	/pregrado/perfil-profesional	Ver plan de estudios	texto
perfil_hero_cta_secundario	/pregrado/perfil-profesional	Perfil del postulante	texto
perfil_aptitud_etiqueta	/pregrado/perfil-profesional	Aptitud	texto
perfil_aptitud_titulo	/pregrado/perfil-profesional	Vocación y Aptitudes	texto
perfil_aptitud_subtitulo	/pregrado/perfil-profesional	Buscamos mentes inquietas con base ética, curiosidad intelectual y capacidad para resolver problemas lógicos en escenarios reales.	texto
perfil_aptitud_card_01_titulo	/pregrado/perfil-profesional	Razonamiento Analítico	texto
perfil_aptitud_card_01_desc	/pregrado/perfil-profesional	Inclinación por matemáticas, abstracción y comprensión de fenómenos aleatorios.	texto
perfil_aptitud_card_02_titulo	/pregrado/perfil-profesional	DNA Tecnológico	texto
perfil_aptitud_card_02_desc	/pregrado/perfil-profesional	Interés en programación, automatización y software especializado para analítica.	texto
perfil_aptitud_card_03_titulo	/pregrado/perfil-profesional	Visión Interdisciplinaria	texto
perfil_aptitud_card_03_desc	/pregrado/perfil-profesional	Capacidad para traducir necesidades reales a modelos cuantitativos robustos.	texto
perfil_aptitud_card_04_titulo	/pregrado/perfil-profesional	Compromiso Ético	texto
perfil_aptitud_card_04_desc	/pregrado/perfil-profesional	Responsabilidad y cuidado en el manejo de información sensible y datos públicos.	texto
perfil_competencias_etiqueta	/pregrado/perfil-profesional	Excelencia	texto
perfil_competencias_titulo	/pregrado/perfil-profesional	Competencias del Egresado	texto
perfil_competencias_subtitulo	/pregrado/perfil-profesional	Formación rigurosa para liderar la ciencia de datos en sectores estratégicos de Bolivia.	texto
perfil_competencias_grado_titulo	/pregrado/perfil-profesional	Licenciado en Estadística	texto
perfil_competencias_grado_subtitulo	/pregrado/perfil-profesional	Acreditación nacional vigente	texto
perfil_salidas_etiqueta	/pregrado/perfil-profesional	Proyección	texto
perfil_salidas_titulo	/pregrado/perfil-profesional	Salidas Laborales	texto
perfil_salidas_subtitulo	/pregrado/perfil-profesional	Nuestros graduados ocupan puestos de decisión en la economía del dato.	texto
perfil_salidas_destacado_badge	/pregrado/perfil-profesional	Más demandado	texto
perfil_salidas_destacado_titulo	/pregrado/perfil-profesional	Científico de Datos	texto
perfil_salidas_destacado_subtitulo	/pregrado/perfil-profesional	Data Scientist	texto
perfil_salidas_destacado_desc	/pregrado/perfil-profesional	Optimiza procesamientos y predice tendencias con analítica avanzada, modelos estadísticos e IA aplicada.	texto
perfil_salidas_card_01_titulo	/pregrado/perfil-profesional	Consultor Actuarial	texto
perfil_salidas_card_01_desc	/pregrado/perfil-profesional	Seguros, pensiones y modelos de riesgo financiero.	texto
perfil_salidas_card_02_titulo	/pregrado/perfil-profesional	Investigador Senior	texto
perfil_salidas_card_02_desc	/pregrado/perfil-profesional	Especialista en demografía y diseño de experimentos sociales.	texto
perfil_salidas_card_03_titulo	/pregrado/perfil-profesional	Líder Estratégico	texto
perfil_salidas_card_03_desc	/pregrado/perfil-profesional	Dirección de estadística en corporaciones, banca y entidades de gobierno.	texto
perfil_campo_etiqueta	/pregrado/perfil-profesional	Ubicación	texto
perfil_campo_titulo	/pregrado/perfil-profesional	Campo Ocupacional	texto
perfil_campo_cta_titulo	/pregrado/perfil-profesional	¿Listo para transformar la realidad con datos?	texto
perfil_campo_cta_boton	/pregrado/perfil-profesional	Inicia tu carrera hoy	texto
perfil_stats_01_valor	/pregrado/perfil-profesional	92%	texto
perfil_stats_01_etiqueta	/pregrado/perfil-profesional	Dinámica laboral	texto
perfil_stats_02_valor	/pregrado/perfil-profesional	12+	texto
perfil_stats_02_etiqueta	/pregrado/perfil-profesional	Sectores de impacto	texto
perfil_stats_03_valor	/pregrado/perfil-profesional	40+	texto
perfil_stats_03_etiqueta	/pregrado/perfil-profesional	Cursos cuantitativos	texto
convalidacion_hero_eyebrow	/pregrado/convalidaciones	Migración y Homologación	texto
convalidacion_procedimiento_titulo	/pregrado/convalidaciones	Trámite de Convalidación	texto
convalidacion_procedimiento_subtitulo	/pregrado/convalidaciones	Pasos requeridos ante Kárdex Académico para formalizar la equivalencia de materias aprobadas.	texto
malla_hero_titulo_01	/pregrado/malla-curricular	Plan de Estudios	texto
malla_hero_titulo_02	/pregrado/malla-curricular	y Malla Curricular	texto
malla_hero_horas	/pregrado/malla-curricular	9.600 Horas	texto
malla_ciclos_badge	/pregrado/malla-curricular	Organización por Ciclos Formativos	texto
malla_ciclos_descripcion	/pregrado/malla-curricular	Navega por las asignaturas organizadas pedagógicamente en Ciclo Básico, Ciclo de Formación, Ciclo Profesional y Ciclo de Titulación.	texto
convalidacion_hero_titulo_01	/pregrado/convalidaciones	Tabla de	texto
convalidacion_hero_titulo_02	/pregrado/convalidaciones	Convalidaciones	texto
convalidacion_hero_highlight_01	/pregrado/convalidaciones	Resolución HCF 420/2021	texto
convalidacion_hero_highlight_02	/pregrado/convalidaciones	Mapeo oficial 1 a 1	texto
convalidacion_intro_titulo	/pregrado/convalidaciones	Herramienta de Transición Académica	texto
convalidacion_intro_descripcion	/pregrado/convalidaciones	Verifica la equivalencia exacta de asignaturas para tramitar tu resolución de convalidación en secretaría de carrera.	texto
malla_hero_eyebrow	/pregrado/malla-curricular	Resolución académica vigente	texto
admisiones_hero_badge	/pregrado/admisiones	Convocatoria abierta 2026	texto
admisiones_hero_titulo_01	/pregrado/admisiones	Ingreso a la	texto
admisiones_hero_titulo_02	/pregrado/admisiones	ciencia de	texto
admisiones_hero_titulo_03	/pregrado/admisiones	Datos.	texto
admisiones_hero_descripcion	/pregrado/admisiones	Tu futuro como arquitecto de la evidencia científica comienza aquí. Conoce las vías oficiales de admisión a la Carrera de Estadística de la UMSA.	texto
admisiones_hero_cupos	/pregrado/admisiones	150+	texto
admisiones_requisitos_titulo	/pregrado/admisiones	Documentación General	texto
admisiones_requisitos_descripcion	/pregrado/admisiones	Documentos obligatorios que todo postulante regular debe presentar en ventanillas de Kárdex una vez aprobada la modalidad de ingreso (PSA o Pre-U).	texto
admisiones_modalidades_tag	/pregrado/admisiones	Vías de acceso	texto
admisiones_modalidades_titulo	/pregrado/admisiones	Modalidades Regulares	texto
admisiones_modalidades_subtitulo	/pregrado/admisiones	Las dos rutas principales administradas por la Facultad de Ciencias Puras y Naturales para bachilleres.	texto
calendario_hero_descripcion	/pregrado/calendario-academico	Planificación oficial de actividades académicas, exámenes parciales, finales, mesas de sufragio y recesos universitarios.	texto
graduacion_hero_titulo_03	/pregrado/modalidades-graduacion	y Titulación.	texto
graduacion_taller_subtitulo	/pregrado/modalidades-graduacion	Materia terminal del 8vo semestre orientada a la formulación y defensa del trabajo de grado.	texto
graduacion_excelencia_desc	/pregrado/modalidades-graduacion	Exención de defensa de tesis para estudiantes con promedio sobresaliente durante toda la carrera sin reprobaciones.	texto
calendario_hero_badge	/pregrado/calendario-academico	Gestión Académica II/2026	texto
pos_autofin_hero_titulo_03	/postgrado/maestria-autofinanciada	Gestión 2026	texto
pos_autofin_hero_inversion	/postgrado/maestria-autofinanciada	18.000 Bs.	texto
pos_autofin_hero_duracion	/postgrado/maestria-autofinanciada	2 Años	texto
pos_autofin_hero_titulacion	/postgrado/maestria-autofinanciada	Tesis / Taller	texto
pos_autofin_hero_cuotas	/postgrado/maestria-autofinanciada	Hasta 4 cuotas	texto
calendario_hero_titulo	/pregrado/calendario-academico	Calendario Académico	texto
graduacion_hero_badge	/pregrado/modalidades-graduacion	Grado Académico y Titulación	texto
graduacion_hero_titulo_01	/pregrado/modalidades-graduacion	Modalidades de	texto
graduacion_hero_titulo_02	/pregrado/modalidades-graduacion	Graduación	texto
graduacion_hero_descripcion	/pregrado/modalidades-graduacion	Conoce las vías oficiales reglamentadas para obtener el título de Licenciado en Estadística en la Universidad Mayor de San Andrés.	texto
graduacion_taller_titulo	/pregrado/modalidades-graduacion	El Taller de Titulación es el punto de partida	texto
graduacion_excelencia_titulo	/pregrado/modalidades-graduacion	Premio al Alto Rendimiento	texto
pos_terminal_hero_eyebrow	/postgrado/maestria-terminal	Programa de excelencia académica	texto
pos_terminal_hero_titulo_01	/postgrado/maestria-terminal	Maestría Terminal	texto
pos_terminal_hero_titulo_02	/postgrado/maestria-terminal	en Estadística	texto
pos_terminal_hero_highlight_01	/postgrado/maestria-terminal	Modalidad modular	texto
pos_terminal_hero_highlight_02	/postgrado/maestria-terminal	Enfoque investigativo	texto
pos_terminal_hero_highlight_03	/postgrado/maestria-terminal	Proyección Ph.D.	texto
pos_terminal_hero_cta_principal	/postgrado/maestria-terminal	Descargar convocatoria oficial	texto
pos_terminal_hero_cta_secundario	/postgrado/maestria-terminal	Ver plan de estudios	texto
pos_terminal_perfil_tag	/postgrado/maestria-terminal	Perfil de egreso	texto
pos_terminal_perfil_titulo	/postgrado/maestria-terminal	Alta Capacidad Analítica	texto
pos_terminal_perfil_sub	/postgrado/maestria-terminal	El egresado domina inferencia bajo incertidumbre, optimización, modelado avanzado y dirección técnica de proyectos cuantitativos.	texto
pos_terminal_curriculum_tag	/postgrado/maestria-terminal	Estructura curricular	texto
pos_terminal_curriculum_titulo	/postgrado/maestria-terminal	Plan de Estudios y Módulos	texto
pos_terminal_curriculum_sub	/postgrado/maestria-terminal	Módulos presenciales e investigativos estructurados para garantizar rigor metodológico.	texto
pos_terminal_curriculum_nota	/postgrado/maestria-terminal	Horas presenciales y de investigación debidamente acreditadas ante el CEUB.	texto
pos_terminal_admision_tag	/postgrado/maestria-terminal	Requisitos de postulación	texto
pos_terminal_admision_titulo	/postgrado/maestria-terminal	Requisitos de Ingreso al Programa	texto
pos_terminal_admision_sub	/postgrado/maestria-terminal	Documentación requerida para la postulación formal y selección de postulantes.	texto
pos_terminal_campo_tag	/postgrado/maestria-terminal	Oportunidades profesionales	texto
pos_terminal_campo_titulo	/postgrado/maestria-terminal	Campo Ocupacional del Graduado	texto
pos_terminal_campo_sub	/postgrado/maestria-terminal	Sectores de alto impacto donde los magísteres desempeñan roles de liderazgo cuantitativo.	texto
pos_autofin_hero_eyebrow	/postgrado/maestria-autofinanciada	Modalidad ejecutiva y flexible	texto
pos_autofin_hero_titulo_01	/postgrado/maestria-autofinanciada	Maestría	texto
pos_autofin_hero_titulo_02	/postgrado/maestria-autofinanciada	Autofinanciada	texto
pos_autofin_hero_descripcion	/postgrado/maestria-autofinanciada	Formación avanzada para profesionales que buscan una vía flexible, competitiva y orientada a la aplicación real de la estadística y la ciencia de datos.	texto
pos_autofin_perfil_tag	/postgrado/maestria-autofinanciada	Competencias profesionales	texto
malla_hero_creditos	/pregrado/malla-curricular	240 Créditos	texto
pos_autofin_cta_sub	/postgrado/maestria-autofinanciada	Las postulaciones para la gestión académica 2026 están abiertas. Cupos limitados para garantizar excelencia académica.	texto
pos_dip_hero_eyebrow	/postgrado/diplomados	Programas de certificación corta	texto
pos_dip_hero_titulo_01	/postgrado/diplomados	Diplomados y	texto
pos_dip_hero_titulo_02	/postgrado/diplomados	Especialidades	texto
pos_dip_hero_descripcion	/postgrado/diplomados	Oferta de actualización profesional orientada a analítica aplicada, investigación y toma de decisiones en contextos reales.	texto
pos_dip_hero_highlight_01	/postgrado/diplomados	Convocatorias vigentes	texto
pos_dip_hero_highlight_02	/postgrado/diplomados	Modalidad flexible	texto
pos_dip_hero_highlight_03	/postgrado/diplomados	Enfoque estadístico	texto
pos_dip_requisitos_tag	/postgrado/diplomados	Admisión e Inscripción	texto
pos_dip_requisitos_titulo	/postgrado/diplomados	Requisitos Generales	texto
pos_dip_requisitos_sub	/postgrado/diplomados	Proceso simple y transparente para profesionales de todas las áreas cuantitativas y aplicadas.	texto
acreditacion_inicio_imagen	/institucional/acreditacion	/images/institucional/acreditacion_hero.jpeg	imagen
pos_autofin_curriculum_titulo	/postgrado/maestria-autofinanciada	Estructura Modular con Certificaciones	texto
pos_autofin_curriculum_sub	/postgrado/maestria-autofinanciada	La maestría otorga diplomas intermedios en cada módulo cumplido hasta la titulación final.	texto
pos_autofin_curriculum_nota	/postgrado/maestria-autofinanciada	Cada etapa consolida créditos acumulativos para el grado de Magíster Scientiarum.	texto
pos_autofin_admision_tag	/postgrado/maestria-autofinanciada	Vías de postulación	texto
pos_autofin_admision_titulo	/postgrado/maestria-autofinanciada	Requisitos de Admisión Autofinanciada	texto
pos_autofin_admision_sub	/postgrado/maestria-autofinanciada	La admisión se organiza por dos vías con entrega en folder color azul.	texto
pos_autofin_cta_titulo	/postgrado/maestria-autofinanciada	Inscríbete a la siguiente cohorte de la Maestría Autofinanciada	texto
est_tramites_hero_eyebrow	/estudiantes/guia-seguimiento-tramites	Gestión administrativa transparente	texto
est_tramites_hero_titulo_01	/estudiantes/guia-seguimiento-tramites	Guía y Seguimiento	texto
est_tramites_hero_titulo_02	/estudiantes/guia-seguimiento-tramites	de Trámites	texto
est_tramites_hero_descripcion	/estudiantes/guia-seguimiento-tramites	Centralizamos requisitos y flujos procedimentales para que el estudiante gestione solicitudes académicas sin contratiempos.	texto
est_tramites_hero_placeholder	/estudiantes/guia-seguimiento-tramites	Ej. egreso, excelencia, legalización...	texto
est_tramites_sistema_01_tag	/estudiantes/guia-seguimiento-tramites	Trámites Facultativos (FCPN)	texto
est_tramites_sistema_01_titulo	/estudiantes/guia-seguimiento-tramites	Sistema CHASQUI	texto
est_tramites_sistema_01_caption	/estudiantes/guia-seguimiento-tramites	Seguimiento con N° RUT	texto
est_tramites_sistema_01_url	/estudiantes/guia-seguimiento-tramites	https://chasqui.fcpn.edu.bo/	texto
est_tramites_sistema_02_tag	/estudiantes/guia-seguimiento-tramites	Ventanilla Única (UMSA)	texto
est_tramites_sistema_02_titulo	/estudiantes/guia-seguimiento-tramites	Sistema AYNI	texto
est_tramites_sistema_02_caption	/estudiantes/guia-seguimiento-tramites	Trámites universitarios	texto
est_tramites_sistema_02_url	/estudiantes/guia-seguimiento-tramites	https://ayni.umsa.bo/	texto
est_centro_hero_titulo_01	/estudiantes/centro-estudiantes	Centro de	texto
est_centro_hero_titulo_02	/estudiantes/centro-estudiantes	Estudiantes	texto
est_centro_hero_cta	/estudiantes/centro-estudiantes	Contacto Directo	texto
est_centro_stats_01_label	/estudiantes/centro-estudiantes	Representación	texto
est_centro_stats_01_val	/estudiantes/centro-estudiantes	CEE ACTIVA	texto
est_centro_stats_02_label	/estudiantes/centro-estudiantes	Voz estudiantil	texto
est_centro_stats_02_val	/estudiantes/centro-estudiantes	24/7 CANALES	texto
est_centro_stats_03_label	/estudiantes/centro-estudiantes	Apoyo académico	texto
est_centro_stats_03_val	/estudiantes/centro-estudiantes	04 SERVICIOS	texto
est_centro_stats_04_label	/estudiantes/centro-estudiantes	Participación	texto
est_centro_stats_04_val	/estudiantes/centro-estudiantes	100% ABIERTO	texto
est_centro_servicios_tag	/estudiantes/centro-estudiantes	Servicios estudiantiles	texto
est_centro_servicios_titulo	/estudiantes/centro-estudiantes	Pilares de Gestión y Apoyo	texto
est_centro_servicios_sub	/estudiantes/centro-estudiantes	Iniciativas y beneficios directos para potenciar tu vida universitaria y rendimiento académico.	texto
est_centro_estructura_tag	/estudiantes/centro-estudiantes	Estructura democrática	texto
est_centro_estructura_titulo	/estudiantes/centro-estudiantes	Representación Institucional	texto
est_centro_estructura_sub	/estudiantes/centro-estudiantes	Conoce cómo tu voz es representada a través del Centro de Estudiantes hacia las máximas instancias universitarias.	texto
est_centro_liderazgo_tag	/estudiantes/centro-estudiantes	Directiva y Delegados	texto
est_centro_liderazgo_titulo	/estudiantes/centro-estudiantes	Representantes Estudiantiles	texto
est_centro_liderazgo_sub	/estudiantes/centro-estudiantes	Equipo de estudiantes comprometidos con la transparencia, defensa y fortalecimiento de nuestra carrera.	texto
est_centro_canal_01_label	/estudiantes/centro-estudiantes	Grupo de WhatsApp Oficial	texto
est_centro_canal_01_url	/estudiantes/centro-estudiantes	#	texto
malla_electivas_cta_url	/pregrado/malla-curricular	#	texto
malla_areas_01_nombre	/pregrado/malla-curricular	Estadística Aplicada	texto
pos_autofin_curriculum_tag	/postgrado/maestria-autofinanciada	Módulos progresivos	texto
est_centro_footer_brand	/estudiantes/centro-estudiantes	Estadística — UMSA	texto
est_centro_footer_sub	/estudiantes/centro-estudiantes	Centro de Estudiantes (CEE)	texto
est_aux_hero_eyebrow	/estudiantes/convocatorias-auxiliaturas	Portal de auxiliares	texto
est_aux_hero_titulo_01	/estudiantes/convocatorias-auxiliaturas	Convocatorias para	texto
est_aux_guia_tag	/estudiantes/convocatorias-auxiliaturas	Paso a paso	texto
est_aux_guia_titulo	/estudiantes/convocatorias-auxiliaturas	Proceso General de Postulación	texto
est_aux_guia_sub	/estudiantes/convocatorias-auxiliaturas	Guía orientativa para presentar tu documentación en tiempo y forma según el reglamento institucional.	texto
est_aux_requisitos_tag	/estudiantes/convocatorias-auxiliaturas	Documentación obligatoria	texto
est_aux_requisitos_titulo	/estudiantes/convocatorias-auxiliaturas	Requisitos Mínimos para Postular	texto
est_aux_requisitos_sub	/estudiantes/convocatorias-auxiliaturas	Prepara tu expediente con anticipación para evitar observaciones de la comisión revisora.	texto
est_aux_alerta_titulo	/estudiantes/convocatorias-auxiliaturas	Publicación Oficial en Vitrinas	texto
est_aux_alerta_texto	/estudiantes/convocatorias-auxiliaturas	Las resoluciones y cronogramas específicos de defensa se publican formalmente en la Secretaría de la Carrera y canales autorizados.	texto
est_pasantias_hero_eyebrow	/estudiantes/pasantias-bolsa-trabajo	Inserción laboral y práctica guiada	texto
est_pasantias_hero_titulo_01	/estudiantes/pasantias-bolsa-trabajo	Pasantías y Bolsa	texto
est_pasantias_hero_titulo_02	/estudiantes/pasantias-bolsa-trabajo	de Trabajo	texto
est_pasantias_hero_descripcion	/estudiantes/pasantias-bolsa-trabajo	Conectamos el talento analítico de la Carrera de Estadística con entidades públicas, banca, organismos internacionales y empresas tecnológicas.	texto
est_pasantias_modalidades_tag	/estudiantes/pasantias-bolsa-trabajo	Opciones de titulación y práctica	texto
est_pasantias_modalidades_titulo	/estudiantes/pasantias-bolsa-trabajo	Modalidades Disponibles	texto
est_pasantias_modalidades_sub	/estudiantes/pasantias-bolsa-trabajo	Diferentes vías para validar tu experiencia profesional o culminar tu graduación universitaria.	texto
est_pasantias_proceso_tag	/estudiantes/pasantias-bolsa-trabajo	Ruta de gestión	texto
est_pasantias_proceso_titulo	/estudiantes/pasantias-bolsa-trabajo	Pasos para Iniciar tu Pasantía	texto
est_pasantias_proceso_sub	/estudiantes/pasantias-bolsa-trabajo	Flujo reglamentario desde la postulación hasta la defensa final o acreditación de horas.	texto
est_pasantias_ofertas_tag	/estudiantes/pasantias-bolsa-trabajo	Convocatorias y oportunidades	texto
est_pasantias_ofertas_titulo	/estudiantes/pasantias-bolsa-trabajo	Bolsa de Plazas Activas	texto
est_pasantias_recursos_tag	/estudiantes/pasantias-bolsa-trabajo	Descargas y requisitos	texto
est_pasantias_recursos_titulo	/estudiantes/pasantias-bolsa-trabajo	Requisitos y Formularios Oficiales	texto
est_pasantias_recursos_sub	/estudiantes/pasantias-bolsa-trabajo	Descarga plantillas oficiales y verifica la documentación antes de ingresar tu trámite.	texto
est_sociedad_hero_eyebrow	/estudiantes/sociedad-cientifica	Investigación y desarrollo estudiantil	texto
est_sociedad_hero_titulo_01	/estudiantes/sociedad-cientifica	Sociedad Científica de	texto
est_sociedad_hero_titulo_02	/estudiantes/sociedad-cientifica	Estudiantes de Estadística	texto
est_sociedad_hero_descripcion	/estudiantes/sociedad-cientifica	El núcleo donde las ideas se transforman en investigaciones, papers y proyectos con impacto real en Bolivia.	texto
est_sociedad_hero_cta	/estudiantes/sociedad-cientifica	Unirme a la próxima convocatoria	texto
est_sociedad_lineas_tag	/estudiantes/sociedad-cientifica	Áreas de trabajo	texto
est_sociedad_lineas_titulo	/estudiantes/sociedad-cientifica	Líneas y Nodos de Investigación	texto
est_sociedad_lineas_sub	/estudiantes/sociedad-cientifica	Equipos interdisciplinarios enfocados en metodologías modernas, software libre y análisis multivariante.	texto
est_sociedad_beneficios_tag	/estudiantes/sociedad-cientifica	Ventajas para miembros	texto
est_sociedad_beneficios_titulo	/estudiantes/sociedad-cientifica	¿Por qué unirte a la Sociedad Científica?	texto
est_sociedad_beneficios_sub	/estudiantes/sociedad-cientifica	Oportunidades únicas de crecimiento académico, publicación y liderazgo científico.	texto
est_sociedad_admision_tag	/estudiantes/sociedad-cientifica	Cómo ingresar	texto
est_sociedad_admision_titulo	/estudiantes/sociedad-cientifica	Proceso de Admisión de Miembros	texto
est_sociedad_admision_sub	/estudiantes/sociedad-cientifica	Convocatorias anuales abiertas a estudiantes con vocación investigativa.	texto
est_sociedad_repo_tag	/estudiantes/sociedad-cientifica	Producción científica	texto
est_sociedad_repo_titulo	/estudiantes/sociedad-cientifica	Repositorio de Papers y Revistas	texto
est_sociedad_repo_sub	/estudiantes/sociedad-cientifica	Artículos elaborados por miembros de la sociedad y revistas aliadas para divulgación.	texto
malla_hero_resolucion	/pregrado/malla-curricular	Resolución H.C.F. N° 420/2021	texto
malla_ciclos_titulo	/pregrado/malla-curricular	Secuencia Formativa por Semestres	texto
malla_electivas_badge	/pregrado/malla-curricular	Especialización flexible	texto
malla_electivas_titulo	/pregrado/malla-curricular	Materias Electivas y Optativas	texto
malla_electivas_subtitulo	/pregrado/malla-curricular	Cinco áreas disciplinares para moldear tu perfil profesional según tus intereses de investigación y laborales.	texto
malla_electivas_descripcion	/pregrado/malla-curricular	El estudiante debe elegir y aprobar un mínimo de materias electivas en los últimos semestres.	texto
malla_electivas_cta_texto	/pregrado/malla-curricular	Descargar catálogo de electivas	texto
est_centro_canal_02_url	/estudiantes/centro-estudiantes	#	texto
malla_areas_03_nombre	/pregrado/malla-curricular	Ingeniería Geográfica	texto
malla_areas_04_nombre	/pregrado/malla-curricular	Ingeniería Industrial	texto
malla_areas_05_nombre	/pregrado/malla-curricular	Área Economía	texto
malla_leyenda_01_label	/pregrado/malla-curricular	Cálculo y Álgebra	texto
malla_leyenda_02_label	/pregrado/malla-curricular	Teoría Estadística	texto
malla_leyenda_03_label	/pregrado/malla-curricular	Data y Programación	texto
malla_leyenda_04_label	/pregrado/malla-curricular	Titulación	texto
calendario_hero_gestion	/pregrado/calendario-academico	II/2026 (Semestre regular)	texto
calendario_hero_resolucion	/pregrado/calendario-academico	Resolución FCPN.CE.DA.COM N° 06/2026	texto
calendario_comunicado_titulo	/pregrado/calendario-academico	Comunicado Institucional	texto
calendario_comunicado_texto	/pregrado/calendario-academico	La Dirección Académica pone en conocimiento de docentes y estudiantes el cronograma correspondiente a la gestión II/2026, en cumplimiento del calendario facultativo.	texto
calendario_descarga_titulo	/pregrado/calendario-academico	Documento Oficial	texto
calendario_descarga_subtitulo	/pregrado/calendario-academico	Descarga el PDF sellado por Dirección Académica.	texto
calendario_descarga_cta_texto	/pregrado/calendario-academico	Descargar PDF Resolución 06/2026	texto
calendario_descarga_cta_url	/pregrado/calendario-academico	#	texto
calendario_mesa_titulo	/pregrado/calendario-academico	Primera Mesa de Examen 2026	texto
calendario_mesa_01_evento	/pregrado/calendario-academico	Inscripciones a mesa de examen	texto
calendario_mesa_01_fecha	/pregrado/calendario-academico	21 de julio - 22 de julio	texto
calendario_mesa_02_evento	/pregrado/calendario-academico	Aplicación del examen de mesa	texto
calendario_mesa_02_fecha	/pregrado/calendario-academico	28 de julio - 29 de julio	texto
calendario_mesa_03_evento	/pregrado/calendario-academico	Entrega de notas en el SSA	texto
calendario_mesa_03_fecha	/pregrado/calendario-academico	28 de julio - 29 de julio	texto
calendario_mesa_04_evento	/pregrado/calendario-academico	Firma de actas en Kárdex	texto
calendario_mesa_04_fecha	/pregrado/calendario-academico	30 de julio	texto
calendario_mesa_05_evento	/pregrado/calendario-academico	Remisión de notas a Vicedecanato	texto
calendario_mesa_05_fecha	/pregrado/calendario-academico	31 de julio	texto
calendario_regular_titulo	/pregrado/calendario-academico	Cronograma Semestral Regular	texto
calendario_regular_01_evento	/pregrado/calendario-academico	Inscripciones regulares (*)	texto
calendario_regular_01_fecha	/pregrado/calendario-academico	26 de julio - 29 de julio	texto
calendario_regular_02_evento	/pregrado/calendario-academico	Inicio de la actividad académica	texto
calendario_regular_02_fecha	/pregrado/calendario-academico	30 de julio	texto
calendario_regular_03_evento	/pregrado/calendario-academico	Desarrollo de clases y laboratorios	texto
calendario_regular_03_fecha	/pregrado/calendario-academico	30 de julio - 12 de diciembre	texto
calendario_regular_04_evento	/pregrado/calendario-academico	Retiro y/o adición de materias	texto
calendario_regular_04_fecha	/pregrado/calendario-academico	18 de agosto - 22 de agosto	texto
calendario_regular_05_evento	/pregrado/calendario-academico	Primer examen parcial	texto
calendario_regular_05_fecha	/pregrado/calendario-academico	22 de septiembre - 26 de septiembre	texto
calendario_regular_06_evento	/pregrado/calendario-academico	Segundo examen parcial	texto
calendario_regular_06_fecha	/pregrado/calendario-academico	24 de noviembre - 28 de noviembre	texto
calendario_regular_07_evento	/pregrado/calendario-academico	Examen final	texto
calendario_regular_07_fecha	/pregrado/calendario-academico	1 de diciembre - 5 de diciembre	texto
calendario_regular_08_evento	/pregrado/calendario-academico	Examen de recuperación (2do turno)	texto
calendario_regular_08_fecha	/pregrado/calendario-academico	8 de diciembre - 12 de diciembre	texto
calendario_regular_09_evento	/pregrado/calendario-academico	Carga de notas finales en el SSA	texto
calendario_regular_09_fecha	/pregrado/calendario-academico	15 de diciembre - 17 de diciembre	texto
calendario_regular_10_evento	/pregrado/calendario-academico	Firma y entrega de actas en Kárdex	texto
calendario_regular_10_fecha	/pregrado/calendario-academico	15 de diciembre - 18 de diciembre	texto
calendario_regular_11_evento	/pregrado/calendario-academico	Cierre oficial y notas en Vicedecanato	texto
calendario_regular_11_fecha	/pregrado/calendario-academico	19 de diciembre	texto
calendario_nota_titulo	/pregrado/calendario-academico	(*) Inscripción de Casos Especiales	texto
admision_hero_badge	/pregrado/admisiones	Convocatoria abierta 2026	texto
admision_hero_titulo_01	/pregrado/admisiones	Ingreso a la	texto
admision_hero_titulo_02	/pregrado/admisiones	Ciencia de Datos	texto
admision_hero_descripcion	/pregrado/admisiones	Tu futuro como arquitecto de la evidencia científica comienza aquí. Conoce las vías oficiales de admisión a la Carrera de Estadística de la UMSA.	texto
admision_hero_cupos_label	/pregrado/admisiones	Cupos disponibles por gestión	texto
admision_hero_cupos_valor	/pregrado/admisiones	150+ Plazas	texto
admision_regular_badge	/pregrado/admisiones	Vías de acceso	texto
admision_regular_titulo	/pregrado/admisiones	Modalidades Regulares	texto
admision_regular_subtitulo	/pregrado/admisiones	Las dos rutas principales administradas por la Facultad de Ciencias Puras y Naturales para bachilleres.	texto
admision_regular_psa_badge	/pregrado/admisiones	Evaluación directa	texto
admision_regular_psa_cta_texto	/pregrado/admisiones	Convocatoria PSA FCPN	texto
admision_regular_psa_cta_url	/pregrado/admisiones	https://daf.fcpn.edu.bo/psa/	texto
admision_regular_preu_badge	/pregrado/admisiones	Formación continua	texto
admision_regular_preu_titulo	/pregrado/admisiones	Curso Preparatorio Preuniversitario (Pre-U)	texto
admision_regular_preu_descripcion	/pregrado/admisiones	Programa académico de nivelación dictado por la FCPN. Combina clases teóricas y evaluaciones parciales para preparar al estudiante al rigor universitario.	texto
admision_regular_preu_cta_texto	/pregrado/admisiones	Portal Curso Pre-U	texto
admision_regular_preu_cta_url	/pregrado/admisiones	https://daf.fcpn.edu.bo/cursopreparatorio/	texto
admision_requisito_titulo	/pregrado/admisiones	Documentación General Requerida	texto
admision_requisito_descripcion	/pregrado/admisiones	Documentos obligatorios que todo postulante admitido debe presentar en Kárdex para su matriculación definitiva.	texto
admision_requisito_01	/pregrado/admisiones	Fotocopia legalizada del Título de Bachiller (o libreta de 6° si está en trámite).	texto
admision_requisito_02	/pregrado/admisiones	Fotocopia simple de Cédula de Identidad vigente.	texto
admision_requisito_03	/pregrado/admisiones	Certificado de Nacimiento original computarizado.	texto
admision_requisito_04	/pregrado/admisiones	Comprobante de depósito bancario original (Canje de Valores).	texto
admision_requisito_05	/pregrado/admisiones	Dos fotografías tamaño 3x4 con fondo celeste o plomo.	texto
admision_requisito_06	/pregrado/admisiones	Formulario de matriculación web impreso y debidamente firmado.	texto
admision_cronograma_badge	/pregrado/admisiones	Planificación cronológica	texto
admision_cronograma_titulo	/pregrado/admisiones	Gestiones de Admisión	texto
admision_cronograma_subtitulo	/pregrado/admisiones	La UMSA habilita dos periodos de ingreso al año para dar cabida a nuevos estudiantes.	texto
admision_cronograma_s1_titulo	/pregrado/admisiones	Semestre I / 2026 (Febrero - Junio)	texto
admision_cronograma_s1_resumen	/pregrado/admisiones	Ingreso programado para el inicio de clases en febrero/marzo de cada año.	texto
admision_cronograma_s2_titulo	/pregrado/admisiones	Semestre II / 2026 (Agosto - Diciembre)	texto
admision_cronograma_s2_resumen	/pregrado/admisiones	Ingreso programado para el inicio de clases en agosto de cada año.	texto
admision_especial_badge	/pregrado/admisiones	Modalidades especiales	texto
admision_especial_titulo	/pregrado/admisiones	Admisiones Especiales Universitarias	texto
admision_especial_subtitulo	/pregrado/admisiones	Traspasos, carreras simultáneas y convenios especiales para universitarios.	texto
admision_especial_01_titulo	/pregrado/admisiones	Carreras Paralelas	texto
admision_especial_01_descripcion	/pregrado/admisiones	Para estudiantes regulares de la UMSA que deseen cursar Estadística en simultáneo con otra carrera.	texto
admision_especial_02_titulo	/pregrado/admisiones	Traspaso de Universidad	texto
admision_especial_02_descripcion	/pregrado/admisiones	Para universitarios de otras universidades del sistema CEUB que se muden a La Paz.	texto
admision_especial_03_titulo	/pregrado/admisiones	Cambio de Carrera	texto
admision_especial_03_descripcion	/pregrado/admisiones	Para estudiantes de la FCPN u otras facultades que deseen migrar definitivamente a Estadística.	texto
admision_especial_04_titulo	/pregrado/admisiones	Convenios Interinstitucionales y Colegios	texto
admision_especial_04_descripcion	/pregrado/admisiones	Admisión preferencial para mejores bachilleres según convenios departamentales y nacionales.	texto
admision_especial_05_titulo	/pregrado/admisiones	Traspaso de Sede Universitaria	texto
admision_especial_05_descripcion	/pregrado/admisiones	Reincorporación de sedes provinciales a la sede central de Cota Cota.	texto
convalidacion_hero_badge	/pregrado/convalidaciones	Migración y homologación curricular	texto
convalidacion_hero_descripcion	/pregrado/convalidaciones	Herramienta oficial de equivalencias entre el Plan 2007, Plan 2012 y Plan 2021 de la Carrera de Estadística.	texto
convalidacion_intro_placeholder	/pregrado/convalidaciones	Buscar por sigla o nombre de materia...	texto
convalidacion_pasos_badge	/pregrado/convalidaciones	Procedimiento administrativo	texto
convalidacion_pasos_titulo	/pregrado/convalidaciones	Pasos para tramitar tu Convalidación	texto
convalidacion_paso_01_titulo	/pregrado/convalidaciones	Solicitud en Kárdex	texto
convalidacion_paso_01_desc	/pregrado/convalidaciones	Solicita tu certificado de notas y récord académico legalizado.	texto
convalidacion_paso_02_titulo	/pregrado/convalidaciones	Revisión por Comisión	texto
convalidacion_paso_02_desc	/pregrado/convalidaciones	La Comisión Académica dictamina la tabla de correspondencias según resolución.	texto
convalidacion_paso_03_titulo	/pregrado/convalidaciones	Aprobación en Consejo	texto
convalidacion_paso_03_desc	/pregrado/convalidaciones	El H. Consejo de Carrera emite la resolución formal de homologación.	texto
convalidacion_paso_04_titulo	/pregrado/convalidaciones	Registro en el SSA	texto
convalidacion_paso_04_desc	/pregrado/convalidaciones	Kárdex carga las notas convalidas en el sistema oficial de la UMSA.	texto
convalidacion_aviso_titulo	/pregrado/convalidaciones	Consultas sobre casos no contemplados	texto
convalidacion_aviso_contacto	/pregrado/convalidaciones	Edificio FCPN Cota Cota, Piso 2	texto
graduacion_hero_resolucion	/pregrado/modalidades-graduacion	Reglamento General de Tipos de Graduación CEUB / UMSA	texto
graduacion_taller_badge	/pregrado/modalidades-graduacion	Octavo semestre	texto
graduacion_taller_descripcion	/pregrado/modalidades-graduacion	Todo estudiante debe inscribirse al Taller de Titulación en el último semestre. En esta asignatura se diseña, ajusta y aprueba el Perfil de Grado.	texto
graduacion_taller_cta_url	/pregrado/modalidades-graduacion	/pregrado/malla-curricular	texto
graduacion_paso_01_titulo	/pregrado/modalidades-graduacion	1. Taller de Titulación	texto
graduacion_paso_02_titulo	/pregrado/modalidades-graduacion	2. Aprobación de Perfil	texto
graduacion_paso_02_desc	/pregrado/modalidades-graduacion	Asignación oficial de Tutor y Resolución de aprobación del H. Consejo de Carrera.	texto
graduacion_paso_03_titulo	/pregrado/modalidades-graduacion	3. Desarrollo del Trabajo	texto
graduacion_paso_03_desc	/pregrado/modalidades-graduacion	Investigación, redacción o ejecución práctica bajo seguimiento tutorial riguroso.	texto
graduacion_paso_04_titulo	/pregrado/modalidades-graduacion	4. Defensa Pública	texto
graduacion_paso_04_desc	/pregrado/modalidades-graduacion	Sustentación oral del trabajo final ante Tribunal Examinador calificado.	texto
graduacion_modalidad_badge	/pregrado/modalidades-graduacion	Opciones académicas	texto
graduacion_modalidad_titulo	/pregrado/modalidades-graduacion	Las 4 Vías de Titulación	texto
graduacion_modalidad_subtitulo	/pregrado/modalidades-graduacion	Explora las modalidades reconocidas oficialmente para culminar tu formación profesional.	texto
graduacion_mod_01_titulo	/pregrado/modalidades-graduacion	Tesis de Grado	texto
graduacion_mod_01_badge	/pregrado/modalidades-graduacion	Investigación científica	texto
graduacion_mod_01_desc	/pregrado/modalidades-graduacion	Trabajo de investigación original que aporta nuevo conocimiento teórico, metodológico o aplicado en estadística.	texto
graduacion_mod_02_titulo	/pregrado/modalidades-graduacion	Trabajo Dirigido	texto
graduacion_mod_02_badge	/pregrado/modalidades-graduacion	Experiencia institucional	texto
graduacion_mod_02_desc	/pregrado/modalidades-graduacion	Práctica guiada y desarrollo de soluciones cuantitativas en entidades públicas o privadas bajo convenio.	texto
graduacion_mod_03_titulo	/pregrado/modalidades-graduacion	Proyecto de Grado	texto
graduacion_mod_03_badge	/pregrado/modalidades-graduacion	Aplicación tecnológica	texto
graduacion_mod_03_desc	/pregrado/modalidades-graduacion	Desarrollo de un modelo predictivo, sistema de analítica o solución aplicada a una necesidad concreta.	texto
graduacion_mod_04_titulo	/pregrado/modalidades-graduacion	Graduación por Excelencia	texto
graduacion_mod_04_badge	/pregrado/modalidades-graduacion	Mérito estudiantil	texto
graduacion_mod_04_desc	/pregrado/modalidades-graduacion	Titulación directa exenta de defensa para universitarios que mantuvieron alto rendimiento y regularidad.	texto
graduacion_excelencia_badge	/pregrado/modalidades-graduacion	Reconocimiento institucional	texto
graduacion_excelencia_cita	/pregrado/modalidades-graduacion	La UMSA premia el esfuerzo constante. Si tu promedio ponderado supera el límite reglamentario sin reprobaciones, el Consejo te exime de defensa.	texto
graduacion_excelencia_cta_texto	/pregrado/modalidades-graduacion	Revisar reglamento de excelencia	texto
graduacion_excelencia_cta_url	/pregrado/modalidades-graduacion	#	texto
pos_terminal_perfil_card_01_titulo	/postgrado/maestria-terminal	Modelado y Matemática Avanzada	texto
pos_terminal_perfil_card_01_desc	/postgrado/maestria-terminal	Abstracción matemática para resolver problemas complejos usando optimización, simulación estocástica y modelos lineales generalizados.	texto
pos_terminal_perfil_card_02_titulo	/postgrado/maestria-terminal	Ciencia de Datos y Big Data	texto
pos_terminal_perfil_card_02_desc	/postgrado/maestria-terminal	Análisis masivo mediante machine learning, bases de datos multidimensionales y entornos de desarrollo integrado.	texto
pos_terminal_perfil_card_03_titulo	/postgrado/maestria-terminal	Investigación Científica	texto
pos_terminal_perfil_card_03_desc	/postgrado/maestria-terminal	Aplicación del método científico para formular hipótesis, validar resultados y publicar hallazgos de alto impacto.	texto
pos_terminal_admision_req_01	/postgrado/maestria-terminal	Título en Provisión Nacional en Estadística, Matemáticas, Informática o áreas afines.	texto
pos_terminal_admision_req_02	/postgrado/maestria-terminal	Currículum Vitae documentado con respaldos pertinentes.	texto
pos_terminal_admision_req_03	/postgrado/maestria-terminal	Carta de motivación y fundamentación de interés en la maestría.	texto
pos_terminal_admision_req_04	/postgrado/maestria-terminal	Fotocopia legalizada de Diploma Académico.	texto
pos_terminal_admision_req_05	/postgrado/maestria-terminal	Fotocopia de Cédula de Identidad vigente.	texto
pos_terminal_admision_req_06	/postgrado/maestria-terminal	Aprobación de la entrevista con el Comité de Postgrado.	texto
pos_terminal_campo_01_titulo	/postgrado/maestria-terminal	Sector Financiero y Banca	texto
pos_terminal_campo_01_desc	/postgrado/maestria-terminal	Modelado de riesgo crediticio, prevención de fraude y predicción de series financieras.	texto
pos_terminal_campo_02_titulo	/postgrado/maestria-terminal	Gobierno y Políticas Públicas	texto
pos_terminal_campo_02_desc	/postgrado/maestria-terminal	Diseño muestral en censos, análisis demográfico y evaluación de impacto de programas estatales.	texto
pos_terminal_campo_03_titulo	/postgrado/maestria-terminal	Empresas de Tecnología y BI	texto
pos_terminal_campo_03_desc	/postgrado/maestria-terminal	Liderazgo en pipelines de datos, machine learning empresarial y analítica predictiva avanzada.	texto
pos_terminal_campo_04_titulo	/postgrado/maestria-terminal	Investigación y Academia	texto
pos_terminal_campo_04_desc	/postgrado/maestria-terminal	Docencia universitaria de postgrado y conducción de proyectos en centros de investigación.	texto
pos_terminal_electiva_tag	/postgrado/maestria-terminal	Especialidades optativas	texto
pos_terminal_electiva_titulo	/postgrado/maestria-terminal	Catálogo de Seminarios Electivos	texto
pos_diplo_requisito_perfil_titulo	/postgrado/diplomados	Perfil del Postulante	texto
pos_terminal_electiva_nota	/postgrado/maestria-terminal	Las electivas se renuevan cada gestión para incorporar tendencias emergentes en IA y estadística.	texto
pos_terminal_cta_titulo	/postgrado/maestria-terminal	¿Listo para dar el siguiente paso en tu carrera científica?	texto
pos_terminal_cta_descripcion	/postgrado/maestria-terminal	Comunícate con la coordinación de postgrado para recibir la guía completa del postulante.	texto
pos_terminal_cta_boton_texto	/postgrado/maestria-terminal	Contactar a Coordinación de Postgrado	texto
pos_terminal_cta_boton_url	/postgrado/maestria-terminal	/contacto	texto
pos_autofin_hero_highlight_01	/postgrado/maestria-autofinanciada	Pago por módulos	texto
pos_autofin_hero_highlight_02	/postgrado/maestria-autofinanciada	Diplomados intermedios	texto
pos_autofin_hero_highlight_03	/postgrado/maestria-autofinanciada	Horario ejecutivo virtual	texto
pos_autofin_hero_cta_principal	/postgrado/maestria-autofinanciada	Descargar convocatoria autofinanciada	texto
pos_autofin_hero_cta_secundario	/postgrado/maestria-autofinanciada	Ver plan modular	texto
pos_autofin_perfil_titulo	/postgrado/maestria-autofinanciada	Perfil de Egreso Aplicado	texto
pos_autofin_perfil_card_01_titulo	/postgrado/maestria-autofinanciada	Arquitectura de Datos y SQL	texto
pos_autofin_perfil_card_01_desc	/postgrado/maestria-autofinanciada	Depuración, estructuración y gobierno de datos masivos en entornos relacionales y no relacionales.	texto
pos_autofin_perfil_card_02_titulo	/postgrado/maestria-autofinanciada	Data Mining y Aprendizaje Profundo	texto
pos_autofin_perfil_card_02_desc	/postgrado/maestria-autofinanciada	Extracción de conocimiento, clustering y redes neuronales aplicadas a problemas de negocio.	texto
pos_autofin_perfil_card_03_titulo	/postgrado/maestria-autofinanciada	Series Temporales y Pronósticos	texto
pos_autofin_perfil_card_03_desc	/postgrado/maestria-autofinanciada	Modelado econométrico y estocástico para proyecciones de demanda, ventas y tendencias de mercado.	texto
pos_autofin_perfil_card_04_titulo	/postgrado/maestria-autofinanciada	Analítica Multivariante en Python/R	texto
pos_autofin_perfil_card_04_desc	/postgrado/maestria-autofinanciada	Técnicas avanzadas de reducción de dimensionalidad y modelos estadísticos multivariados.	texto
pos_autofin_admision_nota_titulo	/postgrado/maestria-autofinanciada	Formato de Presentación	texto
pos_autofin_admision_nota_texto	/postgrado/maestria-autofinanciada	Toda la documentación debe presentarse foliada y en folder color azul rotulado.	texto
pos_autofin_admision_via1_titulo	/postgrado/maestria-autofinanciada	Vía 1: Titulación por Postgrado (Egresados UMSA)	texto
pos_autofin_admision_via1_req_01	/postgrado/maestria-autofinanciada	Certificado de conclusión de estudios original emitido por Kárdex.	texto
pos_autofin_admision_via1_req_02	/postgrado/maestria-autofinanciada	Carta de solicitud dirigida al Coordinador del Programa de Postgrado.	texto
pos_autofin_admision_via1_req_03	/postgrado/maestria-autofinanciada	Fotocopia simple de cédula de identidad y matrícula de egreso.	texto
pos_autofin_admision_via2_titulo	/postgrado/maestria-autofinanciada	Vía 2: Profesionales Graduados (Nacionales y Extranjeros)	texto
pos_autofin_admision_via2_req_01	/postgrado/maestria-autofinanciada	Fotocopia legalizada de Título en Provisión Nacional o Diploma Académico.	texto
pos_autofin_admision_via2_req_02	/postgrado/maestria-autofinanciada	Currículum Vitae firmado con respaldos esenciales.	texto
pos_autofin_admision_via2_req_03	/postgrado/maestria-autofinanciada	Fotocopia de C.I. vigente y comprobante de pago de matrícula.	texto
pos_autofin_inversion_tag	/postgrado/maestria-autofinanciada	Planes de pago	texto
pos_autofin_inversion_titulo	/postgrado/maestria-autofinanciada	Inversión Económica del Programa	texto
pos_autofin_inversion_sub	/postgrado/maestria-autofinanciada	Opciones de financiamiento en cuotas mensuales sin interés para profesionales.	texto
pos_autofin_inversion_cuota_matricula	/postgrado/maestria-autofinanciada	1.200 Bs. por módulo	texto
pos_autofin_inversion_cuota_mensual	/postgrado/maestria-autofinanciada	1.500 Bs. mensuales	texto
pos_autofin_inversion_cuota_total	/postgrado/maestria-autofinanciada	18.000 Bs. programa completo	texto
pos_autofin_inversion_nota	/postgrado/maestria-autofinanciada	Descuento especial del 10% por pago al contado de cada módulo completo.	texto
pos_autofin_cta_descripcion	/postgrado/maestria-autofinanciada	Las plazas son limitadas para garantizar tutorías personalizadas en cada proyecto de tesis.	texto
pos_autofin_cta_boton_texto	/postgrado/maestria-autofinanciada	Iniciar proceso de preinscripción	texto
pos_autofin_cta_boton_url	/postgrado/maestria-autofinanciada	#	texto
pos_diplo_hero_eyebrow	/postgrado/diplomados	Programas de certificación corta	texto
pos_diplo_hero_titulo_01	/postgrado/diplomados	Diplomados y	texto
pos_diplo_hero_titulo_02	/postgrado/diplomados	Especialidades	texto
pos_diplo_hero_descripcion	/postgrado/diplomados	Oferta de actualización profesional orientada a analítica aplicada, bioestadística, econometría y toma de decisiones.	texto
pos_diplo_hero_highlight_01	/postgrado/diplomados	Convocatorias vigentes	texto
pos_diplo_hero_highlight_02	/postgrado/diplomados	Modalidad virtual y sincrónica	texto
pos_diplo_hero_highlight_03	/postgrado/diplomados	Enfoque práctico intensivo	texto
pos_diplo_oferta_tag	/postgrado/diplomados	Catálogo de especialización	texto
pos_diplo_oferta_titulo	/postgrado/diplomados	Programas Activos y Próximos Inicios	texto
pos_diplo_oferta_sub	/postgrado/diplomados	Explora nuestra oferta por áreas temáticas y postula a la cohorte correspondiente.	texto
pos_diplo_requisito_tag	/postgrado/diplomados	Inscripción rápida	texto
pos_diplo_requisito_titulo	/postgrado/diplomados	Requisitos Generales de Inscripción	texto
pos_diplo_requisito_sub	/postgrado/diplomados	Documentación requerida para la matriculación en programas de Diplomado y Especialidad.	texto
pos_diplo_requisito_01	/postgrado/diplomados	Fotocopia simple de Diploma Académico o Título en Provisión Nacional.	texto
pos_diplo_requisito_02	/postgrado/diplomados	Fotocopia de Cédula de Identidad vigente.	texto
pos_diplo_requisito_03	/postgrado/diplomados	Formulario de preinscripción de postgrado emitido por el sistema SIA.	texto
pos_diplo_requisito_04	/postgrado/diplomados	Comprobante de depósito bancario de matrícula y primera cuota.	texto
pos_diplo_requisito_cta_texto	/postgrado/diplomados	Ver proceso en portal SIA UMSA	texto
pos_diplo_requisito_cta_url	/postgrado/diplomados	https://sia.umsa.bo/	texto
est_tramites_item_01_titulo	/estudiantes/guia-seguimiento-tramites	Reinscripción y Readmisión	texto
est_tramites_item_01_tag	/estudiantes/guia-seguimiento-tramites	Permanencia Estudiantil	texto
est_tramites_item_01_desc	/estudiantes/guia-seguimiento-tramites	Proceso para reincorporar a un universitario inactivo con registro académico previo.	texto
est_tramites_item_02_titulo	/estudiantes/guia-seguimiento-tramites	Certificado de Conclusión de Estudios	texto
est_tramites_item_02_tag	/estudiantes/guia-seguimiento-tramites	Trámites de Egreso	texto
est_tramites_item_02_desc	/estudiantes/guia-seguimiento-tramites	Documento oficial que acredita el vencimiento exitoso de todas las asignaturas del plan de estudios.	texto
est_tramites_item_03_titulo	/estudiantes/guia-seguimiento-tramites	Graduación por Excelencia Académica	texto
est_tramites_item_03_tag	/estudiantes/guia-seguimiento-tramites	Modalidad Titulación	texto
est_tramites_item_03_desc	/estudiantes/guia-seguimiento-tramites	Titulación directa para estudiantes con alto rendimiento académico sostenido durante los 8 semestres.	texto
est_tramites_item_04_titulo	/estudiantes/guia-seguimiento-tramites	Legalización de Documentos Académicos	texto
est_tramites_item_04_tag	/estudiantes/guia-seguimiento-tramites	Certificaciones	texto
est_tramites_item_04_desc	/estudiantes/guia-seguimiento-tramites	Certificación oficial para reconocimiento legal de títulos, certificados de notas y programas analíticos.	texto
est_centro_hero_eyebrow	/estudiantes/centro-estudiantes	Órgano máximo de representación	texto
est_centro_serv_01_titulo	/estudiantes/centro-estudiantes	Apoyo Académico	texto
est_centro_serv_01_desc	/estudiantes/centro-estudiantes	Organización de cursos extracurriculares, talleres de software estadístico y seminarios.	texto
est_centro_serv_02_titulo	/estudiantes/centro-estudiantes	Gestión de Auxiliaturas	texto
est_centro_serv_02_desc	/estudiantes/centro-estudiantes	Información y guía integral sobre convocatorias de docencia y laboratorios.	texto
est_centro_serv_03_titulo	/estudiantes/centro-estudiantes	Defensa Estudiantil	texto
est_centro_serv_03_desc	/estudiantes/centro-estudiantes	Asesoramiento en impugnaciones, trámites de kárdex y seguimiento ante el Consejo.	texto
est_centro_serv_04_titulo	/estudiantes/centro-estudiantes	Cultura y Deporte	texto
est_centro_serv_04_desc	/estudiantes/centro-estudiantes	Campeonatos facultativos, jornadas científicas y eventos de integración estudiantil.	texto
est_centro_estructura_l1_titulo	/estudiantes/centro-estudiantes	Bases Estudiantiles	texto
est_centro_estructura_l1_sub	/estudiantes/centro-estudiantes	Voz y voto soberano en asambleas generales.	texto
est_centro_estructura_l2_titulo	/estudiantes/centro-estudiantes	Centro de Estudiantes (CEE)	texto
est_centro_estructura_l2_sub	/estudiantes/centro-estudiantes	Directiva elegida democráticamente para la gestión actual.	texto
est_centro_estructura_l3_01_titulo	/estudiantes/centro-estudiantes	Consejo de Carrera (HCC)	texto
est_centro_estructura_l3_01_sub	/estudiantes/centro-estudiantes	Decisiones académicas locales y cogobierno docente-estudiantil.	texto
est_centro_estructura_l3_02_titulo	/estudiantes/centro-estudiantes	Consejo Facultativo (HCF)	texto
est_centro_estructura_l3_02_sub	/estudiantes/centro-estudiantes	Decisiones a nivel facultad en conjunto con el Decanato.	texto
est_centro_canal_02_label	/estudiantes/centro-estudiantes	Canal de Telegram Informativo	texto
est_aux_hero_titulo_02	/estudiantes/convocatorias-auxiliaturas	Auxiliaturas	texto
est_aux_hero_descripcion	/estudiantes/convocatorias-auxiliaturas	Consulta convocatorias vigentes, requisitos y cronogramas oficiales para postular a auxiliaturas de docencia y laboratorio.	texto
est_aux_paso_01_titulo	/estudiantes/convocatorias-auxiliaturas	1. Revisión de Convocatoria	texto
est_aux_paso_01_desc	/estudiantes/convocatorias-auxiliaturas	Descarga la convocatoria y valida que cumples con los promedios y materias aprobadas requeridas.	texto
est_aux_paso_02_titulo	/estudiantes/convocatorias-auxiliaturas	2. Preparación de File	texto
est_aux_paso_02_desc	/estudiantes/convocatorias-auxiliaturas	Organiza kárdex, CI, matrícula vigente y tu plan de trabajo de auxiliatura.	texto
est_aux_paso_03_titulo	/estudiantes/convocatorias-auxiliaturas	3. Entrega en Secretaría	texto
est_aux_paso_03_desc	/estudiantes/convocatorias-auxiliaturas	Presenta tu expediente en ventanilla dentro del plazo improrrogable fijado.	texto
est_aux_paso_04_titulo	/estudiantes/convocatorias-auxiliaturas	4. Evaluación y Resultados	texto
est_aux_paso_04_desc	/estudiantes/convocatorias-auxiliaturas	Rinde la prueba de conocimientos/entrevista y consulta la resolución de designación.	texto
est_aux_req_01_titulo	/estudiantes/convocatorias-auxiliaturas	Condición Académica Regular	texto
est_aux_req_01_desc	/estudiantes/convocatorias-auxiliaturas	Ser estudiante regular de la Carrera de Estadística con matrícula universitaria vigente.	texto
est_aux_req_02_titulo	/estudiantes/convocatorias-auxiliaturas	Rendimiento Destacado	texto
est_aux_req_02_desc	/estudiantes/convocatorias-auxiliaturas	Haber aprobado la materia a la que postula con nota sobresaliente según convocatoria.	texto
est_aux_req_03_titulo	/estudiantes/convocatorias-auxiliaturas	Documentación Base Completa	texto
inicio_perfil_etiqueta	/	Tasa de Empleo Directo	texto
inicio_perfil_titulo_01	/	PERFIL DEL	texto
inicio_perfil_titulo_02	/	EGRESADO	texto
est_pasantias_mod_01_tag	/estudiantes/pasantias-bolsa-trabajo	Titulación directa	texto
est_pasantias_mod_01_titulo	/estudiantes/pasantias-bolsa-trabajo	Pasantía de Grado	texto
est_pasantias_mod_01_desc	/estudiantes/pasantias-bolsa-trabajo	Modalidad para obtener licenciatura cumpliendo horas de práctica en análisis de datos bajo supervisión académica.	texto
est_pasantias_mod_02_tag	/estudiantes/pasantias-bolsa-trabajo	Experiencia laboral	texto
est_pasantias_mod_02_titulo	/estudiantes/pasantias-bolsa-trabajo	Pasantía Pre-Profesional	texto
est_pasantias_mod_02_desc	/estudiantes/pasantias-bolsa-trabajo	Prácticas por convenio para fortalecer experiencia en el mercado antes de culminar la carrera.	texto
est_pasantias_mod_03_tag	/estudiantes/pasantias-bolsa-trabajo	Proyecto institucional	texto
est_pasantias_mod_03_titulo	/estudiantes/pasantias-bolsa-trabajo	Trabajo Dirigido	texto
est_pasantias_mod_03_desc	/estudiantes/pasantias-bolsa-trabajo	Desarrollo de proyectos de mejora estadística dentro de instituciones aliadas con tutorías mixtas.	texto
est_pasantias_paso_01_titulo	/estudiantes/pasantias-bolsa-trabajo	1. Postulación	texto
est_pasantias_paso_01_desc	/estudiantes/pasantias-bolsa-trabajo	Selecciona una plaza del banco de ofertas o presenta carta de aceptación externa.	texto
est_pasantias_paso_02_titulo	/estudiantes/pasantias-bolsa-trabajo	2. Habilitación en Kárdex	texto
est_pasantias_paso_02_desc	/estudiantes/pasantias-bolsa-trabajo	Kárdex valida avance académico mínimo según reglamento vigente.	texto
est_pasantias_paso_03_titulo	/estudiantes/pasantias-bolsa-trabajo	3. Firma de Convenio	texto
est_pasantias_paso_03_desc	/estudiantes/pasantias-bolsa-trabajo	Firma tripartita entre UMSA, institución receptora y el estudiante.	texto
est_pasantias_paso_04_titulo	/estudiantes/pasantias-bolsa-trabajo	4. Ejecución de Práctica	texto
est_pasantias_paso_04_desc	/estudiantes/pasantias-bolsa-trabajo	Desarrollo de actividades estadísticas y reportes periódicos de avance.	texto
est_pasantias_paso_05_titulo	/estudiantes/pasantias-bolsa-trabajo	5. Informe y Defensa	texto
est_pasantias_paso_05_desc	/estudiantes/pasantias-bolsa-trabajo	Informe final de actividades y defensa ante tribunal cuando aplique titulación.	texto
est_pasantias_doc_01_titulo	/estudiantes/pasantias-bolsa-trabajo	Formato de Informe Mensual	texto
est_pasantias_doc_01_desc	/estudiantes/pasantias-bolsa-trabajo	Plantilla oficial para reporte mensual de actividades y avance.	texto
est_pasantias_doc_02_titulo	/estudiantes/pasantias-bolsa-trabajo	Guía de Informe Final	texto
est_pasantias_doc_02_desc	/estudiantes/pasantias-bolsa-trabajo	Estructura requerida para presentación y defensa de pasantía.	texto
est_pasantias_doc_03_titulo	/estudiantes/pasantias-bolsa-trabajo	Reglamento de Pasantías	texto
est_pasantias_doc_03_desc	/estudiantes/pasantias-bolsa-trabajo	Normativa oficial sobre prácticas pre-profesionales y convenios.	texto
est_pasantias_req_01	/estudiantes/pasantias-bolsa-trabajo	Matrícula universitaria de la gestión actual (fotocopia simple).	texto
est_pasantias_req_02	/estudiantes/pasantias-bolsa-trabajo	Récord académico actualizado con materias vencidas acreditadas.	texto
est_pasantias_req_03	/estudiantes/pasantias-bolsa-trabajo	Carta de solicitud dirigida a Dirección de Carrera.	texto
est_pasantias_req_04	/estudiantes/pasantias-bolsa-trabajo	Plan de trabajo inicial firmado por tutor institucional.	texto
est_pasantias_testimonio_01_nombre	/estudiantes/pasantias-bolsa-trabajo	Carlos Mendoza	texto
est_pasantias_testimonio_01_rol	/estudiantes/pasantias-bolsa-trabajo	Analista Junior - INE Bolivia	texto
est_pasantias_testimonio_01_cita	/estudiantes/pasantias-bolsa-trabajo	La pasantía me permitió aplicar modelos de regresión y muestreo complejo en proyectos estadísticos nacionales.	texto
est_pasantias_testimonio_02_nombre	/estudiantes/pasantias-bolsa-trabajo	Lucía Vargas	texto
est_pasantias_testimonio_02_rol	/estudiantes/pasantias-bolsa-trabajo	Data Scientist - Banca Privada	texto
est_pasantias_testimonio_02_cita	/estudiantes/pasantias-bolsa-trabajo	El trabajo dirigido fue decisivo para mi inserción laboral y consolidación en el análisis de riesgo crediticio.	texto
est_sociedad_nodo_01_titulo	/estudiantes/sociedad-cientifica	Nodo R & Python	texto
est_sociedad_nodo_01_tag	/estudiantes/sociedad-cientifica	Programación Estadística	texto
est_sociedad_nodo_01_desc	/estudiantes/sociedad-cientifica	Automatización de procesos, web scraping y visualización de datos dinámica.	texto
est_sociedad_nodo_02_titulo	/estudiantes/sociedad-cientifica	Métodos Bayesianos	texto
est_sociedad_nodo_02_tag	/estudiantes/sociedad-cientifica	Inferencia Avanzada	texto
est_sociedad_nodo_02_desc	/estudiantes/sociedad-cientifica	Estadística bayesiana, simulación MCMC y modelos probabilísticos robustos.	texto
est_sociedad_nodo_03_titulo	/estudiantes/sociedad-cientifica	Laboratorio de Minería de Datos	texto
est_sociedad_nodo_03_tag	/estudiantes/sociedad-cientifica	Inteligencia Artificial	texto
est_sociedad_nodo_03_desc	/estudiantes/sociedad-cientifica	Clasificación, clustering y redes neuronales para exploración masiva de datos.	texto
est_sociedad_ben_01_titulo	/estudiantes/sociedad-cientifica	Certificaciones Académicas	texto
est_sociedad_ben_01_desc	/estudiantes/sociedad-cientifica	Certificados avalados por la Carrera de Estadística y la FCPN.	texto
est_sociedad_ben_02_titulo	/estudiantes/sociedad-cientifica	Publicaciones y Papers	texto
est_sociedad_ben_02_desc	/estudiantes/sociedad-cientifica	Artículos para revistas científicas indexadas nacionales e internacionales.	texto
est_sociedad_ben_03_titulo	/estudiantes/sociedad-cientifica	Eventos Exclusivos	texto
est_sociedad_ben_03_desc	/estudiantes/sociedad-cientifica	Congresos, hackatones, ferias científicas y talleres intensivos.	texto
est_sociedad_ben_04_titulo	/estudiantes/sociedad-cientifica	Networking Profesional	texto
est_sociedad_ben_04_desc	/estudiantes/sociedad-cientifica	Conexión con investigadores, empresas y docentes líderes del área.	texto
est_sociedad_paso_01_desc	/estudiantes/sociedad-cientifica	Lanzamiento oficial de plazas de investigación para nuevos integrantes.	texto
est_sociedad_paso_02_titulo	/estudiantes/sociedad-cientifica	2. Postulación y Carta	texto
est_sociedad_paso_02_desc	/estudiantes/sociedad-cientifica	Presentación de carta de motivación y áreas temáticas de interés.	texto
est_sociedad_paso_03_titulo	/estudiantes/sociedad-cientifica	3. Entrevista Técnica	texto
est_sociedad_paso_03_desc	/estudiantes/sociedad-cientifica	Reunión con los coordinadores para evaluar aptitudes e intereses.	texto
est_sociedad_paso_04_titulo	/estudiantes/sociedad-cientifica	4. Inducción y Nodos	texto
est_sociedad_paso_04_desc	/estudiantes/sociedad-cientifica	Asignación a un nodo de estudio e inicio del proyecto tutorado.	texto
est_sociedad_rev_01_nombre	/estudiantes/sociedad-cientifica	Revista Varianza	texto
est_sociedad_rev_01_tipo	/estudiantes/sociedad-cientifica	UMSA	texto
est_sociedad_rev_01_desc	/estudiantes/sociedad-cientifica	Publicación científica oficial del IETA - UMSA indexada.	texto
est_sociedad_rev_02_nombre	/estudiantes/sociedad-cientifica	Revista de Ciencias Puras	texto
est_sociedad_rev_02_tipo	/estudiantes/sociedad-cientifica	FCPN	texto
est_sociedad_rev_02_desc	/estudiantes/sociedad-cientifica	Divulgación científica multidisciplinaria de la facultad.	texto
est_sociedad_rev_03_nombre	/estudiantes/sociedad-cientifica	Data Science Journal (BO)	texto
est_sociedad_rev_03_tipo	/estudiantes/sociedad-cientifica	Nacional	texto
est_sociedad_testimonio_01_nombre	/estudiantes/sociedad-cientifica	Sofía Fernández	texto
est_sociedad_testimonio_01_rol	/estudiantes/sociedad-cientifica	Investigadora Junior - SCEE	texto
est_sociedad_testimonio_01_cita	/estudiantes/sociedad-cientifica	El grupo me dio disciplina, método y apoyo tutorial para convertir mi curiosidad en un artículo científico real.	texto
est_sociedad_testimonio_02_nombre	/estudiantes/sociedad-cientifica	Diego Huanca	texto
est_sociedad_testimonio_02_rol	/estudiantes/sociedad-cientifica	Miembro de la SCEE	texto
est_sociedad_testimonio_02_cita	/estudiantes/sociedad-cientifica	La Sociedad Científica me permitió trabajar con datos reales de salud pública y aprender a comunicar resultados con rigor.	texto
rec_biblio_hero_badge	/recursos/biblioteca	Catálogo en Línea Activo	texto
rec_biblio_hero_titulo_01	/recursos/biblioteca	Repositorio	texto
rec_biblio_hero_titulo_02	/recursos/biblioteca	Académico	texto
rec_biblio_hero_descripcion	/recursos/biblioteca	Colección de textos guía, referencias bibliográficas, reportes de datos y el directorio completo de investigadores de la Carrera de Estadística.	texto
rec_biblio_hero_btn_libros	/recursos/biblioteca	Explorar Libros	texto
rec_biblio_hero_btn_autores	/recursos/biblioteca	Directorio de Autores	texto
rec_biblio_catalogo_tag	/recursos/biblioteca	Acervo Bibliográfico	texto
rec_biblio_catalogo_titulo	/recursos/biblioteca	Colección de Libros y Textos	texto
rec_biblio_catalogo_sub	/recursos/biblioteca	Consulta textos físicos y material digitalizado para consulta académica e investigación.	texto
rec_biblio_catalogo_placeholder	/recursos/biblioteca	Buscar por título, categoría, tema o ISBN...	texto
rec_biblio_autores_tag	/recursos/biblioteca	Directorio de Autores	texto
rec_biblio_autores_titulo	/recursos/biblioteca	Investigadores y Autores Destacados	texto
rec_biblio_autores_sub	/recursos/biblioteca	Explora la producción bibliográfica por autor, afiliación y especialidad temática.	texto
rec_biblio_autores_placeholder	/recursos/biblioteca	Buscar por nombre de autor o institución...	texto
rec_biblio_servicios_tag	/recursos/biblioteca	Servicios de Biblioteca	texto
rec_biblio_servicios_titulo	/recursos/biblioteca	Atención y Préstamos	texto
rec_biblio_servicios_sub	/recursos/biblioteca	Conoce los horarios de sala, préstamo a domicilio y servicios de escaneo institucional.	texto
rec_biblio_serv_sala_titulo	/recursos/biblioteca	Sala de Lectura Silenciosa	texto
rec_biblio_serv_sala_desc	/recursos/biblioteca	Espacio acondicionado para estudio individual y grupal con acceso a estantería abierta.	texto
rec_biblio_serv_sala_horario	/recursos/biblioteca	Lunes a Viernes: 08:30 - 18:30	texto
rec_biblio_serv_prestamo_titulo	/recursos/biblioteca	Préstamo a Domicilio	texto
rec_biblio_serv_prestamo_desc	/recursos/biblioteca	Hasta 3 ejemplares por un periodo de 5 días hábiles con carné universitario o matrícula vigente.	texto
rec_biblio_serv_prestamo_horario	/recursos/biblioteca	Ventanilla de Kárdex de Biblioteca	texto
rec_biblio_serv_digital_titulo	/recursos/biblioteca	Terminales de Búsqueda KOHA	texto
rec_biblio_serv_digital_desc	/recursos/biblioteca	Catálogo sistematizado bajo clasificación Dewey para ubicación rápida de signaturas topográficas.	texto
rec_biblio_serv_digital_horario	/recursos/biblioteca	Acceso libre en sala	texto
rec_biblio_cta_titulo	/recursos/biblioteca	¿Necesitas solicitar un libro para tu materia?	texto
rec_biblio_cta_desc	/recursos/biblioteca	Puedes enviar tu requerimiento de adquisición a la Dirección de Carrera o consultar el fondo de reserva.	texto
rec_biblio_cta_btn	/recursos/biblioteca	Contactar a Biblioteca	texto
rec_biblio_cta_link	/recursos/biblioteca	mailto:biblioteca@estadistica.umsa.bo	texto
rec_revistas_hero_eyebrow	/recursos/revistas	RED DE PUBLICACIONES	texto
rec_revistas_hero_titulo_01	/recursos/revistas	Hemeroteca y Revistas	texto
rec_revistas_hero_titulo_02	/recursos/revistas	Científicas	texto
rec_revistas_hero_imagen	/recursos/revistas	/images/recursos/revistas/revistas_de_estadistica_cientificas_y_academicas_online.jpg	imagen
rec_revistas_filtro_tag	/recursos/revistas	Líneas Editoriales	texto
rec_revistas_filtro_sub	/recursos/revistas	Acceso directo a ediciones vigentes y números históricos con evaluación por pares ciegos.	texto
rec_revistas_varianza_badge	/recursos/revistas	Revista Oficial UMSA	texto
rec_revistas_varianza_titulo	/recursos/revistas	Revista Varianza (IETA)	texto
rec_revistas_varianza_issn	/recursos/revistas	ISSN: 2076-6815 (En línea)	texto
rec_revistas_varianza_enlace_label	/recursos/revistas	Portal OJS Revista Varianza	texto
rec_revistas_varianza_enlace_url	/recursos/revistas	https://ojs.umsa.bo/ojs/index.php/varianza	texto
rec_revistas_directrices_tag	/recursos/revistas	Para Autores	texto
rec_revistas_directrices_titulo	/recursos/revistas	Convocatoria Permanente de Artículos	texto
rec_revistas_directrices_desc	/recursos/revistas	Se reciben manuscritos originales en estadística matemática, modelación actuarial, ciencia de datos, bioestadística y econometría.	texto
rec_revistas_directrices_btn	/recursos/revistas	Ver Directrices para Autores	texto
rec_revistas_directrices_url	/recursos/revistas	https://ojs.umsa.bo/ojs/index.php/varianza/about/submissions	texto
rec_docs_hero_eyebrow	/recursos/documentos	GESTIÓN DOCUMENTAL CENTRALIZADA	texto
rec_docs_hero_titulo_01	/recursos/documentos	Repositorio de	texto
rec_docs_hero_titulo_02	/recursos/documentos	Recursos Digitales	texto
rec_docs_hero_descripcion	/recursos/documentos	Descargue formularios oficiales de auxiliares, partes de asistencia, solicitudes de defensa de panel y declaraciones juradas vigentes.	texto
rec_docs_archivero_tag	/recursos/documentos	Formatos y Trámites	texto
rec_docs_archivero_titulo	/recursos/documentos	Archivero Oficial de Formularios	texto
rec_docs_archivero_sub	/recursos/documentos	Archivos digitales con sellos de validez institucional para la gestión académica 2026.	texto
rec_docs_kardex_titulo	/recursos/documentos	Atención en Kárdex	texto
rec_docs_kardex_sub	/recursos/documentos	Para consultas sobre sellado y legalización de formularios:	texto
rec_docs_kardex_telefono	/recursos/documentos	2612824 – Int. 104	texto
rec_docs_kardex_correo	/recursos/documentos	kardex@estadistica.umsa.bo	texto
rec_docs_kardex_horario	/recursos/documentos	09:00 - 12:00 | 15:00 - 18:00	texto
rec_docs_kardex_ubicacion	/recursos/documentos	Edificio FCPN, Planta Baja, Ventanillas de Estadística	texto
rec_docs_sello_titulo	/recursos/documentos	Sello de Validez Institucional	texto
rec_docs_sello_badge_01	/recursos/documentos	VERIFICACIÓN 2026	texto
rec_docs_sello_badge_02	/recursos/documentos	FIRMA DIGITAL H.C.C.	texto
rec_docs_aviso_titulo	/recursos/documentos	Validez de Formatos Web	texto
rec_docs_aviso_desc	/recursos/documentos	Los formularios llenados digitalmente deben imprimirse y firmarse en tinta azul para su radicación oficial en ventanilla.	texto
rec_tesis_hero_eyebrow	/recursos/tesis	INVESTIGACIÓN CIENTÍFICA VALIDADA	texto
rec_tesis_hero_titulo_01	/recursos/tesis	Cyber-Tesis y	texto
rec_tesis_hero_titulo_02	/recursos/tesis	Producción Intelectual	texto
rec_tesis_hero_descripcion	/recursos/tesis	Índice estructurado de tesis y proyectos de grado. Explora por año, autores y áreas oficiales de materia.	texto
rec_tesis_filtro_tag	/recursos/tesis	Catálogo de Investigaciones	texto
rec_tesis_filtro_titulo	/recursos/tesis	Tesis de Licenciatura y Trabajos Dirigidos	texto
rec_tesis_filtro_sub	/recursos/tesis	Consulta textos completos en el Repositorio Institucional UMSA con metadatos estandarizados Dublin Core.	texto
rec_tesis_filtro_placeholder	/recursos/tesis	Buscar por título, autor, tutor o palabras clave...	texto
rec_tesis_tab_general	/recursos/tesis	TODOS LOS TRABAJOS	texto
rec_tesis_tab_materias	/recursos/tesis	POR MATERIAS	texto
rec_tesis_tab_autores	/recursos/tesis	POR AUTORES	texto
rec_tesis_tab_tutores	/recursos/tesis	POR TUTORES	texto
rec_tesis_modalidad_tesis	/recursos/tesis	Tesis de Grado	texto
rec_tesis_modalidad_tdir	/recursos/tesis	Trabajo Dirigido	texto
rec_tesis_repositorio_aviso_titulo	/recursos/tesis	Repositorio Institucional UMSA	texto
rec_tesis_repositorio_aviso_desc	/recursos/tesis	Los documentos cuentan con identificador persistente handle y están resguardados en el servidor central de la biblioteca universitaria.	texto
rec_tesis_repositorio_url	/recursos/tesis	https://repositorio.umsa.bo/handle/123456789/4	texto
rec_tesis_cta_titulo	/recursos/tesis	¿Defendiste tu trabajo de grado recientemente?	texto
rec_tesis_cta_desc	/recursos/tesis	Recuerda entregar el ejemplar digital en formato PDF con la carátula y firma de tribunal para su catalogación oficial.	texto
rec_tesis_cta_btn	/recursos/tesis	Guía de Entrega de Tesis	texto
rec_tesis_cta_url	/recursos/tesis	#	texto
rec_banco_hero_eyebrow	/recursos/banco-datos	ACCESO ABIERTO (OPEN DATA)	texto
rec_banco_hero_titulo_01	/recursos/banco-datos	Repositorio y	texto
rec_banco_hero_titulo_02	/recursos/banco-datos	Banco de Datos	texto
rec_banco_hero_highlight	/recursos/banco-datos	BANCO DE DATOS	texto
rec_banco_hero_descripcion	/recursos/banco-datos	Plataforma centralizada para la descarga de microdatos oficiales de censos y encuestas nacionales para investigación estadística y ciencia de datos.	texto
rec_banco_stats_c1_val	/recursos/banco-datos	19+	texto
rec_banco_stats_c1_lbl	/recursos/banco-datos	PROYECTOS Y CENSOS	texto
rec_banco_stats_c2_val	/recursos/banco-datos	80+	texto
rec_banco_stats_c2_lbl	/recursos/banco-datos	MICRODATOS DISPONIBLES	texto
rec_banco_filtro_tag	/recursos/banco-datos	Catálogo de Microdatos	texto
rec_banco_filtro_titulo	/recursos/banco-datos	Bases de Datos Nacionales e Históricas	texto
malla_hero_descripcion	/pregrado/malla-curricular	Estructura formativa integral organizada por ciclos de aprendizaje para desarrollar competencias estadísticas y computacionales avanzadas.	texto
malla_areas_02_nombre	/pregrado/malla-curricular	Área Matemática	texto
calendario_hero_subtitulo	/pregrado/calendario-academico	Cronograma oficial de actividades lectivas, exámenes y trámites administrativos de la Carrera de Estadística.	texto
calendario_nota_descripcion	/pregrado/calendario-academico	Corresponde a inscripción excepcional para estudiantes en trámites de carrera paralela, traspaso, convalidación u otros casos autorizados por la Comisión Académica.	texto
admision_regular_psa_titulo	/pregrado/admisiones	Prueba de Suficiencia Académica (PSA)	texto
admision_regular_psa_descripcion	/pregrado/admisiones	Examen de dispensación administrado por la FCPN. Evalúa aptitudes lógico-matemáticas y conocimientos exactos en una sola prueba de alto rigor.	texto
convalidacion_aviso_descripcion	/pregrado/convalidaciones	Si cursaste materias bajo planes anteriores o vienes de otra carrera, acude a la Comisión Académica los martes y jueves.	texto
graduacion_taller_cta_texto	/pregrado/modalidades-graduacion	Ver taller en malla curricular	texto
graduacion_paso_01_desc	/pregrado/modalidades-graduacion	Inscripción en 8° semestre para elaboración y aprobación del Perfil de Grado.	texto
pos_terminal_hero_descripcion	/postgrado/maestria-terminal	Formación avanzada para profesionales que lideran investigación, modelado matemático y ciencia de datos con rigor científico y proyección internacional.	texto
pos_terminal_electiva_sub	/postgrado/maestria-terminal	Asignaturas de profundización temática ofrecidas según demanda de investigación.	texto
pos_autofin_perfil_sub	/postgrado/maestria-autofinanciada	El egresado domina herramientas cuantitativas orientadas a analítica empresarial, gestión estratégica e innovación tecnológica.	texto
pos_diplo_requisito_perfil_texto	/postgrado/diplomados	Dirigido a licenciados, ingenieros y egresados universitarios que requieran actualización técnica de alto nivel.	texto
est_centro_hero_descripcion	/estudiantes/centro-estudiantes	Consolidando una comunidad estudiantil participativa, crítica y líder en el ámbito de la Ciencia de Datos en Bolivia. Tu voz en la toma de decisiones.	texto
est_aux_req_03_desc	/estudiantes/convocatorias-auxiliaturas	Nota de postulación, récord académico, CV según formato FCPN y fotocopia de CI.	texto
est_pasantias_ofertas_sub	/estudiantes/pasantias-bolsa-trabajo	Explora las convocatorias vigentes en instituciones con convenios activos con la UMSA.	texto
est_sociedad_paso_01_titulo	/estudiantes/sociedad-cientifica	1. Convocatoria Anual	texto
est_sociedad_rev_03_desc	/estudiantes/sociedad-cientifica	Revista boliviana de analítica avanzada e inteligencia artificial.	texto
rec_revistas_hero_descripcion	/recursos/revistas	Explora las revistas indexadas de prestigio internacional, junto con los boletines informativos y publicaciones institucionales del Instituto de Estadística.	texto
rec_revistas_filtro_titulo	/recursos/revistas	Publicaciones Seriadas e Índices	texto
rec_revistas_varianza_desc	/recursos/revistas	Órgano oficial de difusión científica de la Carrera de Estadística indexado en SciELO y Latindex Catálogo 2.0.	texto
rec_docs_sello_descripcion	/recursos/documentos	Todos los formularios y normativas descargados de este portal son las versiones oficiales aprobadas por el Honorable Consejo de Carrera para la gestión 2026. Evite el uso de documentos obsoletos.	texto
rec_banco_filtro_sub	/recursos/banco-datos	Formatos estándar CSV, SAV (SPSS), DTA (Stata) y RData listos para modelos econométricos y muestrales.	texto
rec_banco_filtro_placeholder	/recursos/banco-datos	Buscar por nombre del censo, encuesta o fuente (INE, UDAPE)...	texto
rec_banco_aviso_licencia_titulo	/recursos/banco-datos	Uso Ético de Microdatos	texto
rec_banco_aviso_licencia_desc	/recursos/banco-datos	Los datos son de uso libre y gratuito para fines estrictamente académicos y de investigación. Se exige citar la fuente oficial en toda publicación derivada.	texto
rec_banco_cta_titulo	/recursos/banco-datos	¿Necesitas una muestra o serie histórica específica?	texto
rec_banco_cta_desc	/recursos/banco-datos	El laboratorio del IETA cuenta con archivos digitalizados adicionales disponibles bajo solicitud académica justificada.	texto
rec_banco_cta_btn	/recursos/banco-datos	Solicitar Datos al IETA	texto
rec_banco_cta_url	/recursos/banco-datos	mailto:ieta@estadistica.umsa.bo	texto
contacto_hero_eyebrow	/contacto	Atención institucional y soporte	texto
contacto_hero_titulo_01	/contacto	Centro de Atención	texto
contacto_hero_titulo_02	/contacto	Contacto Oficial	texto
contacto_hero_descripcion	/contacto	Canal unificado para consultas académicas, administrativas y de investigación de la Carrera de Estadística UMSA.	texto
contacto_hero_boton	/contacto	Enviar consulta	texto
contacto_faq_01_pregunta	/contacto	¿Cómo solicito mi récord académico actualizado?	texto
contacto_faq_01_respuesta	/contacto	Debes presentar una carta de solicitud en Kardex adjuntando la boleta de pago de valores universitarios. El trámite demora 48 horas hábiles.	texto
contacto_faq_02_pregunta	/contacto	¿Cuándo se publican las fechas del examen PSA?	texto
contacto_faq_02_respuesta	/contacto	Las fechas del examen de dispensación (PSA) se publican en noviembre para semestre I y junio para semestre II en la sección de Admisiones.	texto
contacto_faq_03_pregunta	/contacto	¿Dónde debo entregar mis documentos de egreso?	texto
contacto_faq_03_respuesta	/contacto	La documentación final para egreso debe entregarse en ventanilla de Secretaría de Kardex en la sede Monoblock Central.	texto
contacto_form_titulo_01	/contacto	Envíanos un	texto
contacto_form_titulo_02	/contacto	mensaje	texto
contacto_form_subtitulo	/contacto	Te responderemos al correo proporcionado en un lapso de 24 horas hábiles.	texto
contacto_form_boton	/contacto	Enviar mensaje	texto
contacto_form_interruptor_estudiante	/contacto	Soy estudiante de la carrera	texto
contacto_form_categoria_01_etiqueta	/contacto	Trámites académicos (Kardex)	texto
contacto_form_categoria_02_etiqueta	/contacto	Pasantías y titulación	texto
contacto_form_categoria_03_etiqueta	/contacto	Investigación y revista (IETA)	texto
contacto_form_categoria_04_etiqueta	/contacto	Soporte técnico SIA	texto
contacto_form_categoria_05_etiqueta	/contacto	Otras consultas	texto
contacto_form_campo_nombre	/contacto	Nombre completo	texto
contacto_form_campo_correo	/contacto	Correo electrónico	texto
contacto_form_campo_categoria	/contacto	Tipo de consulta	texto
contacto_form_campo_ru	/contacto	Registro Universitario (RU) - opcional	texto
contacto_form_campo_mensaje	/contacto	Mensaje	texto
contacto_form_placeholder_nombre	/contacto	Ej. Juan Pérez	texto
contacto_form_placeholder_correo	/contacto	ejemplo@correo.com	texto
contacto_form_placeholder_categoria	/contacto	Selecciona el área...	texto
contacto_form_placeholder_ru	/contacto	Ej. 1234567	texto
contacto_form_placeholder_mensaje	/contacto	Escribe los detalles de tu consulta aquí...	texto
contacto_form_mensaje_exito	/contacto	Mensaje enviado correctamente. El equipo de soporte se pondrá en contacto pronto.	texto
contacto_tel_titulo	/contacto	Central telefónica	texto
contacto_correo_titulo	/contacto	Correos oficiales	texto
contacto_tel_01_unidad	/contacto	Secretaría de Dirección	texto
contacto_tel_01_rol	/contacto	Atención general de la carrera	texto
contacto_tel_01_numero	/contacto	2442100	texto
contacto_tel_01_extension	/contacto	123	texto
contacto_tel_01_numero_alterno	/contacto	2612915	texto
contacto_tel_02_unidad	/contacto	Kardex Académico	texto
contacto_tel_02_rol	/contacto	Récords, certificados y trámites	texto
contacto_tel_02_numero	/contacto	2442100	texto
contacto_tel_02_extension	/contacto	125	texto
contacto_tel_02_numero_alterno	/contacto		texto
contacto_tel_03_unidad	/contacto	Instituto IETA	texto
contacto_tel_03_rol	/contacto	Investigación y consultorías	texto
contacto_tel_03_numero	/contacto	2612824	texto
contacto_tel_03_extension	/contacto	N/A	texto
contacto_tel_03_numero_alterno	/contacto	2612844	texto
contacto_tel_04_unidad	/contacto	Biblioteca Especializada	texto
contacto_tel_04_rol	/contacto	Consultas y préstamos	texto
contacto_tel_04_numero	/contacto	2442100	texto
contacto_tel_04_extension	/contacto	130	texto
contacto_tel_04_numero_alterno	/contacto		texto
contacto_tel_05_unidad	/contacto	Centro de Estudiantes	texto
contacto_tel_05_rol	/contacto	Representación y eventos	texto
contacto_tel_05_numero	/contacto	76543210	texto
contacto_tel_05_extension	/contacto	Celular	texto
contacto_tel_05_numero_alterno	/contacto		texto
contacto_correo_01_unidad	/contacto	Consultas Generales	texto
contacto_correo_01_correo	/contacto	estadistica@umsa.bo	texto
contacto_correo_01_descripcion	/contacto	Consultas generales e información sobre la Carrera.	texto
contacto_correo_02_unidad	/contacto	Dirección de Carrera	texto
contacto_correo_02_correo	/contacto	direccion@estadistica.umsa.bo	texto
contacto_correo_02_descripcion	/contacto	Asuntos oficiales e institucionales.	texto
contacto_correo_03_unidad	/contacto	Kardex Académico	texto
contacto_correo_03_correo	/contacto	kardex@estadistica.umsa.bo	texto
contacto_correo_03_descripcion	/contacto	Envío de requisitos y consultas de trámites.	texto
contacto_correo_04_unidad	/contacto	Instituto IETA	texto
contacto_correo_04_correo	/contacto	ieta@umsa.bo	texto
contacto_correo_04_descripcion	/contacto	Recepción de papers y proyectos.	texto
contacto_correo_05_unidad	/contacto	Facebook Oficial	texto
contacto_correo_05_correo	/contacto	https://www.facebook.com/estadisticaumsa	texto
contacto_correo_05_descripcion	/contacto	Sigue nuestras publicaciones y transmisiones.	texto
contacto_sedes_etiqueta	/contacto	Campus universitario	texto
contacto_sedes_titulo	/contacto	Nuestras sedes	texto
contacto_sedes_subtitulo	/contacto	La Carrera de Estadística opera en ubicaciones estratégicas para docencia, investigación y atención estudiantil.	texto
contacto_sede_01_etiqueta	/contacto	Administración y pregrado	texto
contacto_sede_01_titulo	/contacto	Sede Central	texto
contacto_sede_01_mapa_titulo	/contacto	Mapa Monoblock UMSA	texto
contacto_sede_01_mapa_url	/contacto	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2638891040327!2d-68.13110902484643!3d-16.50570658423851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2066c6b3e34b%3A0x6b14207865f5ed0!2sUniversidad%20Mayor%20de%20San%20Andr%C3%A9s%20(UMSA)!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo	texto
contacto_sede_01_detalle_01	/contacto	Av. Villazón N° 1995, Plaza del Bicentenario. Edificio Viejo del Monoblock Central, 2do piso.	texto
contacto_sede_01_detalle_02	/contacto	Lunes a Viernes (08:00 - 16:00 hrs)	texto
contacto_sede_01_detalle_03	/contacto	Dirección, Kardex y aulas de pregrado.	texto
contacto_sede_02_etiqueta	/contacto	Laboratorios e IETA	texto
contacto_sede_02_titulo	/contacto	Sede Cota Cota	texto
contacto_sede_02_mapa_titulo	/contacto	Mapa Cota Cota UMSA	texto
contacto_sede_02_mapa_url	/contacto	https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.2372728919634!2d-68.06941192484521!3d-16.53932758421066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2122601a4e1d%3A0x6b14207865f5ed0!2sCampus%20Universitario%20UMSA%20Cota%20Cota!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo	texto
contacto_sede_02_detalle_01	/contacto	Calle 27 de Cota Cota, Campus Universitario. Edificio de la FCPN, 1er piso.	texto
contacto_sede_02_detalle_02	/contacto	Lunes a Viernes (09:00 - 17:00 hrs)	texto
contacto_sede_02_detalle_03	/contacto	Instituto IETA y laboratorios de cómputo.	texto
contacto_galeria_titulo_01	/contacto	Nuestros	texto
contacto_galeria_titulo_02	/contacto	espacios	texto
contacto_galeria_subtitulo	/contacto	Infraestructura para formación, análisis de datos e investigación aplicada.	texto
contacto_galeria_item_01_titulo	/contacto	Entrada principal de la Carrera	texto
contacto_galeria_item_01_subtitulo	/contacto	Monoblock Central	texto
contacto_galeria_item_01_imagen	/contacto	/images/contacto/espacio_monoblock.jpg	imagen
contacto_galeria_item_02_titulo	/contacto	Laboratorio de computación	texto
contacto_galeria_item_02_subtitulo	/contacto	Equipamiento especializado	texto
contacto_galeria_item_02_imagen	/contacto	/images/contacto/espacio_laboratorio.jpg	imagen
contacto_galeria_item_03_titulo	/contacto	Sala audiovisual	texto
contacto_galeria_item_03_subtitulo	/contacto	Defensas y seminarios	texto
contacto_galeria_item_03_imagen	/contacto	/images/contacto/sala_audiovisual.png	imagen
inicio_slide_01_subtitulo	/	FORMACIÓN PROFESIONAL DE EXCELENCIA	texto
inicio_slide_01_titulo	/	Licenciatura en Estadística de la UMSA	texto
inicio_slide_01_descripcion	/	Prepárate en análisis multivariante, modelado probabilístico, muestreo y ciencia de datos con el programa de pregrado de la carrera líder en Bolivia.	texto
inicio_slide_01_boton	/	Malla Curricular	texto
inicio_slide_01_etiqueta	/	🎓 PREGRADO ACADÉMICO	texto
inicio_slide_01_imagen	/	/images/inicio/imagen1.jpeg	imagen
inicio_slide_01_enlace_principal	/	/pregrado/malla-curricular	texto
inicio_slide_01_enlace_secundario	/	/pregrado/perfil-profesional	texto
inicio_slide_01_stat_01	/	n = 380+	texto
inicio_slide_01_stat_02	/	R² = 0.94	texto
inicio_slide_01_stat_03	/	σ = 1.05	texto
inicio_slide_02_subtitulo	/	INSTITUTO DE ESTADÍSTICA TEÓRICA Y APLICADA	texto
inicio_slide_02_titulo	/	Investigación Estadística y Consultoría con el IETA	texto
inicio_slide_02_descripcion	/	Desarrollamos modelos estadísticos avanzados y brindamos consultoría técnica especializada para resolver problemas socioeconómicos clave en Bolivia.	texto
inicio_slide_02_boton	/	Conocer el IETA	texto
inicio_slide_02_etiqueta	/	🔬 CIENCIA APLICADA Y PROYECTOS	texto
inicio_slide_02_imagen	/	/images/inicio/imagen2.png	imagen
inicio_slide_02_enlace_principal	/	/investigacion/acerca-ieta	texto
inicio_slide_02_enlace_secundario	/	/investigacion/proyectos	texto
inicio_slide_02_stat_01	/	R² = 0.98	texto
inicio_slide_02_stat_02	/	p < 0.001	texto
inicio_slide_02_stat_03	/	N = 100%	texto
inicio_slide_03_subtitulo	/	DIFUSIÓN Y PUBLICACIÓN CIENTÍFICA	texto
inicio_slide_03_titulo	/	Revista Científica Varianza	texto
inicio_slide_03_descripcion	/	Explora y lee los artículos de investigación estadística, metodologías probabilísticas y análisis cuantitativos publicados por docentes e investigadores.	texto
inicio_slide_03_boton	/	Leer Revista	texto
inicio_slide_03_etiqueta	/	📊 PUBLICACIÓN OFICIAL	texto
inicio_slide_03_imagen	/	/images/inicio/imagen3.jpeg	imagen
inicio_slide_03_enlace_principal	/	/investigacion/revista-varianza	texto
inicio_slide_03_enlace_secundario	/	/investigacion/autores-varianza	texto
inicio_slide_03_stat_01	/	ISSN = Activo	texto
inicio_slide_03_stat_02	/	Vol = 2026	texto
inicio_slide_03_stat_03	/	n = IETA	texto
inicio_acceso_01_titulo	/	Seguimiento de Egresados	texto
inicio_acceso_01_descripcion	/	Portal de empleabilidad	texto
inicio_acceso_01_enlace	/	/estudiantes/pasantias-bolsa-trabajo	texto
inicio_acceso_01_stat	/	Activo	texto
inicio_acceso_02_titulo	/	Olimpiadas de Estadística	texto
inicio_acceso_02_descripcion	/	Competencia académica	texto
inicio_acceso_02_enlace	/	#	texto
inicio_acceso_02_stat	/	2026	texto
inicio_acceso_03_titulo	/	Correo Institucional	texto
inicio_acceso_03_descripcion	/	Webmail UMSA	texto
inicio_acceso_03_enlace	/	https://correo.umsa.bo/	texto
inicio_acceso_03_stat	/	Office 365	texto
inicio_acceso_04_titulo	/	Biblioteca Especializada	texto
inicio_acceso_04_descripcion	/	Catálogo Koha UMSA	texto
inicio_acceso_04_enlace	/	https://koha.umsa.bo/catalog?collection=estadistica	texto
inicio_acceso_04_stat	/	Koha	texto
inicio_stat_01_valor	/	92	texto
inicio_stat_01_sufijo	/	%	texto
inicio_stat_01_titulo	/	Empleabilidad<br/>Directa	texto
inicio_stat_01_descripcion	/	Egresados en puestos clave	texto
inicio_stat_02_valor	/	15	texto
inicio_stat_02_sufijo	/	:1	texto
inicio_stat_02_titulo	/	Ratio Estudiante<br/>Docente	texto
inicio_stat_02_descripcion	/	Atención personalizada	texto
inicio_stat_03_valor	/	25	texto
inicio_stat_03_sufijo	/	+	texto
inicio_stat_03_titulo	/	Investigaciones<br/>Publicadas	texto
inicio_stat_03_descripcion	/	Gestión 2025-2026	texto
inicio_stat_04_valor	/	A	texto
inicio_stat_04_sufijo	/	+	texto
inicio_stat_04_titulo	/	Acreditación<br/>Internacional	texto
inicio_stat_04_descripcion	/	Mercosur Educativo	texto
inicio_perfil_badge_valor	/	92	texto
inicio_perfil_badge_sufijo	/	%	texto
inicio_perfil_descripcion	/	Nuestros profesionales dominan el lenguaje de los datos. Están capacitados para liderar la transformación digital mediante el modelado matemático riguroso.	texto
inicio_rol_01_titulo	/	Analista de Riesgos	texto
inicio_rol_01_subtitulo	/	Sectores Bancarios y Seguros	texto
inicio_rol_02_titulo	/	Data Scientist	texto
inicio_rol_02_subtitulo	/	IA y Machine Learning Avanzado	texto
inicio_rol_03_titulo	/	Consultor Público	texto
inicio_rol_03_subtitulo	/	Políticas Basadas en Evidencia	texto
inicio_rol_04_titulo	/	Investigador	texto
inicio_rol_04_subtitulo	/	Desarrollo de Nuevas Metodologías	texto
inicio_ieta_eyebrow	/	IETA INVESTIGACIÓN	texto
inicio_ieta_titulo_01	/	CIENCIA	texto
inicio_ieta_titulo_02	/	APLICADA	texto
inicio_ieta_titulo_03	/	INSTITUTO	texto
inicio_ieta_titulo_04	/	IETA	texto
inicio_ieta_descripcion	/	El Instituto de Estadística Teórica y Aplicada (IETA) es el motor de investigación de nuestra facultad. Desarrollamos modelos de alta precisión para resolver desafíos críticos de Bolivia.	texto
inicio_ieta_imagen	/	/images/inicio/imagen4.jpeg	imagen
inicio_ieta_badge_etiqueta	/	R²	texto
inicio_ieta_badge_valor	/	0.98	texto
inicio_ieta_badge_subtitulo	/	Poder Predictivo	texto
inicio_ieta_proyecto_01_titulo	/	Modelado Multivariante	texto
inicio_ieta_proyecto_01_descripcion	/	Análisis de pobreza multidimensional con organismos internacionales.	texto
inicio_ieta_proyecto_02_titulo	/	Ciencia de Datos Pública	texto
inicio_ieta_proyecto_02_descripcion	/	Soporte técnico avanzado para el INE y UDAPE.	texto
inicio_ieta_boton_texto	/	Explorar Investigaciones	texto
inicio_ieta_boton_enlace	/	/investigacion/proyectos	texto
inicio_aliado_01_nombre	/	INE Bolivia	texto
inicio_aliado_01_sigla	/	INE	texto
inicio_aliado_02_nombre	/	Banco Central de Bolivia	texto
inicio_aliado_02_sigla	/	BCB	texto
inicio_aliado_03_nombre	/	Ministerio de Economía	texto
inicio_aliado_03_sigla	/	MEF	texto
inicio_aliado_04_nombre	/	UDAPE	texto
inicio_aliado_04_sigla	/	UDAPE	texto
inicio_aliado_05_nombre	/	Banco Mundial	texto
inicio_aliado_05_sigla	/	BM	texto
inicio_aliado_06_nombre	/	OPS / OMS	texto
inicio_aliado_06_sigla	/	OPS	texto
inicio_aliado_07_nombre	/	CEPAL	texto
inicio_aliado_07_sigla	/	CEPAL	texto
inicio_aliado_08_nombre	/	Banco BNB	texto
inicio_aliado_08_sigla	/	BNB	texto
inicio_aliado_09_nombre	/	UNFPA Bolivia	texto
inicio_aliado_09_sigla	/	UNFPA	texto
inicio_aliado_10_nombre	/	Ministerio de Salud	texto
inicio_aliado_10_sigla	/	MSD	texto
inicio_aliado_11_nombre	/	Banco Unión	texto
inicio_aliado_11_sigla	/	BU	texto
inicio_aliado_12_nombre	/	PNUD Bolivia	texto
inicio_aliado_12_sigla	/	PNUD	texto
inicio_servicio_01_titulo	/	Plan de Estudios	texto
inicio_servicio_01_descripcion	/	Consulta las materias, requisitos y la malla curricular vigente de la carrera de Estadística.	texto
inicio_servicio_01_enlace	/	/pregrado/malla-curricular	texto
inicio_servicio_02_titulo	/	Calendario Académico	texto
inicio_servicio_02_descripcion	/	Fechas oficiales para inscripciones, exámenes, defensas, recesos y feriados institucionales.	texto
inicio_servicio_02_enlace	/	/pregrado/calendario-academico	texto
inicio_servicio_03_titulo	/	Biblioteca Virtual	texto
inicio_servicio_03_descripcion	/	Catálogo completo en línea de libros y material de referencia científica para la carrera.	texto
inicio_servicio_03_enlace	/	/recursos/biblioteca	texto
inicio_servicio_04_titulo	/	Cybertesis UMSA	texto
inicio_servicio_04_descripcion	/	Buscador y repositorio digital para acceder a tesis y proyectos de grado aprobados.	texto
inicio_servicio_04_enlace	/	/recursos/tesis	texto
inicio_servicio_05_titulo	/	Convocatorias Oficiales	texto
inicio_servicio_05_descripcion	/	Avisos oficiales de auxiliaturas académicas de docencia e investigación de la carrera.	texto
inicio_servicio_05_enlace	/	/estudiantes/convocatorias-auxiliaturas	texto
inicio_servicio_06_titulo	/	Guía de Trámites	texto
inicio_servicio_06_descripcion	/	Requisitos y pasos a seguir para matriculación académica, reincorporaciones y traspasos.	texto
inicio_servicio_06_enlace	/	/estudiantes/guia-seguimiento-tramites	texto
inicio_servicio_07_titulo	/	Revista Varianza	texto
inicio_servicio_07_descripcion	/	Publicaciones científicas del Instituto de Estadística Teórica y Aplicada (IETA) para lectura directa.	texto
inicio_servicio_07_enlace	/	/investigacion/revista-varianza	texto
inicio_servicio_08_titulo	/	Proyectos del IETA	texto
inicio_servicio_08_descripcion	/	Explora las líneas de investigación, consultorías estadísticas y desarrollo académico activo.	texto
inicio_servicio_08_enlace	/	/investigacion/proyectos	texto
\.


--
-- Data for Name: tesis; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tesis (id, titulo, tipo, area, tutor, investigador, resumen, link) FROM stdin;
1	Aplicación práctica del análisis de correspondencia simple, en la interpretación de la gravedad de accidentes de trabajo en Bolivia: caso Instituto Nacional de Salud Ocupacional	Trabajo Dirigido	Análisis de correspondencia	Lic. Alizon Emilze Pérez Butrón	Pérez Butrón, Alizon Emilze	Introducción 2. Metodología 3. Aplicación 4. Conclusiones, aportes y recomendaciones finales sobre accidentabilidad laboral.	https://repositorio.umsa.bo/handle/123456789/5332
2	Clasificación mediante redes neuronales y conglomerados no jerárquicos de las condiciones de vida de los hogares de Bolivia	Tesis	Redes neuronales y minería	Dr. Ramiro Coa Clemente	Flores Rivero, Luis Fernando	Modelado no lineal y clasificación mediante mapas autoorganizados y redes feed-forward de condiciones de vida en Bolivia.	https://repositorio.umsa.bo/handle/123456789/5336
3	Estudio del impacto de la acreditación en el aprovechamiento académico de la Carrera de Ingeniería Agronómica por el método de suavización exponencial de Holt-Winters	Trabajo Dirigido	Series de tiempo y econometría	Lic. Alizon Emilze Pérez Butrón	Aramayo Muñoz, Thelma Paola	Pronóstico de aprovechamiento académico mediante métodos de suavización exponencial multivariante y evaluación institucional.	https://repositorio.umsa.bo/handle/123456789/17617
4	Diseño de encuestas tipo panel rotatorio con traslape parcial	Tesis	Muestreo probabilístico	M.Sc. William Cochran Quispe	Crespo Chuquimia, Mercy	Desarrollo analítico de varianzas compuestas en paneles rotativos y fórmulas de estimación óptima bajo traslape muestral.	https://repositorio.umsa.bo/handle/123456789/5330
\.


--
-- Name: administrativo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.administrativo_id_seq', 10, false);


--
-- Name: autor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.autor_id_seq', 10, true);


--
-- Name: auxiliar_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auxiliar_id_seq', 16, false);


--
-- Name: banco_datos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.banco_datos_id_seq', 3, true);


--
-- Name: convalida_Id_materia_act_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."convalida_Id_materia_act_seq"', 1, false);


--
-- Name: convenio_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.convenio_id_seq', 14, true);


--
-- Name: convocatoria_Id_convocatoria_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."convocatoria_Id_convocatoria_seq"', 2, true);


--
-- Name: convocatoria_auxiliatura_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.convocatoria_auxiliatura_id_seq', 3, true);


--
-- Name: datos_archivo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.datos_archivo_id_seq', 6, true);


--
-- Name: directivo_estudiante_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.directivo_estudiante_id_seq', 13, true);


--
-- Name: docente_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.docente_id_seq', 27, true);


--
-- Name: documento_digital_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.documento_digital_id_seq', 4, true);


--
-- Name: estudiante_autoridad_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estudiante_autoridad_id_seq', 1, true);


--
-- Name: evento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.evento_id_seq', 6, true);


--
-- Name: libro_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.libro_id_seq', 5, true);


--
-- Name: materia_pregrado_Id_materia_act_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."materia_pregrado_Id_materia_act_seq"', 51, true);


--
-- Name: matriz_cientifica_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.matriz_cientifica_id_seq', 4, true);


--
-- Name: modulo_id_modulo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modulo_id_modulo_seq', 20, true);


--
-- Name: noticia_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.noticia_id_seq', 8, true);


--
-- Name: pasantia_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pasantia_id_seq', 3, true);


--
-- Name: plan_estudios_Id_plan_estudio_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."plan_estudios_Id_plan_estudio_seq"', 2, true);


--
-- Name: programa_id_programa_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.programa_id_programa_seq', 5, true);


--
-- Name: publicaciones_estudiantiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.publicaciones_estudiantiles_id_seq', 4, true);


--
-- Name: revista_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.revista_id_seq', 4, true);


--
-- Name: tesis_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tesis_id_seq', 4, true);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: administrativo administrativo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrativo
    ADD CONSTRAINT administrativo_pkey PRIMARY KEY (id);


--
-- Name: autor autor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autor
    ADD CONSTRAINT autor_pkey PRIMARY KEY (id);


--
-- Name: auxiliar auxiliar_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auxiliar
    ADD CONSTRAINT auxiliar_pkey PRIMARY KEY (id);


--
-- Name: banco_datos banco_datos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.banco_datos
    ADD CONSTRAINT banco_datos_pkey PRIMARY KEY (id);


--
-- Name: convalida convalida_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convalida
    ADD CONSTRAINT convalida_pkey PRIMARY KEY ("Id_materia_act");


--
-- Name: convenio convenio_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convenio
    ADD CONSTRAINT convenio_pkey PRIMARY KEY (id);


--
-- Name: convocatoria_auxiliatura convocatoria_auxiliatura_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convocatoria_auxiliatura
    ADD CONSTRAINT convocatoria_auxiliatura_pkey PRIMARY KEY (id);


--
-- Name: convocatoria convocatoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.convocatoria
    ADD CONSTRAINT convocatoria_pkey PRIMARY KEY ("Id_convocatoria");


--
-- Name: datos_archivo datos_archivo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datos_archivo
    ADD CONSTRAINT datos_archivo_pkey PRIMARY KEY (id);


--
-- Name: directivo_estudiante directivo_estudiante_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.directivo_estudiante
    ADD CONSTRAINT directivo_estudiante_pkey PRIMARY KEY (id);


--
-- Name: docente docente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.docente
    ADD CONSTRAINT docente_pkey PRIMARY KEY (id);


--
-- Name: documento_digital documento_digital_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documento_digital
    ADD CONSTRAINT documento_digital_pkey PRIMARY KEY (id);


--
-- Name: estudiante_autoridad estudiante_autoridad_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estudiante_autoridad
    ADD CONSTRAINT estudiante_autoridad_pkey PRIMARY KEY (id);


--
-- Name: evento evento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento
    ADD CONSTRAINT evento_pkey PRIMARY KEY (id);


--
-- Name: incluye incluye_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incluye
    ADD CONSTRAINT incluye_pkey PRIMARY KEY ("Id_plan_estudio", "Id_materia_act");


--
-- Name: incluye_posgrado incluye_posgrado_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incluye_posgrado
    ADD CONSTRAINT incluye_posgrado_pkey PRIMARY KEY (id_modulo);


--
-- Name: libro libro_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.libro
    ADD CONSTRAINT libro_pkey PRIMARY KEY (id);


--
-- Name: materia_pregrado materia_pregrado_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.materia_pregrado
    ADD CONSTRAINT materia_pregrado_pkey PRIMARY KEY ("Id_materia_act");


--
-- Name: matriz_cientifica matriz_cientifica_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.matriz_cientifica
    ADD CONSTRAINT matriz_cientifica_pkey PRIMARY KEY (id);


--
-- Name: modulo modulo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modulo
    ADD CONSTRAINT modulo_pkey PRIMARY KEY (id_modulo);


--
-- Name: noticia noticia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.noticia
    ADD CONSTRAINT noticia_pkey PRIMARY KEY (id);


--
-- Name: organiza_posgrado organiza_posgrado_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.organiza_posgrado
    ADD CONSTRAINT organiza_posgrado_pkey PRIMARY KEY (id_programa, id_modulo);


--
-- Name: pasantia pasantia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pasantia
    ADD CONSTRAINT pasantia_pkey PRIMARY KEY (id);


--
-- Name: plan_estudios plan_estudios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plan_estudios
    ADD CONSTRAINT plan_estudios_pkey PRIMARY KEY ("Id_plan_estudio");


--
-- Name: programa programa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.programa
    ADD CONSTRAINT programa_pkey PRIMARY KEY (id_programa);


--
-- Name: publicaciones_estudiantiles publicaciones_estudiantiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicaciones_estudiantiles
    ADD CONSTRAINT publicaciones_estudiantiles_pkey PRIMARY KEY (id);


--
-- Name: revista revista_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revista
    ADD CONSTRAINT revista_pkey PRIMARY KEY (id);


--
-- Name: seccion_pagina seccion_pagina_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seccion_pagina
    ADD CONSTRAINT seccion_pagina_pkey PRIMARY KEY (clave_campo);


--
-- Name: tesis tesis_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tesis
    ADD CONSTRAINT tesis_pkey PRIMARY KEY (id);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: datos_archivo fk_datos_archivo_banco; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datos_archivo
    ADD CONSTRAINT fk_datos_archivo_banco FOREIGN KEY (id_banco_datos) REFERENCES public.banco_datos(id) ON DELETE CASCADE;


--
-- Name: libro fk_libro_autor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.libro
    ADD CONSTRAINT fk_libro_autor FOREIGN KEY (id_autor) REFERENCES public.autor(id) ON DELETE SET NULL;


--
-- Name: incluye incluye_Id_materia_act_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incluye
    ADD CONSTRAINT "incluye_Id_materia_act_fkey" FOREIGN KEY ("Id_materia_act") REFERENCES public.materia_pregrado("Id_materia_act") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: incluye incluye_Id_plan_estudio_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incluye
    ADD CONSTRAINT "incluye_Id_plan_estudio_fkey" FOREIGN KEY ("Id_plan_estudio") REFERENCES public.plan_estudios("Id_plan_estudio") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: incluye_posgrado incluye_posgrado_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incluye_posgrado
    ADD CONSTRAINT incluye_posgrado_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.modulo(id_modulo) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: organiza_posgrado organiza_posgrado_id_modulo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.organiza_posgrado
    ADD CONSTRAINT organiza_posgrado_id_modulo_fkey FOREIGN KEY (id_modulo) REFERENCES public.modulo(id_modulo) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: organiza_posgrado organiza_posgrado_id_programa_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.organiza_posgrado
    ADD CONSTRAINT organiza_posgrado_id_programa_fkey FOREIGN KEY (id_programa) REFERENCES public.programa(id_programa) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

