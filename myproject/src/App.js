import React, { Component } from 'react'
import { Route, BrowserRouter } from "react-router-dom"
import Login from "./components/Login"
import Admin from "./components/Admin"
import Logout from "./components/Logout"

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/logout" component={Logout} />

                </switch>
            </BrowserRouter>
        );
    }
}
