import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
// import { Container } from './styles';
import Main from './Pages/Main'
import Faqs from './Pages/Faqs'
import Home from './Pages/Home';
import Terms from './Pages/Terms';
import Settings from './Pages/Settings';

function Routes() {
    return (
        <BrowserRouter>
            
                <Route path="/" exact component={Main} />
                <Route path="/Home" exact component={Home} />
                <Route path="/Faqs" exact component={Faqs} />
                <Route path="/Terms" exact component={Terms} />
                <Route path="/settings" exact component={Settings} />
            
        </BrowserRouter>
    )
}

export default Routes;