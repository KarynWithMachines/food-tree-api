const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

app.use(express.static("./public"));

app.use("/a.holder", require("./controllers/account-holder"));
app.use("/u.action", require("./controllers/user-action"));

app.get("*", (req, res) => {
  res.status(404).send("page not found.");
});

module.exports = app;
