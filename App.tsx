/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import Store from './src/redux/reducers';
// import {StyleSheet} from 'react-native';
import AppRouter from './src/navigation/Routes';

function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <ReduxProvider store={Store}>
        {/* <NavigationContainer> */}
          <AppRouter />
          {/* <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen
              name="Notifications"
              component={NotificationsScreen}
            />
          </Drawer.Navigator> */}
        {/* </NavigationContainer> */}
      </ReduxProvider>
    </PaperProvider>
  );
}
