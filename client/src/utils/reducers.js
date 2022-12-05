// import createId from './createId';
import { LOGIN_USER, LOGOUT_USER } from './actions';

export const initialState = { user: 'No User Logged In' };

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER: {

      const newUser = { ...action.payload };
      console.log(newUser);

      return { user: newUser.data };
    }
    case LOGOUT_USER: {
      return { user: 'User Logged Out' };
    }
    default: {
      return state;
    }
  }
};
