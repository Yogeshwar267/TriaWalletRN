import React, {useEffect, useMemo, useState} from 'react';
import {View, Text, Animated} from 'react-native';
import {_scaleText} from '../../shared/services/utility';
import color from 'tinycolor2';
import styles from './styles';
import {profileConfigurations} from './constants';
import DropShadow from 'react-native-drop-shadow';

const Profile = () => {
  const [opacity, setOpacity] = useState(1);
  const [increment, setIncrement] = useState(-0.01);

  const animatedValues = useMemo(() => {
    return profileConfigurations.map(() => new Animated.Value(0));
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(prevOpacity => {
        const newOpacity = prevOpacity + increment;
        if (newOpacity <= 0.2 || newOpacity >= 1.3) {
          setIncrement(prevIncrement => -prevIncrement);
        }

        return Math.max(0, Math.min(1, newOpacity));
      });
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [increment]);

  useEffect(() => {
    const flyingAnimations = animatedValues.map((animatedValue) => {
      const randomDuration = Math.random() * 2000 + 2000; // Random duration between 1000 and 3000 milliseconds

      return Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: randomDuration,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: randomDuration,
            useNativeDriver: true,
          }),
        ]),
      );
    });

    flyingAnimations.forEach((animation) => animation.start());

    return () => {
      flyingAnimations.forEach((animation) => animation.stop());
    };
  }, [animatedValues]);



  return (
    <View style={styles.ImageContainer}>
      {profileConfigurations.map((item, index) => (
        <Animated.View
          style={{
            top: item.top,
            left: item.left,
            position: 'absolute',
            transform: [
              {
                translateX: animatedValues[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 20],
                }),
              },
            ],

          }}
          key={index}>
          <View
            style={[
              styles.containerProfile,
              {transform: [{rotate: `${item.rotation}deg`}]},
            ]}>
            <DropShadow
              style={{
                shadowOpacity: opacity,
                shadowColor: item.imgColor,
                backgroundColor: 'transparent',
                shadowRadius: 30,
                borderRadius: 30,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
        
              }}>
              <View
                style={{
                  borderRadius: 100,
                  backgroundColor: item.imgColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {item?.image}
              </View>
            </DropShadow>
            <View
              style={{
                borderRadius: _scaleText(8).fontSize,
                backgroundColor: color(item.imgColor).darken(20).toString(),
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: _scaleText(10).fontSize,
                paddingVertical: _scaleText(5).fontSize,
                marginTop: _scaleText(4).fontSize,
              }}>
              <Text style={styles.userName}>cathy@ter</Text>
            </View>
          </View>
        </Animated.View>
      ))}
    </View>
  );
};

export default Profile;
