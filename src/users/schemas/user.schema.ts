import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    
    @Prop({required: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);