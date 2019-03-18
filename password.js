var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Person = mongoose.model('Person');

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    Person.findOne({ email: login }, function (err, person) {
      if (err) { return done(err); }
      // Return if user not found in database
      if (!person) {
        return done(null, false, {
          message: 'Person not found'
        });
      }
      // Return if password is wrong
      if (!person.validPassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      // If credentials are correct, return the person object
      return done(null, person);
    });
  }
));