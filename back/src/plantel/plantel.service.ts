import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export type PlantelTipo = 'docentes' | 'administrativos' | 'auxiliares';

@Injectable()
export class PlantelService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(tipo: PlantelTipo) {
    return this.getModel(tipo).findMany({ orderBy: { id: 'asc' } });
  }

  create(tipo: PlantelTipo, data: Record<string, string>) {
    return this.executeWrite(() => this.getModel(tipo).create({ data: this.validateData(tipo, data) as never }));
  }

  async update(tipo: PlantelTipo, id: number, data: Record<string, string>) {
    await this.ensureExists(tipo, id);
    return this.executeWrite(() => this.getModel(tipo).update({ where: { id }, data: this.validateData(tipo, data) as never }));
  }

  async remove(tipo: PlantelTipo, id: number) {
    await this.ensureExists(tipo, id);
    return this.getModel(tipo).delete({ where: { id } });
  }

  private async ensureExists(tipo: PlantelTipo, id: number) {
    const record = await this.getModel(tipo).findUnique({ where: { id } });
    if (!record) throw new NotFoundException('Registro no encontrado');
  }

  private getModel(tipo: PlantelTipo): typeof this.prismaService.docente {
    switch (tipo) {
      case 'docentes':
        return this.prismaService.docente;
      case 'administrativos':
        return this.prismaService.administrativo as unknown as typeof this.prismaService.docente;
      case 'auxiliares':
        return this.prismaService.auxiliar as unknown as typeof this.prismaService.docente;
      default:
        throw new BadRequestException('Tipo de plantel no válido');
    }
  }

  private validateData(tipo: PlantelTipo, data: Record<string, string>) {
    if (tipo === 'auxiliares') {
      const validTypes = ['academico', 'investigacio', 'interaccion social'];
      if (!validTypes.includes(data.tipo)) {
        throw new BadRequestException('El tipo de auxiliatura no es válido');
      }

      const academicFields = ['materia', 'paralelo', 'diasAuxiliatura', 'horarioAuxiliatura', 'aula'];
      if (data.tipo === 'academico' && academicFields.some((field) => !data[field]?.trim())) {
        throw new BadRequestException('Las auxiliaturas académicas requieren los datos de materia, paralelo, días, horario y aula');
      }

      if (data.tipo !== 'academico') {
        return { ...data, materia: null, paralelo: null, diasAuxiliatura: null, horarioAuxiliatura: null, aula: null };
      }
      return data;
    }

    if (tipo !== 'docentes') return data;

    if (data.cargoAutoridad && !['Director(a) de Carrera', 'Director(a) Academico(a)', 'Estamendo Docente'].includes(data.cargoAutoridad)) {
      throw new BadRequestException('El cargo de autoridad no es válido');
    }

    if (!['Lic.', 'M. Sc.', 'Ph. D.'].includes(data.gradoAcademico)) {
      throw new BadRequestException('El grado académico debe ser Lic., M. Sc. o Ph. D.');
    }

    if (!['Titular', 'Interino'].includes(data.tipo)) {
      throw new BadRequestException('El tipo debe ser Titular o Interino');
    }

    if (data.resumenCv?.length > 500) {
      throw new BadRequestException('El resumen del CV no puede superar los 500 caracteres');
    }

    return data;
  }

  private async executeWrite<T>(operation: () => Promise<T>) {
    try {
      return await operation();
    } catch (error) {
      if (error?.code === 'P2002') {
        throw new ConflictException('Ya existe un registro con ese identificador');
      }
      throw error;
    }
  }
}