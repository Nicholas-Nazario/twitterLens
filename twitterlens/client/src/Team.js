// CSS imports
import './Team.css';
// React imports
import React, {Component} from 'react';
// Photo Imports
import Andy from './headshots/andy.jpg';
import AndyBack from './headshots/andyBack.jpg';
import Dan from './headshots/dan.jpg';
import DanBack from './headshots/danBack.jpg';
import Nick from './headshots/nick.jpg';
import NickBack from './headshots/nickBack.jpg';
import Riina from './headshots/riina.jpg';
import RiinaBack from './headshots/riinaBack.jpg'
import Solomon from './headshots/solomon.jpg';
import SoloBack from './headshots/soloBack.jpg';
import Logo from './components/logoTransparent.png';
import LogoBack from './headshots/lensBack.jpg';

// This class creates the Team Page.
// This component is displayed on the "Dev Team" page to describe the goal of our project
// It extends the react Component inheriting essetial react functionality such as render()
// Design Inspired by https://codepen.io/miketricking/pen/JXdzpL
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
                        <img className="img-responsive"  src={RiinaBack}></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Riina}></img>
                                <h2 className="hvr-underline-from-center">Matthew Riina<span>Product Owner / Twitter Developer</span></h2>
                                <div>
                                    Matthew is a Computer Science student at Rensselaer Polytechnic Institute graduating in 2022 with a concentration in Artificial Intelligence and Data. His work experience includes an internship as a Software Developer at IBM. Matthew is currently looking for opportunities for his Arch away semester starting January 2021.
                                </div>
                                <a href="https://www.instagram.com/mattriina/" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="https://github.com/MattRiina" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                                <a href="http://www.linkedin.com/in/matthew-riina-19a394178" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src={NickBack}></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Nick}></img>
                                <h2 className="hvr-underline-from-center">Nick Nazario<span>Scrum Master / UX Developer</span></h2>
                                <div>
                                    Nick is a Computer Science student at Rensselaer Polytechnic Institute graduating in 2020 with a concentraion in Artificial Intelligence and Data. His work experience includes internships as a Software Developer at MITRE, MIT Lincoln Labortatory, and Boeing. Nick will be starting a full time position with Amazon as a SDE in September 2020.
                                </div>
                                <a href="https://twitter.com/nick_nazario" target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
                                <a href="https://github.com/nicholas-nazario" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/nicholas-nazario/" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src={AndyBack}></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Andy}></img>
                                <h2 className="hvr-underline-from-center">Andrew Emanuel<span>Visualization Developer</span></h2>
                                <div>
                                    Andrew is a Computer Science student at Rensselaer Polytechnic Institute graduating in 2022 with a concentration in either AI and Data or Systems and Software. He is currently seeking opportunities starting in January 2021 for his Arch semester away.
                                </div>
                                <a href="https://www.instagram.com/andy.emanuel/" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="https://github.com/emanua" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/andrew-emanuel-60b757139/" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src={DanBack}></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Dan}></img>
                                <h2 className="hvr-underline-from-center">Daniel Peladeau<span>Stock Developer</span></h2>
                                <div>
                                    Daniel is a Computer Science student at Rensselaer Polytechnic Institute graduating in 2020 with a concentration in Artificial Intelligence and Data. His work experience includes internships as a Software Developer at Hayward Industries and Professional Services Intern at Amazon Web Services. Daniel will be starting a full time position with AWS as a Professional Services Consultant in August of 2020.
                                </div>
                                <a href="https://www.instagram.com/dcpeladeau/" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="https://github.com/Daniel-Peladeau" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/daniel-peladeau/" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src={SoloBack}></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Solomon}></img>
                                <h2 className="hvr-underline-from-center">Matt Solomon<span>Database Developer</span></h2>
                                <div>
                                Matthew Solomon is a computer science student at Rensselaer Polytechnic Institute graduating spring of 2021. His experiences include one internship at Microsoft.
                                </div>
                                <a href="https://www.instagram.com/matthewsolomon/" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="https://github.com/Matthew-Solomon" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/matthew-solomon-667938167" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="profile-card text-center">
                        <img className="img-responsive"  src={LogoBack}></img>
                            <div className="profile-info">
                                <img className="profile-pic" src={Logo}></img>
                                <h2 className="hvr-underline-from-center">Twitter Lens<span>Dev Team</span></h2>
                                <div>
                                    Contact The Team!
                                </div>
                                <div>
                                TwitterLens is a tool that utilizes live stock market data in tandem with relevant Tweets from Twitter in order to inform investors and day traders of live market sentiment.
                                </div>
                                <a href="https://twitter.com/dev_lens" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
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