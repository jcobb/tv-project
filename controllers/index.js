var express = require('express')
var router = express.Router();

router.use('/search', require('./search'));
router.use('/authentication', require('./authentication'));

router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

module.exports = router