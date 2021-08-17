import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataHoraService {

  //BehaviorSubject é um tipo de Observable
  dataHora = new BehaviorSubject(this.obterDataHoraAtual());
  //interval(500) = periodo de tempo de atualizacao
  dataHoraTempoReal = interval(500).pipe(
    map(() => this.obterDataHoraAtual()),share()
  );

  constructor() { }

  obterDataHoraAtual() {
    const data = new Date();
    return data.toLocaleString('pt-BR');
  }

  atualizarDataHora(){
    this.dataHora.next(this.obterDataHoraAtual());
  }

}
