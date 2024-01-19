import { ICONS } from "../../shared/constants/icons";
import { _scaleText } from '../../shared/services/utility';

const leftMultiplying = 85;
export const profileConfigurations = [
  {
    image: ICONS.CHARACTER_1(_scaleText(70).fontSize),
    imgColor: 'cyan',
    nameColor: '#FF7A67',
    top: _scaleText(0).fontSize,
    left: _scaleText(0).fontSize,
    rotation: _scaleText(-15).fontSize,
  },
  {
    image: ICONS.CHARACTER_2(_scaleText(50).fontSize),
    imgColor: 'pink',
    nameColor: '#DAAA6B',
    top: _scaleText(leftMultiplying * 2.0).fontSize,
    left: _scaleText(leftMultiplying * 0.8).fontSize,
    rotation: _scaleText(-5).fontSize,
  },
  // {
  //   image: ICONS.CHARACTER_3(_scaleText(50).fontSize),
  //   imgColor: 'orange',
  //   nameColor: '#FFA1B4',
  //   top: _scaleText(leftMultiplying * 0.7).fontSize,
  //   left: _scaleText(leftMultiplying * 1.6).fontSize,
  //   rotation: _scaleText(10).fontSize,
  // },
  {
    image: ICONS.CHARACTER_4(_scaleText(65).fontSize),
    imgColor: 'yellow',
    nameColor: '#78DCFF',
    top: _scaleText(leftMultiplying * 1.8).fontSize,
    left: _scaleText(leftMultiplying * 3.2).fontSize,
    rotation: _scaleText(5).fontSize,
  },
  {
    image: ICONS.CHARACTER_5(_scaleText(60).fontSize),
    imgColor: 'white',
    nameColor: '#93EEA4',
    top: _scaleText(leftMultiplying * 0.3).fontSize,
    left: _scaleText(leftMultiplying * 2.1).fontSize,
    rotation: _scaleText(-5).fontSize,
  },
  {
    image: ICONS.CHARACTER_6(_scaleText(80).fontSize),
    imgColor: 'white',
    nameColor: '#93EEA4',
    top: _scaleText(leftMultiplying * 1.84).fontSize,
    left: _scaleText(leftMultiplying * -0.8).fontSize,
    rotation: _scaleText(-15).fontSize,
  },
  {
    image: ICONS.CHARACTER_7(_scaleText(60).fontSize),
    imgColor: 'white',
    nameColor: '#93EEA4',
    top: _scaleText(leftMultiplying * 0).fontSize,
    left: _scaleText(leftMultiplying * 3.95).fontSize,
    rotation: _scaleText(15).fontSize,
  },
];