//import liraries
import React from 'react';
import {View, Text, Dimensions} from 'react-native';

// create a component
import {
  Defs,
  Stop,
  Svg,
  RadialGradient as SVGRadialGradient,
  Path,
} from 'react-native-svg';

export function RadialGradient({color="#7F43FF"}) {
  const H = Dimensions.get('window').height;
  const W = Dimensions.get('window').width;
  return (
    <Svg height={H} width={W} style={{ flex: 1,opacity:0.5 ,position:"absolute"}}>
    <Path
      fill="url(#grad)"
    />
   <Defs>
        <SVGRadialGradient
          id="grad"
          cx="0.9"
          cy="0.9"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(187.5 50.5) rotate(360) scale(180 350.061)"
        >
          <Stop stopColor={color}/>
          <Stop stopColor={'black'} offset={1} />
        </SVGRadialGradient>
      </Defs>
  </Svg>
  );
}

export default RadialGradient;

