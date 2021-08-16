import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hora'
})
export class HoraPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const dataHora = value.split(' ');// 0 -> data, 1 -> hora
    return dataHora[1];

    //return substr(10);
  }

}
