import ActionTypes from '../types';

export const setUserDetails = (payload) =>{
    return{
        type: ActionTypes.SET_USER_DETAILS,
        payload
    }
}

export const changeTheme = ({ theme, darkMode }) => ({
    type: ActionTypes.CHANGE_THEME,
    payload: { theme, darkMode },
  });
  
  export const setDefaultTheme = ({ theme, darkMode }) => ({
    type: ActionTypes.SET_DEFAULT_THEME,
    payload: { theme, darkMode },
  });
  