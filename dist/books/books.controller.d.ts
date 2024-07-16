import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): string;
    findAll(): {
        id: number;
        title: string;
        description: string;
    }[];
    findOne(id: string): string;
    update(id: string, updateBookDto: UpdateBookDto): string;
    remove(id: string): string;
}
