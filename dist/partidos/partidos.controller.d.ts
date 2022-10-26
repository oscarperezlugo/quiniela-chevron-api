import { PartidosService } from './partidos.service';
import { ReadPartidoDto } from './dtos/read-partidos.dto';
export declare class PartidosController {
    partidosService: PartidosService;
    constructor(partidosService: PartidosService);
    getPartido(): Promise<ReadPartidoDto[]>;
    createPartido({ goleslocal, golesvisita, local, visita, fecha, }: ReadPartidoDto): Promise<{
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    } | import(".prisma/client").partidos>;
    updatePartido(idpartido: number, { goleslocal, golesvisita }: {
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
