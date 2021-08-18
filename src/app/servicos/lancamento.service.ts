import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { environment as env } from 'src/environments/environment';
import { Lancamento } from '../models/lancamento.model';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor(private http: HttpClient,
    private httpService: HttpService) { }

  listarTodos(): Observable<any> {
    /*
    this.http.post('url', {}, this.httpService.headers());
    this.http.put('url', {}, this.httpService.headers());
    this.http.delete('url', this.httpService.headers());
    */
    const id = this.httpService.obterIdUsuario();
    return this.http.get(
      env.apiBaseUrl + 'api/lancamentos/funcionario/' + id + '?sort=id&dir=DESC',
      this.httpService.headers()
    );
  }

  downloadCSV(lancamentos: Lancamento[]) {
    const colunas = 'ID,Data,Hora,Tipo,Localização\n';
    const linhas: string[] = [];
    lancamentos.forEach(lanc => {
      const dataHora = lanc.data.split(' ');
      const linha = `${lanc.id},${dataHora[0]},${dataHora[1]},${lanc.tipo},"${lanc.localizacao}"`;
      linhas.push(linha);
    });
    const dados = colunas + linhas.join('\n');
    const blob = new Blob([dados], { type: 'text/csv' });
    saveAs(blob, 'lancamentos.csv');
  }

  downloadPDF(lancamentos: Lancamento[]) {
    const colunas = ['ID', 'Data', 'Hora', 'Tipo', 'Localização'];
    const linhas: string[][] = [];
    lancamentos.forEach(lanc => {
      const dataHora = lanc.data.split(' ');
      linhas.push([
        lanc.id.toString(),
        dataHora[0],
        dataHora[1],
        lanc.tipo,
        lanc.localizacao
      ]);
    });
    const data = new Date();
    const doc = new jsPDF();
    //const doc = new jsPDF('l', 'mm', 'a1');
    (doc as any).text(15,10, 'Listagem de lançamentos');
    (doc as any).text(170,10, data.toLocaleString('pt-BR'));
    (doc as any).setFontSize(8);
    (doc as any).autoTable({
      head: [colunas],
      body: linhas,
      foot: [colunas],
      theme: 'grid'
    });
    doc.save('lancamentos-' + data.toLocaleDateString('pt-BR') + '.pdf');
    /*** Para solicitar ao usuario um nome para o pdf ***/
    //const nome = window.prompt('digite um nome para o pdf: ');
    //doc.save(nome?.toString());

  }
}
