import { partidos } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { ReadPartidoDto } from './dtos/read-partidos.dto';
interface Partido {
    local: number;
    visita: number;
    goleslocal: number;
    golesvisita: number;
    fecha: Date;
}
interface PartidoUpdate {
    goleslocal: number;
    golesvisita: number;
}
export declare class PartidosService {
    private prisma;
    constructor(prisma: PrismaService);
    getPartidos(): Promise<ReadPartidoDto[]>;
    createPartido({ local, visita, goleslocal, golesvisita, fecha, }: Partido): Promise<partidos>;
    updatePartido(idpartido: number, { golesvisita, goleslocal }: PartidoUpdate): Promise<import(".prisma/client").Prisma.BatchPayload>;
    updateStatus(id: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
export {};
