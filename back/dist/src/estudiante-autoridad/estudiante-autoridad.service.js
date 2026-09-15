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
exports.EstudianteAutoridadService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EstudianteAutoridadService = class EstudianteAutoridadService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        return this.prismaService.estudianteAutoridad.findMany({ orderBy: { id: 'asc' } });
    }
    create(data) {
        return this.executeWrite(() => this.prismaService.estudianteAutoridad.create({ data: data }));
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.executeWrite(() => this.prismaService.estudianteAutoridad.update({ where: { id }, data: data }));
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.estudianteAutoridad.delete({ where: { id } });
    }
    async ensureExists(id) {
        const record = await this.prismaService.estudianteAutoridad.findUnique({ where: { id } });
        if (!record)
            throw new common_1.NotFoundException('Registro no encontrado');
    }
    async executeWrite(operation) {
        try {
            return await operation();
        }
        catch (error) {
            if (error?.code === 'P2002') {
                throw new common_1.ConflictException('Ya existe un registro con ese identificador');
            }
            throw error;
        }
    }
};
exports.EstudianteAutoridadService = EstudianteAutoridadService;
exports.EstudianteAutoridadService = EstudianteAutoridadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EstudianteAutoridadService);
//# sourceMappingURL=estudiante-autoridad.service.js.map