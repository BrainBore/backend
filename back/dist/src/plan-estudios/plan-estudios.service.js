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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanEstudiosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PlanEstudiosService = class PlanEstudiosService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        return this.prismaService.planEstudios.findMany({
            orderBy: { idPlanEstudio: 'asc' },
            include: {
                incluye: {
                    include: {
                        materia: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        const plan = await this.prismaService.planEstudios.findUnique({
            where: { idPlanEstudio: id },
            include: {
                incluye: {
                    include: {
                        materia: true,
                    },
                },
            },
        });
        if (!plan) {
            throw new common_1.NotFoundException(`Plan de estudios con ID ${id} no encontrado`);
        }
        return plan;
    }
    create(data) {
        return this.executeWrite(() => this.prismaService.planEstudios.create({
            data: {
                nombrePlan: data.nombrePlan,
            },
        }));
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.executeWrite(() => this.prismaService.planEstudios.update({
            where: { idPlanEstudio: id },
            data: {
                ...(data.nombrePlan && { nombrePlan: data.nombrePlan }),
            },
        }));
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.planEstudios.delete({
            where: { idPlanEstudio: id },
        });
    }
    async ensureExists(id) {
        const record = await this.prismaService.planEstudios.findUnique({
            where: { idPlanEstudio: id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Plan de estudios con ID ${id} no encontrado`);
        }
    }
    async executeWrite(operation) {
        try {
            return await operation();
        }
        catch (error) {
            if (error?.code === 'P2002') {
                throw new common_1.ConflictException('Ya existe un plan con ese identificador');
            }
            throw error;
        }
    }
};
exports.PlanEstudiosService = PlanEstudiosService;
exports.PlanEstudiosService = PlanEstudiosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlanEstudiosService);
//# sourceMappingURL=plan-estudios.service.js.map