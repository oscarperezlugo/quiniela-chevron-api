import { usuario } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { ReadUsuarioDto } from './dtos/readUsuario.dto';
interface Usuario {
    correo: string;
    contrasena: string;
    nombreusuario: string;
    puntos: number;
}
interface UsuarioUpdate {
    correo: string;
    contrasena: string;
    nombreusuario: string;
    puntos: number;
}
interface PuntosUpdate {
    puntosu: number;
}
export declare class UsuarioService {
    private prisma;
    constructor(prisma: PrismaService);
    createUsuario({ correo, contrasena, nombreusuario, puntos }: Usuario): Promise<usuario>;
    getUsuarios(): Promise<ReadUsuarioDto[]>;
    updateUsuario(id: number, { nombreusuario, contrasena, correo }: UsuarioUpdate): Promise<usuario>;
    updatePuntos(id: number, { puntosu }: PuntosUpdate): Promise<usuario>;
    deleteUsuario(id: number): Promise<ReadUsuarioDto>;
    getUsuarioId(id: number): Promise<ReadUsuarioDto>;
}
export {};
