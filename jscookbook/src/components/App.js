import React, { Component } from "react";
import { Routes, Route } from "react-router-dom"
import "../styles/App.css";
import Home from "./Home.js"
import Categories from "./Categories.js"

class App extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/categories" element={<Categories />}></Route>
            </Routes>
        );
    }
}

export default App;