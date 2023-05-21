import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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

  public title:string = '';
  public type:string = '';
  public author:string = '';
  public price:number;
  public photo:string = '';
  public id_book:number;

  addBook(addBookForm: NgForm){
    let newBook = new Book(this.title,this.type,this.author,this.price,this.photo,this.id_book,0);
    this.booksService.add(newBook);
    this.router.navigateByUrl('/books');
  }
}
