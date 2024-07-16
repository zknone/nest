import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BooksModule } from "./books/books.module";
import { BooksController } from "./books/books.controller";
import { BooksService } from "./books/books.service";

@Module({
  imports: [BooksModule],
  controllers: [
    AppController,
    BooksController
  ],
  providers: [AppService, BooksService],
})
export class AppModule {}
