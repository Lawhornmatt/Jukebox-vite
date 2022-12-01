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
    }
  }
`;
