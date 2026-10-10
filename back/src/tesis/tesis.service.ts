import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface TesisDto {
  titulo?: string;
  tipo?: string;
  area?: string;
  tutor?: string;
  investigador?: string;
  resumen?: string;
  link?: string;
}

@Injectable()
export class TesisService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(search?: string, tipo?: string, area?: string) {
    const where: any = {};
    if (search) {
      where.OR = [
        { titulo: { contains: search, mode: 'insensitive' } },
        { investigador: { contains: search, mode: 'insensitive' } },
        { tutor: { contains: search, mode: 'insensitive' } },
        { resumen: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (tipo) {
      where.tipo = { contains: tipo, mode: 'insensitive' };
    }
    if (area) {
      where.area = { contains: area, mode: 'insensitive' };
    }
    return this.prismaService.tesis.findMany({
      where,
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.tesis.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Tesis con ID ${id} no encontrada`);
    }
    return record;
  }

  create(data: TesisDto) {
    return this.prismaService.tesis.create({
      data: {
        titulo: data.titulo,
        tipo: data.tipo,
        area: data.area,
        tutor: data.tutor,
        investigador: data.investigador,
        resumen: data.resumen,
        link: data.link,
      },
    });
  }

  async update(id: number, data: Partial<TesisDto>) {
    await this.ensureExists(id);
    return this.prismaService.tesis.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.tesis.delete({
      where: { id },
    });
  }

  private async ensureExists(id: number) {
    const exists = await this.prismaService.tesis.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!exists) {
      throw new NotFoundException(`Tesis con ID ${id} no encontrada`);
    }
  }
}
