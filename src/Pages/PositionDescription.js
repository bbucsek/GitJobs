import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {SearchResultContext} from "../Contexts/SearchResultsContext";
import SearchBar from "../Components/SearchBar";

const PositionDescription = () => {

    const {positionId} = useParams();
    const {positionDescription, getPositionDetails} = useContext(SearchResultContext);

    const getPosition = () => {
        getPositionDetails(positionId);
    };


    useEffect(() => {
        getPosition();
    }, []);


    return (
        <div>
            {positionDescription.title}
            <div dangerouslySetInnerHTML={{ __html: positionDescription.description }} />
        </div>
    );
};

export default PositionDescription;