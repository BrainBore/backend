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
exports.NoticiaService = exports.ALLOWED_ESTADOS = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
exports.ALLOWED_ESTADOS = ['published', 'draft'];
const REQUIRED_TEXT = ['categoria', 'color', 'titulo', 'extracto', 'tiempoLectura', 'enlace'];
let NoticiaService = class NoticiaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        return this.prismaService.noticia.findMany({
            orderBy: [{ fecha: 'desc' }, { id: 'desc' }],
        });
    }
    findOne(id) {
        return this.prismaService.noticia.findUnique({ where: { id } });
    }
    create(data) {
        const clean = this.buildData(data, true);
        return this.prismaService.noticia.create({ data: clean });
    }
    async update(id, data) {
        await this.ensureExists(id);
        const clean = this.buildData(data, false);
        return this.prismaService.noticia.update({ where: { id }, data: clean });
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prismaService.noticia.delete({ where: { id } });
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
        if (data.imagenUrl !== undefined) {
            const url = typeof data.imagenUrl === 'string' ? data.imagenUrl.trim() : '';
            result.imagenUrl = url || null;
        }
        if (data.fechaExpiracion !== undefined) {
            const raw = data.fechaExpiracion;
            result.fechaExpiracion = raw === null || raw === '' ? null : this.parseDate(raw, 'fechaExpiracion');
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
        const record = await this.prismaService.noticia.findUnique({ where: { id } });
        if (!record) {
            throw new common_1.NotFoundException('Noticia no encontrada');
        }
    }
};
exports.NoticiaService = NoticiaService;
exports.NoticiaService = NoticiaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NoticiaService);
//# sourceMappingURL=noticia.service.js.map