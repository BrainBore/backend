import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface ConvocatoriaDto {
  periodoConvocatoria: string;
  descConvocatoria: string;
  insPreu: string;
  insPsa: string;
  fechaEntregaDocs: string | Date;
  matriculacionKardex: string;
}

@Injectable()
export class ConvocatoriaService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.convocatoria.findMany({
      orderBy: { idConvocatoria: 'asc' },
    });
  }

  async findOne(id: number) {
    const record = await this.prismaService.convocatoria.findUnique({
      where: { idConvocatoria: id },
    });
    if (!record) {
      throw new NotFoundException(`Convocatoria con ID ${id} no encontrada`);
    }
    return record;
  }

  create(data: ConvocatoriaDto) {
    return this.executeWrite(() =>
      this.prismaService.convocatoria.create({
        data: {
          periodoConvocatoria: data.periodoConvocatoria,
          descConvocatoria: data.descConvocatoria,
          insPreu: data.insPreu,
          insPsa: data.insPsa,
          fechaEntregaDocs: new Date(data.fechaEntregaDocs),
          matriculacionKardex: data.matriculacionKardex,
        },
      }),
    );
  }

  async update(id: number, data: Partial<ConvocatoriaDto>) {
    await this.ensureExists(id);
    return this.executeWrite(() =>
      this.prismaService.convocatoria.update({
        where: { idConvocatoria: id },
        data: {
          ...(data.periodoConvocatoria && { periodoConvocatoria: data.periodoConvocatoria }),
          ...(data.descConvocatoria && { descConvocatoria: data.descConvocatoria }),
          ...(data.insPreu && { insPreu: data.insPreu }),
          ...(data.insPsa && { insPsa: data.insPsa }),
          ...(data.fechaEntregaDocs && { fechaEntregaDocs: new Date(data.fechaEntregaDocs) }),
          ...(data.matriculacionKardex && { matriculacionKardex: data.matriculacionKardex }),
        },
      }),
    );
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.convocatoria.delete({
      where: { idConvocatoria: id },
    });
  }

  private async ensureExists(id: number) {
    const record = await this.prismaService.convocatoria.findUnique({
      where: { idConvocatoria: id },
    });
    if (!record) {
      throw new NotFoundException(`Convocatoria con ID ${id} no encontrada`);
    }
  }

  private async executeWrite<T>(operation: () => Promise<T>) {
    try {
      return await operation();
    } catch (error) {
      if (error?.code === 'P2002') {
        throw new ConflictException('Ya existe una convocatoria con ese identificador');
      }
      throw error;
    }
  }
}
