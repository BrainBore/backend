import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface BancoDatosDto {
  titulo?: string;
  tipo?: string;
  fuente?: string;
  anio?: number;
  resumen?: string;
}

@Injectable()
export class BancoDatosService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(search?: string, tipo?: string) {
    const where: any = {};
    if (search) {
      where.OR = [
        { titulo: { contains: search, mode: 'insensitive' } },
        { fuente: { contains: search, mode: 'insensitive' } },
        { resumen: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (tipo) {
      where.tipo = { contains: tipo, mode: 'insensitive' };
    }
    return this.prismaService.bancoDatos.findMany({
      where,
      include: { archivos: true },
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.bancoDatos.findUnique({
      where: { id },
      include: { archivos: true },
    });
    if (!record) {
      throw new NotFoundException(`Banco de datos con ID ${id} no encontrado`);
    }
    return record;
  }

  create(data: BancoDatosDto) {
    return this.prismaService.bancoDatos.create({
      data: {
        titulo: data.titulo,
        tipo: data.tipo,
        fuente: data.fuente,
        anio: data.anio ? Number(data.anio) : null,
        resumen: data.resumen,
      },
      include: { archivos: true },
    });
  }

  async update(id: number, data: Partial<BancoDatosDto>) {
    await this.ensureExists(id);
    return this.prismaService.bancoDatos.update({
      where: { id },
      data: {
        ...data,
        anio: data.anio !== undefined ? (data.anio ? Number(data.anio) : null) : undefined,
      },
      include: { archivos: true },
    });
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.bancoDatos.delete({
      where: { id },
    });
  }

  private async ensureExists(id: number) {
    const exists = await this.prismaService.bancoDatos.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!exists) {
      throw new NotFoundException(`Banco de datos con ID ${id} no encontrado`);
    }
  }
}
