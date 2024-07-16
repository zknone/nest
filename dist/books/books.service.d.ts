import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
export declare class BooksService {
    create(createBookDto: CreateBookDto): string;
    findAll(): {
        id: number;
        title: string;
        description: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateBookDto: UpdateBookDto): string;
    remove(id: number): string;
}
