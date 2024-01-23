//import liraries
import React, { useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {_scaleText} from '../../shared/services/utility';
import {COLORS} from '../../shared';
import AvatarSelection from '../AvatarSelection';
import IdentityCard from '../IdentityCard';
import {ICONS} from '../../shared/constants/icons';
import ThemeSelection from '../ThemeSelector';
import InterestSelection from '../SelectInterests';
import {useTheme} from '../../hooks';
import {SafeAreaView} from 'react-native-safe-area-context';
import {isTablet} from 'react-native-device-info';
import customStyling from '../../shared/services/styles';

// create a component
const CreateProfile = () => {
  const navigation = useNavigation();
  const {Layout} = useTheme();
  const [selectedValue, setSelectedValue] = useState(0);

  const CREATE_PROFILE = [
    {AVATAR_CREATION: 0},
    {IDENTITY_CARD: 1},
    {THEME: 2},
    {CHOOSE_INTERESTS: 3},
  ];

  const renderMiddleHeader = () => (
    <View style={{flexDirection:"row", justifyContent:"space-between" , alignItems: "center",alignSelf:"center" , width: "90%",}}>
      <Pressable
        hitSlop={_scaleText(26).fontSize}
        onPress={() =>
          selectedValue == CREATE_PROFILE[0].AVATAR_CREATION
            ? navigation.goBack
            : setSelectedValue(prev => prev - 1)
        }>
        {ICONS.ARROW_LEFT(_scaleText(25).fontSize)}
      </Pressable>
      <View style={customStyling.paginationContainer}>
        {CREATE_PROFILE.map((_, index) => (
          <View
            key={index}
            style={[customStyling.paginationDot(index === selectedValue)]}
            //   onPress={() => handlePageChange(index)}
          />
        ))}
      </View>
      <Pressable
        hitSlop={_scaleText(26).fontSize}
        onPress={() => {}}>
        {ICONS.XP_ICON(_scaleText(isTablet() ? 90 : 80).fontSize)}
      </Pressable>
    </View>
  );

  const renderCreateProfile = () => {
    switch (selectedValue) {
      case CREATE_PROFILE[0].AVATAR_CREATION:
        return (
          <AvatarSelection
            reRender={CREATE_PROFILE[0].AVATAR_CREATION == selectedValue}
            setSelected={setSelectedValue}
          />
        );
      case CREATE_PROFILE[1].IDENTITY_CARD:
        return (
          <IdentityCard
            selected={selectedValue}
            reRender={CREATE_PROFILE[1].IDENTITY_CARD == selectedValue}
            setSelected={setSelectedValue}
          />
        );
      case CREATE_PROFILE[2].THEME:
        return (
          <ThemeSelection
            selected={selectedValue}
            reRender={CREATE_PROFILE[2].THEME == selectedValue}
            setSelected={setSelectedValue}
          />
        );
      case CREATE_PROFILE[3].CHOOSE_INTERESTS:
        return (
          <InterestSelection
            selected={selectedValue}
            reRender={CREATE_PROFILE[3].CHOOSE_INTERESTS == selectedValue}
            setSelected={setSelectedValue}
          />
        );
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor: 'black'}]}>
      {renderMiddleHeader()}
      <View style={styles.container}>{renderCreateProfile()}</View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: isActive => ({
    width: isActive ? _scaleText(70).fontSize : _scaleText(15).fontSize,
    height: _scaleText(6).fontSize,
    borderRadius: 5,
    marginHorizontal: _scaleText(5).fontSize,
    backgroundColor: isActive ? COLORS.WHITE : COLORS.WHITE_40,
  }),
});

//make this component available to the app
export default CreateProfile;
