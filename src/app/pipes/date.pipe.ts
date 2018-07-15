import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'faDate'
})
export class DatePipe implements PipeTransform {
  transform(value: any): string {
    let res = '';
    if (!value || value == null) {
      return res;
    }
    res = value.jy + '/' + value.jm + '/' + value.jd;
    return res;
  }
}
