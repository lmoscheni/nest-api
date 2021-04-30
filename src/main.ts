import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './appModule';

import pkg from '../package.json';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const log = new Logger('bootstrap');

  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle(pkg.name)
    .setDescription(pkg.description)
    .setVersion(pkg.version)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/doc', app, document);

  const port = configService.get('port');

  await app.listen(port).then(() => {
    log.debug(`Server is running on port ${port} | http://localhost:${port}`);
    log.debug(`Healt Check | http://localhost:${port}/api/health-check`);
    log.debug(`Swagger | http://localhost:${port}/doc`);
  });
}
bootstrap();
