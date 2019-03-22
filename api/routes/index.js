var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.jwt_secret || 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlPhrase = require('../controllers/phrase');
router.get('/phrases', auth, ctrlPhrase.list);

var ctrlAuth = require('../controllers/authentication');
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


module.exports = router;
