import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface RevistaDto {
  titulo?: string;
  tipo?: string;
  publicacion?: string;
  autor?: string;
  descripcion?: string;
  link?: string;
}

@Injectable()
export class RevistaService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(search?: string, tipo?: string) {
    const where: any = {};
    if (search) {
      where.OR = [
        { titulo: { contains: search, mode: 'insensitive' } },
        { autor: { contains: search, mode: 'insensitive' } },
        { descripcion: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (tipo) {
      where.tipo = { contains: tipo, mode: 'insensitive' };
    }
    return this.prismaService.revista.findMany({
      where,
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.revista.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Revista con ID ${id} no encontrada`);
    }
    return record;
  }

  create(data: RevistaDto) {
    return this.prismaService.revista.create({
      data: {
        titulo: data.titulo,
        tipo: data.tipo,
        publicacion: data.publicacion,
        autor: data.autor,
        descripcion: data.descripcion,
        link: data.link,
      },
    });
  }

  async update(id: number, data: Partial<RevistaDto>) {
    await this.ensureExists(id);
    return this.prismaService.revista.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.revista.delete({
      where: { id },
    });
  }

  private async ensureExists(id: number) {
    const exists = await this.prismaService.revista.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!exists) {
      throw new NotFoundException(`Revista con ID ${id} no encontrada`);
    }
  }
}
