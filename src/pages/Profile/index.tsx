import React from 'react';
import {Text, View} from 'react-native';
import NavigationProps from '../../utils/NavigationProps.types';

const Profile: React.FC<NavigationProps> = ({navigation}) => {
  return (
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
        Profile Screen
      </Text>
    </View>
  );
};

export default Profile;
