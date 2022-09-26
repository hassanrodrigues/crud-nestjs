import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {

    @Get()
    obterTodos(): string {
        return 'lista todos'
    }
    @Get(':id')
    obterUm(@Param() params): string {
        return `Retorna os dados do produto ${params.id}`
    }
    @Post()
    criarProduto(@Body() produto): string {
        return `Produto criado ${produto.nome}`
    }
}
