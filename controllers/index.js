var express = require('express')
  , router = express.Router()

router.use('/search', require('./search'));

router.get('/', function(req, res) {
  res.render('index')
})

module.exports = router