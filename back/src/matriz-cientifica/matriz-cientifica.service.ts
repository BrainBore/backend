import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface MatrizCientificaDto {
  titulo: string;
  descripcion: string;
  autor: string;
}

@Injectable()
export class MatrizCientificaService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.matrizCientifica.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.matrizCientifica.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    return record;
  }

  create(data: MatrizCientificaDto) {
    return this.executeWrite(() =>
      this.prismaService.matrizCientifica.create({
        data: {
          titulo: data.titulo,
          descripcion: data.descripcion,
          autor: data.autor,
        },
      }),
    );
  }

  async update(id: number, data: Partial<MatrizCientificaDto>) {
    await this.ensureExists(id);
    return this.executeWrite(() =>
      this.prismaService.matrizCientifica.update({
        where: { id },
        data: {
          ...(data.titulo !== undefined && { titulo: data.titulo }),
          ...(data.descripcion !== undefined && { descripcion: data.descripcion }),
          ...(data.autor !== undefined && { autor: data.autor }),
        },
      }),
    );
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.matrizCientifica.delete({
      where: { id },
    });
  }

  private async ensureExists(id: number) {
    const exists = await this.prismaService.matrizCientifica.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!exists) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
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
