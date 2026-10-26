import { DirectivoEstudianteDto, DirectivoEstudianteService } from './directivo-estudiante.service';
export declare class DirectivoEstudianteController {
    private readonly service;
    constructor(service: DirectivoEstudianteService);
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
}
