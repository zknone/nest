import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { Connection, Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginUserDTO } from './dto/login-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectConnection() private connection: Connection,
      ) {}

    
      async signUp(data: CreateUserDTO): Promise<UserDocument> {
        try {
            const user = await this.userModel.findOne({email: data.email}).exec();
            if (user) {
                console.log(`User with this email: ${user.email} has already exist`);
                return null;

            } else {
                const newUser = new this.userModel(data);
                return newUser.save();
            }
    
        } catch (error) {
            console.error(`Error: ${error.message}`);
            throw new InternalServerErrorException('Error adding new user');
        }
      }

      async signIn(data: LoginUserDTO): Promise<UserDocument> | null {
            try {
              const user = await this.userModel.findOne({email: data.email}).exec();
              return user;
            } catch (error) {
              console.error(`Error: ${error.message}`);
              throw new InternalServerErrorException('Error finding user');
            }
      }
}
