import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

@Exclude()
export class CreateUsuarioDto { 

  @Expose()
  @IsNotEmpty()
  nombreusuario: string;

  @Expose()
  @IsNotEmpty()
  correo: string;

  @Expose()
  @IsNotEmpty()
  contrasena: string;
 
}
