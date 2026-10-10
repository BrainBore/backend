"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const prisma_module_1 = require("./prisma/prisma.module");
const plantel_module_1 = require("./plantel/plantel.module");
const estudiante_autoridad_module_1 = require("./estudiante-autoridad/estudiante-autoridad.module");
const seccion_pagina_module_1 = require("./seccion-pagina/seccion-pagina.module");
const users_module_1 = require("./users/users.module");
const convenio_module_1 = require("./convenio/convenio.module");
const plan_estudios_module_1 = require("./plan-estudios/plan-estudios.module");
const materia_pregrado_module_1 = require("./materia-pregrado/materia-pregrado.module");
const convalida_module_1 = require("./convalida/convalida.module");
const convocatoria_module_1 = require("./convocatoria/convocatoria.module");
const programa_module_1 = require("./programa/programa.module");
const modulo_module_1 = require("./modulo/modulo.module");
const upload_module_1 = require("./upload/upload.module");
const directivo_estudiante_module_1 = require("./directivo-estudiante/directivo-estudiante.module");
const convocatoria_auxiliatura_module_1 = require("./convocatoria-auxiliatura/convocatoria-auxiliatura.module");
const pasantia_module_1 = require("./pasantia/pasantia.module");
const publicaciones_estudiantiles_module_1 = require("./publicaciones-estudiantiles/publicaciones-estudiantiles.module");
const matriz_cientifica_module_1 = require("./matriz-cientifica/matriz-cientifica.module");
const autor_module_1 = require("./autor/autor.module");
const libro_module_1 = require("./libro/libro.module");
const revista_module_1 = require("./revista/revista.module");
const documento_digital_module_1 = require("./documento-digital/documento-digital.module");
const tesis_module_1 = require("./tesis/tesis.module");
const banco_datos_module_1 = require("./banco-datos/banco-datos.module");
const datos_archivo_module_1 = require("./datos-archivo/datos-archivo.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            plantel_module_1.PlantelModule,
            estudiante_autoridad_module_1.EstudianteAutoridadModule,
            seccion_pagina_module_1.SeccionPaginaModule,
            users_module_1.UsersModule,
            convenio_module_1.ConvenioModule,
            plan_estudios_module_1.PlanEstudiosModule,
            materia_pregrado_module_1.MateriaPregradoModule,
            convalida_module_1.ConvalidaModule,
            convocatoria_module_1.ConvocatoriaModule,
            programa_module_1.ProgramaModule,
            modulo_module_1.ModuloModule,
            upload_module_1.UploadModule,
            directivo_estudiante_module_1.DirectivoEstudianteModule,
            convocatoria_auxiliatura_module_1.ConvocatoriaAuxiliaturaModule,
            pasantia_module_1.PasantiaModule,
            publicaciones_estudiantiles_module_1.PublicacionesEstudiantilesModule,
            matriz_cientifica_module_1.MatrizCientificaModule,
            autor_module_1.AutorModule,
            libro_module_1.LibroModule,
            revista_module_1.RevistaModule,
            documento_digital_module_1.DocumentoDigitalModule,
            tesis_module_1.TesisModule,
            banco_datos_module_1.BancoDatosModule,
            datos_archivo_module_1.DatosArchivoModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map