import { PlantelService, PlantelTipo } from './plantel.service';
export declare class PlantelController {
    private readonly plantelService;
    constructor(plantelService: PlantelService);
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
}
