import {
  Animated,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {STRINGS} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText} from '../../shared/services/utility';
import styles from './styles';
import RadialGradient from '../../components/molecules/radialGradient';
import LinearGradient from 'react-native-linear-gradient';
import {ICONS} from '../../shared/constants/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';
import CustomTextField from '../../components/atoms/textField';

const CreatePassword = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const [password, setPassword] = useState('');
  const username = useSelector(state => state.common.userDetails);
  console.log(username);

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

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraHeight={_scaleText(150).fontSize}
      enableOnAndroid={true}>
      {/* <View style={styles.container}> */}
      <RadialGradient color="#7F43FF" />

      <Animated.View style={[styles.subContainer, {opacity: fadeAnim}]}>
        <Text style={[styles.whiteText, TEXT_STYLES.REGULAR30]}>
          {STRINGS.CREATE_PASSWORD}
        </Text>
        <Text style={[TEXT_STYLES.H5, styles.GUEST_TEXT]}>
          {STRINGS.PASSWORD_SUBHEADING}
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.animationContainer,
          {opacity: fadeAnim},
        ]}></Animated.View>

      <Animated.View style={[styles.animationContainer, {opacity: fadeAnim}]}>
        <CustomTextField
          value={password}
          onChange={setPassword}
          placeholderText={STRINGS.PASSWORD_PLACEHOLDER}
          placeholderTextColor={'rgba(255,255,255, 0.3)'}
          inputStyle={[styles.secondaryTextInput, TEXT_STYLES.FM2]}
          containerStyle={styles.secondaryTextInputContainer}
          type="password"
          label={STRINGS.CREATE_PASSWORD}
          subLabel={STRINGS.PASSWORD_VALIDATION}
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
              end={{x: 1, y: 0}}
              style={styles.freeContainer}>
              <Text style={[TEXT_STYLES.H5, styles.freeText]}>
                {STRINGS.FREE}
              </Text>
            </LinearGradient>
          </View>
        ) : null}
      </Animated.View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonSubContainer}>
          <Animated.View style={[animatedButtonStyle]}>
            <Text style={[TEXT_STYLES.H5, styles.GUEST_TEXT]}>
              {STRINGS.TAPPING_ON_NEXT}
            </Text>
            <Pressable
              onPress={() => {}}
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
          </Animated.View>
        </View>
      </View>
      {/* </View> */}
    </KeyboardAwareScrollView>
  );
};

export default CreatePassword;
