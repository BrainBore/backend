import { BancoDatosDto, BancoDatosService } from './banco-datos.service';
export declare class BancoDatosController {
    private readonly service;
    constructor(service: BancoDatosService);
    findAll(search?: string, tipo?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        archivos: {
            id: number;
            titulo: string | null;
            formato: string | null;
            peso: string | null;
            linkDescarga: string | null;
            idBancoDatos: number | null;
        }[];
    } & {
        id: number;
        titulo: string | null;
        tipo: string | null;
        fuente: string | null;
        anio: number | null;
        resumen: string | null;
    })[]>;
    findOne(id: number): Promise<{
        archivos: {
            id: number;
            titulo: string | null;
            formato: string | null;
            peso: string | null;
            linkDescarga: string | null;
            idBancoDatos: number | null;
        }[];
    } & {
        id: number;
        titulo: string | null;
        tipo: string | null;
        fuente: string | null;
        anio: number | null;
        resumen: string | null;
    }>;
    create(data: BancoDatosDto): import("../../generated/prisma/models").Prisma__BancoDatosClient<{
        archivos: {
            id: number;
            titulo: string | null;
            formato: string | null;
            peso: string | null;
            linkDescarga: string | null;
            idBancoDatos: number | null;
        }[];
    } & {
        id: number;
        titulo: string | null;
        tipo: string | null;
        fuente: string | null;
        anio: number | null;
        resumen: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: number, data: Partial<BancoDatosDto>): Promise<{
        archivos: {
            id: number;
            titulo: string | null;
            formato: string | null;
            peso: string | null;
            linkDescarga: string | null;
            idBancoDatos: number | null;
        }[];
    } & {
        id: number;
        titulo: string | null;
        tipo: string | null;
        fuente: string | null;
        anio: number | null;
        resumen: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        fuente: string | null;
        anio: number | null;
        resumen: string | null;
    }>;
}
