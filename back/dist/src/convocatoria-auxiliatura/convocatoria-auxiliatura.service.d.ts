import { PrismaService } from '../prisma/prisma.service';
export interface ConvocatoriaAuxiliaturaDto {
    materia: string;
    tipo: string;
    descripcion: string;
    fechaPublicacion?: string | Date;
    fechaCierre?: string | Date;
    plazas: number;
    estado: string;
}
export declare class ConvocatoriaAuxiliaturaService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    private ensureExists;
    private executeWrite;
}
