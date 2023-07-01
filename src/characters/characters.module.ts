import { Module } from '@nestjs/common';
import { CharactersService } from './services/characters.service';
import { CharactersController } from './controllers/characters.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [CharactersController],
    providers: [CharactersService],
})
export class CharactersModule {}
