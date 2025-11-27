import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstoqueService } from '../../services/estoque.service';
import { Movimentacao } from '../../models/estoque.model';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.scss'
})
export class EstoqueComponent {
  private estoqueService = inject(EstoqueService);

  // Controle das Abas (Tabs)
  abaAtiva: 'carga' | 'movimentacao' = 'carga';

  // --- ABA 1: Carga Inicial ---
  jsonCarga: string = `{
  "estoque": [
    { "codigoProduto": 101, "descricaoProduto": "Caneta Azul", "estoque": 150 },
    { "codigoProduto": 102, "descricaoProduto": "Caderno Universitário", "estoque": 75 },
    { "codigoProduto": 103, "descricaoProduto": "Borracha Branca", "estoque": 200 }
  ]
}`;
  msgCarga: string = '';
  erroCarga: string = '';

  // --- ABA 2: Movimentação ---
  movimento: Movimentacao = {
    codigoProduto: 101,
    descricao: 'Ajuste de Estoque',
    tipo: 'Saida',
    quantidade: 10
  };

  resultadoMovimento: any = null;
  erroMovimento: string = '';

  // --- MÉTODOS ---

  enviarCarga() {
    this.msgCarga = '';
    this.erroCarga = '';

    try {
      const objeto = JSON.parse(this.jsonCarga);

      this.estoqueService.cargaInicial(objeto).subscribe({
        next: () => this.msgCarga = '✅ Produtos carregados no Banco de Dados com sucesso!',
        error: (err) => this.erroCarga = 'Erro ao carregar estoque. Verifique o JSON ou a API.'
      });
    } catch (e) {
      this.erroCarga = 'JSON inválido.';
    }
  }

  registrarMovimento() {
    this.resultadoMovimento = null;
    this.erroMovimento = '';

    this.estoqueService.movimentar(this.movimento).subscribe({
      next: (res) => this.resultadoMovimento = res,
      error: (err) => {
        // Tenta pegar a mensagem de erro que mandamos do C# (BadRequest)
        this.erroMovimento = err.error?.erro || 'Erro ao movimentar.';
      }
    });
  }
}
