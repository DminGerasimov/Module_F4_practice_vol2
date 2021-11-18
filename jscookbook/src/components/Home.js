import React, { Component } from 'react'
import Header from "./Header.js"
import "../styles/Home.css"

class Home extends Component {

    render() {
        return (
            <home>
                <Header />
                <div class="HomePage">Книга кулинарных рецептов</div>
            </home>
        );
    }
}

export default Home;