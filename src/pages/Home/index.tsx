import Card from '../../components/Card';
import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainBottomTabParamList} from '../MainBottomTabParams';

type homeScreenProp = StackNavigationProp<MainBottomTabParamList, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#27293F',
        }}>
        <Card category="Category Test" title="Title Test" text="Text Test" />
      </View>
    </>
  );
};

export default Home;
