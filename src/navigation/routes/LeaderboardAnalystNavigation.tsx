import React from 'react';
import {RootStack, Screen, ScreenNames} from '../RootNavigation';
import LeaderboardAnalyst from '../../screens/LeaderboardAnalyst';
import TopHeaderLeftButton from '../../templates/TopHeaderLeftButton';
import TopHeaderRightButton from '../../templates/TopHeaderRightButton';
import { CommonActions } from '@react-navigation/native'

export const LeaderboardAnalystStackScreen = ({navigation}: any) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Screen.LEADERBOARD_ANALYST_STACKSCREEN}
        component={LeaderboardAnalyst}
        options={{
          title: 'Experts',
          headerShown: true,
          headerLeft: () => (
            <TopHeaderLeftButton
              openDrawer={() => navigation.openDrawer()}></TopHeaderLeftButton>
          ),
          headerRight: () => (
            <TopHeaderRightButton
              openNotifications={() =>
                navigation.dispatch(
                  CommonActions.navigate(ScreenNames.NOTIFICATION),
                )
              }></TopHeaderRightButton>
          ),
        }}
      />
    </RootStack.Navigator>
  );
};
