import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { environment as env } from 'src/environments/environment';

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
      env.apiBaseUrl + 'api/lancamentos/funcionario/' + id,
      this.httpService.headers()
    );
  }


}
