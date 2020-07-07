import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {SearchResultContext} from "../Contexts/SearchResultsContext";
import {withStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const PositionDescription = () => {

    const {positionId} = useParams();
    const {positionDescription, getPositionDetails} = useContext(SearchResultContext);

    const getPosition = () => {
        getPositionDetails(positionId);
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
        <CustomContainer maxWidth="md">
        <div className="position_description__container">
            <div className="position_description_title">
                {positionDescription.title}
            </div>
            <div dangerouslySetInnerHTML={{ __html: positionDescription.description }} />
        </div>
        </CustomContainer>
    );
};

export default PositionDescription;