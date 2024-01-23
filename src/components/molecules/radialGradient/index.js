//import liraries
import React from 'react';
import { Dimensions} from 'react-native';

import {
  Defs,
  Stop,
  Svg,
  RadialGradient as SVGRadialGradient,
  Path,
} from 'react-native-svg';

export function RadialGradient({ color = "#7F43FF" }) {
  const H = Dimensions.get('window').height;
  const W = Dimensions.get('window').width;

  const gradientTransform = `translate(${W/2.5} -${H/12}) scale(${W} ${H})`;

  return (
    <Svg height={H} width={W} style={{ flex: 1, opacity: 0.4, position: "absolute" }}>
      <Defs>
        <SVGRadialGradient
          id="grad"
          cx="0.5"
          cy="0.5"
          r="0.5"
          gradientUnits="userSpaceOnUse"
          gradientTransform={gradientTransform}
        >
          <Stop stopColor={color} />
          <Stop stopColor={'black'} offset={1} />
        </SVGRadialGradient>
      </Defs>
      <Path
        fill="url(#grad)"
        d={`M0,0 L${W},0 L${W},${H} L0,${H}Z`}
      />
    </Svg>
  );
}


export default RadialGradient;

