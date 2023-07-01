import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FavoritesService } from '../services';
import { Character } from '../../characters/entities';

@Controller('favorites')
export class FavoritesController {
    constructor(private readonly favoritesService: FavoritesService) {}

    @Post()
    create(@Body() createFavoriteDto: Character) {
        return this.favoritesService.create(createFavoriteDto);
    }

    @Get()
    findAll() {
        return this.favoritesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.favoritesService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.favoritesService.remove(+id);
    }
}
