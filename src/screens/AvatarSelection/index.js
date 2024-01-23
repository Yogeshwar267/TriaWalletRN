import {
  Animated,
  Dimensions,
  Platform,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {CREATE_PROFILE} from '../../shared';
import {_scaleText} from '../../shared/services/utility';
import styles from './styles';
import {
  useNavigation,
} from '@react-navigation/native';
import {NAVIGATION_SCREENS} from '../../navigators/constants';
import {useDispatch, useSelector} from 'react-redux';
import {setUserDetails} from '../../redux/actions/common';
import {profileConfigurations} from './constants';
import AvatarActionSheet from './ActionSheet';
import Radial from 'react-native-radial-gradient';
import RadialGradient from '../../components/molecules/radialGradient';
import DropShadow from 'react-native-drop-shadow';
import ProfileDots from '../../components/atoms/CustomCorousel/ProfileDots';
import customStyling from '../../shared/services/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const AvatarSelection = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const H = Dimensions.get('window').height;
  const W = Dimensions.get('window').width;
  const [selectedValue, setSelectedValue] = useState(0);
  const [opacity, setOpacity] = useState(0.6);
  const [increment, setIncrement] = useState(-0.01);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(prevOpacity => {
        const newOpacity = prevOpacity + increment;
        if (newOpacity <= 0 || newOpacity >= 0.6) {
          setIncrement(prevIncrement => -prevIncrement);
        }

        return Math.max(0, Math.min(1, newOpacity));
      });
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [increment]);

  const userDetails = useSelector(state => state.common.userDetails);

  const onNext = () => {
    dispatch(
      setUserDetails({
        ...userDetails,
        avatar: profileConfigurations[selectedValue],
      }),
    );
    navigation.navigate(NAVIGATION_SCREENS.IDENTITY_SELECTION)
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

  const renderItem = item => {
    return (
      <DropShadow
        style={{
          shadowOpacity: opacity,
          shadowColor: item?.imgColor || 'white',
          shadowRadius: 80,
          borderRadius: 50,
          backgroundColor: 'transparent',
        }}>
        <View style={[styles.profileContainer]}>
          <ProfileDots
            color={item?.imgColor || 'white'}
            centerSvg={item?.image(_scaleText(H * 0.15).fontSize)}
          />
          {item?.image(
            _scaleText(H * (Platform.OS == 'android' ? 0.18 : 0.15)).fontSize,
          )}
        </View>
      </DropShadow>
    );
  };

  const renderMiddleHeader = () => (
    <View style={customStyling.paginationContainer}>
      {CREATE_PROFILE.map((_, index) => (
        <View
          key={index}
          style={[customStyling.paginationDot(index === 0)]}
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
        // height:50
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={customStyling.containerWithHeader}>
      <RadialGradient color="#7F43FF" />
      <Radial
        style={{width: W, height: H, position: 'absolute'}}
        colors={['rgba(67, 63, 229, 0.9)', 'transparent']}
        stops={[0, 1]}
        center={[W * 0.5, H * 0.7]}
        radius={300}></Radial>

      <Animated.View style={[styles.subContainer, {opacity: fadeAnim}]}>
        {renderItem(profileConfigurations[selectedValue])}
      </Animated.View>
      <AvatarActionSheet
        setSelectedValue={setSelectedValue}
        onNext={onNext}
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default AvatarSelection;
