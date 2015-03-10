import React from 'react';

export default React.createClass({

    propTypes: {
        searchRoute: React.PropTypes.string,
        searchLabel: React.PropTypes.string,
        defaultValue: React.PropTypes.string,
        onSubmit: React.PropTypes.func
    },

    getInitialState: function() {
        return {
            value: this.props.defaultValue
        }
    },

    _handleChange: function(e) {
        this.setState(
            {
                value: e.target.value
            }
        )
    },

    _handleSubmit: function(e) {

        e.preventDefault();

        this.props.onSubmit(this.state.value);

    },

    render: function() {

        return (
            <form>
                <label>{this.props.searchLabel}</label>
                <input type="text" id="search" name="title" value={this.state.value} onChange={this._handleChange}/>
                <button onClick={this._handleSubmit}>Search</button>
            </form>
        );

    }

})