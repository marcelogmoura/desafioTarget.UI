export interface Produto {
    codigoProduto: number;
    descricaoProduto: string;
    estoque: number;
}

export interface CargaEstoque {
    estoque: Produto[];
}

export interface Movimentacao {
    codigoProduto: number;
    descricao: string;
    tipo: 'Entrada' | 'Saida';  
    quantidade: number;
}
