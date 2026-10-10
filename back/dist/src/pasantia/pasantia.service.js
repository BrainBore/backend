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
exports.PasantiaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PasantiaService = class PasantiaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll(area, tipo) {
        const where = {};
        if (area) {
            where.area = { contains: area, mode: 'insensitive' };
        }
        if (tipo) {
            where.tipo = { contains: tipo, mode: 'insensitive' };
        }
        return this.prismaService.pasantia.findMany({
            where,
            orderBy: { id: 'asc' },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.pasantia.findUnique({
            where: { id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Pasantía con ID ${id} no encontrada`);
        }
        return record;
    }
    create(data) {
        return this.executeWrite(() => this.prismaService.pasantia.create({
            data: {
                titulo: data.titulo,
                tipo: data.tipo,
                descripcion: data.descripcion,
                area: data.area,
                empresa: data.empresa,
                fechaCierre: data.fechaCierre ? new Date(data.fechaCierre) : null,
                requisitos: data.requisitos,
            },
        }));
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.executeWrite(() => this.prismaService.pasantia.update({
            where: { id },
            data: {
                ...(data.titulo !== undefined && { titulo: data.titulo }),
                ...(data.tipo !== undefined && { tipo: data.tipo }),
                ...(data.descripcion !== undefined && { descripcion: data.descripcion }),
                ...(data.area !== undefined && { area: data.area }),
                ...(data.empresa !== undefined && { empresa: data.empresa }),
                ...(data.fechaCierre !== undefined && {
                    fechaCierre: data.fechaCierre ? new Date(data.fechaCierre) : null,
                }),
                ...(data.requisitos !== undefined && { requisitos: data.requisitos }),
            },
        }));
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.pasantia.delete({
            where: { id },
        });
    }
    async ensureExists(id) {
        const exists = await this.prismaService.pasantia.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!exists) {
            throw new common_1.NotFoundException(`Pasantía con ID ${id} no encontrada`);
        }
    }
    async executeWrite(action) {
        try {
            return await action();
        }
        catch (error) {
            if (error?.code === 'P2002') {
                throw new common_1.ConflictException('Ya existe un registro con estos datos únicos');
            }
            throw error;
        }
    }
};
exports.PasantiaService = PasantiaService;
exports.PasantiaService = PasantiaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PasantiaService);
//# sourceMappingURL=pasantia.service.js.map