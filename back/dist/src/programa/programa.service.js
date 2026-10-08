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
exports.ProgramaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProgramaService = class ProgramaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll(tipo) {
        const where = {};
        if (tipo) {
            where.tipo = { contains: tipo, mode: 'insensitive' };
        }
        return this.prismaService.programa.findMany({
            where,
            orderBy: { idPrograma: 'asc' },
            include: {
                organiza: {
                    include: {
                        modulo: {
                            include: {
                                incluye: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.programa.findUnique({
            where: { idPrograma: id },
            include: {
                organiza: {
                    include: {
                        modulo: {
                            include: {
                                incluye: true,
                            },
                        },
                    },
                },
            },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Programa con ID ${id} no encontrado`);
        }
        return record;
    }
    async create(data) {
        try {
            const created = await this.prismaService.programa.create({
                data: {
                    nombre: data.nombre,
                    tipo: data.tipo,
                    costo: data.costo,
                },
            });
            if (data.moduloIds && Array.isArray(data.moduloIds) && data.moduloIds.length > 0) {
                await this.prismaService.organizaPosgrado.createMany({
                    data: data.moduloIds.map((idModulo) => ({
                        idPrograma: created.idPrograma,
                        idModulo: Number(idModulo),
                    })),
                    skipDuplicates: true,
                });
            }
            return this.findOne(created.idPrograma);
        }
        catch (error) {
            if (error?.code === '23505') {
                throw new common_1.ConflictException('El programa ya existe');
            }
            throw error;
        }
    }
    async update(id, data) {
        await this.findOne(id);
        try {
            await this.prismaService.programa.update({
                where: { idPrograma: id },
                data: {
                    ...(data.nombre !== undefined && { nombre: data.nombre }),
                    ...(data.tipo !== undefined && { tipo: data.tipo }),
                    ...(data.costo !== undefined && { costo: data.costo }),
                },
            });
            if (data.moduloIds !== undefined && Array.isArray(data.moduloIds)) {
                await this.prismaService.organizaPosgrado.deleteMany({
                    where: { idPrograma: id },
                });
                if (data.moduloIds.length > 0) {
                    await this.prismaService.organizaPosgrado.createMany({
                        data: data.moduloIds.map((idModulo) => ({
                            idPrograma: id,
                            idModulo: Number(idModulo),
                        })),
                        skipDuplicates: true,
                    });
                }
            }
            return this.findOne(id);
        }
        catch (error) {
            if (error?.code === '23505') {
                throw new common_1.ConflictException('Conflicto al actualizar el programa');
            }
            throw error;
        }
    }
    async remove(id) {
        await this.findOne(id);
        await this.prismaService.programa.delete({
            where: { idPrograma: id },
        });
        return { success: true, message: `Programa ${id} eliminado` };
    }
};
exports.ProgramaService = ProgramaService;
exports.ProgramaService = ProgramaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProgramaService);
//# sourceMappingURL=programa.service.js.map