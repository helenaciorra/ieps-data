import axios from 'axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { SetFieldsOnGraphQLNodeTypeArgs } from 'gatsby';
import { parseToPascalCase } from './object';

export type HttpMethod =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

  export enum HttpMethodEnum {
    GET = 'GET',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    LINK = 'LINK',
    UNLINK = 'UNLINK',
    SET = 'SET',
  }


export interface HttpRequest extends AxiosRequestConfig {
  url: string;
  method: HttpMethod;
  data?: any;
}

export type HttpResponse<T> = AxiosResponse<{
  responseHeader: {
    status: 0,
    QTime: 0,
    params: {
      q: string,
      _?: string,
      fl?: string,
      fq?: string,
      rows?: string,
    },
  },
  response: {
    numFound: string,
    starts: 0,
    docs: T[],
  },
}>;


export type RequestError = {
  message: SetFieldsOnGraphQLNodeTypeArgs,
  status: number,
}

export interface ResponseEntry extends AxiosResponse {
  data: any;
  msg?: string;
}

const URL = process.env.GATSBY_API_URL;

export const axiosInstance = axios.create({ baseURL: URL });

type RequestOptions = HttpRequest | ((...args) => HttpRequest);

const setRequestOptions = (requestOptions: RequestOptions, ...args) => {
  if (typeof requestOptions === 'function') {
    return requestOptions(...args);
  }

  if (typeof requestOptions === 'object') {
    return requestOptions;
  }

  throw new Error(
    'requestOptions must be a object or a function tha return on of type url, method, data'
  );
};

export const HttpFetch = async <T>(requestOptions, ...args) => {
  try {
    const option = setRequestOptions(requestOptions, ...args);

    const response = await axiosInstance(option);
    // eslint-disable-next-line prettier/prettier
    if (option.responseType !== 'blob') return parseToPascalCase(response) as HttpResponse<T>;
    
    return response as HttpResponse<T>;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error:', error.message);
    throw error.response;
  }
};

export default HttpFetch;
