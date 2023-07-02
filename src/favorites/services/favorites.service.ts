import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Favorite } from '../entities';
import { InMemoryFavoriteRepository } from '../repositories';
import { Character } from '../../characters/entities';
import { isEmpty } from 'lodash';

@Injectable()
export class FavoritesService {
    constructor(private readonly respository: InMemoryFavoriteRepository) {}

    create(character: Character) {
        this.validateCreate(character);
        this.respository.create(new Favorite(character));
    }

    findAll() {
        return this.respository.findAll();
    }
    findOne(id: number) {
        const favorite = this.respository.findOne(id);

        if (isEmpty(favorite)) {
            throw new HttpException('Favorite not found', HttpStatus.NOT_FOUND);
        }

        return favorite;
    }

    remove(id: number) {
        this.findOne(id);
        return this.respository.remove(id);
    }

    private validateCreate(character: Character) {
        const obrigatoryProperties = ['id', 'name'];

        obrigatoryProperties.forEach(property => {
            if (!character[property]) {
                throw new HttpException(`Property ${property} is required`, HttpStatus.BAD_REQUEST);
            }
        });

        const favoriteAlreadyExists = this.respository.findOne(character.id);
        if (favoriteAlreadyExists) {
            throw new HttpException('Favorite already exists', HttpStatus.BAD_REQUEST);
        }
    }
}
