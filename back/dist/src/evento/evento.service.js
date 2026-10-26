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
exports.EventoService = exports.ALLOWED_ESTADOS = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
exports.ALLOWED_ESTADOS = ['published', 'draft'];
const REQUIRED_TEXT = ['color', 'categoria', 'titulo', 'hora', 'ubicacion'];
let EventoService = class EventoService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        return this.prismaService.evento.findMany({
            orderBy: [{ fecha: 'asc' }, { id: 'asc' }],
        });
    }
    findOne(id) {
        return this.prismaService.evento.findUnique({ where: { id } });
    }
    create(data) {
        const clean = this.buildData(data, true);
        return this.prismaService.evento.create({ data: clean });
    }
    async update(id, data) {
        await this.ensureExists(id);
        const clean = this.buildData(data, false);
        return this.prismaService.evento.update({ where: { id }, data: clean });
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.evento.delete({ where: { id } });
    }
    buildData(data, isCreate) {
        const result = {};
        for (const field of REQUIRED_TEXT) {
            const value = data[field];
            if (value === undefined && !isCreate)
                continue;
            if (typeof value !== 'string' || !value.trim()) {
                throw new common_1.BadRequestException(`El campo "${field}" es obligatorio`);
            }
            result[field] = value.trim();
        }
        if (isCreate || data.fecha !== undefined) {
            result.fecha = this.parseDate(data.fecha, 'fecha');
        }
        if (isCreate || data.estado !== undefined) {
            const estado = data.estado ?? 'published';
            if (!exports.ALLOWED_ESTADOS.includes(estado)) {
                throw new common_1.BadRequestException(`Estado inválido: "${estado}". Los estados permitidos son: ${exports.ALLOWED_ESTADOS.join(', ')}`);
            }
            result.estado = estado;
        }
        return result;
    }
    parseDate(value, field) {
        if (typeof value !== 'string') {
            throw new common_1.BadRequestException(`El campo "${field}" es obligatorio (formato AAAA-MM-DD)`);
        }
        const day = value.trim().slice(0, 10);
        const date = new Date(`${day}T00:00:00.000Z`);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(day) || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== day) {
            throw new common_1.BadRequestException(`Fecha inválida en "${field}": "${value}". Usa el formato AAAA-MM-DD`);
        }
        return date;
    }
    async ensureExists(id) {
        const record = await this.prismaService.evento.findUnique({ where: { id } });
        if (!record) {
            throw new common_1.NotFoundException('Evento no encontrado');
        }
    }
};
exports.EventoService = EventoService;
exports.EventoService = EventoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventoService);
//# sourceMappingURL=evento.service.js.map