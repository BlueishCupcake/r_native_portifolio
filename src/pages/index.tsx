import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import Profile from './Profile';

import HomeIcon from '../assets/icons/HomeIcon/HomeIcon';
import UserIcon from '../assets/icons/UserIcon/UserIcon';
import {MainBottomTabParamList} from './MainBottomTabParams';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

const Pages: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <HomeIcon />,
            tabBarActiveBackgroundColor: '#000',
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          initialParams={{userName: 'Guest'}}
          options={{
            tabBarIcon: () => <UserIcon />,
            tabBarActiveBackgroundColor: '#000',
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Pages;
