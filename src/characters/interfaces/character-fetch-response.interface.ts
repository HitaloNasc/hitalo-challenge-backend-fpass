import { CharacterList } from './character-list.interface';

export interface CharacterFetchResponse {
    code: number;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: CharacterList;
    etag: string;
}
