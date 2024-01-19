import ActionTypes from '../types';

const initialState = {
  userDetails: {},
};

const CommonReducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default CommonReducer;
