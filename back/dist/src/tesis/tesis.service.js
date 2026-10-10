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
exports.TesisService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TesisService = class TesisService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll(search, tipo, area) {
        const where = {};
        if (search) {
            where.OR = [
                { titulo: { contains: search, mode: 'insensitive' } },
                { investigador: { contains: search, mode: 'insensitive' } },
                { tutor: { contains: search, mode: 'insensitive' } },
                { resumen: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (tipo) {
            where.tipo = { contains: tipo, mode: 'insensitive' };
        }
        if (area) {
            where.area = { contains: area, mode: 'insensitive' };
        }
        return this.prismaService.tesis.findMany({
            where,
            orderBy: { id: 'asc' },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.tesis.findUnique({
            where: { id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Tesis con ID ${id} no encontrada`);
        }
        return record;
    }
    create(data) {
        return this.prismaService.tesis.create({
            data: {
                titulo: data.titulo,
                tipo: data.tipo,
                area: data.area,
                tutor: data.tutor,
                investigador: data.investigador,
                resumen: data.resumen,
                link: data.link,
            },
        });
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.prismaService.tesis.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.tesis.delete({
            where: { id },
        });
    }
    async ensureExists(id) {
        const exists = await this.prismaService.tesis.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!exists) {
            throw new common_1.NotFoundException(`Tesis con ID ${id} no encontrada`);
        }
    }
};
exports.TesisService = TesisService;
exports.TesisService = TesisService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TesisService);
//# sourceMappingURL=tesis.service.js.map