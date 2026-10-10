"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesisModule = void 0;
const common_1 = require("@nestjs/common");
const tesis_controller_1 = require("./tesis.controller");
const tesis_service_1 = require("./tesis.service");
const prisma_module_1 = require("../prisma/prisma.module");
let TesisModule = class TesisModule {
};
exports.TesisModule = TesisModule;
exports.TesisModule = TesisModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [tesis_controller_1.TesisController],
        providers: [tesis_service_1.TesisService],
        exports: [tesis_service_1.TesisService],
    })
], TesisModule);
//# sourceMappingURL=tesis.module.js.map