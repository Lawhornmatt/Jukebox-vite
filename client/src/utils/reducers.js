// import createId from './createId';
import { LOGIN_USER, LOGOUT_USER } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER: {

      const newUser = { ...action.payload };

      return { users: [newUser] };
    }
    case LOGOUT_USER: {
      return { users: [] };
    }
    default: {
      return state;
    }
  }
};
