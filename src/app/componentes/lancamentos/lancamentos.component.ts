import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Lancamento } from 'src/app/models/lancamento.model';
import { DataHoraService } from 'src/app/servicos/data-hora.service';
import { LancamentoService } from 'src/app/servicos/lancamento.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit, OnDestroy {

  lancamentos: Lancamento[] = [];
  dataHoraAtual = '';
  dataHoraAtualSub: Subscription | undefined;

  dataTempoReal='';
  dataTempoRealSub: Subscription | undefined;

  constructor(private lancamentoService: LancamentoService,
              private dataHoraService: DataHoraService
  ) { }

  //metodo para destruir o observable, sempre que o component for finalizado
  ngOnDestroy(): void {
    this.dataHoraAtualSub?.unsubscribe();
  }

  ngOnInit(): void {
    this.lancamentoService.listarTodos().subscribe(
      dados => this.lancamentos = dados.data.content,
      () => alert('Erro obtendo lançamentos')
    );
    this.dataHoraAtualSub = this.dataHoraService.dataHora.subscribe(
      dataHora => this.dataHoraAtual = dataHora
    );
    this.dataTempoRealSub = this.dataHoraService.dataHoraTempoReal.subscribe(
      dataHora => this.dataTempoReal = dataHora
    );
  }

  urlLocalizacao(localizacao: string){
    return "https://www.google.com/maps/search/?api=1&query=" + localizacao;
  }

  atualizarDataHora(){
    this.dataHoraService.atualizarDataHora();
  }

  downloadCSV() {
    this.lancamentoService.downloadCSV(this.lancamentos);
  }

  downloadPDF() {
    this.lancamentoService.downloadPDF(this.lancamentos);
  }

}
