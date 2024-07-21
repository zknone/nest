import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { BookDocument } from "./schemas/book.schema";

@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() body: CreateBookDto): Promise<BookDocument> {
    return this.booksService.create(body);
  }

  @Get()
  findAll(): Promise<BookDocument[]> {
    return this.booksService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.booksService.remove(+id);
  }
}
