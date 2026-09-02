import { PrismaService } from "../prisma/prisma.service";
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getUsers(): Promise<{
        id: string;
        email: string;
        password: string;
    }[]>;
}
