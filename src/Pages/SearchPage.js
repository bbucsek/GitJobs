import React, {useState} from 'react';
import SearchBar from "../Components/SearchBar";
import JobList from "../Components/JobList";

const SearchPage = () => {

    return (
        <div>
            <SearchBar/>
            <JobList/>
        </div>
    );
};

export default SearchPage;