import { Favorite } from '.';
import { Character } from '../../characters/entities';

describe('Favorite', () => {
    it('should create an instance of the Favorite class with the correct parameters', () => {
        const params: Character = {
            id: 1009368,
            name: 'Iron Man',
            description:
                'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
            modified: '2016-09-28T12:08:19-0400',
            resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009368',
        };

        const favorite = new Favorite(params);

        expect(favorite.id).toEqual(params.id);
        expect(favorite.name).toEqual(params.name);
        expect(favorite.description).toEqual(params.description);
        expect(favorite.modified).toEqual(params.modified);
        expect(favorite.resourceURI).toEqual(params.resourceURI);
    });
});
