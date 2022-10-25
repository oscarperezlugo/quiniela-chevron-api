import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EquiposModule} from '../src/equipos/equipos.module'
import {PartidosModule} from '../src/partidos/partidos.module'
import {PronosticosModule} from '../src/pronosticos/pronosticos.module'
import {UsuarioModule} from '../src/usuarios/usuarios.module'

@Module({
  imports: [EquiposModule, PartidosModule, PronosticosModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
