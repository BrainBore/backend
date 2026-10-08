import { PrismaService } from '../prisma/prisma.service';
export interface ConvocatoriaDto {
    periodoConvocatoria: string;
    descConvocatoria: string;
    insPreu: string;
    insPsa: string;
    fechaEntregaDocs: string | Date;
    matriculacionKardex: string;
}
export declare class ConvocatoriaService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        idConvocatoria: number;
        periodoConvocatoria: string;
        descConvocatoria: string;
        insPreu: string;
        insPsa: string;
        fechaEntregaDocs: Date;
        matriculacionKardex: string;
    }[]>;
    findOne(id: number): Promise<{
        idConvocatoria: number;
        periodoConvocatoria: string;
        descConvocatoria: string;
        insPreu: string;
        insPsa: string;
        fechaEntregaDocs: Date;
        matriculacionKardex: string;
    }>;
    create(data: ConvocatoriaDto): Promise<{
        idConvocatoria: number;
        periodoConvocatoria: string;
        descConvocatoria: string;
        insPreu: string;
        insPsa: string;
        fechaEntregaDocs: Date;
        matriculacionKardex: string;
    }>;
    update(id: number, data: Partial<ConvocatoriaDto>): Promise<{
        idConvocatoria: number;
        periodoConvocatoria: string;
        descConvocatoria: string;
        insPreu: string;
        insPsa: string;
        fechaEntregaDocs: Date;
        matriculacionKardex: string;
    }>;
    remove(id: number): Promise<{
        idConvocatoria: number;
        periodoConvocatoria: string;
        descConvocatoria: string;
        insPreu: string;
        insPsa: string;
        fechaEntregaDocs: Date;
        matriculacionKardex: string;
    }>;
    private ensureExists;
    private executeWrite;
}
