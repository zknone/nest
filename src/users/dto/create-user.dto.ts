import { PartialType } from "@nestjs/mapped-types";
import { LoginUserDTO } from "./login-user.dto";

export class CreateUserDTO extends PartialType(LoginUserDTO){
    lastName: string;
    firstName: string;
}
