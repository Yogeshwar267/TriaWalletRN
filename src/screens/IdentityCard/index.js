import {Animated, Dimensions, Pressable, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {CREATE_PROFILE, images} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText, isIpad} from '../../shared/services/utility';
import styles from './styles';
import {ICONS} from '../../shared/constants/icons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setUserDetails} from '../../redux/actions/common';
import {IDENTITY_COLORS} from './constants';
import Radial from 'react-native-radial-gradient';
import RadialGradient from '../../components/molecules/radialGradient';
import QRCodeStyled from 'react-native-qrcode-styled';
import IdentityCardSvg from '../../components/atoms/CustomCardSvg';
import ColorSvg from './ColorSvg';
import IdentityActionSheet from './ActionSheet';
import {isTablet} from 'react-native-device-info';
import { NAVIGATION_SCREENS } from '../../navigators/constants';
import customStyling from '../../shared/services/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const IdentityCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const H = Dimensions.get('window').height;
  const W = Dimensions.get('window').width;
  const [selectedValue, setSelectedValue] = useState({
    imgColor: '#4643D0',
    value: 0,
  });

  const userDetails = useSelector(state => state.common.userDetails);
  const [isModalVisible, setModalVisible] = useState(false);

  const onNext = () => {
    dispatch(
      setUserDetails({
        ...userDetails,
        identity: selectedValue,
      }),
    );
    navigation.navigate(NAVIGATION_SCREENS.THEME_SELECTION)

  };

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

  const renderColors = () => (
    <View style={[styles.colorContainer]}>
      {IDENTITY_COLORS.map(item => {
        return (
          <Pressable key={item.value} onPress={() => setSelectedValue(item)}>
            <ColorSvg
              color={item.imgColor}
              isSelected={item.value == selectedValue.value}
            />
          </Pressable>
        );
      })}
    </View>
  );

  const renderMiddleHeader = () => (
    <View style={customStyling.paginationContainer}>
      {CREATE_PROFILE.map((_, index) => (
        <View
          key={index}
          style={[customStyling.paginationDot(index === 1)]}
          //   onPress={() => handlePageChange(index)}
        />
      ))}
    </View>
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerShown: true,
      headerTransparent: true,
      headerTitle: () => renderMiddleHeader(),
      headerStyle: {
        backgroundColor: '#0000',
      },
    });
  }, [navigation]);


  return (
    <SafeAreaView style={customStyling.containerWithHeader}>
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
      <Animated.View style={[customStyling.subContainer, {opacity: fadeAnim}]}>
          <IdentityCardSvg
            startColor={selectedValue.imgColor}
            stopColor={selectedValue.gradientColor}
          />
        <View style={[customStyling.profileContainer]}>
          <View style={customStyling.profileSvg}>
            <QRCodeStyled
              data={'Simple QR Code'}
              style={{backgroundColor: 'transparent', position: 'absolute',}}
              color={'#FFF'}
              padding={20}
              pieceSize={
                _scaleText(
                  isIpad()
                    ? 13
                    : isTablet()
                    ? 10
                    : Platform.OS == 'android'
                    ? 10.5
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
                _scaleText(isIpad() ? 80 : Platform.OS == 'android' ? 60 : 50).fontSize,
              )}
            </View>
          </View>
          <View
            style={customStyling.cardText}>
            <View>
              <Text
                style={[
                  styles.whiteText,
                  TEXT_STYLES.H1,
                  {marginTop: _scaleText(10).fontSize,fontFamily: 'Cabrion-Regular'},
                ]}>
                {userDetails.userName}@tria
              </Text>
              <Text style={[TEXT_STYLES.H5, styles.whiteText,{fontFamily: 'Cabrion-Regular'}]}>{'150 XP'}</Text>
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
      <IdentityActionSheet
        setSelectedValue={setSelectedValue}
        renderItem={renderColors}
        onNext={onNext}
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default IdentityCard;
