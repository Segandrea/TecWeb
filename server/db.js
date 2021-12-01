const mongoose = require("mongoose");

// TODO: export in global config
const connectionUri = `mongodb://localhost/nolonoloplus`;

function connect() {
  mongoose.connect(connectionUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;
  connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
  );
}

module.exports = { connect };
