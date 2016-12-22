// ConferenceApp.js

/* eslint-env es6 */
var React = require('react')
var Relay = require('react-relay')

// ConferenceApp is our top-level component
class Error extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      userNum: 1
    }
  }

  render() {
    return(
      <div className="container">
        <h2>404, son</h2>
      </div>
    )
  }

}

export default Error;
