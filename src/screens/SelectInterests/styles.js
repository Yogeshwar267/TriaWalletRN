import {StyleSheet, Dimensions, Platform} from 'react-native';
import {_scaleText, isIpad} from '../../shared/services/utility';
import {isTablet} from 'react-native-device-info';

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  actionContainer: {
    minHeight: Dimensions.get('screen').height * (isIpad() ? 0.35 : 0.4),
    backgroundColor: 'black',
    alignItems: 'center',
  },
  actionheader: {
    backgroundColor: '#202020',
    width: _scaleText(50).fontSize,
    height: _scaleText(8).fontSize,
    marginTop: _scaleText(15).fontSize,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
    width: '100%',
  },
  whiteText: {
    color: '#fff',
  },
  GUEST_TEXT: {
    color: 'rgba(255,255,255, 0.4)',
    marginBottom: _scaleText(10).fontSize,
    fontFamily: 'Cabrion-Regular',
  },
  placeholder: {
    color: 'rgba(255,255,255, 0.4)',
    fontFamily: 'Cabrion-Regular',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  availibaleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  usernameSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  availibale: {
    color: '#14AE5C',
    justifyContent: 'center',
    marginHorizontal: _scaleText(5).fontSize,
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
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 10,
    borderColor: 'black',
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
  primaryButton: {
    backgroundColor: 'rgba(250, 250, 250, 1)',
    paddingVertical: _scaleText(10).fontSize,
    paddingHorizontal: _scaleText(70).fontSize,
    marginVertical: _scaleText(10).fontSize,

    borderRadius: 40,
    alignItems: 'center',
    alignSelf: 'center',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255, 0.15)',
    paddingVertical: _scaleText(10).fontSize,
    paddingHorizontal: _scaleText(10).fontSize,
    marginVertical: _scaleText(6).fontSize,
    minWidth: '90%',
    borderRadius: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  secondaryTextInput: {
    color: 'rgba(255,255,255, 0.8)',

    fontFamily: 'Cabrion-Bold',

    justifyContent: 'center',

    minWidth: '85%',
  },
  secondaryTextInputContainer: {
    backgroundColor: 'rgba(255,255,255, 0.15)',
    paddingVertical: _scaleText(10).fontSize,
    paddingHorizontal: _scaleText(10).fontSize,
    marginVertical: _scaleText(6).fontSize,
    borderRadius: _scaleText(12).fontSize,

    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  buttonInner: {},
  buttonText: {
    fontWeight: 700,
    fontFamily: 'Cabrion-Bold',
    color: 'black',
  },
  secondaryText: {
    fontFamily: 'Cabrion-Bold',
    fontWeight: 500,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  guestText: {
    textDecorationLine: 'underline',
  },
  logoContainer: {
    width: 50,
    height: 50,
  },
  avatarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: _scaleText(60).fontSize,
  },
  galleryButton: {},
  regenarteBUtton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: _scaleText(W * 0.65).fontSize,
  },
  regeneratePressable: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: _scaleText(30).fontSize,
  },
  buttonContainer: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',

    marginBottom: _scaleText(isIpad() ? 40 : 20).fontSize,
  },
  buttonSubContainer: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontLight: {
    fontFamily: 'Cabrion-Light',
    fontWeight: 200,
    marginBottom: _scaleText(10).fontSize,
  },
  animationContainer: {
    height: H * 0.35,
    width: W * 0.9,
  },
  ImageContainer: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  containerProfile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  radialGradient: {
    borderColor: 'white',
    borderWidth: 2,
    margin: _scaleText(5).fontSize,
  },
  freeContainer: {
    backgroundColor: 'rgba(255,255,255, 0.15)',
    borderRadius: _scaleText(20).fontSize,
    paddingVertical: _scaleText(3).fontSize,
    paddingHorizontal: _scaleText(12).fontSize,
  },
  freeText: {
    fontFamily: 'Cabrion-Bold',
    fontWeight: 500,
    color: '#FFFF',
  },
  keyboardSafeAreaView: {
    flex: 1,
  },
  keyboardSafeAreaViewChild: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  profileContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '60%',
  },
  profileSvg: {
    width: W,
    height: H * (Platform.OS == 'ios' ? 0.47 : 0.494),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    top: 0,
    position: 'absolute',
  },
  colorContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-evenly',
    marginTop: _scaleText(5).fontSize,
    marginBottom: _scaleText(15).fontSize,
    paddingHorizontal: _scaleText(20).fontSize,
  },
  chips: color => ({
    borderColor: color,
    borderWidth: _scaleText(isTablet() ? 1 : Platform.OS == 'android' ? 4 : 1)
      .fontSize,
    borderRadius: 25,
    marginVertical: _scaleText(Platform.OS == 'android' ? 7 : 5).fontSize,
    marginHorizontal: _scaleText(Platform.OS == 'android' ? 5 : 3).fontSize,
  }),
  chipsText: color => ({
    paddingHorizontal: _scaleText(Platform.OS == 'android' ? 13 : 10).fontSize,
    paddingVertical: _scaleText(Platform.OS == 'android' ? 10 : 4).fontSize,
    color: color,
  }),
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: _scaleText(
      isTablet() ? 100 : Platform.OS == 'android' ? 40 : 20,
    ).fontSize,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: _scaleText(5).fontSize,
    marginBottom: _scaleText(15).fontSize
  },
  chipsContainerIdentity: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: W * (isIpad() ? 0.4 : isTablet() ? 0.45 : 0.6),

    paddingHorizontal: _scaleText(25).fontSize,

    marginVertical: _scaleText(20).fontSize,
  },
  chipsTextIdentity: {
    paddingHorizontal: _scaleText(Platform.OS == 'android' ? 10 : 10).fontSize,
    paddingVertical: _scaleText(Platform.OS == 'android' ? 8 : 4).fontSize,
  },
  chipsIdentity: {
    borderColor: 'white',
    borderWidth: _scaleText(isTablet() ? 1 : Platform.OS == 'android' ? 3.8 : 1)
      .fontSize,
    borderRadius: 25,
    marginVertical: _scaleText(Platform.OS == 'android' ? 8 : 5).fontSize,
    marginHorizontal: _scaleText(Platform.OS == 'android' ? 5 : 2).fontSize,
  },
  xpContainer: {
    borderWidth: isTablet() ? 2 : Platform.OS == 'android' ? 1 : 1,
    borderColor: 'rgba(211, 184, 44, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    top: _scaleText(Platform.OS == 'android' ? 15 : 10).fontSize,
    marginRight: _scaleText(25).fontSize,
  },
  xpText: {
    color: 'rgba(221, 200, 90, 1)',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: _scaleText(isTablet() ? 15 : 10).fontSize,
    paddingVertical: _scaleText(isTablet() ? 10 : 7).fontSize,
    fontSize: _scaleText(14).fontSize,
  },
  sparkles: {
    position: 'absolute',
    top: _scaleText(isTablet() ? -13 : Platform.OS == 'android' ? -5 : -10)
      .fontSize,
    right: _scaleText(isTablet() ? -13 : Platform.OS == 'android' ? -5 : -10)
      .fontSize,
  },
});

export default styles;
