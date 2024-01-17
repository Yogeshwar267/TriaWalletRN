import {useEffect, useRef} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  Pressable,
} from 'react-native';
import {ICONS} from '../../shared/constants/icons';
import {Dimensions} from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {_scaleText} from '../../shared/services/utility';
import { images } from '../../shared';

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
    images.BLUR_FANTOM,
    images.BLUR_POLYGON,
    images.BLUR_CELO,
    images.BLUR_BTC_STACKS,
    images.BLUR_OPTIMISM,
    images.BLUR_ETHEREUM,
    images.BLUR_BINANCE,
  ];

const CircleLogos = () => {
  const radius = Dimensions.get('screen').width / 3; // Adjust this value as needed
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
      <Shadow
        style={{
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 0.4,
          shadowColor: '#B28EFF',
          shadowRadius: 15,
          borderRadius: 20,
          width: 100,
          height: 100,
          flex: 1,
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}>
        <Animated.View
          style={[
            {
              flex: 1,
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
            },
          ]}>
          {ICONS.TRIA_LOGO(100)}
        </Animated.View>
      </Shadow>
      <View style={circleStyles}>
        {logos.map((logo, index) => {
          const logoX = radius * Math.cos(index * angle);
          const logoY = radius * Math.sin(index * angle);

          const logoStyle = {
            position: 'absolute',
            left: radius + logoX - 20, // Adjust the size of logos here
            top: radius - 10 + logoY,
            // transform: [
            //   {rotate: `${Math.random() * 45}deg`}, // Random rotation
            // ],
          };

          return (
            <Animated.View
              key={index}
              style={[
                styles.logoContainer,
                logoStyle,
                {opacity: fadeInAnimations[index]},
              ]}>
                <Image src={logo}/>
              {/* {logo} */}
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

function LandingAnimation() {
  return (
    <View style={styles.container}>
      <Text style={[styles.whiteText, styles.titleText, TEXT_STYLES.H3]}>
        Experience Omni-Presence
      </Text>
      <View>
        <CircleLogos />
      </View>

      <View style={styles.textContainer}>
        <Animated.Text
          style={[
            styles.whiteText,
            {
              fontWeight: '700',
              fontFamily: 'Cabrion-Bold',
              fontSize: _scaleText(60).fontSize,
            },
          ]}>
          tria
        </Animated.Text>
        <Text
          style={[
            styles.whiteText,
            TEXT_STYLES.H3,
            {textAlign: 'center', marginTop: _scaleText(5).fontSize},
          ]}>
          {`One name,\nall things Web3`}
        </Text>

        <Pressable style={[styles.getStartedButton]}>
          <Text style={[TEXT_STYLES.H3, styles.buttonText]}>Get started</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default LandingAnimation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  titleText: {
    marginVertical: _scaleText(50).fontSize,
  },
  circleContainer: {
    position: 'relative',
    width: 300,
    height: 300,
  },
  circleBorder: {
    width: '100%',
    height: '100%',
    borderRadius: 150,
    borderWidth: 10,
    borderColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logoImage: {
    width: 170,
    height: 170,
    marginHorizontal: 70,
    marginTop: 60,
    borderWidth: 2,
    borderColor: 'white',
  },
  smallLogosContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 300, // Match circleBorder width
    height: 300, // Match circleBorder height
    borderRadius: 150, // Equal to circleBorder borderRadius
    borderWidth: 10, // Adjust as needed
    borderColor: 'black', // White border for circular line
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  smallLogo: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
  triaText: {
    marginTop: 40,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  descriptionText: {
    marginTop: 1,
    fontSize: 20,
    color: 'white',
  },
  getStartedButton: {
    backgroundColor: 'white',
    paddingVertical: _scaleText(10).fontSize,
    paddingHorizontal: _scaleText(10).fontSize,
    marginVertical: _scaleText(50).fontSize,
    minWidth: '90%',
    borderRadius: 40,
    alignItems: 'center',
  },
  buttonInner: {
    // ... adjust if needed ...
  },
  buttonText: {
    fontWeight: '700',
    fontFamily: 'Cabrion-Bold',
  },
  guestText: {
    textDecorationLine: 'underline',
  },
  logoContainer: {
    width: 50, // Adjust the size of logos here
    height: 50, // Adjust the size of logos here
  },
  textContainer: {
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: _scaleText(40).fontSize,
  },
});
