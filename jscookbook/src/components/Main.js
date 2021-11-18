import React, { Component } from "react";
import "../styles/Main.css";
import Countries from "./Countries";



class Main extends Component {

    constructor(props) {
        super(props);
        self.content = props.content;
        };


    render() {
        return (
            < main >
                {self.content}
            </main >
        );
    }
}

export default Main;