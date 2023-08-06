import React from "react";
import './style.css';

function Search() {
    return (
        <form action="/" method="post" className="search-form">
            <input className="search-form__input" type="text" value="Track a Package" />
        </form>
    );
}

export default Search;