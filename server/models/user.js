const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const config = require("../config.js");

const CustomerSchema = new Schema({
  username: { type: String, required: true },
});

const UserSchema = new Schema({
  role: {
    type: String,
    enum: ["admin", "employee", "customer"],
    required: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  customer: { type: CustomerSchema, required: false },
});

// compound index on role and email fields of UserSchema
UserSchema.index({ role: 1, email: 1 }, { unique: true });

// reference: https://coderrocketfuel.com/article/store-passwords-in-mongodb-with-node-js-mongoose-and-bcrypt
UserSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(config.saltRounds, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          return next();
        });
      }
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) {
      return callback(error);
    } else {
      return callback(null, isMatch);
    }
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = { User };
