const DEFAULT_FETCH = fetch;
function send(method, url, { query, headers, body, fetch: fetch2 } = {}) {
  const _fetch = fetch2 || DEFAULT_FETCH;
  const _query = new URLSearchParams(query || "").toString();
  const _url = _query ? `${url}?${_query}` : url;
  return _fetch(_url, {
    headers,
    method,
    body
  }).catch((err) => {
    return Promise.reject([err, void 0]);
  }).then((res) => {
    return res.ok ? Promise.resolve(res) : Promise.reject([void 0, res]);
  });
}
const JSON_CONTENT = { "Content-Type": "application/json" };
function postJSON(url, object, { query, fetch: fetch2, parse } = {}) {
  const _parse = typeof parse !== "undefined" ? parse : true;
  const promise = send("POST", url, {
    query,
    headers: JSON_CONTENT,
    body: JSON.stringify(object),
    fetch: fetch2
  });
  return _parse ? promise.then((res) => res.json()) : promise;
}
function putJSON(url, object, { query, fetch: fetch2, parse } = {}) {
  const _parse = typeof parse !== "undefined" ? parse : true;
  const promise = send("PUT", url, {
    query,
    headers: JSON_CONTENT,
    body: JSON.stringify(object),
    fetch: fetch2
  });
  return _parse ? promise.then((res) => res.json()) : promise;
}
function getJSON(url, { query, fetch: fetch2, parse } = {}) {
  const _parse = typeof parse !== "undefined" ? parse : true;
  const promise = send("GET", url, { query, fetch: fetch2 });
  return _parse ? promise.then((res) => res.json()) : promise;
}
function deleteJSON(url, { query, fetch: fetch2, parse } = {}) {
  const _parse = typeof parse !== "undefined" ? parse : true;
  const promise = send("DELETE", url, { query, fetch: fetch2 });
  return _parse ? promise.then((res) => res.json()) : promise;
}
function onStatus(status, callback) {
  return ([err, res]) => {
    if (res && res.status === status) {
      return callback(res);
    } else {
      return Promise.reject([err, res]);
    }
  };
}
function redirectOnStatus(status, goto, location) {
  return ([err, res]) => {
    if (res && res.status === status) {
      goto(location);
    } else {
      return Promise.reject([err, res]);
    }
  };
}
export { putJSON as a, deleteJSON as d, getJSON as g, onStatus as o, postJSON as p, redirectOnStatus as r };
