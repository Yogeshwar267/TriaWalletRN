import {
  Animated,
  Dimensions,
  Keyboard,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {STRINGS} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText} from '../../shared/services/utility';
import styles from './styles';
import RadialGradient from '../../components/molecules/radialGradient';
import LinearGradient from 'react-native-linear-gradient';
import {ICONS} from '../../shared/constants/icons';
import Profile from './Profile';
import {useNavigation} from '@react-navigation/native';
import {NAVIGATION_SCREENS} from '../../navigators/constants';
import {useDispatch} from 'react-redux';
import {setUserDetails} from '../../redux/actions/common';
import CustomTextField from '../../components/atoms/CustomTextField';
import {useTheme} from '../../hooks';
import {SafeAreaView} from 'react-native-safe-area-context';
import {isTablet} from 'react-native-device-info';

const CreateTriaName = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {Layout} = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const [username, setUsername] = useState('');
  const H = Dimensions.get('window').height;

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

  const onNext = () => {
    dispatch(setUserDetails({userName: username}));
    navigation.navigate(NAVIGATION_SCREENS.CREATE_PASSWORD);
  };

  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setIsKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setIsKeyboardVisible(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerRight: ({}) => (
        <Pressable
          style={{
            paddingHorizontal: _scaleText(Platform.OS == 'android' ? 30 : 15)
              .fontSize,
            marginTop: _scaleText(isTablet() ? 30 : 20).fontSize,
          }}
          hitSlop={_scaleText(26).fontSize}
          onPress={() => {}}>
          {ICONS.XP_ICON(_scaleText(isTablet() ? 90 : 70).fontSize)}
        </Pressable>
      ),
      headerStyle: {
        backgroundColor: 'transparent',
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={[
        Layout.fill,
        {marginTop: _scaleText(30).fontSize, backgroundColor: 'black'},
      ]}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          ...(Platform.OS == 'android'
            ? {
                marginTop:
                  isKeyboardVisible && Platform.OS === 'android' ? '36%' : 0,
              }
            : {}),
        }}>
        <RadialGradient color="#7F43FF" />

        <Animated.View style={[styles.subContainer, {opacity: fadeAnim}]}>
          <Text style={[styles.whiteText, TEXT_STYLES.REGULAR30]}>
            {STRINGS.CREATE_TRIA_NAME}
          </Text>
          <Text style={[TEXT_STYLES.H5, styles.GUEST_TEXT]}>
            {STRINGS.CREATE_TRIA_SUBTITLE}
          </Text>
        </Animated.View>
        <Animated.View style={[styles.animationContainer, {opacity: fadeAnim}]}>
          <Profile />
        </Animated.View>

        <Animated.View
          style={[
            {
              opacity: fadeAnim,
              ...(isTablet() ? {marginTop: _scaleText(60).fontSize} : {}),
            },
          ]}>
          <CustomTextField
            value={username}
            onChange={setUsername}
            placeholderText={STRINGS.ENTER_USERNAME}
            placeholderTextColor={'rgba(255,255,255, 0.3)'}
            inputStyle={[styles.secondaryTextInput, TEXT_STYLES.FM2]}
            containerStyle={{marginBottom: _scaleText(25).fontSize}}
            isRightText={true}
            subText={`@${STRINGS.TRIA}`}
            maxlength={12}
          />

          {username.length > 3 ? (
            <View style={styles.usernameSubContainer}>
              <View style={styles.availibaleContainer}>
                {ICONS.TICK_GREEN(22)}
                <Text style={[TEXT_STYLES.H5, styles.availibale]}>
                  {STRINGS.USERNAME_AVAILIABLE}
                </Text>
              </View>

              <LinearGradient
                colors={['#254FB3CC', '#3D9DE1', '#3D9DE1']}
                start={{x: 0, y: 0}}
                end={{x: 0.5, y: 0.5}}
                style={styles.freeContainer}>
                <Text
                  style={[
                    Platform.OS == 'android' ? TEXT_STYLES.H4 : TEXT_STYLES.H5,
                    styles.freeText,
                  ]}>
                  {STRINGS.FREE}
                </Text>
              </LinearGradient>
            </View>
          ) : null}
        </Animated.View>

        <View
          style={[
            styles.buttonContainer,
            isTablet() && Platform.OS == 'android'
              ? {
                  bottom: isKeyboardVisible
                    ? _scaleText(0).fontSize
                    : _scaleText(15).fontSize,
                  top: isKeyboardVisible
                    ? _scaleText(H).fontSize
                    : _scaleText(0),
                }
              : Platform.OS == 'android'
              ? {
                  bottom: isKeyboardVisible
                    ? _scaleText(0).fontSize
                    : _scaleText(15).fontSize,
                  top: isKeyboardVisible
                    ? _scaleText(420).fontSize
                    : _scaleText(0),
                }
              : {},
          ]}>
          <Animated.View
            style={[animatedButtonStyle,styles.buttonSubContainer]}>
            <Text style={[TEXT_STYLES.H5, styles.GUEST_TEXT]}>
              {STRINGS.TAPPING_ON_NEXT}{' '}
              <Text style={{textDecorationLine: 'underline'}}>
                {STRINGS.T_C}
              </Text>
            </Text>
            <Pressable
              onPress={() => onNext()}
              disabled={!username.length}
              style={({pressed}) => [
                styles.primaryButton,
                {
                  opacity: pressed ? 0.8 : 1,
                  backgroundColor: username.length
                    ? '#FFF'
                    : 'rgba(255,255,255, 0.2)',
                },
              ]}>
              <Text
                style={[
                  TEXT_STYLES.SB1,
                  styles.buttonText,
                  {
                    color: !username.length
                      ? ' rgba(255,255,255, 0.3)'
                      : 'black',
                  },
                ]}>
                {STRINGS.NEXT}
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateTriaName;
