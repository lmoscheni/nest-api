import { HealthCheckFacade } from '../../src/HealthCheck/healthCheckFacade';

import pkg from '../../package.json';

describe('HealthCheckFacade Test Suite', () => {
  const facade = new HealthCheckFacade();

  test('When call HealthCheckFacade:healthCheck should return the health status of the app', () => {
    expect(facade.healthCheck()).toEqual({
      status: 'UP',
      version: pkg.version,
      author: pkg.author,
      appName: pkg.name,
      appDescription: pkg.description,
    });
  });
});
