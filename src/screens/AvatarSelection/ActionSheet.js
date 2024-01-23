//import liraries
import React, {Component, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import ActionSheet from 'react-native-actions-sheet';
import DropShadow from 'react-native-drop-shadow';
import {STRINGS, images} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {ICONS} from '../../shared/constants/icons';
import {_scaleText} from '../../shared/services/utility';
import {Animated} from 'react-native';
import {profileConfigurations} from './constants';
import { isTablet } from 'react-native-device-info';

const AvatarActionSheet = ({
  setRef = () => {},
  setSelectedValue = () => {},
  onNext = () => {},
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const actionSheet = useRef();
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
    if (actionSheet.current) setRef(actionSheet.current);
  }, [actionSheet.current]);
  return (
    <ActionSheet
      ref={actionSheet}
      closable={false}
      containerStyle={styles.actionContainer}
      indicatorStyle={styles.actionheader}
      backgroundInteractionEnabled={true}
      headerAlwaysVisible={true}
      isModal={false}
      overdrawEnabled={false}>
      <Text
        style={[
          styles.whiteText,
          TEXT_STYLES.H2,
          {marginTop: _scaleText(10).fontSize},
        ]}>
        {STRINGS.CREATE_AVATAR}
      </Text>
      <Text style={[Platform.OS == 'android' ? TEXT_STYLES.H4 :  TEXT_STYLES.H5, styles.GUEST_TEXT]}>
        {STRINGS.AVATAR_CHANGE}
      </Text>

      <View style={styles.avatarButton}>
        <Pressable style={styles.galleryButton}>
          {ICONS.GALLERY(_scaleText(isTablet() ? 90 :  Platform.OS == 'android' ? 65 :55).fontSize)}
        </Pressable>
        <ImageBackground
          source={images.REGENERATE_AVATAR}
          imageStyle={{objectFit: 'contain'}}
          style={styles.regenarteBUtton}>
          <Pressable
            style={styles.regeneratePressable}
            onPress={() => setSelectedValue(Math.floor(Math.random() * 7))}>
            <Text style={[styles.freeText, TEXT_STYLES.H4]}>
              {STRINGS.REGENERATE_AVATAR}
            </Text>
          </Pressable>
        </ImageBackground>
      </View>
      <Animated.View style={[animatedButtonStyle, styles.buttonContainer]}>
        <Pressable
          onPress={onNext}
          style={({pressed}) => [
            styles.primaryButton,
            {
              opacity: pressed ? 0.8 : 1,
            },
          ]}>
          <Text style={[TEXT_STYLES.SB1, styles.buttonText]}>
            {STRINGS.NEXT}
          </Text>
        </Pressable>
        <Pressable onPress={onNext}></Pressable>
        <Text style={[TEXT_STYLES.PopUpTitle, styles.GUEST_TEXT ,{textDecorationLine: 'underline'}]}>
          {STRINGS.SKIP}
        </Text>
      </Animated.View>
    </ActionSheet>
  );
};

//make this component available to the app
export default AvatarActionSheet;
