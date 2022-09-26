import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

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
    @Put()
    atualizarProduto(@Body() produto): string {
        return `Produto atualziado`
    }
    @Delete(':id')
    apagar(@Param() params): string {
        return ` produto exlcuido ${params.id}`
    }
}
