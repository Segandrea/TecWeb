const config = require("./config");
const mongoose = require("mongoose");

function connect() {
  mongoose.connect(config.mongo.connectionUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
  );
}

module.exports = { connect };
