import { PrismaService } from '../prisma/prisma.service';
export type PlantelTipo = 'docentes' | 'administrativos' | 'auxiliares';
export declare class PlantelService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(tipo: PlantelTipo): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        tipo: string;
        nombre: string;
        imagen: string;
        gradoAcademico: string;
        resumenCv: string;
        correoInstitucional: string;
        cargoAutoridad: string | null;
    }[]>;
    create(tipo: PlantelTipo, data: Record<string, string>): Promise<{
        id: number;
        tipo: string;
        nombre: string;
        imagen: string;
        gradoAcademico: string;
        resumenCv: string;
        correoInstitucional: string;
        cargoAutoridad: string | null;
    }>;
    update(tipo: PlantelTipo, id: number, data: Record<string, string>): Promise<{
        id: number;
        tipo: string;
        nombre: string;
        imagen: string;
        gradoAcademico: string;
        resumenCv: string;
        correoInstitucional: string;
        cargoAutoridad: string | null;
    }>;
    remove(tipo: PlantelTipo, id: number): Promise<{
        id: number;
        tipo: string;
        nombre: string;
        imagen: string;
        gradoAcademico: string;
        resumenCv: string;
        correoInstitucional: string;
        cargoAutoridad: string | null;
    }>;
    private ensureExists;
    private getModel;
    private validateData;
    private executeWrite;
}
