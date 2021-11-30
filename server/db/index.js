const mongoose = require("mongoose");

const env = process.env.NODE_ENV;
const connectionUri = `mongodb://localhost/nolonoloplus/${env}`;

mongoose.connect(connectionUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
