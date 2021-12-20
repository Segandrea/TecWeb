function defaultSerialize(entity) {
  return entity;
}

function defaultExtractQuery(req) {
  return req.query;
}

function defaultExtractBody(req) {
  return req.body;
}

function defaultExtractId(req) {
  return req.params.id;
}

function byId(model, serialize, extractId) {
  const _serialize = serialize || defaultSerialize;
  const _extractId = extractId || defaultExtractId;

  return (req, res) => {
    const id = _extractId(req);

    return model
      .findById(id)
      .lean()
      .then((entity) => {
        if (entity) {
          return res.json(_serialize(entity));
        } else {
          return res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  };
}

function oneByQuery(model, serialize, extractQuery) {
  const _serialize = serialize || defaultSerialize;
  const _extractQuery = extractQuery || defaultExtractQuery;

  return (req, res) => {
    const query = _extractQuery(req);

    return model
      .findOne(query)
      .lean()
      .then((entity) => {
        if (entity) {
          return res.json(_serialize(entity));
        } else {
          return res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  };
}

function oneByQueryAndUpdate(model, serialize, extractQuery, extractBody) {
  const _serialize = serialize || defaultSerialize;
  const _extractQuery = extractQuery || defaultExtractQuery;
  const _extractBody = extractBody || defaultExtractBody;

  return (req, res) => {
    const query = _extractQuery(req);
    const body = _extractBody(req);

    return model
      .findOneAndUpdate(query, body, { returnDocument: "after", lean: true })
      .then((entity) => {
        if (entity) {
          return res.json(_serialize(entity));
        } else {
          return res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  };
}

function listAll(model, namespace, serialize, extractQuery) {
  const _serialize = serialize || defaultSerialize;
  const _extractQuery = extractQuery || defaultExtractQuery;

  return (req, res) => {
    const query = _extractQuery(req);

    return model
      .find(query)
      .lean()
      .then((entities) => res.json({ [namespace]: entities.map(_serialize) }))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  };
}

function byIdAndUpdate(model, serialize, extractBody, extractId) {
  const _serialize = serialize || defaultSerialize;
  const _extractBody = extractBody || defaultExtractBody;
  const _extractId = extractId || defaultExtractId;

  return (req, res) => {
    const id = _extractId(req);
    const body = _extractBody(req);

    return model
      .findByIdAndUpdate(id, body, { returnDocument: "after", lean: true })
      .then((entity) => {
        if (entity) {
          return res.json(_serialize(entity));
        } else {
          return res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  };
}

module.exports = {
  byId,
  oneByQuery,
  oneByQueryAndUpdate,
  listAll,
  byIdAndUpdate,
};
