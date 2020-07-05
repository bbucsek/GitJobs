import React, {useContext} from 'react';
import {SearchResultContext} from "../Contexts/SearchResultsContext";

const JobList = () => {

    const {searchResults, setSearchResults} = useContext(SearchResultContext);

    if (!searchResults) {return}

    return (
        <React.Fragment>
            Results
        </React.Fragment>
    );
};

export default JobList;