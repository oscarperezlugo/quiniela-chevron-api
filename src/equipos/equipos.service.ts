import { Injectable, NotFoundException } from '@nestjs/common';
import { equipos } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { PrismaService } from '../prisma/prisma.service';
import { ReadEquipoDto } from './dtos/read-equipos.dto';

interface Equipo {
  nombre: string;
  imagen: string;
}

@Injectable()
export class EquiposService {
  constructor(private prisma: PrismaService) {}
  async getEquipos(): Promise<ReadEquipoDto[]> {
    const equipos: equipos[] = await this.prisma.equipos.findMany();

    if (!equipos) throw new NotFoundException('No record found');

    return plainToClass(ReadEquipoDto, equipos);
  }
  async createEquipos({ nombre, imagen }: Equipo) {
    const equipo = await this.prisma.equipos.create({
      data: {
        nombre,
        imagen,
      },
    });
    return equipo;
  }
}
