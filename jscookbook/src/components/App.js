import React, { Component } from "react";
import { Routes, Route } from "react-router-dom"
import "../styles/App.css";
import Home from "./Home.js"

class App extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />}>

                </Route>
            </Routes>
        );
    }
}

export default App;