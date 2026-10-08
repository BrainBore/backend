import { PlanEstudiosDto, PlanEstudiosService } from './plan-estudios.service';
export declare class PlanEstudiosController {
    private readonly planEstudiosService;
    constructor(planEstudiosService: PlanEstudiosService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        incluye: ({
            materia: {
                idMateriaAct: number;
                siglaMateriaAct: string;
                nombreMateriaAct: string;
                horasMateria: number;
                prerrequisitos: string;
                semestre: number;
            };
        } & {
            idPlanEstudio: number;
            idMateriaAct: number;
        })[];
    } & {
        idPlanEstudio: number;
        nombrePlan: string;
    })[]>;
    findOne(id: number): Promise<{
        incluye: ({
            materia: {
                idMateriaAct: number;
                siglaMateriaAct: string;
                nombreMateriaAct: string;
                horasMateria: number;
                prerrequisitos: string;
                semestre: number;
            };
        } & {
            idPlanEstudio: number;
            idMateriaAct: number;
        })[];
    } & {
        idPlanEstudio: number;
        nombrePlan: string;
    }>;
    create(data: PlanEstudiosDto): Promise<{
        idPlanEstudio: number;
        nombrePlan: string;
    }>;
    update(id: number, data: Partial<PlanEstudiosDto>): Promise<{
        idPlanEstudio: number;
        nombrePlan: string;
    }>;
    remove(id: number): Promise<{
        idPlanEstudio: number;
        nombrePlan: string;
    }>;
}
