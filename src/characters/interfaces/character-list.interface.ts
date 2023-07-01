import { Character } from '../entities/character.entity';

export interface CharacterList {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
}
