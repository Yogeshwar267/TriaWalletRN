import React, {useEffect} from 'react';
import {
  Pressable,
  StatusBar,
  Platform,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useTheme} from '../hooks';
import LandingScreen from '../screens/LandingScreen';
import {NAVIGATION_SCREENS} from './constants';
import LoginSignup from '../screens/LoginSignup';
import {ICONS} from '../shared/constants/icons';
import {_scaleText} from '../shared/services/utility';
import CreateTriaName from '../screens/CreateTriaName';
import CreatePassword from '../screens/CreatePassword';
import HomePage from '../screens/Home';
import GlobalFont from 'react-native-global-font';
import AvatarSelection from '../screens/AvatarSelection';
import InterestSelection from '../screens/SelectInterests';
import ThemeSelection from '../screens/ThemeSelector';
import IdentityCard from '../screens/IdentityCard';

const Stack = createStackNavigator();
const ApplicationNavigator = () => {
  const {darkMode, NavigationTheme} = useTheme();
  const navigationRef = useNavigationContainerRef();
  // useFlipper(navigationRef);
  const backButtonHeader = {
    headerShown: true,
    headerTransparent: true,
    headerLeft: ({onPress}) => (
      <Pressable
        style={{
          top: _scaleText(Platform.OS == 'android' ? 35 : 15).fontSize,
          paddingHorizontal: _scaleText(Platform.OS == 'android' ? 30 : 15)
            .fontSize,
          position: 'absolute',
        }}
        hitSlop={_scaleText(26).fontSize}
        onPress={onPress}>
        {ICONS.ARROW_LEFT(_scaleText(25).fontSize)}
      </Pressable>
    ),
    headerTitle: () => null,
    headerStyle: {
      backgroundColor: '#0000',
      height: _scaleText(25).fontSize,
    },
  };

  useEffect(() => {
    let fontName = 'Cabrion-Regular';
    GlobalFont.applyGlobal(fontName);
  }, []);

  return (
    <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
      <StatusBar
        barStyle={false || darkMode ? 'light-content' : 'dark-content'}
      />
      <Stack.Navigator
        initialRouteName={NAVIGATION_SCREENS.LANDING}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={NAVIGATION_SCREENS.LANDING}
          component={LandingScreen}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.LOGIN_SIGNUP}
          component={LoginSignup}
          options={backButtonHeader}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.CREATE_USERNAME}
          component={CreateTriaName}
          options={backButtonHeader}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.CREATE_PASSWORD}
          component={CreatePassword}
          options={backButtonHeader}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.AVATAR_SELECTION}
          component={AvatarSelection}
          options={backButtonHeader}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.IDENTITY_SELECTION}
          component={IdentityCard}
          options={backButtonHeader}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.THEME_SELECTION}
          component={ThemeSelection}
          options={backButtonHeader}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.INTEREST}
          component={InterestSelection}
          options={backButtonHeader}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.HOME_PAGE}
          component={HomePage}
          options={{headerShown: false, gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ApplicationNavigator;
