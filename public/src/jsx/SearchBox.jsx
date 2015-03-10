/*
 * @component SearchBox
 * - renders input field and associated form elements
 * - handles change, focus, and initial submit events
 */

import React from 'react';

/* react class SearchBox as default export */
export default React.createClass({

    displayName: 'SearchBox',

    propTypes: {
        onSubmit: React.PropTypes.func.isRequired,
        searchLabel: React.PropTypes.string,
        defaultValue: React.PropTypes.string
    },

    getInitialState: function() {
        return {
            value: this.props.defaultValue || '',
            userHasInteracted: false
        }
    },

    /** cleans input on initial focus */
    _handleFocus: function(){
        if(!this.state.userHasInteracted){
            this.setState({
                value: '',
                userHasInteracted: true
            })
        }
    },

    /** keeps state and form value in sync */
    _handleChange: function(e) {
        this.setState({ value: e.target.value });
    },

    /** prevents default form action before calling parent submit handler */
    _handleSubmit: function(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    },

    render: function() {

        var label = null;

        if(this.props.searchLabel) {
            label = (<label>{this.props.searchLabel}</label>);
        }

        return (
            <form>
                {label}
                <input type="text" value={this.state.value} onFocus={this._handleFocus} onChange={this._handleChange}/>
                <button onClick={this._handleSubmit}>Search</button>
            </form>
        );
    }

})