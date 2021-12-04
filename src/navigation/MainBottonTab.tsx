import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ScreenNames} from './RootNavigation';
import {JobsHomeStackScreen} from './routes/JobsHomeNavigation';
import Icon from '../components/Icon';
const Tab = createBottomTabNavigator();
const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.JOBSHOME}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={ScreenNames.JOBSHOME}
        component={JobsHomeStackScreen}
        options={{
          tabBarLabel: 'Jobs',
          tabBarIcon: () => <Icon name="briefcase" size={30} color="#900" />,
          // tabBarIcon: 'filter',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
