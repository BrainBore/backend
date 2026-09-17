import { PrismaService } from '../prisma/prisma.service';
export interface SeccionPaginaData {
    claveCampo: string;
    paginaSlug: string;
    valor: string;
    tipo: string;
}
export declare class SeccionPaginaService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        tipo: string;
        claveCampo: string;
        paginaSlug: string;
        valor: string;
    }[]>;
    findOne(claveCampo: string): import("../../generated/prisma/models").Prisma__SeccionPaginaClient<{
        tipo: string;
        claveCampo: string;
        paginaSlug: string;
        valor: string;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(claveCampo: string, data: Partial<Omit<SeccionPaginaData, 'claveCampo'>>): import("../../generated/prisma/models").Prisma__SeccionPaginaClient<{
        tipo: string;
        claveCampo: string;
        paginaSlug: string;
        valor: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
}
