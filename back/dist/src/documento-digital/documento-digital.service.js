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
exports.DocumentoDigitalService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DocumentoDigitalService = class DocumentoDigitalService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll(search, tipo) {
        const where = {};
        if (search) {
            where.OR = [
                { titulo: { contains: search, mode: 'insensitive' } },
                { tipo: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (tipo) {
            where.tipo = { contains: tipo, mode: 'insensitive' };
        }
        return this.prismaService.documentoDigital.findMany({
            where,
            orderBy: { id: 'asc' },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.documentoDigital.findUnique({
            where: { id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Documento digital con ID ${id} no encontrado`);
        }
        return record;
    }
    create(data) {
        return this.prismaService.documentoDigital.create({
            data: {
                titulo: data.titulo,
                tipo: data.tipo,
                peso: data.peso,
                fechaActualizacion: data.fechaActualizacion ? new Date(data.fechaActualizacion) : null,
                linkDescarga: data.linkDescarga,
            },
        });
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.prismaService.documentoDigital.update({
            where: { id },
            data: {
                ...data,
                fechaActualizacion: data.fechaActualizacion ? new Date(data.fechaActualizacion) : undefined,
            },
        });
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.documentoDigital.delete({
            where: { id },
        });
    }
    async ensureExists(id) {
        const exists = await this.prismaService.documentoDigital.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!exists) {
            throw new common_1.NotFoundException(`Documento digital con ID ${id} no encontrado`);
        }
    }
};
exports.DocumentoDigitalService = DocumentoDigitalService;
exports.DocumentoDigitalService = DocumentoDigitalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DocumentoDigitalService);
//# sourceMappingURL=documento-digital.service.js.map