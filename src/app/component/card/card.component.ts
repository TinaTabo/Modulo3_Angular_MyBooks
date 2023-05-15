import { Book } from 'src/app/models/book';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book: Book;
  @Input() par: boolean;
  @Output() bookTitle = new EventEmitter<number>();

  sendBookId():void{
    this.bookTitle.emit(this.book.id_book);
  }
}
