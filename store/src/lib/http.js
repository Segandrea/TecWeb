const DEFAULT_FETCH = fetch;

function send(method, url, { headers, body, fetch } = {}) {
  const _fetch = typeof fetch !== "undefined" ? fetch : DEFAULT_FETCH;

  return _fetch(url, {
    headers,
    method,
    body,
  })
    .catch((err) => {
      return Promise.reject([err, undefined]);
    })
    .then((res) => {
      return res.ok ? Promise.resolve(res) : Promise.reject([undefined, res]);
    });
}

const JSON_CONTENT = { "Content-Type": "application/json" };

export function postJSON(url, object, { parse, fetch } = {}) {
  const _parse = typeof parse !== "undefined" ? parse : true;
  const promise = send("POST", url, {
    headers: JSON_CONTENT,
    body: JSON.stringify(object),
    fetch,
  });

  return _parse ? promise.then((res) => res.json()) : promise;
}

export function putJSON(url, object, { parse, fetch } = {}) {
  const _parse = typeof parse !== "undefined" ? parse : true;
  const promise = send("PUT", url, {
    headers: JSON_CONTENT,
    body: JSON.stringify(object),
    fetch,
  });

  return _parse ? promise.then((res) => res.json()) : promise;
}

export function getJSON(url, { parse, fetch } = {}) {
  const _parse = typeof parse !== "undefined" ? parse : true;
  const promise = send("GET", url, { fetch });

  return _parse ? promise.then((res) => res.json()) : promise;
}

export function onStatus(status, callback) {
  return ([err, res]) => {
    if (res && res.status === status) {
      return callback(res);
    } else {
      return Promise.reject([err, res]);
    }
  };
}

export function redirectOnStatus(status, goto, location) {
  return ([err, res]) => {
    if (res && res.status === status) {
      goto(location);
    } else {
      return Promise.reject([err, res]);
    }
  };
}
