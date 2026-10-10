"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoDatosModule = void 0;
const common_1 = require("@nestjs/common");
const banco_datos_controller_1 = require("./banco-datos.controller");
const banco_datos_service_1 = require("./banco-datos.service");
const prisma_module_1 = require("../prisma/prisma.module");
let BancoDatosModule = class BancoDatosModule {
};
exports.BancoDatosModule = BancoDatosModule;
exports.BancoDatosModule = BancoDatosModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [banco_datos_controller_1.BancoDatosController],
        providers: [banco_datos_service_1.BancoDatosService],
        exports: [banco_datos_service_1.BancoDatosService],
    })
], BancoDatosModule);
//# sourceMappingURL=banco-datos.module.js.map