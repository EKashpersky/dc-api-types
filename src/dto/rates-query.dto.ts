import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';

export class RatesQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  providerId?: number;
}
