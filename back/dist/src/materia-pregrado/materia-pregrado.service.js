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
exports.MateriaPregradoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MateriaPregradoService = class MateriaPregradoService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll(planId, semestre) {
        const where = {};
        if (semestre !== undefined && !isNaN(semestre)) {
            where.semestre = semestre;
        }
        if (planId !== undefined && !isNaN(planId)) {
            where.incluye = {
                some: {
                    idPlanEstudio: planId,
                },
            };
        }
        return this.prismaService.materiaPregrado.findMany({
            where,
            orderBy: [{ semestre: 'asc' }, { siglaMateriaAct: 'asc' }],
            include: {
                incluye: {
                    include: {
                        planEstudio: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.materiaPregrado.findUnique({
            where: { idMateriaAct: id },
            include: {
                incluye: {
                    include: {
                        planEstudio: true,
                    },
                },
            },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Materia con ID ${id} no encontrada`);
        }
        return record;
    }
    async create(data) {
        return this.executeWrite(async () => {
            const created = await this.prismaService.materiaPregrado.create({
                data: {
                    siglaMateriaAct: data.siglaMateriaAct,
                    nombreMateriaAct: data.nombreMateriaAct,
                    horasMateria: Number(data.horasMateria) || 0,
                    prerrequisitos: data.prerrequisitos || 'Ninguno',
                    semestre: Number(data.semestre) || 1,
                },
            });
            if (data.planIds && Array.isArray(data.planIds) && data.planIds.length > 0) {
                await this.prismaService.incluye.createMany({
                    data: data.planIds.map((idPlanEstudio) => ({
                        idPlanEstudio: Number(idPlanEstudio),
                        idMateriaAct: created.idMateriaAct,
                    })),
                    skipDuplicates: true,
                });
            }
            return this.findOne(created.idMateriaAct);
        });
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.executeWrite(async () => {
            await this.prismaService.materiaPregrado.update({
                where: { idMateriaAct: id },
                data: {
                    ...(data.siglaMateriaAct !== undefined && { siglaMateriaAct: data.siglaMateriaAct }),
                    ...(data.nombreMateriaAct !== undefined && { nombreMateriaAct: data.nombreMateriaAct }),
                    ...(data.horasMateria !== undefined && { horasMateria: Number(data.horasMateria) }),
                    ...(data.prerrequisitos !== undefined && { prerrequisitos: data.prerrequisitos }),
                    ...(data.semestre !== undefined && { semestre: Number(data.semestre) }),
                },
            });
            if (data.planIds !== undefined && Array.isArray(data.planIds)) {
                await this.prismaService.incluye.deleteMany({
                    where: { idMateriaAct: id },
                });
                if (data.planIds.length > 0) {
                    await this.prismaService.incluye.createMany({
                        data: data.planIds.map((idPlanEstudio) => ({
                            idPlanEstudio: Number(idPlanEstudio),
                            idMateriaAct: id,
                        })),
                        skipDuplicates: true,
                    });
                }
            }
            return this.findOne(id);
        });
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.materiaPregrado.delete({
            where: { idMateriaAct: id },
        });
    }
    async assignPlan(idMateriaAct, idPlanEstudio) {
        await this.ensureExists(idMateriaAct);
        return this.prismaService.incluye.upsert({
            where: {
                idPlanEstudio_idMateriaAct: {
                    idPlanEstudio,
                    idMateriaAct,
                },
            },
            update: {},
            create: {
                idPlanEstudio,
                idMateriaAct,
            },
        });
    }
    async unassignPlan(idMateriaAct, idPlanEstudio) {
        return this.prismaService.incluye.deleteMany({
            where: {
                idPlanEstudio,
                idMateriaAct,
            },
        });
    }
    async ensureExists(id) {
        const record = await this.prismaService.materiaPregrado.findUnique({
            where: { idMateriaAct: id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Materia con ID ${id} no encontrada`);
        }
    }
    async executeWrite(operation) {
        try {
            return await operation();
        }
        catch (error) {
            if (error?.code === 'P2002') {
                throw new common_1.ConflictException('Ya existe un registro con ese identificador');
            }
            throw error;
        }
    }
};
exports.MateriaPregradoService = MateriaPregradoService;
exports.MateriaPregradoService = MateriaPregradoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MateriaPregradoService);
//# sourceMappingURL=materia-pregrado.service.js.map