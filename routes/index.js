const express = require('express');
const index = express.Router();
const ctlIndex = require("../controllers/index");


index.route("/login")
  .post(ctlIndex.login);

  index.route("/alltesis")
  .get(ctlIndex.getTesis);

module.exports = index;
