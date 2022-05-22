import React from 'react';
import {Text, View} from 'react-native';

import NavigationProps from '../../utils/NavigationProps.types';

const Home: React.FC<NavigationProps> = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#27293F',
        }}>
        <Text
          style={{
            color: '#B80084',
          }}>
          Home Screen
        </Text>
      </View>
    </>
  );
};

export default Home;
