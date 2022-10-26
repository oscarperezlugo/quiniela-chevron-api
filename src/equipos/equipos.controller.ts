import {
    Controller,
    Get,
    Post,
  } from '@nestjs/common';  
  import { EquiposService } from './equipos.service';
  import { ReadEquipoDto } from './dtos/read-equipos.dto';
  import { error } from 'console';

  @Controller('api/equipos')
  export class EquiposController {
    constructor(public equipoService: EquiposService) {}
  
    @Get()   
    async getPronosticos(): Promise<ReadEquipoDto[]> {
      return this.equipoService.getEquipos();
    }          
  
    @Post()   
    async createPronostico({nombre, imagen}: ReadEquipoDto){
      try {        
        return this.equipoService.createEquipos({         
                nombre,
                imagen
        });
      } catch {
        console.log(error);
        return error;
      }
    }
  }
