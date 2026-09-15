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
exports.PlantelController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/guards/auth.guard");
const plantel_service_1 = require("./plantel.service");
let PlantelController = class PlantelController {
    constructor(plantelService) {
        this.plantelService = plantelService;
    }
    findAll(tipo) {
        return this.plantelService.findAll(tipo);
    }
    create(tipo, data) {
        return this.plantelService.create(tipo, data);
    }
    update(tipo, id, data) {
        return this.plantelService.update(tipo, id, data);
    }
    remove(tipo, id) {
        return this.plantelService.remove(tipo, id);
    }
};
exports.PlantelController = PlantelController;
__decorate([
    (0, auth_guard_1.Public)(),
    (0, common_1.Get)(':tipo'),
    __param(0, (0, common_1.Param)('tipo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlantelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(':tipo'),
    __param(0, (0, common_1.Param)('tipo')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlantelController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':tipo/:id'),
    __param(0, (0, common_1.Param)('tipo')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", void 0)
], PlantelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':tipo/:id'),
    __param(0, (0, common_1.Param)('tipo')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], PlantelController.prototype, "remove", null);
exports.PlantelController = PlantelController = __decorate([
    (0, common_1.Controller)('plantel'),
    __metadata("design:paramtypes", [plantel_service_1.PlantelService])
], PlantelController);
//# sourceMappingURL=plantel.controller.js.map