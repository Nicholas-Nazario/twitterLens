//React Imports
import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
    { value: 'IBM', text: 'IBM' },
    { value: 'MSFT', text: "Microsoft" },
]



// This class creates the Search Bar Object
// This component is only displayed within pages that need to access a search bar
export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    // handleSelectChange = (event, data) => {
    //     this.setState({
    //         [data.name]: data.value
    //     })
    // }

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

                    onChange={this.props.onClick}
                    onSearchChange={this.props.onChange}
                    

                    // value={this.state.value}

                    // onChange={this.props.handleSelectChange}

                    //value ={value}
                    
                    //onClose={this.props.onChange}
                    //onClose={this.props.onClick}
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