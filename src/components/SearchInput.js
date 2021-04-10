import React from 'react';

function SearchInput(props) {
    return(
        <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
                <div className="searchbar">
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        className="search-input"
                        type="text"
                        name="search"
                        placeholder="Search by name"
                        id="search"
                    >
                    </input>
                </div>
            </div>
        </div>
    )

}

export default SearchInput;
