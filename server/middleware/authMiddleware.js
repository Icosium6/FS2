const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) res.status(401).redirect("/login"); //no token
  else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.status(403).redirect("/login"); //invalid token
      } else {
        console.log(decodedToken);
        next();
      }
    });
  }
};
module.exports = requireAuth;
