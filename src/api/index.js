import superagent from "superagent";

import { getUserToken, removeItem } from "../helpers/localstorage";

function parseResponse(err, response, resolve, reject) {
  let result = null;

  if (err) {
    result = {
      status: err.response.statusCode,
      ...err.response.body,
    };
  } else {
    result = { ...response.body };
  }

  if (err) {
    if (result.status === 401) {
      removeItem("token");
    }

    reject(result);
  } else {
    resolve(result);
  }
}

class _Api {
  constructor() {
    this.config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      url: process.env.API_SERVER_URL,
    };
  }

  async get(endPoint, params = {}) {
    const config = Object.assign({}, this.config);
    const token = getUserToken();

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return new Promise((resolve, reject) =>
      superagent
        .get(`${config.url}${endPoint}`)
        .query(params)
        .set(config.headers)
        .end((err, response) => parseResponse(err, response, resolve, reject))
    );
  }

  async post(endPoint, body) {
    const config = Object.assign({}, this.config);
    const token = getUserToken();

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return new Promise((resolve, reject) =>
      superagent
        .post(`${config.url}${endPoint}`)
        .set(config.headers)
        .send(body)
        .end((err, response) => parseResponse(err, response, resolve, reject))
    );
  }

  async put(endPoint, body) {
    const config = Object.assign({}, this.config);
    const token = getUserToken();

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return new Promise((resolve, reject) =>
      superagent
        .put(`${config.url}${endPoint}`)
        .set(config.headers)
        .send(body)
        .end((err, response) => parseResponse(err, response, resolve, reject))
    );
  }

  async delete(endPoint) {
    const config = Object.assign({}, this.config);
    const token = getUserToken();

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return new Promise((resolve, reject) =>
      superagent
        .delete(`${config.url}${endPoint}`)
        .set(config.headers)
        .end((err, response) => parseResponse(err, response, resolve, reject))
    );
  }

  async formdata(endPoint, body) {
    const headers = {};
    const token = getUserToken();

    if (token) {
      headers.authorization = `Bearer ${token}`;
    }

    return new Promise((resolve, reject) =>
      superagent
        .post(`${this.config.url}${endPoint}`)
        .set(headers)
        .send(body)
        .end((err, response) => parseResponse(err, response, resolve, reject))
    );
  }
}

export default function Api() {
  return new _Api();
}
