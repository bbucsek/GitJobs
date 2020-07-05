import React, {useContext, useEffect, useState} from 'react';
import SearchBar from "../Components/SearchBar";
import PositionList from "../Components/PositionList";
import Container from '@material-ui/core/Container';
import {SearchResultContext} from "../Contexts/SearchResultsContext";

const SearchPage = () => {

    const {getOpeningPositions} = useContext(SearchResultContext);

    const getPosition = () => {
        getOpeningPositions();
    };


    useEffect(() => {
        getPosition();
    }, []);


    return (
        <>
            <Container maxWidth="md">
                <SearchBar/>
                <PositionList/>
            </Container>
        </>
    );
};

export default SearchPage;