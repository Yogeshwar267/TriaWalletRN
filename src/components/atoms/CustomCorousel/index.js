import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import {COLORS} from '../../../shared';
import {_scaleText} from '../../../shared/services/utility';
import ProfileDots from './ProfileDots';
import DropShadow from 'react-native-drop-shadow';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../../../redux/actions/common';
import { NAVIGATION_SCREENS } from '../../../navigators/constants';

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const Carousel = ({
  data,
  navigation,
  renderItem = () => {},
  // selectedValue = 0,
  // setSelectedValue = () => {},
}) => {
  const dispatch = useDispatch() 
  const [opacity, setOpacity] = useState(1);
  const [increment, setIncrement] = useState(-0.01);
  const [selectedValue,setSelectedValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(prevOpacity => {
        const newOpacity = prevOpacity + increment;
        if (newOpacity <= 0 || newOpacity >= 1.5) {
          setIncrement(prevIncrement => -prevIncrement);
        }

        return Math.max(0, Math.min(1, newOpacity));
      });
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [increment]);

  const handlePageChange = index => {
    setSelectedValue(index);
  };

  // const renderItem = ({item, index}) => (
  //   <DropShadow
  //     key={index}
  //     style={{
  //       shadowOpacity: opacity,
  //       shadowColor: item.imgColor,
  //       shadowRadius: 80,
  //       borderRadius: 50,
  //       backgroundColor: 'transparent',
  //     }}>
  //     <View key={index} style={[styles.profileContainer]}>
  //       <ProfileDots
  //         color={item.imgColor}
  //         centerSvg={item.image(_scaleText(H * 0.15).fontSize)}
  //       />
  //       {item.image(
  //         _scaleText(H * (Platform.OS == 'android' ? 0.25 : 0.15)).fontSize,
  //       )}
  //     </View>
  //   </DropShadow>
  // );

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.paginationDot(index === selectedValue)]}
          onPress={() => handlePageChange(index)}
        />
      ))}
    </View>
  );
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     headerTitle: () => renderPagination(),
  //     headerTitleAlign: 'center',
  //     headerStyle: {
  //       backgroundColor: 'transparent',
  //     },
  //   });
  // }, [navigation, selectedValue]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={event => {
          const {contentOffset} = event.nativeEvent;
          const currentIndex = Math.round(
            contentOffset.x / Dimensions.get('window').width,
          );
          setSelectedValue(currentIndex);
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselItem: imgColor => ({
    borderRadius: _scaleText(H * 0.2).fontSize,
    backgroundColor: imgColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: _scaleText(H * 0.2).fontSize,
    height: _scaleText(H * 0.2).fontSize,
  }),
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
  },
  paginationDot: isActive => ({
    width: isActive ? _scaleText(70).fontSize : _scaleText(15).fontSize,
    height: _scaleText(4).fontSize,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: isActive ? COLORS.WHITE : COLORS.WHITE_40,
  }),
  profileContainer: {
    width: W,
    height: H * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default Carousel;
