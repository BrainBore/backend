import { PrismaService } from '../prisma/prisma.service';
export interface ProgramaDto {
    nombre: string;
    tipo: string;
    costo: string;
    moduloIds?: number[];
}
export declare class ProgramaService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(tipo?: string): Promise<({
        organiza: ({
            modulo: {
                incluye: {
                    idModulo: number;
                    horasPresencial: string;
                    horasInvestigacion: string;
                };
            } & {
                idModulo: number;
                tituloModulo: string;
                numeroModulo: string;
            };
        } & {
            idPrograma: number;
            idModulo: number;
        })[];
    } & {
        nombre: string;
        tipo: string;
        idPrograma: number;
        costo: string;
    })[]>;
    findOne(id: number): Promise<{
        organiza: ({
            modulo: {
                incluye: {
                    idModulo: number;
                    horasPresencial: string;
                    horasInvestigacion: string;
                };
            } & {
                idModulo: number;
                tituloModulo: string;
                numeroModulo: string;
            };
        } & {
            idPrograma: number;
            idModulo: number;
        })[];
    } & {
        nombre: string;
        tipo: string;
        idPrograma: number;
        costo: string;
    }>;
    create(data: ProgramaDto): Promise<{
        organiza: ({
            modulo: {
                incluye: {
                    idModulo: number;
                    horasPresencial: string;
                    horasInvestigacion: string;
                };
            } & {
                idModulo: number;
                tituloModulo: string;
                numeroModulo: string;
            };
        } & {
            idPrograma: number;
            idModulo: number;
        })[];
    } & {
        nombre: string;
        tipo: string;
        idPrograma: number;
        costo: string;
    }>;
    update(id: number, data: Partial<ProgramaDto>): Promise<{
        organiza: ({
            modulo: {
                incluye: {
                    idModulo: number;
                    horasPresencial: string;
                    horasInvestigacion: string;
                };
            } & {
                idModulo: number;
                tituloModulo: string;
                numeroModulo: string;
            };
        } & {
            idPrograma: number;
            idModulo: number;
        })[];
    } & {
        nombre: string;
        tipo: string;
        idPrograma: number;
        costo: string;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
