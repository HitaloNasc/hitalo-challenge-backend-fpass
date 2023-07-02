import { Controller, Get, Query } from '@nestjs/common';
import { CharactersService } from '../services';

@Controller('characters')
export class CharactersController {
    constructor(private readonly charactersService: CharactersService) {}

    @Get()
    async findMany(@Query('name') name?: string, @Query('offset') offset?: number) {
        return await this.charactersService.findMany({ name, offset });
    }
}
