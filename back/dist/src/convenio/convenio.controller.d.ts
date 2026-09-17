import { ConvenioDto, ConvenioService } from './convenio.service';
export declare class ConvenioController {
    private readonly convenioService;
    constructor(convenioService: ConvenioService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        titulo: string;
        descripcion: string;
        sector: string;
    }[]>;
    findOne(id: number): import("../../generated/prisma/models").Prisma__ConvenioClient<{
        id: number;
        titulo: string;
        descripcion: string;
        sector: string;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    create(data: ConvenioDto): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        sector: string;
    }>;
    update(id: number, data: Partial<ConvenioDto>): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        sector: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        sector: string;
    }>;
}
