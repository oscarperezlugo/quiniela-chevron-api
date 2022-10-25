import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { pronosticos } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { Certificate } from 'crypto';
import { read } from 'fs';
import { PrismaService } from './../prisma/prisma.service';
import { CreatePronosticoDto } from './dtos/create-pronostico.dto';

interface Pronostico {
    idpartido: number,
    idusuario: number,
    goleslocal: number,
    golesvisita: number
  }
  interface PronosticoUpdate {
    goleslocal: number,
    golesvisita: number
  }
  interface StatusUpdate {
    status: number;
  }


@Injectable()
export class PronosticoService{
    constructor(private prisma: PrismaService) {}
    async getPronosticos(): Promise<CreatePronosticoDto[]> {
      const pronostico: pronosticos[] = await this.prisma.pronosticos.findMany();
  
      if (!pronostico) throw new NotFoundException('No record found');
  
      return plainToClass(CreatePronosticoDto, pronostico);
    }
    async getPronosticosId(id: number): Promise<CreatePronosticoDto[]> {
      const pronostico: pronosticos[] = await this.prisma.pronosticos.findMany({ where: { idusuario: id } });
  
      if (!pronostico) throw new NotFoundException(`doesn't exist`);
  
      return plainToClass(CreatePronosticoDto, pronostico);
    }     
    async createPronostico({ idusuario, idpartido, goleslocal, golesvisita }: Pronostico) {
        const pronostico = await this.prisma.pronosticos.create({
          data: {
            idpartido,
            idusuario,
            goleslocal,
            golesvisita
          },
        });    
        return pronostico;
    }  
    async updatePronostico(
        idusuario: number,
        idpartido: number,      
        { golesvisita, goleslocal }: PronosticoUpdate,
      ) {
        const pronostico = await this.prisma.pronosticos.updateMany({
          where: { 
            idusuario: idusuario,
            idpartido: idpartido
           },
          data: {
            goleslocal,
            golesvisita
          },
        });
    
        if (!pronostico) throw new NotFoundException(`Company not updated`);
    
        return pronostico;
    }
    async updateStatus(
        id: number,              
      ) {
        const pronostico = await this.prisma.pronosticos.updateMany({
          where: { idpartido: id },
          data: {
            status: 1
          },
        });
    
        if (!pronostico) throw new NotFoundException(`Company not updated`);
    
        return pronostico;
    }
}