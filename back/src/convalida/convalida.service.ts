import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface ConvalidaDto {
  idMateriaAct: number;
  idMateriaAntigua?: number;
  nombreMateriaAntigua: string;
  siglaMateriaAntigua: string;
}

@Injectable()
export class ConvalidaService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.convalida.findMany({
      orderBy: { idMateriaAct: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.convalida.findUnique({
      where: { idMateriaAct: id },
    });
    if (!record) {
      throw new NotFoundException(`Convalidación con ID ${id} no encontrada`);
    }
    return record;
  }

  create(data: ConvalidaDto) {
    return this.executeWrite(() =>
      this.prismaService.convalida.create({
        data: {
          idMateriaAct: Number(data.idMateriaAct),
          idMateriaAntigua: data.idMateriaAntigua ? Number(data.idMateriaAntigua) : null,
          nombreMateriaAntigua: data.nombreMateriaAntigua,
          siglaMateriaAntigua: data.siglaMateriaAntigua,
        },
      }),
    );
  }

  async update(id: number, data: Partial<ConvalidaDto>) {
    await this.ensureExists(id);
    return this.executeWrite(() =>
      this.prismaService.convalida.update({
        where: { idMateriaAct: id },
        data: {
          ...(data.idMateriaAntigua !== undefined && {
            idMateriaAntigua: data.idMateriaAntigua ? Number(data.idMateriaAntigua) : null,
          }),
          ...(data.nombreMateriaAntigua && { nombreMateriaAntigua: data.nombreMateriaAntigua }),
          ...(data.siglaMateriaAntigua && { siglaMateriaAntigua: data.siglaMateriaAntigua }),
        },
      }),
    );
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.convalida.delete({
      where: { idMateriaAct: id },
    });
  }

  private async ensureExists(id: number) {
    const record = await this.prismaService.convalida.findUnique({
      where: { idMateriaAct: id },
    });
    if (!record) {
      throw new NotFoundException(`Convalidación con ID ${id} no encontrada`);
    }
  }

  private async executeWrite<T>(operation: () => Promise<T>) {
    try {
      return await operation();
    } catch (error) {
      if (error?.code === 'P2002') {
        throw new ConflictException('Ya existe una convalidación para esa materia');
      }
      throw error;
    }
  }
}
