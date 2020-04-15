// React Imports
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

// This class creates the NotFound Page. 
// This is the object displayed on a 404 Error
// It extends the react Component inheriting essetial react functionality such as render()
class NotFound extends Component {
    // Render the below HTML code and export as NotFound
    // This lets the index.js read the HTML as a single object
    render() {
        return (
            <div className="NotFound">
                <header className="NotFound-header">
                <div class="card text-center" style={{margin:50}}>
                    <div class="card-header" style={{fontSize:30}}>
                    404 Error: Page Not Found
                    </div>
                    <div class="card-body">
                        <p>
                            Sorry, but the page you are looking for does not exist
                        </p>
                        <p>
                            Click the link below to return to the main site
                        </p>
                        <a href="/" class="btn btn-primary">Return to Twitter Lens</a>
                    </div>
                </div>
                </header>
            </div>
          );
    }
}
export default NotFound
