// @flow

import { create } from "apisauce";
import config from "../config";
import { Record } from "immutable";

class ApiHeaders
  extends Record({
    Accept: ""
  }) {}

class ApiConfig
  extends Record({
    baseURL: "",
    headers: new ApiHeaders()
  }) {}

const defaultHeaders = new ApiHeaders({
  Accept: "application/json"
});

const defaultConfig = new ApiConfig({
  baseURL: config.apiBaseUrl,
  headers: defaultHeaders
});

function createConfig(resourcePath: string) {
  const resourceUrl = `${config.apiBaseUrl}/${resourcePath}/`;
//  const resourceUrl = `http://localhost:3000/api/v1/${resourcePath}/`;
  console.log(resourceUrl);
  return defaultConfig.set("baseURL", resourceUrl).toJS();
}

export function createApi(resourcePath: string) {
  return create(createConfig(resourcePath));
}