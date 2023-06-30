import '../../../shared/protocols/env-test';
import { MarvelCharacterRepository } from './marvel-character.repository';

describe('MarvelCharacterRepository', () => {
    it('should return a characters list', async () => {
        const sut = new MarvelCharacterRepository();
        const characters = await sut.lazyList();
        expect(characters).toBeTruthy();
    });
});
