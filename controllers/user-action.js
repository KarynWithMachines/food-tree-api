const express = require("express");
const ua = express.Router();

ua.get("/", (req, res) => {
  res.send("user");
});
module.exports = ua;
