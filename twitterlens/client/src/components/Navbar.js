// React Imports
import React, {Component} from 'react';
// Logo for the Navbar
import Logo from './logoTransparent.png';

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
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a class="navbar-brand" href="/">
                            <img src={Logo} width="60" height="60" alt=""></img>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>

                            {/* NOTE:This is commented out until we decide if we want seperate pages or if we wanted a merged data page */}
                            
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Data Pages
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/stock">Stock</a>
                                    <a class="dropdown-item" href="/twitter">Twitter</a>
                                </div>
                            </li> */}
                            <li class="nav-item active">
                                <a class="nav-link" href="/about">About Twitter Lens <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/team">Dev Team <span class="sr-only">(current)</span></a>
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
      
