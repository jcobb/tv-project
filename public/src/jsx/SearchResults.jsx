import React from 'react';

export default React.createClass({

    render: function() {

        return(
            <ul>
                {this.props.seriesList.map(function(series){

                    var image = (series.banner) ? (<img src={"http://thetvdb.com/banners/" + series.banner[0]} />) : null;

                    return (
                        <li>
                            {image}
                            {series.SeriesName[0]}
                        </li>);
                })}
            </ul>
        )

    }

})