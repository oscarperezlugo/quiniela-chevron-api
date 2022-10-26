import { UsuarioService } from './usuarios.service';
import { ReadUsuarioDto } from './dtos/readUsuario.dto';
import { CreateUsuarioDto } from './dtos/createUsuario.dto';
export declare class UsuarioController {
    usuarioService: UsuarioService;
    constructor(usuarioService: UsuarioService);
    getCompanies(): Promise<ReadUsuarioDto[]>;
    getUsuario(id: number): Promise<ReadUsuarioDto>;
    createUsuario({ correo, nombreusuario, contrasena }: CreateUsuarioDto): Promise<{
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    } | import(".prisma/client").usuario>;
    updateUsuario(id: number, { correo, contrasena, nombreusuario, puntos }: {
        correo: any;
        contrasena: any;
        nombreusuario: any;
        puntos: any;
    }): Promise<{
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    } | "Unauthorized" | import(".prisma/client").usuario>;
    deleteUsuario(id: number): Promise<{
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    } | "Unauthorized" | ReadUsuarioDto>;
}
