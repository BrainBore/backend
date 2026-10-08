import { PrismaService } from '../prisma/prisma.service';
export interface ConvalidaDto {
    idMateriaAct: number;
    idMateriaAntigua?: number;
    nombreMateriaAntigua: string;
    siglaMateriaAntigua: string;
}
export declare class ConvalidaService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        idMateriaAct: number;
        idMateriaAntigua: number | null;
        nombreMateriaAntigua: string;
        siglaMateriaAntigua: string;
    }[]>;
    findOne(id: number): Promise<{
        idMateriaAct: number;
        idMateriaAntigua: number | null;
        nombreMateriaAntigua: string;
        siglaMateriaAntigua: string;
    }>;
    create(data: ConvalidaDto): Promise<{
        idMateriaAct: number;
        idMateriaAntigua: number | null;
        nombreMateriaAntigua: string;
        siglaMateriaAntigua: string;
    }>;
    update(id: number, data: Partial<ConvalidaDto>): Promise<{
        idMateriaAct: number;
        idMateriaAntigua: number | null;
        nombreMateriaAntigua: string;
        siglaMateriaAntigua: string;
    }>;
    remove(id: number): Promise<{
        idMateriaAct: number;
        idMateriaAntigua: number | null;
        nombreMateriaAntigua: string;
        siglaMateriaAntigua: string;
    }>;
    private ensureExists;
    private executeWrite;
}
