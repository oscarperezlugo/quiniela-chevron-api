import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PartidosController } from './partidos.controller';
import { PartidosService } from './partidos.service';
import { CacheModule } from '@nestjs/common';

@Module({
  imports: [
    CacheModule.register(),    
  ],
  providers: [PartidosService, PrismaService],
  exports: [PartidosService],
  controllers: [PartidosController],
})
export class PartidosModule {}