import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export const ALLOWED_ESTADOS = ['published', 'draft'] as const;

const REQUIRED_TEXT = ['color', 'categoria', 'titulo', 'hora', 'ubicacion'] as const;

export interface EventoDto {
  fecha: string;
  color: string;
  categoria: string;
  titulo: string;
  hora: string;
  ubicacion: string;
  estado?: string;
}

@Injectable()
export class EventoService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.evento.findMany({
      orderBy: [{ fecha: 'asc' }, { id: 'asc' }],
    });
  }

  findOne(id: number) {
    return this.prismaService.evento.findUnique({ where: { id } });
  }

  create(data: EventoDto) {
    const clean = this.buildData(data, true);
    return this.prismaService.evento.create({ data: clean as any });
  }

  async update(id: number, data: Partial<EventoDto>) {
    await this.ensureExists(id);
    const clean = this.buildData(data, false);
    return this.prismaService.evento.update({ where: { id }, data: clean as any });
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.evento.delete({ where: { id } });
  }

  private buildData(data: Partial<EventoDto>, isCreate: boolean) {
    const result: Record<string, any> = {};

    for (const field of REQUIRED_TEXT) {
      const value = data[field];
      if (value === undefined && !isCreate) continue;
      if (typeof value !== 'string' || !value.trim()) {
        throw new BadRequestException(`El campo "${field}" es obligatorio`);
      }
      result[field] = value.trim();
    }

    if (isCreate || data.fecha !== undefined) {
      result.fecha = this.parseDate(data.fecha, 'fecha');
    }

    if (isCreate || data.estado !== undefined) {
      const estado = data.estado ?? 'published';
      if (!ALLOWED_ESTADOS.includes(estado as any)) {
        throw new BadRequestException(
          `Estado inválido: "${estado}". Los estados permitidos son: ${ALLOWED_ESTADOS.join(', ')}`,
        );
      }
      result.estado = estado;
    }

    return result;
  }

  private parseDate(value: unknown, field: string): Date {
    if (typeof value !== 'string') {
      throw new BadRequestException(`El campo "${field}" es obligatorio (formato AAAA-MM-DD)`);
    }
    const day = value.trim().slice(0, 10);
    const date = new Date(`${day}T00:00:00.000Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(day) || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== day) {
      throw new BadRequestException(`Fecha inválida en "${field}": "${value}". Usa el formato AAAA-MM-DD`);
    }
    return date;
  }

  private async ensureExists(id: number) {
    const record = await this.prismaService.evento.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException('Evento no encontrado');
    }
  }
}