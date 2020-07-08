import React from 'react';
import {useHistory} from "react-router-dom";

const PositionListItem = ({position}) => {

    const history = useHistory();

    const openJob = () => {
        history.push("/position/" + position.id)
    };

    return (
        <div className="position_list_item">
            <div className="position_list_item__left">
                <div className="position_list_item_title" onClick={openJob}>
                    {position.title}
                </div>
                <div className="position_list_item__left_wrapper">
                <div className="position_list_item_company">
                    <a href={position.company_url} target="_blank">{position.company}</a>
                </div>
                <div className="position_list_item_type">
                    {position.type}
                </div>
                </div>
            </div>
            <div className="position_list_item__right">
                <div className="position_list_item_date">
                    {position.created_at}
                </div>
                <div className="position_list_item_location">
                    {position.location}
                </div>
            </div>
        </div>
    );
};

export default PositionListItem;