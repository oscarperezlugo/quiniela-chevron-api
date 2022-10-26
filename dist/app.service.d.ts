import { PrismaService } from './prisma/prisma.service';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    getHello(): string;
    login({ correo, contrasena }: {
        correo: any;
        contrasena: any;
    }): Promise<import(".prisma/client").usuario | "correo o contrasena invalidos">;
}
