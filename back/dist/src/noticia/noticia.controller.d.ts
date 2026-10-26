import { NoticiaDto, NoticiaService } from './noticia.service';
export declare class NoticiaController {
    private readonly noticiaService;
    constructor(noticiaService: NoticiaService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        titulo: string;
        estado: string;
        categoria: string;
        color: string;
        fecha: Date;
        extracto: string;
        imagenUrl: string | null;
        tiempoLectura: string;
        enlace: string;
        fechaExpiracion: Date | null;
    }[]>;
    findOne(id: number): import("../../generated/prisma/models").Prisma__NoticiaClient<{
        id: number;
        titulo: string;
        estado: string;
        categoria: string;
        color: string;
        fecha: Date;
        extracto: string;
        imagenUrl: string | null;
        tiempoLectura: string;
        enlace: string;
        fechaExpiracion: Date | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    create(data: NoticiaDto): import("../../generated/prisma/models").Prisma__NoticiaClient<{
        id: number;
        titulo: string;
        estado: string;
        categoria: string;
        color: string;
        fecha: Date;
        extracto: string;
        imagenUrl: string | null;
        tiempoLectura: string;
        enlace: string;
        fechaExpiracion: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: number, data: Partial<NoticiaDto>): Promise<{
        id: number;
        titulo: string;
        estado: string;
        categoria: string;
        color: string;
        fecha: Date;
        extracto: string;
        imagenUrl: string | null;
        tiempoLectura: string;
        enlace: string;
        fechaExpiracion: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string;
        estado: string;
        categoria: string;
        color: string;
        fecha: Date;
        extracto: string;
        imagenUrl: string | null;
        tiempoLectura: string;
        enlace: string;
        fechaExpiracion: Date | null;
    }>;
}
