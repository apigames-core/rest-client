import { isEmpty, isString } from '@apigames/json';
import {
  RestClient,
  Error301MovedPermanently,
  Error302Found,
  Error303SeeOther,
  Error304NotModified,
  Error305UseProxy,
  Error306Unused,
  Error307TemporaryRedirect,
  Error308PermanentRedirect,
  Error400BadRequest,
  Error401Unauthorized,
  Error402PaymentRequired,
  Error403Forbidden,
  Error404NotFound,
  Error405MethodNotAllowed,
  Error406NotAcceptable,
  Error407ProxyAuthenticationRequired,
  Error408RequestTimeout,
  Error409Conflict,
  Error410Gone,
  Error411LengthRequired,
  Error412PreconditionFailed,
  Error413RequestEntityTooLarge,
  Error414RequestURITooLong,
  Error415UnsupportedMediaType,
  Error416RequestedRangeNotSatisfiable,
  Error417ExpectationFailed,
  Error418ImaTeapot,
  Error421MisdirectedRequest,
  Error422UnprocessableEntity,
  Error428PreconditionRequired,
  Error429TooManyRequests,
  Error431RequestHeaderFieldsTooLarge,
  Error451UnavailableForLegalReasons,
  Error500InternalServerError,
  Error501NotImplemented,
  Error502BadGateway,
  Error503ServiceUnavailable,
  Error504GatewayTimeout,
  Error505HTTPVersionNotSupported,
  Error511NetworkAuthenticationRequired,
  Error520WebServerIsReturningAnUnknownError,
  Error522ConnectionTimedOut,
  Error524ATimeoutOccurred,
  NetworkConnectionException,
} from '../../../../src';

const payload = 'Sample payload.';

const hostName = 'http://127.0.0.1:3000';

describe('Request should succeed when performing a PUT on an endpoint that returns a', () => {
  it('200 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/200`, payload, { accept: '*/*' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
    expect(response.data).toBe('200 OK');
  });

  it('200 status code from a slow endpoint when the timeout option allows', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/slow`, payload, { accept: '*/*' }, { timeoutMs: 5000 });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
    expect(response.data).toBe('200 OK');
  });

  it('201 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/201`, payload, { accept: '*/*' });
    expect(response.statusCode).toBe(201);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
    expect(response.data).toBe('201 Created');
  });

  it('202 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/202`, payload, { accept: '*/*' });
    expect(response.statusCode).toBe(202);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
    expect(response.data).toBe('202 Accepted');
  });

  it('203 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/203`, payload, { accept: '*/*' });
    expect(response.statusCode).toBe(203);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
    expect(response.data).toBe('203 Non-Authoritative Information');
  });

  it('206 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/206`, payload, { accept: '*/*' });
    expect(response.statusCode).toBe(206);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
    expect(response.data).toBe('206 Partial Content');
  });

  it('301 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/301`, payload, { accept: '*/*' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
  });

  it('302 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/302`, payload, { accept: '*/*' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
  });

  it('303 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/303`, payload, { accept: '*/*' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
  });

  it('305 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/305`, payload, { accept: '*/*' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
  });

  it('307 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/307`, payload, { accept: '*/*' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
  });

  it('308 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.Put(`${hostName}/308`, payload, { accept: '*/*' });
    expect(response.statusCode).toBe(200);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
  });

  it('400 status code (when the error mode is set to response)', async () => {
    const restClient = new RestClient(false);
    const response = await restClient.Put(`${hostName}/400`, payload, { accept: '*/*' });
    expect(response.statusCode).toBe(400);
    expect(response.headers).toBeDefined();
    expect(isEmpty(response.headers)).toBe(false);
    expect(response.headers.server).toBe('API Games HTTP Status Service');
    expect(response.headers['content-type']).toBeDefined();
    expect(isString(response.headers['content-type'])).toBe(true);
  });
});

describe('Request should fail and throw when performing a PUT on an endpoint that returns a', () => {
  it('200 status code from a slow endpoint when the timeout is set to a low value', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/slow`, payload, { accept: '*/*' }, { maxRedirects: 0, timeoutMs: 1000 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(NetworkConnectionException);
    }
  });

  it('299 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/299`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
    }
  });

  it('301 status code with no redirect', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/301`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error301MovedPermanently);
      expect((error as Error301MovedPermanently).status).toBe(301);
    }
  });

  it('302 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/302`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error302Found);
      expect((error as Error302Found).status).toBe(302);
    }
  });

  it('303 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/303`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error303SeeOther);
      expect((error as Error303SeeOther).status).toBe(303);
    }
  });

  it('304 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/304`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error304NotModified);
      expect((error as Error304NotModified).status).toBe(304);
    }
  });

  it('305 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/305`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error305UseProxy);
      expect((error as Error305UseProxy).status).toBe(305);
    }
  });

  it('306 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/306`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error306Unused);
      expect((error as Error306Unused).status).toBe(306);
    }
  });

  it('307 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/307`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error307TemporaryRedirect);
      expect((error as Error307TemporaryRedirect).status).toBe(307);
    }
  });

  it('308 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/308`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error308PermanentRedirect);
      expect((error as Error308PermanentRedirect).status).toBe(308);
    }
  });

  it('399 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/399`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
    }
  });

  it('400 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/400`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error400BadRequest);
      expect((error as Error400BadRequest).status).toBe(400);
    }
  });

  it('401 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/401`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error401Unauthorized);
      expect((error as Error401Unauthorized).status).toBe(401);
    }
  });

  it('402 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/402`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error402PaymentRequired);
      expect((error as Error402PaymentRequired).status).toBe(402);
    }
  });

  it('403 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/403`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error403Forbidden);
      expect((error as Error403Forbidden).status).toBe(403);
    }
  });

  it('404 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/404`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error404NotFound);
      expect((error as Error404NotFound).status).toBe(404);
    }
  });

  it('405 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/405`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error405MethodNotAllowed);
      expect((error as Error405MethodNotAllowed).status).toBe(405);
    }
  });

  it('406 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/406`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error406NotAcceptable);
      expect((error as Error406NotAcceptable).status).toBe(406);
    }
  });

  it('407 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/407`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error407ProxyAuthenticationRequired);
      expect((error as Error407ProxyAuthenticationRequired).status).toBe(407);
    }
  });

  it('408 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/408`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error408RequestTimeout);
      expect((error as Error408RequestTimeout).status).toBe(408);
    }
  });

  it('409 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/409`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error409Conflict);
      expect((error as Error409Conflict).status).toBe(409);
    }
  });

  it('410 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/410`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error410Gone);
      expect((error as Error410Gone).status).toBe(410);
    }
  });

  it('411 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/411`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error411LengthRequired);
      expect((error as Error411LengthRequired).status).toBe(411);
    }
  });

  it('412 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/412`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error412PreconditionFailed);
      expect((error as Error412PreconditionFailed).status).toBe(412);
    }
  });

  it('413 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/413`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error413RequestEntityTooLarge);
      expect((error as Error413RequestEntityTooLarge).status).toBe(413);
    }
  });

  it('414 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/414`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error414RequestURITooLong);
      expect((error as Error414RequestURITooLong).status).toBe(414);
    }
  });

  it('415 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/415`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error415UnsupportedMediaType);
      expect((error as Error415UnsupportedMediaType).status).toBe(415);
    }
  });

  it('416 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/416`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error416RequestedRangeNotSatisfiable);
      expect((error as Error416RequestedRangeNotSatisfiable).status).toBe(416);
    }
  });

  it('417 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/417`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error417ExpectationFailed);
      expect((error as Error417ExpectationFailed).status).toBe(417);
    }
  });

  it('418 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/418`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error418ImaTeapot);
      expect((error as Error418ImaTeapot).status).toBe(418);
    }
  });

  it('421 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/421`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error421MisdirectedRequest);
      expect((error as Error421MisdirectedRequest).status).toBe(421);
    }
  });

  it('422 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/422`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error422UnprocessableEntity);
      expect((error as Error422UnprocessableEntity).status).toBe(422);
    }
  });

  it('428 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/428`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error428PreconditionRequired);
      expect((error as Error428PreconditionRequired).status).toBe(428);
    }
  });

  it('429 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/429`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error429TooManyRequests);
      expect((error as Error429TooManyRequests).status).toBe(429);
    }
  });

  it('431 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/431`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error431RequestHeaderFieldsTooLarge);
      expect((error as Error431RequestHeaderFieldsTooLarge).status).toBe(431);
    }
  });

  it('451 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/451`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error451UnavailableForLegalReasons);
      expect((error as Error451UnavailableForLegalReasons).status).toBe(451);
    }
  });

  it('499 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/499`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
    }
  });

  it('500 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/500`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error500InternalServerError);
      expect((error as Error500InternalServerError).status).toBe(500);
    }
  });

  it('501 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/501`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error501NotImplemented);
      expect((error as Error501NotImplemented).status).toBe(501);
    }
  });

  it('502 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/502`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error502BadGateway);
      expect((error as Error502BadGateway).status).toBe(502);
    }
  });

  it('503 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/503`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error503ServiceUnavailable);
      expect((error as Error503ServiceUnavailable).status).toBe(503);
    }
  });

  it('504 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/504`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error504GatewayTimeout);
      expect((error as Error504GatewayTimeout).status).toBe(504);
    }
  });

  it('505 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/505`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error505HTTPVersionNotSupported);
      expect((error as Error505HTTPVersionNotSupported).status).toBe(505);
    }
  });

  it('511 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/511`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error511NetworkAuthenticationRequired);
      expect((error as Error511NetworkAuthenticationRequired).status).toBe(511);
    }
  });

  it('520 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/520`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect((error as Error520WebServerIsReturningAnUnknownError).status).toBe(520);
    }
  });

  it('522 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/522`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error522ConnectionTimedOut);
      expect((error as Error522ConnectionTimedOut).status).toBe(522);
    }
  });

  it('524 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.Put(`${hostName}/524`, payload, { accept: '*/*' }, { maxRedirects: 0 });
      throw new Error('The method did not throw as expected');
    } catch (error) {
      expect(error).toBeInstanceOf(Error524ATimeoutOccurred);
      expect((error as Error524ATimeoutOccurred).status).toBe(524);
    }
  });
});
