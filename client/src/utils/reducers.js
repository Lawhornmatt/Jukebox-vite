import { LOGIN_USER, LOGOUT_USER } from './actions';

// export const initialState = { user: 'No User Logged In' };
export const initialState = { user: null };

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER: {

      const newUser = { ...action.payload };

      return { user: newUser.data };
    }
    case LOGOUT_USER: {
      // return { user: 'User Logged Out' };
      return { user: null };
    }
    default: {
      return state;
    }
  }
};

// Credit:
// A lot of ideas and help for implementing useContext came from here:
// https://youtu.be/5LrDIWkK_Bc
// And a lot of code structure and help for reducers/store came from this stackover answer from Nik:
// https://stackoverflow.com/questions/57888975/how-to-update-react-context-provider-state-on-button-click
