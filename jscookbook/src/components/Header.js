import React, { Component} from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom"

class Header extends Component {
  
    render() {
        return (
            <header>
                <nav>
                    <Link to="/">Home</Link><div>|</div>
                    <Link to="/Categories">Categories</Link>
                </nav>
            </header>
        );
    }
}

export default Header;