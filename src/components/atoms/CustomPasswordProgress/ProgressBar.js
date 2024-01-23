import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {_scaleText} from '../../../shared/services/utility';

const PasswordProgressBar = ({progress, width, barColor}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(`${progress * 100}%`, {
        duration: 500, 
        easing: Easing.linear
      }),
    };
  });
  return (
    <View style={[styles.progressBarContainer, {width}]}>
      <View style={styles.progressBarBackground} />
      <Animated.View style={[styles.progressBar, {backgroundColor: barColor},animatedStyle]} />
    </View>
  );
};
const styles = StyleSheet.create({
  progressBarContainer: {
    flex: 1,
    height: _scaleText(Platform.OS == 'android' ? 9 : 7).fontSize,
    borderRadius: _scaleText(Platform.OS == 'android' ? 9 : 7).fontSize,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    marginVertical: _scaleText(5).fontSize,
    marginHorizontal: _scaleText(Platform.OS == 'android' ? 5 : 3).fontSize,
  },
  progressBarBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'lightgray', // Color behind the progress
  },
  progressBar: {
    ...StyleSheet.absoluteFillObject,
    // Color of the progress
  },
});

export default PasswordProgressBar;
