import { EquiposService } from './equipos.service';
import { ReadEquipoDto } from './dtos/read-equipos.dto';
export declare class EquiposController {
    equipoService: EquiposService;
    constructor(equipoService: EquiposService);
    getPronosticos(): Promise<ReadEquipoDto[]>;
    createPronostico({ nombre, imagen }: ReadEquipoDto): Promise<import(".prisma/client").equipos | {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    }>;
}
