import { PrismaService } from '../prisma/prisma.service';
export interface DirectivoEstudianteDto {
    nombre: string;
    cargo: string;
    area: string;
}
export declare class DirectivoEstudianteService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(area?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        area: string;
        nombre: string;
        cargo: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        area: string;
        nombre: string;
        cargo: string;
    }>;
    create(data: DirectivoEstudianteDto): Promise<{
        id: number;
        area: string;
        nombre: string;
        cargo: string;
    }>;
    update(id: number, data: Partial<DirectivoEstudianteDto>): Promise<{
        id: number;
        area: string;
        nombre: string;
        cargo: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        area: string;
        nombre: string;
        cargo: string;
    }>;
    private ensureExists;
    private executeWrite;
}
