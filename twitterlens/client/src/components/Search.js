//React Imports
import React from 'react';
import { Dropdown } from 'semantic-ui-react'


let data = require('./Nasdaq.json');

// This class creates the Search Bar Object
// This component is only displayed within pages that need to access a search bar
export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}
        data = this.addTickers(data);
    }

    // Function to add search by ticker by swapping value <=> text and appending
    addTickers(data) {
        let companyOptions = data;
        // Loop over all stocks in data
        data.forEach(element => {
            let newElement = {};
            newElement.value = element.value.toLowerCase(); // To avoid duplicate keys
            newElement.text = element.value;
            companyOptions.push(newElement);
        });
        return companyOptions;
    }

    //Return the below HTML code and export as a SearchBar object
    //This allows a specific component (ex. Stock.js) render it within the page
    render() {
        return (
            <div className="search-bar">
                <Dropdown className="search-input"
                    placeholder='Select a Company'
                    search
                    selection
                    options={data}
                    onChange={this.props.onClick}
                    onSearchChange={this.props.onChange}
                />
            </div>
        );
    };
}
