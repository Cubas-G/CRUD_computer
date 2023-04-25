import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUsersDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(15)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    lastname: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    age: string;

    @IsNumber()
    @IsNotEmpty()
    idpersonal:number;

    @IsNotEmpty()
    street:string;

}
