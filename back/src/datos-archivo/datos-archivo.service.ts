import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface DatosArchivoDto {
  titulo?: string;
  formato?: string;
  peso?: string;
  linkDescarga?: string;
  idBancoDatos?: number;
}

@Injectable()
export class DatosArchivoService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(search?: string, idBancoDatos?: number) {
    const where: any = {};
    if (search) {
      where.OR = [
        { titulo: { contains: search, mode: 'insensitive' } },
        { formato: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (idBancoDatos) {
      where.idBancoDatos = idBancoDatos;
    }
    return this.prismaService.datosArchivo.findMany({
      where,
      include: { bancoRel: true },
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.datosArchivo.findUnique({
      where: { id },
      include: { bancoRel: true },
    });
    if (!record) {
      throw new NotFoundException(`Archivo de datos con ID ${id} no encontrado`);
    }
    return record;
  }

  create(data: DatosArchivoDto) {
    return this.prismaService.datosArchivo.create({
      data: {
        titulo: data.titulo,
        formato: data.formato,
        peso: data.peso,
        linkDescarga: data.linkDescarga,
        idBancoDatos: data.idBancoDatos ? Number(data.idBancoDatos) : null,
      },
      include: { bancoRel: true },
    });
  }

  async update(id: number, data: Partial<DatosArchivoDto>) {
    await this.ensureExists(id);
    return this.prismaService.datosArchivo.update({
      where: { id },
      data: {
        ...data,
        idBancoDatos: data.idBancoDatos !== undefined ? (data.idBancoDatos ? Number(data.idBancoDatos) : null) : undefined,
      },
      include: { bancoRel: true },
    });
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.datosArchivo.delete({
      where: { id },
    });
  }

  private async ensureExists(id: number) {
    const exists = await this.prismaService.datosArchivo.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!exists) {
      throw new NotFoundException(`Archivo de datos con ID ${id} no encontrado`);
    }
  }
}
