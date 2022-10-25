import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

@Exclude()
export class ReadUsuarioDto {
  @Expose()
  @IsNotEmpty()
  idusuario: number;

  @Expose()
  @IsNotEmpty()
  nombreusuario: String;

  @Expose()
  @IsNotEmpty()
  puntos: number;

  
}
