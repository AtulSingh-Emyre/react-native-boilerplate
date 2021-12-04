import React from 'react';
import {RootStack, Screen, ScreenNames} from '../RootNavigation';
import Support from '../../screens/Support';
import TopHeaderLeftButton from '../../templates/TopHeaderLeftButton';
import TopHeaderRightButton from '../../templates/TopHeaderRightButton';
import {CommonActions} from '@react-navigation/native';

export const SupportStackScreen = ({navigation}: any) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Screen.SUPPORT_STACKSCREEN}
        component={Support}
        options={{
          title: 'Support',
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
