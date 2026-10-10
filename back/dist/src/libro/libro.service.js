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
exports.LibroService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LibroService = class LibroService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll(search, idAutor) {
        const where = {};
        if (search) {
            where.OR = [
                { titulo: { contains: search, mode: 'insensitive' } },
                { temas: { contains: search, mode: 'insensitive' } },
                { editor: { contains: search, mode: 'insensitive' } },
                { codigoIsbn: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (idAutor) {
            where.idAutor = idAutor;
        }
        return this.prismaService.libro.findMany({
            where,
            include: { autorRel: true },
            orderBy: { id: 'asc' },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.libro.findUnique({
            where: { id },
            include: { autorRel: true },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Libro con ID ${id} no encontrado`);
        }
        return record;
    }
    create(data) {
        return this.prismaService.libro.create({
            data: {
                titulo: data.titulo,
                editor: data.editor,
                descripcionFisica: data.descripcionFisica,
                codigoIsbn: data.codigoIsbn,
                calificacionDewey: data.calificacionDewey,
                temas: data.temas,
                link: data.link,
                idAutor: data.idAutor ? Number(data.idAutor) : null,
            },
            include: { autorRel: true },
        });
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.prismaService.libro.update({
            where: { id },
            data: {
                ...data,
                idAutor: data.idAutor !== undefined ? (data.idAutor ? Number(data.idAutor) : null) : undefined,
            },
            include: { autorRel: true },
        });
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.libro.delete({
            where: { id },
        });
    }
    async ensureExists(id) {
        const exists = await this.prismaService.libro.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!exists) {
            throw new common_1.NotFoundException(`Libro con ID ${id} no encontrado`);
        }
    }
};
exports.LibroService = LibroService;
exports.LibroService = LibroService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LibroService);
//# sourceMappingURL=libro.service.js.map