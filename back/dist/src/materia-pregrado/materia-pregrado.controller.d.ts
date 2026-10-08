import { MateriaPregradoDto, MateriaPregradoService } from './materia-pregrado.service';
export declare class MateriaPregradoController {
    private readonly materiaService;
    constructor(materiaService: MateriaPregradoService);
    findAll(planId?: string, semestre?: string): Promise<({
        incluye: ({
            planEstudio: {
                idPlanEstudio: number;
                nombrePlan: string;
            };
        } & {
            idPlanEstudio: number;
            idMateriaAct: number;
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
            idPlanEstudio: number;
            idMateriaAct: number;
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
            idPlanEstudio: number;
            idMateriaAct: number;
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
            idPlanEstudio: number;
            idMateriaAct: number;
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
    assignPlan(id: number, planId: number): Promise<{
        idPlanEstudio: number;
        idMateriaAct: number;
    }>;
    unassignPlan(id: number, planId: number): Promise<import("../../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
