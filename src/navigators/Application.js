import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useTheme} from '../hooks';
import MainNavigator from './Main';
import {useFlipper} from '@react-navigation/devtools';
import LandingScreen from '../screens/LandingScreen';
import WelcomeScreen from '../screens/Welcome';
import { Startup } from '../screens';
import { NAVIGATION_SCREENS } from './constants';
const Stack = createStackNavigator();
// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  return (
  <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
    <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'}/>
      <Stack.Navigator initialRouteName={NAVIGATION_SCREENS.LANDING} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={NAVIGATION_SCREENS.WELCOME} component={WelcomeScreen}/>
        <Stack.Screen name={NAVIGATION_SCREENS.LANDING} component={LandingScreen}/>
        {/* <Stack.Screen name="Main" component={MainNavigator}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>);
};
export default ApplicationNavigator;
