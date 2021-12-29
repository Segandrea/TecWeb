const mongoose = require("mongoose");

function defaultSerialize(entity /*, req */) {
  return entity;
}

function defaultSelect(req) {
  return req.query.select;
}

function defaultFilter(req) {
  const filter = req.query.filter;
  return filter ? JSON.parse(filter) : {};
}

function defaultBody(req) {
  return req.body;
}

function defaultId(req) {
  return req.params.id;
}

function byId(model, { id, select, serialize } = {}) {
  const _id = id || defaultId;
  const _select = select || defaultSelect;
  const _serialize = serialize || defaultSerialize;

  return (req, res) => {
    return model
      .findById(_id(req), _select(req))
      .then((entity) => {
        if (entity) {
          return res.json(_serialize(entity, req));
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

function byIdAndUpdate(model, { id, select, body, serialize } = {}) {
  const _id = id || defaultId;
  const _select = select || defaultSelect;
  const _body = body || defaultBody;
  const _serialize = serialize || defaultSerialize;

  return (req, res) => {
    return model
      .findByIdAndUpdate(_id(req), _body(req), {
        returnDocument: "after",
        projection: _select(req) || null,
      })
      .then((entity) => {
        if (entity) {
          return res.json(_serialize(entity, req));
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

function oneByFilter(model, { filter, select, serialize } = {}) {
  // https://mongoosejs.com/docs/api.html#mongoose_Mongoose-sanitizeFilter
  const _filter = mongoose.sanitizeFilter(filter || defaultFilter);
  const _select = select || defaultSelect;
  const _serialize = serialize || defaultSerialize;

  return (req, res) => {
    return model
      .findOne(_filter(req), _select(req))
      .then((entity) => {
        if (entity) {
          return res.json(_serialize(entity, req));
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

function oneByFilterAndUpdate(model, { filter, select, body, serialize } = {}) {
  // https://mongoosejs.com/docs/api.html#mongoose_Mongoose-sanitizeFilter
  const _filter = mongoose.sanitizeFilter(filter || defaultFilter);
  const _select = select || defaultSelect;
  const _body = body || defaultBody;
  const _serialize = serialize || defaultSerialize;

  return (req, res) => {
    return model
      .findOneAndUpdate(_filter(req), _body(req), {
        returnDocument: "after",
        projection: _select(req) || null,
      })
      .then((entity) => {
        if (entity) {
          return res.json(_serialize(entity, req));
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

function listAll(model, namespace, { filter, select, sort, serialize } = {}) {
  // https://mongoosejs.com/docs/api.html#mongoose_Mongoose-sanitizeFilter
  const _filter = mongoose.sanitizeFilter(filter || defaultFilter);
  const _select = select || defaultSelect;
  const _serialize = serialize || defaultSerialize;

  return (req, res) => {
    return model
      .find(_filter(req), _select(req), { sort })
      .then((entities) =>
        res.json({ [namespace]: entities.map((e) => _serialize(e, req)) })
      )
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  };
}

function create(model, { body, serialize } = {}) {
  const _body = body || defaultBody;
  const _serialize = serialize || defaultSerialize;

  return (req, res) => {
    return model
      .create(_body(req))
      .then((entity) => res.status(201).json(_serialize(entity, req)))
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  };
}

module.exports = {
  byId,
  byIdAndUpdate,
  oneByFilter,
  oneByFilterAndUpdate,
  listAll,
  create,
};
