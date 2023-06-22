import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public books: Book[];
  constructor(public booksService: BooksService, public router: Router, public userService: UserService){
    this.booksService.getAll(this.userService.user.id_user).subscribe((data:Response)=>{
      this.books = data.data;
    })
  }

  public id_book:number;
  public title:string = '';
  public type:string = '';
  public author:string = '';
  public price:number;
  public photo:string = '';

  update(updateBookForm: NgForm){
    let bookToUpdated = new Book(this.id_book,this.userService.user.id_user,this.title,this.type,this.author,this.price,this.photo);
    this.booksService.edit(bookToUpdated).subscribe((data:Response)=>{
      this.books = data.data;
      this.router.navigateByUrl('/books');
    })
  }
}
