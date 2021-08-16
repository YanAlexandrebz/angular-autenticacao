import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    let tipo = '';
    switch (value) {
      case 'INICIO_TRABALHO':
        tipo = 'Início de trabalho';
        break;
      case 'INICIO_PAUSA':
        tipo = 'Início da pausa';
        break;
      case 'INICIO_ALMOCO':
        tipo = 'Início do almoço';
        break;
      case 'TERMINO_TRABALHO':
        tipo = 'Término do trabalho';
        break;
      case 'TERMINO_PAUSA':
        tipo = 'Término da pausa';
        break;
      case 'TERMINO_ALMOCO':
        tipo = 'Término do almoço';
        break;
      default:
        tipo = value;
    }
    return tipo;
  }

}
