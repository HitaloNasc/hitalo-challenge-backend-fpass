import { buildQueryString } from '../../../shared/helpers/build-query-string';
import { ICharacterRepository, ICharacterFetchResponse } from '../interfaces';
import { HttpClientRepository } from '../../../shared/repositories/http-client.repository';

export class MarvelCharacterRepository implements ICharacterRepository {
    constructor(private readonly fetchRequest = new HttpClientRepository('https://gateway.marvel.com/v1/public')) {}

    public async lazyList(name?: string, limit?: number, offset?: number) {
        const queryParams = buildQueryString({
            ts: process.env.MARVEL_TIMESTAMP,
            apikey: process.env.MARVEL_API_KEY,
            hash: process.env.MARVEL_HASH,
            name,
            limit,
            offset,
        });

        const result = await this.fetchRequest.get<ICharacterFetchResponse>(`/characters?${queryParams}`);

        return result.data.results;
    }
}
