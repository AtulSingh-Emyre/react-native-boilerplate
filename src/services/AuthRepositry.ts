/* eslint-disable @typescript-eslint/no-unused-vars */
import {UserActions} from '../redux/actions/UserActions';
import {Api} from './Api';
import {AsyncStorageService} from './AsyncStorage';
import {User} from '../models/user';

export class AuthRepositry {
  static login(data: {
    email: string;
    password: string;
    returnSecureToken: boolean;
  }): (dispatch: any) => Promise<User> {
    return async (dispatch: any) => {
      try {
        dispatch(UserActions.LoginRequestAction());
        const user: User = {email: 'atulsingh.pks@gmail.com', idToken: 'abcd'};
        // await Api.login(data);
        dispatch(UserActions.LoginRequestSuccessAction(user));
        await AsyncStorageService.setUser({
          email: user.email,
          idToken: user.idToken,
        });
        return user;
      } catch (e) {
        console.log(e);
        dispatch(UserActions.UserErrorOccurred());
        return Promise.reject(e);
      }
    };
  }
  static updateUser(user: any) {
    return async (dispatch: any) => {
      try {
        dispatch(UserActions.UserUpdateAction(user));
        return;
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  static logout() {
    return async (dispatch: any) => {
      await AsyncStorageService.clearUser();
      dispatch(UserActions.UserLogoutAction());
      return;
    };
  }
}
