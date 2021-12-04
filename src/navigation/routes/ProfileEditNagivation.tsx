import React from 'react';
import {RootStack, Screen, ScreenNames} from '../RootNavigation';
import ProfileForm from '../../components/UserProfile/ProfileForm';
import TopHeaderLeftButton from '../../templates/TopHeaderLeftButton';
import TopHeaderRightButton from '../../templates/TopHeaderRightButton';
import {CommonActions} from '@react-navigation/native';
import TopHeaderBackButton from '../../templates/TopHeaderBackButton';

interface Props {
  route: any;
  navigation: any;
}
export const ProfileEditStackScreen = ({route, navigation}: Props) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Screen.PROFILE_EDIT_STACKSCREEN}
        options={{
          title: 'Edit Profile',
          headerShown: true,
          headerLeft: Props => (
            <TopHeaderBackButton
              {...Props}
              route={route}
              navigation={navigation}
            />
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
          <ProfileForm {...Props} navigation={navigation} route={route} />
        )}
      </RootStack.Screen>
    </RootStack.Navigator>
  );
};
