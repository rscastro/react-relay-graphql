import Relay from 'react-relay';


  const queries = {
    user: () => Relay.QL`
      query {
        user
      }
    `,
  };

  export default queries;
