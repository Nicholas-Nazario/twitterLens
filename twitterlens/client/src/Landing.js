// React Imports
import React, {Component} from 'react';
// CSS Import
import './Landing.css';


// This class creates the Landing Page.
// This component is displayed on Loading the Twitter Lens App to display instructions
// It extends the react Component inheriting essetial react functionality such as render()
class Landing extends Component {
    // Render the below HTML code and export as Landing
    // This lets the index.js read the HTML as a single object
    render() {
        return(
            <body className="landing-body">
                <div className="full-screen">
                    <div>
                        <h1>Welcome to Twitter Lens</h1>
                        {/* "Go-to platform" subtext is in the content feild of "h1:after" in Landing.css */}
                        <br></br>
                        <h3 className="instruct-title">Instructions</h3> 
                        <div className="instruct containter text-left">
                            <ol>
                                <li>Search our list of companies by stock ticker or company name</li>
                                <li>View auto-generated candlestick charts displaying stock data</li>
                                <li>View tweets about the compnany, color coded to match sentiment
                                    <ul>
                                        <li className="pos">Green is Positive</li>
                                        <li className="neu">Yellow is Neutral</li>
                                        <li className="neg">Red is Negative</li>
                                    </ul>
                                </li>
                                <li>To learn about the project,  go to "About Twitter Lens" and "Dev Team"</li>
                            </ol>
                        </div>
                        <a className="button-line" href="/home">Start Analyzing</a> 
                    </div>
                </div>
            </body>
        );
    }
}
export default Landing;