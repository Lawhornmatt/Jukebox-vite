import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        avatar
        email
        password
        darkmode
        email_vis
        hosted_room {
          _id
          room_name
          current_vid
          vid_queue
        }
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
/*  You'll want to pass in, for example:

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
/*  You'll want to pass in, for example:

{  
  "id": "63882d3fbe26a4bbec684386", // The id of the room document you want to change
}
*/

export const CREATE_ROOM = gql`
  mutation createRoom($hostId: ID!, $roomName: String!) {
    createRoom(host_id: $hostId, room_name: $roomName) {
      room_name
    }
  }
`;
/*  You'll want to pass in, for example:

{  
  "hostId": "63882622cbd1ebaa7be485c4",  // The id of the user making the room. This will be provided by the UserContext
  "roomName": "Joe's room" // A name of the room typed in by the user
}
*/