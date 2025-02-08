import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsUUID,
  Min,
  MinLength,
} from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

export class AtomaDTO {

  @IsString()
  @IsOptional()
  @Expose()
  chatId: string;

  
}
