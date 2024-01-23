import {
  Animated,
  Dimensions,
  Platform,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LandingAnimation from './animation';
import {STRINGS} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText, isIpad} from '../../shared/services/utility';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NAVIGATION_SCREENS} from '../../navigators/constants';
import Radial from 'react-native-radial-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ICONS} from '../../shared/constants/icons';
import {useSelector} from 'react-redux';
import {profileConfigurations} from '../AvatarSelection/constants';
import LinearGradient from 'react-native-linear-gradient';
import {isTablet} from 'react-native-device-info';

const HomePage = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const H = Dimensions.get('window').height;
  const W = Dimensions.get('window').width;
  // const userDetails = useSelector(state => state.common.userDetails);
  const userDetails = {avatar: profileConfigurations[0]};

  const buttons = [
    {
      title: STRINGS.BUY,
      icon: ICONS.BUY,
    },
    {
      title: STRINGS.SEND,
      icon: ICONS.SEND,
    },
    {
      title: STRINGS.CONVERT,
      icon: ICONS.CONVERT,
    },
  ];

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

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      // headerTitle: () => renderMiddleHeader(),
      headerTitleAlign: 'center',
      headerLeft: () => (
        <Pressable
          style={({pressed}) => [
            {
              top: _scaleText(
                isIpad() ? 50 : Platform.OS == 'android' ? 50 : 15,
              ).fontSize,
              paddingHorizontal: _scaleText(Platform.OS == 'android' ? 30 : 15)
                .fontSize,
              opacity: pressed ? 0.5 : 1,
            },
          ]}
          hitSlop={_scaleText(26).fontSize}>
          {ICONS.MENU(
            _scaleText(isIpad() ? 35 : Platform.OS == 'android' ? 30 : 25)
              .fontSize,
          )}
        </Pressable>
      ),
      headerRight: ({}) => (
        <View style={styles.rightHeader}>
          <Pressable
            style={styles.xpContainer}
            hitSlop={_scaleText(26).fontSize}>
            <View style={styles.sparkles}>
              {ICONS.SPARKLES(
                _scaleText(Platform.OS == 'android' ? 25 : 20).fontSize,
              )}
            </View>
            <Text style={styles.xpText}>234 XP in Quests</Text>
          </Pressable>
          {ICONS.NOTIFICATION(
            _scaleText(Platform.OS == 'android' ? 30 : 25).fontSize,
          )}
          <View
            style={{
              backgroundColor: userDetails?.avatar?.imgColor,
              borderRadius: 50,
            }}>
            {userDetails?.avatar?.image(
              _scaleText(isTablet() ? 40 : Platform.OS == 'android' ? 20 : 30)
                .fontSize,
            )}
          </View>
        </View>
      ),

      headerShown: true,
      headerTransparent: true,
      headerTitle: () => null,
      headerStyle: {
        backgroundColor: '#0000',
        height: _scaleText(25).fontSize,
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Radial
        style={{width: W, height: H, position: 'absolute'}}
        colors={['rgba(67, 63, 229, 1)', 'transparent']}
        stops={[0, 1]}
        center={[W * 0.5, 0]}
        radius={300}></Radial>

      <Animated.View style={[styles.balanceContainer, {opacity: fadeAnim}]}>
        <View>
          <Text style={[styles.balanceText, TEXT_STYLES.REGULAR30]}>
            {STRINGS.BALANCE}
          </Text>
          <View style={styles.balanceSub}>
            <Text
              style={[
                styles.whiteText,
                TEXT_STYLES.REGULAR38,
                styles.balanceSubText,
              ]}>
              {'$2881.25'}
            </Text>
            {ICONS.EYE_SLASH(25)}
          </View>
        </View>
        <View>{ICONS.QR_ICON(25)}</View>
      </Animated.View>

      <Animated.View style={[styles.balanceSubContainer, {opacity: fadeAnim}]}>
        <Text style={[styles.profitText, TEXT_STYLES.H2]}>
          {'$12.11 (+2.5%)'}
        </Text>

        <Text
          style={[styles.balanceText, TEXT_STYLES.H2, styles.balanceSubText]}>
          {STRINGS.TODAY}
        </Text>
      </Animated.View>

      <Animated.View style={[styles.buttonContainer, {opacity: fadeAnim}]}>
        {buttons.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={({pressed}) => [
                styles.button,
                {
                  opacity: pressed ? 0.6 : 1,
                },
              ]}>
              {item.icon(isIpad() ? 35 : 20)}

              <Text style={[styles.balanceText, TEXT_STYLES.H3]}>
                {item.title}
              </Text>
            </Pressable>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default HomePage;
