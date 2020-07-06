import React, {useState, createContext} from "react";
import ApiService from "../Services/ApiService";

export const SearchResultContext = createContext();

export const SearchResultProvider = props => {

    const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";
    const API_URL = "https://jobs.github.com/positions";
    const CONFIG = {
        headers: {
            'Access-Control-Expose-Headers': 'access-control-allow-origin'
        }
    };
    //const DESCRIPTION_URL = "&description=";
    //const LOCATION_URL = "&location=";

    const [searchResults, setSearchResults] = useState([]);
    const [positionDescription, setPositionDescription] = useState([]);

    const searchJobs = async (description, location, checked) => {
        let fullTime = checked ? "&full_time=on" : "";
        let url = `${PROXY_URL}${API_URL}.json?utf8=%E2%9C%93&description=${description}&location=${location}${fullTime}`;
        let positions = await ApiService.searchPositions(url, CONFIG);
        setSearchResults(positions);
    };

    const getPositionDetails = async (positionId) => {
        let url = `${PROXY_URL}${API_URL}/${positionId}.json`;
        let positionDetails = await ApiService.getPositionDetails(url, CONFIG);
        setPositionDescription(positionDetails);
    };

    const getOpeningPositions = async () => {
      let url = `${PROXY_URL}${API_URL}.json`;
      let openingPositions = await ApiService.searchPositions(url, CONFIG)
        setSearchResults(openingPositions);
    };

    return (
        <SearchResultContext.Provider
            value={{
                searchResults,
                searchJobs,
                positionDescription,
                getPositionDetails,
                getOpeningPositions
            }}
        >
            {props.children}
        </SearchResultContext.Provider>
    )
};