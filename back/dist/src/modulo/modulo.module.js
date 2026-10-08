"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuloModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const modulo_controller_1 = require("./modulo.controller");
const modulo_service_1 = require("./modulo.service");
let ModuloModule = class ModuloModule {
};
exports.ModuloModule = ModuloModule;
exports.ModuloModule = ModuloModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [modulo_controller_1.ModuloController],
        providers: [modulo_service_1.ModuloService],
        exports: [modulo_service_1.ModuloService],
    })
], ModuloModule);
//# sourceMappingURL=modulo.module.js.map