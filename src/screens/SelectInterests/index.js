import {Animated, Dimensions, Pressable, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {STRINGS, images} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText} from '../../shared/services/utility';
import styles from './styles';
import {ICONS} from '../../shared/constants/icons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme, setUserDetails} from '../../redux/actions/common';
import {IDENTITY_COLORS} from './constants';
import Radial from 'react-native-radial-gradient';
import RadialGradient from '../../components/molecules/radialGradient';
import IdentityCardSvg from '../../components/atoms/CustomCardSvg';
import ColorSvg from './constants';
import IdentityActionSheet from './ActionSheet';
import ThemeActionSheet from './ActionSheet';
import ThemeButtonSvg from '../../components/atoms/CustomThemeIcons';
import { NAVIGATION_SCREENS } from '../../navigators/constants';
import { isTablet } from 'react-native-device-info';

const InterestSelection = ({
  reRender = false,
  selected,
  setSelected = () => {},
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const actionSheet = useRef();
  const H = Dimensions.get('window').height;
  const W = Dimensions.get('window').width;
  const currentTheme = useSelector(state => state.theme);

  const [selectedValue, setSelectedValue] = useState([]);

  const userDetails = useSelector(state => state.common.userDetails);

  const [opacity, setOpacity] = useState(1);
  const [increment, setIncrement] = useState(-0.01);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(prevOpacity => {
        const newOpacity = prevOpacity + increment;
        if (newOpacity <= 0 || newOpacity >= 1.5) {
          setIncrement(prevIncrement => -prevIncrement);
        }

        return Math.max(0, Math.min(1, newOpacity));
      });
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [increment]);

  const onNext = () => {
    dispatch(
      setUserDetails({
        ...userDetails,
        interests: selectedValue,
      }),
    );
    actionSheet.current.hide();
    navigation.navigate(NAVIGATION_SCREENS.HOME_PAGE)
  };

  useEffect(() => {
    if (!actionSheet.current.isOpen() && (actionSheet.current?.show || reRender)) actionSheet.current.show();
  }, [actionSheet.current, reRender]);

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
    if (actionSheet.current?.show) actionSheet.current.show();
  }, [actionSheet.current]);

  const onThemePress = (darkMode, theme) => {
    dispatch(changeTheme({darkMode: darkMode, theme: theme}));
  };

  const renderColors = () => (
    <View style={[styles.colorContainer]}>
      <Pressable onPress={() => onThemePress(false, 'default')}>
        <ThemeButtonSvg
          mainColor="#5E52E9"
          secondaryColor="#FAFAFA"
          strokeColor="#FAFAFA"
        />
      </Pressable>
      <Pressable onPress={() => onThemePress(true, 'default')}>
        <ThemeButtonSvg
          mainColor="#5E52E9"
          secondaryColor="#FAFAFA"
          strokeColor="#FAFAFA"
          darkTheme={true}
        />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <RadialGradient color={userDetails?.identity?.imgColor || '#7F43FF'} />

      <Radial
        style={{width: W, height: H, position: 'absolute'}}
        colors={[
          userDetails?.identity?.imgColor || 'rgba(67, 63, 229, 0.9)',
          'transparent',
        ]}
        stops={[0, 1]}
        center={[W * 0.5, H * 0.7]}
        radius={300}></Radial>
      <Animated.View style={[styles.subContainer, {opacity: fadeAnim}]}>
        <View style={[styles.profileContainer]}>
          <IdentityCardSvg
            startColor={"#101010"}
            stopColor={'#101010'}
          />
          <View
            style={{
              justifyContent: 'space-between',
              top: _scaleText(75).fontSize,
              width: W * (isTablet() ? 0.45 : 0.7),
              paddingLeft: _scaleText(40).fontSize,
              paddingRight: _scaleText(30).fontSize,
              flexDirection: 'row',
              position: 'absolute',
            }}>
            <View style={{}}>
              <Text
                style={[
                  styles.whiteText,
                  TEXT_STYLES.H1,
                  {marginTop: _scaleText(10).fontSize},
                ]}>
                {userDetails.userName}@tria
              </Text>
              <Text style={[TEXT_STYLES.H5, styles.whiteText]}>{'150 XP'}</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginVertical: _scaleText(15).fontSize,
              }}>
              {ICONS.TRiA_NO_BG(35)}
            </View>
          </View>
          <View style={styles.chipsContainerIdentity}>
            {selectedValue.map((item, index) => (
              <View style={styles.chipsIdentity} key={item}>
                <Text
                  style={[
                    styles.chipsTextIdentity,
                    styles.whiteText,
                    TEXT_STYLES.PopUpTitle,
                  ]}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Animated.View>
      <ThemeActionSheet
        setRef={ref => (actionSheet.current = ref)}
        setSelectedValue={setSelectedValue}
        renderItem={renderColors}
        onNext={onNext}
        selectedValue={selectedValue}
      />
    </View>
  );
};

export default InterestSelection;
