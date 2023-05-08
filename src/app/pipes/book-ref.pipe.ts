import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookRef'
})
export class BookRefPipe implements PipeTransform {

  transform(value:string): string {
    let result = `Ref-${value}`;
    return result;
  }

}
