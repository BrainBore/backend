import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly SeccionPagina: "SeccionPagina";
    readonly Docente: "Docente";
    readonly Administrativo: "Administrativo";
    readonly Auxiliar: "Auxiliar";
    readonly EstudianteAutoridad: "EstudianteAutoridad";
    readonly Convenio: "Convenio";
    readonly MateriaPregrado: "MateriaPregrado";
    readonly PlanEstudios: "PlanEstudios";
    readonly Incluye: "Incluye";
    readonly Convalida: "Convalida";
    readonly Convocatoria: "Convocatoria";
    readonly Programa: "Programa";
    readonly Modulo: "Modulo";
    readonly OrganizaPosgrado: "OrganizaPosgrado";
    readonly IncluyePosgrado: "IncluyePosgrado";
    readonly DirectivoEstudiante: "DirectivoEstudiante";
    readonly ConvocatoriaAuxiliatura: "ConvocatoriaAuxiliatura";
    readonly Pasantia: "Pasantia";
    readonly PublicacionesEstudiantiles: "PublicacionesEstudiantiles";
    readonly MatrizCientifica: "MatrizCientifica";
    readonly Autor: "Autor";
    readonly Libro: "Libro";
    readonly Revista: "Revista";
    readonly DocumentoDigital: "DocumentoDigital";
    readonly Tesis: "Tesis";
    readonly BancoDatos: "BancoDatos";
    readonly DatosArchivo: "DatosArchivo";
    readonly Noticia: "Noticia";
    readonly Evento: "Evento";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SeccionPaginaScalarFieldEnum: {
    readonly claveCampo: "claveCampo";
    readonly paginaSlug: "paginaSlug";
    readonly valor: "valor";
    readonly tipo: "tipo";
};
export type SeccionPaginaScalarFieldEnum = (typeof SeccionPaginaScalarFieldEnum)[keyof typeof SeccionPaginaScalarFieldEnum];
export declare const DocenteScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly gradoAcademico: "gradoAcademico";
    readonly tipo: "tipo";
    readonly resumenCv: "resumenCv";
    readonly correoInstitucional: "correoInstitucional";
    readonly cargoAutoridad: "cargoAutoridad";
    readonly imagen: "imagen";
};
export type DocenteScalarFieldEnum = (typeof DocenteScalarFieldEnum)[keyof typeof DocenteScalarFieldEnum];
export declare const AdministrativoScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly cargo: "cargo";
    readonly correoInstitucional: "correoInstitucional";
    readonly foto: "foto";
};
export type AdministrativoScalarFieldEnum = (typeof AdministrativoScalarFieldEnum)[keyof typeof AdministrativoScalarFieldEnum];
export declare const AuxiliarScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly tipo: "tipo";
    readonly foto: "foto";
    readonly materia: "materia";
    readonly paralelo: "paralelo";
    readonly diasAuxiliatura: "diasAuxiliatura";
    readonly horarioAuxiliatura: "horarioAuxiliatura";
    readonly aula: "aula";
};
export type AuxiliarScalarFieldEnum = (typeof AuxiliarScalarFieldEnum)[keyof typeof AuxiliarScalarFieldEnum];
export declare const EstudianteAutoridadScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly cargo: "cargo";
    readonly imagen: "imagen";
};
export type EstudianteAutoridadScalarFieldEnum = (typeof EstudianteAutoridadScalarFieldEnum)[keyof typeof EstudianteAutoridadScalarFieldEnum];
export declare const ConvenioScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly descripcion: "descripcion";
    readonly sector: "sector";
};
export type ConvenioScalarFieldEnum = (typeof ConvenioScalarFieldEnum)[keyof typeof ConvenioScalarFieldEnum];
export declare const MateriaPregradoScalarFieldEnum: {
    readonly idMateriaAct: "idMateriaAct";
    readonly siglaMateriaAct: "siglaMateriaAct";
    readonly nombreMateriaAct: "nombreMateriaAct";
    readonly horasMateria: "horasMateria";
    readonly prerrequisitos: "prerrequisitos";
    readonly semestre: "semestre";
};
export type MateriaPregradoScalarFieldEnum = (typeof MateriaPregradoScalarFieldEnum)[keyof typeof MateriaPregradoScalarFieldEnum];
export declare const PlanEstudiosScalarFieldEnum: {
    readonly idPlanEstudio: "idPlanEstudio";
    readonly nombrePlan: "nombrePlan";
};
export type PlanEstudiosScalarFieldEnum = (typeof PlanEstudiosScalarFieldEnum)[keyof typeof PlanEstudiosScalarFieldEnum];
export declare const IncluyeScalarFieldEnum: {
    readonly idPlanEstudio: "idPlanEstudio";
    readonly idMateriaAct: "idMateriaAct";
};
export type IncluyeScalarFieldEnum = (typeof IncluyeScalarFieldEnum)[keyof typeof IncluyeScalarFieldEnum];
export declare const ConvalidaScalarFieldEnum: {
    readonly idMateriaAct: "idMateriaAct";
    readonly idMateriaAntigua: "idMateriaAntigua";
    readonly nombreMateriaAntigua: "nombreMateriaAntigua";
    readonly siglaMateriaAntigua: "siglaMateriaAntigua";
};
export type ConvalidaScalarFieldEnum = (typeof ConvalidaScalarFieldEnum)[keyof typeof ConvalidaScalarFieldEnum];
export declare const ConvocatoriaScalarFieldEnum: {
    readonly idConvocatoria: "idConvocatoria";
    readonly periodoConvocatoria: "periodoConvocatoria";
    readonly descConvocatoria: "descConvocatoria";
    readonly insPreu: "insPreu";
    readonly insPsa: "insPsa";
    readonly fechaEntregaDocs: "fechaEntregaDocs";
    readonly matriculacionKardex: "matriculacionKardex";
};
export type ConvocatoriaScalarFieldEnum = (typeof ConvocatoriaScalarFieldEnum)[keyof typeof ConvocatoriaScalarFieldEnum];
export declare const ProgramaScalarFieldEnum: {
    readonly idPrograma: "idPrograma";
    readonly nombre: "nombre";
    readonly tipo: "tipo";
    readonly costo: "costo";
};
export type ProgramaScalarFieldEnum = (typeof ProgramaScalarFieldEnum)[keyof typeof ProgramaScalarFieldEnum];
export declare const ModuloScalarFieldEnum: {
    readonly idModulo: "idModulo";
    readonly tituloModulo: "tituloModulo";
    readonly numeroModulo: "numeroModulo";
};
export type ModuloScalarFieldEnum = (typeof ModuloScalarFieldEnum)[keyof typeof ModuloScalarFieldEnum];
export declare const OrganizaPosgradoScalarFieldEnum: {
    readonly idPrograma: "idPrograma";
    readonly idModulo: "idModulo";
};
export type OrganizaPosgradoScalarFieldEnum = (typeof OrganizaPosgradoScalarFieldEnum)[keyof typeof OrganizaPosgradoScalarFieldEnum];
export declare const IncluyePosgradoScalarFieldEnum: {
    readonly idModulo: "idModulo";
    readonly horasPresencial: "horasPresencial";
    readonly horasInvestigacion: "horasInvestigacion";
};
export type IncluyePosgradoScalarFieldEnum = (typeof IncluyePosgradoScalarFieldEnum)[keyof typeof IncluyePosgradoScalarFieldEnum];
export declare const DirectivoEstudianteScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly cargo: "cargo";
    readonly area: "area";
};
export type DirectivoEstudianteScalarFieldEnum = (typeof DirectivoEstudianteScalarFieldEnum)[keyof typeof DirectivoEstudianteScalarFieldEnum];
export declare const ConvocatoriaAuxiliaturaScalarFieldEnum: {
    readonly id: "id";
    readonly materia: "materia";
    readonly tipo: "tipo";
    readonly descripcion: "descripcion";
    readonly fechaPublicacion: "fechaPublicacion";
    readonly fechaCierre: "fechaCierre";
    readonly plazas: "plazas";
    readonly estado: "estado";
};
export type ConvocatoriaAuxiliaturaScalarFieldEnum = (typeof ConvocatoriaAuxiliaturaScalarFieldEnum)[keyof typeof ConvocatoriaAuxiliaturaScalarFieldEnum];
export declare const PasantiaScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly tipo: "tipo";
    readonly descripcion: "descripcion";
    readonly area: "area";
    readonly empresa: "empresa";
    readonly fechaCierre: "fechaCierre";
    readonly requisitos: "requisitos";
};
export type PasantiaScalarFieldEnum = (typeof PasantiaScalarFieldEnum)[keyof typeof PasantiaScalarFieldEnum];
export declare const PublicacionesEstudiantilesScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly anio: "anio";
    readonly autor: "autor";
    readonly area: "area";
};
export type PublicacionesEstudiantilesScalarFieldEnum = (typeof PublicacionesEstudiantilesScalarFieldEnum)[keyof typeof PublicacionesEstudiantilesScalarFieldEnum];
export declare const MatrizCientificaScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly descripcion: "descripcion";
    readonly autor: "autor";
};
export type MatrizCientificaScalarFieldEnum = (typeof MatrizCientificaScalarFieldEnum)[keyof typeof MatrizCientificaScalarFieldEnum];
export declare const AutorScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly area: "area";
    readonly tipo: "tipo";
    readonly ubicacion: "ubicacion";
};
export type AutorScalarFieldEnum = (typeof AutorScalarFieldEnum)[keyof typeof AutorScalarFieldEnum];
export declare const LibroScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly editor: "editor";
    readonly descripcionFisica: "descripcionFisica";
    readonly codigoIsbn: "codigoIsbn";
    readonly calificacionDewey: "calificacionDewey";
    readonly temas: "temas";
    readonly link: "link";
    readonly idAutor: "idAutor";
};
export type LibroScalarFieldEnum = (typeof LibroScalarFieldEnum)[keyof typeof LibroScalarFieldEnum];
export declare const RevistaScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly tipo: "tipo";
    readonly publicacion: "publicacion";
    readonly autor: "autor";
    readonly descripcion: "descripcion";
    readonly link: "link";
};
export type RevistaScalarFieldEnum = (typeof RevistaScalarFieldEnum)[keyof typeof RevistaScalarFieldEnum];
export declare const DocumentoDigitalScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly tipo: "tipo";
    readonly peso: "peso";
    readonly fechaActualizacion: "fechaActualizacion";
    readonly linkDescarga: "linkDescarga";
};
export type DocumentoDigitalScalarFieldEnum = (typeof DocumentoDigitalScalarFieldEnum)[keyof typeof DocumentoDigitalScalarFieldEnum];
export declare const TesisScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly tipo: "tipo";
    readonly area: "area";
    readonly tutor: "tutor";
    readonly investigador: "investigador";
    readonly resumen: "resumen";
    readonly link: "link";
};
export type TesisScalarFieldEnum = (typeof TesisScalarFieldEnum)[keyof typeof TesisScalarFieldEnum];
export declare const BancoDatosScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly tipo: "tipo";
    readonly fuente: "fuente";
    readonly anio: "anio";
    readonly resumen: "resumen";
};
export type BancoDatosScalarFieldEnum = (typeof BancoDatosScalarFieldEnum)[keyof typeof BancoDatosScalarFieldEnum];
export declare const DatosArchivoScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly formato: "formato";
    readonly peso: "peso";
    readonly linkDescarga: "linkDescarga";
    readonly idBancoDatos: "idBancoDatos";
};
export type DatosArchivoScalarFieldEnum = (typeof DatosArchivoScalarFieldEnum)[keyof typeof DatosArchivoScalarFieldEnum];
export declare const NoticiaScalarFieldEnum: {
    readonly id: "id";
    readonly categoria: "categoria";
    readonly color: "color";
    readonly fecha: "fecha";
    readonly titulo: "titulo";
    readonly extracto: "extracto";
    readonly imagenUrl: "imagenUrl";
    readonly tiempoLectura: "tiempoLectura";
    readonly enlace: "enlace";
    readonly estado: "estado";
    readonly fechaExpiracion: "fechaExpiracion";
};
export type NoticiaScalarFieldEnum = (typeof NoticiaScalarFieldEnum)[keyof typeof NoticiaScalarFieldEnum];
export declare const EventoScalarFieldEnum: {
    readonly id: "id";
    readonly fecha: "fecha";
    readonly color: "color";
    readonly categoria: "categoria";
    readonly titulo: "titulo";
    readonly hora: "hora";
    readonly ubicacion: "ubicacion";
    readonly estado: "estado";
};
export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
