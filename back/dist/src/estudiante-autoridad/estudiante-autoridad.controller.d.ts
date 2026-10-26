import { EstudianteAutoridadService } from './estudiante-autoridad.service';
export declare class EstudianteAutoridadController {
    private readonly service;
    constructor(service: EstudianteAutoridadService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        nombre: string;
        imagen: string;
        cargo: string;
    }[]>;
    create(data: Record<string, string>): Promise<{
        id: number;
        nombre: string;
        imagen: string;
        cargo: string;
    }>;
    update(id: number, data: Record<string, string>): Promise<{
        id: number;
        nombre: string;
        imagen: string;
        cargo: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nombre: string;
        imagen: string;
        cargo: string;
    }>;
}
