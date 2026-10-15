import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Matches,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class IngestRateItemDto {
  @IsString()
  @Matches(/^[A-Za-z]{3}$/)
  a3c: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  symbol: string;

  @IsNumber({ maxDecimalPlaces: 8 })
  @IsPositive()
  mid: number;
}

export class IngestRatesDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  provider: string;

  @IsString()
  @Matches(/^[A-Za-z]{3}$/)
  baseCurrency: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => IngestRateItemDto)
  rates: IngestRateItemDto[];
}
