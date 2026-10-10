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
exports.DatosArchivoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DatosArchivoService = class DatosArchivoService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll(search, idBancoDatos) {
        const where = {};
        if (search) {
            where.OR = [
                { titulo: { contains: search, mode: 'insensitive' } },
                { formato: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (idBancoDatos) {
            where.idBancoDatos = idBancoDatos;
        }
        return this.prismaService.datosArchivo.findMany({
            where,
            include: { bancoRel: true },
            orderBy: { id: 'asc' },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.datosArchivo.findUnique({
            where: { id },
            include: { bancoRel: true },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Archivo de datos con ID ${id} no encontrado`);
        }
        return record;
    }
    create(data) {
        return this.prismaService.datosArchivo.create({
            data: {
                titulo: data.titulo,
                formato: data.formato,
                peso: data.peso,
                linkDescarga: data.linkDescarga,
                idBancoDatos: data.idBancoDatos ? Number(data.idBancoDatos) : null,
            },
            include: { bancoRel: true },
        });
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.prismaService.datosArchivo.update({
            where: { id },
            data: {
                ...data,
                idBancoDatos: data.idBancoDatos !== undefined ? (data.idBancoDatos ? Number(data.idBancoDatos) : null) : undefined,
            },
            include: { bancoRel: true },
        });
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.datosArchivo.delete({
            where: { id },
        });
    }
    async ensureExists(id) {
        const exists = await this.prismaService.datosArchivo.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!exists) {
            throw new common_1.NotFoundException(`Archivo de datos con ID ${id} no encontrado`);
        }
    }
};
exports.DatosArchivoService = DatosArchivoService;
exports.DatosArchivoService = DatosArchivoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DatosArchivoService);
//# sourceMappingURL=datos-archivo.service.js.map