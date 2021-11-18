import React, { Component } from 'react'
import Header from "./Header.js"
import Main from "./Main.js"
import "../styles/Home.css"

class Home extends Component {

    render() {
        return (
            <home>
                <Header />
                <Main content = "Книга кулинарных рецептов" />
            </home>
        );
    }
}

export default Home;