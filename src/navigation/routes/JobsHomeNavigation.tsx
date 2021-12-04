import React from 'react';
import {RootStack, Screen, ScreenNames} from '../RootNavigation';
import JobsHomeScreen from '../../screens/Jobs/JobsHomeScreen';
import TopHeaderLeftButton from '../../templates/TopHeaderLeftButton';
import TopHeaderRightButton from '../../templates/TopHeaderRightButton';
import {CommonActions} from '@react-navigation/routers';
// import TopHeaderLeftButton from '../../templates/TopHeaderLeftButton';
// import TopHeaderRightButton from '../../templates/TopHeaderRightButton';
// import {CommonActions} from '@react-navigation/native';

export const JobsHomeStackScreen = ({navigation}: any) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Screen.JOBSHOME_STACKSCREEN}
        component={JobsHomeScreen}
        options={{
          headerShown: true,
          title: 'Jobs',
          headerLeft: () => (
            <TopHeaderLeftButton openDrawer={() => navigation.openDrawer()} />
          ),
          headerRight: () => (
            <TopHeaderRightButton
              openNotifications={() =>
                navigation.dispatch(
                  CommonActions.navigate(ScreenNames.NOTIFICATION),
                )
              }
            />
          ),
        }}
      />
    </RootStack.Navigator>
  );
};
