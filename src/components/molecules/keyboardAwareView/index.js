import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {_scaleText} from '../../../shared/services/utility';

const KeyboardAwareView = ({children}) => {
  const [keyboardVerticalOffset, setKeyboardVerticalOffset] = useState(0);

  const handleKeyboardDidShow = event => {
    setKeyboardVerticalOffset(event.endCoordinates.height);
  };

  const handleKeyboardDidHide = () => {
    setKeyboardVerticalOffset(0);
  };

  useEffect(() => {
    function onKeyboardDidShow(e) {
      // Remove type here if not using TypeScript
      setKeyboardVerticalOffset(e.endCoordinates.height);
    }

    function onKeyboardDidHide() {
      setKeyboardVerticalOffset(0);
    }

    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <>
      {Platform.OS === 'android' ? (
        <KeyboardAvoidingView
          style={styles.container}
          contentContainerStyle={styles.content}
          behavior="position"
          keyboardVerticalOffset={0}>
          {children}
        </KeyboardAvoidingView>
      ) : (
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1}}
          style={styles.container}
          extraHeight={_scaleText(65).fontSize}
          enableOnAndroid
          scrollEnabled={true}>
          {children}
        </KeyboardAwareScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
  },
});

export default KeyboardAwareView;
