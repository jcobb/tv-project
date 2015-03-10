import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import reqwest from 'reqwest';

export default React.createClass({

    getInitialState: function() {
        return {
            seriesList: []
        }
    },

    _onSubmit: function(title) {

        console.log(title);

        reqwest({
            url: 'search/series',
            method: 'get',
            data: [{
                name: 'title',
                value: title
            }],
            success: function (resp) {
                console.log(resp);
                this.setState({
                    seriesList: resp.Data.Series
                })
            }.bind(this)
        });


    },

    render: function() {
        return (
            <div>
                <SearchBox
                    searchRoute="/search/series"
                    searchLabel="Search for a TV Show"
                    defaultValue="House of Cards"
                    onSubmit={this._onSubmit}
                />
                <SearchResults
                    seriesList={this.state.seriesList}
                />
            </div>
        );
    }

});