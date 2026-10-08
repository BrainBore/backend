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
exports.MateriaPregradoController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/guards/auth.guard");
const materia_pregrado_service_1 = require("./materia-pregrado.service");
let MateriaPregradoController = class MateriaPregradoController {
    constructor(materiaService) {
        this.materiaService = materiaService;
    }
    findAll(planId, semestre) {
        const parsedPlanId = planId ? parseInt(planId, 10) : undefined;
        const parsedSemestre = semestre ? parseInt(semestre, 10) : undefined;
        return this.materiaService.findAll(parsedPlanId, parsedSemestre);
    }
    findOne(id) {
        return this.materiaService.findOne(id);
    }
    create(data) {
        return this.materiaService.create(data);
    }
    update(id, data) {
        return this.materiaService.update(id, data);
    }
    remove(id) {
        return this.materiaService.remove(id);
    }
    assignPlan(id, planId) {
        return this.materiaService.assignPlan(id, planId);
    }
    unassignPlan(id, planId) {
        return this.materiaService.unassignPlan(id, planId);
    }
};
exports.MateriaPregradoController = MateriaPregradoController;
__decorate([
    (0, auth_guard_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('planId')),
    __param(1, (0, common_1.Query)('semestre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MateriaPregradoController.prototype, "findAll", null);
__decorate([
    (0, auth_guard_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MateriaPregradoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MateriaPregradoController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], MateriaPregradoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MateriaPregradoController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/plan/:planId'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('planId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], MateriaPregradoController.prototype, "assignPlan", null);
__decorate([
    (0, common_1.Delete)(':id/plan/:planId'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('planId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], MateriaPregradoController.prototype, "unassignPlan", null);
exports.MateriaPregradoController = MateriaPregradoController = __decorate([
    (0, common_1.Controller)('materia-pregrado'),
    __metadata("design:paramtypes", [materia_pregrado_service_1.MateriaPregradoService])
], MateriaPregradoController);
//# sourceMappingURL=materia-pregrado.controller.js.map