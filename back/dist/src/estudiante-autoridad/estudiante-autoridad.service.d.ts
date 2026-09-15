import { PrismaService } from '../prisma/prisma.service';
export declare class EstudianteAutoridadService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    private ensureExists;
    private executeWrite;
}
