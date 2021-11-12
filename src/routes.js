import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
// import { Container } from './styles';
import Main from './Pages/Main'
import Faqs from './Pages/Faqs'
import Terms from './Pages/Terms';

function Routes() {
    return (
        <BrowserRouter>
            
                <Route path="/" exact component={Main} />
                <Route path="/Faqs" exact component={Faqs} />
                <Route path="/Terms" exact component={Terms} />
            
        </BrowserRouter>
    )
}

export default Routes;