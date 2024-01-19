import {Animated, Pressable, Text, View, Platform} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {STRINGS} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText} from '../../shared/services/utility';
import styles from './styles';
import RadialGradient from '../../components/molecules/radialGradient';
import {ICONS} from '../../shared/constants/icons';
import ScreenAnimation from './animation';
import {useNavigation} from '@react-navigation/native';
import {NAVIGATION_SCREENS} from '../../navigators/constants';

const renderButtonComponent = (data, animatedButtonStyle) => {
  return data.map((button, index) => {
    return (
      <Animated.View style={animatedButtonStyle} key={button.id}>
        <Pressable
          key={button.id}
          onPress={() => {}}
          style={({pressed}) => [
            styles.secondaryButton,
            {
              opacity: pressed ? 0.8 : 1,
            },
          ]}>
          <View
            style={{
              position: 'absolute',
              left: _scaleText(button.title == STRINGS.OTHERS ? 10 : 18)
                .fontSize,
            }}>
            {button.icon}
          </View>
          <Text
            style={[TEXT_STYLES.FI2, styles.secondaryText, styles.whiteText]}>
            {`${STRINGS.CONTINUE_WITH} ${button.title}`}
          </Text>
        </Pressable>
      </Animated.View>
    );
  });
};

const LoginSignup = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(buttonAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, buttonAnim]);

  const animatedButtonStyle = {
    opacity: buttonAnim,
    transform: [
      {
        translateY: buttonAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
  };

  const renderButtons = [
    {
      id: 'G1',
      title: STRINGS.GOOGLE,
      icon: ICONS.GOOGLE(_scaleText(20).fontSize),
    },
    {
      id: 'G2',
      title: STRINGS.APPLE,
      icon: ICONS.APPLE(_scaleText(20).fontSize),
    },
    {
      id: 'G3',
      title: STRINGS.EMAIL_PHONE,
      icon: ICONS.EMAIL(_scaleText(20).fontSize),
    },
    {
      id: 'G4',
      title: STRINGS.OTHERS,
      icon: ICONS.OTHER_LOGIN(_scaleText(35).fontSize),
    },
  ];

  return (
    <View style={styles.container}>
      <RadialGradient color="#7F43FF" />

      <Animated.View style={[styles.subContainer, {opacity: fadeAnim}]}>
        <Text style={[styles.whiteText, styles.fontLight, TEXT_STYLES.BODY2]}>
          {STRINGS.EXPERIENCE_SPEED}
        </Text>
        <Text style={[styles.whiteText, TEXT_STYLES.REGULAR30]}>
          {STRINGS.QUICK_EASY}
        </Text>
      </Animated.View>
      <Animated.View style={[styles.animationContainer, {opacity: fadeAnim}]}>
        <ScreenAnimation />
      </Animated.View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonSubContainer}>
          <Animated.View style={[animatedButtonStyle]}>
            <Pressable
              key={'G0'}
              onPress={() => {}}
              style={({pressed}) => [
                styles.primaryButton,
                {
                  opacity: pressed ? 0.8 : 1,
                },
              ]}>
              <Text style={[TEXT_STYLES.FI2, styles.buttonText]}>
                {STRINGS.SIGNUP}
              </Text>
            </Pressable>
          </Animated.View>
        </View>
        {renderButtonComponent(renderButtons, animatedButtonStyle)}
        <Pressable
          onPress={() =>
            navigation.navigate(NAVIGATION_SCREENS.CREATE_USERNAME)
          }
          style={({pressed}) => [
            {
              opacity: pressed ? 0.8 : 1,
              marginVertical: _scaleText(Platform.OS == 'android' ? 15 : 10)
                .fontSize,
            },
          ]}>
          <Animated.Text
            style={[
              TEXT_STYLES.FI2,
              styles.whiteText,
              styles.secondaryText,
              animatedButtonStyle,
            ]}>
            {STRINGS.LOGIN}
          </Animated.Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginSignup;
