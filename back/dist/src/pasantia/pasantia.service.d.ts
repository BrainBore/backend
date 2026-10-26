import { PrismaService } from '../prisma/prisma.service';
export interface PasantiaDto {
    titulo: string;
    tipo: string;
    descripcion: string;
    area: string;
    empresa: string;
    fechaCierre?: string | Date;
    requisitos: string;
}
export declare class PasantiaService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(area?: string, tipo?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        tipo: string;
        titulo: string;
        descripcion: string;
        area: string;
        fechaCierre: Date | null;
        empresa: string;
        requisitos: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        tipo: string;
        titulo: string;
        descripcion: string;
        area: string;
        fechaCierre: Date | null;
        empresa: string;
        requisitos: string;
    }>;
    create(data: PasantiaDto): Promise<{
        id: number;
        tipo: string;
        titulo: string;
        descripcion: string;
        area: string;
        fechaCierre: Date | null;
        empresa: string;
        requisitos: string;
    }>;
    update(id: number, data: Partial<PasantiaDto>): Promise<{
        id: number;
        tipo: string;
        titulo: string;
        descripcion: string;
        area: string;
        fechaCierre: Date | null;
        empresa: string;
        requisitos: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        tipo: string;
        titulo: string;
        descripcion: string;
        area: string;
        fechaCierre: Date | null;
        empresa: string;
        requisitos: string;
    }>;
    private ensureExists;
    private executeWrite;
}
