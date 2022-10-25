import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PronosticoController } from './pronosticos.controller';
import { PronosticoService } from './pronosticos.service';
import { CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    CacheModule.register(),    
  ],
  providers: [PronosticoService, PrismaService],
  exports: [PronosticoService],
  controllers: [PronosticoController],
})
export class PronosticosModule {}
