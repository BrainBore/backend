import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface DirectivoEstudianteDto {
  nombre: string;
  cargo: string;
  area: string;
}

@Injectable()
export class DirectivoEstudianteService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(area?: string) {
    const where: any = {};
    if (area) {
      where.area = { contains: area, mode: 'insensitive' };
    }
    return this.prismaService.directivoEstudiante.findMany({
      where,
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.directivoEstudiante.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Directivo con ID ${id} no encontrado`);
    }
    return record;
  }

  create(data: DirectivoEstudianteDto) {
    return this.executeWrite(() =>
      this.prismaService.directivoEstudiante.create({
        data: {
          nombre: data.nombre,
          cargo: data.cargo,
          area: data.area,
        },
      }),
    );
  }

  async update(id: number, data: Partial<DirectivoEstudianteDto>) {
    await this.ensureExists(id);
    return this.executeWrite(() =>
      this.prismaService.directivoEstudiante.update({
        where: { id },
        data: {
          ...(data.nombre && { nombre: data.nombre }),
          ...(data.cargo && { cargo: data.cargo }),
          ...(data.area && { area: data.area }),
        },
      }),
    );
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.directivoEstudiante.delete({
      where: { id },
    });
  }

  private async ensureExists(id: number) {
    const exists = await this.prismaService.directivoEstudiante.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!exists) {
      throw new NotFoundException(`Directivo con ID ${id} no encontrado`);
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
