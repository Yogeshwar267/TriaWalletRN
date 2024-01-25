import {StyleSheet, Dimensions, Platform} from 'react-native';
import {_scaleText, isIpad} from '../../shared/services/utility';
import {isTablet} from 'react-native-device-info';
import {COLORS} from '..';

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const customStyling = StyleSheet.create({
  mainActionContainer: {
    height: 100,
  },
  containerWithHeader: {
    flex: 1,
    alignItems: 'center',
    marginTop: _scaleText(Platform.OS == 'android' ? 35 : 45).fontSize,
  },
  actionContainer: {
    flex: 1,
    height: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionheader: {
    backgroundColor: '#202020',
    width: _scaleText(80).fontSize,
    height: _scaleText(Platform.OS == 'android' ? 10 : 8).fontSize,
    borderRadius: 45,
    marginVertical: _scaleText(Platform.OS == 'android' ? 10 : 1).fontSize,
  },
  actionTitleContainer: {
    alignItems: 'center',
    marginHorizontal: _scaleText(10).fontSize,
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
  bottomNextContainer: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    bottom: _scaleText(20).fontSize,
    position: 'absolute',
    marginTop: _scaleText(40).fontSize,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: _scaleText(Platform.OS == 'android' ? 15 : 10).fontSize,
  },
  paginationDot: isActive => ({
    width: isActive ? _scaleText(70).fontSize : _scaleText(15).fontSize,
    height: _scaleText(6).fontSize,
    borderRadius: 5,
    marginHorizontal: _scaleText(5).fontSize,
    backgroundColor: isActive ? COLORS.WHITE : COLORS.WHITE_40,
  }),
  profileContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '60%',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  profileSvg: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: _scaleText(
      isIpad() ? 78 : isTablet() ? 90 : Platform.OS == 'android' ? 63 : 53,
    ).fontSize,
  },
  cardText: {
    justifyContent: 'space-between',
    width: W * (isTablet() ? 0.45 : 0.68),
    paddingLeft: _scaleText(45).fontSize,
    paddingRight: _scaleText(30).fontSize,
    flexDirection: 'row',
  },
});

export default customStyling;
