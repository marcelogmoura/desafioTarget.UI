import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComissaoService } from '../../services/comissao.service';
import { RelatorioComissao } from '../../models/venda.model';

@Component({
  selector: 'app-comissao',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importante para o HTML funcionar
  templateUrl: './comissao.component.html',
  styleUrl: './comissao.component.scss'
})
export class ComissaoComponent {
  private comissaoService = inject(ComissaoService);

  // Variável para armazenar o JSON que o usuário vai colar
  jsonInput: string = `{
  "vendas": [
    { "vendedor": "João Silva", "valor": 1200.50 },
    { "vendedor": "Maria Souza", "valor": 2100.40 },
    { "vendedor": "Carlos Oliveira", "valor": 800.50 }
  ]
}`;

  resultados: RelatorioComissao[] = [];
  erro: string = '';
  carregando: boolean = false;

  calcular() {
    this.erro = '';
    this.resultados = [];

    try {
      // 1. Tenta converter o texto para Objeto JS
      const objetoVendas = JSON.parse(this.jsonInput);

      // 2. Chama o serviço
      this.carregando = true;
      this.comissaoService.calcularComissao(objetoVendas).subscribe({
        next: (dados) => {
          this.resultados = dados;
          this.carregando = false;
        },
        error: (err) => {
          console.error(err);
          this.erro = 'Erro ao conectar com a API. Verifique se o Docker está rodando.';
          this.carregando = false;
        }
      });

    } catch (e) {
      this.erro = 'JSON inválido! Verifique a formatação do texto.';
    }
  }
}
