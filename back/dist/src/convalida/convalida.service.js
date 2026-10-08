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
exports.ConvalidaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ConvalidaService = class ConvalidaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        return this.prismaService.convalida.findMany({
            orderBy: { idMateriaAct: 'asc' },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.convalida.findUnique({
            where: { idMateriaAct: id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Convalidación con ID ${id} no encontrada`);
        }
        return record;
    }
    create(data) {
        return this.executeWrite(() => this.prismaService.convalida.create({
            data: {
                idMateriaAct: Number(data.idMateriaAct),
                idMateriaAntigua: data.idMateriaAntigua ? Number(data.idMateriaAntigua) : null,
                nombreMateriaAntigua: data.nombreMateriaAntigua,
                siglaMateriaAntigua: data.siglaMateriaAntigua,
            },
        }));
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.executeWrite(() => this.prismaService.convalida.update({
            where: { idMateriaAct: id },
            data: {
                ...(data.idMateriaAntigua !== undefined && {
                    idMateriaAntigua: data.idMateriaAntigua ? Number(data.idMateriaAntigua) : null,
                }),
                ...(data.nombreMateriaAntigua && { nombreMateriaAntigua: data.nombreMateriaAntigua }),
                ...(data.siglaMateriaAntigua && { siglaMateriaAntigua: data.siglaMateriaAntigua }),
            },
        }));
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.convalida.delete({
            where: { idMateriaAct: id },
        });
    }
    async ensureExists(id) {
        const record = await this.prismaService.convalida.findUnique({
            where: { idMateriaAct: id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Convalidación con ID ${id} no encontrada`);
        }
    }
    async executeWrite(operation) {
        try {
            return await operation();
        }
        catch (error) {
            if (error?.code === 'P2002') {
                throw new common_1.ConflictException('Ya existe una convalidación para esa materia');
            }
            throw error;
        }
    }
};
exports.ConvalidaService = ConvalidaService;
exports.ConvalidaService = ConvalidaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConvalidaService);
//# sourceMappingURL=convalida.service.js.map