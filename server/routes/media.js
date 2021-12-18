const express = require("express");
const passport = require("passport");

const Upload = require("../models/upload").Upload;

const router = express.Router();

router.get("/images/:id", (req, res) => {
  Upload.findById(req.params.id)
    .lean()
    .then((upload) => {
      if (!upload) {
        res.sendStatus(404);
      } else {
        res.type(upload.type).send(Buffer.from(upload.data, "base64"));
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
