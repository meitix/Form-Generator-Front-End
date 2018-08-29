import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringView'
})
export class StringViewPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.join(' , ');
  }

}
