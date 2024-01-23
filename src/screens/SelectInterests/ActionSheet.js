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
import {INTERESTS, profileConfigurations} from './constants';
import ColorSvg from './constants';
import ThemeButtonSvg from '../../components/atoms/CustomThemeIcons';

const InterestsActionSheet = ({
  setRef = () => {},
  setSelectedValue = () => {},
  selectedValue,
  renderItem = () => {},
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

  const toggleInterest = interest => {
    if (selectedValue.includes(interest)) {
      setSelectedValue(selectedValue.filter(item => item !== interest));
    } else {
      setSelectedValue([...selectedValue, interest]);
    }
  };

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
        {STRINGS.INTERESTS_SELECT}
      </Text>
      <Text style={[Platform.OS == 'android' ? TEXT_STYLES.H4 :  TEXT_STYLES.H5, styles.GUEST_TEXT]}>
        {STRINGS.INTERESTS_SELECT_SUBHEADING}
      </Text>
      <View style={styles.chipsContainer}>
        {INTERESTS.map((item, index) => (
          <Pressable
            style={styles.chips(selectedValue.includes(item) ? "#fff" : "rgba(255, 255, 255, 0.3)")}
            onPress={() => toggleInterest(item)}
            key={item}>
            <Text
              style={[
                styles.chipsText(selectedValue.includes(item) ? "#fff" : "rgba(255, 255, 255, 0.3)"),
                TEXT_STYLES.PopUpTitle,
              ]}>
              {item}
            </Text>
          </Pressable>
        ))}
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
        <Text style={[TEXT_STYLES.PopUpTitle, styles.GUEST_TEXT,{textDecorationLine: 'underline'}]}>
          {STRINGS.NO_XP_NEEDED}
        </Text>
      </Animated.View>
    </ActionSheet>
  );
};

//make this component available to the app
export default InterestsActionSheet;