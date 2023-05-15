import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public books: Book[];
  constructor(public booksService: BooksService, public router: Router){
    this.books = this.booksService.getAll();
  }

  addBook(title:string,type:string,author:string,price:number,photo:string,id_book:number){
    let newBook = new Book(title,type,author,price,photo,id_book,0);
    this.booksService.add(newBook);
    this.router.navigateByUrl('/books');
  }
}
