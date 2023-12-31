const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passpotLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});
UserSchema.plugin(passpotLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
