import React from "react";
import axios from 'axios';

export default {


    searchPositions: async (url, config) => {
        let response = await axios.get(url, config);
        return response.data;
    },

    getPositionDetails: async (url, config) => {
        let response = await axios.get(url, config);
        return response.data;
    }
}