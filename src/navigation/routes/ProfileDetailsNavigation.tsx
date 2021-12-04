import React from 'react';
import {RootStack, Screen, ScreenNames} from '../RootNavigation';
import ProfileDetails from '../../screens/ProfileDetails';
import TopHeaderLeftButton from '../../templates/TopHeaderLeftButton';
import TopHeaderRightButton from '../../templates/TopHeaderRightButton';
import {CommonActions} from '@react-navigation/native';

interface Props {
  route: any;
  navigation: any;
}
export const ProfileDetailsStackScreen = ({route, navigation}: Props) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Screen.PROFILE_DETAILS_STACKSCREEN}
        options={{
          title: 'Profile',
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
          <ProfileDetails {...Props} navigation={navigation} route={route} />
        )}
      </RootStack.Screen>
    </RootStack.Navigator>
  );
};
