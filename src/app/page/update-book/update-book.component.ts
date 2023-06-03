import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public books: Book[];
  constructor(public booksService: BooksService, public router: Router){
    this.booksService.getAll().subscribe((data:Book[])=>{
      this.books = data;
    })
  }

  public title:string = '';
  public type:string = '';
  public author:string = '';
  public price:number;
  public photo:string = '';
  public id_book:number;

  update(updateBookForm: NgForm){
    let bookToUpdated = new Book(this.title,this.type,this.author,this.price,this.photo,this.id_book,0);
    this.booksService.edit(bookToUpdated).subscribe((data:Book[])=>{
      this.books = data;
    })
    this.router.navigateByUrl('/books');
  }
}
