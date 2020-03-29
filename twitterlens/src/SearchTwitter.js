import React from 'react'
const qs = require('query-string');

class SearchTwitter extends React.Component {      
    render() {
      const parsed = queryString.parse(props.location.search);
      const { params } = this.props.match    
      console.log(parsed);
      return (
      <div>
        <h1>Users</h1>
        <p>{params.q}</p>
      </div>
      );
    }
  }
  
  export default SearchTwitter;

