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
exports.PublicacionesEstudiantilesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PublicacionesEstudiantilesService = class PublicacionesEstudiantilesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll(area, anio) {
        const where = {};
        if (area) {
            where.area = { contains: area, mode: 'insensitive' };
        }
        if (anio) {
            where.anio = Number(anio);
        }
        return this.prismaService.publicacionesEstudiantiles.findMany({
            where,
            orderBy: { id: 'asc' },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.publicacionesEstudiantiles.findUnique({
            where: { id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Publicación con ID ${id} no encontrada`);
        }
        return record;
    }
    create(data) {
        return this.executeWrite(() => this.prismaService.publicacionesEstudiantiles.create({
            data: {
                titulo: data.titulo,
                anio: Number(data.anio),
                autor: data.autor,
                area: data.area,
            },
        }));
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.executeWrite(() => this.prismaService.publicacionesEstudiantiles.update({
            where: { id },
            data: {
                ...(data.titulo !== undefined && { titulo: data.titulo }),
                ...(data.anio !== undefined && { anio: Number(data.anio) }),
                ...(data.autor !== undefined && { autor: data.autor }),
                ...(data.area !== undefined && { area: data.area }),
            },
        }));
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.publicacionesEstudiantiles.delete({
            where: { id },
        });
    }
    async ensureExists(id) {
        const exists = await this.prismaService.publicacionesEstudiantiles.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!exists) {
            throw new common_1.NotFoundException(`Publicación con ID ${id} no encontrada`);
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
exports.PublicacionesEstudiantilesService = PublicacionesEstudiantilesService;
exports.PublicacionesEstudiantilesService = PublicacionesEstudiantilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PublicacionesEstudiantilesService);
//# sourceMappingURL=publicaciones-estudiantiles.service.js.map