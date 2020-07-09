import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {SearchResultContext} from "../Contexts/SearchResultsContext";

const Header = () => {

    const history = useHistory();
    const {getOpeningPositions} = useContext(SearchResultContext);

    const handleClick = () => {
        getOpeningPositions();
        history.push("/");
    };


    return (
        <div className="header">
            <div className="header__title" onClick={handleClick}>
                GitJobs
            </div>
        </div>
    );
};

export default Header;