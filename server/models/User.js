const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "please give valid email"], //npm i validator
  },
  username: {
    type: String,
    required: [true, "please enter username"],
    unique: true,
  },
  password: {
    type: String,
    minlength: [6, "password too short"],
    required: [true, "please enter username"],
  },
  verified: { type: Boolean, default: false },
  role: {
    type: String,
    enum: ["admin", "default", "corp"],
    default: "default",
  },
});

//pwd hash
userSchema.pre("save", async function (next) {
  if (this.password && this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 10);
  next();
});

//login

userSchema.statics.login = async function (email, password) {
  if (!isEmail(email)) {
    throw new Error("Invalid email format");
  }
  const user = await this.findOne({ email });

  if (user) {
    // if (!user.verified) {
    //   throw Error("account not verified");
    // }
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("user with this email not found");
};

const User = mongoose.model("User", userSchema);
module.exports = User;
