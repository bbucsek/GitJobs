import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import PositionDescription from "./Pages/PositionDescription";
import {SearchResultProvider} from "./Contexts/SearchResultsContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {


    return (
        <SearchResultProvider>
            <div className="page-container">
                <Header/>
                <Route exact path="/position/:positionId" component={PositionDescription}/>
                <Route exact path="/" component={SearchPage}/>
                <Footer/>
            </div>
        </SearchResultProvider>


    );
}

export default App;
