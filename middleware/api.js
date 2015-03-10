/*
 * API module
 * @module middleware/api
 */

var rest = require('restler');
var Promise = require('promise');
var parseAsJson = require('xml2js').parseString;

/** get all series which match the title param */
exports.getSeries = function(title) {

    return new Promise(function(resolve, reject){

        rest.get( 'http://www.thetvdb.com/api/GetSeries.php?seriesname=' + title ).on( 'complete', function( result ) {
            if (result instanceof Error) {
                reject(result);
            } else {
                resolve(result)
            }
        });

    });

};