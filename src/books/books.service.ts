import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model, Types } from "mongoose";
import { Book, BookDocument } from "./schemas/book.schema";
import { ObjectId } from "mongodb";

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public create(data: CreateBookDto): Promise<BookDocument> {
    const book = new this.bookModel(data);
    return book.save();
  }

  public findAll(): Promise<BookDocument[]> {
    return this.bookModel.find().exec();
  }

  async findOneById(id: string): Promise<BookDocument | null> {
    try {
      const objectId = new ObjectId(id);
      const book = await this.bookModel.findById(objectId).exec();
      return book;
    } catch (error) {
      console.error(`Error finding book with ID ${id}: ${error.message}`);
      throw new InternalServerErrorException('Error finding book');
    }
  }

  public update(id: string, data: UpdateBookDto): Promise<BookDocument> {
    const book = this.bookModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  public remove(id: string): Promise<BookDocument> {
    const book = this.bookModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true }).exec();
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }
}
