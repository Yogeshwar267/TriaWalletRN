// IconAnimation.js
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {View, Animated, StyleSheet, Easing} from 'react-native';
import {_scaleText, isIpad} from '../../shared/services/utility';
import {ICONS} from '../../shared/constants/icons';
import {Platform} from 'react-native';

const IconAnimation = () => {
    const logos = [
      {icon: ICONS.TWITTER},
      {icon: ICONS.LINKEDIN},
      {icon: ICONS.GMAIL},
      {icon: ICONS.REDDIT},
      {icon: ICONS.INSTAGRAM},
    ];
  
    const animatedValues = useMemo(() => {
      return logos.map(() => new Animated.Value(0));
    }, []);
  
    useEffect(() => {
      const flyingAnimations = animatedValues.map((animatedValue, index) => {
        const randomDuration = Math.random() * 2000 + 1000;
  
        return Animated.loop(
          Animated.sequence([
            Animated.timing(animatedValue, {
              toValue: 1,
              duration: randomDuration,
              useNativeDriver: true,
              easing: Easing.linear, // Use linear easing for smoother motion
            }),
            Animated.timing(animatedValue, {
              toValue: 0,
              duration: randomDuration,
              useNativeDriver: true,
              easing: Easing.linear,
            }),
          ]),
        );
      });
  
      flyingAnimations.forEach(animation => animation.start());
  
      return () => {
        flyingAnimations.forEach(animation => animation.stop());
      };
    }, [animatedValues]);
  
    return (
      <View style={styles.container}>
        {logos.map((item, index) => {
          return (
            <Animated.View
              key={index}
              style={[
                index % 2
                  ? { top: _scaleText(25).fontSize }
                  : { bottom: _scaleText(25).fontSize },
                {
                  transform: [
                    {
                      translateY: animatedValues[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: index % 2 ? [10, -10] : [-10, 10],
                      }),
                    },
                    {
                      translateX: animatedValues[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: index % 2 ? [0, 1] : [-1, 0], // Adjust the range for horizontal motion
                      }),
                    },
                  ],
                },
              ]}>
              {item.icon(
                _scaleText(isIpad() ? 60 : Platform.OS == 'android' ? 55 : 50).fontSize,
              )}
            </Animated.View>
          );
        })}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: _scaleText(15).fontSize,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: 'blue', // Set your icon styles here
    marginHorizontal: 10,
  },
  centerIcon: {
    // top: '50%',
  },
});

export default IconAnimation;
