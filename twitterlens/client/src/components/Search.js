//React Imports
import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const companyOptions = require('./Nasdaq.json');



// This class creates the Search Bar Object
// This component is only displayed within pages that need to access a search bar
export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    //Return the below HTML code and export as a SearchBar object
    //This allows a specific component (ex. Stock.js) render it within the page
    render() {
        return (
            <div className="search_bar">
                <Dropdown className="search_input"
                    placeholder='Select a Company'
                    search
                    selection
                    options={companyOptions}

                    onChange={this.props.onClick}
                    onSearchChange={this.props.onChange}
                />
            </div>
        );
    };
}