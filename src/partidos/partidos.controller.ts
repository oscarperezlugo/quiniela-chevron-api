import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put
  } from '@nestjs/common';  
  import { PartidosService } from './partidos.service';
  import { ReadPartidoDto } from './dtos/read-partidos.dto';
  import { error } from 'console';
  
  @Controller('api/partidos')
  export class PartidosController {
    constructor(public partidosService: PartidosService) {}
  
    @Get()   
    async getPartido(): Promise<ReadPartidoDto[]> {
      return this.partidosService.getPartidos();
    }
  
    @Post()   
    async createPartido({goleslocal, golesvisita, local, visita, fecha}: ReadPartidoDto){
      try {        
        return this.partidosService.createPartido({         
                visita,
                local,
                goleslocal,
                golesvisita,
                fecha                 
        });
      } catch {
        console.log(error);
        return error;
      }
    }
  
    @Put('/:id')
    async updatePartido(      
        @Param('id') idpartido: number,
        @Body() { goleslocal, golesvisita },
    ) {
      try {
        if (idpartido) {
          return this.partidosService.updatePartido(idpartido, {
            goleslocal,
            golesvisita
          });
        } else {
          return 'Unauthorized';
        }
      } catch {
        return error;       
      }
    }  
    @Put('/status/:id')
    async updateStatus(        
        @Param('id') idpartido: number,        
    ) {
      try {
        if (idpartido) {
          return this.partidosService.updateStatus(idpartido);
        } else {
          return 'Unauthorized';
        }
      } catch {
        return error;       
      }
    }     
  }
