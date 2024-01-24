import {StyleSheet, Dimensions, Platform} from 'react-native';
import {_scaleText, isIpad} from '../../shared/services/utility';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {isTablet} from 'react-native-device-info';

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // ...(Platform.OS == 'android' ? {marginTop: _scaleText(25).fontSize} : {}),
  },
  actionContainer: {
    minHeight: Dimensions.get("screen").height * (isIpad() ? 0.35 : 0.4),
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
    // paddingVertical: _scaleText(25).fontSize,
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
  primaryButton: {
    backgroundColor: 'rgba(250, 250, 250, 1)',
    paddingVertical: _scaleText(10).fontSize,
    paddingHorizontal: _scaleText(70).fontSize,
    marginVertical: _scaleText(10).fontSize,
    // maxWidth:"65%",
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
    // fontWeight: '5',
    fontFamily: 'Cabrion-Bold',
    // borderRadius:_scaleText(12).fontSize,
    // alignItems: 'center',
    justifyContent: 'center',
    // height:"100%",
    minWidth: '85%',
    // borderColor:"white",borderWidth:1
  },
  secondaryTextInputContainer: {
    backgroundColor: 'rgba(255,255,255, 0.15)',
    paddingVertical: _scaleText(10).fontSize,
    paddingHorizontal: _scaleText(10).fontSize,
    marginVertical: _scaleText(6).fontSize,
    borderRadius: _scaleText(12).fontSize,
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  buttonInner: {
    // ... adjust if needed ...
  },
  buttonText: {
    fontWeight: '700',
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
    width: 50, // Adjust the size of logos here
    height: 50, // Adjust the size of logos here
  },
  avatarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: _scaleText(60).fontSize,
  },
  galleryButton: {
    // left:10
  },
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
    marginTop: _scaleText(10).fontSize,
    marginBottom: _scaleText(20).fontSize,
    // borderColor:"white",borderWidth:1
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
    // borderColor:"white",borderWidth:1
  },
  ImageContainer: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',

    // borderWidth: 1,
    // borderColor: 'green',
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
    width: W,
    height: H * (Platform.OS == "ios" ? 0.47 : 0.494),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  profileSvg: {
    width: W,
    height: H * (Platform.OS == "ios" ? 0.47 : 0.494),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    bottom: _scaleText(Platform.OS == 'android' ? 10 : 25).fontSize,
    position: 'absolute',
  },
  colorContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: _scaleText(15).fontSize,
    marginBottom: _scaleText(15).fontSize,
    paddingHorizontal: _scaleText(20).fontSize,
  },
});

export default styles;
