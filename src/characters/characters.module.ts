import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CharactersService } from './services';
import { CharactersController } from './controllers';

@Module({
    imports: [HttpModule],
    controllers: [CharactersController],
    providers: [CharactersService],
})
export class CharactersModule {}
