import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });

    app.enableCors();

    await app.listen(3000);
}

config();
bootstrap();
