"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("../libs/bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    constructor(prismaService, jwtService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
    }
    async logIn(email, password) {
        try {
            const user = await this.prismaService.user.findUnique({
                where: {
                    email,
                },
            });
            if (!user) {
                throw new common_1.BadRequestException('Email o contraseña invalidos.');
            }
            const isPasswordMatch = await (0, bcrypt_1.compare)(password, user.password);
            if (!isPasswordMatch) {
                throw new common_1.BadRequestException('Email o contraseña invalidos.');
            }
            const { password: _, ...userWithoutPassword } = user;
            const paylod = {
                ...userWithoutPassword,
            };
            const access_token = await this.jwtService.signAsync(paylod);
            return { access_token };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Error al hacer log in');
        }
    }
    async signUp(email, password) {
        try {
            const userFound = await this.prismaService.user.findUnique({
                where: {
                    email,
                },
            });
            if (userFound)
                throw new common_1.BadRequestException('El usuario ya existe');
            const hashedPassword = await (0, bcrypt_1.encrypt)(password);
            const user = await this.prismaService.user.create({
                data: {
                    email,
                    password: hashedPassword,
                },
            });
            const { password: _, ...userWithoutPassword } = user;
            const paylod = {
                ...userWithoutPassword,
            };
            const access_token = await this.jwtService.signAsync(paylod);
            return { access_token };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new Error(error);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map