/*
 * @component SearchResults
 * - renders list of search results
 */

/** required modules */
import React from 'react';

/* react class SearchResult as default export */
export default React.createClass({

    displayName: 'SearchResults',

    propTypes: {
        seriesList: React.PropTypes.array
    },

    render: function() {

        return(
            <ul>
                {this.props.seriesList.map(function(series){
                    var image = (series.banner) ? (<img src={"http://thetvdb.com/banners/" + series.banner[0]} />) : null;
                    return (
                        <li key={series.seriesid[0]}>
                            {image}
                            {series.SeriesName[0]}
                        </li>
                    );
                })}
            </ul>
        )

    }

})