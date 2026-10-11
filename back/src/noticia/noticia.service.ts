import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export const ALLOWED_ESTADOS = ['published', 'draft'] as const;

const REQUIRED_TEXT = ['categoria', 'color', 'titulo', 'extracto', 'tiempoLectura', 'enlace'] as const;

export interface NoticiaDto {
  categoria: string;
  color: string;
  fecha: string;
  titulo: string;
  extracto: string;
  imagenUrl?: string | null;
  tiempoLectura: string;
  enlace: string;
  estado?: string;
  fechaExpiracion?: string | null;
}

@Injectable()
export class NoticiaService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.noticia.findMany({
      orderBy: [{ fecha: 'desc' }, { id: 'desc' }],
    });
  }

  findOne(id: number) {
    return this.prismaService.noticia.findUnique({ where: { id } });
  }

  create(data: NoticiaDto) {
    const clean = this.buildData(data, true);
    return this.prismaService.noticia.create({ data: clean as any });
  }

  async update(id: number, data: Partial<NoticiaDto>) {
    await this.ensureExists(id);
    const clean = this.buildData(data, false);
    return this.prismaService.noticia.update({ where: { id }, data: clean as any });
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.noticia.delete({ where: { id } });
  }

  private buildData(data: Partial<NoticiaDto>, isCreate: boolean) {
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
    const record = await this.prismaService.noticia.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException('Noticia no encontrada');
    }
  }
}