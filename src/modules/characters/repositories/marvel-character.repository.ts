import { env } from 'src/shared/protocols/env';
import { buildQueryString } from '../../../shared/helpers/build-query-string';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ICharacterRepository, ICharacterFetchResponse } from '../interfaces';
/* 
export class MarvelCharacterRepository implements ICharacterRepository {
    private readonly baseUrl = 'https://gateway.marvel.com/v1/public/characters?';

    // @ts-ignore
    public async lazyList(name?: string, limit?: number, offset?: number) {
        const queryParams = buildQueryString({
            ts: process.env.MARVEL_TIMESTAMP,
            apikey: process.env.MARVEL_API_KEY,
            hash: process.env.MARVEL_HASH,
            name,
            limit,
            offset,
        });

        let result;
        axios
            .get(`${this.baseUrl}${queryParams.toString()}`)
            .then((response: AxiosResponse) => {
                console.log('Dados da API:', response.data);
                result = response.data;
            })
            .catch((error: AxiosError) => {
                console.error('Erro ao obter dados da API:', error.message);
            });

        return result;
    }

    // @ts-ignore
    public async getById(id: number) {
        throw new Error('Method not implemented.');
    }
}
 */
