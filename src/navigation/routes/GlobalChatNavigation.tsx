import React from 'react';
import {RootStack, Screen, ScreenNames} from '../RootNavigation';
import GlobalChatScreen from '../../screens/GlobalChatScreen';
import TopHeaderLeftButton from '../../templates/TopHeaderLeftButton';
import TopHeaderRightButton from '../../templates/TopHeaderRightButton';
import { CommonActions } from '@react-navigation/native'

export const GlobalChatStackScreen = ({navigation}: any) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Screen.GLOBAL_CHAT_STACKSCREEN}
        component={GlobalChatScreen}
        options={{
          title: 'chat',
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
