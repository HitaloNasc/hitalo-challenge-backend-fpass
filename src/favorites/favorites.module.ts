import { Module } from '@nestjs/common';
import { InMemoryFavoriteRepository } from './repositories';
import { FavoritesService } from './services';
import { FavoritesController } from './controllers';

@Module({
    controllers: [FavoritesController],
    providers: [FavoritesService, InMemoryFavoriteRepository],
})
export class FavoritesModule {}
