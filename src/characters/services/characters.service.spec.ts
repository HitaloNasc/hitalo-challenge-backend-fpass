import { Test, TestingModule } from '@nestjs/testing';
import { CharactersService } from '.';
import { HttpModule } from '@nestjs/axios';
import '../../shared/protocols/env-test';

describe('CharactersService', () => {
    let service: CharactersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [HttpModule],
            providers: [CharactersService],
        }).compile();

        service = module.get<CharactersService>(CharactersService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return a list of characters', async () => {
        const result = await service.findMany();

        expect(result).toBeTruthy();
        expect(result[0]).toHaveProperty('id');
        expect(result[0]).toHaveProperty('name');
        expect(result[0]).toHaveProperty('description');
    });

    it('should return a list with setted limit', async () => {
        const result = await service.findMany('', 1, 1);

        expect(result).toHaveLength(1);
    });

    it('should return a second list diferent from the first with setted offset', async () => {
        const firstList = await service.findMany('', 1, 1);
        const secondList = await service.findMany('', 1, 2);

        expect(firstList).toHaveLength(1);
        expect(secondList).toHaveLength(1);
        expect(secondList[0].id).not.toEqual(firstList[0].id);
    });

    it('should return a list with setted name', async () => {
        const [result] = await service.findMany('Iron Man');

        expect(result).toHaveProperty('name', 'Iron Man');
    });
});
