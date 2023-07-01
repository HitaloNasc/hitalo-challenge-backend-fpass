import { Injectable } from '@nestjs/common';
import { Favorite } from '../entities';

@Injectable()
export class InMemoryFavoriteRepository {
    private data: Favorite[];

    constructor() {
        this.data = [];
    }

    create(favorite: Favorite) {
        this.data.push(favorite);
    }

    remove(id: number) {
        this.data = this.data.filter(favorite => favorite.id !== id);
    }

    findAll() {
        return this.data;
    }

    findOne(id: number) {
        return this.data.find(favorite => favorite.id === id);
    }
}
