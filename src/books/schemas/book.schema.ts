import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop({required: true})
    public title: string;

    @Prop()
    public author: string;

    @Prop()
    public description: string;

    @Prop()
    isDeleted: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);