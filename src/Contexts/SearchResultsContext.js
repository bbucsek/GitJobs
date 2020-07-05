import React, {useState, createContext} from "react";
import axios from 'axios';

export const SearchResultContext = createContext();

export const SearchResultProvider = props => {

    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const API_URL = "https://jobs.github.com/positions.json?utf8=%E2%9C%93";
    //const DESCRIPTION_URL = "&description=";
    //const LOCATION_URL = "&location=";

    const [searchResults, setSearchResults] = useState([]);

    const searchJobs = async (description, location) => {
        let url = `${PROXY_URL}${API_URL}&description=${description}&location=${location}`;
        let config = {
            headers: {
                'Access-Control-Expose-Headers': 'access-control-allow-origin'
            }
        };
        let response = await axios.get(url, config);
        console.log(response.data);
        setSearchResults(response.data);
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