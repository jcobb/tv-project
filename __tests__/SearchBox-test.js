// __tests__/SearchBox-test.js

jest.dontMock('../public/libs/react/SearchBox');

describe('SearchBox', function() {

    it('renders elements and handles events as required', function() {

        var React = require('react/addons');
        var SearchBox = require('../public/libs/react/SearchBox');
        var TestUtils = React.addons.TestUtils;
        var onSubmit = jest.genMockFunction();

        // Render a checkbox with label in the document
        var searchbox = TestUtils.renderIntoDocument(
            <SearchBox
                searchLabel="Hello"
                defaultValue="House of Cards"
                onSubmit={onSubmit}
            />
        );

        // extract the expected elements
        var label = TestUtils.findRenderedDOMComponentWithTag(searchbox,'label');
        var input = TestUtils.findRenderedDOMComponentWithTag(searchbox,'input');
        var submit = TestUtils.findRenderedDOMComponentWithTag(searchbox,'button');

        // check that the passed in props are being rendered to the DOM
        expect(label.getDOMNode().textContent).toEqual('Hello');
        expect(input.getDOMNode().value).toEqual('House of Cards');

        // simulate a click on the submit button
        // expect the handler was called exactly once
        // expect the first arg of the submit handler to be the input value
        TestUtils.Simulate.click(submit);
        expect(onSubmit.mock.calls.length).toBe(1);
        expect(onSubmit.mock.calls[0][0]).toBe(input.getDOMNode().value);

        // simulate a user focus on the input
        // expect the input to be cleared of the default value
        TestUtils.Simulate.focus(input);
        expect(input.getDOMNode().value).toEqual('');

    });
});