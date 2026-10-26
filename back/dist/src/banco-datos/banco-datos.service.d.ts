import { PrismaService } from '../prisma/prisma.service';
export interface BancoDatosDto {
    titulo?: string;
    tipo?: string;
    fuente?: string;
    anio?: number;
    resumen?: string;
}
export declare class BancoDatosService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(search?: string, tipo?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        archivos: {
            id: number;
            titulo: string | null;
            peso: string | null;
            linkDescarga: string | null;
            formato: string | null;
            idBancoDatos: number | null;
        }[];
    } & {
        id: number;
        tipo: string | null;
        titulo: string | null;
        anio: number | null;
        resumen: string | null;
        fuente: string | null;
    })[]>;
    findOne(id: number): Promise<{
        archivos: {
            id: number;
            titulo: string | null;
            peso: string | null;
            linkDescarga: string | null;
            formato: string | null;
            idBancoDatos: number | null;
        }[];
    } & {
        id: number;
        tipo: string | null;
        titulo: string | null;
        anio: number | null;
        resumen: string | null;
        fuente: string | null;
    }>;
    create(data: BancoDatosDto): import("../../generated/prisma/models").Prisma__BancoDatosClient<{
        archivos: {
            id: number;
            titulo: string | null;
            peso: string | null;
            linkDescarga: string | null;
            formato: string | null;
            idBancoDatos: number | null;
        }[];
    } & {
        id: number;
        tipo: string | null;
        titulo: string | null;
        anio: number | null;
        resumen: string | null;
        fuente: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: number, data: Partial<BancoDatosDto>): Promise<{
        archivos: {
            id: number;
            titulo: string | null;
            peso: string | null;
            linkDescarga: string | null;
            formato: string | null;
            idBancoDatos: number | null;
        }[];
    } & {
        id: number;
        tipo: string | null;
        titulo: string | null;
        anio: number | null;
        resumen: string | null;
        fuente: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        anio: number | null;
        resumen: string | null;
        fuente: string | null;
    }>;
    private ensureExists;
}
