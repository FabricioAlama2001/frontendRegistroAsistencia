import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'integerTime'
})
export class IntegerTimePipe implements PipeTransform {

  transform(value: number): string {
    return value < 10 ? '0' + value : '' + value;
  }

}
