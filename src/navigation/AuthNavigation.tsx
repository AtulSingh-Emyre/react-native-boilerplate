import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Authentication/LoginScreen';
import AuthHome from '../screens/Authentication/AuthHome';
import RegisterScreen from '../screens/Authentication/RegisterScreen';
import ForgotPassword from '../screens/Authentication/ForgotPassword';

const AuthStack = createStackNavigator();

export enum ScreenNames {
  LOGIN = 'Login',
  LOGINHOME = 'Login Home Page',
  REGISTER = 'Register',
  FORGOTPASSWORD = 'Forgot Password',
}

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName={ScreenNames.LOGIN}>
      <AuthStack.Screen
        name={ScreenNames.LOGIN}
        component={LoginScreen}
        initialParams={{route: {params: {state: false}}}}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={ScreenNames.LOGINHOME}
        component={AuthHome}
        initialParams={{route: {params: {state: false}}}}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={ScreenNames.REGISTER}
        component={RegisterScreen}
        initialParams={{route: {params: {state: false}}}}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={ScreenNames.FORGOTPASSWORD}
        component={ForgotPassword}
        initialParams={{route: {params: {state: false}}}}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
export default AuthStackNavigator;
