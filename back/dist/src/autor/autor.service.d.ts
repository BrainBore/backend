import { PrismaService } from '../prisma/prisma.service';
export interface AutorDto {
    nombre?: string;
    area?: string;
    tipo?: string;
    ubicacion?: string;
}
export declare class AutorService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(search?: string, tipo?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        nombre: string | null;
        area: string | null;
        tipo: string | null;
        ubicacion: string | null;
    }[]>;
    findOne(id: number): Promise<{
        libros: {
            id: number;
            link: string | null;
            titulo: string | null;
            editor: string | null;
            descripcionFisica: string | null;
            codigoIsbn: string | null;
            calificacionDewey: string | null;
            temas: string | null;
            idAutor: number | null;
        }[];
    } & {
        id: number;
        nombre: string | null;
        area: string | null;
        tipo: string | null;
        ubicacion: string | null;
    }>;
    create(data: AutorDto): import("../../generated/prisma/models").Prisma__AutorClient<{
        id: number;
        nombre: string | null;
        area: string | null;
        tipo: string | null;
        ubicacion: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: number, data: Partial<AutorDto>): Promise<{
        id: number;
        nombre: string | null;
        area: string | null;
        tipo: string | null;
        ubicacion: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        nombre: string | null;
        area: string | null;
        tipo: string | null;
        ubicacion: string | null;
    }>;
    private ensureExists;
}
