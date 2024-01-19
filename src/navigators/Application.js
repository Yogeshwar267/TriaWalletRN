import React from 'react';
import {Pressable, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useTheme} from '../hooks';
import {useFlipper} from '@react-navigation/devtools';
import LandingScreen from '../screens/LandingScreen';
import WelcomeScreen from '../screens/Welcome';
import {NAVIGATION_SCREENS} from './constants';
import LoginSignup from '../screens/LoginSignup';
import {ICONS} from '../shared/constants/icons';
import {_scaleText} from '../shared/services/utility';
import CreateTriaName from '../screens/CreateTriaName';
import CreatePassword from '../screens/CreatePassword';
const Stack = createStackNavigator();
// @refresh reset
const ApplicationNavigator = () => {
  const {Layout, darkMode, NavigationTheme} = useTheme();
  const {colors} = NavigationTheme;
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  const backButtonHeader = {
    headerShown: true,
    headerLeft: ({onPress}) => (
      <Pressable
        style={{
          paddingVertical: _scaleText(10).fontSize,
          paddingHorizontal: _scaleText(20).fontSize,
          position:"absolute"
        }}
        onPress={onPress}>
        {ICONS.ARROW_LEFT(25)}
      </Pressable>
    ),
    headerTitle: () => null,
    headerStyle: {
      backgroundColor: 'transparent',
    },
  };

  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor: 'black'}]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator
          initialRouteName={NAVIGATION_SCREENS.LANDING}
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={NAVIGATION_SCREENS.WELCOME}
            component={WelcomeScreen}
          />
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default ApplicationNavigator;
