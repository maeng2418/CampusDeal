var express = require('express');
var router = express.Router();
const os = require("os");

/* GET users listing. */
router.get("/test", function(req, res, next){
  res.send({ username: os.userInfo().username });
  });

module.exports = router;
