import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// import { Container } from './styles';
import Main from './Pages/Main'
import Faqs from './Pages/Faqs'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/Faqs" exact component={Faqs} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;