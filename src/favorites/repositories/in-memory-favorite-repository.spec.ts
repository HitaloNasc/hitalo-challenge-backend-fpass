import { InMemoryFavoriteRepository } from '.';
import { Favorite } from '../entities';

describe('InMemoryFavoriteRepository', () => {
    let repository: InMemoryFavoriteRepository;

    const favorites: Favorite[] = [
        {
            id: 1,
            name: '3-D Man',
            description: '',
            modified: '2014-04-29T14:18:17-0400',
            resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        },
        {
            id: 2,
            name: 'A-Bomb (HAS)',
            description:
                "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
            modified: '2013-09-18T15:54:04-0400',
            resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017100',
        },
        {
            id: 3,
            name: 'A.I.M.',
            description: 'AIM is a terrorist organization bent on destroying the world.',
            modified: '2013-10-17T14:41:30-0400',
            resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009144',
        },
    ];

    beforeEach(() => {
        repository = new InMemoryFavoriteRepository();
        favorites.forEach(favorite => repository.create(favorite));
    });

    it('should add a favorite', () => {
        const newFavorite: Favorite = {
            id: 4,
            name: 'Aaron Stack',
            description: '',
            modified: '1969-12-31T19:00:00-0500',
            resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010699',
        };

        repository.create(newFavorite);

        const allFavorites = repository.findAll();
        expect(allFavorites).toHaveLength(favorites.length + 1);
        expect(allFavorites).toContainEqual(newFavorite);
    });

    it('should remove a favorite', () => {
        const favoriteIdToRemove = 2;

        repository.remove(favoriteIdToRemove);

        const allFavorites = repository.findAll();
        expect(allFavorites).toHaveLength(favorites.length - 1);
        expect(allFavorites.find(favorite => favorite.id === favoriteIdToRemove)).toBeUndefined();
    });

    it('should return all favorites', () => {
        const allFavorites = repository.findAll();

        expect(allFavorites).toEqual(favorites);
    });

    it('should find a favorite by ID', () => {
        const favoriteIdToFind = 2;
        const expectedFavorite = favorites.find(favorite => favorite.id === favoriteIdToFind);

        const foundFavorite = repository.findOne(favoriteIdToFind);

        expect(foundFavorite).toEqual(expectedFavorite);
    });

    it('should return undefined when finding a non-existing favorite by ID', () => {
        const nonExistingFavoriteId = 100;

        const foundFavorite = repository.findOne(nonExistingFavoriteId);

        expect(foundFavorite).toBeUndefined();
    });
});
