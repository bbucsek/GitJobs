import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {

    const history = useHistory();

    const handleClick = () => {
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