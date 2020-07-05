import React, {useState} from 'react';
import SearchBar from "../Components/SearchBar";
import PositionList from "../Components/PositionList";

const SearchPage = () => {

    return (
        <div>
            <SearchBar/>
            <PositionList/>
        </div>
    );
};

export default SearchPage;