import { EventoDto, EventoService } from './evento.service';
export declare class EventoController {
    private readonly eventoService;
    constructor(eventoService: EventoService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        titulo: string;
        estado: string;
        ubicacion: string;
        categoria: string;
        color: string;
        fecha: Date;
        hora: string;
    }[]>;
    findOne(id: number): import("../../generated/prisma/models").Prisma__EventoClient<{
        id: number;
        titulo: string;
        estado: string;
        ubicacion: string;
        categoria: string;
        color: string;
        fecha: Date;
        hora: string;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    create(data: EventoDto): import("../../generated/prisma/models").Prisma__EventoClient<{
        id: number;
        titulo: string;
        estado: string;
        ubicacion: string;
        categoria: string;
        color: string;
        fecha: Date;
        hora: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: number, data: Partial<EventoDto>): Promise<{
        id: number;
        titulo: string;
        estado: string;
        ubicacion: string;
        categoria: string;
        color: string;
        fecha: Date;
        hora: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string;
        estado: string;
        ubicacion: string;
        categoria: string;
        color: string;
        fecha: Date;
        hora: string;
    }>;
}
