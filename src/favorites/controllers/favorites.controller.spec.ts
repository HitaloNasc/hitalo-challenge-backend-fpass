import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesController } from '.';
import { FavoritesService } from '../services';
import { InMemoryFavoriteRepository } from '../repositories';
import { Character } from '../../characters/entities';

describe('FavoritesController', () => {
    let controller: FavoritesController;
    let service: FavoritesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FavoritesController],
            providers: [FavoritesService, InMemoryFavoriteRepository],
        }).compile();

        controller = module.get<FavoritesController>(FavoritesController);
        service = module.get<FavoritesService>(FavoritesService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should call service.create with correct parameters', () => {
            service.create = jest.fn();

            const character: Character = {
                id: 1009368,
                name: 'Iron Man',
                description:
                    'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
                modified: '2016-09-28T12:08:19-0400',
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009368',
            };

            controller.create(character);

            expect(service.create).toHaveBeenCalledWith(character);
        });

        it('should create and return the created favorite', () => {
            const character: Character = {
                id: 1009368,
                name: 'Iron Man',
                description:
                    'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
                modified: '2016-09-28T12:08:19-0400',
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009368',
            };

            controller.create(character);
            const expectedFavorite = controller.findOne(`${character.id}`);

            expect(expectedFavorite).toEqual(character);
        });
    });

    describe('findAll', () => {
        it('should call service.findAll', () => {
            service.findAll = jest.fn();

            controller.findAll();

            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should call service.findOne', () => {
            service.findOne = jest.fn();

            controller.findOne('1');

            expect(service.findOne).toHaveBeenCalledWith(1);
        });
    });

    describe('remove', () => {
        it('should call service.remove', () => {
            service.remove = jest.fn();

            controller.remove('1');

            expect(service.remove).toHaveBeenCalledWith(1);
        });
    });
});
