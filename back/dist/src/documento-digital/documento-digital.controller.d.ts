import { DocumentoDigitalDto, DocumentoDigitalService } from './documento-digital.service';
export declare class DocumentoDigitalController {
    private readonly service;
    constructor(service: DocumentoDigitalService);
    findAll(search?: string, tipo?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        peso: string | null;
        fechaActualizacion: Date | null;
        linkDescarga: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        peso: string | null;
        fechaActualizacion: Date | null;
        linkDescarga: string | null;
    }>;
    create(data: DocumentoDigitalDto): import("../../generated/prisma/models").Prisma__DocumentoDigitalClient<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        peso: string | null;
        fechaActualizacion: Date | null;
        linkDescarga: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: number, data: Partial<DocumentoDigitalDto>): Promise<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        peso: string | null;
        fechaActualizacion: Date | null;
        linkDescarga: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        peso: string | null;
        fechaActualizacion: Date | null;
        linkDescarga: string | null;
    }>;
}
