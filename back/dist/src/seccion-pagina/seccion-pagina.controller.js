"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeccionPaginaController = void 0;
const common_1 = require("@nestjs/common");
const seccion_pagina_service_1 = require("./seccion-pagina.service");
const auth_guard_1 = require("../auth/guards/auth.guard");
let SeccionPaginaController = class SeccionPaginaController {
    constructor(seccionPaginaService) {
        this.seccionPaginaService = seccionPaginaService;
    }
    findAll() {
        return this.seccionPaginaService.findAll();
    }
    findOne(claveCampo) {
        return this.seccionPaginaService.findOne(claveCampo);
    }
    update(claveCampo, data) {
        return this.seccionPaginaService.update(claveCampo, data);
    }
    patch(claveCampo, data) {
        return this.seccionPaginaService.update(claveCampo, data);
    }
};
exports.SeccionPaginaController = SeccionPaginaController;
__decorate([
    (0, auth_guard_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SeccionPaginaController.prototype, "findAll", null);
__decorate([
    (0, auth_guard_1.Public)(),
    (0, common_1.Get)(':claveCampo'),
    __param(0, (0, common_1.Param)('claveCampo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeccionPaginaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':claveCampo'),
    __param(0, (0, common_1.Param)('claveCampo')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SeccionPaginaController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':claveCampo'),
    __param(0, (0, common_1.Param)('claveCampo')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SeccionPaginaController.prototype, "patch", null);
exports.SeccionPaginaController = SeccionPaginaController = __decorate([
    (0, common_1.Controller)('seccion-pagina'),
    __metadata("design:paramtypes", [seccion_pagina_service_1.SeccionPaginaService])
], SeccionPaginaController);
//# sourceMappingURL=seccion-pagina.controller.js.map