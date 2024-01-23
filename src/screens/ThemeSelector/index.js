import {Animated, Dimensions, Pressable, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {STRINGS, images} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText, isIpad} from '../../shared/services/utility';
import styles from './styles';
import {ICONS} from '../../shared/constants/icons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme, setUserDetails} from '../../redux/actions/common';
import {IDENTITY_COLORS} from './constants';
import Radial from 'react-native-radial-gradient';
import RadialGradient from '../../components/molecules/radialGradient';
import QRCodeStyled from 'react-native-qrcode-styled';
import IdentityCardSvg from '../../components/atoms/CustomCardSvg';
import ColorSvg from './ColorSvg';
import IdentityActionSheet from './ActionSheet';
import ThemeActionSheet from './ActionSheet';
import ThemeButtonSvg from '../../components/atoms/CustomThemeIcons';
import {isTablet} from 'react-native-device-info';

const ThemeSelection = ({
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
  const currentTheme = useSelector(state => state.theme.darkMode);

  const [selectedValue, setSelectedValue] = useState({
    imgColor: '#4643D0',
    value: 0,
  });

  const userDetails = useSelector(state => state.common.userDetails);

  useEffect(() => {
    if (userDetails?.identity) setSelectedValue(userDetails?.identity);
  }, [userDetails]);

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
        theme: selectedValue,
      }),
    );
    actionSheet.current.hide();
    setSelected(prev => prev + 1);
  };

  useEffect(() => {
    if (
      !actionSheet.current.isOpen() &&
      (actionSheet.current?.show || reRender)
    )
      actionSheet.current.show();
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
    // dispatch(changeTheme({darkMode: darkMode, theme: theme}));
  };

  const renderColors = () => (
    <View style={[styles.colorContainer]}>
      <Pressable onPress={() => onThemePress(true, 'default')}>
        {true || currentTheme
          ? ICONS.DARK_MODE_TRUE(isTablet() ? 160 : 130)
          : ICONS.DARK_MODE_FALSE(isTablet() ? 60 : 50)}
      </Pressable>
      <Pressable onPress={() => onThemePress(false, 'default')}>
        {true || currentTheme
          ? ICONS.LIGHT_MODE_FALSE(isTablet() ? 65 : 50)
          : ICONS.LIGHT_MODE_TRUE(isTablet() ? 120 : 100)}
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <RadialGradient color={selectedValue.imgColor || '#7F43FF'} />

      <Radial
        style={{width: W, height: H, position: 'absolute'}}
        colors={[
          selectedValue.imgColor || 'rgba(67, 63, 229, 0.9)',
          'transparent',
        ]}
        stops={[0, 1]}
        center={[W * 0.5, H * 0.7]}
        radius={300}></Radial>
      <Animated.View style={[styles.subContainer, {opacity: fadeAnim}]}>
        <View style={[styles.profileContainer]}>
          <IdentityCardSvg
            startColor={selectedValue.imgColor}
            stopColor={selectedValue.gradientColor}
          />
          <View style={styles.profileSvg}>
            <QRCodeStyled
              data={'Simple QR Code'}
              style={{backgroundColor: 'transparent', position: 'absolute'}}
              color={'#FFF'}
              padding={20}
              pieceSize={
                _scaleText(
                  isIpad()
                    ? 13
                    : isTablet()
                    ? 10
                    : Platform.OS == 'android'
                    ? 11
                    : 8,
                ).fontSize
              }
              isPiecesGlued={true}
              pieceBorderRadius={_scaleText(5).fontSize}
              outerEyesOptions={{borderRadius: _scaleText(10).fontSize}}
              pieceCornerType="rounded"
              innerEyesOptions={{borderRadius: _scaleText(5).fontSize}}
              logo={{
                href: images.BLUR_BINANCE,
                data: userDetails.avatar.image(
                  _scaleText(H * (Platform.OS == 'android' ? 0.05 : 0.015))
                    .fontSize,
                ),
                width: _scaleText(H * (Platform.OS == 'android' ? 0.15 : 0.15))
                  .fontSize,
                height: _scaleText(H * (Platform.OS == 'android' ? 0.15 : 0.15))
                  .fontSize,
                scale: 4,
                opacity: 0,
              }}
            />
            <View
              style={{
                backgroundColor: userDetails.avatar.imgColor,
                borderRadius: 10,
              }}>
              {userDetails.avatar.image(
                _scaleText(isIpad() ? 80 : Platform.OS == 'android' ? 60 : 50)
                  .fontSize,
              )}
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              justifyContent: 'space-between',
              bottom: _scaleText(
                isTablet && Platform.OS == 'android' ? 100 : Platform.OS == 'android' ? 60 : 80,
              ).fontSize,
              width: W * (isTablet ? 0.45 : 0.7),
              paddingLeft: _scaleText(40).fontSize,
              paddingRight: _scaleText(30).fontSize,
              flexDirection: 'row',
            }}>
            <View>
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
        </View>
      </Animated.View>
      <ThemeActionSheet
        setRef={ref => (actionSheet.current = ref)}
        setSelectedValue={setSelectedValue}
        renderItem={renderColors}
        onNext={onNext}
        heading={[STRINGS.THEME_SELECT, STRINGS.THEME_SELECT_SUBHEADING]}
      />
    </View>
  );
};

export default ThemeSelection;
