import { isTablet } from 'react-native-device-info';
import { scaleText } from "react-native-text";


export const _scaleText = (fontSize) => {
    if (isTablet()) {
      return {
        fontSize: height / (812 / fontSize),
        lineHeight: (height / (812 / fontSize)) * 1.3,
      };
    } else {
      return scaleText({ fontSize });
    }
  };
