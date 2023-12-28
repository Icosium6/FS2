const User = require("../models/User");
const Token = require("../models/Token");
const jwt = require("jsonwebtoken");
exports.listUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "User introuvable" });
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "User introuvable" });
    data.deleteOne();
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.verifyUser = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (!data) return res.status(400).json({ message: "Invalid link" });
    if (data.verified)
      return res.status(200).json({ message: "User already verified" }); //react strict mode nakna

    const token = await Token.findOne({
      userId: data._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).json({ message: "Invalid link" });

    await User.findByIdAndUpdate(data._id, { verified: true });
    await token.deleteOne();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.verifyPwd = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (!data) return res.status(400).json({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: data._id,
      token: req.params.token,
    });
    if (!token) {
      console.log("no token");
      return res.status(400).json({ message: "Invalid link" });
    }

    await token.deleteOne();

    res.status(200).json({ user: data });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.checkUser = async (req, res) => {
  //*knock knock* is there anybody in there?
  const token = req.cookies.jwt;
  if (!token) {
    res.json([]);
  } else {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.status(500).json(err);
      } else {
        let user = await User.findById(decodedToken.id);
        res.json({ user, token });
      }
    });
  }
};
exports.changePwd = async (req, res) => {
  try {
    const data = await User.findById(req.body.id);
    if (!data) res.status(404).json({ message: "User not found" });
    data.password = req.body.password;
    data.save();
    res.status(200).json({ message: "password changed!" });
  } catch (error) {
    res.status(500).json(error);
  }
};
