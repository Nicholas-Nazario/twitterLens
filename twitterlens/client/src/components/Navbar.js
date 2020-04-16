// React Imports
import React, {Component} from 'react';
// Logo for the Navbar
import Logo from './logoTransparent.png';
// CSS Imports
import './Navbar.css';

// This class creates the Navbar Object.
// This component is displayed on everypage to allow the user to navigate the site
// It extends the react Component inheriting essetial react functionality such as render()
class Navbar extends Component {
    // Render the below HTML code and export as a Navbar Object
    // This lets the index.js read the HTML as a single object
    render() {
        return (
            // Navabar component and formatting is following the template from BootStrap 4.4.x
            <div className="Navbar">
                <header className="Navbar-header">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="/">
                            <img src={Logo} width="80" height="70" alt=""></img>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Instructions <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/home">Analysis <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About Twitter Lens <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/team">Dev Team <span className="sr-only">(current)</span></a>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
          );
    }
}
export default Navbar;
      
