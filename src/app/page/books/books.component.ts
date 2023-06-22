import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[] = [];

  constructor(public booksService: BooksService, public userService: UserService){
    this.booksService.getAll(this.userService.user.id_user).subscribe((data:Response)=>{
      this.books = data.data;
    })
  }

  deleteBook(id_book:number):void{
    this.booksService.delete(id_book).subscribe((data:Response)=>{
      if (data.error == false) {
        this.booksService.getAll(this.userService.user.id_user).subscribe((data:Response)=>{
          this.books = data.data;
        })
      }
    })
  }

  searchBook(id_book:string):void{
    if (id_book != '') {
      for (let i = 0; i < this.books.length; i++) {
        if (Number(id_book) == this.books[i].id_book) {
          this.booksService.getOne(this.userService.user.id_user, Number(id_book)).subscribe((data:Response)=>{
            this.books = data.data;
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
      this.booksService.getAll(this.userService.user.id_user).subscribe((data:Response)=>{
        this.books = data.data;
      })
    }
  }
}
