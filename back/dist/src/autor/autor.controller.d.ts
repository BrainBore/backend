import { AutorDto, AutorService } from './autor.service';
export declare class AutorController {
    private readonly service;
    constructor(service: AutorService);
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
}
