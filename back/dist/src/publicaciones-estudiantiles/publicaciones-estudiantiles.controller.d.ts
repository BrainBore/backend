import { PublicacionesEstudiantilesDto, PublicacionesEstudiantilesService } from './publicaciones-estudiantiles.service';
export declare class PublicacionesEstudiantilesController {
    private readonly service;
    constructor(service: PublicacionesEstudiantilesService);
    findAll(area?: string, anio?: number): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        titulo: string;
        area: string;
        anio: number;
        autor: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        titulo: string;
        area: string;
        anio: number;
        autor: string;
    }>;
    create(data: PublicacionesEstudiantilesDto): Promise<{
        id: number;
        titulo: string;
        area: string;
        anio: number;
        autor: string;
    }>;
    update(id: number, data: Partial<PublicacionesEstudiantilesDto>): Promise<{
        id: number;
        titulo: string;
        area: string;
        anio: number;
        autor: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string;
        area: string;
        anio: number;
        autor: string;
    }>;
}
