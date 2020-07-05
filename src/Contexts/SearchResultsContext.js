import React, {useState, createContext} from "react";

export const SearchResultContext = createContext();

export const SearchResultProvider = props => {

    const [searchResults, setSearchResults] = useState([]);

    return (
        <SearchResultContext.Provider
            value={{
                searchResults
            }}
        >
            {props.children}
        </SearchResultContext.Provider>
    )
};