import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface ModuloDto {
  tituloModulo: string;
  numeroModulo: string;
  programaIds?: number[];
  horasPresencial?: string;
  horasInvestigacion?: string;
}

@Injectable()
export class ModuloService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(programaId?: number) {
    const where: any = {};
    if (programaId !== undefined && !isNaN(programaId)) {
      where.organiza = {
        some: {
          idPrograma: programaId,
        },
      };
    }

    return this.prismaService.modulo.findMany({
      where,
      orderBy: { idModulo: 'asc' },
      include: {
        incluye: true,
        organiza: {
          include: {
            programa: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.modulo.findUnique({
      where: { idModulo: id },
      include: {
        incluye: true,
        organiza: {
          include: {
            programa: true,
          },
        },
      },
    });

    if (!record) {
      throw new NotFoundException(`Módulo con ID ${id} no encontrado`);
    }

    return record;
  }

  async create(data: ModuloDto) {
    try {
      const created = await this.prismaService.modulo.create({
        data: {
          tituloModulo: data.tituloModulo,
          numeroModulo: data.numeroModulo,
        },
      });

      // Si incluye horas presencial / investigacion
      if (data.horasPresencial !== undefined || data.horasInvestigacion !== undefined) {
        await this.prismaService.incluyePosgrado.create({
          data: {
            idModulo: created.idModulo,
            horasPresencial: data.horasPresencial || '0 hrs',
            horasInvestigacion: data.horasInvestigacion || '0 hrs',
          },
        });
      }

      // Asociar a programas
      if (data.programaIds && Array.isArray(data.programaIds) && data.programaIds.length > 0) {
        await this.prismaService.organizaPosgrado.createMany({
          data: data.programaIds.map((idPrograma) => ({
            idPrograma: Number(idPrograma),
            idModulo: created.idModulo,
          })),
          skipDuplicates: true,
        });
      }

      return this.findOne(created.idModulo);
    } catch (error) {
      if (error?.code === '23505') {
        throw new ConflictException('El módulo ya existe');
      }
      throw error;
    }
  }

  async update(id: number, data: Partial<ModuloDto>) {
    await this.findOne(id);

    try {
      await this.prismaService.modulo.update({
        where: { idModulo: id },
        data: {
          ...(data.tituloModulo !== undefined && { tituloModulo: data.tituloModulo }),
          ...(data.numeroModulo !== undefined && { numeroModulo: data.numeroModulo }),
        },
      });

      // Actualizar o crear incluye_posgrado
      if (data.horasPresencial !== undefined || data.horasInvestigacion !== undefined) {
        await this.prismaService.incluyePosgrado.upsert({
          where: { idModulo: id },
          update: {
            ...(data.horasPresencial !== undefined && { horasPresencial: data.horasPresencial }),
            ...(data.horasInvestigacion !== undefined && { horasInvestigacion: data.horasInvestigacion }),
          },
          create: {
            idModulo: id,
            horasPresencial: data.horasPresencial || '0 hrs',
            horasInvestigacion: data.horasInvestigacion || '0 hrs',
          },
        });
      }

      // Sincronizar programas
      if (data.programaIds !== undefined && Array.isArray(data.programaIds)) {
        await this.prismaService.organizaPosgrado.deleteMany({
          where: { idModulo: id },
        });

        if (data.programaIds.length > 0) {
          await this.prismaService.organizaPosgrado.createMany({
            data: data.programaIds.map((idPrograma) => ({
              idPrograma: Number(idPrograma),
              idModulo: id,
            })),
            skipDuplicates: true,
          });
        }
      }

      return this.findOne(id);
    } catch (error) {
      if (error?.code === '23505') {
        throw new ConflictException('Conflicto al actualizar el módulo');
      }
      throw error;
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prismaService.modulo.delete({
      where: { idModulo: id },
    });
    return { success: true, message: `Módulo ${id} eliminado` };
  }
}
