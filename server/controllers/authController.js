const User = require("../models/User");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");
const Token = require("../models/Token");
const crypto = require("crypto");

////////////////////////////////
// VAR ENV
const maxage = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxage,
  });
};

///////////////////////////////
exports.signup = async (req, res) => {
  try {
    const data = await User.create(req.body);

    const token = await new Token({
      userId: data._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    const url = `<p>Click the following link to verify your account:</p><a href="${process.env.BASE_URL}/users/${data._id}/verify/${token.token}">Verify Email</a>`;
    await sendEmail(data.email, "Verify Email", url);

    data.save();
    res.json(data);
  } catch (error) {
    if (error.code === 11000) {
      const { code, keyPattern, keyValue } = error;

      if (keyPattern?.email) {
        res
          .status(409)
          .json({ message: "An account with the same email already exists!" });
      } else if (keyPattern?.username) {
        res.status(409).json({ message: "Username Taken!" });
      }
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};
/////////////////////////////////////////////////////////////////
exports.login_req = async (req, res) => {
  try {
    const data = await User.login(req.body.email, req.body.password);
    const token = createToken(data._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxage * 1000 });

    res.json({ user: data }); //duh
  } catch (error) {
    if (
      error.message === "user with this email not found" ||
      error.message === "incorrect password"
    ) {
      res.status(404).json(error.message);
    } else if (error.message === "Invalid email format") {
      res.status(409).json(error.message);
    } else {
      res.status(500).json(error.message);
    }
  }
};
////////////////////////////////////////////////
exports.logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
///////////////////////////////////////////////////////////////
exports.resetPwd = async (req, res) => {
  try {
    const email = req.body.email;
    const data = await User.findOne({ email: email });

    if (!data) {
      return res
        .status(404)
        .json({ message: "User with this email not found" });
    }

    token = await new Token({
      userId: data._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    const url = `<p>Click the following link to reset your password:</p><a href="${process.env.BASE_URL}/users/${data._id}/reset/${token.token}">Reset Password</a>`;
    await sendEmail(data.email, "Reset Password", url);

    res.status(200).json({ message: "Pwd reset Link sent" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
