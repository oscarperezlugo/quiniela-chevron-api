import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

@Exclude()
export class ReadEquipoDto {
  @Expose()
  @IsNotEmpty()
  nombre: string;

  @Expose()
  @IsNotEmpty()
  imagen: string;
}
