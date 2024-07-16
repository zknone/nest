"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
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
let BooksService = class BooksService {
    create(createBookDto) {
        return "This action adds a new book";
    }
    findAll() {
        return data;
    }
    findOne(id) {
        return `This action returns a #${id} book`;
    }
    update(id, updateBookDto) {
        return `This action updates a #${id} book`;
    }
    remove(id) {
        return `This action removes a #${id} book`;
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
//# sourceMappingURL=books.service.js.map