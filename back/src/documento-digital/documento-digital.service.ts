import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface DocumentoDigitalDto {
  titulo?: string;
  tipo?: string;
  peso?: string;
  fechaActualizacion?: string | Date;
  linkDescarga?: string;
}

@Injectable()
export class DocumentoDigitalService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(search?: string, tipo?: string) {
    const where: any = {};
    if (search) {
      where.OR = [
        { titulo: { contains: search, mode: 'insensitive' } },
        { tipo: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (tipo) {
      where.tipo = { contains: tipo, mode: 'insensitive' };
    }
    return this.prismaService.documentoDigital.findMany({
      where,
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.documentoDigital.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Documento digital con ID ${id} no encontrado`);
    }
    return record;
  }

  create(data: DocumentoDigitalDto) {
    return this.prismaService.documentoDigital.create({
      data: {
        titulo: data.titulo,
        tipo: data.tipo,
        peso: data.peso,
        fechaActualizacion: data.fechaActualizacion ? new Date(data.fechaActualizacion) : null,
        linkDescarga: data.linkDescarga,
      },
    });
  }

  async update(id: number, data: Partial<DocumentoDigitalDto>) {
    await this.ensureExists(id);
    return this.prismaService.documentoDigital.update({
      where: { id },
      data: {
        ...data,
        fechaActualizacion: data.fechaActualizacion ? new Date(data.fechaActualizacion) : undefined,
      },
    });
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.documentoDigital.delete({
      where: { id },
    });
  }

  private async ensureExists(id: number) {
    const exists = await this.prismaService.documentoDigital.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!exists) {
      throw new NotFoundException(`Documento digital con ID ${id} no encontrado`);
    }
  }
}
