import { PrismaService } from '../prisma/prisma.service';
export interface DocumentoDigitalDto {
    titulo?: string;
    tipo?: string;
    peso?: string;
    fechaActualizacion?: string | Date;
    linkDescarga?: string;
}
export declare class DocumentoDigitalService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(search?: string, tipo?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        peso: string | null;
        fechaActualizacion: Date | null;
        linkDescarga: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        peso: string | null;
        fechaActualizacion: Date | null;
        linkDescarga: string | null;
    }>;
    create(data: DocumentoDigitalDto): import("../../generated/prisma/models").Prisma__DocumentoDigitalClient<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        peso: string | null;
        fechaActualizacion: Date | null;
        linkDescarga: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: number, data: Partial<DocumentoDigitalDto>): Promise<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        peso: string | null;
        fechaActualizacion: Date | null;
        linkDescarga: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        tipo: string | null;
        titulo: string | null;
        peso: string | null;
        fechaActualizacion: Date | null;
        linkDescarga: string | null;
    }>;
    private ensureExists;
}
