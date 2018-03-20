import React from 'react';
import './styles.css';

const Search = () => (
    <div className="search-box">
        <form action="https://www.letemps.ch/search" method="GET">
        Recherche par mot-clé:
        <input type="text" name="keywords" size="12"/>
        &nbsp;
        <input type="submit" name="Search" value="OK"/>
        </form>
    </div>
);

export default Search;