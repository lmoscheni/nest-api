import { Module } from '@nestjs/common';
import { HealthCheckController } from './HealthCheck/healthCheckController';
import { HealthCheckFacade } from './HealthCheck/healthCheckFacade';

@Module({
  imports: [],
  controllers: [HealthCheckController],
  providers: [HealthCheckFacade],
})
export class AppModule {}
