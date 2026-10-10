import { PrismaService } from '../prisma/prisma.service';
export interface TesisDto {
    titulo?: string;
    tipo?: string;
    area?: string;
    tutor?: string;
    investigador?: string;
    resumen?: string;
    link?: string;
}
export declare class TesisService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(search?: string, tipo?: string, area?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        area: string | null;
        tutor: string | null;
        investigador: string | null;
        resumen: string | null;
        link: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        area: string | null;
        tutor: string | null;
        investigador: string | null;
        resumen: string | null;
        link: string | null;
    }>;
    create(data: TesisDto): import("../../generated/prisma/models").Prisma__TesisClient<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        area: string | null;
        tutor: string | null;
        investigador: string | null;
        resumen: string | null;
        link: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: number, data: Partial<TesisDto>): Promise<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        area: string | null;
        tutor: string | null;
        investigador: string | null;
        resumen: string | null;
        link: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        area: string | null;
        tutor: string | null;
        investigador: string | null;
        resumen: string | null;
        link: string | null;
    }>;
    private ensureExists;
}
