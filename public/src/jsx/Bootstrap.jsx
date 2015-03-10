import React from 'react';
import Search from './Search';

React.render(
    <Search
        searchRoute='search/series'
        searchLabel='Search for a show'
        defaultValue='House of Cards'
    />,
    document.getElementById('search')
);