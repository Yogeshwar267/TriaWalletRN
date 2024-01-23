import {StyleSheet, Dimensions, Platform} from 'react-native';
import {_scaleText, isIpad} from '../../shared/services/utility';
import {TEXT_STYLES} from '../../shared/constants/styles';
import {isTablet} from 'react-native-device-info';

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  GUEST_TEXT: {
    color: 'rgba(255,255,255, 0.4)',
    marginVertical: _scaleText(20).fontSize,
    fontFamily: 'Cabrion-Regular',
  },
  balanceOuterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceText: {
    color: 'rgba(255,255,255, 0.4)',
    marginVertical: _scaleText(5).fontSize,
    fontFamily: 'Cabrion-Regular',
  },
  profitText: {
    color: 'rgba(56, 207, 31, 1)',
    marginRight: _scaleText(5).fontSize,
    fontFamily: 'Cabrion-Regular',
  },
  balanceSub: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceSubText: {
    marginRight: _scaleText(5).fontSize,
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
    marginTop: _scaleText(50).fontSize,
    minWidth: '90%',
    borderRadius: 40,
    alignItems: 'center',
  },
  buttonInner: {
    // ... adjust if needed ...
  },
  buttonText: {
    color: 'black',
    fontWeight: 700,
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
    marginTop: _scaleText(40).fontSize,
  },
  rightHeader: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // width: W * (isTablet() ? 0.3 : 0.65),
    height: H * 0.05,
    alignItems: 'center',
  },
  xpContainer: {
    borderWidth: isTablet() ? 2 : Platform.OS == 'android' ? 1 : 1,
    borderColor: 'rgba(211, 184, 44, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
  },
  xpText: {
    color: 'rgba(221, 200, 90, 1)',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: _scaleText(isTablet() ? 15 : 10).fontSize,
    paddingVertical: _scaleText(isTablet() ? 10 : 7).fontSize,
  },
  sparkles: {
    position: 'absolute',
    top: _scaleText(isTablet() ? -13 : Platform.OS == 'android' ? -5 :  -10).fontSize,
    right: _scaleText(isTablet() ? -13 : Platform.OS == 'android' ? -5 : -10).fontSize,
  },
  balanceContainer: {
    marginTop: _scaleText(10).lineHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: _scaleText(W * 0.75).fontSize,
    flexDirection: 'row',
  },
  balanceSubContainer: {
    marginTop: _scaleText(5).lineHeight,
    flexDirection: 'row',
    alignItems: 'center',
    width: _scaleText(W * 0.75).fontSize,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: _scaleText(10).fontSize,
    marginVertical: _scaleText(20).fontSize,
    alignItems: 'center',
    alignContent: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(21, 21, 21, 1)',
    borderRadius: 20,
    marginVertical: _scaleText(5).fontSize,
    marginHorizontal: _scaleText(5).fontSize,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingVertical: _scaleText(isIpad() ? 30 : 15).fontSize,
  },
  buttonFont: {
    color: 'rgba(255,255,255, 0.4)',
    marginVertical: _scaleText(5).fontSize,
    fontFamily: 'Cabrion-Regular',
  },
});

export default styles;
