import { AuthService } from './auth.service';
interface UserDTO {
    email: string;
    password: string;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    logIn(user: UserDTO): Promise<{
        access_token: string;
    }>;
    signUp(user: UserDTO): Promise<{
        access_token: string;
    }>;
}
export {};
