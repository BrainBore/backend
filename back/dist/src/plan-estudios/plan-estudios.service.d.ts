import { PrismaService } from '../prisma/prisma.service';
export interface PlanEstudiosDto {
    nombrePlan: string;
}
export declare class PlanEstudiosService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    private ensureExists;
    private executeWrite;
}
