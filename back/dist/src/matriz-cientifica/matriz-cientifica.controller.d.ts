import { MatrizCientificaDto, MatrizCientificaService } from './matriz-cientifica.service';
export declare class MatrizCientificaController {
    private readonly service;
    constructor(service: MatrizCientificaService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        titulo: string;
        descripcion: string;
        autor: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        autor: string;
    }>;
    create(data: MatrizCientificaDto): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        autor: string;
    }>;
    update(id: number, data: Partial<MatrizCientificaDto>): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        autor: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        titulo: string;
        descripcion: string;
        autor: string;
    }>;
}
