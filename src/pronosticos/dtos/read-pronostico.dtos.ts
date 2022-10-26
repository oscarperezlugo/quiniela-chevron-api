import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

@Exclude()
export class ReadPronosticoDto {
  @Expose()
  @IsNotEmpty()
  idpartido: number;

  @Expose()
  @IsNotEmpty()
  idusuario: number;

  @Expose()
  @IsNotEmpty()
  golesvisita: number;

  @Expose()
  @IsNotEmpty()
  goleslocal: number;
}
