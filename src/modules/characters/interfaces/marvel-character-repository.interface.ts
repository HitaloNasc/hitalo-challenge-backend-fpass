import { ICharacter } from './character.interface';

export interface ICharacterRepository {
    lazyList(name?: string, limit?: number, offset?: number): Promise<ICharacter[]>;
}
