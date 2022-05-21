import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

interface HomeProps {
  navigation: {
    navigate: Function;
  };
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Change screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
