import { DirectivoEstudianteDto, DirectivoEstudianteService } from './directivo-estudiante.service';
export declare class DirectivoEstudianteController {
    private readonly service;
    constructor(service: DirectivoEstudianteService);
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
}
