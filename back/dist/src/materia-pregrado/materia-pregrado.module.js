"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaPregradoModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const materia_pregrado_controller_1 = require("./materia-pregrado.controller");
const materia_pregrado_service_1 = require("./materia-pregrado.service");
let MateriaPregradoModule = class MateriaPregradoModule {
};
exports.MateriaPregradoModule = MateriaPregradoModule;
exports.MateriaPregradoModule = MateriaPregradoModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [materia_pregrado_controller_1.MateriaPregradoController],
        providers: [materia_pregrado_service_1.MateriaPregradoService],
        exports: [materia_pregrado_service_1.MateriaPregradoService],
    })
], MateriaPregradoModule);
//# sourceMappingURL=materia-pregrado.module.js.map