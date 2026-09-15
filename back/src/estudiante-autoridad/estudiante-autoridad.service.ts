import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EstudianteAutoridadService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.estudianteAutoridad.findMany({ orderBy: { id: 'asc' } });
  }

  create(data: Record<string, string>) {
    return this.executeWrite(() => this.prismaService.estudianteAutoridad.create({ data: data as never }));
  }

  async update(id: number, data: Record<string, string>) {
    await this.ensureExists(id);
    return this.executeWrite(() => this.prismaService.estudianteAutoridad.update({ where: { id }, data: data as never }));
  }

  async remove(id: number) {
    await this.ensureExists(id);
    return this.prismaService.estudianteAutoridad.delete({ where: { id } });
  }

  private async ensureExists(id: number) {
    const record = await this.prismaService.estudianteAutoridad.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('Registro no encontrado');
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