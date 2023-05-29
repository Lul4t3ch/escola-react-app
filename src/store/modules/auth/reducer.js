import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('Reducer: ', action.payload);
      return state;
    }
    default: {
      return state;
    }
  }
};
