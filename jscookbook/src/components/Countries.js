import React, { Component } from "react";

class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            countries: []
        };

    }

    componentDidMount() {
        this.loadCountries();
        console.log("component did mount")
    }

    loadCountries() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Kstovo&units=metric&lang=ru&appid=c264291f2f48a47").then(
            response => response.json()
        ).then(
            result => {
                if (result.cod == "200") {
                    this.setState({
                        isLoaded: true,
                        countries: result
                    });
                };
                console.log("set state");
            }
        )

    }

    render() {
        console.log(this.state.countries, this.state.isLoaded);
        return (
            <React.Fragment>
                <table>
                    <thead><tr><th></th><th></th></tr></thead>
                    <tbody>
                        {
                            <React.Fragment>
                            <tr>
                                <td>Город</td>
                                <td>{this.state.countries.name}</td>
                            </tr>
                            
                            </React.Fragment>
                        }
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}


export default Countries;