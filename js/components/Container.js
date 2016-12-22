import React, { Component } from 'react';
import Relay from 'react-relay';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <h2>Martian React-Relay-GraphQL Boilerplate</h2>
        <p className="App-intro">Playground/boilerplate for using GraphQL and Relay</p>
        { this.props.children }
      </div>
    );
  }
}

exports.Container = Relay.createContainer(Container, {
  // We initially want to get the first user's conferences
  initialVariables: {
    userToShow: 1
  },
  fragments: {
    // Results from this query will be placed on this.props for access in
    // our component
    user: () => Relay.QL`
      fragment on User {
        name,
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
