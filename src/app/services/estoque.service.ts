import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CargaEstoque, Movimentacao } from '../models/estoque.model';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/estoque';

  cargaInicial(dados: CargaEstoque): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/carga-inicial`, dados);
  }

  movimentar(dados: Movimentacao): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/movimentar`, dados);
  }
}
