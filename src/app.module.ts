import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquiposModule } from './equipos/equipos.module';
import { PartidosModule } from './partidos/partidos.module';
import { PrismaService } from './prisma/prisma.service';
import { PronosticosModule } from './pronosticos/pronosticos.module';
import { UsuarioModule } from './usuarios/usuarios.module';

@Module({
  imports: [EquiposModule, PartidosModule, PronosticosModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
