/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';

@Injectable()
export class ProdutoService {
    produtos: Produto[] = [
        new Produto("liv01", "Livro de Tdd e Bdd na pratica", 29.90),
        new Produto("liv02", "Livro Iniciando com flutter", 39.90),
        new Produto("liv03", "Inteligencia artificial com servico", 29.90),

    ]

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto {
        return this.produtos[0]
    }

    criar(produto: Produto) {
        this.produtos.push(produto)
    }
    alterar(produto: Produto): Produto {
        return produto
    }
    apagar(id: number) {
        this.produtos.pop()
    }

}
