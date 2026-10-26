import { ModuloDto, ModuloService } from './modulo.service';
export declare class ModuloController {
    private readonly moduloService;
    constructor(moduloService: ModuloService);
    findAll(programaId?: string): Promise<({
        incluye: {
            idModulo: number;
            horasPresencial: string;
            horasInvestigacion: string;
        };
        organiza: ({
            programa: {
                tipo: string;
                nombre: string;
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
                tipo: string;
                nombre: string;
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
                tipo: string;
                nombre: string;
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
                tipo: string;
                nombre: string;
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
