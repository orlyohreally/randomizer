var express = require("express");
var router = express.Router();
var jwt = require("express-jwt");
var auth = jwt({
  secret: process.env.jwt_secret || "MY_SECRET",
  userProperty: "payload"
});

var ctrlPhrase = require("../controllers/phrase");
router.get("/phrases", ctrlPhrase.list);
router.post("/phrases", auth, ctrlPhrase.create);
router.put("/phrases/:id", auth, ctrlPhrase.update);
router.delete("/phrases/:id", auth, ctrlPhrase.delete);

var ctrlAuth = require("../controllers/authentication");
//router.post('/register', ctrlAuth.register);
router.post("/login", ctrlAuth.login);

module.exports = router;
