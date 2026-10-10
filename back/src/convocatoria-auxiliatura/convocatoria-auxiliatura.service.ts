import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface ConvocatoriaAuxiliaturaDto {
  materia: string;
  tipo: string;
  descripcion: string;
  fechaPublicacion?: string | Date;
  fechaCierre?: string | Date;
  plazas: number;
  estado: string;
}

@Injectable()
export class ConvocatoriaAuxiliaturaService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(estado?: string, tipo?: string) {
    const where: any = {};
    if (estado) {
      where.estado = { contains: estado, mode: 'insensitive' };
    }
    if (tipo) {
      where.tipo = { contains: tipo, mode: 'insensitive' };
    }
    return this.prismaService.convocatoriaAuxiliatura.findMany({
      where,
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.convocatoriaAuxiliatura.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Convocatoria con ID ${id} no encontrada`);
    }
    return record;
  }

  create(data: ConvocatoriaAuxiliaturaDto) {
    return this.executeWrite(() =>
      this.prismaService.convocatoriaAuxiliatura.create({
        data: {
          materia: data.materia,
          tipo: data.tipo,
          descripcion: data.descripcion,
          fechaPublicacion: data.fechaPublicacion ? new Date(data.fechaPublicacion) : null,
          fechaCierre: data.fechaCierre ? new Date(data.fechaCierre) : null,
          plazas: Number(data.plazas) || 0,
          estado: data.estado,
        },
      }),
    );
  }

  async update(id: number, data: Partial<ConvocatoriaAuxiliaturaDto>) {
    await this.ensureExists(id);
    return this.executeWrite(() =>
      this.prismaService.convocatoriaAuxiliatura.update({
        where: { id },
        data: {
          ...(data.materia !== undefined && { materia: data.materia }),
          ...(data.tipo !== undefined && { tipo: data.tipo }),
          ...(data.descripcion !== undefined && { descripcion: data.descripcion }),
          ...(data.fechaPublicacion !== undefined && {
            fechaPublicacion: data.fechaPublicacion ? new Date(data.fechaPublicacion) : null,
          }),
          ...(data.fechaCierre !== undefined && {
            fechaCierre: data.fechaCierre ? new Date(data.fechaCierre) : null,
          }),
          ...(data.plazas !== undefined && { plazas: Number(data.plazas) }),
          ...(data.estado !== undefined && { estado: data.estado }),
        },
      }),
    );
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.convocatoriaAuxiliatura.delete({
      where: { id },
    });
  }

  private async ensureExists(id: number) {
    const exists = await this.prismaService.convocatoriaAuxiliatura.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!exists) {
      throw new NotFoundException(`Convocatoria con ID ${id} no encontrada`);
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
