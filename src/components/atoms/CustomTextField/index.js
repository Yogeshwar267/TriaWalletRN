//import liraries
import React, { useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  Pressable,
  Easing,
  Animated
} from 'react-native';
import styles from './styles';
import {TEXT_STYLES} from '../../../shared/constants/styles';
import {ICONS} from '../../../shared/constants/icons';
import {_scaleText} from '../../../shared/services/utility';
import { isTablet } from 'react-native-device-info';

const CustomTextField = ({
  value = '',
  onChange = () => {},
  placeholderText = 'Enter here...',
  placeholderTextColor = 'rgba(255,255,255, 0.3)',
  inputStyle = {},
  containerStyle = {},
  isleftIcon = false,
  isRightIcon = false,
  isLeftText = false,
  isRightText = false,
  subText = '',
  iconSvg = () => {},
  iconImgSrc = '',
  type = 'none',
  label = '',
  subLabel = '',
  enabled = true,
  onFocus = () => {},
  onBlur = () => {},
  maxlength = 50,
}) => {
  const [isSecure, setIsSecure] = useState(true);
  const fadeAnim = new Animated.Value(enabled ? 1 : 0.8);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: enabled ? 1 : 0.8,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, [enabled]);

  const animatedStyle = {
    opacity: fadeAnim,
  };

  return (
    <Animated.View
      style={[
        styles.container,
        !enabled ? styles.disabled : {},
        animatedStyle,
      ]}>
      <View style={styles.headingContainer}>
        {label?.length ? (
          <Text style={[TEXT_STYLES.H2, styles.whiteText]}>{label}</Text>
        ) : null}

        {subLabel?.length ? (
          <Text style={[TEXT_STYLES.PopUpTitle, styles.subHeading]}>
            {subLabel}
          </Text>
        ) : null}
      </View>

      <View
        style={[
          styles.secondaryTextInputContainer,
          !enabled ? styles.disabledContainer : {},
        ]}>
        {isleftIcon ? iconImgSrc?.length ? <Image /> : iconSvg : null}
        {isLeftText ? (
          <Text style={[TEXT_STYLES.FM2, styles.placeholder]}>{subText}</Text>
        ) : null}
        <TextInput
          style={[
            inputStyle || [styles.secondaryTextInput, TEXT_STYLES.FM2],
            [
              isTablet() ? {paddingVertical: _scaleText(15).fontSize} : Platform.OS == 'android'
                ? {paddingVertical: _scaleText(12).fontSize}
                : {paddingVertical: _scaleText(18).fontSize},
            ],{fontWeight:'bold'}
          ]}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholderText}
          value={value}
          maxLength={maxlength}
          textContentType={type}
          secureTextEntry={type == 'password' ? isSecure : false}
          onChangeText={val => onChange(val.endsWith(' ') ? val.trim() : val)}
          onFocus={onFocus}
          onBlur={onBlur}></TextInput>
        {isRightIcon ? iconImgSrc?.length ? <Image /> : iconSvg : null}
        {isRightText ? (
          <Text
            style={[
              TEXT_STYLES.FM2,
              styles.placeholder,
              !enabled ? styles.disabledText : {left:-_scaleText(15).fontSize},
            ]}>
            {subText}
          </Text>
        ) : null}

        {type == 'password' ? (
          <Pressable
            disabled={!enabled}
            style={styles.passIcon}
            hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
            onPress={() => setIsSecure(prev => !prev)}>
            {isSecure
              ? ICONS.EYE_SLASH(
                  _scaleText(Platform.OS == 'android' ? 25 : 18).fontSize,
                )
              : ICONS.EYE(
                  _scaleText(Platform.OS == 'android' ? 25 : 18).fontSize,
                )}
          </Pressable>
        ) : null}
      </View>
    </Animated.View>
  );
};

export default CustomTextField;
