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
