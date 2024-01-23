import {isTablet} from 'react-native-device-info';
import {ICONS} from '../../shared/constants/icons';
import {_scaleText, isIpad} from '../../shared/services/utility';

const leftMultiplying = isTablet() ? (isIpad() ? 85 * 1.5 : 85 * 1.6) : 85;
export const profileConfigurations = [
  {
    image: ICONS.CHARACTER_1(_scaleText(isTablet() ? 50 * 1.5 : 50).fontSize),
    imgColor: 'cyan',
    nameColor: '#FF7A67',
    top: _scaleText(-1.9).fontSize,
    left: _scaleText(-leftMultiplying * 0.5).fontSize,
    rotation: _scaleText(-15).fontSize,
  },
  {
    image: ICONS.CHARACTER_2(_scaleText(isTablet() ? 40 * 1.5 : 40).fontSize),
    imgColor: 'pink',
    nameColor: '#DAAA6B',
    top: _scaleText(leftMultiplying * 2.1).fontSize,
    left: _scaleText(leftMultiplying * 0.8).fontSize,
    rotation: _scaleText(5).fontSize,
  },
  {
    image: ICONS.CHARACTER_3(_scaleText(isTablet() ? 75 * 1.5 : 75).fontSize),
    imgColor: 'orange',
    nameColor: '#FFA1B4',
    top: _scaleText(leftMultiplying * 0.5).fontSize,
    left: _scaleText(leftMultiplying * 0.8).fontSize,
    rotation: _scaleText(10).fontSize,
  },
  {
    image: ICONS.CHARACTER_4(_scaleText(isTablet() ? 65 * 1.5 : 65).fontSize),
    imgColor: 'yellow',
    nameColor: '#78DCFF',
    top: _scaleText(leftMultiplying * 1.8).fontSize,
    left: _scaleText(leftMultiplying * 3.85).fontSize,
    rotation: _scaleText(5).fontSize,
  },
  {
    image: ICONS.CHARACTER_5(_scaleText(isTablet() ? 60 * 1.5 : 60).fontSize),
    imgColor: 'white',
    nameColor: '#93EEA4',
    top: _scaleText(leftMultiplying * 1.5).fontSize,
    left: _scaleText(leftMultiplying * 2.1).fontSize,
    rotation: _scaleText(-5).fontSize,
  },
  {
    image: ICONS.CHARACTER_6(_scaleText(isTablet() ? 80 * 1.5 : 80).fontSize),
    imgColor: 'white',
    nameColor: '#93EEA4',
    top: _scaleText(leftMultiplying * 1.84).fontSize,
    left: _scaleText(leftMultiplying * -0.9).fontSize,
    rotation: _scaleText(-15).fontSize,
  },
  {
    image: ICONS.CHARACTER_7(_scaleText(isTablet() ? 60 * 1.5 : 60).fontSize),
    imgColor: '#FFE5E5',
    nameColor: '#93EEA4',
    top: _scaleText(leftMultiplying * 0).fontSize,
    left: _scaleText(leftMultiplying * 2.95).fontSize,
    rotation: _scaleText(-10).fontSize,
  },
  ...(isIpad()
    ? [
        {
          image: ICONS.CHARACTER_6(
            _scaleText(isTablet() ? 60 * 1.5 : 60).fontSize,
          ),
          imgColor: '#99BC85',
          nameColor: '#93EEA4',
          top: _scaleText(leftMultiplying * 0.3).fontSize,
          left: _scaleText(leftMultiplying * 5.1).fontSize,
          rotation: _scaleText(-5).fontSize,
        },
        {
          image: ICONS.CHARACTER_2(
            _scaleText(isTablet() ? 80 * 1.5 : 80).fontSize,
          ),
          imgColor: '#AC87C5',
          nameColor: '#AC87C5',
          top: _scaleText(leftMultiplying * 1.80).fontSize,
          left: _scaleText(leftMultiplying * 5.6).fontSize,
          rotation: _scaleText(-15).fontSize,
        },
      ]
    : []),
];
