/*
 * controller for search route(s)
 * @module controllers/search
 */

var express = require('express');
var router = express.Router();
var API = require('../middleware/api');
var formatSeries = require('../middleware/format').formatSeries;

/** get the series data from the TVDB api */
router.get('/series', function(req, res) {

    // the title of the show to be used in the API search query
    // should be passed as the title param in the GET request
    var title = req.query.title;

    if(title) {

        // use theAPI middleware to make a request to the TVDB api
        API.getSeries(title)

            // use the format middleware to format the returned XML
            .then(formatSeries)

            // hurrah! :)
            .then(function(result){
                res.json(result);
            })

            // boo :(
            .catch(function(err){
                res.json(err);
            });

    }

});

module.exports = router;