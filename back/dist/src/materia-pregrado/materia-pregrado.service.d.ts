import { PrismaService } from '../prisma/prisma.service';
export interface MateriaPregradoDto {
    siglaMateriaAct: string;
    nombreMateriaAct: string;
    horasMateria: number;
    prerrequisitos: string;
    semestre: number;
    planIds?: number[];
}
export declare class MateriaPregradoService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(planId?: number, semestre?: number): Promise<({
        incluye: ({
            planEstudio: {
                idPlanEstudio: number;
                nombrePlan: string;
            };
        } & {
            idMateriaAct: number;
            idPlanEstudio: number;
        })[];
    } & {
        idMateriaAct: number;
        siglaMateriaAct: string;
        nombreMateriaAct: string;
        horasMateria: number;
        prerrequisitos: string;
        semestre: number;
    })[]>;
    findOne(id: number): Promise<{
        incluye: ({
            planEstudio: {
                idPlanEstudio: number;
                nombrePlan: string;
            };
        } & {
            idMateriaAct: number;
            idPlanEstudio: number;
        })[];
    } & {
        idMateriaAct: number;
        siglaMateriaAct: string;
        nombreMateriaAct: string;
        horasMateria: number;
        prerrequisitos: string;
        semestre: number;
    }>;
    create(data: MateriaPregradoDto): Promise<{
        incluye: ({
            planEstudio: {
                idPlanEstudio: number;
                nombrePlan: string;
            };
        } & {
            idMateriaAct: number;
            idPlanEstudio: number;
        })[];
    } & {
        idMateriaAct: number;
        siglaMateriaAct: string;
        nombreMateriaAct: string;
        horasMateria: number;
        prerrequisitos: string;
        semestre: number;
    }>;
    update(id: number, data: Partial<MateriaPregradoDto>): Promise<{
        incluye: ({
            planEstudio: {
                idPlanEstudio: number;
                nombrePlan: string;
            };
        } & {
            idMateriaAct: number;
            idPlanEstudio: number;
        })[];
    } & {
        idMateriaAct: number;
        siglaMateriaAct: string;
        nombreMateriaAct: string;
        horasMateria: number;
        prerrequisitos: string;
        semestre: number;
    }>;
    remove(id: number): Promise<{
        idMateriaAct: number;
        siglaMateriaAct: string;
        nombreMateriaAct: string;
        horasMateria: number;
        prerrequisitos: string;
        semestre: number;
    }>;
    assignPlan(idMateriaAct: number, idPlanEstudio: number): Promise<{
        idMateriaAct: number;
        idPlanEstudio: number;
    }>;
    unassignPlan(idMateriaAct: number, idPlanEstudio: number): Promise<import("../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    private ensureExists;
    private executeWrite;
}
