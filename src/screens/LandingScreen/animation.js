import {useEffect} from 'react';
import {View, Animated, Easing, Dimensions, Image} from 'react-native';
import {ICONS} from '../../shared/constants/icons';
import {Shadow} from 'react-native-shadow-2';
import styles from './styles';
import {images} from '../../shared';
import {_scaleText} from '../../shared/services/utility';
import { isTablet } from 'react-native-device-info';

function LandingAnimation() {
  const logos = [
    {image: images.BLUR_FANTOM, size: isTablet() ? 30* 1.5 :  30},
    {image: images.BLUR_POLYGON, size: isTablet() ? 50* 1.5 :  50},
    {image: images.BLUR_CELO, size: isTablet() ? 45* 1.5 :  45},
    {image: images.BLUR_BTC_STACKS, size: isTablet() ? 30* 1.5 :  30},
    {image: images.BLUR_OPTIMISM, size: isTablet() ? 40* 1.5 :  40},
    {image: images.BLUR_ETHEREUM, size: isTablet() ? 55* 1.5 :  55},
    {image: images.BLUR_BINANCE, size: isTablet() ? 40* 1.5 :  40},
  ];
  const radius = Dimensions.get('screen').width / 3;
  const angle = (2 * Math.PI) / logos.length;
  const fadeInAnimations = logos.map(() => new Animated.Value(0));

  const circleStyles = {
    width: radius * 2,
    height: radius * 2.2,
    justifyContent: 'center',
    alignItems: 'center',
  };

  useEffect(() => {
    Animated.stagger(
      10,
      fadeInAnimations.map(anim =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 1000, 
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ),
    ).start();
  }, []);

  return (
    <View>
      <Animated.View
        style={[
          {
            flex: 1,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: _scaleText(10).fontSize,
            marginLeft: _scaleText(10).fontSize,
            position: 'absolute',
          },
        ]}>
        <Shadow
          style={{
            shadowColor: '#B28EFF',
            shadowOffset: {width: isTablet() ? 15 : 5, height:isTablet() ? 15 : 5},
            shadowOpacity: isTablet() ? 0.2 : 0.4,
            shadowRadius: 15,
            borderRadius: 20,
            elevation: isTablet() ? 40 : 15,
            backgroundColor: 'transparent',
          }}>
          {ICONS.TRIA_LOGO( isTablet() ? 160: 100)}
        </Shadow>
      </Animated.View>
      <View style={circleStyles}>
        {logos?.map((logo, index) => {
          const logoX = radius * Math.cos(index * angle);
          const logoY = radius * Math.sin(index * angle);

          const logoStyle = {
            position: 'absolute',
            left: radius + logoX - 20,
            top: radius - 10 + logoY,
          };

          return (
            <Animated.View
              key={index}
              style={[
                styles.logoContainer,
                logoStyle,
                {opacity: fadeInAnimations[index]},
              ]}>
              <Image
                source={logo.image}
                style={{
                  height: logo.size + 15,
                  width: logo.size + 15,
                  objectFit: 'contain',
                }}
              />
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}

export default LandingAnimation;
