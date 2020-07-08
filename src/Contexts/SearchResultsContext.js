import React, {useState, createContext, useEffect} from "react";
import ApiService from "../Services/ApiService";

export const SearchResultContext = createContext();

export const SearchResultProvider = props => {


    const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";
    const API_URL = "https://jobs.github.com/positions";

    const [searchResults, setSearchResults] = useState([]);
    const [positionDescription, setPositionDescription] = useState([]);
    const [nextPagePositions, setNextPagePositions] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        getOpeningPositions();
    }, []);


    const searchJobs = async (description, location, checked) => {
        setPageCount(1);
        let startingPageCount = 1;
        let fullTime = checked ? "&full_time=on" : "";
        let url = `${PROXY_URL}${API_URL}.json?utf8=%E2%9C%93&description=${description}&location=${location}${fullTime}&`;
        setCurrentUrl(url);
        let positions = await ApiService.searchPositions(url);
        setSearchResults(positions);
        await getNextPagePositions(url, startingPageCount);
    };

    const getPositionDetails = async (positionId) => {
        let url = `${PROXY_URL}${API_URL}/${positionId}.json`;
        let positionDetails = await ApiService.getPositionDetails(url);
        setPositionDescription(positionDetails);
    };

    const getOpeningPositions = async () => {
        let url = `${PROXY_URL}${API_URL}.json?`;
        setCurrentUrl(url);
        let openingPositions = await ApiService.searchPositions(url);
        setSearchResults(openingPositions);
        await getNextPagePositions(url);
    };

    const getNextPagePositions = async (url, page) => {
        let pageC = page ? page : pageCount;
        let nextPageUrl = `${url}page=${pageC + 1}`;
        let nextPagePos = await ApiService.searchPositions(nextPageUrl);
        setPageCount(pageC + 1);
        setNextPagePositions(nextPagePos);

    };

    const loadMorePosition =  async () => {
        setSearchResults([...searchResults, ...nextPagePositions]);
        await getNextPagePositions(currentUrl);
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
                loadMorePosition,
            }}
        >
            {props.children}
        </SearchResultContext.Provider>
    )
};