"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.EventoScalarFieldEnum = exports.NoticiaScalarFieldEnum = exports.DatosArchivoScalarFieldEnum = exports.BancoDatosScalarFieldEnum = exports.TesisScalarFieldEnum = exports.DocumentoDigitalScalarFieldEnum = exports.RevistaScalarFieldEnum = exports.LibroScalarFieldEnum = exports.AutorScalarFieldEnum = exports.MatrizCientificaScalarFieldEnum = exports.PublicacionesEstudiantilesScalarFieldEnum = exports.PasantiaScalarFieldEnum = exports.ConvocatoriaAuxiliaturaScalarFieldEnum = exports.DirectivoEstudianteScalarFieldEnum = exports.IncluyePosgradoScalarFieldEnum = exports.OrganizaPosgradoScalarFieldEnum = exports.ModuloScalarFieldEnum = exports.ProgramaScalarFieldEnum = exports.ConvocatoriaScalarFieldEnum = exports.ConvalidaScalarFieldEnum = exports.IncluyeScalarFieldEnum = exports.PlanEstudiosScalarFieldEnum = exports.MateriaPregradoScalarFieldEnum = exports.ConvenioScalarFieldEnum = exports.EstudianteAutoridadScalarFieldEnum = exports.AuxiliarScalarFieldEnum = exports.AdministrativoScalarFieldEnum = exports.DocenteScalarFieldEnum = exports.SeccionPaginaScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
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
    EstudianteAutoridad: 'EstudianteAutoridad',
    Convenio: 'Convenio',
    MateriaPregrado: 'MateriaPregrado',
    PlanEstudios: 'PlanEstudios',
    Incluye: 'Incluye',
    Convalida: 'Convalida',
    Convocatoria: 'Convocatoria',
    Programa: 'Programa',
    Modulo: 'Modulo',
    OrganizaPosgrado: 'OrganizaPosgrado',
    IncluyePosgrado: 'IncluyePosgrado',
    DirectivoEstudiante: 'DirectivoEstudiante',
    ConvocatoriaAuxiliatura: 'ConvocatoriaAuxiliatura',
    Pasantia: 'Pasantia',
    PublicacionesEstudiantiles: 'PublicacionesEstudiantiles',
    MatrizCientifica: 'MatrizCientifica',
    Autor: 'Autor',
    Libro: 'Libro',
    Revista: 'Revista',
    DocumentoDigital: 'DocumentoDigital',
    Tesis: 'Tesis',
    BancoDatos: 'BancoDatos',
    DatosArchivo: 'DatosArchivo',
    Noticia: 'Noticia',
    Evento: 'Evento'
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
exports.ConvenioScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    sector: 'sector'
};
exports.MateriaPregradoScalarFieldEnum = {
    idMateriaAct: 'idMateriaAct',
    siglaMateriaAct: 'siglaMateriaAct',
    nombreMateriaAct: 'nombreMateriaAct',
    horasMateria: 'horasMateria',
    prerrequisitos: 'prerrequisitos',
    semestre: 'semestre'
};
exports.PlanEstudiosScalarFieldEnum = {
    idPlanEstudio: 'idPlanEstudio',
    nombrePlan: 'nombrePlan'
};
exports.IncluyeScalarFieldEnum = {
    idPlanEstudio: 'idPlanEstudio',
    idMateriaAct: 'idMateriaAct'
};
exports.ConvalidaScalarFieldEnum = {
    idMateriaAct: 'idMateriaAct',
    idMateriaAntigua: 'idMateriaAntigua',
    nombreMateriaAntigua: 'nombreMateriaAntigua',
    siglaMateriaAntigua: 'siglaMateriaAntigua'
};
exports.ConvocatoriaScalarFieldEnum = {
    idConvocatoria: 'idConvocatoria',
    periodoConvocatoria: 'periodoConvocatoria',
    descConvocatoria: 'descConvocatoria',
    insPreu: 'insPreu',
    insPsa: 'insPsa',
    fechaEntregaDocs: 'fechaEntregaDocs',
    matriculacionKardex: 'matriculacionKardex'
};
exports.ProgramaScalarFieldEnum = {
    idPrograma: 'idPrograma',
    nombre: 'nombre',
    tipo: 'tipo',
    costo: 'costo'
};
exports.ModuloScalarFieldEnum = {
    idModulo: 'idModulo',
    tituloModulo: 'tituloModulo',
    numeroModulo: 'numeroModulo'
};
exports.OrganizaPosgradoScalarFieldEnum = {
    idPrograma: 'idPrograma',
    idModulo: 'idModulo'
};
exports.IncluyePosgradoScalarFieldEnum = {
    idModulo: 'idModulo',
    horasPresencial: 'horasPresencial',
    horasInvestigacion: 'horasInvestigacion'
};
exports.DirectivoEstudianteScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    cargo: 'cargo',
    area: 'area'
};
exports.ConvocatoriaAuxiliaturaScalarFieldEnum = {
    id: 'id',
    materia: 'materia',
    tipo: 'tipo',
    descripcion: 'descripcion',
    fechaPublicacion: 'fechaPublicacion',
    fechaCierre: 'fechaCierre',
    plazas: 'plazas',
    estado: 'estado'
};
exports.PasantiaScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    tipo: 'tipo',
    descripcion: 'descripcion',
    area: 'area',
    empresa: 'empresa',
    fechaCierre: 'fechaCierre',
    requisitos: 'requisitos'
};
exports.PublicacionesEstudiantilesScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    anio: 'anio',
    autor: 'autor',
    area: 'area'
};
exports.MatrizCientificaScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    autor: 'autor'
};
exports.AutorScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    area: 'area',
    tipo: 'tipo',
    ubicacion: 'ubicacion'
};
exports.LibroScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    editor: 'editor',
    descripcionFisica: 'descripcionFisica',
    codigoIsbn: 'codigoIsbn',
    calificacionDewey: 'calificacionDewey',
    temas: 'temas',
    link: 'link',
    idAutor: 'idAutor'
};
exports.RevistaScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    tipo: 'tipo',
    publicacion: 'publicacion',
    autor: 'autor',
    descripcion: 'descripcion',
    link: 'link'
};
exports.DocumentoDigitalScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    tipo: 'tipo',
    peso: 'peso',
    fechaActualizacion: 'fechaActualizacion',
    linkDescarga: 'linkDescarga'
};
exports.TesisScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    tipo: 'tipo',
    area: 'area',
    tutor: 'tutor',
    investigador: 'investigador',
    resumen: 'resumen',
    link: 'link'
};
exports.BancoDatosScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    tipo: 'tipo',
    fuente: 'fuente',
    anio: 'anio',
    resumen: 'resumen'
};
exports.DatosArchivoScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    formato: 'formato',
    peso: 'peso',
    linkDescarga: 'linkDescarga',
    idBancoDatos: 'idBancoDatos'
};
exports.NoticiaScalarFieldEnum = {
    id: 'id',
    categoria: 'categoria',
    color: 'color',
    fecha: 'fecha',
    titulo: 'titulo',
    extracto: 'extracto',
    imagenUrl: 'imagenUrl',
    tiempoLectura: 'tiempoLectura',
    enlace: 'enlace',
    estado: 'estado',
    fechaExpiracion: 'fechaExpiracion'
};
exports.EventoScalarFieldEnum = {
    id: 'id',
    fecha: 'fecha',
    color: 'color',
    categoria: 'categoria',
    titulo: 'titulo',
    hora: 'hora',
    ubicacion: 'ubicacion',
    estado: 'estado'
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