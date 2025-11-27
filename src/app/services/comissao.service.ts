import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaVendas, RelatorioComissao } from '../models/venda.model';

@Injectable({
  providedIn: 'root'
})
export class ComissaoService {
  private http = inject(HttpClient);
  
  private apiUrl = 'http://localhost:8080/api/comissao';

  calcularComissao(dados: ListaVendas): Observable<RelatorioComissao[]> {
    return this.http.post<RelatorioComissao[]>(`${this.apiUrl}/calcular`, dados);
  }
}
