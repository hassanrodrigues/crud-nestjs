import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Livro } from './Livro.model';
import { LivroService } from './livro.service';
@Controller('livros')
export class LivrosController {
    constructor(private LivrosServices: LivroService) {

    }


    @Get()
    obterTodos(): Livro[] {
        return this.LivrosServices.obterTodos();
    }
    @Get(':id')
    obterUm(@Param() params): Livro {
        return this.LivrosServices.obterUm(params.id);
    }
    @Post()
    criarLivro(@Body() Livro: Livro) {
        Livro.id = 100;
        this.LivrosServices.criar(Livro);
    }
    @Put()
    atualizarLivro(@Body() Livro: Livro): Livro {
        return this.LivrosServices.alterar(Livro);
    }
    @Delete(':id')
    apagar(@Param() params) {
        this.LivrosServices.apagar(params.id)
    }
}
