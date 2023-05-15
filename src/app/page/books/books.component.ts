import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[];

  constructor(public booksService: BooksService){
    this.books = this.booksService.getAll();
  }

  deleteBook(id_book:number):void{
    this.booksService.delete(id_book);
  }

  searchBook(id_book:string):void{
    if (id_book != '') {
      this.books = [this.booksService.getOne(Number(id_book))];
    }else{
      this.books = this.booksService.getAll();
    }
  }
}
