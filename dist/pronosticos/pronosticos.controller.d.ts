import { PronosticoService } from './pronosticos.service';
import { CreatePronosticoDto } from './dtos/create-pronostico.dto';
export declare class PronosticoController {
    pronosticoService: PronosticoService;
    constructor(pronosticoService: PronosticoService);
    getC(): Promise<CreatePronosticoDto[]>;
    getUsuario(id: number): Promise<CreatePronosticoDto[]>;
    createPronostico({ idpartido, idusuario, goleslocal, golesvisita, }: CreatePronosticoDto): Promise<{
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    } | import(".prisma/client").pronosticos>;
    updatePronostico(idusuario: number, idpartido: number, { goleslocal, golesvisita }: {
        goleslocal: any;
        golesvisita: any;
    }): Promise<{
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    } | import(".prisma/client").Prisma.BatchPayload | "Unauthorized">;
    updateStatus(idpartido: number): Promise<{
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    } | import(".prisma/client").Prisma.BatchPayload | "Unauthorized">;
}
