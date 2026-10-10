import { PrismaService } from '../prisma/prisma.service';
export interface PublicacionesEstudiantilesDto {
    titulo: string;
    anio: number;
    autor: string;
    area: string;
}
export declare class PublicacionesEstudiantilesService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(area?: string, anio?: number): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        titulo: string;
        autor: string;
        anio: number;
        area: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        titulo: string;
        autor: string;
        anio: number;
        area: string;
    }>;
    create(data: PublicacionesEstudiantilesDto): Promise<{
        id: number;
        titulo: string;
        autor: string;
        anio: number;
        area: string;
    }>;
    update(id: number, data: Partial<PublicacionesEstudiantilesDto>): Promise<{
        id: number;
        titulo: string;
        autor: string;
        anio: number;
        area: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string;
        autor: string;
        anio: number;
        area: string;
    }>;
    private ensureExists;
    private executeWrite;
}
