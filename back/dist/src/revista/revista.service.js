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
exports.RevistaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RevistaService = class RevistaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll(search, tipo) {
        const where = {};
        if (search) {
            where.OR = [
                { titulo: { contains: search, mode: 'insensitive' } },
                { autor: { contains: search, mode: 'insensitive' } },
                { descripcion: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (tipo) {
            where.tipo = { contains: tipo, mode: 'insensitive' };
        }
        return this.prismaService.revista.findMany({
            where,
            orderBy: { id: 'asc' },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.revista.findUnique({
            where: { id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Revista con ID ${id} no encontrada`);
        }
        return record;
    }
    create(data) {
        return this.prismaService.revista.create({
            data: {
                titulo: data.titulo,
                tipo: data.tipo,
                publicacion: data.publicacion,
                autor: data.autor,
                descripcion: data.descripcion,
                link: data.link,
            },
        });
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.prismaService.revista.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.revista.delete({
            where: { id },
        });
    }
    async ensureExists(id) {
        const exists = await this.prismaService.revista.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!exists) {
            throw new common_1.NotFoundException(`Revista con ID ${id} no encontrada`);
        }
    }
};
exports.RevistaService = RevistaService;
exports.RevistaService = RevistaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RevistaService);
//# sourceMappingURL=revista.service.js.map