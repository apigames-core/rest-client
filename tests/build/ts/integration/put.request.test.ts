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
} from '../../../../lib';

const payload = 'Sample payload.';

const hostName = 'http://127.0.0.1:3000';

describe('Request should succeed when performing a PUT on an endpoint that returns a', () => {
  it('200 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.put(`${hostName}/200`, payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
    expect(response.data).toBe('200 OK');
  });

  it('201 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.put(`${hostName}/201`, payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(201);
    expect(response.data).toBe('201 Created');
  });

  it('202 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.put(`${hostName}/202`, payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(202);
    expect(response.data).toBe('202 Accepted');
  });

  it('203 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.put(`${hostName}/203`, payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(203);
    expect(response.data).toBe('203 Non-Authoritative Information');
  });

  it('206 status code', async () => {
    const restClient = new RestClient();
    const response = await restClient.put(`${hostName}/206`, payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(206);
    expect(response.data).toBe('206 Partial Content');
  });

  it('301 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.put(`${hostName}/301`, payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('302 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.put(`${hostName}/302`, payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('303 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.put(`${hostName}/303`, payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('305 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.put(`${hostName}/305`, payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('307 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.put(`${hostName}/307`, payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });

  it('308 status code supporting redirects', async () => {
    const restClient = new RestClient();
    const response = await restClient.put(`${hostName}/308`, payload, { Accept: '*/*' });
    expect(response.statusCode).toBe(200);
  });
});

describe('Request should fail and throw when performing a PUT on an endpoint that returns a', () => {
  it('299 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/299`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
    }
  });

  it('301 status code with no redirect', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/301`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error301MovedPermanently);
      expect(error.statusCode).toBe(301);
    }
  });

  it('302 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/302`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error302Found);
      expect(error.statusCode).toBe(302);
    }
  });

  it('303 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/303`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error303SeeOther);
      expect(error.statusCode).toBe(303);
    }
  });

  it('304 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/304`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error304NotModified);
      expect(error.statusCode).toBe(304);
    }
  });

  it('305 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/305`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error305UseProxy);
      expect(error.statusCode).toBe(305);
    }
  });

  it('306 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/306`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error306Unused);
      expect(error.statusCode).toBe(306);
    }
  });

  it('307 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/307`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error307TemporaryRedirect);
      expect(error.statusCode).toBe(307);
    }
  });

  it('308 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/308`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error308PermanentRedirect);
      expect(error.statusCode).toBe(308);
    }
  });

  it('399 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/399`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
    }
  });

  it('400 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/400`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error400BadRequest);
      expect(error.statusCode).toBe(400);
    }
  });

  it('401 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/401`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error401Unauthorized);
      expect(error.statusCode).toBe(401);
    }
  });

  it('402 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/402`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error402PaymentRequired);
      expect(error.statusCode).toBe(402);
    }
  });

  it('403 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/403`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error403Forbidden);
      expect(error.statusCode).toBe(403);
    }
  });

  it('404 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/404`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error404NotFound);
      expect(error.statusCode).toBe(404);
    }
  });

  it('405 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/405`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error405MethodNotAllowed);
      expect(error.statusCode).toBe(405);
    }
  });

  it('406 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/406`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error406NotAcceptable);
      expect(error.statusCode).toBe(406);
    }
  });

  it('407 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/407`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error407ProxyAuthenticationRequired);
      expect(error.statusCode).toBe(407);
    }
  });

  it('408 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/408`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error408RequestTimeout);
      expect(error.statusCode).toBe(408);
    }
  });

  it('409 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/409`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error409Conflict);
      expect(error.statusCode).toBe(409);
    }
  });

  it('410 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/410`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error410Gone);
      expect(error.statusCode).toBe(410);
    }
  });

  it('411 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/411`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error411LengthRequired);
      expect(error.statusCode).toBe(411);
    }
  });

  it('412 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/412`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error412PreconditionFailed);
      expect(error.statusCode).toBe(412);
    }
  });

  it('413 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/413`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error413RequestEntityTooLarge);
      expect(error.statusCode).toBe(413);
    }
  });

  it('414 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/414`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error414RequestURITooLong);
      expect(error.statusCode).toBe(414);
    }
  });

  it('415 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/415`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error415UnsupportedMediaType);
      expect(error.statusCode).toBe(415);
    }
  });

  it('416 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/416`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error416RequestedRangeNotSatisfiable);
      expect(error.statusCode).toBe(416);
    }
  });

  it('417 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/417`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error417ExpectationFailed);
      expect(error.statusCode).toBe(417);
    }
  });

  it('418 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/418`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error418ImaTeapot);
      expect(error.statusCode).toBe(418);
    }
  });

  it('421 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/421`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error421MisdirectedRequest);
      expect(error.statusCode).toBe(421);
    }
  });

  it('422 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/422`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error422UnprocessableEntity);
      expect(error.statusCode).toBe(422);
    }
  });

  it('428 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/428`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error428PreconditionRequired);
      expect(error.statusCode).toBe(428);
    }
  });

  it('429 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/429`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error429TooManyRequests);
      expect(error.statusCode).toBe(429);
    }
  });

  it('431 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/431`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error431RequestHeaderFieldsTooLarge);
      expect(error.statusCode).toBe(431);
    }
  });

  it('451 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/451`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error451UnavailableForLegalReasons);
      expect(error.statusCode).toBe(451);
    }
  });

  it('499 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/499`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
    }
  });

  it('500 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/500`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error500InternalServerError);
      expect(error.statusCode).toBe(500);
    }
  });

  it('501 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/501`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error501NotImplemented);
      expect(error.statusCode).toBe(501);
    }
  });

  it('502 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/502`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error502BadGateway);
      expect(error.statusCode).toBe(502);
    }
  });

  it('503 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/503`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error503ServiceUnavailable);
      expect(error.statusCode).toBe(503);
    }
  });

  it('504 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/504`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error504GatewayTimeout);
      expect(error.statusCode).toBe(504);
    }
  });

  it('505 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/505`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error505HTTPVersionNotSupported);
      expect(error.statusCode).toBe(505);
    }
  });

  it('511 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/511`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error511NetworkAuthenticationRequired);
      expect(error.statusCode).toBe(511);
    }
  });

  it('520 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/520`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error520WebServerIsReturningAnUnknownError);
      expect(error.statusCode).toBe(520);
    }
  });

  it('522 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/522`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error522ConnectionTimedOut);
      expect(error.statusCode).toBe(522);
    }
  });

  it('524 status code', async () => {
    try {
      const restClient = new RestClient();
      await restClient.put(`${hostName}/524`, payload, { Accept: '*/*' }, { maxRedirects: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(Error524ATimeoutOccurred);
      expect(error.statusCode).toBe(524);
    }
  });
});
