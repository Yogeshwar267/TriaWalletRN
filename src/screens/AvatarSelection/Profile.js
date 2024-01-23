import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {_scaleText} from '../../shared/services/utility';

import color from 'tinycolor2';
import styles from './styles';
import {profileConfigurations} from './constants';
import DropShadow from 'react-native-drop-shadow';

const Profile = () => {
  const [opacity, setOpacity] = useState(1);
  const [increment, setIncrement] = useState(-0.01);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(prevOpacity => {
        const newOpacity = prevOpacity + increment;
        if (newOpacity <= 0.2 || newOpacity >= 1) {
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
    <View style={styles.ImageContainer}>
      {profileConfigurations.map((item, index) => (
        <View
          style={{
            top: item.top,
            left: item.left,
            position: 'absolute',
          }}
          key={index}>
          <View
            style={[
              styles.containerProfile,
              {transform: [{rotate: `${item.rotation}deg`}]},
            ]}>
            <DropShadow
              style={{
                shadowOpacity: opacity,
                shadowColor: item.imgColor,
                shadowRadius: 30,
                borderRadius: 30,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                backgroundColor: 'transparent',
              }}>
              <View
                style={{
                  borderRadius: 100,
                  backgroundColor: item.imgColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {item?.image}
              </View>
            </DropShadow>
            <View
              style={{
                borderRadius: _scaleText(8).fontSize,
                backgroundColor: color(item.imgColor).darken(20).toString(),
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: _scaleText(10).fontSize,
                paddingVertical: _scaleText(5).fontSize,
              }}>
              <Text style={{color: 'white'}}>cathy@ter</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Profile;
