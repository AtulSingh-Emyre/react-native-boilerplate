import React from 'react';
import {RootStack, Screen, ScreenNames} from '../RootNavigation';
import BuySellSignalView from '../../screens/BuySellSignalView';
import TopHeaderLeftButton from '../../templates/TopHeaderLeftButton';
import TopHeaderRightButton from '../../templates/TopHeaderRightButton';
import {CommonActions} from '@react-navigation/native';

export const BuySellSignalViewStackScreen = ({navigation}: any) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Screen.BUY_SELL_SIGNAL_VIEW_STACKSCREEN}
        component={BuySellSignalView}
        options={{
          title: 'Signal',
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
