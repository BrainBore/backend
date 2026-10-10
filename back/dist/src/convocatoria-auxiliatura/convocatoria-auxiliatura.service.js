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
exports.ConvocatoriaAuxiliaturaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ConvocatoriaAuxiliaturaService = class ConvocatoriaAuxiliaturaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll(estado, tipo) {
        const where = {};
        if (estado) {
            where.estado = { contains: estado, mode: 'insensitive' };
        }
        if (tipo) {
            where.tipo = { contains: tipo, mode: 'insensitive' };
        }
        return this.prismaService.convocatoriaAuxiliatura.findMany({
            where,
            orderBy: { id: 'asc' },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.convocatoriaAuxiliatura.findUnique({
            where: { id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Convocatoria con ID ${id} no encontrada`);
        }
        return record;
    }
    create(data) {
        return this.executeWrite(() => this.prismaService.convocatoriaAuxiliatura.create({
            data: {
                materia: data.materia,
                tipo: data.tipo,
                descripcion: data.descripcion,
                fechaPublicacion: data.fechaPublicacion ? new Date(data.fechaPublicacion) : null,
                fechaCierre: data.fechaCierre ? new Date(data.fechaCierre) : null,
                plazas: Number(data.plazas) || 0,
                estado: data.estado,
            },
        }));
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.executeWrite(() => this.prismaService.convocatoriaAuxiliatura.update({
            where: { id },
            data: {
                ...(data.materia !== undefined && { materia: data.materia }),
                ...(data.tipo !== undefined && { tipo: data.tipo }),
                ...(data.descripcion !== undefined && { descripcion: data.descripcion }),
                ...(data.fechaPublicacion !== undefined && {
                    fechaPublicacion: data.fechaPublicacion ? new Date(data.fechaPublicacion) : null,
                }),
                ...(data.fechaCierre !== undefined && {
                    fechaCierre: data.fechaCierre ? new Date(data.fechaCierre) : null,
                }),
                ...(data.plazas !== undefined && { plazas: Number(data.plazas) }),
                ...(data.estado !== undefined && { estado: data.estado }),
            },
        }));
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.convocatoriaAuxiliatura.delete({
            where: { id },
        });
    }
    async ensureExists(id) {
        const exists = await this.prismaService.convocatoriaAuxiliatura.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!exists) {
            throw new common_1.NotFoundException(`Convocatoria con ID ${id} no encontrada`);
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
exports.ConvocatoriaAuxiliaturaService = ConvocatoriaAuxiliaturaService;
exports.ConvocatoriaAuxiliaturaService = ConvocatoriaAuxiliaturaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConvocatoriaAuxiliaturaService);
//# sourceMappingURL=convocatoria-auxiliatura.service.js.map