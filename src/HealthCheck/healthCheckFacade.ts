import { Injectable, Logger } from '@nestjs/common';
import pkg from '../../package.json';

@Injectable()
export class HealthCheckFacade {
  private readonly log = new Logger(HealthCheckFacade.name);

  healthCheck() {
    this.log.debug('healthCheck');
    return {
      status: 'UP',
      appName: pkg.name,
      appDescription: pkg.description,
      version: pkg.version,
      author: pkg.author,
    };
  }
}
