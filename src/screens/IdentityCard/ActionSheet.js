//import liraries
import React, {useEffect, useMemo, useRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {STRINGS} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText} from '../../shared/services/utility';
import {Animated} from 'react-native';
import customStyling from '../../shared/services/styles';
import BottomSheet from '../../components/atoms/CustomBottomSheet';

const IdentityActionSheet = ({
  renderItem = () => {},
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

  return (
    <BottomSheet
      id={'Identiti'}
      isModalVisible={isModalVisible}
      setModalVisible={setModalVisible}>
      <View style={customStyling.actionTitleContainer}>
        <Text
          style={[
            styles.whiteText,
            TEXT_STYLES.H2,
            {marginTop: _scaleText(10).fontSize},
          ]}>
          {STRINGS.WALLET_COLOR}
        </Text>
        <Text
          style={[
            Platform.OS == 'android' ? TEXT_STYLES.H4 : TEXT_STYLES.H5,
            styles.GUEST_TEXT,
          ]}>
          {STRINGS.WALLET_COLOR_SUBHEADING}
        </Text>
      </View>
      {renderItem()}
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
          {STRINGS.SKIP}
        </Text>
      </Animated.View>
    </BottomSheet>
  );
};

export default IdentityActionSheet;
