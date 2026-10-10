import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface PasantiaDto {
  titulo: string;
  tipo: string;
  descripcion: string;
  area: string;
  empresa: string;
  fechaCierre?: string | Date;
  requisitos: string;
}

@Injectable()
export class PasantiaService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(area?: string, tipo?: string) {
    const where: any = {};
    if (area) {
      where.area = { contains: area, mode: 'insensitive' };
    }
    if (tipo) {
      where.tipo = { contains: tipo, mode: 'insensitive' };
    }
    return this.prismaService.pasantia.findMany({
      where,
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.pasantia.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Pasantía con ID ${id} no encontrada`);
    }
    return record;
  }

  create(data: PasantiaDto) {
    return this.executeWrite(() =>
      this.prismaService.pasantia.create({
        data: {
          titulo: data.titulo,
          tipo: data.tipo,
          descripcion: data.descripcion,
          area: data.area,
          empresa: data.empresa,
          fechaCierre: data.fechaCierre ? new Date(data.fechaCierre) : null,
          requisitos: data.requisitos,
        },
      }),
    );
  }

  async update(id: number, data: Partial<PasantiaDto>) {
    await this.ensureExists(id);
    return this.executeWrite(() =>
      this.prismaService.pasantia.update({
        where: { id },
        data: {
          ...(data.titulo !== undefined && { titulo: data.titulo }),
          ...(data.tipo !== undefined && { tipo: data.tipo }),
          ...(data.descripcion !== undefined && { descripcion: data.descripcion }),
          ...(data.area !== undefined && { area: data.area }),
          ...(data.empresa !== undefined && { empresa: data.empresa }),
          ...(data.fechaCierre !== undefined && {
            fechaCierre: data.fechaCierre ? new Date(data.fechaCierre) : null,
          }),
          ...(data.requisitos !== undefined && { requisitos: data.requisitos }),
        },
      }),
    );
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.pasantia.delete({
      where: { id },
    });
  }

  private async ensureExists(id: number) {
    const exists = await this.prismaService.pasantia.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!exists) {
      throw new NotFoundException(`Pasantía con ID ${id} no encontrada`);
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
