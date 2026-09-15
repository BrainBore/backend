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
exports.PlantelService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PlantelService = class PlantelService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll(tipo) {
        return this.getModel(tipo).findMany({ orderBy: { id: 'asc' } });
    }
    create(tipo, data) {
        return this.executeWrite(() => this.getModel(tipo).create({ data: this.validateData(tipo, data) }));
    }
    async update(tipo, id, data) {
        await this.ensureExists(tipo, id);
        return this.executeWrite(() => this.getModel(tipo).update({ where: { id }, data: this.validateData(tipo, data) }));
    }
    async remove(tipo, id) {
        await this.ensureExists(tipo, id);
        return this.getModel(tipo).delete({ where: { id } });
    }
    async ensureExists(tipo, id) {
        const record = await this.getModel(tipo).findUnique({ where: { id } });
        if (!record)
            throw new common_1.NotFoundException('Registro no encontrado');
    }
    getModel(tipo) {
        switch (tipo) {
            case 'docentes':
                return this.prismaService.docente;
            case 'administrativos':
                return this.prismaService.administrativo;
            case 'auxiliares':
                return this.prismaService.auxiliar;
            default:
                throw new common_1.BadRequestException('Tipo de plantel no válido');
        }
    }
    validateData(tipo, data) {
        if (tipo === 'auxiliares') {
            const validTypes = ['academico', 'investigacio', 'interaccion social'];
            if (!validTypes.includes(data.tipo)) {
                throw new common_1.BadRequestException('El tipo de auxiliatura no es válido');
            }
            const academicFields = ['materia', 'paralelo', 'diasAuxiliatura', 'horarioAuxiliatura', 'aula'];
            if (data.tipo === 'academico' && academicFields.some((field) => !data[field]?.trim())) {
                throw new common_1.BadRequestException('Las auxiliaturas académicas requieren los datos de materia, paralelo, días, horario y aula');
            }
            if (data.tipo !== 'academico') {
                return { ...data, materia: null, paralelo: null, diasAuxiliatura: null, horarioAuxiliatura: null, aula: null };
            }
            return data;
        }
        if (tipo !== 'docentes')
            return data;
        if (data.cargoAutoridad && !['Director(a) de Carrera', 'Director(a) Academico(a)', 'Estamendo Docente'].includes(data.cargoAutoridad)) {
            throw new common_1.BadRequestException('El cargo de autoridad no es válido');
        }
        if (!['Lic.', 'M. Sc.', 'Ph. D.'].includes(data.gradoAcademico)) {
            throw new common_1.BadRequestException('El grado académico debe ser Lic., M. Sc. o Ph. D.');
        }
        if (!['Titular', 'Interino'].includes(data.tipo)) {
            throw new common_1.BadRequestException('El tipo debe ser Titular o Interino');
        }
        if (data.resumenCv?.length > 500) {
            throw new common_1.BadRequestException('El resumen del CV no puede superar los 500 caracteres');
        }
        return data;
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
exports.PlantelService = PlantelService;
exports.PlantelService = PlantelService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlantelService);
//# sourceMappingURL=plantel.service.js.map