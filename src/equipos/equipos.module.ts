import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EquiposController } from './equipos.controller';
import { EquiposService } from './equipos.service';
import { CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    CacheModule.register(),    
  ],
  providers: [EquiposService, PrismaService],
  exports: [EquiposService],
  controllers: [EquiposController],
})
export class EquiposModule {}