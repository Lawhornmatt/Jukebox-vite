import { gql } from '@apollo/client';

export const FIND_USER = gql`
  query Find_user($email: String!) {
    find_user(email: $email) {
      _id
      avatar
      username
      hosted_room {
        _id
        room_name
        current_vid
        vid_queue
      }
    }
  }
`;

export const FIND_ROOM = gql`
  query Find_room($findRoomId: ID!) {
    find_room(id: $findRoomId) {
      host_id {
        username
      }
      room_name
      current_vid
      vid_queue
      messages
    }
  }
`;

// Gives all data of users and the rooms 
export const ALL_DATA_BY_USERS = gql`
query AllDataByUsers {
  users {
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
`;

// Returns all extant rooms and their hosts
export const LIST_ROOMS = gql`
query ListRooms {
  rooms {
    _id
    host_id {
      _id
      username
    }
    room_name
    current_vid
    vid_queue
  }
}
`;