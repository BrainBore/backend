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
exports.ConvocatoriaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ConvocatoriaService = class ConvocatoriaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        return this.prismaService.convocatoria.findMany({
            orderBy: { idConvocatoria: 'asc' },
        });
    }
    async findOne(id) {
        const record = await this.prismaService.convocatoria.findUnique({
            where: { idConvocatoria: id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Convocatoria con ID ${id} no encontrada`);
        }
        return record;
    }
    create(data) {
        return this.executeWrite(() => this.prismaService.convocatoria.create({
            data: {
                periodoConvocatoria: data.periodoConvocatoria,
                descConvocatoria: data.descConvocatoria,
                insPreu: data.insPreu,
                insPsa: data.insPsa,
                fechaEntregaDocs: new Date(data.fechaEntregaDocs),
                matriculacionKardex: data.matriculacionKardex,
            },
        }));
    }
    async update(id, data) {
        await this.ensureExists(id);
        return this.executeWrite(() => this.prismaService.convocatoria.update({
            where: { idConvocatoria: id },
            data: {
                ...(data.periodoConvocatoria && { periodoConvocatoria: data.periodoConvocatoria }),
                ...(data.descConvocatoria && { descConvocatoria: data.descConvocatoria }),
                ...(data.insPreu && { insPreu: data.insPreu }),
                ...(data.insPsa && { insPsa: data.insPsa }),
                ...(data.fechaEntregaDocs && { fechaEntregaDocs: new Date(data.fechaEntregaDocs) }),
                ...(data.matriculacionKardex && { matriculacionKardex: data.matriculacionKardex }),
            },
        }));
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.convocatoria.delete({
            where: { idConvocatoria: id },
        });
    }
    async ensureExists(id) {
        const record = await this.prismaService.convocatoria.findUnique({
            where: { idConvocatoria: id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Convocatoria con ID ${id} no encontrada`);
        }
    }
    async executeWrite(operation) {
        try {
            return await operation();
        }
        catch (error) {
            if (error?.code === 'P2002') {
                throw new common_1.ConflictException('Ya existe una convocatoria con ese identificador');
            }
            throw error;
        }
    }
};
exports.ConvocatoriaService = ConvocatoriaService;
exports.ConvocatoriaService = ConvocatoriaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConvocatoriaService);
//# sourceMappingURL=convocatoria.service.js.map