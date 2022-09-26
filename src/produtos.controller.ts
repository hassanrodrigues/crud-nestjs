import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';
@Controller('produtos')
export class ProdutosController {
    constructor(private produtosServices: ProdutoService) {

    }


    @Get()
    obterTodos(): Produto[] {
        return this.produtosServices.obterTodos();
    }
    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtosServices.obterUm(params.id);
    }
    @Post()
    criarProduto(@Body() produto: Produto) {
        produto.id = 100;
        this.produtosServices.criar(produto);
    }
    @Put()
    atualizarProduto(@Body() produto: Produto): Produto {
        return this.produtosServices.alterar(produto);
    }
    @Delete(':id')
    apagar(@Param() params) {
        this.produtosServices.apagar(params.id)
    }
}
