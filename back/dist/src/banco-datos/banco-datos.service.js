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
exports.BancoDatosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BancoDatosService = class BancoDatosService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll(search, tipo) {
        const where = {};
        if (search) {
            where.OR = [
                { titulo: { contains: search, mode: 'insensitive' } },
                { fuente: { contains: search, mode: 'insensitive' } },
                { resumen: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (tipo) {
            where.tipo = { contains: tipo, mode: 'insensitive' };
        }
        return this.prismaService.bancoDatos.findMany({
            where,
            include: { archivos: true },
            orderBy: { id: 'asc' },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.bancoDatos.findUnique({
            where: { id },
            include: { archivos: true },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Banco de datos con ID ${id} no encontrado`);
        }
        return record;
    }
    create(data) {
        return this.prismaService.bancoDatos.create({
            data: {
                titulo: data.titulo,
                tipo: data.tipo,
                fuente: data.fuente,
                anio: data.anio ? Number(data.anio) : null,
                resumen: data.resumen,
            },
            include: { archivos: true },
        });
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.prismaService.bancoDatos.update({
            where: { id },
            data: {
                ...data,
                anio: data.anio !== undefined ? (data.anio ? Number(data.anio) : null) : undefined,
            },
            include: { archivos: true },
        });
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.bancoDatos.delete({
            where: { id },
        });
    }
    async ensureExists(id) {
        const exists = await this.prismaService.bancoDatos.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!exists) {
            throw new common_1.NotFoundException(`Banco de datos con ID ${id} no encontrado`);
        }
    }
};
exports.BancoDatosService = BancoDatosService;
exports.BancoDatosService = BancoDatosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BancoDatosService);
//# sourceMappingURL=banco-datos.service.js.map