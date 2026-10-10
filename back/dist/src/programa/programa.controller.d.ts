import { ProgramaDto, ProgramaService } from './programa.service';
export declare class ProgramaController {
    private readonly programaService;
    constructor(programaService: ProgramaService);
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
            idModulo: number;
            idPrograma: number;
        })[];
    } & {
        tipo: string;
        nombre: string;
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
            idModulo: number;
            idPrograma: number;
        })[];
    } & {
        tipo: string;
        nombre: string;
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
            idModulo: number;
            idPrograma: number;
        })[];
    } & {
        tipo: string;
        nombre: string;
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
            idModulo: number;
            idPrograma: number;
        })[];
    } & {
        tipo: string;
        nombre: string;
        idPrograma: number;
        costo: string;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
