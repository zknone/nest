import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDocument } from './schemas/book.schema';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<BookDocument>;
    findAll(): Promise<BookDocument[]>;
    getBookById(id: string): Promise<BookDocument>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<BookDocument>;
    remove(id: string): Promise<BookDocument>;
}
