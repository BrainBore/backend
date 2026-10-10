import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface PublicacionesEstudiantilesDto {
  titulo: string;
  anio: number;
  autor: string;
  area: string;
}

@Injectable()
export class PublicacionesEstudiantilesService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(area?: string, anio?: number) {
    const where: any = {};
    if (area) {
      where.area = { contains: area, mode: 'insensitive' };
    }
    if (anio) {
      where.anio = Number(anio);
    }
    return this.prismaService.publicacionesEstudiantiles.findMany({
      where,
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.publicacionesEstudiantiles.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Publicación con ID ${id} no encontrada`);
    }
    return record;
  }

  create(data: PublicacionesEstudiantilesDto) {
    return this.executeWrite(() =>
      this.prismaService.publicacionesEstudiantiles.create({
        data: {
          titulo: data.titulo,
          anio: Number(data.anio),
          autor: data.autor,
          area: data.area,
        },
      }),
    );
  }

  async update(id: number, data: Partial<PublicacionesEstudiantilesDto>) {
    await this.ensureExists(id);
    return this.executeWrite(() =>
      this.prismaService.publicacionesEstudiantiles.update({
        where: { id },
        data: {
          ...(data.titulo !== undefined && { titulo: data.titulo }),
          ...(data.anio !== undefined && { anio: Number(data.anio) }),
          ...(data.autor !== undefined && { autor: data.autor }),
          ...(data.area !== undefined && { area: data.area }),
        },
      }),
    );
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.publicacionesEstudiantiles.delete({
      where: { id },
    });
  }

  private async ensureExists(id: number) {
    const exists = await this.prismaService.publicacionesEstudiantiles.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!exists) {
      throw new NotFoundException(`Publicación con ID ${id} no encontrada`);
    }
  }

  private async executeWrite<T>(action: () => Promise<T>): Promise<T> {
    try {
      return await action();
    } catch (error: any) {
      if (error?.code === 'P2002') {
        throw new ConflictException('Ya existe un registro con estos datos únicos');
      }
      throw error;
    }
  }
}
