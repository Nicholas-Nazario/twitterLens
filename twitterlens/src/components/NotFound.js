import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NotFound extends Component {
        
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
