// CSS imports
import './Team.css';
// React imports
import React, {Component} from 'react';
// Photo Imports
import Andy from './headshots/andy.jpg';
import Dan from './headshots/dan.jpg';
import Nick from './headshots/nick.jpg';
import Riina from './headshots/riina.jpg';
import Logo from './components/logoTransparent.png'

// This class creates the Team Page.
// This component is displayed on the "Dev Team" page to describe the goal of our project
// It extends the react Component inheriting essetial react functionality such as render()
class Team extends Component {
    // Render the below HTML code and export as Team
    // This lets the index.js read the HTML as a single object 
    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Riina}></img>
                                <h2 className="hvr-underline-from-center">Matthew Riina<span>Product Owner / Twitter Developer</span></h2>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <a href="#"><i className="fa fa-twitter fa-2x"></i></a>
                                <a href="#"><i className="fa fa-envelope-o fa-2x"></i></a>
                                <a href="#"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Nick}></img>
                                <h2 className="hvr-underline-from-center">Nick Nazario<span>Scrum Master / UX Developer</span></h2>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <a href="#"><i className="fa fa-twitter fa-2x"></i></a>
                                <a href="#"><i className="fa fa-envelope-o fa-2x"></i></a>
                                <a href="#"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Andy}></img>
                                <h2 className="hvr-underline-from-center">Andrew Emanuel<span>Visualization Developer</span></h2>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <a href="#"><i className="fa fa-twitter fa-2x"></i></a>
                                <a href="#"><i className="fa fa-envelope-o fa-2x"></i></a>
                                <a href="#"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Dan}></img>
                                <h2 className="hvr-underline-from-center">Daniel Peladeau<span>Stock Developer</span></h2>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <a href="#"><i className="fa fa-twitter fa-2x"></i></a>
                                <a href="#"><i className="fa fa-envelope-o fa-2x"></i></a>
                                <a href="#"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"></img>
                            <div className="profile-info">
                                <img className="profile-pic" src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"></img>
                                <h2 className="hvr-underline-from-center">Matt Solomon<span>Database Developer</span></h2>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <a href="#"><i className="fa fa-twitter fa-2x"></i></a>
                                <a href="#"><i className="fa fa-envelope-o fa-2x"></i></a>
                                <a href="#"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Logo}></img>
                                <h2 className="hvr-underline-from-center">Twitter Lens<span>Dev Team</span></h2>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <a href="#"><i className="fa fa-twitter fa-2x"></i></a>
                                <a href="#"><i className="fa fa-envelope-o fa-2x"></i></a>
                                <a href="#"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            // <div className="Team">
            //     <header className="Team-header">
            //         <h1>Meet the Twitter Lens Team!</h1>
            //         <ul>
            //             <li>Product Owner: Matthew Riina</li>
            //             <li>Scrum Master: Nicholas Nazario</li>
            //             <li>Developer: Andrew Emanuel</li>
            //             <li>Developer: Daniel Peladeau</li>
            //             <li>Developer: Matthew Solomon</li>
            //         </ul>
            //     </header>            
            // </div>
        );
    }
}
export default Team;