import {
  Animated,
  KeyboardAvoidingView,
  Platform,
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
import Profile from './Profile';
import {useNavigation} from '@react-navigation/native';
import {NAVIGATION_SCREENS} from '../../navigators/constants';
import {useDispatch} from 'react-redux';
import {setUserDetails} from '../../redux/actions/common';

const CreateTriaName = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const [username, setUsername] = useState('');

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

  const onNext = () => {
    dispatch(setUserDetails({userName: username}));
    navigation.navigate(NAVIGATION_SCREENS.CREATE_PASSWORD);
  };

  return (
    // <KeyboardAwareScrollView
    //   style={styles.keyboardSafeAreaView}
    //   contentContainerStyle={styles.keyboardSafeAreaViewChild}
    //   showsVerticalScrollIndicator={false}
    //   bounces={false}
    //   enableAutomaticScroll={Platform.OS == 'ios'}
    //   extraHeight={Platform.OS == 'android' ? -150 : 150}
    //   enableOnAndroid={true}>
    <View style={[styles.container]}>
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

      <Animated.View style={[{opacity: fadeAnim}]}>
        <View style={styles.secondaryTextInputContainer}>
          <TextInput
            style={[
              styles.secondaryTextInput,
              TEXT_STYLES.FM2,
              Platform.OS == 'android' ? {paddingVertical: 0} : {},
            ]}
            placeholderTextColor={'rgba(255,255,255, 0.3)'}
            placeholder={STRINGS.ENTER_USERNAME}
            value={username}
            underlineColorAndroid={'transparent'}
            onChangeText={val => setUsername(val)}></TextInput>

          <Text style={[TEXT_STYLES.FM2, styles.placeholder]}>
            {`@${STRINGS.TRIA}`}
          </Text>
        </View>

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
              <Text style={[TEXT_STYLES.SB1, styles.buttonText]}>
                {STRINGS.NEXT}
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </View>
    // </KeyboardAwareScrollView>
  );
};

export default CreateTriaName;
