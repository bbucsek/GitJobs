import React, {useState} from 'react';
import SearchBar from "../Components/SearchBar";
import PositionList from "../Components/PositionList";
import Container from '@material-ui/core/Container';

const SearchPage = () => {

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