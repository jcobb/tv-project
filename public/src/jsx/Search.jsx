/*
 * @component Search
 * - renders search box and search results
 * - handles submit action for SearchBox component
 * - makes ajax request for series data based on user search input
 */

/** required modules */
import React from 'react';
import reqwest from 'reqwest';

/** required components */
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

/* react class Search as default export */
export default React.createClass({

    displayName: 'Search',

    propTypes: {
        searchRoute: React.PropTypes.string,
        searchLabel: React.PropTypes.string,
        defaultValue: React.PropTypes.string
    },

    getInitialState: function() {
        return {
            seriesList: []
        }
    },

    /** handles submit action from SearchBox component */
    _onSubmit: function(title) {

        // TODO: handle errors
        reqwest({
            url: 'search/series',
            method: 'get',
            data: [{
                name: 'title',
                value: title
            }],
            success: function (resp) {
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
                    searchRoute={this.props.searchRoute}
                    searchLabel={this.props.searchLabel}
                    defaultValue={this.props.defaultValue}
                    onSubmit={this._onSubmit}
                />
                <SearchResults
                    seriesList={this.state.seriesList}
                />
            </div>
        );
    }

});