import { IsInt, IsNumber, Max, Min } from 'class-validator';

export class UpsertInflationDto {
  @IsInt()
  @Min(1900)
  @Max(2100)
  year: number;

  @IsNumber()
  value: number;
}
