import {
  Animated,
  Dimensions,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useRef} from 'react';
import {STRINGS} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText, isIpad} from '../../shared/services/utility';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Radial from 'react-native-radial-gradient';
import {ICONS} from '../../shared/constants/icons';
import {profileConfigurations} from '../AvatarSelection/constants';
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
    <View style={styles.container}>
      <Radial
        style={{width: W, height: H, position: 'absolute'}}
        colors={['rgba(67, 63, 229, 1)', 'transparent']}
        stops={[0, 1]}
        center={[W * 0.5, 0]}
        radius={_scaleText(Platform.OS == "android" ? 200 : 300).fontSize}></Radial>

      <Animated.View
        style={{
          opacity: fadeAnim,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: _scaleText(Platform.OS == 'android' ? 20 : 40).lineHeight,
          width: '90%',
        }}>
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}
          hitSlop={_scaleText(26).fontSize}>
          {ICONS.MENU(
            _scaleText(isIpad() ? 35 : Platform.OS == 'android' ? 30 : 25)
              .fontSize,
          )}
        </Pressable>

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
          <Pressable
            style={({pressed}) => [
              {
                paddingHorizontal: _scaleText(10).fontSize,
                opacity: pressed ? 0.5 : 1,
              },
            ]}>
            {ICONS.NOTIFICATION(
              _scaleText(Platform.OS == 'android' ? 30 : 25).fontSize,
            )}
          </Pressable>
          <View
            style={{
              backgroundColor: userDetails?.avatar?.imgColor,
              borderRadius: 50,
            }}>
            {userDetails?.avatar?.image(
              _scaleText(isTablet() ? 40 : 30)
                .fontSize,
            )}
          </View>
        </View>
      </Animated.View>
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
