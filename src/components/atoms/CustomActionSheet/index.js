//import liraries
import React from 'react';
import {View, Text } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

const CustomActionSheet = props => {

  return (
    <ActionSheet id={props.sheetId}>
      <View style={{height:456,width:568}}>
        <Text>Action Sheet using sheet manager</Text>
      </View>
    </ActionSheet>
  );
};

export default CustomActionSheet;
