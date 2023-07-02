import { Test, TestingModule } from '@nestjs/testing';
import { Favorite } from '../entities';
import { FavoritesService } from '.';
import { Character } from '../../characters/entities';
import { InMemoryFavoriteRepository } from '../repositories';
import { HttpException } from '@nestjs/common';

describe('FavoritesService', () => {
    let service: FavoritesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FavoritesService, InMemoryFavoriteRepository],
        }).compile();

        service = module.get<FavoritesService>(FavoritesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create', () => {
        it('should return a error if the character is invalid', () => {
            const character = {
                id: 1,
                name: '',
                description: '',
                modified: '',
                resourceURI: '',
            };

            expect.assertions(2);

            try {
                service.create(character);
            } catch (error) {
                expect(error).toBeInstanceOf(HttpException);
                expect(error.message).toEqual('Property name is required');
            }
        });

        it('should return a error if the favorite already exists', () => {
            const character: Character = {
                id: 1,
                name: '3-D Man',
                description: '',
                modified: '2014-04-29T14:18:17-0400',
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
            };

            service.create(character);

            expect.assertions(2);

            try {
                service.create(character);
            } catch (error) {
                expect(error).toBeInstanceOf(HttpException);
                expect(error.message).toEqual('Favorite already exists');
            }
        });

        it('should create a favorite', () => {
            const character: Character = {
                id: 1,
                name: '3-D Man',
                description: '',
                modified: '2014-04-29T14:18:17-0400',
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
            };
            const expectedFavorite: Favorite = new Favorite(character);

            service.create(character);

            const allFavorites = service.findAll();
            expect(allFavorites).toContainEqual(expectedFavorite);
        });
    });

    it('should return all favorites', () => {
        const characters: Character[] = [
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
        ];
        characters.forEach(character => service.create(character));

        const allFavorites = service.findAll();

        expect(allFavorites).toEqual(characters);
    });

    it('should find a favorite by ID', () => {
        const characters: Character[] = [
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
        ];
        characters.forEach(character => service.create(character));
        const favoriteIdToFind = 2;
        const expectedFavorite = characters.find(character => character.id === favoriteIdToFind);
        const foundFavorite = service.findOne(favoriteIdToFind);

        expect(foundFavorite).toEqual(expectedFavorite);
    });

    it('should remove a favorite', () => {
        const characters: Character[] = [
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
        ];
        characters.forEach(character => service.create(character));
        const favoriteIdToRemove = 2;

        service.remove(favoriteIdToRemove);

        const allFavorites = service.findAll();
        expect(allFavorites).toHaveLength(characters.length - 1);
        expect(allFavorites.find(favorite => favorite.id === favoriteIdToRemove)).toBeUndefined();
    });
});
