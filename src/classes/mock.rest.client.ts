/* eslint-disable no-unused-vars */
import { hasProperty, isNumber } from '@apigames/json';
import {
  IMockRestClient,
  RestClientBaseException,
  RestClientOptions,
  RestClientResponse,
} from '..';

// eslint-disable-next-line no-shadow
enum MockResponseType {
  Resolve,
  Reject
}

type MockResponseQueueItem = {
  action: MockResponseType,
  value: RestClientResponse | RestClientBaseException,
}

type MockResponseQueue = Array<MockResponseQueueItem>;

export default class MockRestClient implements IMockRestClient {
  private mockResponseQueue: MockResponseQueue;

  constructor() {
    this.mockResponseQueue = [];
  }

  MockResolve(value: RestClientResponse) {
    const params: MockResponseQueueItem = {
      action: MockResponseType.Resolve,
      value,
    };
    this.mockResponseQueue.push(params);

    return this;
  }

  MockReject(value: RestClientBaseException) {
    const params = {
      action: MockResponseType.Reject,
      value,
    };
    this.mockResponseQueue.push(params);

    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  isRestClientResponse(value: any): value is RestClientResponse {
    return (hasProperty(value, 'statusCode') && isNumber(value.statusCode));
  }

  async Delete(
    uri: string,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    if (this.mockResponseQueue.length > 0) {
      const actionParams = this.mockResponseQueue.shift();
      if (actionParams.action === MockResponseType.Resolve) {
        if (this.isRestClientResponse(actionParams.value)) return actionParams.value;
      }
      throw actionParams.value;
    } else {
      throw new Error('Please mock the Delete() response document using MockResolve() or MockReject().');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async Get(
    uri: string,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    if (this.mockResponseQueue.length > 0) {
      const actionParams = this.mockResponseQueue.shift();
      if (actionParams.action === MockResponseType.Resolve) {
        if (this.isRestClientResponse(actionParams.value)) return actionParams.value;
      }
      throw actionParams.value;
    } else {
      throw new Error('Please mock the Get() response document using MockResolve() or MockReject().');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async Head(
    uri: string,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    if (this.mockResponseQueue.length > 0) {
      const actionParams = this.mockResponseQueue.shift();
      if (actionParams.action === MockResponseType.Resolve) {
        if (this.isRestClientResponse(actionParams.value)) return actionParams.value;
      }
      throw actionParams.value;
    } else {
      throw new Error('Please mock the Head() response document using MockResolve() or MockReject().');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async Patch(
    uri: string,
    payload: any,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    if (this.mockResponseQueue.length > 0) {
      const actionParams = this.mockResponseQueue.shift();
      if (actionParams.action === MockResponseType.Resolve) {
        if (this.isRestClientResponse(actionParams.value)) return actionParams.value;
      }
      throw actionParams.value;
    } else {
      throw new Error('Please mock the Patch() response document using MockResolve() or MockReject().');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async Post(
    uri: string,
    payload: any,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    if (this.mockResponseQueue.length > 0) {
      const actionParams = this.mockResponseQueue.shift();
      if (actionParams.action === MockResponseType.Resolve) {
        if (this.isRestClientResponse(actionParams.value)) return actionParams.value;
      }
      throw actionParams.value;
    } else {
      throw new Error('Please mock the Post() response document using MockResolve() or MockReject().');
    }
  }

  // eslint-disable-next-line no-unused-vars
  async Put(
    uri: string,
    payload: any,
    headers?: Record<string, string>,
    options?: RestClientOptions,
  ): Promise<RestClientResponse> {
    if (this.mockResponseQueue.length > 0) {
      const actionParams = this.mockResponseQueue.shift();
      if (actionParams.action === MockResponseType.Resolve) {
        if (this.isRestClientResponse(actionParams.value)) return actionParams.value;
      }
      throw actionParams.value;
    } else {
      throw new Error('Please mock the Put() response document using MockResolve() or MockReject().');
    }
  }

  reset() {
    this.mockResponseQueue = [];
  }
}
