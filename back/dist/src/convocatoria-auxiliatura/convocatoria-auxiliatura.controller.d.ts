import { ConvocatoriaAuxiliaturaDto, ConvocatoriaAuxiliaturaService } from './convocatoria-auxiliatura.service';
export declare class ConvocatoriaAuxiliaturaController {
    private readonly service;
    constructor(service: ConvocatoriaAuxiliaturaService);
    findAll(estado?: string, tipo?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        descripcion: string;
        tipo: string;
        fechaCierre: Date | null;
        materia: string;
        fechaPublicacion: Date | null;
        plazas: number;
        estado: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        descripcion: string;
        tipo: string;
        fechaCierre: Date | null;
        materia: string;
        fechaPublicacion: Date | null;
        plazas: number;
        estado: string;
    }>;
    create(data: ConvocatoriaAuxiliaturaDto): Promise<{
        id: number;
        descripcion: string;
        tipo: string;
        fechaCierre: Date | null;
        materia: string;
        fechaPublicacion: Date | null;
        plazas: number;
        estado: string;
    }>;
    update(id: number, data: Partial<ConvocatoriaAuxiliaturaDto>): Promise<{
        id: number;
        descripcion: string;
        tipo: string;
        fechaCierre: Date | null;
        materia: string;
        fechaPublicacion: Date | null;
        plazas: number;
        estado: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        descripcion: string;
        tipo: string;
        fechaCierre: Date | null;
        materia: string;
        fechaPublicacion: Date | null;
        plazas: number;
        estado: string;
    }>;
}
