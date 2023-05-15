import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[];
  constructor(){
    this.books = [
      new Book('Viuda de Hierro','Tapa blanda','Xiran Jay Zhao',18.05,'https://imagessl4.casadellibro.com/a/l/t7/04/9788427224704.jpg',982305,1234),
      new Book('Ready Player One','Tapa blanda','Ernest Cline',15.00,'https://imagessl9.casadellibro.com/a/l/t7/79/9788466649179.jpg',743219,2345),
      new Book('Trono de Cristal','Tapa blanda','Sarah J. Maas',14.50,'https://imagessl6.casadellibro.com/a/l/t7/86/9788418359286.jpg',561890,3456),
      new Book('Harry Potter y la Piedra Filosofal','Tapa dura','J.K.Rowling',14.75,'https://imagessl2.casadellibro.com/a/l/t7/62/9788498382662.jpg',256734,4567),
      new Book('Cuando los Árboles Cantan','Tapa blanda','Laura Gallego',12.95,'https://imagessl0.casadellibro.com/a/l/t7/30/9788467550030.jpg',629108,5678)
    ]
  }

  // Métodos del servicio
  //-- Método para obtener todos los libros.
  getAll():Book[]{
    return this.books;
  }

  //-- Método para obtener un solo libro --> buscador.
  getOne(id_book:number):Book{
    let find:boolean = false;
    for (let i:number = 0; i < this.books.length; i++) {
      if (id_book == this.books[i].id_book) {
        find = true;
        return this.books[i];
      }
    }

    if (find == false) {
      console.log('Libro no encontrado.');
    }
  }

  //-- Método para añadir un libro --> Funcionalidad de la pg Add Book.
  add(book:Book):void{
    this.books.push(book);
  }

  //-- Método para editar un libro --> Funcionalidad de la pg Update Book.
  edit(book:Book):boolean{
    let edit:boolean = false;
    //-- Se supone que el título del libro no se modifica, es con lo que identificamos
    //-- el libro del que se quieren modificar los datos.
    let titleBookForEdit = book.title;
    for (let i:number = 0; i < this.books.length; i++){
      if (titleBookForEdit.toLowerCase() == this.books[i].title.toLowerCase()) {
        if(book.type != ''){
          this.books[i].type = book.type;
          edit = true;
        }
        if(book.author != ''){
          this.books[i].author = book.author;
          edit = true;
        }
        if(book.price != Number('')){
          this.books[i].price = book.price;
          edit = true;
        }
        if(book.photo != ''){
          this.books[i].photo = book.photo;
          edit = true;
        }
        if(book.id_book != Number('')){
          this.books[i].id_book = book.id_book;
          edit = true;
        }
      }
    }
    return edit;
  }

  //-- Método para borrar un libro --> Funcionalidad del botón 'X' de las cards de cada libro.
  delete(id_book:number):boolean{
    let deleted:boolean = false;
    for (let i:number = 0; i < this.books.length; i++) {
      if (id_book == this.books[i].id_book) {
        this.books.splice(i,1);
        deleted = true;
      }
    }
    return deleted;
  }
}
