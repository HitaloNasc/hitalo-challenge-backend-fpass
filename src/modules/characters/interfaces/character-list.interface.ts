import { ICharacter } from './character.interface';

export interface ICharacterList {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: ICharacter[];
}
