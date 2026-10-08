import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface MateriaPregradoDto {
  siglaMateriaAct: string;
  nombreMateriaAct: string;
  horasMateria: number;
  prerrequisitos: string;
  semestre: number;
  planIds?: number[];
}

@Injectable()
export class MateriaPregradoService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(planId?: number, semestre?: number) {
    const where: any = {};
    if (semestre !== undefined && !isNaN(semestre)) {
      where.semestre = semestre;
    }
    if (planId !== undefined && !isNaN(planId)) {
      where.incluye = {
        some: {
          idPlanEstudio: planId,
        },
      };
    }

    return this.prismaService.materiaPregrado.findMany({
      where,
      orderBy: [{ semestre: 'asc' }, { siglaMateriaAct: 'asc' }],
      include: {
        incluye: {
          include: {
            planEstudio: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.materiaPregrado.findUnique({
      where: { idMateriaAct: id },
      include: {
        incluye: {
          include: {
            planEstudio: true,
          },
        },
      },
    });
    if (!record) {
      throw new NotFoundException(`Materia con ID ${id} no encontrada`);
    }
    return record;
  }

  async create(data: MateriaPregradoDto) {
    return this.executeWrite(async () => {
      const created = await this.prismaService.materiaPregrado.create({
        data: {
          siglaMateriaAct: data.siglaMateriaAct,
          nombreMateriaAct: data.nombreMateriaAct,
          horasMateria: Number(data.horasMateria) || 0,
          prerrequisitos: data.prerrequisitos || 'Ninguno',
          semestre: Number(data.semestre) || 1,
        },
      });

      if (data.planIds && Array.isArray(data.planIds) && data.planIds.length > 0) {
        await this.prismaService.incluye.createMany({
          data: data.planIds.map((idPlanEstudio) => ({
            idPlanEstudio: Number(idPlanEstudio),
            idMateriaAct: created.idMateriaAct,
          })),
          skipDuplicates: true,
        });
      }

      return this.findOne(created.idMateriaAct);
    });
  }

  async update(id: number, data: Partial<MateriaPregradoDto>) {
    await this.ensureExists(id);

    return this.executeWrite(async () => {
      await this.prismaService.materiaPregrado.update({
        where: { idMateriaAct: id },
        data: {
          ...(data.siglaMateriaAct !== undefined && { siglaMateriaAct: data.siglaMateriaAct }),
          ...(data.nombreMateriaAct !== undefined && { nombreMateriaAct: data.nombreMateriaAct }),
          ...(data.horasMateria !== undefined && { horasMateria: Number(data.horasMateria) }),
          ...(data.prerrequisitos !== undefined && { prerrequisitos: data.prerrequisitos }),
          ...(data.semestre !== undefined && { semestre: Number(data.semestre) }),
        },
      });

      if (data.planIds !== undefined && Array.isArray(data.planIds)) {
        await this.prismaService.incluye.deleteMany({
          where: { idMateriaAct: id },
        });

        if (data.planIds.length > 0) {
          await this.prismaService.incluye.createMany({
            data: data.planIds.map((idPlanEstudio) => ({
              idPlanEstudio: Number(idPlanEstudio),
              idMateriaAct: id,
            })),
            skipDuplicates: true,
          });
        }
      }

      return this.findOne(id);
    });
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.materiaPregrado.delete({
      where: { idMateriaAct: id },
    });
  }

  async assignPlan(idMateriaAct: number, idPlanEstudio: number) {
    await this.ensureExists(idMateriaAct);
    return this.prismaService.incluye.upsert({
      where: {
        idPlanEstudio_idMateriaAct: {
          idPlanEstudio,
          idMateriaAct,
        },
      },
      update: {},
      create: {
        idPlanEstudio,
        idMateriaAct,
      },
    });
  }

  async unassignPlan(idMateriaAct: number, idPlanEstudio: number) {
    return this.prismaService.incluye.deleteMany({
      where: {
        idPlanEstudio,
        idMateriaAct,
      },
    });
  }

  private async ensureExists(id: number) {
    const record = await this.prismaService.materiaPregrado.findUnique({
      where: { idMateriaAct: id },
    });
    if (!record) {
      throw new NotFoundException(`Materia con ID ${id} no encontrada`);
    }
  }

  private async executeWrite<T>(operation: () => Promise<T>) {
    try {
      return await operation();
    } catch (error) {
      if (error?.code === 'P2002') {
        throw new ConflictException('Ya existe un registro con ese identificador');
      }
      throw error;
    }
  }
}
