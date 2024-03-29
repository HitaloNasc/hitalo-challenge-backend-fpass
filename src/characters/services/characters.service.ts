import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Character } from '../entities';
import { buildQueryString } from '../../shared/helpers';

@Injectable()
export class CharactersService {
    constructor(private readonly httpService: HttpService) {}

    async findMany(params?: { name?: string; offset?: number; limit?: number }): Promise<Character[]> {
        const { name, limit, offset } = params || {};
        const baseUrl = 'https://gateway.marvel.com/v1/public/characters?';
        const queryParams = buildQueryString({
            ts: process.env.MARVEL_TIMESTAMP,
            apikey: process.env.MARVEL_API_KEY,
            hash: process.env.MARVEL_HASH,
            nameStartsWith: name,
            limit,
            offset,
        });
        const url = `${baseUrl}${queryParams}`;

        const fetchResponse = await this.httpService.axiosRef.get(url);

        if (fetchResponse.data.data.results.length > 0) {
            return fetchResponse.data.data.results.map(character => {
                return new Character(character);
            });
        }

        return [];
    }
}
