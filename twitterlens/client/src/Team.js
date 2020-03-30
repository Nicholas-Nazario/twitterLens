// React imports
import React, {Component} from 'react';

// This class creates the Team Page.
// This component is displayed on the "Dev Team" page to describe the goal of our project
// It extends the react Component inheriting essetial react functionality such as render()
class Team extends Component {
    // Render the below HTML code and export as Team
    // This lets the index.js read the HTML as a single object 
    render() {
        return (
            <div className="Team">
                <header className="Team-header">
                    <h1>Meet the Twitter Lens Team!</h1>
                    <ul>
                        <li>Product Owner: Matthew Riina</li>
                        <li>Scrum Master: Nicholas Nazario</li>
                        <li>Developer: Andrew Emanuel</li>
                        <li>Developer: Daniel Peladeau</li>
                        <li>Developer: Matthew Solomon</li>
                    </ul>
                </header>            
            </div>
        );
    }
}
export default Team;