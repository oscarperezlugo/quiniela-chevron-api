import { pronosticos } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePronosticoDto } from './dtos/create-pronostico.dto';
interface Pronostico {
    idpartido: number;
    idusuario: number;
    goleslocal: number;
    golesvisita: number;
}
interface PronosticoUpdate {
    goleslocal: number;
    golesvisita: number;
}
export declare class PronosticoService {
    private prisma;
    constructor(prisma: PrismaService);
    getPronosticos(): Promise<CreatePronosticoDto[]>;
    getPronosticosId(id: number): Promise<CreatePronosticoDto[]>;
    createPronostico({ idusuario, idpartido, goleslocal, golesvisita, }: Pronostico): Promise<pronosticos>;
    updatePronostico(idusuario: number, idpartido: number, { golesvisita, goleslocal }: PronosticoUpdate): Promise<import(".prisma/client").Prisma.BatchPayload>;
    updateStatus(id: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
export {};
