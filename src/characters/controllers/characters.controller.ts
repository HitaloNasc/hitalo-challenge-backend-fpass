import { Controller, Get, Query } from '@nestjs/common';
import { CharactersService } from '../services/characters.service';

@Controller('characters')
export class CharactersController {
    constructor(private readonly charactersService: CharactersService) {}

    @Get()
    async findMany(@Query('name') name?: string) {
        return await this.charactersService.findMany(name);
    }
}
