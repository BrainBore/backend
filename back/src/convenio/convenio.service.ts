import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export const ALLOWED_SECTORS = [
  'Sector Publico',
  'Salud y Bienestar',
  'Org. Internacionales',
  'Consultoria',
] as const;

export type SectorType = typeof ALLOWED_SECTORS[number];

export interface ConvenioDto {
  titulo: string;
  descripcion: string;
  sector: string;
}

@Injectable()
export class ConvenioService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.convenio.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prismaService.convenio.findUnique({
      where: { id },
    });
  }

  create(data: ConvenioDto) {
    this.validateSector(data.sector);
    return this.executeWrite(() =>
      this.prismaService.convenio.create({
        data: {
          titulo: data.titulo,
          descripcion: data.descripcion,
          sector: data.sector,
        },
      }),
    );
  }

  async update(id: number, data: Partial<ConvenioDto>) {
    await this.ensureExists(id);
    if (data.sector !== undefined) {
      this.validateSector(data.sector);
    }
    return this.executeWrite(() =>
      this.prismaService.convenio.update({
        where: { id },
        data,
      }),
    );
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.convenio.delete({
      where: { id },
    });
  }

  private validateSector(sector: string) {
    if (!sector || !ALLOWED_SECTORS.includes(sector as SectorType)) {
      throw new BadRequestException(
        `Sector inválido: "${sector}". Los sectores permitidos son: ${ALLOWED_SECTORS.join(', ')}`,
      );
    }
  }

  private async ensureExists(id: number) {
    const record = await this.prismaService.convenio.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException('Convenio no encontrado');
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
