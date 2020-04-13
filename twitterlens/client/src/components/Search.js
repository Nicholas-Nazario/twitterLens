//React Imports
import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
    { value: 'IBM', text: 'IBM' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
]

// This class creates the Search Bar Object
// This component is only displayed within pages that need to access a search bar
export default class SearchBar extends React.Component {

    //Return the below HTML code and export as a SearchBar object
    //This allows a specific component (ex. Stock.js) render it within the page



    render() {
        return (
            <div className="search_bar">
                <Dropdown className="search_input"
                    placeholder='Select a Stock'
                    fluid
                    search
                    selection
                    options={countryOptions}
                    // value={props.value}
                    // onChange={this.props.onChange}
                    onClose={this.props.onChange}
                    // onSearchChange={this.props.onChange}
                />
                <button className="search_button" onClick={this.props.onClick}>Stock Search</button>
            </div>
        );
    };
    
    // return (
    //         <div className="search_bar">
    //             <form className = "search_bar_form">
    //                 {/* 
    //                     value = text (type String) that is input by the user
    //                         - This is returned as an event in your specified onChange function
    //                     onChange = specified function that will change the state of a variable in 
    //                         a component to be the value from above
    //                     onClick = specified function that will do an action after the button is clicked
    //                  */}
    //                 <input type="text" className="search_input"
    //                     value={props.value}
    //                     onChange={props.onChange}/>
    //                 <button className="search_button" onClick={props.onClick}>Stock Search</button>
    //             </form>
    //         </div> 
    // );
}