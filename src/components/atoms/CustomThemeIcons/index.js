//import liraries
import React from 'react';
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgXml,
} from 'react-native-svg';

// create a component
const ThemeButtonSvg = ({
  isSelected = false,
  mainColor = '',
  secondaryColor = '',
  strokeColor = '',
  darkTheme = false,
}) => {

    const iconColor = darkTheme ? "#FFFF" : "#808080"
    const bgColor = isSelected ? "#5E52E9" : "#303030"

  const SunIcon = () => {
    return (
         <G id="vuesax/linear/sun" stroke={iconColor} transform="translate(54,54)" >
          <G id="sun">
            <Path
              id="Vector"
              d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              id="Vector_2"
              d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
          </G>
    );
  };

  return (
    <Svg
      width={134}
      height={134}
      viewBox="0 0 134 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
        
      <Defs>
        <SvgXml
          xml={`<filter id="filter0_f_455_15051" x="0.5" y="0.5" width="133" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="25.25" result="effect1_foregroundBlur_455_15051"/>
            </filter>`}
        />
        <LinearGradient
          id="paint0_linear_455_15051"
          x1="67"
          y1="46.5"
          x2="67"
          y2="88.5"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={mainColor} stopOpacity="0.6" />
          <Stop offset="1" stopColor={mainColor} stopOpacity="0.1" />
        </LinearGradient>
      </Defs>
      <Rect
        x="51"
        y="51"
        width="32"
        height="32"
        rx="16"
        fill={bgColor}
        filter="url(#filter0_f_455_15051)"
      />
      <Rect x="41" y="41.5" width="52" height="52" rx="26" fill={bgColor} />
      {isSelected ? (
        <Rect
          x="48"
          y="48.5"
          width="38"
          height="38"
          rx="19"
          stroke={strokeColor}
          strokeOpacity="0.6"
          strokeWidth="4"
        />
      ) : null}
      {darkTheme ? (
        <Path
          d="M76.5302 70.9294C76.3702 70.6594 75.9202 70.2394 74.8002 70.4394C74.1802 70.5494 73.5502 70.5994 72.9202 70.5694C70.5902 70.4694 68.4802 69.3994 67.0102 67.7494C65.7102 66.2994 64.9102 64.4094 64.9002 62.3694C64.9002 61.2294 65.1202 60.1294 65.5702 59.0894C66.0102 58.0794 65.7002 57.5494 65.4802 57.3294C65.2502 57.0994 64.7102 56.7794 63.6502 57.2194C59.5602 58.9394 57.0302 63.0394 57.3302 67.4294C57.6302 71.5594 60.5302 75.0894 64.3702 76.4194C65.2902 76.7394 66.2602 76.9294 67.2602 76.9694C67.4202 76.9794 67.5802 76.9894 67.7402 76.9894C71.0902 76.9894 74.2302 75.4094 76.2102 72.7194C76.8802 71.7894 76.7002 71.1994 76.5302 70.9294Z"
          fill={iconColor}
        />
      ) : (
        <SunIcon />
      )}
    </Svg>
  );
};

export default ThemeButtonSvg;
