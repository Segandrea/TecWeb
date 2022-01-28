const DEFAULT_FETCH = fetch;

function send(method, url, { query, headers, body, fetch } = {}) {
  const _fetch = fetch || DEFAULT_FETCH;
  const _query = new URLSearchParams(query || "").toString();
  const _url = _query ? `${url}?${_query}` : url;

  return _fetch(_url, {
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

export function postJSON(url, object, { query, fetch, parse } = {}) {
  const _parse = typeof parse !== "undefined" ? parse : true;
  const promise = send("POST", url, {
    query,
    headers: JSON_CONTENT,
    body: JSON.stringify(object),
    fetch,
  });

  return _parse ? promise.then((res) => res.json()) : promise;
}

export function putJSON(url, object, { query, fetch, parse } = {}) {
  const _parse = typeof parse !== "undefined" ? parse : true;
  const promise = send("PUT", url, {
    query,
    headers: JSON_CONTENT,
    body: JSON.stringify(object),
    fetch,
  });

  return _parse ? promise.then((res) => res.json()) : promise;
}

export function getJSON(url, { query, fetch, parse } = {}) {
  const _parse = typeof parse !== "undefined" ? parse : true;
  const promise = send("GET", url, { query, fetch });

  return _parse ? promise.then((res) => res.json()) : promise;
}

export function deleteJSON(url, { query, fetch, parse } = {}) {
  const _parse = typeof parse !== "undefined" ? parse : true;
  const promise = send("DELETE", url, { query, fetch });

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
