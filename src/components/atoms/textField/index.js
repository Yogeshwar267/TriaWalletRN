//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  Pressable,
} from 'react-native';
import styles from './styles';
import {TEXT_STYLES} from '../../../shared/constants/styles';
import {STRINGS} from '../../../shared';
import {ICONS} from '../../../shared/constants/icons';
import {_scaleText} from '../../../shared/services/utility';

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
  type = '',
  label="",
  subLabel=''
}) => {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={[TEXT_STYLES.H6, styles.whiteText]}>
        {label}
      </Text>

      <Text style={[TEXT_STYLES.FM2, styles.whiteText]}>
        {subLabel}
      </Text>

      <View
        style={[
          containerStyle,
          [Platform.OS == 'android' ? {paddingVertical: 0} : {}],
        ]}>
        {isleftIcon ? iconImgSrc?.length ? <Image /> : iconSvg : null}
        {isLeftText ? (
          <Text style={[TEXT_STYLES.FM2, styles.placeholder]}>{subText}</Text>
        ) : null}
        <TextInput
          style={
            inputStyle
              ? inputStyle
              : [styles.secondaryTextInput, TEXT_STYLES.FM2]
          }
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholderText}
          value={value}
          textContentType={type}
          secureTextEntry={isSecure}
          onChangeText={val => onChange(val)}></TextInput>
        {isRightIcon ? iconImgSrc?.length ? <Image /> : iconSvg : null}
        {isRightText ? (
          <Text style={[TEXT_STYLES.FM2, styles.placeholder]}>{subText}</Text>
        ) : null}

        {type == 'password' ? (
          <Pressable
            style={styles.passIcon}
            onPress={() => setIsSecure(prev => !prev)}>
            {isSecure
              ? ICONS.EYE_SLASH(_scaleText(25).fontSize)
              : ICONS.EYE(_scaleText(25).fontSize)}
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default CustomTextField;
