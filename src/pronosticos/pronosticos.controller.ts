import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    UseGuards,
    Post,
    Body,
    Put,
    Delete,
    Request,
    Headers,
  } from '@nestjs/common';  
  import { PronosticoService } from './pronosticos.service';
  import { CreatePronosticoDto } from './dtos/create-pronostico.dto';    
  import { create } from 'domain';
  import { error } from 'console';
  


  @Controller('api/pronosticos')
  export class PronosticoController {
    constructor(public pronosticoService: PronosticoService) {}
  
    @Get()   
    async getC(): Promise<CreatePronosticoDto[]> {
      return this.pronosticoService.getPronosticos();
    }
  
    @Get('/:id')
    async getUsuario(@Param('id', ParseIntPipe) id: number) {
      return await this.pronosticoService.getPronosticosId(id);
    }      
  
    @Post()   
    async createPronostico({idpartido, idusuario, goleslocal, golesvisita}: CreatePronosticoDto){
      try {        
        return this.pronosticoService.createPronostico({         
                idpartido,
                idusuario,
                goleslocal,
                golesvisita                 
        });
      } catch {
        return error;
        console.log(error);
      }
    }
  
    @Put('/:id')
    async updatePronostico(
        @Param('id') idusuario: number,
        @Param('id') idpartido: number,
        @Body() { goleslocal, golesvisita },
    ) {
      try {
        if (idusuario) {
          return this.pronosticoService.updatePronostico(idusuario, idpartido, {
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
          return this.pronosticoService.updateStatus(idpartido);
        } else {
          return 'Unauthorized';
        }
      } catch {
        return error;       
      }
    }     
  

  }
