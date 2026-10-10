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
        organiza: ({
            programa: {
                tipo: string;
                nombre: string;
                idPrograma: number;
                costo: string;
            };
        } & {
            idModulo: number;
            idPrograma: number;
        })[];
        incluye: {
            idModulo: number;
            horasPresencial: string;
            horasInvestigacion: string;
        };
    } & {
        idModulo: number;
        tituloModulo: string;
        numeroModulo: string;
    })[]>;
    findOne(id: number): Promise<{
        organiza: ({
            programa: {
                tipo: string;
                nombre: string;
                idPrograma: number;
                costo: string;
            };
        } & {
            idModulo: number;
            idPrograma: number;
        })[];
        incluye: {
            idModulo: number;
            horasPresencial: string;
            horasInvestigacion: string;
        };
    } & {
        idModulo: number;
        tituloModulo: string;
        numeroModulo: string;
    }>;
    create(data: ModuloDto): Promise<{
        organiza: ({
            programa: {
                tipo: string;
                nombre: string;
                idPrograma: number;
                costo: string;
            };
        } & {
            idModulo: number;
            idPrograma: number;
        })[];
        incluye: {
            idModulo: number;
            horasPresencial: string;
            horasInvestigacion: string;
        };
    } & {
        idModulo: number;
        tituloModulo: string;
        numeroModulo: string;
    }>;
    update(id: number, data: Partial<ModuloDto>): Promise<{
        organiza: ({
            programa: {
                tipo: string;
                nombre: string;
                idPrograma: number;
                costo: string;
            };
        } & {
            idModulo: number;
            idPrograma: number;
        })[];
        incluye: {
            idModulo: number;
            horasPresencial: string;
            horasInvestigacion: string;
        };
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
