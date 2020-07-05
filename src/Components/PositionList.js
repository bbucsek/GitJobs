import React, {useContext} from 'react';
import {SearchResultContext} from "../Contexts/SearchResultsContext";
import PositionListItem from "./PositionListItem";

const PositionList = () => {

    const {searchResults, setSearchResults} = useContext(SearchResultContext);

    if (!searchResults) {
        return
    }

    return (
        <React.Fragment>
            <div className="position_list__container">
                {searchResults.map(position => {
                    return <PositionListItem key={position.id} position={position}/>
                })}
            </div>
        </React.Fragment>
    );
};

export default PositionList;