import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {AuthRepositry} from '../services/AuthRepositry';
import {RootReducerState as RootState} from '../redux/reducers';
import RootStackNavigator from './RootNavigation';
import AuthStackNavigator from './AuthNavigation';

interface IRouter {
  loggedIn: boolean;
}
interface IRouterDispatchProps {
  login: Function;
}

const mapStateToProps = ({userReducer}: RootState): IRouter => {
  return {
    loggedIn: userReducer.loggedIn,
  };
};

const mapDispatchToProps = (dispatch: any): IRouterDispatchProps => {
  return {
    login: async () => {
      return await dispatch(
        AuthRepositry.login({
          email: 'email',
          password: 'pwd',
          returnSecureToken: true,
        }),
      );
    },
  };
};

interface IProps extends IRouter, IRouterDispatchProps {}
const AppRouter = (props: IProps) => {
  // useEffect(() => {
  //   onAuthStateChangedRelogin();
  // }, []);

  // const onAuthStateChangedRelogin = async () => {
  //   if (props.loggedIn) {
  //     return;
  //   }
  //   const resp = await AsyncStorageService.getUser();
  //   if (resp != null) {
  //     const enableNotificationsAsync = async () => {
  //       await props.login();
  //       // await checkNotifactionPermisson();
  //     };
  //     enableNotificationsAsync().catch(console.error);
  //   }
  // const darkThemeCheck = await AsyncStorageService.checkIfDarkTheme();
  // if (darkThemeCheck != null) {
  //   if (darkThemeCheck == isThemeDark) {
  //     toggleTheme();
  //   }
  // }
  // };

  // if (props.isLoading) {
  //   return <ActivityIndicatorloader />;
  // }

  return (
    <NavigationContainer>
      {props.loggedIn ? <RootStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
