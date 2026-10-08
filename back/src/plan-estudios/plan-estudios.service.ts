import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface PlanEstudiosDto {
  nombrePlan: string;
}

@Injectable()
export class PlanEstudiosService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.planEstudios.findMany({
      orderBy: { idPlanEstudio: 'asc' },
      include: {
        incluye: {
          include: {
            materia: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const plan = await this.prismaService.planEstudios.findUnique({
      where: { idPlanEstudio: id },
      include: {
        incluye: {
          include: {
            materia: true,
          },
        },
      },
    });
    if (!plan) {
      throw new NotFoundException(`Plan de estudios con ID ${id} no encontrado`);
    }
    return plan;
  }

  create(data: PlanEstudiosDto) {
    return this.executeWrite(() =>
      this.prismaService.planEstudios.create({
        data: {
          nombrePlan: data.nombrePlan,
        },
      }),
    );
  }

  async update(id: number, data: Partial<PlanEstudiosDto>) {
    await this.ensureExists(id);
    return this.executeWrite(() =>
      this.prismaService.planEstudios.update({
        where: { idPlanEstudio: id },
        data: {
          ...(data.nombrePlan && { nombrePlan: data.nombrePlan }),
        },
      }),
    );
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.planEstudios.delete({
      where: { idPlanEstudio: id },
    });
  }

  private async ensureExists(id: number) {
    const record = await this.prismaService.planEstudios.findUnique({
      where: { idPlanEstudio: id },
    });
    if (!record) {
      throw new NotFoundException(`Plan de estudios con ID ${id} no encontrado`);
    }
  }

  private async executeWrite<T>(operation: () => Promise<T>) {
    try {
      return await operation();
    } catch (error) {
      if (error?.code === 'P2002') {
        throw new ConflictException('Ya existe un plan con ese identificador');
      }
      throw error;
    }
  }
}
