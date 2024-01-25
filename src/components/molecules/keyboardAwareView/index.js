import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {_scaleText} from '../../../shared/services/utility';

const KeyboardAwareView = ({children}) => {
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
          scrollEnabled={false}>
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
