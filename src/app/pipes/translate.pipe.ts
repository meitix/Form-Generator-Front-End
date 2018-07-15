import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string): string {
    const lowValue = value.toLowerCase();

    if (lowValue === 'date') {return 'تاریخ'; }
    if (lowValue === '_id' || lowValue === 'id') {return 'شناسه'; }

    return value;
  }

}
