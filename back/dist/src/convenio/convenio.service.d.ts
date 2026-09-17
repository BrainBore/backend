import { PrismaService } from '../prisma/prisma.service';
export declare const ALLOWED_SECTORS: readonly ["Sector Publico", "Salud y Bienestar", "Org. Internacionales", "Consultoria"];
export type SectorType = typeof ALLOWED_SECTORS[number];
export interface ConvenioDto {
    titulo: string;
    descripcion: string;
    sector: string;
}
export declare class ConvenioService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        titulo: string;
        descripcion: string;
        sector: string;
    }[]>;
    findOne(id: number): import("../../generated/prisma/models").Prisma__ConvenioClient<{
        id: number;
        titulo: string;
        descripcion: string;
        sector: string;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    create(data: ConvenioDto): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        sector: string;
    }>;
    update(id: number, data: Partial<ConvenioDto>): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        sector: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        sector: string;
    }>;
    private validateSector;
    private ensureExists;
    private executeWrite;
}
