import React from "react";
import axios from 'axios';

export default {


    searchPositions: async (url) => {
        let response = await axios.get(url);
        return response.data;
    },

    getPositionDetails: async (url) => {
        let response = await axios.get(url);
        return response.data;
    }

}