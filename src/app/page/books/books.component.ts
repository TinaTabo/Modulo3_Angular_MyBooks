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
    this.booksService.getAll().subscribe((data:Book[])=>{
      this.books = data;
    })
  }

  deleteBook(id_book:number):void{
    this.booksService.delete(id_book).subscribe((data:Book[])=>{
      this.books = data;
    })
  }

  searchBook(id_book:string):void{
    if (id_book != '') {
      for (let i = 0; i < this.books.length; i++) {
        if (Number(id_book) == this.books[i].id_book) {
          this.booksService.getOne(Number(id_book)).subscribe((data:Book[])=>{
            this.books = data;
          })
        }else{
          let searchBookArray:Book[] = [];
          for (const book of this.books) {
            if (book.id_book.toString().indexOf(id_book) !== -1) {
              searchBookArray.push(book);
            }
          }
          this.books = searchBookArray;
        }
      }
    }else{
      this.booksService.getAll().subscribe((data:Book[])=>{
        this.books = data;
      })
    }
  }
}
