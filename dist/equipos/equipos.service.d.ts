import { equipos } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { ReadEquipoDto } from './dtos/read-equipos.dto';
interface Equipo {
    nombre: string;
    imagen: string;
}
export declare class EquiposService {
    private prisma;
    constructor(prisma: PrismaService);
    getEquipos(): Promise<ReadEquipoDto[]>;
    createEquipos({ nombre, imagen }: Equipo): Promise<equipos>;
}
export {};
