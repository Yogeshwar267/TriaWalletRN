import {Dimensions, Platform} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {scaleText} from 'react-native-text';

export const _scaleText = fontSize => {

let dim = Dimensions.get("screen");
let height = dim.height > dim.width ? dim.height : dim.width;

  if (isTablet()) {
    return {
      fontSize: height / (812 / fontSize) * 0.8,
      lineHeight: (height / (812 / fontSize)) * 1.3,
    };
  } else {
    return Platform.OS === 'android'
      ? scaleText({
          fontSize: fontSize - 3,
        })
      : scaleText({fontSize});
  }
};

export function getPasswordStrength(password) {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Base strength is determined by length
  let strength = 0;

  // Bonus strength for additional criteria
  strength += hasUpperCase ? 0.2 : 0;
  strength += hasLowerCase ? 0.2 : 0;
  strength += hasNumber ? 0.2 : 0;
  strength += hasSpecialChar ? 0.2 : 0;

  const weakThreshold = 0.4;
  const betterThreshold = 0.7;

  if (strength < weakThreshold) {
    return 0;
  } else if (strength < betterThreshold ) {
    return 1;
  } else {
    return password.length >= minLength ? 2 : 1;
  }
}

export const isIpad = () => {
  return isTablet() &&  Platform.OS == 'ios'
}