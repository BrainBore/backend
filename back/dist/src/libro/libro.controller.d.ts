import { LibroDto, LibroService } from './libro.service';
export declare class LibroController {
    private readonly service;
    constructor(service: LibroService);
    findAll(search?: string, idAutor?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        autorRel: {
            id: number;
            tipo: string | null;
            nombre: string | null;
            area: string | null;
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
            tipo: string | null;
            nombre: string | null;
            area: string | null;
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
            tipo: string | null;
            nombre: string | null;
            area: string | null;
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
            tipo: string | null;
            nombre: string | null;
            area: string | null;
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
}
