import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioController } from './usuarios.controller';
import { UsuarioService } from './usuarios.service';
import { CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    CacheModule.register(),    
  ],
  providers: [UsuarioService, PrismaService],
  exports: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
