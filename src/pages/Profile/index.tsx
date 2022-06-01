import React from 'react';
import {Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainBottomTabParamList} from '../MainBottomTabParams';

type profileScreenProp = StackNavigationProp<MainBottomTabParamList, 'Profile'>;

const Profile: React.FC = () => {
  const navigation = useNavigation<profileScreenProp>();

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
