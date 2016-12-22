// ConferenceApp.js

/* eslint-env es6 */
var React = require('react')
var Relay = require('react-relay')

// ConferenceApp is our top-level component
class ConferenceApp extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      userNum: 1
    }
  }

  render() {
    console.log('yow',this.props)

    return(
      <div className="container">
        <h2>{this.props.user.name} Conferences</h2>
        <button onClick={ this.loadMore.bind(this) }>CHANGE USER</button>
        {this.props.user.conferences.edges.map((edge, i) => {
          edge.key = i;
          return (
            <Conference edge={edge}/>
          )
        }

        )}
      </div>
    )
  }

  loadMore() {
    const count = this.props.relay.variables.userToShow;
    this.props.relay.setVariables({userToShow: count + 1});
  }
}

class Conference extends React.Component {
  render() {
    // We get the conference edges passed in from the top-level container
    // The edges have data like name and id on them
    var edge = this.props.edge;
    return (
      <div className="col-sm-4">
        <div className="panel panel-default" key={edge.node.id}>
          <div className="panel-heading">
            <h3>{edge.node.name}</h3>
          </div>
          <div className="panel-body">
            {edge.node.description}
          </div>
        </div>
      </div>
    )
  }
}

exports.Container = Relay.createContainer(ConferenceApp, {
  // We initially want to get the first user's conferences
  initialVariables: {
    userToShow: 1
  },
  fragments: {
    // Results from this query will be placed on this.props for access in
    // our component
    user: () => Relay.QL`
      fragment on User {
        name(userToShow: $userToShow),
        conferences(userToShow: $userToShow) {
          edges {
            node {
              id,
              name,
              description
            },
          },
        },
      }
    `
  },
});
