"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.EstudianteAutoridadScalarFieldEnum = exports.AuxiliarScalarFieldEnum = exports.AdministrativoScalarFieldEnum = exports.DocenteScalarFieldEnum = exports.SeccionPaginaScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    SeccionPagina: 'SeccionPagina',
    Docente: 'Docente',
    Administrativo: 'Administrativo',
    Auxiliar: 'Auxiliar',
    EstudianteAutoridad: 'EstudianteAutoridad'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password'
};
exports.SeccionPaginaScalarFieldEnum = {
    claveCampo: 'claveCampo',
    paginaSlug: 'paginaSlug',
    valor: 'valor',
    tipo: 'tipo'
};
exports.DocenteScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    gradoAcademico: 'gradoAcademico',
    tipo: 'tipo',
    resumenCv: 'resumenCv',
    correoInstitucional: 'correoInstitucional',
    cargoAutoridad: 'cargoAutoridad',
    imagen: 'imagen'
};
exports.AdministrativoScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    cargo: 'cargo',
    correoInstitucional: 'correoInstitucional',
    foto: 'foto'
};
exports.AuxiliarScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    tipo: 'tipo',
    foto: 'foto',
    materia: 'materia',
    paralelo: 'paralelo',
    diasAuxiliatura: 'diasAuxiliatura',
    horarioAuxiliatura: 'horarioAuxiliatura',
    aula: 'aula'
};
exports.EstudianteAutoridadScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    cargo: 'cargo',
    imagen: 'imagen'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map