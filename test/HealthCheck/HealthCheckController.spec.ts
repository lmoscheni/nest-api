import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckController } from '../../src/HealthCheck/healthCheckController';
import { HealthCheckFacade } from '../../src/HealthCheck/healthCheckFacade';

import pkg from '../../package.json';

describe('HealthCheckController Test Suite', () => {
  let healthCheckController: HealthCheckController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
      providers: [HealthCheckFacade],
    }).compile();

    healthCheckController = app.get<HealthCheckController>(
      HealthCheckController,
    );
  });

  test('When call HealthCheckController::healtCheck should return the app health status', () => {
    expect(healthCheckController.healthCheck()).toEqual({
      status: 'UP',
      version: pkg.version,
      author: pkg.author,
      appName: pkg.name,
      appDescription: pkg.description,
    });
  });
});
