import { PublicacionesEstudiantilesDto, PublicacionesEstudiantilesService } from './publicaciones-estudiantiles.service';
export declare class PublicacionesEstudiantilesController {
    private readonly service;
    constructor(service: PublicacionesEstudiantilesService);
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
}
