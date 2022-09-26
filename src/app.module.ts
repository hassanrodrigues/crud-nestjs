import { ProdutoService } from './produto.service';
import { ProdutosController } from './produtos.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    ProdutosController, AppController],
  providers: [
    ProdutoService, AppService],
})
export class AppModule { }
