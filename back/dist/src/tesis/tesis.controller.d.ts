import { TesisDto, TesisService } from './tesis.service';
export declare class TesisController {
    private readonly service;
    constructor(service: TesisService);
    findAll(search?: string, tipo?: string, area?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        area: string | null;
        link: string | null;
        tutor: string | null;
        investigador: string | null;
        resumen: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        area: string | null;
        link: string | null;
        tutor: string | null;
        investigador: string | null;
        resumen: string | null;
    }>;
    create(data: TesisDto): import("../../generated/prisma/models").Prisma__TesisClient<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        area: string | null;
        link: string | null;
        tutor: string | null;
        investigador: string | null;
        resumen: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: number, data: Partial<TesisDto>): Promise<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        area: string | null;
        link: string | null;
        tutor: string | null;
        investigador: string | null;
        resumen: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        area: string | null;
        link: string | null;
        tutor: string | null;
        investigador: string | null;
        resumen: string | null;
    }>;
}
