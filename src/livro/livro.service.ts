/* eslint-disable prettier/prettier */
import { Injectable,BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NotFoundError } from 'rxjs';
import { Not } from 'sequelize-typescript';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
    constructor(
        @InjectModel(Livro)
        private livroModel: typeof Livro
    ) { }

    async obterTodos(): Promise<Livro[]> {
        return this.livroModel.findAll();
    }


    async obterUm(id: number): Promise<Livro> {
        const livroExistente = await this.livroModel.findOne({
            where: {
                id: id
            }
        });
        if (!livroExistente) {
            console.log('livro não encontrado');
            throw new BadRequestException({
                message: 'Livro não encontrado',
            });
        }

        return livroExistente
    }

    async criar(livro: Livro) {
        const livrocreated = await this.livroModel.create(livro);
        console.log('livro created',livrocreated.toJSON());
    }

    async alterar(livro: Livro): Promise<[number, Livro[]]> {
        
        const livroExistente = await this.livroModel.findOne({
            where: {
                id: livro.id
            }
        });
        if (!livroExistente) {
            console.log('livro não encontrado');
            throw new BadRequestException({
                message: 'Livro não encontrado',
            });
        }
        return this.livroModel.update(livro, {
            returning: true,
            where: {
                id: livro.id
            }
        });
    }

    async apagar(id: number) {
        const livro: Livro = await this.obterUm(id);
        livro.destroy();
    }
}