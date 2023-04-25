import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateAzusDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(15)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    processor: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    GraphicCard: string;

    @IsNumber()
    @IsNotEmpty()
    price:number;

    @IsNumber()
    @IsNotEmpty()
    stock:number;

    @IsString()
    @IsOptional()
    color?:string;

}
