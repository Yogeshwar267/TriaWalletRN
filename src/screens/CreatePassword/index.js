import {
  Animated,
  Keyboard,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {COLORS, STRINGS} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText, getPasswordStrength} from '../../shared/services/utility';
import styles from './styles';
import RadialGradient from '../../components/molecules/radialGradient';
import {ICONS} from '../../shared/constants/icons';
import {useDispatch, useSelector} from 'react-redux';
import CustomTextField from '../../components/atoms/CustomTextField';
import PasswordProgressBar from '../../components/atoms/CustomPasswordProgress/ProgressBar';
import {passErr, progressBarData} from './contants';
import {setUserDetails} from '../../redux/actions/common';
import {NAVIGATION_SCREENS} from '../../navigators/constants';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../hooks';
import {SafeAreaView} from 'react-native-safe-area-context';
import customStyling from '../../shared/services/styles';

const CreatePassword = () => {
  const dispatch = useDispatch();
  const {Layout} = useTheme();
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [fieldFocus, setFieldFocus] = useState(null);
  const userDetails = useSelector(state => state.common.userDetails);
  const [progress, setProgress] = useState({
    error: 0,
    better: 0,
    strong: 0,
  });
  const [progressColor, setProgressColor] = useState('');
  const strength = getPasswordStrength(password);

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

  const changePass = text => {
    setPassword(text);
    switch (getPasswordStrength(text)) {
      case 0:
        setProgress({error: 1, better: 0, strong: 0});
        setProgressColor(COLORS.error);
        break;
      case 1:
        setProgress({error: 1, better: 1, strong: 0});
        setProgressColor(COLORS.yellow);
        break;
      case 2:
        setProgress({error: 1, better: 1, strong: 1});
        setProgressColor(COLORS.success);
        break;
      default:
        setProgress({error: 0, better: 0, strong: 0});
        setProgressColor('#FAFAFA33');
        break;
    }
  };

  const onNext = () => {
    dispatch(setUserDetails({...userDetails, password: password}));
    navigation.navigate(NAVIGATION_SCREENS.AVATAR_SELECTION);
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

  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor: 'black',marginTop: _scaleText(15).fontSize}]}>
      <Animated.View
        style={[
          styles.container,
          Platform.OS == 'android'
            ? {
                marginTop:
                  isKeyboardVisible && Platform.OS === 'android' ? '50%' : '0',
              }
            : {},
        ]}>
        <RadialGradient color="#7F43FF" />

        <Animated.View
          style={[
            styles.subContainer,
            {
              opacity: fadeAnim,
              position: 'absolute',
              top: _scaleText(25).fontSize,
            },
          ]}>
          <Text style={[styles.whiteText, TEXT_STYLES.REGULAR30]}>
            {STRINGS.CREATE_PASSWORD}
          </Text>
          <Text style={[TEXT_STYLES.H5, styles.GUEST_TEXT]}>
            {STRINGS.PASSWORD_SUBHEADING}
          </Text>
        </Animated.View>

        <Animated.View style={[styles.animationContainer, {opacity: fadeAnim}]}>
          <CustomTextField
            value={password}
            onChange={changePass}
            placeholderText={STRINGS.PASSWORD_PLACEHOLDER}
            placeholderTextColor={'rgba(255,255,255, 0.3)'}
            inputStyle={[styles.secondaryTextInput, TEXT_STYLES.FM2]}
            containerStyle={{marginBottom: _scaleText(25).fontSize}}
            type="password"
            label={
              strength == 0 && password?.length
                ? STRINGS.SECURE_YOUR_WALLET
                : STRINGS.CREATE_PASSWORD
            }
            subLabel={STRINGS.PASSWORD_VALIDATION}
            onFocus={() => setFieldFocus(1)}
            onBlur={() => setFieldFocus(null)}
          />

          <Animated.View
            style={[
              styles.ErrorContainer,
              {
                opacity: fadeAnim,
              },
            ]}>
            {fieldFocus == 1 && password.length ? (
              <>
                <View style={styles.progressContainer}>
                  {progressBarData(progress, strength, progressColor).map(
                    (i, index) => (
                      <PasswordProgressBar
                        key={index}
                        progress={i.progress}
                        barColor={i.barColor}
                      />
                    ),
                  )}
                </View>

                <Animated.Text
                  style={[
                    TEXT_STYLES.PopUpTitle,
                    styles.errorText(progressColor),
                  ]}>
                  {passErr[strength]}
                </Animated.Text>
              </>
            ) : null}
          </Animated.View>

          <CustomTextField
            enabled={strength == 2 && password?.length}
            value={confPassword}
            onChange={setConfPassword}
            placeholderText={STRINGS.PASSWORD_PLACEHOLDER}
            placeholderTextColor={'rgba(255,255,255, 0.3)'}
            inputStyle={[styles.secondaryTextInput, TEXT_STYLES.FM2]}
            containerStyle={{marginBottom: _scaleText(15).fontSize}}
            type="password"
            subLabel={STRINGS.PASSWORD_CONFIRMATION}
            onFocus={() => setFieldFocus(2)}
            onBlur={() => setFieldFocus(null)}
          />

          {fieldFocus == 2 && confPassword.length ? (
            <View style={styles.availibaleContainer}>
              {confPassword == password ? ICONS.TICK_GREEN(22) : null}
              <Text
                style={[
                  TEXT_STYLES.H5,
                  styles.errorText(
                    confPassword == password ? COLORS.success : COLORS.error,
                  ),
                ]}>
                {confPassword == password
                  ? STRINGS.PERFECTLY_MATCHED
                  : STRINGS.PASSWORD_UNMATCH}
              </Text>
            </View>
          ) : null}
        </Animated.View>

        <Animated.View
          style={[
            animatedButtonStyle,
            customStyling.bottomNextContainer,
            Platform.OS == 'android'
              ? {
                  bottom:
                    isKeyboardVisible && Platform.OS === 'android'
                      ? _scaleText(20).fontSize
                      : 0,
                }
              : {},
          ]}>
          <Pressable
            disabled={
              !(
                confPassword == password &&
                password.length &&
                confPassword.length
              )
            }
            onPress={onNext}
            style={({pressed}) => [
              styles.primaryButton,
              {
                opacity: pressed ? 0.8 : 1,
                backgroundColor:
                  confPassword == password &&
                  password.length &&
                  confPassword.length
                    ? '#FFF'
                    : 'rgba(255,255,255, 0.2)',
              },
            ]}>
            <Text
              style={[
                TEXT_STYLES.SB1,
                styles.buttonText,
                {
                  color: !(
                    confPassword == password &&
                    password.length &&
                    confPassword.length
                  )
                    ? 'rgba(255,255,255, 0.3)'
                    : 'black',
                },
              ]}>
              {STRINGS.NEXT}
            </Text>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default CreatePassword;
