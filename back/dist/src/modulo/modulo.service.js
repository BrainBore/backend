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
exports.ModuloService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ModuloService = class ModuloService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll(programaId) {
        const where = {};
        if (programaId !== undefined && !isNaN(programaId)) {
            where.organiza = {
                some: {
                    idPrograma: programaId,
                },
            };
        }
        return this.prismaService.modulo.findMany({
            where,
            orderBy: { idModulo: 'asc' },
            include: {
                incluye: true,
                organiza: {
                    include: {
                        programa: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.modulo.findUnique({
            where: { idModulo: id },
            include: {
                incluye: true,
                organiza: {
                    include: {
                        programa: true,
                    },
                },
            },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Módulo con ID ${id} no encontrado`);
        }
        return record;
    }
    async create(data) {
        try {
            const created = await this.prismaService.modulo.create({
                data: {
                    tituloModulo: data.tituloModulo,
                    numeroModulo: data.numeroModulo,
                },
            });
            if (data.horasPresencial !== undefined || data.horasInvestigacion !== undefined) {
                await this.prismaService.incluyePosgrado.create({
                    data: {
                        idModulo: created.idModulo,
                        horasPresencial: data.horasPresencial || '0 hrs',
                        horasInvestigacion: data.horasInvestigacion || '0 hrs',
                    },
                });
            }
            if (data.programaIds && Array.isArray(data.programaIds) && data.programaIds.length > 0) {
                await this.prismaService.organizaPosgrado.createMany({
                    data: data.programaIds.map((idPrograma) => ({
                        idPrograma: Number(idPrograma),
                        idModulo: created.idModulo,
                    })),
                    skipDuplicates: true,
                });
            }
            return this.findOne(created.idModulo);
        }
        catch (error) {
            if (error?.code === '23505') {
                throw new common_1.ConflictException('El módulo ya existe');
            }
            throw error;
        }
    }
    async update(id, data) {
        await this.findOne(id);
        try {
            await this.prismaService.modulo.update({
                where: { idModulo: id },
                data: {
                    ...(data.tituloModulo !== undefined && { tituloModulo: data.tituloModulo }),
                    ...(data.numeroModulo !== undefined && { numeroModulo: data.numeroModulo }),
                },
            });
            if (data.horasPresencial !== undefined || data.horasInvestigacion !== undefined) {
                await this.prismaService.incluyePosgrado.upsert({
                    where: { idModulo: id },
                    update: {
                        ...(data.horasPresencial !== undefined && { horasPresencial: data.horasPresencial }),
                        ...(data.horasInvestigacion !== undefined && { horasInvestigacion: data.horasInvestigacion }),
                    },
                    create: {
                        idModulo: id,
                        horasPresencial: data.horasPresencial || '0 hrs',
                        horasInvestigacion: data.horasInvestigacion || '0 hrs',
                    },
                });
            }
            if (data.programaIds !== undefined && Array.isArray(data.programaIds)) {
                await this.prismaService.organizaPosgrado.deleteMany({
                    where: { idModulo: id },
                });
                if (data.programaIds.length > 0) {
                    await this.prismaService.organizaPosgrado.createMany({
                        data: data.programaIds.map((idPrograma) => ({
                            idPrograma: Number(idPrograma),
                            idModulo: id,
                        })),
                        skipDuplicates: true,
                    });
                }
            }
            return this.findOne(id);
        }
        catch (error) {
            if (error?.code === '23505') {
                throw new common_1.ConflictException('Conflicto al actualizar el módulo');
            }
            throw error;
        }
    }
    async remove(id) {
        await this.findOne(id);
        await this.prismaService.modulo.delete({
            where: { idModulo: id },
        });
        return { success: true, message: `Módulo ${id} eliminado` };
    }
};
exports.ModuloService = ModuloService;
exports.ModuloService = ModuloService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ModuloService);
//# sourceMappingURL=modulo.service.js.map