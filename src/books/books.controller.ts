import { Controller, Get, Post, Body, Param, Put, Delete, BadRequestException, NotFoundException, InternalServerErrorException, UsePipes } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { IParamId } from './interfaces/param-id';
import { BookDocument } from './schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  async findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<BookDocument> {
    console.log(`Received request to get book with ID: ${id}`);
    try {
      const book = await this.booksService.findOneById(id);
      if (!book) {
        console.log(`Book with ID ${id} not found`);
        throw new NotFoundException(`Book with ID ${id} not found`);
      }
      console.log(`Book with ID ${id} found: ${JSON.stringify(book)}`);
      return book;
    } catch (error) {
      console.error(`Error getting book with ID ${id}: ${error.message}`);
      throw new InternalServerErrorException('Error getting book');
    }
  }
  
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    console.log(`Received ID: ${id}`); 
    return this.booksService.update(id, updateBookDto);
  }
  
  @Delete(':id')
  async remove(@Param('id') id: string) {
    console.log(`Received ID: ${id}`); 
    return this.booksService.remove(id);
  }
}
