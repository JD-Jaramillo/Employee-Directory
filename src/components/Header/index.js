import React from 'react';
import './style.css';

function Header(props) {
    return (
        <header className="jumbotron masthead text-white border">
            <h1> <button onClick={props.loadUsers} className="h1-btn">Employee Directory</button></h1>
            <p>Click on the name to sort by name or use the search box to narrow your results</p>
        </header>
    )
}

export default Header;