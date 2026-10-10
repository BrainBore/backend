import { PrismaService } from '../prisma/prisma.service';
export interface MatrizCientificaDto {
    titulo: string;
    descripcion: string;
    autor: string;
}
export declare class MatrizCientificaService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        titulo: string;
        descripcion: string;
        autor: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        autor: string;
    }>;
    create(data: MatrizCientificaDto): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        autor: string;
    }>;
    update(id: number, data: Partial<MatrizCientificaDto>): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        autor: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        autor: string;
    }>;
    private ensureExists;
    private executeWrite;
}
