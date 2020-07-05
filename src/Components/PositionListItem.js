import React from 'react';
import {useHistory} from "react-router-dom";


const PositionListItem = ({position}) => {

    const history = useHistory();

    const openJob = () => {
        history.push("/position/" + position.id)
    };

    return (
        <div onClick={openJob}>
            {position.title}
        </div>
    );
};

export default PositionListItem;