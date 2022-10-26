import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';  
  import { UsuarioService } from './usuarios.service';
  import { ReadUsuarioDto } from './dtos/readUsuario.dto';  
  import { CreateUsuarioDto } from './dtos/createUsuario.dto';
  import { error } from 'console';
  
  @Controller('api/usuario')
  export class UsuarioController {
    constructor(public usuarioService: UsuarioService) {}
  
    @Get()   
    async getCompanies(): Promise<ReadUsuarioDto[]> {
      return this.usuarioService.getUsuarios();
    }
  
    @Get('/:id')
    async getUsuario(@Param('id', ParseIntPipe) id: number) {
      return await this.usuarioService.getUsuarioId(id);
    }      
  
    @Post()   
    async createUsuario({correo, nombreusuario, contrasena}: CreateUsuarioDto){
      try {        
        return this.usuarioService.createUsuario({         
                contrasena,
                correo,
                nombreusuario,
                puntos: 0                 
        });
      } catch {
        console.log(error);
        return error;
      }
    }
  
    @Put('/:id')
    async updateUsuario(
        @Param('id') id: number,
        @Body() { correo, contrasena, nombreusuario, puntos },
    ) {
      try {
        if (id) {
          return this.usuarioService.updateUsuario(id, {
            contrasena,
            correo,
            nombreusuario,
            puntos
          });
        } else {
          return 'Unauthorized';
        }
      } catch {
        return error;       
      }
    }      
  
    @Delete('/:id')    
    async deleteUsuario(@Param('id', ParseIntPipe) id: number) {
      try {        
        if (id) {
          return await this.usuarioService.deleteUsuario(id);
        } else {
          return 'Unauthorized';
        }
      } catch {
        return error; 
      }
    }
  }
  