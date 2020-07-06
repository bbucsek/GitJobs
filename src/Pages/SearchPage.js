import React, {useContext, useEffect, useState} from 'react';
import SearchBar from "../Components/SearchBar";
import PositionList from "../Components/PositionList";
import Container from '@material-ui/core/Container';
import {SearchResultContext} from "../Contexts/SearchResultsContext";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const SearchPage = () => {

    const {getOpeningPositions} = useContext(SearchResultContext);

    const getPosition = () => {
        getOpeningPositions();
    };


    useEffect(() => {
        getPosition();
    }, []);

    const CustomContainer = withStyles((theme) => ({
        root: {
            backgroundColor: "#F5F2E0"
        },
    }))(Container);


    return (
        <>
            <CustomContainer maxWidth="md">
                <SearchBar/>
                <PositionList/>
            </CustomContainer>
        </>
    );
};

export default SearchPage;