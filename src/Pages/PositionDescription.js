import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {SearchResultContext} from "../Contexts/SearchResultsContext";

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
        </div>
    );
};

export default PositionDescription;