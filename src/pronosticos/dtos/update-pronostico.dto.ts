import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

@Exclude()
export class UpdatePronosticoDto {
  @Expose()
  @IsNotEmpty()
  golesvisita: number;

  @Expose()
  @IsNotEmpty()
  goleslocal: number;
}
