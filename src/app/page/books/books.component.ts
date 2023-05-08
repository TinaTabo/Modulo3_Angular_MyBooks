import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[];

  constructor(){
    this.books = [
      new Book('Viuda de Hierro','Tapa blanda','Xiran Jay Zhao',18.05,'https://imagessl4.casadellibro.com/a/l/t7/04/9788427224704.jpg',982305,1234),
      new Book('Ready Player One','Tapa blanda','Ernest Cline',15.00,'https://imagessl9.casadellibro.com/a/l/t7/79/9788466649179.jpg',743219,2345),
      new Book('Trono de Cristal','Tapa blanda','Sarah J. Maas',14.50,'https://imagessl6.casadellibro.com/a/l/t7/86/9788418359286.jpg',561890,3456),
      new Book('Harry Potter y la Piedra Filosofal','Tapa dura','J.K.Rowling',14.75,'https://imagessl2.casadellibro.com/a/l/t7/62/9788498382662.jpg',256734,4567),
      new Book('Cuando los Árboles Cantan','Tapa blanda','Laura Gallego',12.95,'https://imagessl0.casadellibro.com/a/l/t7/30/9788467550030.jpg',629108,5678)
    ]
  }

  addBook(title:string,type:string,author:string,price:number,photo:string,id_book:number){
    let newBook = new Book(title,type,author,price,photo,id_book,0);
    this.books.push(newBook);
  }
}
