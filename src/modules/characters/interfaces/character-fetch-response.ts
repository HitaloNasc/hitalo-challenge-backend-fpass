import { ICharacterList } from './character-list.interface';
import { Response } from '@nestjs/common';

export interface ICharacterFetchResponse extends Response {
    code: number;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: ICharacterList;
    etag: string;
}
