import React from 'react';
import {RootStack, Screen, ScreenNames} from '../RootNavigation';
import SignalBuySellPost from '../../screens/SignalBuySellPost';
import TopHeaderLeftButton from '../../templates/TopHeaderLeftButton';
import TopHeaderRightButton from '../../templates/TopHeaderRightButton';
import {CommonActions} from '@react-navigation/native';

export const SignalBuySellPostStackScreen = ({navigation}: any) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Screen.SIGNAL_BUY_SELL_POST_STACKSCREEN}
        component={SignalBuySellPost}
        //options={{headerShown: false}}
        options={{
          title: 'Create Signal',
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
