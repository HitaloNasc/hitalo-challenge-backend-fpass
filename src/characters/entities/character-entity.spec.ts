import { Character } from '.';
import { ICharacter } from '../interfaces';

describe('Character', () => {
    it('should create an instance of the Character class with the correct parameters', () => {
        const params: ICharacter = {
            id: 1009368,
            name: 'Iron Man',
            description:
                'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
            modified: '2016-09-28T12:08:19-0400',
            thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
                extension: 'jpg',
            },
            resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009368',
            comics: {
                available: 2681,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009368/comics',
                items: [
                    {
                        resourceURI: 'http://gateway.marvel.com/v1/public/comics/43495',
                        name: 'A+X (2012) #2',
                    },
                ],
                returned: 20,
            },
            series: {
                available: 668,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009368/series',
                items: [
                    {
                        resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
                        name: 'A+X (2012 - 2014)',
                    },
                ],
                returned: 20,
            },
            stories: {
                available: 4004,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009368/stories',
                items: [
                    {
                        resourceURI: 'http://gateway.marvel.com/v1/public/stories/670',
                        name: 'X-MEN (2004) #186',
                    },
                ],
                returned: 20,
            },
            events: {
                available: 31,
                collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009368/events',
                items: [
                    {
                        resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
                        name: 'Acts of Vengeance!',
                    },
                ],
                returned: 20,
            },
            urls: [
                {
                    type: 'detail',
                    url: 'http://marvel.com/comics/characters/1009368/iron_man?utm_campaign=apiRef&utm_source=88701efed4649f7e62a84a391f3e7614',
                },
            ],
        };

        const character = new Character(params);

        expect(character.id).toEqual(params.id);
        expect(character.name).toEqual(params.name);
        expect(character.description).toEqual(params.description);
        expect(character.modified).toEqual(params.modified);
        expect(character.resourceURI).toEqual(params.resourceURI);
    });
});
