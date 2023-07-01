import { Test, TestingModule } from '@nestjs/testing';
import { CharactersController } from '.';
import { CharactersService } from '../services/characters.service';
import { HttpModule } from '@nestjs/axios';
import '../../shared/protocols/env-test';

describe('CharactersController', () => {
    let controller: CharactersController;
    let service: CharactersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [HttpModule],
            controllers: [CharactersController],
            providers: [CharactersService],
        }).compile();

        controller = module.get<CharactersController>(CharactersController);
        service = module.get<CharactersService>(CharactersService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('findMany', () => {
        it('should return a list of characters', async () => {
            const result = await controller.findMany();

            expect(result).toBeTruthy();
            expect(result).toHaveLength(20);
        });

        it('should call service.findMany without name', async () => {
            service.findMany = jest.fn();

            await controller.findMany();

            expect(service.findMany).toHaveBeenCalledWith(undefined);
        });
    });
});
