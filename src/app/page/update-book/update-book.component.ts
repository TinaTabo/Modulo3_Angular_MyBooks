import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public books: Book[];
  constructor(public booksService: BooksService, public router: Router){
    this.booksService.getAll();
  }

  update(title:string,type:string,author:string,price:number,photo:string,id_book:number){
    let bookToUpdated = new Book(title,type,author,price,photo,id_book,0);
    this.booksService.edit(bookToUpdated);
    this.router.navigateByUrl('/books');
  }
}
