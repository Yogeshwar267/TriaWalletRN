import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS} from '../../../shared';
import {_scaleText} from '../../../shared/services/utility';

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const Carousel = ({data, renderItem = () => {}}) => {
  const [increment, setIncrement] = useState(-0.01);
  const [selectedValue, setSelectedValue] = useState(0);

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
