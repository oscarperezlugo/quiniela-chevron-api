import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

@Exclude()
export class ReadPartidoDto {
  @Expose()
  @IsNotEmpty()
  local: number;

  @Expose()
  @IsNotEmpty()
  visita: number;

  @Expose()
  @IsNotEmpty()
  goleslocal: number;

  @Expose()
  @IsNotEmpty()
  golesvisita: number;

  @Expose()
  @IsNotEmpty()
  fecha: Date;

  
  
}