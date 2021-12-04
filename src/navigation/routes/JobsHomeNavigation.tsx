import React from 'react';
import {RootStack, Screen} from '../RootNavigation';
import JobsHomeScreen from '../../screens/Jobs/JobsHomeScreen';
// import TopHeaderLeftButton from '../../templates/TopHeaderLeftButton';
// import TopHeaderRightButton from '../../templates/TopHeaderRightButton';
// import {CommonActions} from '@react-navigation/native';

export const JobsHomeStackScreen = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Screen.JOBSHOME_STACKSCREEN}
        component={JobsHomeScreen}
        options={{
          title: 'Dashboard',
          headerShown: true,
        }}
      />
    </RootStack.Navigator>
  );
};
