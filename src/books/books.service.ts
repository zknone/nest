import { Injectable } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { Book, BookDocument } from "./schemas/book.schema";

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

  public findOne(id: number): Promise<BookDocument> {
    return this.bookModel.findById(id).exec();
  }

  public update(id: number, data: UpdateBookDto): Promise<BookDocument> {
    return this.bookModel.findByIdAndUpdate({_id: id}, data, { new: true }).exec();
  }

  public remove(id: number): Promise<BookDocument> {
    return this.bookModel.findByIdAndUpdate(id, {isDeleted: true}, {new: true}).exec();
  }
}
