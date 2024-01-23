import {
  Animated,
  Dimensions,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {STRINGS} from '../../shared';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText} from '../../shared/services/utility';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {ICONS} from '../../shared/constants/icons';
import Profile from './Profile';
import {
  useNavigation,
  useFocusEffect,
  useIsFocused,
} from '@react-navigation/native';
import {NAVIGATION_SCREENS} from '../../navigators/constants';
import {useDispatch, useSelector} from 'react-redux';
import {setUserDetails} from '../../redux/actions/common';
import CustomTextField from '../../components/atoms/CustomTextField';
import Carousel from '../../components/atoms/CustomCorousel';
import {profileConfigurations} from './constants';
import {SheetManager} from 'react-native-actions-sheet';
import AvatarActionSheet from './ActionSheet';
import Radial from 'react-native-radial-gradient';
import RadialGradient from '../../components/molecules/radialGradient';
import DropShadow from 'react-native-drop-shadow';
import ProfileDots from '../../components/atoms/CustomCorousel/ProfileDots';

const AvatarSelection = ({reRender = false, setSelected}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const actionSheet = useRef();
  const H = Dimensions.get('window').height;
  const W = Dimensions.get('window').width;
  const [selectedValue, setSelectedValue] = useState(0);
  const [opacity, setOpacity] = useState(0.6);
  const [increment, setIncrement] = useState(-0.01);

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
    actionSheet.current.hide();
    setSelected(prev => prev + 1);
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
    if (
      !actionSheet.current.isOpen() &&
      (actionSheet.current?.show || !!reRender)
    ) {
      actionSheet.current.show();
    }
  }, [actionSheet.current, reRender]);

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

  return (
    <View style={styles.container}>
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
        setRef={ref => (actionSheet.current = ref)}
        setSelectedValue={setSelectedValue}
        onNext={onNext}
      />
    </View>
  );
};

export default AvatarSelection;
