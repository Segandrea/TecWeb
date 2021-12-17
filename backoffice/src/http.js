function send(method, url, headers, body) {
  return fetch(url, {
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

export function postJSON(url, object, parse = true) {
  const promise = send("POST", url, JSON_CONTENT, JSON.stringify(object));
  return parse ? promise.then((res) => res.json()) : promise;
}

export function putJSON(url, object, parse = true) {
  const promise = send("PUT", url, JSON_CONTENT, JSON.stringify(object));
  return parse ? promise.then((res) => res.json()) : promise;
}

export function getJSON(url, parse = true) {
  const promise = send("GET", url);
  return parse ? promise.then((res) => res.json()) : promise;
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

export function redirectOnStatus(status, router, location) {
  return ([err, res]) => {
    if (res && res.status === status) {
      router.push(location);
    } else {
      return Promise.reject([err, res]);
    }
  };
}
