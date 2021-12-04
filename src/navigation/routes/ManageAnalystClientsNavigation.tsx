import React from 'react';
import {RootStack, Screen, ScreenNames} from '../RootNavigation';
import ManageAnalystClients from '../../screens/ManageAnalystClients';
import TopHeaderLeftButton from '../../templates/TopHeaderLeftButton';
import TopHeaderRightButton from '../../templates/TopHeaderRightButton';
import {CommonActions} from '@react-navigation/native';

interface Props {
  route: any;
  navigation: any;
}
export const ManageAnalystClientsStackScreen = ({route, navigation}: Props) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Screen.MANAGEANALYST_CLIENTS_STACKSCREEN}
        options={{
          title: 'Manage Clients',
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
        }}>
        {Props => (
          <ManageAnalystClients
            {...Props}
            navigation={navigation}
            route={route}
          />
        )}
      </RootStack.Screen>
    </RootStack.Navigator>
  );
};
