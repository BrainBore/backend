import { RevistaDto, RevistaService } from './revista.service';
export declare class RevistaController {
    private readonly service;
    constructor(service: RevistaService);
    findAll(search?: string, tipo?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        descripcion: string | null;
        autor: string | null;
        link: string | null;
        publicacion: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        descripcion: string | null;
        autor: string | null;
        link: string | null;
        publicacion: string | null;
    }>;
    create(data: RevistaDto): import("../../generated/prisma/models").Prisma__RevistaClient<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        descripcion: string | null;
        autor: string | null;
        link: string | null;
        publicacion: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: number, data: Partial<RevistaDto>): Promise<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        descripcion: string | null;
        autor: string | null;
        link: string | null;
        publicacion: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        descripcion: string | null;
        autor: string | null;
        link: string | null;
        publicacion: string | null;
    }>;
}
