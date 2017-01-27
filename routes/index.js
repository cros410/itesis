const express = require('express');
const index = express.Router();
const ctlIndex = require("../controllers/index");


index.route("/login")
  .post(ctlIndex.login);

module.exports = index;
