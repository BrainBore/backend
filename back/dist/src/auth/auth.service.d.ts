import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "../prisma/prisma.service";
export declare class AuthService {
    private prismaService;
    private jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    logIn(email: string, password: string): Promise<{
        access_token: string;
    }>;
    signUp(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
