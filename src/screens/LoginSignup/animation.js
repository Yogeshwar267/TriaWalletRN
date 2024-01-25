import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View, Platform } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from 'react-native-reanimated';
import { ICONS } from '../../shared/constants/icons';
import { _scaleText, isIpad } from '../../shared/services/utility';

const duration = 2500;

function Logo({ icon, translateY, rotateZ }) {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={[styles.box, animatedStyle]}>
      {icon(_scaleText(isIpad() ? 60 : 50).fontSize)}
    </Animated.View>
  );
}


function ScreenAnimation() {
  const H = Dimensions.get('window').height;

  // const containerHeight =_scaleText( isIpad() ? Dimensions.get("screen").height * 0.18 : H *  0.15).fontSize

  const defaultAnimY = useSharedValue(0);
  const moveUp = useSharedValue(_scaleText(Platform.OS == 'android' ? 0.23 : 0.3).fontSize);
  const rotation = useSharedValue('-50deg');
  const moveDown = useSharedValue(0);

  useEffect(() => {
    handlePress();
  }, []);

  function handlePress() {
    rotation.value = withRepeat(
      withTiming('20deg', { duration, easing: Easing.linear }),
      -1,
      true
    );
    defaultAnimY.value = withRepeat(
      withTiming(defaultAnimY.value + 50, { duration, easing: Easing.linear }),
      -1,
      true
    );
    moveUp.value = withRepeat(
      withTiming(moveUp.value + 30, { duration, easing: Easing.linear }),
      -1,
      true
    );

    moveDown.value = withRepeat(
      withTiming(moveDown.value - 30, { duration, easing: Easing.linear }),
      -1,
      true
    );
  }

  const logos = [
    { icon: ICONS.TWITTER, translateY: moveDown, rotateZ: rotation },
    { icon: ICONS.REDDIT, translateY: moveUp, rotateZ: rotation },
    { icon: ICONS.LINKEDIN, translateY: moveDown, rotateZ: rotation },
    { icon: ICONS.INSTAGRAM, translateY: moveUp, rotateZ: rotation },
    { icon: ICONS.GMAIL, translateY: moveDown, rotateZ: rotation },
  ];

  return (
    <View style={styles.container}>
      {logos.map((item, index) => (
        <Logo key={index} {...item} />
      ))}
    </View>
  );
}

export default ScreenAnimation;

const styles = StyleSheet.create({
  container: {
    flex:1,
    // height: '50%',
    width: '100%',
    // marginTop: _scaleText(0).fontSize,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf:"center",
    alignContent:"center",
    alignItems:"center"
  },
  box: {
    // width: 50,
    // height: 50,
  },
});
