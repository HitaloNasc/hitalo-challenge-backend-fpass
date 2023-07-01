import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import '../src/shared/protocols/env-test';

describe('CharacterController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    describe('GET /characters', () => {
        it('should return a list of characters', async () => {
            const characters = await request(app.getHttpServer()).get('/characters');

            expect(characters.statusCode).toBe(200);
            expect(characters.body).toHaveLength(20);
        });
    });
});
