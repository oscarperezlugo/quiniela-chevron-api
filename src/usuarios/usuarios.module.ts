import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UsuarioController } from './usuarios.controller';
import { UsuarioService } from './usuarios.service';
import { CacheModule } from '@nestjs/common';

@Module({
  imports: [CacheModule.register()],
  providers: [UsuarioService, PrismaService],
  exports: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
