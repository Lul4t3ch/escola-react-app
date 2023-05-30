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
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    case types.REGISTER_REQUEST: {
      const newState = { ...initialState };
      newState.isLoading = true;
      return newState;
    }
    case types.REGISTER_FAILURE: {
      const newState = { ...initialState };
      newState.isLoading = false;
      return newState;
    }
    case types.REGISTER_SUCCESS: {
      const newState = { ...initialState };
      newState.name = action.payload.name;
      newState.isLoading = false;
      return newState;
    }
    default: {
      return state;
    }
  }
};
