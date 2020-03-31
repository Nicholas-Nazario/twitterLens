// React Imports
import React, {Component} from 'react';


// This class creates the About Page.
// This component is displayed on the "About Twitter Lens" page to describe the goal of our project
// It extends the react Component inheriting essetial react functionality such as render()
class About extends Component {
    // Render the below HTML code and export as About
    // This lets the index.js read the HTML as a single object
    render() {
        return (
            <div className="About">
                <header className="About-header">
                    <h1>Twitter Lens Vision</h1>
                        <h2>Executive Summary</h2>
                        <p>
                            TwitterLens is a tool that utilizes live stock market data in tandem with relevant Tweets from Twitter in order to inform investors and day traders of live market sentiment. TwitterLens will consist of a website similar to a search engine, where the user can search for a company to view related tweets and statistics. Users may apply filters to narrow down the search to specific categories, such as Tweets that were published by market analysts rather than the general customer, or vice versa. This tool will show the correlation between stock price and public sentiment, providing invaluable insight that goes beyond the news and price charts. 
                        </p>
                        <h2>Features</h2>
                        <p>
                            This project has a bunch of features that makes the project valuable. One key feature of TwitterLens is data visualization of a company’s Twitter buzz over a period of time. Another key feature of the project is that it compares the visualized Twitter buzz over a period of time for a company to the company’s stock prices over that same period of time. The project also makes use of a custom filter feature to filter out irrelevant data in searches.
                        </p>
                        <h2>Business Case</h2>
                            <h3>Niche</h3>
                            <p>
                                This project’s target audience is people who are investing in stocks and developers who are creating machine learning apps for investing. People who are new to investing in stocks need a nice, friendly place to start learning about companies. This project would be ideal to these people as it gives visualizations of a company’s Twitter buzz and the stock values over a set period of time. Developers who are creating machine learning apps for investing, need a way of collecting, cleaning, filtering, and using the data. TwitterLens would help these developers because it cleans, filters, stores, and visualizes crucial data which would reduce the amount of work they would need to put in to use the data. 
                            </p>
                            <h3>Competition</h3>
                            <p>
                                The Twitter advanced search function would be a competitor to this project. The Twitter advanced search allows you to search for posts between certain date ranges. Our project is better than this competitor because TwitterLens shows results for a company’s Twitter buzz and stock values over custom ranges, in addition to providing visualization for the data over the date range, and uses custom filters to filter out irrelevant data. Here is a link to the competition: https://twitter.com/ 
                            </p>
                            <h3>Value for the Effort</h3>
                            <p>
                                This project could be of great value to the community because it would allow people who are new to investing in stocks to look at visualized data about a given company to get an idea of which companies are doing well and which are not. The social impact from this could be that the project leads to more people getting involved in investing, which has great social value as it can positively affect peoples’ lives. This project can even be made into a product that will generate profit for the effort because it would be marketable to developers that are developing an investing app that uses machine learning. The way our project collects and manages the data would make it worth the investment, as it would make the developers’ lives easier.
                            </p>
                            <h3>Risks of Product Success</h3>
                            <p>
                                The product faces a couple barriers when it comes to selling the product. One barrier the product faces is that there is not a large number of developers who are developing investment apps so the demand for the app would not be very high. Another barrier is that developers may be looking for more data than what we would be storing, so they may not be as motivated to buy our product. 
                            </p>
                        <h2>Stakeholders</h2>
                        <p>
                            The stakeholders of this project are Professor John Sturman, Teaching Assistants Chau-Lin (Charley) Huang and Vaishnavi Neema, and team members Andrew Emanuel, Daniel Peladeau, Matthew Riina, Matthew Solomon, and Nicholas Nazario. Professor Sturman, Charley, and Vaishnavi have vested interest in our project because the success of the project is a direct reflection of their successful teaching. Professor Sturman has also noted that he lives to see his students be creative with their projects and succeed. The team members are stakeholders for this project because we are invested in the success of the project, as we want to bring our vision to life, to distribute our software to educate the community, and also it determines our grade in the class, which we have a vested interest in.
                        </p>
                        <h2>Risks</h2>
                        <p>
                            Currently, there are a few risks to the project. One risk to the project is that a Twitter account is required to access the Twitter APIs and Twitter Developer Pages but we do not have a team Twitter account yet. This is a risk that can be mitigated easily by applying for access, but if left alone can prevent the project from using any APIs from Twitter. This would prevent us from accessing important Twitter data, which is an essential part of the project . Another risk to the project is that our team has not worked with the Twitter APIs before. Research and experimentation is required to minimize this risk. If this does not get mitigated, it would prevent the project from effectively using data from Twitter, which could lead to the eventual breakdown of the project. An additional risk is the chosen stock API named Alpha Vantage Data. This specific API retrieves the data that we need, but they have a cap of five hundred requests to the API per day. This could be mitigated for this specific class by creating an account for each developer on the project and utilize these accounts throughout the testing phases in order to stay underneath the data cap. But, if this project would be deployed in the real world, the team would need to pay for a full-fledged API that could handle more requests per day. 
                        </p>

                </header>
            </div>
          );
    }
}
export default About;
      
