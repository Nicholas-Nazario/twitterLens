import React, {Component} from 'react';

class Team extends Component {
        
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