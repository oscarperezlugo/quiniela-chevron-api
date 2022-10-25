import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }
  async login({ correo, contrasena }) {
    const usuario = await this.prisma.usuario.findFirst({
      where: {
        correo,
        contrasena
      },
    });    
    if(usuario){
      return usuario
    }
    else{
      return 'correo o contrasena invalidos'
    };
} 
}
