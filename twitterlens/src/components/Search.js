import React from 'react';


function SearchBar(props) {
        return (
            <div className="search_bar">
                <form className = "search_bar_form">
                    <input type="text" className="search_input"
                        value={props.value}
                        onChange={props.onChange}/>
                    <button className="search_button" onClick={props.onClick}>Stock Search</button>
                </form>
            </div> 
          );
}
export default SearchBar;
      
