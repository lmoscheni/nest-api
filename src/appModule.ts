import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HealthCheckController } from './HealthCheck/healthCheckController';
import { HealthCheckFacade } from './HealthCheck/healthCheckFacade';

import configuration from '../config';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] })],
  controllers: [HealthCheckController],
  providers: [HealthCheckFacade],
})
export class AppModule {}
