import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface ProgramaDto {
  nombre: string;
  tipo: string;
  costo: string;
  moduloIds?: number[];
}

@Injectable()
export class ProgramaService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(tipo?: string) {
    const where: any = {};
    if (tipo) {
      where.tipo = { contains: tipo, mode: 'insensitive' };
    }

    return this.prismaService.programa.findMany({
      where,
      orderBy: { idPrograma: 'asc' },
      include: {
        organiza: {
          include: {
            modulo: {
              include: {
                incluye: true,
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.programa.findUnique({
      where: { idPrograma: id },
      include: {
        organiza: {
          include: {
            modulo: {
              include: {
                incluye: true,
              },
            },
          },
        },
      },
    });

    if (!record) {
      throw new NotFoundException(`Programa con ID ${id} no encontrado`);
    }

    return record;
  }

  async create(data: ProgramaDto) {
    try {
      const created = await this.prismaService.programa.create({
        data: {
          nombre: data.nombre,
          tipo: data.tipo,
          costo: data.costo,
        },
      });

      if (data.moduloIds && Array.isArray(data.moduloIds) && data.moduloIds.length > 0) {
        await this.prismaService.organizaPosgrado.createMany({
          data: data.moduloIds.map((idModulo) => ({
            idPrograma: created.idPrograma,
            idModulo: Number(idModulo),
          })),
          skipDuplicates: true,
        });
      }

      return this.findOne(created.idPrograma);
    } catch (error) {
      if (error?.code === '23505') {
        throw new ConflictException('El programa ya existe');
      }
      throw error;
    }
  }

  async update(id: number, data: Partial<ProgramaDto>) {
    await this.findOne(id);

    try {
      await this.prismaService.programa.update({
        where: { idPrograma: id },
        data: {
          ...(data.nombre !== undefined && { nombre: data.nombre }),
          ...(data.tipo !== undefined && { tipo: data.tipo }),
          ...(data.costo !== undefined && { costo: data.costo }),
        },
      });

      if (data.moduloIds !== undefined && Array.isArray(data.moduloIds)) {
        await this.prismaService.organizaPosgrado.deleteMany({
          where: { idPrograma: id },
        });

        if (data.moduloIds.length > 0) {
          await this.prismaService.organizaPosgrado.createMany({
            data: data.moduloIds.map((idModulo) => ({
              idPrograma: id,
              idModulo: Number(idModulo),
            })),
            skipDuplicates: true,
          });
        }
      }

      return this.findOne(id);
    } catch (error) {
      if (error?.code === '23505') {
        throw new ConflictException('Conflicto al actualizar el programa');
      }
      throw error;
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prismaService.programa.delete({
      where: { idPrograma: id },
    });
    return { success: true, message: `Programa ${id} eliminado` };
  }
}
