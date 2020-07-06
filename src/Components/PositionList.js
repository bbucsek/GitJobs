import React, {useContext} from 'react';
import {SearchResultContext} from "../Contexts/SearchResultsContext";
import PositionListItem from "./PositionListItem";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const PositionList = () => {

    const {searchResults, setSearchResults, nextPagePositions, getNextPagePositions} = useContext(SearchResultContext);

    const SearchButton = withStyles((theme) => ({
        root: {
            color: "white",
            backgroundColor: "#457B9D",
            float: "right",
            width: "30%",
            '&:hover': {
                backgroundColor: "#4d92bc",
            },
        },
    }))(Button);

    const setNextPageButton = () => {
        return !nextPagePositions.length > 0;
    };

    const handleNextPageButton = () => {
        getNextPagePositions();
    };

    if (!searchResults) {
        return
    }

    return (
        <React.Fragment>
            <div className="position_list__container">
                {searchResults.map(position => {
                    return <PositionListItem key={position.id} position={position}/>
                })}
                <SearchButton disabled={setNextPageButton()} onClick={handleNextPageButton}>Next</SearchButton>
            </div>
        </React.Fragment>
    );
};

export default PositionList;