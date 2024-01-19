import ActionTypes from '../types';

const initialState = { theme: 'default', darkMode: null };

const themeReducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload.theme !== undefined ? action.payload.theme : state.theme,
        darkMode: action.payload.darkMode !== undefined ? action.payload.darkMode : state.darkMode,
      };

    case ActionTypes.SET_DEFAULT_THEME:
      if (!state.theme) {
        return {
          ...state,
          theme: action.payload.theme !== undefined ? action.payload.theme : state.theme,
          darkMode: action.payload.darkMode !== undefined ? action.payload.darkMode : state.darkMode,
        };
      }

    default:
      return state;
  }
};

export default themeReducer;