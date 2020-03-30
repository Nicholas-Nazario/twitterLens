// React Imports
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

// This class creates the NotFound Object. 
// This is the object displayed on a 404 Error
// It extends the react Component inheriting essetial react functionality such as render()
class NotFound extends Component {
    // Render the below HTML code and export as NotFound Object
    // This lets the index.js read the HTML as a single object
    render() {
        return (
            <div className="NotFound">
                <header className="NotFound-header">
                    <h1>404 Error: Page Not Found</h1>
                    <p>Sorry, but the page you are looking for does not exist</p>
                    <p>Click the link below to return to the main site</p>
                    <Link to="/">Return to Home</Link>
                </header>
            </div>
          );
    }
}
export default NotFound
