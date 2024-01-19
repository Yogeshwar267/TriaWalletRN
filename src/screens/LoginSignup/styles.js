import {StyleSheet, Dimensions} from 'react-native';
import {_scaleText} from '../../shared/services/utility';
import {TEXT_STYLES} from '../../shared/constants/styles';

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subContainer:{
    alignItems: 'center',
    justifyContent:"center",
    paddingVertical:_scaleText(25).fontSize
  },
  whiteText: {
    color: '#fff',
  },
  GUEST_TEXT:{
    color: 'rgba(255,255,255, 0.4)',
    marginVertical: _scaleText(20).fontSize,
    fontFamily: 'Cabrion-Regular',
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
    backgroundColor: 'white',
    paddingVertical: _scaleText( Platform.OS == 'android' ? 12 :10).fontSize,
    paddingHorizontal: _scaleText(10).fontSize,
    marginVertical: _scaleText(Platform.OS == 'android' ? 8 :6).fontSize,
    minWidth: '90%',
    borderRadius: 40,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255, 0.15)',
    paddingVertical: _scaleText(Platform.OS == 'android' ? 12 :10).fontSize,
    paddingHorizontal: _scaleText(10).fontSize,
    marginVertical: _scaleText(Platform.OS == 'android' ? 8 :6).fontSize,
    minWidth: '90%',
    borderRadius: 40,
    alignItems: 'center',
    flexDirection:"row",
    justifyContent:"center",
  },
  buttonInner: {
    // ... adjust if needed ...
  },
  buttonText: {
    fontWeight: '700',
    fontFamily: 'Cabrion-Bold',
    color:"black"
  },
  secondaryText:{
    fontFamily: 'Cabrion-Bold',
    fontWeight: 500,
    alignItems: 'flex-start' ,
    justifyContent:"flex-start"
  },
  guestText: {
    textDecorationLine: 'underline',
  },
  logoContainer: {
    width: 50, // Adjust the size of logos here
    height: 50, // Adjust the size of logos here
  },
  buttonContainer: {
    alignSelf:"center",
    alignContent: 'center',
    alignItems: 'center',
    bottom:_scaleText(10).fontSize,
    position:"absolute",
    marginTop: _scaleText(40).fontSize,
  },
  buttonSubContainer:{
    alignSelf:"center",
    alignContent: 'center',
    alignItems: 'center',
    justifyContent:"center",
  },
  fontLight:{
    fontFamily: 'Cabrion-Light',
    fontWeight:200,
    marginBottom:_scaleText(10).fontSize
  },
  animationContainer:{
    height:_scaleText(H *0.30).fontSize,
    width:_scaleText(W *0.85).fontSize
  }
});

export default styles;
