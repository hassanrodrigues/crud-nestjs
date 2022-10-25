import { LivrosService } from './livro/livro.service';
import { LivrosController } from './livro/Livros.controller';
import { Module } from '@nestjs/common';
import { AppController } from './hello/app.controller';
import { AppService } from './hello/app.service';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './livro/livro.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USER,
      password: process.env.PASS,
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro])
  ],
  controllers: [
    LivrosController, AppController],
  providers: [
    LivrosService, AppService],
})
export class AppModule { }
