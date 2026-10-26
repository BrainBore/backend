import { ConvocatoriaAuxiliaturaDto, ConvocatoriaAuxiliaturaService } from './convocatoria-auxiliatura.service';
export declare class ConvocatoriaAuxiliaturaController {
    private readonly service;
    constructor(service: ConvocatoriaAuxiliaturaService);
    findAll(estado?: string, tipo?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        tipo: string;
        materia: string;
        descripcion: string;
        fechaPublicacion: Date | null;
        fechaCierre: Date | null;
        plazas: number;
        estado: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        tipo: string;
        materia: string;
        descripcion: string;
        fechaPublicacion: Date | null;
        fechaCierre: Date | null;
        plazas: number;
        estado: string;
    }>;
    create(data: ConvocatoriaAuxiliaturaDto): Promise<{
        id: number;
        tipo: string;
        materia: string;
        descripcion: string;
        fechaPublicacion: Date | null;
        fechaCierre: Date | null;
        plazas: number;
        estado: string;
    }>;
    update(id: number, data: Partial<ConvocatoriaAuxiliaturaDto>): Promise<{
        id: number;
        tipo: string;
        materia: string;
        descripcion: string;
        fechaPublicacion: Date | null;
        fechaCierre: Date | null;
        plazas: number;
        estado: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        tipo: string;
        materia: string;
        descripcion: string;
        fechaPublicacion: Date | null;
        fechaCierre: Date | null;
        plazas: number;
        estado: string;
    }>;
}
