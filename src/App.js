import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import JobDescription from "./Pages/JobDescription";
import {SearchResultProvider} from "./Contexts/SearchResultsContext";


function App() {


    return (
        <SearchResultProvider>
            <div className="page-container">
                <Route exact path="/job_description" component={JobDescription}/>
                <Route exact path="/" component={SearchPage}/>
            </div>
        </SearchResultProvider>


    );
}

export default App;
