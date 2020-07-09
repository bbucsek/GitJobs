import React, {useContext, useState} from 'react';
import {SearchResultContext} from "../Contexts/SearchResultsContext";
import PositionListItem from "./PositionListItem";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LinearProgressWithLabel from '@material-ui/core/LinearProgress';


const PositionList = () => {

    const {searchResults, nextPagePositions, loadMorePosition} = useContext(SearchResultContext);
    const [progress] = useState(10);

    const PaginationButton = withStyles((theme) => ({
        root: {
            color: "white",
            backgroundColor: "#457B9D",
            width: "15%",
            margin: '1rem',
            '&:hover': {
                backgroundColor: "#4d92bc",
            },
        },
    }))(Button);

    const LoadingBar = withStyles((theme) => ({
        root: {
            width: "50%",
            padding: "1rem",
            height: "1.5rem",
            margin: "0 auto",
        },
        bar: {
            backgroundColor: "#457B9D",
        },
    }))(LinearProgressWithLabel);


    const setLoadMoreButton = () => {
        return !nextPagePositions.length > 0;
    };


    const handleMorePosition = () => {
        loadMorePosition();
    };

    if (searchResults === null) {
        return (
            <div className="position_list__container">
                <LoadingBar value={progress}/>
            </div>
        )
    }

    if (!searchResults.length > 0) {
        return (
            <div className="position_list__not_found">
                No results. Maybe another keyword/country?
            </div>
        )
    }



    return (
        <React.Fragment>
            <div className="position_list__container">
                {searchResults.map(position => {
                    return <PositionListItem key={position.id} position={position}/>
                })}
                <div>
                    <PaginationButton disabled={setLoadMoreButton()}
                                      onClick={handleMorePosition}>Load More</PaginationButton>

                </div>
            </div>
        </React.Fragment>
    );
};

export default PositionList;