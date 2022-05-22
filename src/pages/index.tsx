import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import Profile from './Profile';

import HomeIcon from '../assets/icons/HomeIcon/HomeIcon';
import UserIcon from '../assets/icons/UserIcon/UserIcon';

const Pages: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <HomeIcon />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <UserIcon />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Pages;
