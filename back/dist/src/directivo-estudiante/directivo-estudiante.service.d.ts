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
        nombre: string;
        cargo: string;
        area: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nombre: string;
        cargo: string;
        area: string;
    }>;
    create(data: DirectivoEstudianteDto): Promise<{
        id: number;
        nombre: string;
        cargo: string;
        area: string;
    }>;
    update(id: number, data: Partial<DirectivoEstudianteDto>): Promise<{
        id: number;
        nombre: string;
        cargo: string;
        area: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nombre: string;
        cargo: string;
        area: string;
    }>;
    private ensureExists;
    private executeWrite;
}
