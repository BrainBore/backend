import { PrismaService } from '../prisma/prisma.service';
export interface LibroDto {
    titulo?: string;
    editor?: string;
    descripcionFisica?: string;
    codigoIsbn?: string;
    calificacionDewey?: string;
    temas?: string;
    link?: string;
    idAutor?: number;
}
export declare class LibroService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(search?: string, idAutor?: number): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        autorRel: {
            id: number;
            nombre: string | null;
            area: string | null;
            tipo: string | null;
            ubicacion: string | null;
        };
    } & {
        id: number;
        titulo: string | null;
        editor: string | null;
        descripcionFisica: string | null;
        codigoIsbn: string | null;
        calificacionDewey: string | null;
        temas: string | null;
        link: string | null;
        idAutor: number | null;
    })[]>;
    findOne(id: number): Promise<{
        autorRel: {
            id: number;
            nombre: string | null;
            area: string | null;
            tipo: string | null;
            ubicacion: string | null;
        };
    } & {
        id: number;
        titulo: string | null;
        editor: string | null;
        descripcionFisica: string | null;
        codigoIsbn: string | null;
        calificacionDewey: string | null;
        temas: string | null;
        link: string | null;
        idAutor: number | null;
    }>;
    create(data: LibroDto): import("../../generated/prisma/models").Prisma__LibroClient<{
        autorRel: {
            id: number;
            nombre: string | null;
            area: string | null;
            tipo: string | null;
            ubicacion: string | null;
        };
    } & {
        id: number;
        titulo: string | null;
        editor: string | null;
        descripcionFisica: string | null;
        codigoIsbn: string | null;
        calificacionDewey: string | null;
        temas: string | null;
        link: string | null;
        idAutor: number | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: number, data: Partial<LibroDto>): Promise<{
        autorRel: {
            id: number;
            nombre: string | null;
            area: string | null;
            tipo: string | null;
            ubicacion: string | null;
        };
    } & {
        id: number;
        titulo: string | null;
        editor: string | null;
        descripcionFisica: string | null;
        codigoIsbn: string | null;
        calificacionDewey: string | null;
        temas: string | null;
        link: string | null;
        idAutor: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string | null;
        editor: string | null;
        descripcionFisica: string | null;
        codigoIsbn: string | null;
        calificacionDewey: string | null;
        temas: string | null;
        link: string | null;
        idAutor: number | null;
    }>;
    private ensureExists;
}
