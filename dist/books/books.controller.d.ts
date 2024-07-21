import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { BookDocument } from "./schemas/book.schema";
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(body: CreateBookDto): Promise<BookDocument>;
    findAll(): Promise<BookDocument[]>;
    findOne(id: string): Promise<BookDocument>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<BookDocument>;
    remove(id: string): Promise<BookDocument>;
}
