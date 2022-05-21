import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

interface ProfileProps {
  navigation: {
    navigate: Function;
  };
}

const Profile: React.FC<ProfileProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Change screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
