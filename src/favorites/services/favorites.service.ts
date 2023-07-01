import { Injectable } from '@nestjs/common';
import { Favorite } from '../entities';
import { InMemoryFavoriteRepository } from '../repositories';
import { Character } from '../../characters/entities';

// TODO add throw errors and validations

@Injectable()
export class FavoritesService {
    constructor(private readonly respository: InMemoryFavoriteRepository) {}

    create(character: Character) {
        this.respository.create(new Favorite(character));
    }

    findAll() {
        return this.respository.findAll();
    }
    findOne(id: number) {
        return this.respository.findOne(id);
    }

    remove(id: number) {
        return this.respository.remove(id);
    }
}
