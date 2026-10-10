import { PrismaService } from '../prisma/prisma.service';
export interface DatosArchivoDto {
    titulo?: string;
    formato?: string;
    peso?: string;
    linkDescarga?: string;
    idBancoDatos?: number;
}
export declare class DatosArchivoService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(search?: string, idBancoDatos?: number): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        bancoRel: {
            id: number;
            titulo: string | null;
            tipo: string | null;
            fuente: string | null;
            anio: number | null;
            resumen: string | null;
        };
    } & {
        id: number;
        titulo: string | null;
        formato: string | null;
        peso: string | null;
        linkDescarga: string | null;
        idBancoDatos: number | null;
    })[]>;
    findOne(id: number): Promise<{
        bancoRel: {
            id: number;
            titulo: string | null;
            tipo: string | null;
            fuente: string | null;
            anio: number | null;
            resumen: string | null;
        };
    } & {
        id: number;
        titulo: string | null;
        formato: string | null;
        peso: string | null;
        linkDescarga: string | null;
        idBancoDatos: number | null;
    }>;
    create(data: DatosArchivoDto): import("../../generated/prisma/models").Prisma__DatosArchivoClient<{
        bancoRel: {
            id: number;
            titulo: string | null;
            tipo: string | null;
            fuente: string | null;
            anio: number | null;
            resumen: string | null;
        };
    } & {
        id: number;
        titulo: string | null;
        formato: string | null;
        peso: string | null;
        linkDescarga: string | null;
        idBancoDatos: number | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: number, data: Partial<DatosArchivoDto>): Promise<{
        bancoRel: {
            id: number;
            titulo: string | null;
            tipo: string | null;
            fuente: string | null;
            anio: number | null;
            resumen: string | null;
        };
    } & {
        id: number;
        titulo: string | null;
        formato: string | null;
        peso: string | null;
        linkDescarga: string | null;
        idBancoDatos: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string | null;
        formato: string | null;
        peso: string | null;
        linkDescarga: string | null;
        idBancoDatos: number | null;
    }>;
    private ensureExists;
}
