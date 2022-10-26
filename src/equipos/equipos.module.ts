import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EquiposController } from './equipos.controller';
import { EquiposService } from './equipos.service';
import { CacheModule } from '@nestjs/common';

@Module({
  imports: [CacheModule.register()],
  providers: [EquiposService, PrismaService],
  exports: [EquiposService],
  controllers: [EquiposController],
})
export class EquiposModule {}
