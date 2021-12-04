import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../components/Drawer/DrawerContent';
// import MainTabScreen from './MainBottonTab';
// import {ManageAnalystClientsStackScreen} from './routes/ManageAnalystClientsNavigation';
// import {ProfileDetailsStackScreen} from './routes/ProfileDetailsNavigation';
// import {SupportStackScreen} from './routes/SupportNavigation';
// import {ProfileEditStackScreen} from './routes/ProfileEditNagivation';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {JobsHomeStackScreen} from './routes/JobsHomeNavigation';
import {IUserServerAuthDataResponse} from '../models/user/UserAuth';
import {NotificationStackScreen} from './routes/NotificationNavigation';

export enum ScreenNames {
  JOBSHOME = 'jobshome',
  NOTIFICATION = 'Notification',
}

export enum Screen {
  JOBSHOME_STACKSCREEN = 'JobsHomeStackScreen',
  NOTIFICATION_SCREEN = 'NotificationScreen',
}

export type RootStackParamList = {
  [Screen.JOBSHOME_STACKSCREEN]: {id: IUserServerAuthDataResponse['id']};
  [Screen.NOTIFICATION_SCREEN]: {id: IUserServerAuthDataResponse['id']};
  MainTabScreen: undefined;
};
export type RootStackParamListMain = {
  [ScreenNames.JOBSHOME]: {id: IUserServerAuthDataResponse['id']};
  [ScreenNames.NOTIFICATION]: {id: IUserServerAuthDataResponse['id']};
  MainTabScreen: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const Drawer = createDrawerNavigator<RootStackParamListMain>();
  const loggedIn = useSelector((state: any) => state.userReducer.loggedIn);

  return (
    <Drawer.Navigator
      drawerContent={(props: any) => {
        return loggedIn ? <DrawerContent {...props} /> : <></>;
      }}>
      <Drawer.Screen
        options={{headerShown: false}}
        name={ScreenNames.NOTIFICATION}
        component={NotificationStackScreen}
      />
      {/* <Drawer.Screen
        options={{headerShown: false}}
        name="MainTabScreen"
        component={MainTabScreen}
      /> */}
      <Drawer.Screen
        options={{headerShown: false}}
        name={ScreenNames.JOBSHOME}
        component={JobsHomeStackScreen}
      />
    </Drawer.Navigator>
  );
};
export default RootStackNavigator;
