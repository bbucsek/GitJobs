import React, {useState, createContext} from "react";
import ApiService from "../Services/ApiService";

export const SearchResultContext = createContext();

export const SearchResultProvider = props => {


    const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";
    const API_URL = "https://jobs.github.com/positions";
    /*const CONFIG = {
        headers: {
            'Access-Control-Expose-Headers': 'access-control-allow-origin'
        }
    };*/

    const [searchResults, setSearchResults] = useState([]);
    const [positionDescription, setPositionDescription] = useState([]);
    const [previousPagePositions, setPreviousPagePositions] = useState([]);
    const [nextPagePositions, setNextPagePositions] = useState([]);
    const [pageCount, setPageCount] = useState(2);
    const [currentUrl, setCurrentUrl] = useState("");

    const searchJobs = async (description, location, checked) => {
        setPageCount(2);
        let fullTime = checked ? "&full_time=on" : "";
        let url = `${PROXY_URL}${API_URL}.json?utf8=%E2%9C%93&description=${description}&location=${location}${fullTime}`;
        let nextPageUrl = `${PROXY_URL}${API_URL}.json?utf8=%E2%9C%93&description=${description}&location=${location}${fullTime}&page=${2}`;
        let positions = await ApiService.searchPositions(url);
        let nextPagePositions = await ApiService.searchPositions(nextPageUrl);
        setSearchResults(positions);
        setNextPagePositions(nextPagePositions);
        setCurrentUrl(url);
    };

    const getPositionDetails = async (positionId) => {
        let url = `${PROXY_URL}${API_URL}/${positionId}.json`;
        let positionDetails = await ApiService.getPositionDetails(url);
        setPositionDescription(positionDetails);
    };

    const getOpeningPositions = async () => {
        let url = `${PROXY_URL}${API_URL}.json`;
        let nextPageUrl = `${PROXY_URL}${API_URL}.json?page=${pageCount}`;
        let openingPositions = await ApiService.searchPositions(url);
        let nextPagePositions = await ApiService.searchPositions(nextPageUrl);
        setCurrentUrl(url);
        setSearchResults(openingPositions);
        setNextPagePositions(nextPagePositions);
    };

    const getNextPagePositions = async () => {
        setPreviousPagePositions(searchResults);
        setSearchResults(null);
        setSearchResults(nextPagePositions);
        let nextPageUrl = `${currentUrl}?page=${pageCount + 1}`;
        let nextPagePos = await ApiService.searchPositions(nextPageUrl);
        setPageCount(pageCount + 1);
        setNextPagePositions(nextPagePos);

    };

    const getPreviousPagePositions = async () => {
        setNextPagePositions(searchResults);
        setSearchResults(null);
        setSearchResults(previousPagePositions);
        let previousPageUrl = `${currentUrl}?page=${pageCount - 1}`;
        let previousPagePos = await ApiService.searchPositions(previousPageUrl);
        setPageCount(pageCount === 1 ? 1 : pageCount - 1);
        setPreviousPagePositions(pageCount === 1 ? [] : previousPagePos);

    };

    return (
        <SearchResultContext.Provider
            value={{
                searchResults,
                searchJobs,
                positionDescription,
                getPositionDetails,
                getOpeningPositions,
                nextPagePositions,
                getNextPagePositions,
                setPageCount,
                pageCount,
                previousPagePositions,
                getPreviousPagePositions
            }}
        >
            {props.children}
        </SearchResultContext.Provider>
    )
};