import {
  Animated,
  Dimensions,
  Pressable,
  Text,
  View,
  Platform,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {CREATE_PROFILE} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText} from '../../shared/services/utility';
import styles from './styles';
import {ICONS} from '../../shared/constants/icons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme, setUserDetails} from '../../redux/actions/common';
import Radial from 'react-native-radial-gradient';
import RadialGradient from '../../components/molecules/radialGradient';
import IdentityCardSvg from '../../components/atoms/CustomCardSvg';
import ThemeActionSheet from './ActionSheet';
import ThemeButtonSvg from '../../components/atoms/CustomThemeIcons';
import {NAVIGATION_SCREENS} from '../../navigators/constants';
import {isTablet} from 'react-native-device-info';
import customStyling from '../../shared/services/styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const InterestSelection = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const actionSheet = useRef();
  const H = Dimensions.get('window').height;
  const W = Dimensions.get('window').width;
  const [isModalVisible, setModalVisible] = useState(false);

  const [selectedValue, setSelectedValue] = useState([]);

  const userDetails = useSelector(state => state.common.userDetails);

  const onNext = () => {
    dispatch(
      setUserDetails({
        ...userDetails,
        interests: selectedValue,
      }),
    );
    navigation.navigate(NAVIGATION_SCREENS.HOME_PAGE);
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

  const renderMiddleHeader = () => (
    <View style={customStyling.paginationContainer}>
      {CREATE_PROFILE.map((_, index) => (
        <View
          key={index}
          style={[customStyling.paginationDot(index === 3)]}
          //   onPress={() => handlePageChange(index)}
        />
      ))}
    </View>
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerRight: () => (
        <Pressable style={styles.xpContainer} hitSlop={_scaleText(26).fontSize}>
          <View style={styles.sparkles}>
            {ICONS.SPARKLES(
              _scaleText(Platform.OS == 'android' ? 21 : 20).fontSize,
            )}
          </View>
          <Text style={styles.xpText}>25 XP</Text>
        </Pressable>
      ),
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
        <IdentityCardSvg startColor={'#101010'} stopColor={'#101010'} />
        <View style={[styles.profileContainer]}>
          <View
            style={{
              justifyContent: 'space-between',
              width:
                W * (isTablet() ? 0.45 : Platform.OS == 'android' ? 0.65 : 0.7),
              paddingLeft: _scaleText(40).fontSize,
              paddingRight: _scaleText(30).fontSize,
              flexDirection: 'row',
            }}>
            <View style={{}}>
              <Text
                style={[
                  styles.whiteText,
                  TEXT_STYLES.H1,
                  {
                    marginTop: _scaleText(10).fontSize,
                    fontFamily: 'Cabrion-Regular',
                  },
                ]}>
                {userDetails.userName}@tria
              </Text>
              <Text
                style={[
                  TEXT_STYLES.H5,
                  styles.whiteText,
                  {fontFamily: 'Cabrion-Regular'},
                ]}>
                {'150 XP'}
              </Text>
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
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default InterestSelection;
