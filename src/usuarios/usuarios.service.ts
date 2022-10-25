import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { usuario } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { Certificate } from 'crypto';
import { read } from 'fs';
import { PrismaService } from './../prisma/prisma.service';
import {ReadUsuarioDto} from './dtos/readUsuario.dto'

interface Usuario {
    correo: string;
    contrasena: string;
    nombreusuario: string;
    puntos: number;
  }
  interface UsuarioUpdate {
    correo: string;
    contrasena: string;
    nombreusuario: string;
    puntos: number;
  }
  interface PuntosUpdate {
    puntosu: number;
  }
  
  

@Injectable()
export class UsuarioService{
    constructor(private prisma: PrismaService) {}

    async createUsuario({ correo, contrasena, nombreusuario, puntos }: Usuario) {
        const usuario = await this.prisma.usuario.create({
          data: {
            correo,
            contrasena,
            nombreusuario,
          },
        });    
        return usuario;
    }  
    async getUsuarios(): Promise<ReadUsuarioDto[]> {
        const usuario: usuario[] = await this.prisma.usuario.findMany();
    
        if (!usuario) throw new NotFoundException('No record found');
    
        return plainToClass(ReadUsuarioDto, usuario);
    }
    async updateUsuario(
        id: number,      
        { nombreusuario, contrasena, correo }: UsuarioUpdate,
      ) {
        const usuario = await this.prisma.usuario.update({
          where: { idusuario: id },
          data: {
           nombreusuario,
           contrasena,
           correo
          },
        });
    
        if (!usuario) throw new NotFoundException(`Company not updated`);
    
        return usuario;
    }
    async updatePuntos(
        id: number,      
        { puntosu }: PuntosUpdate,
      ) {
        const usuario = await this.prisma.usuario.update({
          where: { idusuario: id },
          data: {
            puntos: puntosu
          },
        });
    
        if (!usuario) throw new NotFoundException(`Company not updated`);
    
        return usuario;
    }
    async deleteUsuario(id: number) {
        const usuario = await this.prisma.usuario.delete({
          where: {
            idusuario: id,
          },
        });
    
        if (!usuario) throw new NotFoundException('No record found');
    
        return plainToClass(ReadUsuarioDto, usuario);
    }
    async getUsuarioId(id: number): Promise<ReadUsuarioDto> {
        const usuario = await this.prisma.usuario.findUnique({ where: { idusuario: id } });
    
        if (!usuario) throw new NotFoundException(`Company doesn't exist`);
    
        return plainToClass(ReadUsuarioDto, usuario);
    }
    
    
    

    
      
}