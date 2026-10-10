import { RevistaDto, RevistaService } from './revista.service';
export declare class RevistaController {
    private readonly service;
    constructor(service: RevistaService);
    findAll(search?: string, tipo?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        publicacion: string | null;
        autor: string | null;
        descripcion: string | null;
        link: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        publicacion: string | null;
        autor: string | null;
        descripcion: string | null;
        link: string | null;
    }>;
    create(data: RevistaDto): import("../../generated/prisma/models").Prisma__RevistaClient<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        publicacion: string | null;
        autor: string | null;
        descripcion: string | null;
        link: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: number, data: Partial<RevistaDto>): Promise<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        publicacion: string | null;
        autor: string | null;
        descripcion: string | null;
        link: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        publicacion: string | null;
        autor: string | null;
        descripcion: string | null;
        link: string | null;
    }>;
}
