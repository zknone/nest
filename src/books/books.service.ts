import { Injectable } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

const data = [
  {
    id: 1,
    title: "Harry Potter",
    description: "The best book ever",
  },
  {
    id: 2,
    title: "The Lord of the Rings",
    description: "The second best book ever",
  },
  {
    id: 3,
    title: "The Hobbit",
    description: "The third best book ever",
  },
];

@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto) {
    return "This action adds a new book";
  }

  findAll() {
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
