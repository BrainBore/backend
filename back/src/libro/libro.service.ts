import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface LibroDto {
  titulo?: string;
  editor?: string;
  descripcionFisica?: string;
  codigoIsbn?: string;
  calificacionDewey?: string;
  temas?: string;
  link?: string;
  idAutor?: number;
}

@Injectable()
export class LibroService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(search?: string, idAutor?: number) {
    const where: any = {};
    if (search) {
      where.OR = [
        { titulo: { contains: search, mode: 'insensitive' } },
        { temas: { contains: search, mode: 'insensitive' } },
        { editor: { contains: search, mode: 'insensitive' } },
        { codigoIsbn: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (idAutor) {
      where.idAutor = idAutor;
    }
    return this.prismaService.libro.findMany({
      where,
      include: { autorRel: true },
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.libro.findUnique({
      where: { id },
      include: { autorRel: true },
    });
    if (!record) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }
    return record;
  }

  create(data: LibroDto) {
    return this.prismaService.libro.create({
      data: {
        titulo: data.titulo,
        editor: data.editor,
        descripcionFisica: data.descripcionFisica,
        codigoIsbn: data.codigoIsbn,
        calificacionDewey: data.calificacionDewey,
        temas: data.temas,
        link: data.link,
        idAutor: data.idAutor ? Number(data.idAutor) : null,
      },
      include: { autorRel: true },
    });
  }

  async update(id: number, data: Partial<LibroDto>) {
    await this.ensureExists(id);
    return this.prismaService.libro.update({
      where: { id },
      data: {
        ...data,
        idAutor: data.idAutor !== undefined ? (data.idAutor ? Number(data.idAutor) : null) : undefined,
      },
      include: { autorRel: true },
    });
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.libro.delete({
      where: { id },
    });
  }

  private async ensureExists(id: number) {
    const exists = await this.prismaService.libro.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!exists) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }
  }
}
