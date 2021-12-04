import React from 'react';
import NotificationScreen from '../../screens/Notification/NotificationScreen';
import {RootStack, Screen} from '../RootNavigation';

export const NotificationStackScreen = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Screen.NOTIFICATION_SCREEN}
        component={NotificationScreen}
        options={{
          title: 'Notifications',
          headerShown: true,
        }}
      />
    </RootStack.Navigator>
  );
};
