import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_VID_QUEUE = gql`
  mutation AddVidQueue($id: ID!, $ytid: String!) {
    addVidQueue(ID: $id, ytid: $ytid)
  }
`;
/* 
  You'll want to pass in, for example:

{  
  "id": "63882d3fbe26a4bbec684386", // The id of the room document you want to change
  "ytid": "dQw4w9WgXcQ" // The id of the YouTube vid you want to add
}
*/

export const LOAD_NEXT_VID = gql`
  mutation loadNextVid($id: ID!) {
    loadNextVid(ID: $id)
  }
`;
/* 
  You'll want to pass in, for example:

{  
  "id": "63882d3fbe26a4bbec684386", // The id of the room document you want to change
}
*/