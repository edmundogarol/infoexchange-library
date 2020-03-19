import { call } from "redux-saga/effects";

const STATIC_URL = "http://127.0.0.1:8000/static/"

export function getResource(url) {
  return `${STATIC_URL}${url}`;
}

/**
 *  Custom fetch for myTransport application
 */ 
export async function customFetch(url, params = {}) {
  const apiEndpoint = "http://127.0.0.1:8000/api/";
  const composedURL = new URL(url, apiEndpoint);
  
  const {
    contentType = "application/json",
    accept = "application/json",
    params: queryParams,
    ...inputParams
  } = params;

  const finalParams = {
    credentials: "same-origin",
    ...inputParams
  };

  finalParams.headers = {
    ...finalParams.headers,
    "Content-Type": contentType,
    mode: "no cors",
    "Retry-After": 3600,
  };

  finalParams.body = JSON.stringify(finalParams.body);

  const response = await fetch(composedURL, finalParams).catch(exc => {
    throw exc;
  });

  return response;
}

export function* api(...args) {
  try {
    const response = yield call(customFetch, ...args);

    if (response.ok) {
      // Pass
    } else {
      console.error("Bad response");
    }

    return response;
  } catch (exc) {
  }
}

export default customFetch;
