export interface Venda {
    vendedor: string;
    valor: number;
}

export interface ListaVendas {
    vendas: Venda[];
}

export interface RelatorioComissao {
    vendedor: string;
    totalVendas: number;
    totalComissao: number;
}
