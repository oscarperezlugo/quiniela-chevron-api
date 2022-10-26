import { Injectable, NotFoundException } from '@nestjs/common';
import { partidos } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { PrismaService } from './../prisma/prisma.service';
import { ReadPartidoDto } from './dtos/read-partidos.dto';

interface Partido {
    local: number,
    visita: number,
    goleslocal: number,
    golesvisita: number
    fecha: Date
  }
  interface PartidoUpdate {
    goleslocal: number,
    golesvisita: number
  }
  interface StatusUpdate {
    status: number;
  }


@Injectable()
export class PartidosService{
    constructor(private prisma: PrismaService) {}
    async getPartidos(): Promise<ReadPartidoDto[]> {
      const partidos: partidos[] = await this.prisma.partidos.findMany();
  
      if (!partidos) throw new NotFoundException('No record found');
  
      return plainToClass(ReadPartidoDto, partidos);
    }
       
    async createPartido({ local, visita, goleslocal, golesvisita, fecha }: Partido) {
        const partido = await this.prisma.partidos.create({
          data: {
            local,
            visita,
            goleslocal,
            golesvisita,
            fecha
          },
        });    
        return partido;
    }  
    async updatePartido(        
        idpartido: number,      
        { golesvisita, goleslocal }: PartidoUpdate,
      ) {
        const partido = await this.prisma.pronosticos.updateMany({
          where: {                     
            idpartido: idpartido
           },
          data: {
            goleslocal,
            golesvisita
          },
        });
    
        if (!partido) throw new NotFoundException(`Company not updated`);
    
        return partido;
    }
    async updateStatus(
        id: number,              
      ) {
        const partido = await this.prisma.partidos.updateMany({
          where: { idpartidos: id },
          data: {
            status: 1
          },
        });
    
        if (!partido) throw new NotFoundException(`Company not updated`);
    
        return partido;
    }
}