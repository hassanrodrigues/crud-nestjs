/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Livro } from './Livro.model';

@Injectable()
export class LivroService {
    private readonly Livros: Livro[] = [
        /*  new Livro("LIV01", "Livro TDD e BDD na prática", 29.90),
         new Livro("LIV02", "Livro Iniciando com Flutter", 39.90),
         new Livro("LIV03", "Inteligência artificial como serviço", 29.90), */
    ];

    obterTodos(): Livro[] {
        return this.Livros;
    }

    obterUm(id: number): Livro {
        return this.Livros[0]
    }

    criar(Livro: Livro) {
        this.Livros.push(Livro)
    }
    alterar(Livro: Livro): Livro {
        return Livro
    }
    apagar(id: number) {
        this.Livros.pop()
    }

}
