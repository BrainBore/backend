import { PrismaService } from '../prisma/prisma.service';
export interface ModuloDto {
    tituloModulo: string;
    numeroModulo: string;
    programaIds?: number[];
    horasPresencial?: string;
    horasInvestigacion?: string;
}
export declare class ModuloService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(programaId?: number): Promise<({
        incluye: {
            idModulo: number;
            horasPresencial: string;
            horasInvestigacion: string;
        };
        organiza: ({
            programa: {
                nombre: string;
                tipo: string;
                idPrograma: number;
                costo: string;
            };
        } & {
            idPrograma: number;
            idModulo: number;
        })[];
    } & {
        idModulo: number;
        tituloModulo: string;
        numeroModulo: string;
    })[]>;
    findOne(id: number): Promise<{
        incluye: {
            idModulo: number;
            horasPresencial: string;
            horasInvestigacion: string;
        };
        organiza: ({
            programa: {
                nombre: string;
                tipo: string;
                idPrograma: number;
                costo: string;
            };
        } & {
            idPrograma: number;
            idModulo: number;
        })[];
    } & {
        idModulo: number;
        tituloModulo: string;
        numeroModulo: string;
    }>;
    create(data: ModuloDto): Promise<{
        incluye: {
            idModulo: number;
            horasPresencial: string;
            horasInvestigacion: string;
        };
        organiza: ({
            programa: {
                nombre: string;
                tipo: string;
                idPrograma: number;
                costo: string;
            };
        } & {
            idPrograma: number;
            idModulo: number;
        })[];
    } & {
        idModulo: number;
        tituloModulo: string;
        numeroModulo: string;
    }>;
    update(id: number, data: Partial<ModuloDto>): Promise<{
        incluye: {
            idModulo: number;
            horasPresencial: string;
            horasInvestigacion: string;
        };
        organiza: ({
            programa: {
                nombre: string;
                tipo: string;
                idPrograma: number;
                costo: string;
            };
        } & {
            idPrograma: number;
            idModulo: number;
        })[];
    } & {
        idModulo: number;
        tituloModulo: string;
        numeroModulo: string;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
