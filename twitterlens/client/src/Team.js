// CSS imports
import './Team.css';
// React imports
import React, {Component} from 'react';
// Photo Imports
import Andy from './headshots/andy.jpg';
import Dan from './headshots/dan.jpg';
import Nick from './headshots/nick.jpg';
import Riina from './headshots/riina.jpg';
import Solomon from './headshots/solomon.jpg';
import Logo from './components/logoTransparent.png';

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
            <div className="container">
                <div className="row ">
                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Riina}></img>
                                <h2 className="hvr-underline-from-center">Matthew Riina<span>Product Owner / Twitter Developer</span></h2>
                                <div>
                                    Matthew is a Computer Science student at Rensselaer Polytechnic Institute graduating in 2022 with a concentration in Artificial Intelligence and Data. His work experience includes an internship as a Software Developer at IBM. Matthew is currently looking for opportunities for his Arch away semester starting January 2021.
                                </div>
                                <a href="https://www.instagram.com/mattriina/"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="https://github.com/MattRiina"><i className="fab fa-github fa-2x"></i></a>
                                <a href="http://www.linkedin.com/in/matthew-riina-19a394178"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Nick}></img>
                                <h2 className="hvr-underline-from-center">Nick Nazario<span>Scrum Master / UX Developer</span></h2>
                                <div>
                                    Nick is a Computer Science student at Rensselaer Polytechnic Institute graduating in 2020 with a concentraion in Artificial Intelligence and Data. His work experinece includes internships as a Software Developer at MITRE, MIT Lincoln Labortatory, and Boeing. Nick will be starting a full time position with Amazon as an SDE in September 2020.
                                </div>
                                <a href="https://twitter.com/nick_nazario"><i className="fab fa-twitter fa-2x"></i></a>
                                <a href="https://github.com/nicholas-nazario"><i className="fab fa-github fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/nicholas-nazario/"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Andy}></img>
                                <h2 className="hvr-underline-from-center">Andrew Emanuel<span>Visualization Developer</span></h2>
                                <div>
                                    Andrew is a Computer Science student at Rensselaer Polytechnic Institute graduating in 2022 with a concentration in either AI and Data or Systems and Software. He is currently seeking opportunities starting in January 2021 for his Arch semester away.
                                </div>
                                <a href="https://www.instagram.com/andy.emanuel/"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="https://github.com/emanua"><i className="fab fa-github fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/andrew-emanuel-60b757139/"><i className="fa fa-linkedin fa-2x"></i></a>
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
                                <div>
                                    Daniel is a Computer Science student at Rensselaer Polytechnic Institute graduating in 2020 with a concentration in Artificial Intelligence and Data. His work experience includes internships as a Software Developer at Hayward Industries and Professional Services Intern at Amazon Web Services. Daniel will be starting a full time position with AWS as a Professional Services Consultant in August of 2020.
                                </div>
                                <a href="https://www.instagram.com/dcpeladeau/"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="https://github.com/Daniel-Peladeau"><i className="fab fa-github fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/daniel-peladeau/"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Solomon}></img>
                                <h2 className="hvr-underline-from-center">Matt Solomon<span>Database Developer</span></h2>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <a href="https://www.instagram.com/matthewsolomon/"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="https://github.com/Matthew-Solomon"><i className="fab fa-github fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/matthew-solomon-667938167"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Logo}></img>
                                <h2 className="hvr-underline-from-center">Twitter Lens<span>Dev Team</span></h2>
                                <div>
                                    Contact The Team!
                                </div>
                                <div>
                                TwitterLens is a tool that utilizes live stock market data in tandem with relevant Tweets from Twitter in order to inform investors and day traders of live market sentiment.
                                </div>
                                <a href="https://twitter.com/dev_lens"><i className="fa fa-twitter fa-2x"></i></a>
                                <a href="mailto:twitterlensdev@gmail.com"><i className="fa fa-envelope-o fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>
            </div>
        );
    }
}
export default Team;