import React from 'react';
import {View} from 'react-native';
import { isTablet } from 'react-native-device-info';
import Svg, {Circle, Ellipse, G } from 'react-native-svg';

const ProfileDots = ({color}) => {
  return (
    <View style={{position: 'absolute'}}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={isTablet() ? "600" : "337"}
        height={isTablet() ? "600" : "337"}
        viewBox="0 0 337 337"
        fill="none">
          <G opacity={0.05}>
        <Ellipse
          cx="44.16"
          cy="168.357"
          rx="5.58782"
          ry="5.58782"
          transform="rotate(-90 44.16 168.357)"
          fill={color || '#FECAD6'}
        />
        <Circle
          cx="5.58782"
          cy="5.58782"
          r="5.58782"
          transform="matrix(0.707115 -0.707099 0.707115 0.707099 72.6328 80.541)"
          fill={color || '#FECAD6'}
        />
        <Ellipse
          cx="168.323"
          cy="44.1718"
          rx="5.58782"
          ry="5.58782"
          fill={color || '#FECAD6'}
        />
        <Circle
          cx="5.58782"
          cy="5.58782"
          r="5.58782"
          transform="matrix(0.707114 0.707099 -0.707114 0.707099 256.14 72.6719)"
          fill={color || '#FECAD6'}
        />
        <Ellipse
          cx="292.508"
          cy="168.344"
          rx="5.58782"
          ry="5.58782"
          transform="rotate(90 292.508 168.344)"
          fill={color || '#FECAD6'}
        />
        <Circle
          cx="5.58782"
          cy="5.58782"
          r="5.58782"
          transform="matrix(-0.707114 0.707099 -0.707114 -0.707099 264.047 256.15)"
          fill={color || '#FECAD6'}
        />
        <Ellipse
          cx="168.329"
          cy="292.514"
          rx="5.58782"
          ry="5.58782"
          transform="rotate(180 168.329 292.514)"
          fill={color || '#FECAD6'}
        />
        <Circle
          cx="5.58782"
          cy="5.58782"
          r="5.58782"
          transform="matrix(-0.707115 -0.707099 0.707115 -0.707099 80.5292 264.045)"
          fill={color || '#FECAD6'}
        />
        <Ellipse
          cx="5.58782"
          cy="5.58782"
          rx="5.58782"
          ry="5.58782"
          transform="matrix(0.367059 -0.930198 0.930197 0.367062 45.5808 125.898)"
          fill={color || '#FECAD6'}
        />
        <Ellipse
          cx="5.58782"
          cy="5.58782"
          rx="5.58782"
          ry="5.58782"
          transform="matrix(0.917303 -0.39819 0.398206 0.917296 111.537 51.5414)"
          fill={color || '#FECAD6'}
        />
        <Ellipse
          cx="5.58782"
          cy="5.58782"
          rx="5.58782"
          ry="5.58782"
          transform="matrix(0.9302 0.367052 -0.367068 0.930194 210.763 45.5781)"
          fill={color || '#FECAD6'}
        />
        <Ellipse
          cx="5.58782"
          cy="5.58782"
          rx="5.58782"
          ry="5.58782"
          transform="matrix(0.398197 0.9173 -0.917299 0.398199 285.138 111.553)"
          fill={color || '#FECAD6'}
        />
        <Ellipse
          cx="5.58782"
          cy="5.58782"
          rx="5.58782"
          ry="5.58782"
          transform="matrix(-0.367058 0.930198 -0.930196 -0.367063 291.087 210.772)"
          fill={color || '#FECAD6'}
        />
        <Ellipse
          cx="5.58782"
          cy="5.58782"
          rx="5.58782"
          ry="5.58782"
          transform="matrix(-0.917303 0.39819 -0.398206 -0.917296 225.127 285.129)"
          fill={color || '#FECAD6'}
        />
        <Ellipse
          cx="5.58782"
          cy="5.58782"
          rx="5.58782"
          ry="5.58782"
          transform="matrix(-0.9302 -0.367053 0.367068 -0.930194 125.9 291.088)"
          fill={color || '#FECAD6'}
        />
        <Ellipse
          cx="5.58782"
          cy="5.58782"
          rx="5.58782"
          ry="5.58782"
          transform="matrix(-0.398197 -0.9173 0.917299 -0.398199 51.5286 225.127)"
          fill={color || '#FECAD6'}
        />
        </G>
        {/* <G opacity="0.03">
          <Ellipse
            cx="44.1601"
            cy="168.357"
            rx="5.58782"
            ry="5.58782"
            transform="rotate(-90 44.1601 168.357)"
            fill={color || '#FECAD6'}
          />
          <Circle
            cx="5.58782"
            cy="5.58782"
            r="5.58782"
            transform="matrix(0.707115 -0.707099 0.707115 0.707099 72.6328 80.541)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="168.323"
            cy="44.1718"
            rx="5.58782"
            ry="5.58782"
            fill={color || '#FECAD6'}
          />
          <Circle
            cx="5.58782"
            cy="5.58782"
            r="5.58782"
            transform="matrix(0.707114 0.707099 -0.707114 0.707099 256.14 72.6719)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="292.508"
            cy="168.344"
            rx="5.58782"
            ry="5.58782"
            transform="rotate(90 292.508 168.344)"
            fill={color || '#FECAD6'}
          />
          <Circle
            cx="5.58782"
            cy="5.58782"
            r="5.58782"
            transform="matrix(-0.707114 0.707099 -0.707114 -0.707099 264.047 256.15)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="168.329"
            cy="292.514"
            rx="5.58782"
            ry="5.58782"
            transform="rotate(180 168.329 292.514)"
            fill={color || '#FECAD6'}
          />
          <Circle
            cx="5.58782"
            cy="5.58782"
            r="5.58782"
            transform="matrix(-0.707115 -0.707099 0.707115 -0.707099 80.5293 264.045)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="5.58782"
            cy="5.58782"
            rx="5.58782"
            ry="5.58782"
            transform="matrix(0.367059 -0.930198 0.930197 0.367062 45.5809 125.898)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="5.58782"
            cy="5.58782"
            rx="5.58782"
            ry="5.58782"
            transform="matrix(0.917303 -0.39819 0.398206 0.917296 111.537 51.5414)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="5.58782"
            cy="5.58782"
            rx="5.58782"
            ry="5.58782"
            transform="matrix(0.9302 0.367052 -0.367068 0.930194 210.764 45.5781)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="5.58782"
            cy="5.58782"
            rx="5.58782"
            ry="5.58782"
            transform="matrix(0.398197 0.9173 -0.917299 0.398199 285.138 111.553)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="5.58782"
            cy="5.58782"
            rx="5.58782"
            ry="5.58782"
            transform="matrix(-0.367058 0.930198 -0.930196 -0.367063 291.087 210.772)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="5.58782"
            cy="5.58782"
            rx="5.58782"
            ry="5.58782"
            transform="matrix(-0.917303 0.39819 -0.398206 -0.917296 225.127 285.129)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="5.58782"
            cy="5.58782"
            rx="5.58782"
            ry="5.58782"
            transform="matrix(-0.9302 -0.367053 0.367068 -0.930194 125.9 291.088)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="5.58782"
            cy="5.58782"
            rx="5.58782"
            ry="5.58782"
            transform="matrix(-0.398197 -0.9173 0.917299 -0.398199 51.5287 225.127)"
            fill={color || '#FECAD6'}
          />
        </G> */}
        <G opacity="0.6">
          <Ellipse
            cx="74.9062"
            cy="168.512"
            rx="4.20758"
            ry="4.20758"
            transform="rotate(-90 74.9062 168.512)"
            fill={color || '#FECAD6'}
          />
          <Circle
            cx="4.20758"
            cy="4.20758"
            r="4.20758"
            transform="matrix(0.70711 -0.707104 0.70711 0.707104 96.3431 102.409)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="168.404"
            cy="74.9998"
            rx="4.20758"
            ry="4.20758"
            fill={color || '#FECAD6'}
          />
          <Circle
            cx="4.20758"
            cy="4.20758"
            r="4.20758"
            transform="matrix(0.70711 0.707104 -0.70711 0.707104 234.517 96.429)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="261.905"
            cy="168.51"
            rx="4.20758"
            ry="4.20758"
            transform="rotate(90 261.905 168.51)"
            fill={color || '#FECAD6'}
          />
          <Circle
            cx="4.20758"
            cy="4.20758"
            r="4.20758"
            transform="matrix(-0.70711 0.707104 -0.70711 -0.707104 240.468 234.611)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="168.413"
            cy="261.997"
            rx="4.20758"
            ry="4.20758"
            transform="rotate(-180 168.413 261.997)"
            fill={color || '#FECAD6'}
          />
          <Circle
            cx="4.20758"
            cy="4.20758"
            r="4.20758"
            transform="matrix(-0.70711 -0.707103 0.70711 -0.707103 102.276 240.548)"
            fill={color || '#FECAD6'}
          />
        </G>
        <G opacity="0.6">
          <Ellipse
            cx="82.3339"
            cy="131.978"
            rx="4.20758"
            ry="4.20758"
            transform="rotate(-66.9994 82.3339 131.978)"
            fill={color || '#FECAD6'}
          />
          <Circle
            cx="4.20758"
            cy="4.20758"
            r="4.20758"
            transform="matrix(0.92719 -0.374593 0.3746 0.927186 127.896 79.507)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="204.938"
            cy="82.4336"
            rx="4.20758"
            ry="4.20758"
            transform="rotate(23.0006 204.938 82.4336)"
            fill={color || '#FECAD6'}
          />
          <Circle
            cx="4.20758"
            cy="4.20758"
            r="4.20758"
            transform="matrix(0.3746 0.927186 -0.92719 0.374593 257.422 127.992)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="254.468"
            cy="205.044"
            rx="4.20758"
            ry="4.20758"
            transform="rotate(113.001 254.468 205.044)"
            fill={color || '#FECAD6'}
          />
          <Circle
            cx="4.20758"
            cy="4.20758"
            r="4.20758"
            transform="matrix(-0.92719 0.374593 -0.3746 -0.927186 208.906 257.514)"
            fill={color || '#FECAD6'}
          />
          <Ellipse
            cx="131.879"
            cy="254.568"
            rx="4.20758"
            ry="4.20758"
            transform="rotate(-156.999 131.879 254.568)"
            fill={color || '#FECAD6'}
          />
          <Circle
            cx="4.20758"
            cy="4.20758"
            r="4.20758"
            transform="matrix(-0.374601 -0.927186 0.92719 -0.374592 79.3802 208.982)"
            fill={color || '#FECAD6'}
          />
        </G>
        <Circle cx="168.4" cy="168.33" r="80" fill={color || '#FECAD6'} />
      </Svg>
    </View>
  );
};

export default ProfileDots;
