const express = require("express");
const ac = express.Router();

ac.get("/", (req, res) => {
  res.send("account");
});
module.exports = ac;
