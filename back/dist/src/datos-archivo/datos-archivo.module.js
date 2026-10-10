"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosArchivoModule = void 0;
const common_1 = require("@nestjs/common");
const datos_archivo_controller_1 = require("./datos-archivo.controller");
const datos_archivo_service_1 = require("./datos-archivo.service");
const prisma_module_1 = require("../prisma/prisma.module");
let DatosArchivoModule = class DatosArchivoModule {
};
exports.DatosArchivoModule = DatosArchivoModule;
exports.DatosArchivoModule = DatosArchivoModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [datos_archivo_controller_1.DatosArchivoController],
        providers: [datos_archivo_service_1.DatosArchivoService],
        exports: [datos_archivo_service_1.DatosArchivoService],
    })
], DatosArchivoModule);
//# sourceMappingURL=datos-archivo.module.js.map