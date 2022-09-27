import { LivroService } from './livro.service';
import { LivrosController } from './Livros.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './Livro.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '040hassan69',
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro])
  ],
  controllers: [
    LivrosController, AppController],
  providers: [
    LivroService, AppService],
})
export class AppModule { }
