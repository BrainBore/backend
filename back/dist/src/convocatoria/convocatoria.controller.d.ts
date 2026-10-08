import { ConvocatoriaDto, ConvocatoriaService } from './convocatoria.service';
export declare class ConvocatoriaController {
    private readonly convocatoriaService;
    constructor(convocatoriaService: ConvocatoriaService);
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
}
