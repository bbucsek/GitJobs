import React, {useContext} from 'react';
import {SearchResultContext} from "../Contexts/SearchResultsContext";
import PositionListItem from "./PositionListItem";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const PositionList = () => {

    const {searchResults, nextPagePositions, getNextPagePositions, previousPagePositions, getPreviousPagePositions} = useContext(SearchResultContext);

    const PaginationButton = withStyles((theme) => ({
        root: {
            color: "white",
            backgroundColor: "#457B9D",
            width: "10%",
            margin: '1rem',
            '&:hover': {
                backgroundColor: "#4d92bc",
            },
        },
    }))(Button);

    const setNextPageButton = () => {
        return !nextPagePositions.length > 0;
    };

    const setPreviousPageButton = () => {
        return !previousPagePositions.length > 0;
    };

    const handleNextPageButton = () => {
        getNextPagePositions();
        window.scrollTo(0, 0)
    };

    const handlePreviousPageButton = () => {
        getPreviousPagePositions();
        window.scrollTo(0, 0)
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
                <div>
                    <PaginationButton disabled={setPreviousPageButton()}
                                      onClick={handlePreviousPageButton}>Previous</PaginationButton>
                    <PaginationButton disabled={setNextPageButton()}
                                      onClick={handleNextPageButton}>Next</PaginationButton>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PositionList;