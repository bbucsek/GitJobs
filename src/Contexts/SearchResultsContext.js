import React, {useState, createContext} from "react";
import axios from 'axios';

export const SearchResultContext = createContext();

export const SearchResultProvider = props => {

    const API_URL = "https://jobs.github.com/positions.json?utf8=%E2%9C%93";
    const DESCRIPTION_URL = "&description=";
    const LOCATION_URL = "= &location=";

    const [searchResults, setSearchResults] = useState([]);

    const searchJobs = async (description, location) => {
        let url = API_URL + DESCRIPTION_URL + description + LOCATION_URL + location;
        let response = await axios.get(url);
        console.log(response.data);
        return response.data;


    };

    return (
        <SearchResultContext.Provider
            value={{
                searchResults,
                searchJobs
            }}
        >
            {props.children}
        </SearchResultContext.Provider>
    )
};