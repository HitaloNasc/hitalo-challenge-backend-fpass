import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Character } from '../src/characters/entities';
import '../src/shared/protocols/env-test';

describe('FavoriteController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    describe('POST /favorites', () => {
        it('should create a favorite', async () => {
            const character: Character = {
                id: 1,
                name: '3-D Man',
                description: '',
                modified: '2014-04-29T14:18:17-0400',
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
            };

            const response = await request(app.getHttpServer()).post('/favorites').send(character);

            expect(response.statusCode).toBe(201);
        });
    });

    describe('GET /favorites', () => {
        it('should return a list of characters', async () => {
            const character: Character = {
                id: 1,
                name: '3-D Man',
                description: '',
                modified: '2014-04-29T14:18:17-0400',
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
            };

            await request(app.getHttpServer()).post('/favorites').send(character);

            const response = await request(app.getHttpServer()).get('/favorites');

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveLength(1);
        });

        it('should return a favorite by id', async () => {
            const character: Character = {
                id: 1,
                name: '3-D Man',
                description: '',
                modified: '2014-04-29T14:18:17-0400',
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
            };

            await request(app.getHttpServer()).post('/favorites').send(character);

            const response = await request(app.getHttpServer()).get(`/favorites/${character.id}`);

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(character);
        });
    });

    describe('DELETE /favorites/:id', () => {
        it('should delete a favorite', async () => {
            const character: Character = {
                id: 1,
                name: '3-D Man',
                description: '',
                modified: '2014-04-29T14:18:17-0400',
                resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
            };

            await request(app.getHttpServer()).post('/favorites').send(character);

            const response = await request(app.getHttpServer()).delete(`/favorites/${character.id}`);

            expect(response.statusCode).toBe(200);
        });
    });
});
