//import liraries
import React, {useEffect, useMemo, useRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {STRINGS} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText} from '../../shared/services/utility';
import {Animated} from 'react-native';
import {INTERESTS} from './constants';
import customStyling from '../../shared/services/styles';
import BottomSheet from '../../components/atoms/CustomBottomSheet';

const InterestsActionSheet = ({
  setSelectedValue = () => {},
  selectedValue,
  onNext = () => {},
  isModalVisible = true,
  setModalVisible = () => {},
}) => {
  const buttonAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(buttonAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [buttonAnim]);

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

  useEffect(() => {
    setModalVisible(true);
  }, []);

  const toggleInterest = interest => {
    if (selectedValue.includes(interest)) {
      setSelectedValue(selectedValue.filter(item => item !== interest));
    } else {
      setSelectedValue([...selectedValue, interest]);
    }
  };

  return (
    <BottomSheet
      id={'Interests'}
      isModalVisible={isModalVisible}
      setModalVisible={setModalVisible}>
      <View style={customStyling.actionTitleContainer}>
        <Text
          style={[
            styles.whiteText,
            TEXT_STYLES.H2,
            {marginTop: _scaleText(10).fontSize},
          ]}>
          {STRINGS.INTERESTS_SELECT}
        </Text>
        <Text
          style={[
            Platform.OS == 'android' ? TEXT_STYLES.H4 : TEXT_STYLES.H5,
            styles.GUEST_TEXT,{marginTop: _scaleText(10).fontSize}
          ]}>
          {STRINGS.INTERESTS_SELECT_SUBHEADING}
        </Text>
      </View>
      <View style={styles.chipsContainer}>
        {INTERESTS.map((item, index) => (
          <Pressable
            style={styles.chips(
              selectedValue.includes(item)
                ? '#fff'
                : 'rgba(255, 255, 255, 0.3)',
            )}
            onPress={() => toggleInterest(item)}
            key={item}>
            <Text
              style={[
                styles.chipsText(
                  selectedValue.includes(item)
                    ? '#fff'
                    : 'rgba(255, 255, 255, 0.3)',
                ),
                TEXT_STYLES.PopUpTitle,
              ]}>
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
      <Animated.View style={[animatedButtonStyle, styles.buttonContainer]}>
        <Pressable
          onPress={() => onNext()}
          style={({pressed}) => [
            customStyling.primaryButton,
            {
              opacity: pressed ? 0.8 : 1,
            },
          ]}>
          <Text
            style={[
              Platform.OS == 'android' ? TEXT_STYLES.H3 : TEXT_STYLES.H4,
              styles.buttonText,
            ]}>
            {STRINGS.NEXT}
          </Text>
        </Pressable>
        <Text
          style={[
            Platform.OS == 'android' ? TEXT_STYLES.H4 : TEXT_STYLES.H6,
            styles.GUEST_TEXT,
            {textDecorationLine: 'underline'},
          ]}>
          {STRINGS.NO_XP_NEEDED}
        </Text>
      </Animated.View>
    </BottomSheet>
  );
};

export default InterestsActionSheet;
