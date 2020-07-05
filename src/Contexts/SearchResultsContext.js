import React, {useState, createContext} from "react";
import axios from 'axios';
import ApiService from "../Services/ApiService";

export const SearchResultContext = createContext();

export const SearchResultProvider = props => {

    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const API_URL = "https://jobs.github.com/positions";
    const config = {
        headers: {
            'Access-Control-Expose-Headers': 'access-control-allow-origin'
        }
    };
    //const DESCRIPTION_URL = "&description=";
    //const LOCATION_URL = "&location=";

    const [searchResults, setSearchResults] = useState([]);
    const [positionDescription, setPositionDescription] = useState([]);

    const searchJobs = async (description, location) => {
        let url = `${PROXY_URL}${API_URL}.json?utf8=%E2%9C%93&description=${description}&location=${location}`;
        let positions = await ApiService.searchPositions(url, config);
        setSearchResults(positions);
    };

    const getPositionDetails = async (positionId) => {
        let url = `${PROXY_URL}${API_URL}/${positionId}.json`;
        let positionDetails = await ApiService.getPositionDetails(url, config);
        setPositionDescription(positionDetails);
    };

    return (
        <SearchResultContext.Provider
            value={{
                searchResults,
                searchJobs,
                positionDescription,
                getPositionDetails
            }}
        >
            {props.children}
        </SearchResultContext.Provider>
    )
};