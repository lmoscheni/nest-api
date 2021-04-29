import { Controller, Get, Logger } from '@nestjs/common';
import { HealthCheckFacade } from './healthCheckFacade';

@Controller()
export class HealthCheckController {
  private readonly log = new Logger(HealthCheckController.name);

  constructor(private readonly facade: HealthCheckFacade) {}

  @Get('api/health-check')
  healthCheck() {
    this.log.debug('healthCheck');
    return this.facade.healthCheck();
  }
}
