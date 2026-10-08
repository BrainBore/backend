import { ConvalidaDto, ConvalidaService } from './convalida.service';
export declare class ConvalidaController {
    private readonly convalidaService;
    constructor(convalidaService: ConvalidaService);
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
}
