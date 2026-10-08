"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramaModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const programa_controller_1 = require("./programa.controller");
const programa_service_1 = require("./programa.service");
let ProgramaModule = class ProgramaModule {
};
exports.ProgramaModule = ProgramaModule;
exports.ProgramaModule = ProgramaModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [programa_controller_1.ProgramaController],
        providers: [programa_service_1.ProgramaService],
        exports: [programa_service_1.ProgramaService],
    })
], ProgramaModule);
//# sourceMappingURL=programa.module.js.map