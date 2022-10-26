import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PronosticoController } from './pronosticos.controller';
import { PronosticoService } from './pronosticos.service';
import { CacheModule } from '@nestjs/common';

@Module({
  imports: [CacheModule.register()],
  providers: [PronosticoService, PrismaService],
  exports: [PronosticoService],
  controllers: [PronosticoController],
})
export class PronosticosModule {}
