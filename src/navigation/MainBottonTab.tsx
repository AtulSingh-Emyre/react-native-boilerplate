import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {ScreenNames} from './RootNavigation';
import {useTheme} from 'react-native-paper';
import {JobsHomeStackScreen} from './routes/JobsHomeNavigation';

const Tab = createMaterialBottomTabNavigator();
const MainTabScreen = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.JOBSHOME}
      activeColor={theme.dark ? theme.colors.primary : theme.colors.surface}>
      {/* <Tab.Screen
        name={ScreenNames.JOBSHOME}
        component={JobsHomeStackScreen}
        options={{
          tabBarLabel: 'Jobs',
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default MainTabScreen;
