import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface AutorDto {
  nombre?: string;
  area?: string;
  tipo?: string;
  ubicacion?: string;
}

@Injectable()
export class AutorService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(search?: string, tipo?: string) {
    const where: any = {};
    if (search) {
      where.OR = [
        { nombre: { contains: search, mode: 'insensitive' } },
        { area: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (tipo) {
      where.tipo = { contains: tipo, mode: 'insensitive' };
    }
    return this.prismaService.autor.findMany({
      where,
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.autor.findUnique({
      where: { id },
      include: { libros: true },
    });
    if (!record) {
      throw new NotFoundException(`Autor con ID ${id} no encontrado`);
    }
    return record;
  }

  create(data: AutorDto) {
    return this.prismaService.autor.create({
      data: {
        nombre: data.nombre,
        area: data.area,
        tipo: data.tipo,
        ubicacion: data.ubicacion,
      },
    });
  }

  async update(id: number, data: Partial<AutorDto>) {
    await this.ensureExists(id);
    return this.prismaService.autor.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.autor.delete({
      where: { id },
    });
  }

  private async ensureExists(id: number) {
    const exists = await this.prismaService.autor.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!exists) {
      throw new NotFoundException(`Autor con ID ${id} no encontrado`);
    }
  }
}
