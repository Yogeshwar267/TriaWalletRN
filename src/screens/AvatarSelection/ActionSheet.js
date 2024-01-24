//import liraries
import React, {useEffect, useMemo, useRef} from 'react';
import {View, Text, Dimensions, Image, Pressable} from 'react-native';
import styles from './styles';
import {STRINGS} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {ICONS} from '../../shared/constants/icons';
import {_scaleText} from '../../shared/services/utility';
import {Animated} from 'react-native';
import {isTablet} from 'react-native-device-info';
import customStyling from '../../shared/services/styles';
import BottomSheet from '../../components/atoms/CustomBottomSheet';

const AvatarActionSheet = ({
  setSelectedValue = () => {},
  onNext = () => {},
  isModalVisible = false,
  setModalVisible = () => {},
}) => {
  const W = Dimensions.get('window').width;
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

  return (
    <BottomSheet
      id={'Avatar'}
      isModalVisible={isModalVisible}
      setModalVisible={setModalVisible}>
      <View style={customStyling.actionTitleContainer}>
        <Text
          style={[
            styles.whiteText,
            TEXT_STYLES.H2,
            {marginTop: _scaleText(5).fontSize},
          ]}>
          {STRINGS.CREATE_AVATAR}
        </Text>
        <Text
          style={[
            Platform.OS == 'android' ? TEXT_STYLES.H4 : TEXT_STYLES.H5,
            styles.GUEST_TEXT,  {marginTop: _scaleText(10).fontSize}
          ]}>
          {STRINGS.AVATAR_CHANGE}
        </Text>
      </View>

      <View style={styles.avatarButton}>
        <Pressable style={styles.galleryButton}>
          {ICONS.GALLERY(
            _scaleText(isTablet() ? 70 : Platform.OS == 'android' ? 65 : 55)
              .fontSize,
          )}
        </Pressable>
        <Pressable
          style={styles.regenrateButton}
          onPress={() => setSelectedValue(Math.floor(Math.random() * 7))}>
          <View style={{position: 'absolute'}}>
            {ICONS.REGENARATE_BORDER(
              W * (isTablet() ? 0.45 : Platform.OS == 'android' ? 0.6 : 0.6),
            )}
          </View>
          <View style={styles.regeneratePressable}>
            {ICONS.UNICORN(25)}
            <Text
              style={[
                styles.freeText,
                TEXT_STYLES.H4,
                {fontWeight: '600', marginLeft: 12},
              ]}>
              {STRINGS.REGENERATE_AVATAR}
            </Text>
          </View>
        </Pressable>
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
          {STRINGS.SKIP}
        </Text>
      </Animated.View>
    </BottomSheet>
  );
};

export default AvatarActionSheet;
