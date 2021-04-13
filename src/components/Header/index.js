import React from 'react';
import './style.css';

function Header() {
    return (
        <header className="jumbotron masthead text-white border">
            <h1 className="h1">Employee Directory</h1>
            <p>Click on carrots to filter by name or use the search box to narrow your results</p>
        </header>
    )
}

export default Header;