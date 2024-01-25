import { Animated, Pressable, Text, View, Platform } from 'react-native';
import React, {useEffect, useMemo, useRef} from 'react';
import LandingAnimation from './animation';
import {STRINGS} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText} from '../../shared/services/utility';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NAVIGATION_SCREENS} from '../../navigators/constants';
import {useTheme} from '../../hooks';
import {SafeAreaView} from 'react-native-safe-area-context';
import customStyling from '../../shared/services/styles';

const LandingScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const {Layout} = useTheme();

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

  const animatedButtonStyle = useMemo(() => {
    return {
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
  }, [buttonAnim]);
  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor: 'black'}]}>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.whiteText,
            styles.titleText,
            Platform.OS == 'android' ? TEXT_STYLES.H2 : TEXT_STYLES.H3,
            {opacity: fadeAnim},
          ]}>
          {STRINGS.EXPERIENCE_OMNI}
        </Animated.Text>
        <View>
          <LandingAnimation />
        </View>

        <View style={customStyling.bottomNextContainer}>
          <View style={styles.textContainer}>
            <Animated.Text
              style={[
                styles.whiteText,
                {
                  fontWeight: '700',
                  fontFamily: 'Cabrion-Bold',
                  fontSize: _scaleText(60).fontSize,
                  opacity: fadeAnim,
                },
              ]}>
              {STRINGS.TRIA}
            </Animated.Text>
            <Animated.Text
              style={[
                styles.whiteText,
                Platform.OS == 'android' ? TEXT_STYLES.H2 :TEXT_STYLES.H3,
                {
                  textAlign: 'center',
                  marginTop: _scaleText(5).fontSize,
                  opacity: fadeAnim,
                },
              ]}>
              {STRINGS.TAGLINE}
            </Animated.Text>

            <Animated.View style={[animatedButtonStyle]}>
              <Pressable
                onPress={() =>
                  navigation.navigate(NAVIGATION_SCREENS.LOGIN_SIGNUP)
                }
                style={({pressed}) => [
                  styles.getStartedButton,
                  {
                    opacity: pressed ? 0.8 : 1,
                  },
                ]}>
                <Text style={[Platform.OS == 'android' ? TEXT_STYLES.H2 :TEXT_STYLES.H3, styles.buttonText]}>
                  {STRINGS.GET_STARTED}
                </Text>
              </Pressable>
            </Animated.View>
          </View>
          <Pressable
            onPress={() => {}}
            style={({pressed}) => [
              {
                opacity: pressed ? 0.8 : 1,
              },
            ]}>
            <Animated.Text
              style={[Platform.OS == 'android' ? TEXT_STYLES.H3 :TEXT_STYLES.H4, styles.GUEST_TEXT, animatedButtonStyle]}>
              {STRINGS.CONTINUE_AS_GUEST}
            </Animated.Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
