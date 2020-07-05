import React, {useContext} from 'react';
import {SearchResultContext} from "../Contexts/SearchResultsContext";
import JobListItem from "./JobListItem";

const JobList = () => {

    const {searchResults, setSearchResults} = useContext(SearchResultContext);

    if (!searchResults) {return}

    return (
        <React.Fragment>
            {searchResults.map(result => {
                return <JobListItem key={result.id} job={result} />
            })}
        </React.Fragment>
    );
};

export default JobList;