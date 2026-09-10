import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface SeccionPaginaData {
  claveCampo: string;
  paginaSlug: string;
  valor: string;
  tipo: string;
}

@Injectable()
export class SeccionPaginaService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.seccionPagina.findMany({
      orderBy: [{ paginaSlug: 'asc' }, { claveCampo: 'asc' }],
    });
  }

  findOne(claveCampo: string) {
    return this.prismaService.seccionPagina.findUnique({
      where: { claveCampo },
    });
  }

  update(
    claveCampo: string,
    data: Partial<Omit<SeccionPaginaData, 'claveCampo'>>,
  ) {
    return this.prismaService.seccionPagina.upsert({
      where: { claveCampo },
      update: data,
      create: {
        claveCampo,
        paginaSlug: data.paginaSlug ?? '/editor-texto',
        valor: data.valor ?? '',
        tipo: data.tipo ?? 'texto',
      },
    });
  }
}