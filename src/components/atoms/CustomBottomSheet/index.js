import React, {useEffect, useMemo, useRef} from 'react';
import {
  View,
  Easing,Animated, Platform
} from 'react-native';
import customStyling from '../../../shared/services/styles';
import {_scaleText} from '../../../shared/services/utility';

const BottomSheet = ({
  id = 0,
  isModalVisible = false,
  setModalVisible = () => {},
  children,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
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
      easing: Easing.linear
    }).start();
  }, [fadeAnim, buttonAnim]);

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
    <Animated.View
      style={[
        animatedButtonStyle,
        {
          position: 'absolute',
          bottom: -0,
          width: '100%',
        },
      ]}
      key={id}>
      <View
        isVisible={true}
        key={id}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        hasBackdrop={false}
        style={{
          backgroundColor: 'black',
          borderTopStartRadius: 45,
          borderTopEndRadius: 45,
          alignItems: 'center',
          paddingVertical:_scaleText(Platform.OS == 'android' ? 10 : 20).fontSize,
        }}>
        <View style={customStyling.actionheader} />
        {children}
      </View>
    </Animated.View>
  );
};

export default BottomSheet;
