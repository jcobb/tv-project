/*
 * format module
 * @module middleware/format
 */

var Promise = require('promise');
var parseAsJson = require('xml2js').parseString;

/** format raw TVDB XML object in to new json object for local consumption om nom nom */
exports.formatSeries = function(series){

    return new Promise(function(resolve, reject){
        parseAsJson(series, function(err, result){
            if(err){
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });

};