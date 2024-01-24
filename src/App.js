import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './redux/store';
import ApplicationNavigator from './navigators/Application';
import './translations';
import {KeyboardAvoidingView, View} from 'react-native';
import KeyboardAwareView from './components/molecules/keyboardAwareView';
import {SheetProvider} from 'react-native-actions-sheet';
import SplashScreen from 'react-native-splash-screen';
import '../src/components/atoms/CustomActionSheet/sheet';
const App = () => {
  useEffect(()=>{
    SplashScreen.hide()
  },[])

  return (
    <Provider store={store}>
      <SheetProvider>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          <View style={{flex: 1}}>
            <KeyboardAwareView>
              <ApplicationNavigator />
            </KeyboardAwareView>
          </View>
        </PersistGate>
      </SheetProvider>
    </Provider>
  );
};
export default App;
