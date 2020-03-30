import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Attachments from "./Attachments";
import Home from "../App";
import Investors from './InvestorCard';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Investors" component={Investors} />
                </Switch>
            </Router>
        )
    }
}