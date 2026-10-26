import { PrismaService } from '../prisma/prisma.service';
export type PlantelTipo = 'docentes' | 'administrativos' | 'auxiliares';
export declare class PlantelService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(tipo: PlantelTipo): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        tipo: string;
        nombre: string;
        gradoAcademico: string;
        resumenCv: string;
        correoInstitucional: string;
        cargoAutoridad: string | null;
        imagen: string;
    }[]>;
    create(tipo: PlantelTipo, data: Record<string, string>): Promise<{
        id: number;
        tipo: string;
        nombre: string;
        gradoAcademico: string;
        resumenCv: string;
        correoInstitucional: string;
        cargoAutoridad: string | null;
        imagen: string;
    }>;
    update(tipo: PlantelTipo, id: number, data: Record<string, string>): Promise<{
        id: number;
        tipo: string;
        nombre: string;
        gradoAcademico: string;
        resumenCv: string;
        correoInstitucional: string;
        cargoAutoridad: string | null;
        imagen: string;
    }>;
    remove(tipo: PlantelTipo, id: number): Promise<{
        id: number;
        tipo: string;
        nombre: string;
        gradoAcademico: string;
        resumenCv: string;
        correoInstitucional: string;
        cargoAutoridad: string | null;
        imagen: string;
    }>;
    private ensureExists;
    private getModel;
    private validateData;
    private executeWrite;
}
