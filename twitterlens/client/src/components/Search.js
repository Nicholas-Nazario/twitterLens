//React Imports
import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import _ from 'lodash'
import { Button } from 'semantic-ui-react'

const getOptions = (number, prefix = 'Choice ') => _.times(number, (index) => ({
    key: index,
    text: `${prefix}${index}`,
    value: index,
}))

const DropdownExampleScrolling = () => (
    <Dropdown placeholder='Select choice' scrolling options={getOptions(15)} />
)

// This class creates the Search Bar Object
// This component is only displayed within pages that need to access a search bar
function SearchBar(props) {
        //Return the below HTML code and export as a SearchBar object
        //This allows a specific component (ex. Stock.js) render it within the page
    

    
    
    return (
            <div className="search_bar">
                <form className = "search_bar_form">
                    {/* 
                        value = text (type String) that is input by the user
                            - This is returned as an event in your specified onChange function
                        onChange = specified function that will change the state of a variable in 
                            a component to be the value from above
                        onClick = specified function that will do an action after the button is clicked
                     */}
                    <input type="text" className="search_input"
                        value={props.value}
                        onChange={props.onChange}/>
                    <button className="search_button" onClick={props.onClick}>Stock Search</button>
                </form>
            </div> 
    );
}
//export default DropdownExampleScrolling;
export default SearchBar;