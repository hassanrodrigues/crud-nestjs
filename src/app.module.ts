import { ProdutosController } from './produtos.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    ProdutosController, AppController],
  providers: [AppService],
})
export class AppModule { }
