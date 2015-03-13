/*
 * controllers for user authentication routes
 * @module controllers/authentication
*/

var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');



/*
 * controllers for /register routes
 */

/** GET: return the register view */
router.get('/register', function(req, res) {
    res.render('register', { });
});

/** POST: create a new user */
router.post('/register', function(req, res) {

    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {

        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });

    });
});



/*
 * controllers for /login and /logout routes
 */

/** GET: return the login view */
router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

/** POST: authenticate the user and redirect to the index */
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

/** GET:log the user out and redirect to the index */
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router;