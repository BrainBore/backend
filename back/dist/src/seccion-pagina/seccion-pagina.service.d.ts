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
        claveCampo: string;
        paginaSlug: string;
        valor: string;
        tipo: string;
    }[]>;
    findOne(claveCampo: string): import("../../generated/prisma/models").Prisma__SeccionPaginaClient<{
        claveCampo: string;
        paginaSlug: string;
        valor: string;
        tipo: string;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(claveCampo: string, data: Partial<Omit<SeccionPaginaData, 'claveCampo'>>): import("../../generated/prisma/models").Prisma__SeccionPaginaClient<{
        claveCampo: string;
        paginaSlug: string;
        valor: string;
        tipo: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
}
