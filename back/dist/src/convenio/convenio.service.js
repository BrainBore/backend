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
exports.ConvenioService = exports.ALLOWED_SECTORS = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
exports.ALLOWED_SECTORS = [
    'Sector Publico',
    'Salud y Bienestar',
    'Org. Internacionales',
    'Consultoria',
];
let ConvenioService = class ConvenioService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        return this.prismaService.convenio.findMany({
            orderBy: { id: 'asc' },
        });
    }
    findOne(id) {
        return this.prismaService.convenio.findUnique({
            where: { id },
        });
    }
    create(data) {
        this.validateSector(data.sector);
        return this.executeWrite(() => this.prismaService.convenio.create({
            data: {
                titulo: data.titulo,
                descripcion: data.descripcion,
                sector: data.sector,
            },
        }));
    }
    async update(id, data) {
        await this.ensureExists(id);
        if (data.sector !== undefined) {
            this.validateSector(data.sector);
        }
        return this.executeWrite(() => this.prismaService.convenio.update({
            where: { id },
            data,
        }));
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.convenio.delete({
            where: { id },
        });
    }
    validateSector(sector) {
        if (!sector || !exports.ALLOWED_SECTORS.includes(sector)) {
            throw new common_1.BadRequestException(`Sector inválido: "${sector}". Los sectores permitidos son: ${exports.ALLOWED_SECTORS.join(', ')}`);
        }
    }
    async ensureExists(id) {
        const record = await this.prismaService.convenio.findUnique({ where: { id } });
        if (!record) {
            throw new common_1.NotFoundException('Convenio no encontrado');
        }
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
exports.ConvenioService = ConvenioService;
exports.ConvenioService = ConvenioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConvenioService);
//# sourceMappingURL=convenio.service.js.map