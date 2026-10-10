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
exports.DirectivoEstudianteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DirectivoEstudianteService = class DirectivoEstudianteService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll(area) {
        const where = {};
        if (area) {
            where.area = { contains: area, mode: 'insensitive' };
        }
        return this.prismaService.directivoEstudiante.findMany({
            where,
            orderBy: { id: 'asc' },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.directivoEstudiante.findUnique({
            where: { id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Directivo con ID ${id} no encontrado`);
        }
        return record;
    }
    create(data) {
        return this.executeWrite(() => this.prismaService.directivoEstudiante.create({
            data: {
                nombre: data.nombre,
                cargo: data.cargo,
                area: data.area,
            },
        }));
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.executeWrite(() => this.prismaService.directivoEstudiante.update({
            where: { id },
            data: {
                ...(data.nombre && { nombre: data.nombre }),
                ...(data.cargo && { cargo: data.cargo }),
                ...(data.area && { area: data.area }),
            },
        }));
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.directivoEstudiante.delete({
            where: { id },
        });
    }
    async ensureExists(id) {
        const exists = await this.prismaService.directivoEstudiante.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!exists) {
            throw new common_1.NotFoundException(`Directivo con ID ${id} no encontrado`);
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
exports.DirectivoEstudianteService = DirectivoEstudianteService;
exports.DirectivoEstudianteService = DirectivoEstudianteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DirectivoEstudianteService);
//# sourceMappingURL=directivo-estudiante.service.js.map