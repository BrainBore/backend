import { PasantiaDto, PasantiaService } from './pasantia.service';
export declare class PasantiaController {
    private readonly service;
    constructor(service: PasantiaService);
    findAll(area?: string, tipo?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        titulo: string;
        descripcion: string;
        area: string;
        tipo: string;
        empresa: string;
        fechaCierre: Date | null;
        requisitos: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        area: string;
        tipo: string;
        empresa: string;
        fechaCierre: Date | null;
        requisitos: string;
    }>;
    create(data: PasantiaDto): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        area: string;
        tipo: string;
        empresa: string;
        fechaCierre: Date | null;
        requisitos: string;
    }>;
    update(id: number, data: Partial<PasantiaDto>): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        area: string;
        tipo: string;
        empresa: string;
        fechaCierre: Date | null;
        requisitos: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        area: string;
        tipo: string;
        empresa: string;
        fechaCierre: Date | null;
        requisitos: string;
    }>;
}
