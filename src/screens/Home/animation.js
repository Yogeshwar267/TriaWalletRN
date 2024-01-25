import {useEffect} from 'react';
import {View, Animated, Easing, Dimensions, Image} from 'react-native';
import {ICONS} from '../../shared/constants/icons';
import {Shadow} from 'react-native-shadow-2';
import styles from './styles';
import {images} from '../../shared';
import {_scaleText} from '../../shared/services/utility';

function LandingAnimation() {
  // const logos = [
  //   ICONS.BLUR_FANTOM(30),
  //   ICONS.BLUR_POLYGON(50),
  //   ICONS.BLUR_CELO(45),
  //   ICONS.BLUR_BTC_STACKS(30),
  //   ICONS.BLUR_OPTIMISM(40),
  //   ICONS.BLUR_ETHEREUM(55),
  //   ICONS.BLUR_BINANCE(40),
  // ];
  const logos = [
    {image: images.BLUR_FANTOM, size: 30},
    {image: images.BLUR_POLYGON, size: 50},
    {image: images.BLUR_CELO, size: 45},
    {image: images.BLUR_BTC_STACKS, size: 30},
    {image: images.BLUR_OPTIMISM, size: 40},
    {image: images.BLUR_ETHEREUM, size: 55},
    {image: images.BLUR_BINANCE, size: 40},
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
          duration: 1000, // Adjust the duration as needed
          easing: Easing.linear,
          useNativeDriver: true, // Make sure to set this to true for better performance
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
          paintInside={true}
          style={{
            shadowColor: '#B28EFF',
            shadowOffset: {width: 5, height: 5},
            shadowOpacity: 0.4,
            shadowRadius: 15,
            borderRadius: 20,
            elevation: 15,
            backgroundColor: 'transparent',
          }}>
          {ICONS.TRIA_LOGO(100)}
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
              {/* {logo} */}
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
